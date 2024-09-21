"use server";
import { SignJWT, jwtVerify } from "jose";
import { cookies } from "next/headers";
import { NextRequest, NextResponse } from "next/server";
import { unstable_noStore as noStore, revalidatePath } from "next/cache";
import { redirect } from "next/navigation";
import { r } from "@/config/request";
import { handleUnauthorized } from "@/lib/auth.lib";

const secretKey = process.env.JWT_SECRET;
const key = new TextEncoder().encode(secretKey);

export async function encrypt(payload: any) {
  return await new SignJWT(payload)
    .setProtectedHeader({ alg: "HS256" })
    .setIssuedAt()
    .setExpirationTime("30h")
    .sign(key);
}

export async function decrypt(input: string): Promise<any> {
  const { payload } = await jwtVerify(input, key, {
    algorithms: ["HS256"],
  });
  return payload;
}

export async function logout() {
  // Destroy the session
  cookies().set("session", "", { expires: new Date(0) });
  cookies().set("token", "", { expires: new Date(0) });
  cookies().set("refresh", "", { expires: new Date(0) });
  redirect("/");
}

export async function getSession() {
  noStore();
  const session = cookies().get("session")?.value;
  if (!session) return;
  try {
    return await decrypt(session);
  } catch (err) {
    return;
  }
}

export async function checkSession({ request }: { request: NextRequest }) {
  try {
    // GET new session from the backend
    await r.post({
      endpoint: "/auth/refresh",
      payload: { refreshToken: request.cookies.get("refresh")?.value },
    });
    // RETURN
    return NextResponse.next();
  } catch (err) {
    console.log(err);
    return handleUnauthorized(request);
  }
}

type Response = {
  message?: string;
  error?: string;
  code: number;
};

export async function refreshToken() {
  try {
    const cookieJar = cookies();
    const refresh = cookieJar.get("refresh");

    if (refresh?.value) {
      const newSession = await r.post({
        endpoint: "/auth/refresh",
        payload: { refreshToken: refresh.value },
      });
      const { accessToken } = newSession;
      cookieJar.set("token", accessToken, {
        httpOnly: true,
        expires: new Date(Date.now() + 15 * 1000),
      });
      console.log("Cookie refreshed successfully !!");
    }
  } catch (err) {
    console.log("ERROR WHILE REFRESHING TOKEN", err);
  }
}

export const login = async (payload: any): Promise<Response> => {
  try {
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_BACKEND_URL}/auth/login`,
      {
        method: "POST",
        body: JSON.stringify(payload),
        headers: { "Content-Type": "application/json" },
      },
    );

    if (!res.ok) {
      const data = await res.json();
      console.log(data);

      switch (true) {
        case res.status === 403:
          return {
            error: "Please verify OTP first",
            code: res.status,
          };
        case res.status >= 400 && res.status < 500:
          return {
            error: data.message || "Something went wrong",
            code: res.status,
          };
        case res.status >= 500:
          return {
            error: "Internal server error",
            code: res.status,
          };
        default:
          return {
            error: data.message || "Something went wrong !!",
            code: res.status,
          };
      }
    } else {
      const data = await res.json();
      const session = await encrypt(data);

      cookies().set("token", data.accessToken);
      cookies().set("refresh", data.user.refreshToken);
      cookies().set("session", session, {
        httpOnly: true,
        expires: new Date(Date.now() + 24 * 60 * 1000),
      });
      revalidatePath("/", "layout");

      return {
        code: res.status,
        message: "You have been loggedin successfully !!",
      };
    }
  } catch (err: any) {
    return {
      code: err.code || 500,
      error: err.message || "couldn't connect to server",
    };
  }
};
