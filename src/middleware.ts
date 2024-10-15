import { NextRequest, NextResponse } from "next/server";
import { isPrivateRoute } from "@/lib/auth.lib";
import { updateSession } from "./action/auth.action";

export async function middleware(request: NextRequest) {
  const pathname = request.nextUrl.pathname;
  if (/\.(png|svg|jpg|webp|)$/.test(pathname)) return;

  if (isPrivateRoute(pathname)) {
    return updateSession(request);
  }

  const response = NextResponse.next();
  return response;
}

export const config = {
  matcher: ["/((?!_next|api|favicon.ico).*)"],
};
