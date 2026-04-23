"use client";

import Link from "next/link";
import { useMemo, useState } from "react";

type StepStatus = "Fort" | "Moyen" | "A renforcer";
type StepPillar = "Strategie" | "Formation" | "Communaute" | "Operations" | "Conformite";

type ProjectStep = {
  id: string;
  pillar: StepPillar;
  title: string;
  objective: string;
  status: StepStatus;
  alignmentScore: number;
  existing: string[];
  gap: string[];
  nextAction: string;
};

type Criterion = {
  id: "learning" | "mentoring" | "projectTools" | "community" | "admin" | "localization";
  label: string;
};

type Platform = {
  id: string;
  name: string;
  website: string;
  position: string;
  summary: string;
  metrics: Record<Criterion["id"], number>;
  strengths: string[];
  limitations: string[];
};

const projectSteps: ProjectStep[] = [
  {
    id: "01",
    pillar: "Strategie",
    title: "Positionnement et vision projet",
    objective: "Installer INDH Digitale comme plateforme nationale EdTech et accompagnement entrepreneurial.",
    status: "Fort",
    alignmentScore: 90,
    existing: [
      "Narratif clair sur la page accueil.",
      "Branding coherent sur les pages principales.",
      "Nouvelles sections Province et Dashboard admin.",
    ],
    gap: ["Message institutionnel encore peu relie aux indicateurs officiels INDH."],
    nextAction: "Ajouter une section KPIs nationaux et impact social mesure.",
  },
  {
    id: "02",
    pillar: "Formation",
    title: "Catalogue formation et parcours",
    objective: "Fournir des parcours video structurants avec progression claire.",
    status: "Fort",
    alignmentScore: 88,
    existing: [
      "Page /formation avec catalogue segmente.",
      "Pages detail formation et module.",
      "Logique de progression + quiz checkpoints + examen final UX.",
    ],
    gap: ["Donnees encore statiques, pas de moteur LMS reel connecte."],
    nextAction: "Connecter la progression a une base de donnees utilisateur.",
  },
  {
    id: "03",
    pillar: "Communaute",
    title: "Expertise, reseau et entraide",
    objective: "Permettre entraide regionale, interaction experts et coaching continu.",
    status: "Fort",
    alignmentScore: 85,
    existing: [
      "Page /communaute en mode hub collaboratif.",
      "AI chat contextualise dans la page communaute.",
      "Filtres province et blocs mentors/evenements.",
    ],
    gap: ["Pas encore de moderation, roles et gestion de contenus communautaires."],
    nextAction: "Ajouter workflow moderation + permissions par role.",
  },
  {
    id: "04",
    pillar: "Operations",
    title: "Pilotage territorial et reporting",
    objective: "Suivre activites et performances par province avec vue operationnelle.",
    status: "Moyen",
    alignmentScore: 74,
    existing: [
      "Page /province avec filtres et contenus locaux.",
      "Page /dashboard avec filtres multi-axes.",
      "Statistiques dynamiques calculees cote client.",
    ],
    gap: ["Absence de donnees live et exports metier."],
    nextAction: "Brancher API + export CSV/PDF + historique temporel.",
  },
  {
    id: "05",
    pillar: "Conformite",
    title: "Securite, accessibilite et gouvernance",
    objective: "Respecter WCAG 2.2, loi 09-08 et exigences RGPD/CNDP.",
    status: "A renforcer",
    alignmentScore: 58,
    existing: ["Base Next.js propre et architecture evolutive."],
    gap: [
      "Pas de workflow explicite consentement/cookies.",
      "Pas de preuve audit accessibilite ou journalisation admin.",
      "Pas de gestion authentification et autorisation complete.",
    ],
    nextAction: "Plan de conformite en 3 lots: auth/roles, privacy center, audit accessibilite.",
  },
];

const criteria: Criterion[] = [
  { id: "learning", label: "Experience formation" },
  { id: "mentoring", label: "Mentorat expert" },
  { id: "projectTools", label: "Outils projet" },
  { id: "community", label: "Communaute" },
  { id: "admin", label: "Pilotage admin" },
  { id: "localization", label: "Ancrage local / langues" },
];

