"use server";
import { SignJWT, jwtVerify } from "jose";
import { cookies } from "next/headers";
import { NextRequest, NextResponse } from "next/server";
import { unstable_noStore as noStore, revalidatePath } from "next/cache";
import { redirect } from "next/navigation";
import { r } from "@/config/request";
import { handleUnauthorized } from "@/lib/auth.lib";
import { apiClient } from "@/config/axios";

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
    const refreshToken = request.cookies.get("refresh")?.value;
    const { data } = await apiClient.post("/auth/refresh", { refreshToken });
    const response = NextResponse.next();
    response.cookies.set("token", data?.data?.accessToken);
    return response;
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
    const refreshToken = cookieJar.get("refresh")?.value;

    if (refreshToken) {
      const { data } = await apiClient.post("/auth/refresh", { refreshToken });
      cookieJar.set("token", data?.data?.accessToken, {
        expires: new Date(Date.now() + 15 * 1000),
      });
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

      switch (true) {
        case res.status === 403:
          return {
            error: "Please verify OTP first",
            code: res.status,
          };
        case res.status === 401:
          return {
            error: data.error,
            code: res.status,
          };
        case res.status >= 400 && res.status < 500:
          return {
            error: data.error || "Something went wrong",
            code: res.status,
          };
        case res.status >= 500:
          return {
            error: data.error || "Internal server error",
            code: res.status,
          };
        default:
          return {
            error: data.error || "Something went wrong !!",
            code: res.status,
          };
      }
    } else {
      const data = await res.json();
      cookies().set("token", data?.data?.accessToken);
      cookies().set("refresh", data?.data?.refreshToken, { secure: true });
      revalidatePath("/", "layout");

      return {
        code: res.status,
        message: "You have been loggedin successfully !!",
      };
    }
  } catch (err: any) {
    console.log("Error while logging in", err);
    return {
      code: err.code || 500,
      error: err.error || "couldn't connect to server",
    };
  }
};
