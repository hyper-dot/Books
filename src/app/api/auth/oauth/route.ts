import { NextRequest, NextResponse } from "next/server";
import { OAuth2Client } from "google-auth-library";
import User from "@/server/models/User";
import { encrypt } from "@/lib/auth";
import { connectdb } from "@/lib/db";

export const POST = async () => {
  const oauthClient = new OAuth2Client(
    process.env.CLIENT_ID,
    process.env.CLIENT_SECRET,
    process.env.REDIRECT_URL,
  );

  const authorizeUrl = oauthClient.generateAuthUrl({
    access_type: "offline",
    scope:
      "https://www.googleapis.com/auth/userinfo.profile https://www.googleapis.com/auth/userinfo.email openid ",
    // prompt: "consent",
  });

  const response = NextResponse.json({ url: authorizeUrl });
  response.headers.set("Referer-Policy", "no-referer-when-downgrade");
  return response;
};

// GET USER DATA
const getUserData: any = async (token: string) => {
  const res = await fetch(
    `https://www.googleapis.com/oauth2/v3/userinfo?access_token=${token}`,
    { cache: "no-store" },
  );
  const data = await res.json();
  return data;
};

export const GET = async (req: NextRequest) => {
  try {
    const params = req.nextUrl.searchParams;
    const code = params.get("code");
    const nextUrl = params.get("nextUrl");

    const oauthClient = new OAuth2Client(
      process.env.CLIENT_ID,
      process.env.CLIENT_SECRET,
      process.env.REDIRECT_URL,
    );

    const res = await oauthClient.getToken(code!);
    await oauthClient.setCredentials(res.tokens);
    const user = oauthClient.credentials;

    // SETUP RESPONSE OBJECT
    const redirectUrl = new URL(`${req.nextUrl.origin}/dashboard`);
    const response = NextResponse.redirect(redirectUrl);

    // EXTRACT NECESSARY INFO FROM GOOGLE
    const { sub, name, picture, email } = await getUserData(user.access_token!);

    // Find user with that google id and if not user create a user
    await connectdb();
    const existingUser = await User.findOne({ googleId: sub, email });

    // Encrypt data and return
    if (existingUser) {
      const { _id, name, email, picture } = existingUser;
      const expires = new Date(Date.now() + 10 * 1000);
      const payload = {
        id: _id.toString(),
        name,
        email,
        picture,
        expires,
      };
      const session = await encrypt(payload);
      response.cookies.set("session", session, { httpOnly: true, expires });
      return response;
    }

    // Create new user & Encrypt data and return
    const newUser = new User({ name, picture, email, googleId: sub });
    const savedUser = await newUser.save();
    const expires = new Date(Date.now() + 10 * 1000); // 10 sec from now

    const payload = {
      id: savedUser._id.toString(),
      name: savedUser.name,
      email: savedUser.email,
      picture: savedUser.picture,
      expires,
    };
    const session = await encrypt(payload);
    response.cookies.set("session", session, { httpOnly: true, expires });

    return response;
  } catch (err) {
    console.log(err);
    return NextResponse.json(
      { message: "Internal server error" },
      { status: 500 },
    );
  }
};
