import { NextRequest, NextResponse } from "next/server";
import { handleUnauthorized, isPrivateRoute } from "@/lib/auth.lib";
import { getSession, updateSession } from "@/action/auth.action";

export async function middleware(request: NextRequest) {
  const pathname = request.nextUrl.pathname;
  if (/\.(png|svg|jpg|webp|)$/.test(pathname)) return;

  if (isPrivateRoute(pathname)) {
    const session = await getSession();
    if (!session) {
      return handleUnauthorized(request);
    }
    return updateSession({ request, session });
  }

  const response = NextResponse.next();
  return response;
}

export const config = {
  matcher: ["/((?!_next|api|favicon.ico).*)"],
};
