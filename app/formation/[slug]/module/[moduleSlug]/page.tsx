import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import {
  formationExperts,
  learningPaths,
  moduleCoursePlans,
  moduleFeedbackComments,
  modules,
} from "../../../formation-data";

type PageProps = {
  params: Promise<{
    slug: string;
    moduleSlug: string;
  }>;
};

export function generateStaticParams() {
  return learningPaths.flatMap((path) =>
    modules
      .filter((module) => module.category === path.category)
      .map((module) => ({
        slug: path.slug,
        moduleSlug: module.slug,
      }))
  );
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug, moduleSlug } = await params;
  const path = learningPaths.find((item) => item.slug === slug);
  const selectedModule = modules.find((item) => item.slug === moduleSlug);

  if (!path || !selectedModule || selectedModule.category !== path.category) {
    return { title: "Module introuvable | INDH Digitale" };
  }

  return {
    title: `${selectedModule.title} | ${path.title} | INDH Digitale`,
    description: `Module ${selectedModule.title} avec progression et quiz par etape.`,
  };
}

function Stars({ rating }: { rating: number }) {
  return (
    <span className="text-[0.78rem] tracking-[0.08em] text-warning" aria-label={`${rating} sur 5`}>
      {"★".repeat(rating)}
      {"☆".repeat(5 - rating)}
    </span>
  );
}

