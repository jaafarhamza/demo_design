import { cookies, headers } from "next/headers";
import { DEFAULT_LOCALE, LOCALE_COOKIE, LOCALE_HEADER, Locale, isLocale } from "./i18n";

export async function getRequestLocale(): Promise<Locale> {
  const headerStore = await headers();
  const localeFromHeader = headerStore.get(LOCALE_HEADER);
  if (isLocale(localeFromHeader)) {
    return localeFromHeader;
  }

  const cookieStore = await cookies();
  const localeFromCookie = cookieStore.get(LOCALE_COOKIE)?.value;
  if (isLocale(localeFromCookie)) {
    return localeFromCookie;
  }

  return DEFAULT_LOCALE;
}

export function tr(locale: Locale, fr: string, ar: string): string {
  return locale === "ar" ? ar : fr;
}
