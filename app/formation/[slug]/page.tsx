import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { localizePath } from "../../lib/i18n";
import { getRequestLocale, tr } from "../../lib/request-locale";
import {
  catalogueCategories,
  feedbackComments,
  formationExperts,
  learningPaths,
  modules,
} from "../formation-data";

type PageProps = {
  params: Promise<{
    slug: string;
  }>;
};

export function generateStaticParams() {
  return learningPaths.map((path) => ({ slug: path.slug }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const locale = await getRequestLocale();
  const { slug } = await params;
  const path = learningPaths.find((item) => item.slug === slug);

  if (!path) {
    return {
      title: tr(locale, "Formation introuvable | INDH Digitale", "تكوين غير موجود | INDH Digitale"),
    };
  }

  return {
    title: `${path.title} | INDH Digitale`,
    description: tr(
      locale,
      `${path.description} Progression, accompagnement expert et retours des apprenants.`,
      `${path.description} تقدم المسار، مواكبة الخبراء، وآراء المتعلمين.`,
    ),
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

export default async function FormationDetailPage({ params }: PageProps) {
  const locale = await getRequestLocale();
  const t = (fr: string, ar: string) => (locale === "ar" ? ar : fr);
  const href = (pathValue: string) => localizePath(pathValue, locale);
  const { slug } = await params;
  const path = learningPaths.find((item) => item.slug === slug);

  if (!path) {
    notFound();
  }

  const category = catalogueCategories.find((item) => item.id === path.category);
  const pathModules = modules.filter((item) => item.category === path.category);
  const recommendations =
    formationExperts.filter((expert) => expert.specialties.includes(path.category)).slice(0, 3) ||
    formationExperts.slice(0, 3);
  const comments = feedbackComments.filter((item) => item.pathSlug === path.slug);

  return (
    <main className="flex-1">
      <section className="px-3 pb-12 pt-6 sm:px-4 sm:pb-14 sm:pt-8 lg:px-6 lg:pb-16 lg:pt-10">
        <div className="mx-auto max-w-full">
          <div className="grid gap-6 xl:grid-cols-[1.05fr_0.95fr] xl:items-stretch">
            <article className="relative overflow-hidden rounded-[1.8rem] border border-brand-700/35 bg-[linear-gradient(140deg,oklch(0.24_0.06_160),oklch(0.31_0.09_154),oklch(0.28_0.08_28))] p-5 shadow-card sm:p-6 lg:p-8">
              <div className="pointer-events-none absolute -left-20 -top-12 h-56 w-56 rounded-full bg-brand/35 blur-3xl" />
              <div className="pointer-events-none absolute -right-18 bottom-0 h-56 w-56 rounded-full bg-accent/28 blur-3xl" />

              <nav aria-label="Fil d'Ariane" className="flex flex-wrap items-center gap-2 text-xs text-white/80">
                <Link href={href("/")} className="underline-offset-4 hover:underline">
                  {t("Accueil", "الرئيسية")}
                </Link>
                <span>/</span>
                <Link href={href("/formation")} className="underline-offset-4 hover:underline">
                  {t("Formations", "التكوينات")}
                </Link>
                <span>/</span>
                <span className="text-white">{path.title}</span>
              </nav>

              <h1 className="mt-4 text-[2rem] leading-[1.03] text-white sm:text-[2.7rem] lg:text-[3.2rem]">
                {path.title}
              </h1>
              <p className="mt-3 max-w-2xl text-sm leading-7 text-white/84 sm:text-[1.02rem]">
                {path.description}
              </p>

              <div className="mt-4 flex flex-wrap gap-2">
                <span className="inline-flex min-h-8 items-center rounded-full border border-white/25 bg-black/25 px-3 text-xs font-semibold tracking-[0.08em] text-white/86 uppercase">
                  {path.level}
                </span>
                <span className="inline-flex min-h-8 items-center rounded-full border border-white/25 bg-black/25 px-3 text-xs text-white/86">
                  {path.duration}
                </span>
                <span className="inline-flex min-h-8 items-center rounded-full border border-white/25 bg-black/25 px-3 text-xs text-white/86">
                  {path.format}
                </span>
                <span className="inline-flex min-h-8 items-center rounded-full border border-white/25 bg-black/25 px-3 text-xs text-white/86">
                  {path.learners}
                </span>
                <span className="inline-flex min-h-8 items-center rounded-full border border-white/25 bg-black/25 px-3 text-xs text-white/86">
                  Note: {path.rating}/5
                </span>
              </div>

              <div className="mt-5 flex flex-wrap gap-3">
                <button
                  type="button"
                  className="inline-flex min-h-11 items-center justify-center rounded-full bg-white px-5 text-sm font-semibold text-brand-900 transition-colors hover:bg-white/90"
                >
                  {t("Reprendre la formation", "متابعة التكوين")}
                </button>
                <Link
                  href={href("/formation")}
                  className="inline-flex min-h-11 items-center justify-center rounded-full border border-white/35 bg-white/10 px-5 text-sm font-semibold text-white transition-colors hover:bg-white/16"
                >
                  {t("Retour au catalogue", "العودة إلى الكتالوج")}
                </Link>
              </div>
            </article>

            <article className="overflow-hidden rounded-[1.8rem] border border-border/70 bg-surface/90 shadow-card">
              <div className="relative h-56 sm:h-64">
                <Image
                  src={path.image}
                  alt={`Image du cours ${path.title}`}
                  fill
                  className="object-cover"
                  sizes="(min-width: 1280px) 42vw, 100vw"
                />
                <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/65 via-black/25 to-transparent" />
                <span className="absolute bottom-3 left-3 inline-flex min-h-7 items-center rounded-full border border-white/30 bg-black/55 px-2.5 text-[0.68rem] font-semibold tracking-[0.08em] text-white uppercase">
                  {category?.title ?? "Parcours"}
                </span>
              </div>

              <div className="p-4 sm:p-5">
                <p className="text-xs font-semibold tracking-[0.16em] text-muted uppercase">Progression du parcours</p>
                <div className="mt-2 h-2.5 w-full overflow-hidden rounded-full bg-border/65">
                  <span
                    className="block h-full rounded-full bg-gradient-to-r from-brand to-accent"
                    style={{ width: `${path.progress}%` }}
                  />
                </div>
                <p className="mt-2 text-sm text-muted-strong">{path.progress}% du parcours complete</p>

                <ul className="mt-4 grid gap-2">
                  {path.milestones.map((step) => (
                    <li
                      key={step}
                      className="inline-flex min-h-9 items-center rounded-lg border border-border/70 bg-background/58 px-3 text-sm text-muted-strong"
                    >
                      {step}
                    </li>
                  ))}
                </ul>
              </div>
            </article>
          </div>
        </div>
      </section>

      <section className="bg-brand-50/55 px-3 py-14 sm:px-4 sm:py-16 lg:px-6 lg:py-20">
        <div className="mx-auto max-w-full">
          <div className="flex flex-col gap-2">
            <p className="text-xs font-semibold tracking-[0.2em] text-muted uppercase">Modules du cours</p>
            <h2 className="text-3xl leading-tight text-foreground sm:text-[2.6rem]">
              Processus d&apos;apprentissage et progression.
            </h2>
          </div>

          <div className="mt-6 grid gap-4 md:grid-cols-2 xl:grid-cols-3">
            {pathModules.map((module) => (
              <article
                key={module.title}
                className="group overflow-hidden rounded-[1.25rem] border border-border/70 bg-surface/92 p-3.5 shadow-card transition-transform duration-300 hover:-translate-y-1 hover:border-brand/35"
              >
                <div className="relative overflow-hidden rounded-xl border border-border/70">
                  <Image
                    src={module.image}
                    alt={`Visuel module ${module.title}`}
                    width={900}
                    height={600}
                    className="h-40 w-full object-cover transition-transform duration-500 group-hover:scale-[1.04]"
                    sizes="(min-width: 1280px) 30vw, (min-width: 768px) 46vw, 94vw"
                  />
                </div>
                <h3 className="mt-3 text-lg leading-snug text-foreground">{module.title}</h3>
                <div className="mt-2 flex flex-wrap gap-2">
                  <span className="inline-flex min-h-7 items-center rounded-full border border-border/70 bg-background/55 px-2.5 text-xs text-muted-strong">
                    {module.type}
                  </span>
                  <span className="inline-flex min-h-7 items-center rounded-full border border-border/70 bg-background/55 px-2.5 text-xs text-muted-strong">
                    {module.duration}
                  </span>
                </div>
                <div className="mt-3 h-2 w-full overflow-hidden rounded-full bg-border/65">
                  <span
                    className="block h-full rounded-full bg-gradient-to-r from-brand to-accent"
                    style={{ width: `${module.progress}%` }}
                  />
                </div>
                <p className="mt-1 text-xs text-muted">Progression moyenne: {module.progress}%</p>
                <Link
                  href={href(`/formation/${path.slug}/module/${module.slug}`)}
                  className="mt-4 inline-flex min-h-10 items-center justify-center rounded-lg border border-border-strong/55 bg-surface px-4 text-sm font-semibold text-foreground transition-colors hover:bg-surface-strong"
                >
                  {t("Voir module", "عرض الوحدة")}
                </Link>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="px-3 py-14 sm:px-4 sm:py-16 lg:px-6 lg:py-20">
        <div className="mx-auto max-w-full">
          <div className="grid gap-6 xl:grid-cols-[1.05fr_0.95fr]">
            <article className="rounded-[1.5rem] border border-border/70 bg-surface/90 p-4 shadow-card sm:p-5">
              <p className="text-xs font-semibold tracking-[0.2em] text-muted uppercase">Recommandation expert</p>
              <h2 className="mt-1 text-2xl leading-tight text-foreground sm:text-[2.3rem]">
                Experts recommandes pour ce parcours.
              </h2>
              <div className="mt-4 grid gap-3">
                {recommendations.map((expert) => (
                  <article
                    key={expert.name}
                    className="rounded-xl border border-border/70 bg-background/58 p-3.5"
                  >
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
              <p className="text-xs font-semibold tracking-[0.2em] text-muted uppercase">Objectifs atteignables</p>
              <h3 className="mt-1 text-2xl leading-tight text-foreground">Ce que vous allez maitriser</h3>
              <ul className="mt-4 grid gap-2.5">
                {path.outcomes.map((outcome) => (
                  <li
                    key={outcome}
                    className="rounded-lg border border-border/70 bg-background/58 px-3 py-2.5 text-sm leading-6 text-muted-strong"
                  >
                    {outcome}
                  </li>
                ))}
              </ul>
            </article>
          </div>
        </div>
      </section>

      <section className="px-3 pb-18 sm:px-4 sm:pb-20 lg:px-6 lg:pb-24">
        <div className="mx-auto max-w-full">
          <div className="rounded-[1.6rem] border border-border/70 bg-surface/90 p-4 shadow-card sm:p-5">
            <div className="flex flex-col gap-2">
              <p className="text-xs font-semibold tracking-[0.2em] text-muted uppercase">Feedback apprenants</p>
              <h2 className="text-2xl leading-tight text-foreground sm:text-[2.3rem]">
                Commentaires et retours d&apos;experience.
              </h2>
            </div>

            <div className="mt-4 grid gap-3">
              {comments.map((comment) => (
                <article
                  key={comment.id}
                  className="rounded-xl border border-border/70 bg-background/58 p-3.5"
                >
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
              <label htmlFor="feedback-message" className="text-sm font-semibold text-foreground">
                Ajouter un commentaire
              </label>
              <textarea
                id="feedback-message"
                placeholder="Partagez votre retour sur cette formation..."
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