export default async function ModuleDetailPage({ params }: PageProps) {
  const { slug, moduleSlug } = await params;

  const path = learningPaths.find((item) => item.slug === slug);
  const selectedModule = modules.find((item) => item.slug === moduleSlug);

  if (!path || !selectedModule || selectedModule.category !== path.category) {
    notFound();
  }

  const plan = moduleCoursePlans[selectedModule.slug];

  if (!plan) {
    notFound();
  }

  const recommendations = formationExperts
    .filter((expert) => expert.specialties.includes(selectedModule.category))
    .slice(0, 3);
  const comments = moduleFeedbackComments.filter((item) => item.moduleSlug === selectedModule.slug);

  const totalCheckpoints = plan.steps.length + 1;
  const userCompletedCheckpoints = 2;
  const userProgressPercent = Math.round((userCompletedCheckpoints / totalCheckpoints) * 100);
  const averageProgressPercent = selectedModule.progress;

  return (
    <main className="flex-1">
      <section className="px-3 pb-12 pt-6 sm:px-4 sm:pb-14 sm:pt-8 lg:px-6 lg:pb-16 lg:pt-10">
        <div className="mx-auto max-w-full">
          <div className="grid gap-6 xl:grid-cols-[1.06fr_0.94fr] xl:items-stretch">
            <article className="relative overflow-hidden rounded-[1.8rem] border border-brand-700/35 bg-[linear-gradient(145deg,oklch(0.24_0.06_160),oklch(0.31_0.09_154),oklch(0.29_0.08_28))] p-5 shadow-card sm:p-6 lg:p-8">
              <div className="pointer-events-none absolute -left-18 top-0 h-52 w-52 rounded-full bg-brand/35 blur-3xl" />
              <div className="pointer-events-none absolute -right-20 bottom-0 h-56 w-56 rounded-full bg-accent/30 blur-3xl" />

              <nav aria-label="Fil d'Ariane" className="flex flex-wrap items-center gap-2 text-xs text-white/78">
                <Link href="/" className="underline-offset-4 hover:underline">
                  Accueil
                </Link>
                <span>/</span>
                <Link href="/formation" className="underline-offset-4 hover:underline">
                  Formations
                </Link>
                <span>/</span>
                <Link href={`/formation/${path.slug}`} className="underline-offset-4 hover:underline">
                  {path.title}
                </Link>
                <span>/</span>
                <span className="text-white">{selectedModule.title}</span>
              </nav>

              <h1 className="mt-4 text-[1.95rem] leading-[1.05] text-white sm:text-[2.7rem] lg:text-[3.1rem]">
                {selectedModule.title}
              </h1>
              <p className="mt-3 max-w-2xl text-sm leading-7 text-white/84 sm:text-[1.01rem]">{plan.overview}</p>

              <div className="mt-4 flex flex-wrap gap-2">
                <span className="inline-flex min-h-8 items-center rounded-full border border-white/25 bg-black/25 px-3 text-xs font-semibold tracking-[0.08em] text-white/86 uppercase">
                  {plan.level}
                </span>
                <span className="inline-flex min-h-8 items-center rounded-full border border-white/25 bg-black/25 px-3 text-xs text-white/86">
                  {plan.totalDuration}
                </span>
                <span className="inline-flex min-h-8 items-center rounded-full border border-white/25 bg-black/25 px-3 text-xs text-white/86">
                  Quiz a chaque etape
                </span>
                <span className="inline-flex min-h-8 items-center rounded-full border border-white/25 bg-black/25 px-3 text-xs text-white/86">
                  Examen final inclus
                </span>
              </div>

              <div className="mt-5 rounded-xl border border-white/20 bg-black/22 p-3.5">
                <p className="text-xs font-semibold tracking-[0.16em] text-white/78 uppercase">Votre progression</p>
                <div className="mt-2 h-2.5 w-full overflow-hidden rounded-full bg-white/18">
                  <span
                    className="block h-full rounded-full bg-gradient-to-r from-brand-300 to-accent-300"
                    style={{ width: `${userProgressPercent}%` }}
                  />
                </div>
                <div className="mt-2 flex items-center justify-between text-xs text-white/82">
                  <span>0%</span>
                  <span>{userProgressPercent}%</span>
                  <span>100%</span>
                </div>
              </div>

              <div className="mt-4 flex flex-wrap gap-3">
                <button
                  type="button"
                  className="inline-flex min-h-11 items-center justify-center rounded-full bg-white px-5 text-sm font-semibold text-brand-900 transition-colors hover:bg-white/90"
                >
                  Demarrer le module
                </button>
                <Link
                  href={`/formation/${path.slug}`}
                  className="inline-flex min-h-11 items-center justify-center rounded-full border border-white/35 bg-white/10 px-5 text-sm font-semibold text-white transition-colors hover:bg-white/16"
                >
                  Retour au cours
                </Link>
              </div>
            </article>

            <article className="overflow-hidden rounded-[1.8rem] border border-border/70 bg-surface/90 shadow-card">
              <div className="relative h-56 sm:h-64">
                <Image
                  src={selectedModule.image}
                  alt={`Illustration du module ${selectedModule.title}`}
                  fill
                  className="object-cover"
                  sizes="(min-width: 1280px) 42vw, 100vw"
                />
                <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/65 via-black/24 to-transparent" />
                <span className="absolute bottom-3 left-3 inline-flex min-h-7 items-center rounded-full border border-white/30 bg-black/55 px-2.5 text-[0.68rem] font-semibold tracking-[0.08em] text-white uppercase">
                  {selectedModule.type}
                </span>
              </div>

              <div className="p-4 sm:p-5">
                <p className="text-xs font-semibold tracking-[0.16em] text-muted uppercase">Barre de progression</p>
                <div className="mt-2 h-2.5 w-full overflow-hidden rounded-full bg-border/65">
                  <span
                    className="block h-full rounded-full bg-gradient-to-r from-brand to-accent"
                    style={{ width: `${averageProgressPercent}%` }}
                  />
                </div>
                <p className="mt-2 text-sm text-muted-strong">
                  Progression moyenne des apprenants: {averageProgressPercent}%
                </p>
                <p className="mt-2 text-xs text-muted">Formateur recommande: {plan.instructor}</p>
              </div>
            </article>
          </div>
        </div>
      </section>

      <section className="bg-brand-50/55 px-3 py-14 sm:px-4 sm:py-16 lg:px-6 lg:py-20">
        <div className="mx-auto max-w-full">
          <div className="flex flex-col gap-2">
            <p className="text-xs font-semibold tracking-[0.2em] text-muted uppercase">Parcours etapes</p>
            <h2 className="text-3xl leading-tight text-foreground sm:text-[2.6rem]">
              Du niveau 0 a la validation finale.
            </h2>
            <p className="max-w-3xl text-sm leading-6 text-muted-strong">
              Chaque etape contient une lecon pratique puis un quiz de validation avant de passer a la suivante.
            </p>
          </div>

          <div className="mt-6 grid gap-4">
            {plan.steps.map((step, index) => (
              <article
                key={step.id}
                className="rounded-[1.2rem] border border-border/70 bg-surface/92 p-3.5 shadow-card"
              >
                <div className="flex flex-wrap items-center gap-2">
                  <span className="inline-flex min-h-8 items-center rounded-full border border-brand/35 bg-brand/10 px-3 text-xs font-semibold tracking-[0.08em] text-brand-emphasis uppercase">
                    Etape {step.id}
                  </span>
                  <span className="text-xs text-muted">{step.lessonDuration}</span>
                  <span className="text-xs text-muted">
                    Statut: {index === 0 ? "A commencer" : "Verrouille apres quiz precedent"}
                  </span>
                </div>

                <h3 className="mt-2 text-lg leading-snug text-foreground">{step.title}</h3>
                <p className="mt-1 text-sm leading-6 text-muted-strong">{step.objective}</p>

                <div className="mt-3 rounded-xl border border-accent/35 bg-accent-50/70 p-3">
                  <p className="text-xs font-semibold tracking-[0.08em] text-accent-contrast uppercase">
                    Quiz checkpoint
                  </p>
                  <p className="mt-1 text-sm font-semibold text-foreground">{step.quizTitle}</p>
                  <div className="mt-2 flex flex-wrap gap-2">
                    <span className="inline-flex min-h-7 items-center rounded-full border border-border/70 bg-surface px-2.5 text-xs text-muted-strong">
                      {step.quizQuestions} questions
                    </span>
                    <span className="inline-flex min-h-7 items-center rounded-full border border-border/70 bg-surface px-2.5 text-xs text-muted-strong">
                      Score minimum: {step.quizPassingScore}%
                    </span>
                  </div>
                  <button
                    type="button"
                    className="mt-3 inline-flex min-h-9 items-center justify-center rounded-lg border border-border-strong/55 bg-surface px-3.5 text-xs font-semibold text-foreground transition-colors hover:bg-surface-strong"
                  >
                    Lancer le quiz
                  </button>
                </div>
              </article>
            ))}

            <article className="rounded-[1.2rem] border border-border/70 bg-surface/92 p-3.5 shadow-card">
              <p className="text-xs font-semibold tracking-[0.08em] text-brand-emphasis uppercase">
                Etape finale
              </p>
              <h3 className="mt-1 text-lg leading-snug text-foreground">{plan.finalExam.title}</h3>
              <div className="mt-2 flex flex-wrap gap-2">
                <span className="inline-flex min-h-7 items-center rounded-full border border-border/70 bg-background/55 px-2.5 text-xs text-muted-strong">
                  {plan.finalExam.questions} questions
                </span>
                <span className="inline-flex min-h-7 items-center rounded-full border border-border/70 bg-background/55 px-2.5 text-xs text-muted-strong">
                  Duree: {plan.finalExam.duration}
                </span>
                <span className="inline-flex min-h-7 items-center rounded-full border border-border/70 bg-background/55 px-2.5 text-xs text-muted-strong">
                  Score minimum: {plan.finalExam.passingScore}%
                </span>
              </div>
              <button
                type="button"
                className="mt-3 inline-flex min-h-10 items-center justify-center rounded-lg bg-brand px-4 text-sm font-semibold text-brand-contrast transition-colors hover:bg-brand-700"
              >
                Passer l&apos;examen final
              </button>
            </article>
          </div>
        </div>
      </section>

      <section className="px-3 py-14 sm:px-4 sm:py-16 lg:px-6 lg:py-20">
        <div className="mx-auto max-w-full">
          <div className="grid gap-6 xl:grid-cols-[1.05fr_0.95fr]">
            <article className="rounded-[1.5rem] border border-border/70 bg-surface/90 p-4 shadow-card sm:p-5">
              <p className="text-xs font-semibold tracking-[0.2em] text-muted uppercase">Experts recommandes</p>
              <h2 className="mt-1 text-2xl leading-tight text-foreground">Accompagnement recommande</h2>
              <div className="mt-4 grid gap-3">
                {recommendations.map((expert) => (
                  <article key={expert.name} className="rounded-xl border border-border/70 bg-background/58 p-3.5">
                    <div className="flex gap-3">
                      <Image
                        src={expert.image}
                        alt={`Profil de ${expert.name}`}
                        width={320}
                        height={320}
                        className="h-14 w-14 rounded-xl object-cover"
                        sizes="56px"
                      />
                      <div className="min-w-0">
                        <p className="truncate text-sm font-semibold text-foreground">{expert.name}</p>
                        <p className="truncate text-xs text-muted">{expert.role}</p>
                        <p className="text-xs text-muted-strong">{expert.region}</p>
                      </div>
                      <span className="ml-auto text-xs font-semibold text-brand-emphasis">{expert.rating}/5</span>
                    </div>
                    <p className="mt-3 text-sm leading-6 text-muted-strong">{expert.recommendation}</p>
                  </article>
                ))}
              </div>
            </article>

            <article className="rounded-[1.5rem] border border-border/70 bg-surface/90 p-4 shadow-card sm:p-5">
              <p className="text-xs font-semibold tracking-[0.2em] text-muted uppercase">Resume progression</p>
              <h3 className="mt-1 text-2xl leading-tight text-foreground">Plan 0 → 100</h3>
              <ul className="mt-4 grid gap-2.5">
                <li className="rounded-lg border border-border/70 bg-background/58 px-3 py-2.5 text-sm text-muted-strong">
                  0%: demarrage du module
                </li>
                <li className="rounded-lg border border-border/70 bg-background/58 px-3 py-2.5 text-sm text-muted-strong">
                  25%: etape 1 + quiz valide
                </li>
                <li className="rounded-lg border border-border/70 bg-background/58 px-3 py-2.5 text-sm text-muted-strong">
                  50%: etapes 1-2 + quiz valides
                </li>
                <li className="rounded-lg border border-border/70 bg-background/58 px-3 py-2.5 text-sm text-muted-strong">
                  75%: etapes 1-3 + quiz valides
                </li>
                <li className="rounded-lg border border-border/70 bg-background/58 px-3 py-2.5 text-sm text-muted-strong">
                  100%: toutes etapes + examen final valide
                </li>
              </ul>
            </article>
          </div>
        </div>
      </section>

      <section className="px-3 pb-18 sm:px-4 sm:pb-20 lg:px-6 lg:pb-24">
        <div className="mx-auto max-w-full">
          <div className="rounded-[1.6rem] border border-border/70 bg-surface/90 p-4 shadow-card sm:p-5">
            <p className="text-xs font-semibold tracking-[0.2em] text-muted uppercase">Feedback module</p>
            <h2 className="mt-1 text-2xl leading-tight text-foreground sm:text-[2.3rem]">
              Commentaires des apprenants.
            </h2>
            <div className="mt-4 grid gap-3">
              {comments.map((comment) => (
                <article key={comment.id} className="rounded-xl border border-border/70 bg-background/58 p-3.5">
                  <div className="flex flex-wrap items-center gap-2">
                    <p className="text-sm font-semibold text-foreground">{comment.author}</p>
                    <span className="text-xs text-muted">{comment.role}</span>
                    <span className="text-xs text-muted">{comment.date}</span>
                    <Stars rating={comment.rating} />
                  </div>
                  <p className="mt-2 text-sm leading-6 text-muted-strong">{comment.comment}</p>
                </article>
              ))}
            </div>

            <form className="mt-5 rounded-xl border border-border/70 bg-background/58 p-3.5">
              <label htmlFor="module-feedback-message" className="text-sm font-semibold text-foreground">
                Ajouter votre commentaire
              </label>
              <textarea
                id="module-feedback-message"
                placeholder="Partagez votre experience sur ce module..."
                className="mt-2 min-h-24 w-full rounded-lg border border-border/70 bg-surface px-3 py-2 text-sm text-foreground outline-none placeholder:text-muted"
              />
              <button
                type="button"
                className="mt-3 inline-flex min-h-10 items-center justify-center rounded-lg bg-brand px-4 text-sm font-semibold text-brand-contrast transition-colors hover:bg-brand-700"
              >
                Publier le commentaire
              </button>
            </form>
          </div>
        </div>
      </section>
    </main>
  );
}
