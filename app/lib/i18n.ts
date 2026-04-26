export const SUPPORTED_LOCALES = ["fr", "ar"] as const;

export type Locale = (typeof SUPPORTED_LOCALES)[number];

export const DEFAULT_LOCALE: Locale = "fr";
export const LOCALE_COOKIE = "indh-locale";
export const LOCALE_HEADER = "x-locale";

export function isLocale(value: string | null | undefined): value is Locale {
  if (!value) {
    return false;
  }
  return SUPPORTED_LOCALES.includes(value as Locale);
}

export function getDirection(locale: Locale): "ltr" | "rtl" {
  return locale === "ar" ? "rtl" : "ltr";
}

export function stripLocaleFromPathname(pathname: string): string {
  const safePathname = pathname.startsWith("/") ? pathname : `/${pathname}`;
  const parts = safePathname.split("/");
  const maybeLocale = parts[1];

  if (!isLocale(maybeLocale)) {
    return safePathname;
  }

  const stripped = `/${parts.slice(2).join("/")}`.replace(/\/{2,}/g, "/");
  return stripped === "/" || stripped === "" ? "/" : stripped;
}

export function localizePath(pathname: string, locale: Locale): string {
  const stripped = stripLocaleFromPathname(pathname);
  return stripped === "/" ? `/${locale}` : `/${locale}${stripped}`;
}

export function detectLocaleFromAcceptLanguage(
  acceptLanguageHeader: string | null,
): Locale {
  if (!acceptLanguageHeader) {
    return DEFAULT_LOCALE;
  }

  const normalized = acceptLanguageHeader.toLowerCase();
  if (normalized.includes("ar")) {
    return "ar";
  }

  return DEFAULT_LOCALE;
}
