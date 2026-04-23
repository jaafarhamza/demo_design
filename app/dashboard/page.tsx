import type { Metadata } from "next";
import { AdminDashboardPage } from "./ui/admin-dashboard-page";

export const metadata: Metadata = {
  title: "Dashboard Admin | INDH Digitale",
  description:
    "Tableau de bord administrateur INDH Digitale avec statistiques, filtres et suivi des activites.",
};

export default function DashboardPage() {
  return <AdminDashboardPage />;
}
