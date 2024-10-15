"use server";
import { cookies } from "next/headers";
import { NextRequest, NextResponse } from "next/server";
import { unstable_noStore as noStore, revalidatePath } from "next/cache";
import { redirect } from "next/navigation";
import { handleUnauthorized } from "@/lib/auth.lib";
import { apiClient } from "@/config/axios";
import axios, { AxiosError } from "axios";

const EXPIRES = new Date(Date.now() + 15 * 60 * 1000);

export async function logout() {
  // Destroy the session
  cookies().set("token", "", { expires: new Date(0) });
  cookies().set("refresh", "", { expires: new Date(0) });
  redirect("/");
}

export async function getSession() {
  const accessToken = cookies().get("token")?.value;
  const refreshToken = cookies().get("refresh")?.value;
  if (!accessToken || !refreshToken) return;
  return { accessToken, refreshToken };
}

// Updates session in middleware
export async function updateSession(req: NextRequest) {
  const refreshToken = req.cookies.get("refresh")?.value;
  try {
    const { data } = await axios.post(
      process.env.NEXT_PUBLIC_BACKEND_URL + "/auth/refresh",
      {
        refreshToken,
      },
    );
    const response = NextResponse.next();
    response.cookies.set("token", data.data.accessToken, {
      expires: EXPIRES,
      secure: true,
    });
    return response;
  } catch (err) {
    if (err instanceof AxiosError) {
      console.log(err.response?.data);
    }
    return handleUnauthorized(req);
  }
}

export async function refreshToken() {
  try {
    const cookieJar = cookies();
    const refreshToken = cookieJar.get("refresh")?.value;

    if (refreshToken) {
      const { data } = await apiClient.post("/auth/refresh", { refreshToken });
      cookieJar.set("token", data?.data?.accessToken, {
        expires: EXPIRES,
        secure: true,
      });
    }
    return true;
  } catch (err) {
    console.log("ERROR WHILE REFRESHING TOKEN", err);
  }
}

export const login = async (payload: any): Promise<any> => {
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
      cookies().set("token", data?.data?.accessToken, {
        secure: true,
        expires: EXPIRES,
      });
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
