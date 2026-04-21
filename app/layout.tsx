import type { Metadata } from "next";
import { cookies } from "next/headers";
import { Changa, Geist_Mono, IBM_Plex_Sans_Arabic } from "next/font/google";
import { defaultLocale, getDirection, isLocale } from "./i18n";
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
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const cookieStore = await cookies();
  const initialTheme = cookieStore.get("indh-theme")?.value === "dark" ? "dark" : "light";
  const cookieLocale = cookieStore.get("indh-locale")?.value;
  const locale = cookieLocale && isLocale(cookieLocale) ? cookieLocale : defaultLocale;
  const direction = getDirection(locale);

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
      <body className="min-h-full bg-background text-foreground font-sans selection:bg-brand/20 selection:text-brand-emphasis">
        {children}
      </body>
    </html>
  );
}
