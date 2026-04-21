import { NextResponse } from "next/server";
import { defaultLocale, isLocale } from "../../i18n";

export async function POST(request: Request) {
  const body = (await request.json().catch(() => ({}))) as {
    locale?: string;
  };

  const locale =
    body.locale && isLocale(body.locale) ? body.locale : defaultLocale;

  const response = NextResponse.json({ ok: true });
  response.cookies.set("indh-locale", locale, {
    path: "/",
    maxAge: 60 * 60 * 24 * 365,
  });

  return response;
}
