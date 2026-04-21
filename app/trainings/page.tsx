"use client";

import Image from "next/image";
import Link from "next/link";
import { useMemo, useState } from "react";
import { defaultLocale, type Locale, localizeHref } from "../i18n";
import { getCategories, getCourses, toneClass } from "./course-data";

const trainingsCopy = {
  fr: {
    kicker: "Training Catalog",
    title: "Une page formations pensee comme une vraie experience e-learning.",
    description:
      "Le catalogue met en avant des cours video utiles, des parcours lisibles et des categories faciles a filtrer pour orienter vite le bon module.",
    primaryCta: "Voir le cours",
    secondaryCta: "Filtrer par besoin",
    stat1Label: "videos et modules",
    stat1Detail: "compacts, pratiques et penses pour mobile",
    stat2Label: "categories claires",
    stat2Detail: "pour orienter vite le bon besoin",
    stat3Label: "experience bilingue",
    stat3Detail: "dans une interface lisible et accessible",
    featured: "Cours en vedette",
    introVideo: "Video d'introduction",
    quickLook: "Apercu rapide",
    level: "Niveau",
    duration: "Duree",
    content: "Contenu",
    filtersEyebrow: "Filtres et categories",
    filtersTitle: "Filtrer les cours selon le besoin du beneficiaire.",
    coursesVisible: "cours affiches",
    watchCourse: "Regarder le cours",
    videoLearning: "video learning",
    recommendedPath: "Parcours recommande",
    recommendedTitle:
      "Commencer par l'idee, puis aller vers budget et accompagnement.",
    recommendedDescription:
      "Cette colonne aide a suggerer une lecture plus guidee du catalogue pour les debutants et les porteurs de projets.",
    stepLabel: "Etape",
    step1: "Clarifier l'idee de projet",
    step2: "Structurer budget et priorites",
    step3: "Activer l'appui d'un expert",
  },
  ar: {
    kicker: "فهرس التكوينات",
    title: "صفحة تكوينات مصممة كتجربة تعلم رقمي حقيقية.",
    description:
      "يعرض الفهرس دورات فيديو عملية ومسارات واضحة وفئات سهلة التصفية لتوجيه المستفيد بسرعة نحو الوحدة المناسبة.",
    primaryCta: "عرض الدرس",
    secondaryCta: "التصفية حسب الحاجة",
    stat1Label: "فيديوهات ووحدات",
    stat1Detail: "مضغوطة وعملية ومصممة للهاتف",
    stat2Label: "فئات واضحة",
    stat2Detail: "لتوجيه الحاجة المناسبة بسرعة",
    stat3Label: "تجربة ثنائية اللغة",
    stat3Detail: "ضمن واجهة واضحة وسهلة الولوج",
    featured: "الدرس المميز",
    introVideo: "فيديو تقديمي",
    quickLook: "نظرة سريعة",
    level: "المستوى",
    duration: "المدة",
    content: "المحتوى",
    filtersEyebrow: "الفلاتر والفئات",
    filtersTitle: "تصفية الدروس حسب حاجة المستفيد.",
    coursesVisible: "درسا معروضا",
    watchCourse: "مشاهدة الدرس",
    videoLearning: "تعلم بالفيديو",
    recommendedPath: "مسار مقترح",
    recommendedTitle: "ابدأ بالفكرة ثم انتقل إلى الميزانية ثم المواكبة.",
    recommendedDescription:
      "يساعد هذا العمود على اقتراح قراءة موجهة أكثر للفهرس للمبتدئين وحاملي المشاريع.",
    stepLabel: "المرحلة",
    step1: "توضيح فكرة المشروع",
    step2: "هيكلة الميزانية والأولويات",
    step3: "تفعيل مواكبة خبير",
  },
} as const;

