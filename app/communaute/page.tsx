import type { Metadata } from "next";
import { CommunityHubPage } from "./ui/community-hub-page";

export const metadata: Metadata = {
  title: "Communaute | INDH Digitale",
  description:
    "Communaute INDH Digitale: salons thematiques, echanges entre porteurs de projets et assistant IA.",
};

export default function CommunautePage() {
  return <CommunityHubPage />;
}