const platforms: Platform[] = [
  {
    id: "indh",
    name: "INDH Digitale",
    website: "https://indh-digitale.local",
    position: "Plateforme cible nationale INDH",
    summary: "Vision all-in-one: formation, accompagnement, communaute, province et pilotage admin.",
    metrics: {
      learning: 4.2,
      mentoring: 4.3,
      projectTools: 3.6,
      community: 4.1,
      admin: 3.8,
      localization: 4.4,
    },
    strengths: [
      "Orientation forte secteur INDH et besoins terrain marocains.",
      "Experience multi-modules deja construite (formation + tv + communaute + province + dashboard).",
      "Possibilite de personnaliser totalement les parcours et le workflow admin.",
    ],
    limitations: [
      "Fonctionnalites metier encore majoritairement sur donnees mock.",
      "Conformite et securite enterprise a industrialiser.",
    ],
  },
  {
    id: "khabiry",
    name: "Khabiry",
    website: "https://khabiry.com/fr",
    position: "Marketplace experts et contenus",
    summary: "Orientation expertise et partage de connaissance avec offres de consultation et cours.",
    metrics: {
      learning: 3.6,
      mentoring: 4.1,
      projectTools: 2.3,
      community: 2.8,
      admin: 2.7,
      localization: 3.9,
    },
    strengths: [
      "Promesse claire de mise en relation avec des experts.",
      "Structure cours/FAQ deja orientee experience apprenant.",
    ],
    limitations: [
      "Moins focalise sur cycle complet de montage/suivi de projet INDH.",
      "Peu de signaux publics sur pilotage provincial et back-office programme.",
    ],
  },
  {
    id: "openclassrooms",
    name: "OpenClassrooms",
    website: "https://openclassrooms.com/fr",
    position: "Plateforme formation professionnalisante",
    summary: "Reference francophone sur parcours professionnalisants avec mentorat et projets.",
    metrics: {
      learning: 4.7,
      mentoring: 4.8,
      projectTools: 2.7,
      community: 3.1,
      admin: 4.0,
      localization: 2.9,
    },
    strengths: [
      "Excellente structuration pedagogique par projets.",
      "Mentorat individuel formalise et suivi progression robuste.",
    ],
    limitations: [
      "Pas specialise INDH ni workflows administratifs territoriaux marocains.",
      "Approche plus academique que programme social multi-acteurs.",
    ],
  },
  {
    id: "udemy",
    name: "Udemy",
    website: "https://www.udemy.com/",
    position: "Marketplace mondiale e-learning",
    summary: "Tres grande bibliotheque de contenus avec accessibilite forte et parcours auto-rythmes.",
    metrics: {
      learning: 4.5,
      mentoring: 2.4,
      projectTools: 1.9,
      community: 2.3,
      admin: 3.5,
      localization: 4.2,
    },
    strengths: [
      "Volume de contenus et distribution massive.",
      "Experience de consommation cours simple et efficace.",
    ],
    limitations: [
      "Peu de personnalisation institutionnelle sur un programme national cible.",
      "Accompagnement expert limite compare a un modele de coaching INDH.",
    ],
  },
];

const roadmap = [
  {
    phase: "Sprint 1 (0-6 semaines)",
    focus: "Industrialiser le coeur metier",
    actions: [
      "Authentification + roles (apprenant, expert, admin).",
      "Persisting progression formation/module/quiz.",
      "Back-office minimal pour gerer activites et contenus.",
    ],
  },
  {
    phase: "Sprint 2 (6-12 semaines)",
    focus: "Monter en puissance sur les outils projet",
    actions: [
      "Espace projet guide (business model, budget, checklist).",
      "Generation documentaire PDF sur templates INDH.",
      "Systeme rendez-vous expert + confirmation.",
    ],
  },
  {
    phase: "Sprint 3 (12-18 semaines)",
    focus: "Conformite, qualite et scaling",
    actions: [
      "Plan accessibilite WCAG 2.2 AA + audit.",
      "Privacy center (consentement, retention, logs sensibles).",
      "Dashboards analytiques exportables par province.",
    ],
  },
];

