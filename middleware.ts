import type { NextRequest } from "next/server";
import { NextResponse } from "next/server";
import {
  LOCALE_COOKIE,
  LOCALE_HEADER,
  SUPPORTED_LOCALES,
  detectLocaleFromAcceptLanguage,
  isLocale,
  localizePath,
  stripLocaleFromPathname,
} from "./app/lib/i18n";

const PUBLIC_FILE = /\.[^/]+$/;

function resolvePreferredLocale(request: NextRequest) {
  const localeFromCookie = request.cookies.get(LOCALE_COOKIE)?.value;
  if (isLocale(localeFromCookie)) {
    return localeFromCookie;
  }

  return detectLocaleFromAcceptLanguage(request.headers.get("accept-language"));
}

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;

  if (
    pathname.startsWith("/_next") ||
    pathname.startsWith("/api") ||
    PUBLIC_FILE.test(pathname)
  ) {
    return NextResponse.next();
  }

  const localeInPath = SUPPORTED_LOCALES.find(
    (locale) => pathname === `/${locale}` || pathname.startsWith(`/${locale}/`),
  );

  if (!localeInPath) {
    const locale = resolvePreferredLocale(request);
    const redirectUrl = request.nextUrl.clone();
    redirectUrl.pathname = localizePath(pathname, locale);
    return NextResponse.redirect(redirectUrl);
  }

  const rewriteUrl = request.nextUrl.clone();
  rewriteUrl.pathname = stripLocaleFromPathname(pathname);

  const requestHeaders = new Headers(request.headers);
  requestHeaders.set(LOCALE_HEADER, localeInPath);

  const response = NextResponse.rewrite(rewriteUrl, {
    request: {
      headers: requestHeaders,
    },
  });

  response.cookies.set(LOCALE_COOKIE, localeInPath, {
    path: "/",
    maxAge: 60 * 60 * 24 * 365,
    sameSite: "lax",
  });

  return response;
}

export const config = {
  matcher: ["/((?!api|_next/static|_next/image|.*\\..*).*)"],
};
