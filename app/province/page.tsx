import type { Metadata } from "next";
import { ProvinceExplorerPage } from "./ui/province-explorer-page";

export const metadata: Metadata = {
  title: "Provinces | INDH Digitale",
  description:
    "Explorez les communautes, activites et experts INDH par province avec une interface immersive et moderne.",
};

export default function ProvincePage() {
  return <ProvinceExplorerPage />;
}
