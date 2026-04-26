import { redirect } from "next/navigation";
import { localizePath } from "../lib/i18n";
import { getRequestLocale } from "../lib/request-locale";

export default async function DashbordAliasPage() {
  const locale = await getRequestLocale();
  redirect(localizePath("/dashboard", locale));
}
