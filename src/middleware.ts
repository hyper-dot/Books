import { NextResponse } from "next/server";
import { NextRequest } from "next/server";
import { getSession, updateSession } from "./lib/auth";
import { redirect } from "next/navigation";

const privatePath = ["/secret"];

export async function middleware(request: NextRequest) {
  const pathName = request.nextUrl.pathname;

  // Allow all images
  if (/\.(png|svg|jpg|webp|mp3|geojson)$/.test(pathName)) return;

  if (privatePath.includes(pathName)) {
    const origin = request.nextUrl.origin;
    const nextUrl = request.nextUrl.href;
    const redirectUrl = new URL(`${origin}/signin/?nextTo=${nextUrl}`);
    const payload = await getSession();
    if (!payload) return NextResponse.redirect(new URL(redirectUrl));

    // If there is nextUrl then return to nextUrl
    const nextTo = request.nextUrl.searchParams.get("nextTo");
    if (nextTo) return NextResponse.redirect(new URL(nextTo));
    // return NextResponse.redirect()
  }

  const res = await updateSession(request);
  return res;
}

export const config = {
  matcher: [
    /*
     * Match all request paths except for the ones starting with:
     * - api (API routes)
     * - _next/static (static files)
     * - _next/image (image optimization files)
     * - favicon.ico (favicon file)
     */
    "/((?!api|_next/static|_next/image|favicon.ico).*)",
  ],
};