const sourceLinks = [
  {
    label: "Khabiry (site principal)",
    href: "https://khabiry.com/fr",
  },
  {
    label: "Khabiry Courses - FAQ",
    href: "https://course.khabiry.com/p/faq",
  },
  {
    label: "Khabiry Courses - About",
    href: "https://course.khabiry.com/p/about-us",
  },
  {
    label: "OpenClassrooms (site principal)",
    href: "https://openclassrooms.com/fr",
  },
  {
    label: "Udemy - Lifetime Access (support)",
    href: "https://support.udemy.com/hc/en-us/articles/229603708-Lifetime-Access",
  },
  {
    label: "Udemy - Certificates of Completion",
    href: "https://support.udemy.com/hc/en-us/articles/229603868-Certificates-of-Completion",
  },
];

function statusClass(status: StepStatus) {
  if (status === "Fort") {
    return "border-success/40 bg-success/15 text-success";
  }
  if (status === "Moyen") {
    return "border-warning/40 bg-warning/16 text-accent-900 dark:text-warning";
  }
  return "border-danger/40 bg-danger/14 text-danger";
}

function scoreColor(score: number) {
  if (score >= 4.2) {
    return "from-success to-brand";
  }
  if (score >= 3.4) {
    return "from-brand to-accent";
  }
  return "from-warning to-danger";
}

