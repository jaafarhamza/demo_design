import { cookies } from "next/headers";
import { notFound } from "next/navigation";
import { SiteFooter } from "../components/site-footer";
import { SiteHeader } from "../components/site-header";
import { isLocale } from "../i18n";

type ThemePreference = "light" | "dark";

export default async function LocaleLayout({
  children,
  params,
}: Readonly<{
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}>) {
  const { locale } = await params;

  if (!isLocale(locale)) {
    notFound();
  }

  const cookieStore = await cookies();
  const initialTheme: ThemePreference =
    cookieStore.get("indh-theme")?.value === "dark" ? "dark" : "light";

  return (
    <div className="flex min-h-full flex-col">
      <SiteHeader initialTheme={initialTheme} locale={locale} />
      {children}
      <SiteFooter locale={locale} />
    </div>
  );
}
