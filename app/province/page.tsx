import type { Metadata } from "next";
import { getRequestLocale, tr } from "../lib/request-locale";
import { ProvinceExplorerPage } from "./ui/province-explorer-page";

export async function generateMetadata(): Promise<Metadata> {
  const locale = await getRequestLocale();
  return {
    title: tr(locale, "Provinces | INDH Digitale", "الأقاليم | INDH Digitale"),
    description: tr(
      locale,
      "Explorez les communautes, activites et experts INDH par province avec une interface immersive et moderne.",
      "استكشف المجتمعات والأنشطة وخبراء INDH حسب الإقليم عبر واجهة حديثة وتفاعلية.",
    ),
  };
}

export default async function ProvincePage() {
  const locale = await getRequestLocale();
  return <ProvinceExplorerPage locale={locale} />;
}
