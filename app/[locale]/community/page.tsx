import CommunityPage from "../../community/page";
import { isLocale } from "../../i18n";

export default async function LocalizedCommunityPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;

  return <CommunityPage locale={isLocale(locale) ? locale : undefined} />;
}
