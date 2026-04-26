import type { Metadata } from "next";
import { getRequestLocale, tr } from "../lib/request-locale";
import { AdminDashboardPage } from "./ui/admin-dashboard-page";

export async function generateMetadata(): Promise<Metadata> {
  const locale = await getRequestLocale();
  return {
    title: tr(locale, "Dashboard Admin | INDH Digitale", "لوحة الإدارة | INDH Digitale"),
    description: tr(
      locale,
      "Tableau de bord administrateur INDH Digitale avec statistiques, filtres et suivi des activites.",
      "لوحة تحكم إدارية لمنصة INDH Digitale مع الإحصائيات والفلاتر وتتبع الأنشطة.",
    ),
  };
}

export default async function DashboardPage() {
  const locale = await getRequestLocale();
  return <AdminDashboardPage locale={locale} />;
}
