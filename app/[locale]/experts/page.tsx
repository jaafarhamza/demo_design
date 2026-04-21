import ExpertsPage from "../../experts/page";
import { isLocale } from "../../i18n";

export default async function LocalizedExpertsPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;

  return <ExpertsPage locale={isLocale(locale) ? locale : undefined} />;
}
