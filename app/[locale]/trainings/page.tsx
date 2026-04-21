import TrainingsPage from "../../trainings/page";
import { isLocale } from "../../i18n";

export default async function LocalizedTrainingsPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;

  return <TrainingsPage locale={isLocale(locale) ? locale : undefined} />;
}
