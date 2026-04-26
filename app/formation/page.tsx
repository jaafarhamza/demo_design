import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { localizePath } from "../lib/i18n";
import { getRequestLocale, tr } from "../lib/request-locale";
import {
  catalogueCategories,
  learningPaths,
  modules,
  roadmap,
  testimonials,
} from "./formation-data";

export async function generateMetadata(): Promise<Metadata> {
  const locale = await getRequestLocale();
  return {
    title: tr(locale, "Formations | INDH Digitale", "التكوينات | INDH Digitale"),
    description: tr(
      locale,
      "Catalogue de formations INDH Digitale: parcours, modules pratiques, roadmap d'apprentissage et accompagnement expert.",
      "كتالوج تكوينات INDH Digitale: مسارات، وحدات تطبيقية، وخارطة تعلم بمواكبة الخبراء.",
    ),
  };
}

export default async function FormationPage() {
  const locale = await getRequestLocale();
  const t = (fr: string, ar: string) => (locale === "ar" ? ar : fr);
  const href = (path: string) => localizePath(path, locale);
  return (
    <main className="flex-1">
      <section className="px-3 pb-12 pt-6 sm:px-4 sm:pb-14 sm:pt-8 lg:px-6 lg:pb-16 lg:pt-10">
        <div className="mx-auto max-w-full">
          <div className="relative overflow-hidden rounded-[2rem] border border-brand-700/35 bg-[linear-gradient(140deg,oklch(0.24_0.06_160),oklch(0.31_0.09_154),oklch(0.28_0.08_28))] px-5 py-6 shadow-card sm:px-7 sm:py-8 lg:px-9 lg:py-10">
            <div className="pointer-events-none absolute -left-20 top-0 h-56 w-56 rounded-full bg-brand/35 blur-3xl" />
            <div className="pointer-events-none absolute -right-14 bottom-0 h-60 w-60 rounded-full bg-accent/28 blur-3xl" />

            <div className="grid gap-8 xl:grid-cols-[1.05fr_0.95fr] xl:items-end">
              <div>
                <p className="inline-flex min-h-9 items-center rounded-full border border-white/30 bg-white/10 px-4 text-xs font-semibold tracking-[0.16em] text-white/85 uppercase">
                  {t("Espace Formation", "فضاء التكوين")}
                </p>
                <h1 className="mt-4 text-[2rem] leading-[1.03] text-white sm:text-[2.9rem] lg:text-[3.6rem]">
                  {t(
                    "Formez-vous comme sur une vraie plateforme e-learning professionnelle.",
                    "تعلّم كما في منصة تعليم احترافية حقيقية.",
                  )}
                </h1>
                <p className="mt-3 max-w-2xl text-sm leading-7 text-white/82 sm:text-[1.02rem]">
                  {t(
                    "Programmes guides, progression par module, sessions live et ressources pratiques pour convertir vos objectifs en resultats mesurables.",
                    "برامج موجهة، تقدم حسب الوحدات، حصص مباشرة وموارد عملية لتحويل أهدافك إلى نتائج قابلة للقياس.",
                  )}
                </p>

                <div className="mt-5 flex flex-wrap gap-3">
                  <Link
                    href="#catalogue-formations"
                    className="inline-flex min-h-12 items-center justify-center rounded-full bg-white px-5 text-sm font-semibold text-brand-900 transition-colors hover:bg-white/90"
                  >
                    {t("Explorer le catalogue", "استكشاف الكتالوج")}
                  </Link>
                  <Link
                    href={href("/")}
                    className="inline-flex min-h-12 items-center justify-center rounded-full border border-white/35 bg-white/10 px-5 text-sm font-semibold text-white transition-colors hover:bg-white/16"
                  >
                    {t("Retour a l'accueil", "العودة إلى الرئيسية")}
                  </Link>
                </div>
              </div>

              <div className="rounded-[1.45rem] border border-white/20 bg-black/24 p-3 backdrop-blur-sm">
                <label htmlFor="formation-search" className="sr-only">
                  {t("Rechercher une formation", "البحث عن تكوين")}
                </label>
                <input
                  id="formation-search"
                  type="search"
                  placeholder={t(
                    "Rechercher: business plan, financement, pilotage...",
                    "ابحث: مخطط الأعمال، التمويل، القيادة...",
                  )}
                  className="w-full rounded-xl border border-white/20 bg-white/12 px-4 py-3 text-sm text-white placeholder:text-white/65 outline-none"
                />
                <div className="mt-3 flex flex-wrap gap-2">
                  {["Debutant", "Intermediaire", "Avance", "Certifiant"].map((chip) => (
                    <span
                      key={chip}
                      className="inline-flex min-h-8 items-center rounded-full border border-white/25 bg-black/25 px-3 text-xs font-semibold tracking-[0.08em] text-white/82 uppercase"
                    >
                      {chip}
                    </span>
                  ))}
                </div>
                <p className="mt-3 text-xs text-white/76">
                  {t(
                    "120+ modules disponibles, acces web et mobile, progression sauvegardee.",
                    "+120 وحدة متاحة، عبر الويب والهاتف، مع حفظ التقدم.",
                  )}
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="px-3 pb-14 sm:px-4 sm:pb-16 lg:px-6 lg:pb-20">
        <div className="mx-auto max-w-full">
          <div className="flex flex-col gap-3 lg:flex-row lg:items-end lg:justify-between">
            <div>
              <p className="text-xs font-semibold tracking-[0.2em] text-muted uppercase">Parcours a la une</p>
              <h2 className="mt-1 text-3xl leading-tight text-foreground sm:text-[3.2rem]">
                {t("Decouvrez les parcours en slides.", "اكتشف المسارات عبر الشرائح.")}
              </h2>
            </div>
            <Link
              href="#catalogue-formations"
              className="inline-flex min-h-11 items-center justify-center rounded-full bg-brand px-5 text-sm font-semibold text-brand-contrast transition-colors hover:bg-brand-700"
            >
              {t("Voir plus", "عرض المزيد")}
            </Link>
          </div>

          <div className="horizontal-slides mt-6 flex snap-x snap-mandatory gap-4 overflow-x-auto pb-2">
            {learningPaths.map((path) => (
              <article
                key={path.title}
                className="group min-w-[86%] snap-start overflow-hidden rounded-[1.45rem] border border-border/70 bg-surface/90 shadow-card sm:min-w-[64%] xl:min-w-[36%]"
              >
                <div className="relative">
                  <Image
                    src={path.image}
                    alt={`Visuel du parcours ${path.title}`}
                    width={1400}
                    height={860}
                    className="h-52 w-full object-cover transition-transform duration-700 group-hover:scale-[1.05]"
                    sizes="(min-width: 1280px) 34vw, (min-width: 768px) 58vw, 86vw"
                  />
                  <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/62 via-black/16 to-transparent" />
                  <span className="absolute bottom-3 left-3 inline-flex min-h-7 items-center rounded-full border border-white/25 bg-black/55 px-2.5 text-[0.68rem] font-semibold tracking-[0.08em] text-white uppercase">
                    {path.level}
                  </span>
                </div>

                <div className="p-4">
                  <h3 className="text-xl leading-snug text-foreground">{path.title}</h3>
                  <p className="mt-2 text-sm leading-6 text-muted-strong">{path.description}</p>
                  <div className="mt-3 flex flex-wrap gap-2">
                    <span className="inline-flex min-h-7 items-center rounded-full border border-border/70 bg-background/55 px-2.5 text-xs text-muted-strong">
                      {path.duration}
                    </span>
                    <span className="inline-flex min-h-7 items-center rounded-full border border-border/70 bg-background/55 px-2.5 text-xs text-muted-strong">
                      {path.format}
                    </span>
                    <span className="inline-flex min-h-7 items-center rounded-full border border-border/70 bg-background/55 px-2.5 text-xs text-muted-strong">
                      {path.learners}
                    </span>
                  </div>
                  <Link
                    href={href(`/formation/${path.slug}`)}
                    className="mt-4 inline-flex min-h-10 items-center justify-center rounded-lg border border-border-strong/55 bg-surface px-4 text-sm font-semibold text-foreground transition-colors hover:bg-surface-strong"
                  >
                    {t("Voir plus", "عرض المزيد")}
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="catalogue-formations" className="bg-brand-50/55 px-3 py-14 sm:px-4 sm:py-16 lg:px-6 lg:py-20">
        <div className="mx-auto max-w-full">
          <div className="flex flex-col gap-3 lg:flex-row lg:items-end lg:justify-between">
            <div>
              <p className="text-xs font-semibold tracking-[0.2em] text-muted uppercase">Catalogue modules</p>
              <h2 className="mt-1 text-3xl leading-tight text-foreground sm:text-[3rem]">
                {t("Catalogue separe en 3 categories claires.", "كتالوج مقسم إلى 3 فئات واضحة.")}
              </h2>
              <p className="mt-2 max-w-3xl text-sm leading-6 text-muted-strong sm:text-[0.98rem]">
                {t(
                  "Choisissez votre categorie selon votre maturite projet: fondamentaux, financement ou pilotage.",
                  "اختر الفئة حسب نضج مشروعك: الأساسيات، التمويل، أو القيادة.",
                )}
              </p>
            </div>
            <div className="flex flex-wrap gap-2">
              {catalogueCategories.map((category) => (
                <span
                  key={category.id}
                  className="inline-flex min-h-10 items-center rounded-full border border-border/70 bg-surface px-4 text-xs font-semibold tracking-[0.08em] text-muted-strong uppercase"
                >
                  {category.title}
                </span>
              ))}
            </div>
          </div>

          <div className="mt-6 grid gap-3 lg:hidden">
            {catalogueCategories.map((category, index) => {
              const categoryModules = modules.filter((module) => module.category === category.id);

              return (
                <details
                  key={category.id}
                  open={index === 0}
                  className={`group relative overflow-hidden rounded-[1.25rem] border p-3.5 shadow-card ${category.panelClass}`}
                >
                  <summary className="flex cursor-pointer list-none items-center justify-between gap-3 [&::-webkit-details-marker]:hidden">
                    <div>
                      <h3 className="text-lg leading-tight text-foreground">{category.title}</h3>
                      <p className="mt-1 text-sm leading-6 text-muted-strong">{category.description}</p>
                    </div>
                    <span className="inline-flex min-h-8 shrink-0 items-center rounded-full border border-border/70 bg-surface px-2.5 text-[0.66rem] font-semibold tracking-[0.08em] text-muted-strong uppercase">
                      {categoryModules.length} modules
                    </span>
                  </summary>

                  <div className="mt-3 grid gap-2.5">
                    {categoryModules.map((module) => (
                      <article
                        key={module.title}
                        className="rounded-xl border border-border/70 bg-surface/88 p-2.5"
                      >
                        <div className="flex gap-2.5">
                          <div className="relative h-18 w-18 shrink-0 overflow-hidden rounded-lg border border-border/70">
                            <Image
                              src={module.image}
                              alt={`Visuel du module ${module.title}`}
                              width={900}
                              height={600}
                              className="h-full w-full object-cover"
                              sizes="72px"
                            />
                          </div>
                          <div className="min-w-0 flex-1">
                            <h4 className="line-clamp-2 text-sm font-semibold leading-snug text-foreground">
                              {module.title}
                            </h4>
                            <div className="mt-2 flex flex-wrap gap-1.5">
                              <span
                                className={`inline-flex min-h-6 items-center rounded-full border px-2 text-[0.66rem] font-semibold tracking-[0.08em] uppercase ${category.tagClass}`}
                              >
                                {module.type}
                              </span>
                              <span className="inline-flex min-h-6 items-center rounded-full border border-border/70 bg-background/55 px-2 text-[0.66rem] text-muted-strong">
                                {module.duration}
                              </span>
                            </div>
                          </div>
                        </div>
                        <div className="mt-2.5 h-1.5 w-full overflow-hidden rounded-full bg-border/65">
                          <span
                            className={`block h-full rounded-full bg-gradient-to-r ${category.progressClass}`}
                            style={{ width: `${module.progress}%` }}
                          />
                        </div>
                      </article>
                    ))}
                  </div>

                  <Link
                    href={href(`/formation/${category.defaultPathSlug}`)}
                    className="mt-3 inline-flex min-h-10 items-center justify-center rounded-lg border border-border-strong/55 bg-surface px-4 text-sm font-semibold text-foreground transition-colors hover:bg-surface-strong"
                  >
                    {t("Voir plus", "عرض المزيد")}
                  </Link>
                </details>
              );
            })}
          </div>

          <div className="mt-6 hidden gap-4 lg:grid xl:grid-cols-3">
            {catalogueCategories.map((category) => {
              const categoryModules = modules.filter((module) => module.category === category.id);

              return (
                <article
                  key={category.id}
                  className={`relative overflow-hidden rounded-[1.35rem] border p-4 shadow-card ${category.panelClass}`}
                >
                  <div className="pointer-events-none absolute right-0 top-0 h-24 w-24 rounded-full bg-white/25 blur-2xl" />
                  <h3 className="text-xl leading-tight text-foreground">{category.title}</h3>
                  <p className="mt-2 text-sm leading-6 text-muted-strong">{category.description}</p>

                  <div className="mt-4 grid gap-3">
                    {categoryModules.map((module) => (
                      <article
                        key={module.title}
                        className="group rounded-xl border border-border/70 bg-surface/88 p-2.5 transition-colors hover:border-brand/35"
                      >
                        <div className="flex gap-2.5">
                          <div className="relative h-20 w-20 shrink-0 overflow-hidden rounded-lg border border-border/70">
                            <Image
                              src={module.image}
                              alt={`Visuel du module ${module.title}`}
                              width={900}
                              height={600}
                              className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-[1.05]"
                              sizes="80px"
                            />
                          </div>
                          <div className="min-w-0 flex-1">
                            <h4 className="line-clamp-2 text-sm font-semibold leading-snug text-foreground">
                              {module.title}
                            </h4>
                            <div className="mt-2 flex flex-wrap gap-1.5">
                              <span
                                className={`inline-flex min-h-6 items-center rounded-full border px-2 text-[0.66rem] font-semibold tracking-[0.08em] uppercase ${category.tagClass}`}
                              >
                                {module.type}
                              </span>
                              <span className="inline-flex min-h-6 items-center rounded-full border border-border/70 bg-background/55 px-2 text-[0.66rem] text-muted-strong">
                                {module.duration}
                              </span>
                            </div>
                          </div>
                        </div>

                        <div className="mt-2.5 h-1.5 w-full overflow-hidden rounded-full bg-border/65">
                          <span
                            className={`block h-full rounded-full bg-gradient-to-r ${category.progressClass}`}
                            style={{ width: `${module.progress}%` }}
                          />
                        </div>
                        <p className="mt-1 text-[0.68rem] text-muted">Progression moyenne: {module.progress}%</p>
                      </article>
                    ))}
                  </div>

                  <Link
                    href={href(`/formation/${category.defaultPathSlug}`)}
                    className="mt-4 inline-flex min-h-10 items-center justify-center rounded-lg border border-border-strong/55 bg-surface px-4 text-sm font-semibold text-foreground transition-colors hover:bg-surface-strong"
                  >
                    {t("Voir plus", "عرض المزيد")}
                  </Link>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      <section className="px-3 py-14 sm:px-4 sm:py-16 lg:px-6 lg:py-20">
        <div className="mx-auto max-w-full">
          <div className="grid gap-6 xl:grid-cols-[1.1fr_0.9fr]">
            <div className="rounded-[1.5rem] border border-border/70 bg-surface/88 p-4 shadow-card sm:p-5">
              <p className="text-xs font-semibold tracking-[0.2em] text-muted uppercase">
                Roadmap d&apos;apprentissage
              </p>
              <h2 className="mt-1 text-2xl leading-tight text-foreground sm:text-[2.4rem]">
                Programme guide sur 4 semaines.
              </h2>
              <div className="mt-4 grid gap-3">
                {roadmap.map((step) => (
                  <article
                    key={step.week}
                    className="rounded-xl border border-border/70 bg-background/58 px-3.5 py-3.5"
                  >
                    <p className="text-xs font-semibold tracking-[0.14em] text-brand-emphasis uppercase">
                      {step.week}
                    </p>
                    <h3 className="mt-1 text-base font-semibold text-foreground">{step.title}</h3>
                    <p className="mt-1 text-sm leading-6 text-muted-strong">{step.detail}</p>
                  </article>
                ))}
              </div>
            </div>

            <div className="space-y-4">
              <div className="rounded-[1.5rem] border border-border/70 bg-surface/88 p-4 shadow-card sm:p-5">
                <p className="text-xs font-semibold tracking-[0.2em] text-muted uppercase">Retours apprenants</p>
                <h3 className="mt-1 text-2xl leading-tight text-foreground">Ils ont suivi la formation</h3>
                <div className="mt-4 grid gap-3">
                  {testimonials.map((item) => (
                    <article key={item.name} className="rounded-xl border border-border/70 bg-background/58 p-3.5">
                      <p className="text-sm leading-6 text-muted-strong">&quot;{item.quote}&quot;</p>
                      <p className="mt-2 text-sm font-semibold text-foreground">{item.name}</p>
                      <p className="text-xs text-muted">{item.role}</p>
                    </article>
                  ))}
                </div>
              </div>

              <div className="rounded-[1.5rem] border border-border/70 bg-surface/88 p-4 shadow-card sm:p-5">
                <p className="text-xs font-semibold tracking-[0.2em] text-muted uppercase">FAQ rapide</p>
                <div className="mt-3 grid gap-2">
                  <details className="rounded-lg border border-border/70 bg-background/58 px-3 py-2">
                    <summary className="cursor-pointer text-sm font-semibold text-foreground">
                      Les parcours sont-ils certifiants ?
                    </summary>
                    <p className="mt-2 text-sm leading-6 text-muted-strong">
                      Oui, une attestation est generee apres completion des modules et des quiz requis.
                    </p>
                  </details>
                  <details className="rounded-lg border border-border/70 bg-background/58 px-3 py-2">
                    <summary className="cursor-pointer text-sm font-semibold text-foreground">
                      Puis-je suivre les cours sur mobile ?
                    </summary>
                    <p className="mt-2 text-sm leading-6 text-muted-strong">
                      Oui, le parcours est pense pour ordinateur, tablette et smartphone.
                    </p>
                  </details>
                  <details className="rounded-lg border border-border/70 bg-background/58 px-3 py-2">
                    <summary className="cursor-pointer text-sm font-semibold text-foreground">
                      Comment contacter un expert ?
                    </summary>
                    <p className="mt-2 text-sm leading-6 text-muted-strong">
                      Depuis votre espace apprenant, vous pouvez reserver un rendez-vous en visio ou presentiel.
                    </p>
                  </details>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
