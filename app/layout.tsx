import type { Metadata } from "next";
import { cookies, headers } from "next/headers";
import { Changa, Geist_Mono, IBM_Plex_Sans_Arabic } from "next/font/google";
import { SiteFooter } from "./components/site-footer";
import { SiteHeader } from "./components/site-header";
import {
  DEFAULT_LOCALE,
  LOCALE_COOKIE,
  LOCALE_HEADER,
  getDirection,
  isLocale,
} from "./lib/i18n";
import "./globals.css";

const ibmPlexSansArabic = IBM_Plex_Sans_Arabic({
  variable: "--font-ibm-plex-sans-arabic",
  subsets: ["arabic", "latin", "latin-ext"],
  weight: ["300", "400", "500", "600", "700"],
  display: "swap",
  fallback: ["system-ui", "sans-serif"],
});

const changa = Changa({
  variable: "--font-changa",
  subsets: ["arabic", "latin", "latin-ext"],
  display: "swap",
  fallback: ["system-ui", "sans-serif"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "INDH Digitale",
  description:
    "Plateforme web moderne pour la formation, l'accompagnement et le suivi des porteurs de projets.",
  alternates: {
    languages: {
      fr: "/fr",
      ar: "/ar",
      "x-default": "/fr",
    },
  },
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const headerStore = await headers();
  const localeFromHeader = headerStore.get(LOCALE_HEADER);
  const cookieStore = await cookies();
  const localeFromCookie = cookieStore.get(LOCALE_COOKIE)?.value;
  const locale = isLocale(localeFromHeader)
    ? localeFromHeader
    : isLocale(localeFromCookie)
      ? localeFromCookie
      : DEFAULT_LOCALE;
  const direction = getDirection(locale);
  const initialTheme = cookieStore.get("indh-theme")?.value === "dark" ? "dark" : "light";

  return (
    <html
      lang={locale}
      dir={direction}
      suppressHydrationWarning
      data-theme={initialTheme}
      style={{ colorScheme: initialTheme }}
      className={`${ibmPlexSansArabic.variable} ${changa.variable} ${geistMono.variable} ${
        initialTheme === "dark" ? "dark" : ""
      } h-full antialiased`}
    >
      <head>
        <meta name="color-scheme" content="light dark" />
      </head>
      <body className="min-h-full bg-background text-foreground font-sans selection:bg-brand selection:text-brand-emphasis">
        <div className="flex min-h-full flex-col">
          <SiteHeader initialTheme={initialTheme} locale={locale} />
          {children}
          <SiteFooter locale={locale} />
        </div>
      </body>
    </html>
  );
}
