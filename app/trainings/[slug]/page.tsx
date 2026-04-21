import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { defaultLocale, type Locale, localizeHref } from "../../i18n";
import { getCourseById, getCourses, toneClass } from "../course-data";

const courseDetailCopy = {
  fr: {
    kicker: "Course Detail",
    addTraining: "Ajouter a mes formations",
    linkProject: "Relier au projet",
    estimatedDuration: "duree estimee",
    estimatedDurationDetail: "pour une progression compacte et utile",
    structuredContent: "contenu structure",
    structuredContentDetail: "entre video, ressources et progression",
    readingLevel: "niveau de lecture",
    readingLevelDetail: "pour adapter le cours au bon public",
    videoLecture: "Lecture video",
    overview: "Apercu du cours",
    audience: "Public cible",
    benefits: "Ce que le cours apporte",
    benefitsTitle: "Des objectifs simples, visibles et relies a l'action.",
    objective: "Objectif",
    mentor: "Mentor referent",
    mentorText:
      "Le detail du cours gagne en credibilite lorsqu'il montre une personne ou une expertise de reference derriere le contenu.",
    plan: "Plan du cours",
    planTitle: "Une progression video claire, lecon par lecon.",
    related: "Cours relies",
  },
  ar: {
    kicker: "تفاصيل الدرس",
    addTraining: "إضافة إلى تكويناتي",
    linkProject: "ربط بالمشروع",
    estimatedDuration: "المدة التقديرية",
    estimatedDurationDetail: "لتقدم مضغوط وعملي",
    structuredContent: "محتوى مهيكل",
    structuredContentDetail: "بين الفيديو والموارد والتقدم",
    readingLevel: "مستوى القراءة",
    readingLevelDetail: "لملاءمة الدرس مع الجمهور المناسب",
    videoLecture: "عرض فيديو",
    overview: "نظرة على الدرس",
    audience: "الفئة المستهدفة",
    benefits: "ما الذي يقدمه هذا الدرس",
    benefitsTitle: "أهداف بسيطة وواضحة ومرتبطة بالفعل.",
    objective: "هدف",
    mentor: "الخبير المرجعي",
    mentorText:
      "تكسب صفحة الدرس مصداقية أكبر عندما تظهر الشخص أو الخبرة المرجعية التي تقف وراء المحتوى.",
    plan: "خطة الدرس",
    planTitle: "تقدم واضح عبر الفيديو، درسا بعد درس.",
    related: "دروس مرتبطة",
  },
} as const;

export function generateStaticParams() {
  return getCourses(defaultLocale).map((course) => ({ slug: course.id }));
}