export function BenchmarkPage() {
  const [selectedPillar, setSelectedPillar] = useState<StepPillar | "Tous">("Tous");
  const [selectedCriterion, setSelectedCriterion] = useState<Criterion["id"]>("learning");

  const visibleSteps = useMemo(() => {
    if (selectedPillar === "Tous") {
      return projectSteps;
    }
    return projectSteps.filter((step) => step.pillar === selectedPillar);
  }, [selectedPillar]);

  const sortedPlatforms = useMemo(() => {
    return [...platforms].sort(
      (a, b) => b.metrics[selectedCriterion] - a.metrics[selectedCriterion]
    );
  }, [selectedCriterion]);

  const maturityIndex = useMemo(() => {
    const total = projectSteps.reduce((sum, step) => sum + step.alignmentScore, 0);
    return Math.round(total / projectSteps.length);
  }, []);

  const strongBlocks = projectSteps.filter((step) => step.status === "Fort").length;
  const criticalGaps = projectSteps.filter((step) => step.status === "A renforcer").length;

  return (
    <main className="relative flex-1 pb-16 sm:pb-20 lg:pb-24">
      <div className="pointer-events-none absolute inset-0 " />

      <section className="relative px-3 pt-6 sm:px-4 sm:pt-8 lg:px-6 lg:pt-10">
        <div className="mx-auto max-w-full">
          <article className="relative overflow-hidden ">
            

            <div className="relative grid gap-6 p-4 sm:p-6 xl:grid-cols-[1.08fr_0.92fr] xl:gap-8">
              <div>
                <p className="inline-flex min-h-8 items-center  px-3 text-[0.68rem] font-semibold tracking-[0.12em] text-brand-emphasis uppercase">
                  Benchmark strategique INDH Digitale
                </p>
                <h1 className="mt-3 max-w-4xl text-4xl leading-[1.04] text-foreground sm:text-5xl xl:text-[4.1rem]">
                  Presentation detaillee du projet et comparaison concurrentielle.
                </h1>
                <p className="mt-3 max-w-3xl text-sm leading-7 text-muted-strong sm:text-base">
                  Cette page synthese votre avancement reel (code + vision PDF) puis le positionne face a
                  Khabiry, OpenClassrooms et Udemy pour orienter les prochaines decisions produit.
                </p>

                <div className="mt-5 grid gap-2 sm:grid-cols-2 lg:grid-cols-4">
                  <article className="rounded-xl border border-border/70 bg-background/70 p-3">
                    <p className="font-display text-2xl leading-none text-foreground">{maturityIndex}%</p>
                    <p className="mt-1 text-[0.68rem] tracking-[0.09em] text-muted uppercase">Indice maturite MVP</p>
                  </article>
                  <article className="rounded-xl border border-border/70 bg-background/70 p-3">
                    <p className="font-display text-2xl leading-none text-foreground">{strongBlocks}</p>
                    <p className="mt-1 text-[0.68rem] tracking-[0.09em] text-muted uppercase">Blocs solides</p>
                  </article>
                  <article className="rounded-xl border border-border/70 bg-background/70 p-3">
                    <p className="font-display text-2xl leading-none text-foreground">{criticalGaps}</p>
                    <p className="mt-1 text-[0.68rem] tracking-[0.09em] text-muted uppercase">Blocs critiques</p>
                  </article>
                  <article className="rounded-xl border border-border/70 bg-background/70 p-3">
                    <p className="font-display text-2xl leading-none text-foreground">3</p>
                    <p className="mt-1 text-[0.68rem] tracking-[0.09em] text-muted uppercase">Competiteurs etudies</p>
                  </article>
                </div>
              </div>

              <article className="rounded-[1.3rem] border border-border/70 bg-background/65 p-4">
                <p className="text-xs font-semibold tracking-[0.16em] text-muted uppercase">
                  Resume executif base sur votre cahier des charges
                </p>
                <ul className="mt-3 grid gap-2.5">
                  {[
                    "Vision conforme au PDF: formation + experts + communaute + suivi projet.",
                    "Structure front deja riche et persuasive pour une demo chef de projet.",
                    "Grand levier maintenant: passage du design demo vers produit exploitable.",
                    "Priorite immediate: auth/roles, persistence, conformite et reporting.",
                  ].map((line) => (
                    <li
                      key={line}
                      className="rounded-xl border border-border/70 bg-surface px-3 py-2.5 text-sm leading-6 text-muted-strong"
                    >
                      {line}
                    </li>
                  ))}
                </ul>
                <Link
                  href="/dashboard"
                  className="mt-4 inline-flex min-h-10 items-center justify-center rounded-full bg-brand px-4 text-sm font-semibold text-brand-contrast transition-colors hover:bg-brand-700"
                >
                  Ouvrir le dashboard admin
                </Link>
              </article>
            </div>
          </article>
        </div>
      </section>

      <section className="px-3 pt-6 sm:px-4 sm:pt-8 lg:px-6 lg:pt-10">
        <div className="mx-auto max-w-full">
          <article className="rounded-[1.6rem] border border-border/70 bg-surface/88 p-4 shadow-card sm:p-5">
            <div className="flex flex-wrap items-end justify-between gap-3">
              <div>
                <p className="text-xs font-semibold tracking-[0.18em] text-muted uppercase">Analyse step by step</p>
                <h2 className="mt-1 text-3xl leading-tight text-foreground sm:text-[2.8rem]">
                  Lecture detaillee du projet
                </h2>
              </div>
              <div className="flex flex-wrap gap-2">
                {(["Tous", "Strategie", "Formation", "Communaute", "Operations", "Conformite"] as const).map(
                  (pillar) => (
                    <button
                      key={pillar}
                      type="button"
                      onClick={() => setSelectedPillar(pillar)}
                      className={`inline-flex min-h-8 items-center rounded-full border px-3 text-xs font-semibold tracking-[0.08em] uppercase transition-colors ${
                        selectedPillar === pillar
                          ? "border-brand/45 bg-brand/18 text-brand-emphasis"
                          : "border-border/70 bg-surface text-muted-strong hover:bg-surface-strong"
                      }`}
                    >
                      {pillar}
                    </button>
                  )
                )}
              </div>
            </div>

            <div className="mt-4 grid gap-3 lg:grid-cols-2">
              {visibleSteps.map((step) => (
                <article key={step.id} className="rounded-[1rem] border border-border/70 bg-background/62 p-3.5">
                  <div className="flex flex-wrap items-center gap-2">
                    <span className="inline-flex min-h-7 items-center rounded-full border border-border/70 bg-surface px-2.5 text-[0.66rem] font-semibold tracking-[0.08em] text-muted-strong uppercase">
                      Etape {step.id}
                    </span>
                    <span
                      className={`inline-flex min-h-7 items-center rounded-full border px-2.5 text-[0.66rem] font-semibold tracking-[0.08em] uppercase ${statusClass(step.status)}`}
                    >
                      {step.status}
                    </span>
                    <span className="inline-flex min-h-7 items-center rounded-full border border-border/70 bg-surface px-2.5 text-[0.66rem] text-muted-strong">
                      Alignement {step.alignmentScore}%
                    </span>
                  </div>

                  <h3 className="mt-2 text-xl leading-snug text-foreground">{step.title}</h3>
                  <p className="mt-1 text-sm leading-6 text-muted-strong">{step.objective}</p>

                  <div className="mt-3 grid gap-2">
                    <div className="rounded-lg border border-border/70 bg-surface p-2.5">
                      <p className="text-[0.68rem] font-semibold tracking-[0.1em] text-muted uppercase">
                        Existant dans votre projet
                      </p>
                      <ul className="mt-1.5 grid gap-1 text-sm text-muted-strong">
                        {step.existing.map((line) => (
                          <li key={line}>• {line}</li>
                        ))}
                      </ul>
                    </div>

                    <div className="rounded-lg border border-border/70 bg-surface p-2.5">
                      <p className="text-[0.68rem] font-semibold tracking-[0.1em] text-muted uppercase">
                        Ecart a combler
                      </p>
                      <ul className="mt-1.5 grid gap-1 text-sm text-muted-strong">
                        {step.gap.map((line) => (
                          <li key={line}>• {line}</li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  <p className="mt-3 rounded-lg border border-brand/25 bg-brand/10 px-3 py-2 text-sm text-brand-emphasis">
                    Action recommandee: {step.nextAction}
                  </p>
                </article>
              ))}
            </div>
          </article>
        </div>
      </section>

      <section className="px-3 pt-6 sm:px-4 sm:pt-8 lg:px-6 lg:pt-10">
        <div className="mx-auto max-w-full">
          <article className="rounded-[1.6rem] border border-border/70 bg-surface/88 p-4 shadow-card sm:p-5">
            <div className="flex flex-wrap items-end justify-between gap-3">
              <div>
                <p className="text-xs font-semibold tracking-[0.18em] text-muted uppercase">Benchmark plateformes</p>
                <h2 className="mt-1 text-3xl leading-tight text-foreground sm:text-[2.8rem]">
                  INDH vs references
                </h2>
                <p className="mt-2 text-sm text-muted-strong">
                  Scores indicatifs (1 a 5) etablis a partir de signaux publics visibles, consultes le 23 avril
                  2026.
                </p>
              </div>

              <div className="flex flex-wrap gap-2">
                {criteria.map((criterion) => (
                  <button
                    key={criterion.id}
                    type="button"
                    onClick={() => setSelectedCriterion(criterion.id)}
                    className={`inline-flex min-h-8 items-center rounded-full border px-3 text-xs font-semibold tracking-[0.08em] uppercase transition-colors ${
                      selectedCriterion === criterion.id
                        ? "border-brand/45 bg-brand/18 text-brand-emphasis"
                        : "border-border/70 bg-surface text-muted-strong hover:bg-surface-strong"
                    }`}
                  >
                    {criterion.label}
                  </button>
                ))}
              </div>
            </div>

            <div className="mt-4 grid gap-3 xl:grid-cols-4">
              {sortedPlatforms.map((platform) => {
                const score = platform.metrics[selectedCriterion];
                const width = `${Math.round((score / 5) * 100)}%`;
                return (
                  <article key={platform.id} className="rounded-[1rem] border border-border/70 bg-background/62 p-3.5">
                    <p className="text-xs font-semibold tracking-[0.1em] text-muted uppercase">{platform.position}</p>
                    <h3 className="mt-1 text-lg leading-snug text-foreground">{platform.name}</h3>
                    <p className="mt-1 text-sm leading-6 text-muted-strong">{platform.summary}</p>

                    <div className="mt-3">
                      <div className="mb-1.5 flex items-center justify-between text-xs">
                        <span className="text-muted">Score {criteria.find((c) => c.id === selectedCriterion)?.label}</span>
                        <span className="font-semibold text-foreground">{score.toFixed(1)} / 5</span>
                      </div>
                      <div className="h-2.5 w-full overflow-hidden rounded-full bg-border/70">
                        <span
                          className={`block h-full rounded-full bg-gradient-to-r ${scoreColor(score)}`}
                          style={{ width }}
                        />
                      </div>
                    </div>

                    <p className="mt-3 text-[0.68rem] font-semibold tracking-[0.1em] text-muted uppercase">
                      Points forts
                    </p>
                    <ul className="mt-1 grid gap-1 text-sm text-muted-strong">
                      {platform.strengths.slice(0, 2).map((line) => (
                        <li key={line}>• {line}</li>
                      ))}
                    </ul>

                    <a
                      href={platform.website}
                      target="_blank"
                      rel="noreferrer"
                      className="mt-3 inline-flex min-h-8 items-center rounded-full border border-border/70 bg-surface px-3 text-xs font-semibold text-foreground transition-colors hover:bg-surface-strong"
                    >
                      Ouvrir la reference
                    </a>
                  </article>
                );
              })}
            </div>

            <div className="mt-5 overflow-x-auto rounded-xl border border-border/70">
              <table className="min-w-[52rem] w-full text-left">
                <thead className="bg-background/68">
                  <tr className="text-[0.68rem] tracking-[0.1em] text-muted uppercase">
                    <th className="px-3 py-2.5 font-semibold">Critere</th>
                    {platforms.map((platform) => (
                      <th key={platform.id} className="px-3 py-2.5 font-semibold">
                        {platform.name}
                      </th>
                    ))}
                  </tr>
                </thead>
                <tbody className="divide-y divide-border/70 bg-surface/82">
                  {criteria.map((criterion) => (
                    <tr key={criterion.id}>
                      <td className="px-3 py-3 text-sm font-semibold text-foreground">{criterion.label}</td>
                      {platforms.map((platform) => (
                        <td key={`${platform.id}-${criterion.id}`} className="px-3 py-3 text-sm text-muted-strong">
                          {platform.metrics[criterion.id].toFixed(1)} / 5
                        </td>
                      ))}
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </article>
        </div>
      </section>

      <section className="px-3 pt-6 sm:px-4 sm:pt-8 lg:px-6 lg:pt-10">
        <div className="mx-auto max-w-full">
          <div className="grid gap-5 xl:grid-cols-[1.1fr_0.9fr]">
            <article className="rounded-[1.6rem] border border-border/70 bg-surface/88 p-4 shadow-card sm:p-5">
              <p className="text-xs font-semibold tracking-[0.18em] text-muted uppercase">Roadmap recommandee</p>
              <h2 className="mt-1 text-3xl leading-tight text-foreground sm:text-[2.8rem]">
                Plan de passage demo vers plateforme production
              </h2>

              <div className="mt-4 grid gap-3">
                {roadmap.map((item) => (
                  <article key={item.phase} className="rounded-[1rem] border border-border/70 bg-background/62 p-3.5">
                    <div className="flex flex-wrap items-center gap-2">
                      <span className="inline-flex min-h-7 items-center rounded-full border border-border/70 bg-surface px-2.5 text-[0.66rem] font-semibold tracking-[0.08em] text-muted-strong uppercase">
                        {item.phase}
                      </span>
                      <span className="text-xs font-semibold text-brand-emphasis">{item.focus}</span>
                    </div>
                    <ul className="mt-2 grid gap-1 text-sm text-muted-strong">
                      {item.actions.map((action) => (
                        <li key={action}>• {action}</li>
                      ))}
                    </ul>
                  </article>
                ))}
              </div>
            </article>

            <article className="rounded-[1.6rem] border border-border/70 bg-surface/88 p-4 shadow-card sm:p-5">
              <p className="text-xs font-semibold tracking-[0.18em] text-muted uppercase">Sources benchmark</p>
              <h3 className="mt-1 text-2xl leading-tight text-foreground">References publiques utilisees</h3>
              <ul className="mt-4 grid gap-2">
                {sourceLinks.map((source) => (
                  <li key={source.href}>
                    <a
                      href={source.href}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex min-h-10 w-full items-center rounded-xl border border-border/70 bg-background/65 px-3 text-sm font-medium text-foreground transition-colors hover:bg-surface-strong"
                    >
                      {source.label}
                    </a>
                  </li>
                ))}
              </ul>

              <div className="mt-4 rounded-xl border border-border/70 bg-background/65 p-3">
                <p className="text-xs font-semibold tracking-[0.1em] text-muted uppercase">Sources internes</p>
                <p className="mt-1 text-sm leading-6 text-muted-strong">
                  Analyse basee sur le code existant et les documents de cadrage extraits (presentation projet +
                  cahier des charges).
                </p>
                <div className="mt-3 flex flex-wrap gap-2">
                  <Link
                    href="/benchmark"
                    className="inline-flex min-h-8 items-center rounded-full border border-border/70 bg-surface px-3 text-xs font-semibold text-foreground"
                  >
                    Actualiser cette vue
                  </Link>
                  <Link
                    href="/province"
                    className="inline-flex min-h-8 items-center rounded-full border border-border/70 bg-surface px-3 text-xs font-semibold text-foreground"
                  >
                    Voir module Province
                  </Link>
                </div>
              </div>
            </article>
          </div>
        </div>
      </section>
    </main>
  );
}