export default function TrainingsPage({
  locale = defaultLocale,
}: {
  locale?: Locale;
}) {
  const copy = trainingsCopy[locale];
  const categories = getCategories(locale);
  const courses = getCourses(locale);
  const [activeCategory, setActiveCategory] = useState(categories[0]);

  const filteredCourses = useMemo(() => {
    if (activeCategory === categories[0]) {
      return courses;
    }

    return courses.filter((course) => course.category === activeCategory);
  }, [activeCategory, categories, courses]);

  const featuredCourse = filteredCourses[0] ?? courses[0];

  return (
    <main className="mx-auto flex w-full max-w-360 flex-1 flex-col px-3 pb-16 pt-8 sm:px-4 sm:pt-10 lg:px-6 lg:pb-24">
      <section className="relative overflow-hidden px-2 py-6 sm:px-3 sm:py-8 lg:px-4 lg:py-10 xl:px-6">
        <div className="grid gap-8 xl:grid-cols-[0.96fr_1.04fr] xl:items-center">
          <div className="space-y-6">
            <div className="space-y-4">
              <span className="hero-kicker">{copy.kicker}</span>
              <h1 className="max-w-4xl font-display text-[clamp(2.35rem,6vw,5.5rem)] leading-[0.94] tracking-[-0.05em] text-foreground">
                {copy.title}
              </h1>
              <p className="max-w-2xl text-[1rem] leading-8 text-muted-strong sm:text-[1.08rem]">
                {copy.description}
              </p>
            </div>

            <div className="flex flex-col gap-3 sm:flex-row sm:flex-wrap">
              <Link
                href={localizeHref(locale, `/trainings/${featuredCourse.id}`)}
                className="inline-flex min-h-12 items-center justify-center rounded-full bg-brand px-6 text-sm font-semibold text-brand-contrast shadow-soft transition-colors hover:bg-brand-700"
              >
                {copy.primaryCta}
              </Link>
              <button
                type="button"
                className="inline-flex min-h-12 items-center justify-center rounded-full border border-border-strong/55 bg-background/85 px-6 text-sm font-semibold text-foreground transition-colors hover:bg-surface-strong"
              >
                {copy.secondaryCta}
              </button>
            </div>

            <div className="grid gap-3 sm:grid-cols-3">
              <article className="rounded-[1.5rem] border border-border/70 bg-background/62 p-4 shadow-card backdrop-blur-xl">
                <p className="font-display text-2xl text-foreground">30+</p>
                <p className="mt-1 text-sm font-semibold text-muted-strong">
                  {copy.stat1Label}
                </p>
                <p className="mt-2 text-sm leading-6 text-muted">
                  {copy.stat1Detail}
                </p>
              </article>
              <article className="rounded-[1.5rem] border border-border/70 bg-background/62 p-4 shadow-card backdrop-blur-xl">
                <p className="font-display text-2xl text-foreground">6</p>
                <p className="mt-1 text-sm font-semibold text-muted-strong">
                  {copy.stat2Label}
                </p>
                <p className="mt-2 text-sm leading-6 text-muted">
                  {copy.stat2Detail}
                </p>
              </article>
              <article className="rounded-[1.5rem] border border-border/70 bg-background/62 p-4 shadow-card backdrop-blur-xl">
                <p className="font-display text-2xl text-foreground">FR / AR</p>
                <p className="mt-1 text-sm font-semibold text-muted-strong">
                  {copy.stat3Label}
                </p>
                <p className="mt-2 text-sm leading-6 text-muted">
                  {copy.stat3Detail}
                </p>
              </article>
            </div>
          </div>

          <article className="relative overflow-hidden rounded-[2.2rem] bg-surface pb-4 shadow-card md:pb-0">
            <Image
              unoptimized
              src={featuredCourse.imageSrc}
              alt={featuredCourse.imageAlt}
              width="1400"
              height="934"
              priority
              className="h-[18.5rem] w-full object-cover sm:h-[24rem] xl:h-[31rem]"
            />
            <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(180deg,rgba(16,27,20,0.06),rgba(16,27,20,0.18)_42%,rgba(16,27,20,0.84))]" />
            <div className="absolute left-4 top-4 flex flex-wrap gap-2">
              <span className="inline-flex min-h-10 items-center rounded-full bg-background/84 px-4 text-sm font-semibold text-brand-emphasis shadow-card backdrop-blur-xl">
                {copy.featured}
              </span>
              <span
                className={`inline-flex min-h-10 items-center rounded-full px-4 text-sm font-semibold shadow-card backdrop-blur-xl ${toneClass(
                  featuredCourse.tone,
                )}`}
              >
                {featuredCourse.category}
              </span>
            </div>

            <div className="absolute right-4 top-4 flex h-14 w-14 items-center justify-center rounded-full bg-background/84 shadow-card backdrop-blur-xl">
              <span className="ml-1 h-0 w-0 border-y-[10px] border-l-[16px] border-y-transparent border-l-brand" />
            </div>

            <div className="relative z-10 mx-4 -mt-10 grid gap-3 md:absolute md:inset-x-4 md:bottom-4 md:mx-0 md:mt-0 md:grid-cols-[1.06fr_0.94fr]">
              <div className="rounded-[1.6rem] bg-background/90 p-4 shadow-card backdrop-blur-xl sm:p-5">
                <p className="text-xs font-semibold tracking-[0.18em] text-muted uppercase">
                  {copy.introVideo}
                </p>
                <h2 className="mt-3 font-display text-[1.45rem] leading-tight text-foreground sm:text-[1.72rem]">
                  {featuredCourse.title}
                </h2>
                <p className="mt-3 text-sm leading-6 text-muted-strong">
                  {featuredCourse.description}
                </p>
              </div>

              <div className="rounded-[1.6rem] bg-background/84 p-4 shadow-card backdrop-blur-xl sm:p-5">
                <p className="text-xs font-semibold tracking-[0.18em] text-muted uppercase">
                  {copy.quickLook}
                </p>
                <div className="mt-3 grid gap-3">
                  <div className="flex items-center justify-between gap-3">
                    <span className="text-sm text-muted">{copy.level}</span>
                    <span className="text-sm font-semibold text-foreground">
                      {featuredCourse.level}
                    </span>
                  </div>
                  <div className="flex items-center justify-between gap-3">
                    <span className="text-sm text-muted">{copy.duration}</span>
                    <span className="text-sm font-semibold text-foreground">
                      {featuredCourse.duration}
                    </span>
                  </div>
                  <div className="flex items-center justify-between gap-3">
                    <span className="text-sm text-muted">{copy.content}</span>
                    <span className="text-sm font-semibold text-foreground">
                      {featuredCourse.lessons}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </article>
        </div>
      </section>

      <section className="relative mt-8 px-2 py-8 sm:px-3 sm:py-10 lg:mt-12 lg:px-4 lg:py-14 xl:px-6">
        <div className="space-y-6">
          <div className="flex flex-col gap-4 lg:flex-row lg:items-end lg:justify-between">
            <div className="space-y-3">
              <span className="section-label">{copy.filtersEyebrow}</span>
              <h2 className="font-display text-[1.9rem] leading-tight text-foreground sm:text-[2.25rem]">
                {copy.filtersTitle}
              </h2>
            </div>
            <div className="rounded-full border border-border/70 bg-background/70 px-4 py-2 text-sm text-muted-strong">
              {filteredCourses.length} {copy.coursesVisible}
            </div>
          </div>

          <div className="flex flex-wrap gap-2">
            {categories.map((category) => {
              const active = activeCategory === category;

              return (
                <button
                  key={category}
                  type="button"
                  onClick={() => setActiveCategory(category)}
                  className={`inline-flex min-h-11 items-center rounded-full px-4 text-sm font-semibold transition-colors ${
                    active
                      ? "bg-brand text-brand-contrast shadow-soft"
                      : "border border-border/70 bg-background/80 text-muted-strong hover:bg-surface-strong hover:text-foreground"
                  }`}
                  aria-pressed={active}
                >
                  {category}
                </button>
              );
            })}
          </div>

          <div className="grid gap-4 xl:grid-cols-[1.1fr_0.9fr]">
            <div className="grid gap-4 md:grid-cols-2">
              {filteredCourses.map((course) => (
                <article
                  key={course.id}
                  className="group overflow-hidden rounded-[1.9rem] border border-border/70 bg-background/68 shadow-card backdrop-blur-xl transition-transform duration-300 hover:-translate-y-1"
                >
                  <div className="relative overflow-hidden">
                    <Image
                      unoptimized
                      src={course.imageSrc}
                      alt={course.imageAlt}
                      width="1200"
                      height="800"
                      className="h-52 w-full object-cover transition-transform duration-500 group-hover:scale-[1.04]"
                    />
                    <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(180deg,rgba(16,27,20,0.04),rgba(16,27,20,0.14)_40%,rgba(16,27,20,0.76))]" />
                    <div className="absolute left-4 top-4 flex flex-wrap gap-2">
                      <span
                        className={`inline-flex min-h-9 items-center rounded-full px-4 text-xs font-semibold tracking-[0.18em] uppercase shadow-card backdrop-blur-xl ${toneClass(
                          course.tone,
                        )}`}
                      >
                        {course.category}
                      </span>
                    </div>
                    <div className="absolute inset-x-4 bottom-4 flex items-center justify-between gap-3 rounded-full bg-background/84 px-4 py-2 text-xs text-muted-strong shadow-card backdrop-blur-xl">
                      <span>{course.duration}</span>
                      <span>{course.lessons}</span>
                      <span>{course.level}</span>
                    </div>
                  </div>

                  <div className="p-5 sm:p-6">
                    <h3 className="font-display text-[1.35rem] leading-tight text-foreground">
                      {course.title}
                    </h3>
                    <p className="mt-3 text-sm leading-7 text-muted">
                      {course.description}
                    </p>
                    <div className="mt-5 flex items-center justify-between gap-3">
                      <Link
                        href={localizeHref(locale, `/trainings/${course.id}`)}
                        className="inline-flex min-h-10 items-center rounded-full bg-surface px-4 text-sm font-semibold text-brand-emphasis transition-colors hover:bg-surface-strong"
                      >
                        {copy.watchCourse}
                      </Link>
                      <span className="text-xs font-semibold tracking-[0.18em] text-muted uppercase">
                        {copy.videoLearning}
                      </span>
                    </div>
                  </div>
                </article>
              ))}
            </div>

            <aside className="space-y-4">
              <article className="rounded-[2rem] border border-border/70 bg-[linear-gradient(135deg,color-mix(in_oklab,var(--brand)_14%,transparent),color-mix(in_oklab,var(--accent)_10%,transparent))] p-5 shadow-card sm:p-6">
                <p className="section-label">{copy.recommendedPath}</p>
                <h3 className="mt-3 font-display text-[1.6rem] leading-tight text-foreground">
                  {copy.recommendedTitle}
                </h3>
                <p className="mt-3 text-sm leading-7 text-muted-strong">
                  {copy.recommendedDescription}
                </p>
                <div className="mt-5 grid gap-3">
                  {[copy.step1, copy.step2, copy.step3].map((step, index) => (
                    <div
                      key={step}
                      className="rounded-[1.4rem] bg-background/80 p-4 shadow-card backdrop-blur-xl"
                    >
                      <p className="text-xs font-semibold tracking-[0.18em] text-muted uppercase">
                        {copy.stepLabel} 0{index + 1}
                      </p>
                      <p className="mt-2 text-sm font-semibold text-foreground">
                        {step}
                      </p>
                    </div>
                  ))}
                </div>
              </article>
            </aside>
          </div>
        </div>
      </section>
    </main>
  );
}
