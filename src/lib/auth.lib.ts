import { NextRequest, NextResponse } from "next/server";

const privateRoutes = ["/dashboard"];

export function isPrivateRoute(pathname: string): boolean {
  for (const path of privateRoutes) {
    if (pathname.startsWith(path)) return true;
  }
  return false;
}

export const handleUnauthorized = (req: NextRequest) => {
  const res = NextResponse.redirect(req.nextUrl.origin + "/login");
  res.cookies.delete("session");
  return res;
};
