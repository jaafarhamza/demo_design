import type { Metadata } from "next";
import { BenchmarkPage } from "./ui/benchmark-page";

export const metadata: Metadata = {
  title: "Benchmark | INDH Digitale",
  description:
    "Analyse detaillee du projet INDH Digitale et benchmark comparatif avec Khabiry et d'autres plateformes.",
};

export default function BenchmarkRoutePage() {
  return <BenchmarkPage />;
}
