import { isLocale, type Locale } from "../i18n";
import { LocalizedHomePage } from "../components/localized-home-page";

export default async function LocalizedHomeRoute({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const safeLocale: Locale = isLocale(locale) ? locale : "fr";

  return <LocalizedHomePage locale={safeLocale} />;
}
