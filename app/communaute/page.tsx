import type { Metadata } from "next";
import { CommunityHubPage } from "./ui/community-hub-page";
import { getRequestLocale, tr } from "../lib/request-locale";

export async function generateMetadata(): Promise<Metadata> {
  const locale = await getRequestLocale();
  return {
    title: tr(locale, "Communaute | INDH Digitale", "المجتمع | INDH Digitale"),
    description: tr(
      locale,
      "Communaute INDH Digitale: salons thematiques, echanges entre porteurs de projets et assistant IA.",
      "مجتمع INDH Digitale: قنوات موضوعية، تبادل بين حاملي المشاريع ومساعد ذكي.",
    ),
  };
}

export default async function CommunautePage() {
  const locale = await getRequestLocale();
  return <CommunityHubPage locale={locale} />;
}