export default async function CourseDetailPage({
  params,
  locale = defaultLocale,
}: {
  params: Promise<{ slug: string }>;
  locale?: Locale;
}) {
  const copy = courseDetailCopy[locale];
  const { slug } = await params;
  const course = getCourseById(slug, locale);

  if (!course) {
    notFound();
  }

  const relatedCourses = getCourses(locale)
    .filter((item) => item.id !== course.id && item.category === course.category)
    .slice(0, 3);

  return (
    <main className="mx-auto flex w-full max-w-360 flex-1 flex-col px-3 pb-16 pt-8 sm:px-4 sm:pt-10 lg:px-6 lg:pb-24">
      <section className="relative overflow-hidden px-2 py-6 sm:px-3 sm:py-8 lg:px-4 lg:py-10 xl:px-6">
        <div className="grid gap-8 xl:grid-cols-[0.95fr_1.05fr] xl:items-center">
          <div className="space-y-6">
            <div className="space-y-4">
              <div className="flex flex-wrap gap-2">
                <span className="hero-kicker">{copy.kicker}</span>
                <span
                  className={`inline-flex min-h-10 items-center rounded-full px-4 text-sm font-semibold shadow-card backdrop-blur-xl ${toneClass(
                    course.tone,
                  )}`}
                >
                  {course.category}
                </span>
              </div>
              <h1 className="max-w-4xl font-display text-[clamp(2.3rem,6vw,5.2rem)] leading-[0.94] tracking-[-0.05em] text-foreground">
                {course.title}
              </h1>
              <p className="max-w-2xl text-[1rem] leading-8 text-muted-strong sm:text-[1.08rem]">
                {course.intro}
              </p>
            </div>

            <div className="flex flex-col gap-3 sm:flex-row sm:flex-wrap">
              <Link
                href={localizeHref(locale, "/my-trainings")}
                className="inline-flex min-h-12 items-center justify-center rounded-full bg-brand px-6 text-sm font-semibold text-brand-contrast shadow-soft transition-colors hover:bg-brand-700"
              >
                {copy.addTraining}
              </Link>
              <Link
                href={localizeHref(locale, "/create-project")}
                className="inline-flex min-h-12 items-center justify-center rounded-full border border-border-strong/55 bg-background/85 px-6 text-sm font-semibold text-foreground transition-colors hover:bg-surface-strong"
              >
                {copy.linkProject}
              </Link>
            </div>

            <div className="grid gap-3 sm:grid-cols-3">
              <article className="rounded-[1.5rem] border border-border/70 bg-background/62 p-4 shadow-card backdrop-blur-xl">
                <p className="font-display text-2xl text-foreground">
                  {course.duration}
                </p>
                <p className="mt-1 text-sm font-semibold text-muted-strong">
                  {copy.estimatedDuration}
                </p>
                <p className="mt-2 text-sm leading-6 text-muted">
                  {copy.estimatedDurationDetail}
                </p>
              </article>
              <article className="rounded-[1.5rem] border border-border/70 bg-background/62 p-4 shadow-card backdrop-blur-xl">
                <p className="font-display text-2xl text-foreground">
                  {course.lessons}
                </p>
                <p className="mt-1 text-sm font-semibold text-muted-strong">
                  {copy.structuredContent}
                </p>
                <p className="mt-2 text-sm leading-6 text-muted">
                  {copy.structuredContentDetail}
                </p>
              </article>
              <article className="rounded-[1.5rem] border border-border/70 bg-background/62 p-4 shadow-card backdrop-blur-xl">
                <p className="font-display text-2xl text-foreground">
                  {course.level}
                </p>
                <p className="mt-1 text-sm font-semibold text-muted-strong">
                  {copy.readingLevel}
                </p>
                <p className="mt-2 text-sm leading-6 text-muted">
                  {copy.readingLevelDetail}
                </p>
              </article>
            </div>
          </div>

          <article className="relative overflow-hidden rounded-[2.2rem] bg-surface pb-4 shadow-card md:pb-0">
            <Image
              unoptimized
              src={course.imageSrc}
              alt={course.imageAlt}
              width="1400"
              height="934"
              priority
              className="h-[18.5rem] w-full object-cover sm:h-[24rem] xl:h-[31rem]"
            />
            <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(180deg,rgba(16,27,20,0.06),rgba(16,27,20,0.18)_42%,rgba(16,27,20,0.84))]" />
            <div className="absolute left-4 top-4 flex flex-wrap gap-2">
              <span className="inline-flex min-h-10 items-center rounded-full bg-background/84 px-4 text-sm font-semibold text-brand-emphasis shadow-card backdrop-blur-xl">
                {copy.videoLecture}
              </span>
              <span className="inline-flex min-h-10 items-center rounded-full bg-background/84 px-4 text-sm font-semibold text-foreground shadow-card backdrop-blur-xl">
                {course.level}
              </span>
            </div>
            <div className="absolute right-4 top-4 flex h-14 w-14 items-center justify-center rounded-full bg-background/84 shadow-card backdrop-blur-xl">
              <span className="ml-1 h-0 w-0 border-y-[10px] border-l-[16px] border-y-transparent border-l-brand" />
            </div>
            <div className="relative z-10 mx-4 -mt-10 grid gap-3 md:absolute md:inset-x-4 md:bottom-4 md:mx-0 md:mt-0 md:grid-cols-[1.04fr_0.96fr]">
              <div className="rounded-[1.6rem] bg-background/90 p-4 shadow-card backdrop-blur-xl sm:p-5">
                <p className="text-xs font-semibold tracking-[0.18em] text-muted uppercase">
                  {copy.overview}
                </p>
                <p className="mt-3 text-sm leading-6 text-muted-strong">
                  {course.description}
                </p>
              </div>

              <div className="rounded-[1.6rem] bg-background/84 p-4 shadow-card backdrop-blur-xl sm:p-5">
                <p className="text-xs font-semibold tracking-[0.18em] text-muted uppercase">
                  {copy.audience}
                </p>
                <p className="mt-3 text-sm leading-6 text-muted-strong">
                  {course.audience}
                </p>
              </div>
            </div>
          </article>
        </div>
      </section>

      <section className="relative mt-8 px-2 py-8 sm:px-3 sm:py-10 lg:mt-12 lg:px-4 lg:py-14 xl:px-6">
        <div className="grid gap-6 xl:grid-cols-[0.96fr_1.04fr]">
          <div className="space-y-4">
            <article className="rounded-[2rem] border border-border/70 bg-[linear-gradient(135deg,color-mix(in_oklab,var(--brand)_14%,transparent),color-mix(in_oklab,var(--accent)_10%,transparent))] p-5 shadow-card sm:p-6">
              <p className="section-label">{copy.benefits}</p>
              <h2 className="mt-3 font-display text-[1.85rem] leading-tight text-foreground sm:text-[2.2rem]">
                {copy.benefitsTitle}
              </h2>
              <div className="mt-5 grid gap-3">
                {course.outcomes.map((outcome, index) => (
                  <div
                    key={outcome}
                    className="rounded-[1.4rem] bg-background/80 p-4 shadow-card backdrop-blur-xl"
                  >
                    <p className="text-xs font-semibold tracking-[0.18em] text-muted uppercase">
                      {copy.objective} 0{index + 1}
                    </p>
                    <p className="mt-2 text-sm font-semibold text-foreground">
                      {outcome}
                    </p>
                  </div>
                ))}
              </div>
            </article>

            <article className="rounded-[2rem] border border-border/70 bg-background/68 p-5 shadow-card backdrop-blur-xl sm:p-6">
              <p className="section-label">{copy.mentor}</p>
              <h3 className="mt-3 font-display text-[1.45rem] leading-tight text-foreground">
                {course.mentor}
              </h3>
              <p className="mt-3 text-sm leading-7 text-muted-strong">
                {copy.mentorText}
              </p>
            </article>
          </div>

          <div className="space-y-4">
            <article className="rounded-[2rem] border border-border/70 bg-background/68 p-5 shadow-card backdrop-blur-xl sm:p-6">
              <div className="flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
                <div>
                  <p className="section-label">{copy.plan}</p>
                  <h2 className="mt-3 font-display text-[1.85rem] leading-tight text-foreground sm:text-[2.2rem]">
                    {copy.planTitle}
                  </h2>
                </div>
                <div className="rounded-full border border-border/70 bg-background/85 px-4 py-2 text-sm text-muted-strong">
                  {course.lessons}
                </div>
              </div>

              <ol className="mt-6 grid gap-3">
                {course.lessonPlan.map((lesson, index) => (
                  <li
                    key={lesson.title}
                    className="list-none rounded-[1.5rem] border border-border/70 bg-surface/82 p-4 shadow-card"
                  >
                    <div className="grid gap-3 sm:grid-cols-[auto_1fr_auto] sm:items-center">
                      <span className="inline-flex h-11 w-11 items-center justify-center rounded-[1rem] bg-gradient-to-br from-brand to-accent font-display text-base text-brand-contrast shadow-card">
                        0{index + 1}
                      </span>
                      <div>
                        <h3 className="text-[1.02rem] text-foreground">
                          {lesson.title}
                        </h3>
                      </div>
                      <span className="text-sm font-semibold text-muted-strong">
                        {lesson.duration}
                      </span>
                    </div>
                  </li>
                ))}
              </ol>
            </article>

            {relatedCourses.length > 0 ? (
              <article className="rounded-[2rem] border border-border/70 bg-background/68 p-5 shadow-card backdrop-blur-xl sm:p-6">
                <p className="section-label">{copy.related}</p>
                <div className="mt-4 grid gap-3">
                  {relatedCourses.map((item) => (
                    <Link
                      key={item.id}
                      href={localizeHref(locale, `/trainings/${item.id}`)}
                      className="rounded-[1.4rem] border border-border/70 bg-surface/82 p-4 shadow-card transition-colors hover:bg-surface-strong"
                    >
                      <div className="flex items-start justify-between gap-3">
                        <div>
                          <p className="text-sm font-semibold text-foreground">
                            {item.title}
                          </p>
                          <p className="mt-2 text-sm leading-6 text-muted">
                            {item.duration} · {item.level}
                          </p>
                        </div>
                        <span
                          className={`inline-flex min-h-9 shrink-0 items-center rounded-full px-3 text-xs font-semibold tracking-[0.18em] uppercase ${toneClass(
                            item.tone,
                          )}`}
                        >
                          {item.category}
                        </span>
                      </div>
                    </Link>
                  ))}
                </div>
              </article>
            ) : null}
          </div>
        </div>
      </section>
    </main>
  );
}
