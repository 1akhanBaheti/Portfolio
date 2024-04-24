import { NextRequest, NextResponse } from "next/server";

export default function middleware(request: NextRequest, response: NextResponse) {
  return NextResponse.next({
    headers: {
      ...request.headers,
      pathname: request.nextUrl.pathname,
    },
  });
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
