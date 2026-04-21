"use client";

import Image from "next/image";
import Link from "next/link";
import { useMemo, useState } from "react";
import { defaultLocale, type Locale, localizeHref } from "../i18n";

type Expert = {
  id: string;
  name: string;
  role: string;
  specialty: string;
  region: string;
  availability: string;
  sessions: string;
  bio: string;
  imageSrc: string;
  imageAlt: string;
  tone: "brand" | "accent" | "neutral";
};

const expertsContent = {
  fr: {
    filters: ["Tous", "Financement", "Strategie", "Digital", "Cooperative", "Gestion"],
    heroKicker: "Experts",
    heroTitle: "Une page experts qui inspire confiance et facilite l'accompagnement.",
    heroDescription:
      "Cette page met en avant les profils experts, leurs domaines d'appui et une logique claire de prise de contact pour les porteurs de projets.",
    primaryCta: "Demander un contact",
    secondaryCta: "Lancer mon projet",
    spotlight: "Expert en vedette",
    recommendedProfile: "Profil recommande",
    quickLook: "Apercu rapide",
    region: "Region",
    availability: "Disponibilite",
    support: "Accompagnement",
    stat1Label: "profils experts",
    stat1Detail: "finances, strategie, digital et terrain",
    stat2Label: "accompagnement",
    stat2Detail: "rendez-vous et appui personnalise",
    stat3Value: "Regional",
    stat3Label: "ancrage terrain",
    stat3Detail: "pour rapprocher l'appui du contexte local",
    expertiseTitle: "Expertises et profils",
    expertiseHeading: "Filtrer les experts selon le besoin du projet.",
    visibleExperts: "experts visibles",
    meetingCta: "Demander un rendez-vous",
    whyItWorks: "Pourquoi cette page marche",
    whyTitle: "Une direction claire entre besoin, expert et prise de contact.",
    whyDescription:
      "La page experts fonctionne mieux quand elle rassure vite, montre les domaines d'appui et pousse vers une action simple a activer.",
    whyChips: ["profils lisibles", "filtres utiles", "prise de contact", "mobile-first"],
    journey: "Parcours recommande",
    step1: "Identifier le besoin prioritaire",
    step2: "Choisir le bon expert selon le domaine",
    step3: "Passer vers le contact ou le rendez-vous",
    stepLabel: "Etape",
    experts: [
      {
        id: "salma-el-idrissi",
        name: "Salma El Idrissi",
        role: "Mentore projet",
        specialty: "Strategie",
        region: "Casablanca",
        availability: "Disponible cette semaine",
        sessions: "48 rendez-vous",
        bio: "Accompagne les porteurs de projets sur la structuration de l'idee, la feuille de route et la clarte du positionnement.",
        imageSrc:
          "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=900&q=80",
        imageAlt: "Portrait professionnel d'une experte souriante en environnement de travail",
        tone: "brand",
      },
      {
        id: "rachid-el-mansouri",
        name: "Rachid El Mansouri",
        role: "Conseiller financement",
        specialty: "Financement",
        region: "Rabat",
        availability: "3 slots restants",
        sessions: "62 rendez-vous",
        bio: "Aide a clarifier les besoins financiers, preparer un premier dossier et mieux cibler les options de financement.",
        imageSrc:
          "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=900&q=80",
        imageAlt: "Portrait d'un expert en financement dans un bureau moderne",
        tone: "accent",
      },
      {
        id: "imane-oufkir",
        name: "Imane Oufkir",
        role: "Coach digital",
        specialty: "Digital",
        region: "Marrakech",
        availability: "Disponible demain",
        sessions: "39 rendez-vous",
        bio: "Intervient sur la communication digitale, la presence numerique et la valorisation du projet en ligne.",
        imageSrc:
          "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&w=900&q=80",
        imageAlt: "Portrait d'une experte digitale avec un arriere-plan de bureau lumineux",
        tone: "neutral",
      },
      {
        id: "yassine-moutaouakil",
        name: "Yassine Moutaouakil",
        role: "Facilitateur cooperatives",
        specialty: "Cooperative",
        region: "Fes",
        availability: "Disponible cette semaine",
        sessions: "29 rendez-vous",
        bio: "Accompagne les logiques collectives, la repartition des roles et la structuration des priorites des cooperatives.",
        imageSrc:
          "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&w=900&q=80",
        imageAlt: "Portrait professionnel d'un accompagnateur en cooperative",
        tone: "brand",
      },
      {
        id: "meryem-bennis",
        name: "Meryem Bennis",
        role: "Coach gestion",
        specialty: "Gestion",
        region: "Tanger",
        availability: "2 slots restants",
        sessions: "55 rendez-vous",
        bio: "Travaille sur l'organisation quotidienne, les priorites, la gestion du temps et la lisibilite du suivi.",
        imageSrc:
          "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=900&q=80",
        imageAlt: "Portrait d'une coach professionnelle specialisee en gestion",
        tone: "accent",
      },
      {
        id: "nabil-azzouzi",
        name: "Nabil Azzouzi",
        role: "Consultant strategie",
        specialty: "Strategie",
        region: "Agadir",
        availability: "Disponible vendredi",
        sessions: "34 rendez-vous",
        bio: "Aide a poser des priorites, renforcer la proposition de valeur et relier les decisions aux objectifs du projet.",
        imageSrc:
          "https://images.unsplash.com/photo-1504593811423-6dd665756598?auto=format&fit=crop&w=900&q=80",
        imageAlt: "Portrait d'un consultant en strategie dans un environnement contemporain",
        tone: "neutral",
      },
    ] satisfies Expert[],
  },
  ar: {
    filters: ["الكل", "التمويل", "الاستراتيجية", "الرقمي", "التعاونية", "التسيير"],
    heroKicker: "الخبراء",
    heroTitle: "صفحة خبراء تبني الثقة وتسهّل المواكبة.",
    heroDescription:
      "تعرض هذه الصفحة ملفات الخبراء ومجالات الدعم ومنطقًا واضحًا لطلب التواصل بالنسبة لحاملي المشاريع.",
    primaryCta: "طلب تواصل",
    secondaryCta: "إطلاق مشروعي",
    spotlight: "الخبير المميز",
    recommendedProfile: "الملف المقترح",
    quickLook: "نظرة سريعة",
    region: "الجهة",
    availability: "التوفر",
    support: "المواكبة",
    stat1Label: "ملفات خبراء",
    stat1Detail: "تمويل واستراتيجية ورقمي وميدان",
    stat2Label: "مواكبة فردية",
    stat2Detail: "مواعيد ودعم مخصص",
    stat3Value: "جهوي",
    stat3Label: "قرب ميداني",
    stat3Detail: "لربط الدعم بالسياق المحلي",
    expertiseTitle: "التخصصات والملفات",
    expertiseHeading: "صفِّ الخبراء حسب حاجة المشروع.",
    visibleExperts: "خبراء ظاهرين",
    meetingCta: "طلب موعد",
    whyItWorks: "لماذا تنجح هذه الصفحة",
    whyTitle: "اتجاه واضح بين الحاجة والخبير وطلب التواصل.",
    whyDescription:
      "تعمل صفحة الخبراء بشكل أفضل عندما تطمئن بسرعة وتوضح مجالات الدعم وتدفع نحو إجراء بسيط وواضح.",
    whyChips: ["ملفات واضحة", "فلاتر مفيدة", "طلب تواصل", "موبايل أولا"],
    journey: "مسار مقترح",
    step1: "تحديد الحاجة ذات الأولوية",
    step2: "اختيار الخبير المناسب حسب المجال",
    step3: "الانتقال إلى التواصل أو الموعد",
    stepLabel: "المرحلة",
    experts: [
      {
        id: "salma-el-idrissi",
        name: "سلمى الإدريسي",
        role: "مُرشدة مشروع",
        specialty: "الاستراتيجية",
        region: "الدار البيضاء",
        availability: "متاحة هذا الأسبوع",
        sessions: "48 موعدا",
        bio: "تواكب حاملي المشاريع في هيكلة الفكرة وخارطة الطريق ووضوح التموضع.",
        imageSrc:
          "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=900&q=80",
        imageAlt: "صورة احترافية لخبيرة مبتسمة في بيئة عمل",
        tone: "brand",
      },
      {
        id: "rachid-el-mansouri",
        name: "رشيد المنصوري",
        role: "مستشار تمويل",
        specialty: "التمويل",
        region: "الرباط",
        availability: "3 مواعيد متبقية",
        sessions: "62 موعدا",
        bio: "يساعد على توضيح الحاجيات المالية وإعداد ملف أولي وتوجيه خيارات التمويل.",
        imageSrc:
          "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=900&q=80",
        imageAlt: "صورة لخبير تمويل داخل مكتب حديث",
        tone: "accent",
      },
      {
        id: "imane-oufkir",
        name: "إيمان أوفقير",
        role: "كوتش رقمي",
        specialty: "الرقمي",
        region: "مراكش",
        availability: "متاحة غدا",
        sessions: "39 موعدا",
        bio: "تتدخل في التواصل الرقمي والحضور الإلكتروني وتثمين المشروع عبر الإنترنت.",
        imageSrc:
          "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&w=900&q=80",
        imageAlt: "صورة لخبيرة رقمية مع خلفية مكتب مضيئة",
        tone: "neutral",
      },
      {
        id: "yassine-moutaouakil",
        name: "ياسين المتوكل",
        role: "مسهّل تعاونيات",
        specialty: "التعاونية",
        region: "فاس",
        availability: "متاح هذا الأسبوع",
        sessions: "29 موعدا",
        bio: "يواكب الديناميات الجماعية وتوزيع الأدوار وهيكلة أولويات التعاونيات.",
        imageSrc:
          "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&w=900&q=80",
        imageAlt: "صورة احترافية لمرافق تعاونيات",
        tone: "brand",
      },
      {
        id: "meryem-bennis",
        name: "مريم بنيس",
        role: "كوتش تسيير",
        specialty: "التسيير",
        region: "طنجة",
        availability: "موعدان متبقيان",
        sessions: "55 موعدا",
        bio: "تشتغل على التنظيم اليومي والأولويات وتدبير الوقت ووضوح التتبع.",
        imageSrc:
          "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=900&q=80",
        imageAlt: "صورة لمدربة احترافية متخصصة في التسيير",
        tone: "accent",
      },
      {
        id: "nabil-azzouzi",
        name: "نبيل عزوزي",
        role: "مستشار استراتيجية",
        specialty: "الاستراتيجية",
        region: "أكادير",
        availability: "متاح يوم الجمعة",
        sessions: "34 موعدا",
        bio: "يساعد على تحديد الأولويات وتعزيز القيمة المقترحة وربط القرارات بأهداف المشروع.",
        imageSrc:
          "https://images.unsplash.com/photo-1504593811423-6dd665756598?auto=format&fit=crop&w=900&q=80",
        imageAlt: "صورة لمستشار استراتيجية في فضاء معاصر",
        tone: "neutral",
      },
    ] satisfies Expert[],
  },
} as const;

function toneClass(tone: Expert["tone"]) {
  switch (tone) {
    case "brand":
      return "bg-brand/10 text-brand-emphasis";
    case "accent":
      return "bg-accent/12 text-accent-contrast dark:text-accent";
    default:
      return "bg-surface text-muted-strong";
  }
}

export default function ExpertsPage({
  locale = defaultLocale,
}: {
  locale?: Locale;
}) {
  const copy = expertsContent[locale];
  const [activeFilter, setActiveFilter] = useState(copy.filters[0]);

  const filteredExperts = useMemo(() => {
    if (activeFilter === copy.filters[0]) {
      return copy.experts;
    }

    return copy.experts.filter((expert) => expert.specialty === activeFilter);
  }, [activeFilter, copy]);

  const spotlightExpert = filteredExperts[0] ?? copy.experts[0];

  return (
    <main className="mx-auto flex w-full max-w-360 flex-1 flex-col px-3 pb-16 pt-8 sm:px-4 sm:pt-10 lg:px-6 lg:pb-24">
      <section className="relative overflow-hidden px-2 py-6 sm:px-3 sm:py-8 lg:px-4 lg:py-10 xl:px-6">
        <div className="grid gap-8 xl:grid-cols-[0.96fr_1.04fr] xl:items-center">
          <div className="space-y-6">
            <div className="space-y-4">
              <span className="hero-kicker">{copy.heroKicker}</span>
              <h1 className="max-w-4xl font-display text-[clamp(2.35rem,6vw,5.4rem)] leading-[0.94] tracking-[-0.05em] text-foreground">
                {copy.heroTitle}
              </h1>
              <p className="max-w-2xl text-[1rem] leading-8 text-muted-strong sm:text-[1.08rem]">
                {copy.heroDescription}
              </p>
            </div>

            <div className="flex flex-col gap-3 sm:flex-row sm:flex-wrap">
              <Link
                href={localizeHref(locale, "/contact")}
                className="inline-flex min-h-12 items-center justify-center rounded-full bg-brand px-6 text-sm font-semibold text-brand-contrast shadow-soft transition-colors hover:bg-brand-700"
              >
                {copy.primaryCta}
              </Link>
              <Link
                href={localizeHref(locale, "/create-project")}
                className="inline-flex min-h-12 items-center justify-center rounded-full border border-border-strong/55 bg-background/85 px-6 text-sm font-semibold text-foreground transition-colors hover:bg-surface-strong"
              >
                {copy.secondaryCta}
              </Link>
            </div>

            <div className="grid gap-3 sm:grid-cols-3">
              <article className="rounded-[1.5rem] border border-border/70 bg-background/62 p-4 shadow-card backdrop-blur-xl">
                <p className="font-display text-2xl text-foreground">12+</p>
                <p className="mt-1 text-sm font-semibold text-muted-strong">
                  {copy.stat1Label}
                </p>
                <p className="mt-2 text-sm leading-6 text-muted">
                  {copy.stat1Detail}
                </p>
              </article>
              <article className="rounded-[1.5rem] border border-border/70 bg-background/62 p-4 shadow-card backdrop-blur-xl">
                <p className="font-display text-2xl text-foreground">1:1</p>
                <p className="mt-1 text-sm font-semibold text-muted-strong">
                  {copy.stat2Label}
                </p>
                <p className="mt-2 text-sm leading-6 text-muted">
                  {copy.stat2Detail}
                </p>
              </article>
              <article className="rounded-[1.5rem] border border-border/70 bg-background/62 p-4 shadow-card backdrop-blur-xl">
                <p className="font-display text-2xl text-foreground">{copy.stat3Value}</p>
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
              src={spotlightExpert.imageSrc}
              alt={spotlightExpert.imageAlt}
              width="1200"
              height="1200"
              priority
              className="h-[18.5rem] w-full object-cover object-top sm:h-[24rem] xl:h-[31rem]"
            />
            <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(180deg,rgba(16,27,20,0.04),rgba(16,27,20,0.18)_42%,rgba(16,27,20,0.84))]" />

            <div className="absolute left-4 top-4 flex flex-wrap gap-2">
              <span className="inline-flex min-h-10 items-center rounded-full bg-background/84 px-4 text-sm font-semibold text-brand-emphasis shadow-card backdrop-blur-xl">
                {copy.spotlight}
              </span>
              <span
                className={`inline-flex min-h-10 items-center rounded-full px-4 text-sm font-semibold shadow-card backdrop-blur-xl ${toneClass(
                  spotlightExpert.tone,
                )}`}
              >
                {spotlightExpert.specialty}
              </span>
            </div>

            <div className="relative z-10 mx-4 -mt-10 grid gap-3 md:absolute md:inset-x-4 md:bottom-4 md:mx-0 md:mt-0 md:grid-cols-[1.04fr_0.96fr]">
              <div className="rounded-[1.6rem] bg-background/90 p-4 shadow-card backdrop-blur-xl sm:p-5">
                <p className="text-xs font-semibold tracking-[0.18em] text-muted uppercase">
                  {copy.recommendedProfile}
                </p>
                <h2 className="mt-3 font-display text-[1.45rem] leading-tight text-foreground sm:text-[1.72rem]">
                  {spotlightExpert.name}
                </h2>
                <p className="mt-2 text-sm font-semibold text-brand-emphasis">
                  {spotlightExpert.role}
                </p>
                <p className="mt-3 text-sm leading-6 text-muted-strong">
                  {spotlightExpert.bio}
                </p>
              </div>

              <div className="rounded-[1.6rem] bg-background/84 p-4 shadow-card backdrop-blur-xl sm:p-5">
                <p className="text-xs font-semibold tracking-[0.18em] text-muted uppercase">
                  {copy.quickLook}
                </p>
                <div className="mt-3 grid gap-3">
                  <div className="flex items-center justify-between gap-3">
                    <span className="text-sm text-muted">{copy.region}</span>
                    <span className="text-sm font-semibold text-foreground">
                      {spotlightExpert.region}
                    </span>
                  </div>
                  <div className="flex items-center justify-between gap-3">
                    <span className="text-sm text-muted">{copy.availability}</span>
                    <span className="text-sm font-semibold text-foreground">
                      {spotlightExpert.availability}
                    </span>
                  </div>
                  <div className="flex items-center justify-between gap-3">
                    <span className="text-sm text-muted">{copy.support}</span>
                    <span className="text-sm font-semibold text-foreground">
                      {spotlightExpert.sessions}
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
              <span className="section-label">{copy.expertiseTitle}</span>
              <h2 className="font-display text-[1.9rem] leading-tight text-foreground sm:text-[2.25rem]">
                {copy.expertiseHeading}
              </h2>
            </div>
            <div className="rounded-full border border-border/70 bg-background/70 px-4 py-2 text-sm text-muted-strong">
              {filteredExperts.length} {copy.visibleExperts}
            </div>
          </div>

          <div className="flex flex-wrap gap-2">
            {copy.filters.map((filter) => {
              const active = activeFilter === filter;

              return (
                <button
                  key={filter}
                  type="button"
                  onClick={() => setActiveFilter(filter)}
                  className={`inline-flex min-h-11 items-center rounded-full px-4 text-sm font-semibold transition-colors ${
                    active
                      ? "bg-brand text-brand-contrast shadow-soft"
                      : "border border-border/70 bg-background/80 text-muted-strong hover:bg-surface-strong hover:text-foreground"
                  }`}
                  aria-pressed={active}
                >
                  {filter}
                </button>
              );
            })}
          </div>

          <div className="grid gap-4 xl:grid-cols-[1.08fr_0.92fr]">
            <div className="grid gap-4 md:grid-cols-2">
              {filteredExperts.map((expert) => (
                <article
                  key={expert.id}
                  className="group overflow-hidden rounded-[1.95rem] border border-border/70 bg-background/68 shadow-card backdrop-blur-xl transition-transform duration-300 hover:-translate-y-1"
                >
                  <div className="relative overflow-hidden">
                    <Image
                      unoptimized
                      src={expert.imageSrc}
                      alt={expert.imageAlt}
                      width="900"
                      height="900"
                      className="h-64 w-full object-cover object-top transition-transform duration-500 group-hover:scale-[1.04]"
                    />
                    <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(180deg,rgba(16,27,20,0.02),rgba(16,27,20,0.16)_40%,rgba(16,27,20,0.84))]" />
                    <div className="absolute left-4 top-4 flex flex-wrap gap-2">
                      <span
                        className={`inline-flex min-h-9 items-center rounded-full px-4 text-xs font-semibold tracking-[0.18em] uppercase shadow-card backdrop-blur-xl ${toneClass(
                          expert.tone,
                        )}`}
                      >
                        {expert.specialty}
                      </span>
                    </div>
                    <div className="absolute inset-x-4 bottom-4 rounded-[1.2rem] bg-background/84 px-4 py-3 shadow-card backdrop-blur-xl">
                      <p className="text-sm font-semibold text-foreground">
                        {expert.availability}
                      </p>
                      <p className="mt-1 text-xs font-semibold tracking-[0.18em] text-muted uppercase">
                        {expert.region}
                      </p>
                    </div>
                  </div>

                  <div className="p-5 sm:p-6">
                    <h3 className="font-display text-[1.4rem] leading-tight text-foreground">
                      {expert.name}
                    </h3>
                    <p className="mt-2 text-sm font-semibold text-brand-emphasis">
                      {expert.role}
                    </p>
                    <p className="mt-3 text-sm leading-7 text-muted">
                      {expert.bio}
                    </p>

                    <div className="mt-5 flex items-center justify-between gap-3">
                      <span className="text-xs font-semibold tracking-[0.18em] text-muted uppercase">
                        {expert.sessions}
                      </span>
                      <button
                        type="button"
                        className="inline-flex min-h-10 items-center rounded-full bg-surface px-4 text-sm font-semibold text-brand-emphasis transition-colors hover:bg-surface-strong"
                      >
                        {copy.meetingCta}
                      </button>
                    </div>
                  </div>
                </article>
              ))}
            </div>

            <aside className="space-y-4">
              <article className="rounded-[2rem] border border-border/70 bg-[linear-gradient(135deg,color-mix(in_oklab,var(--brand)_14%,transparent),color-mix(in_oklab,var(--accent)_10%,transparent))] p-5 shadow-card sm:p-6">
                <p className="section-label">{copy.whyItWorks}</p>
                <h3 className="mt-3 font-display text-[1.6rem] leading-tight text-foreground">
                  {copy.whyTitle}
                </h3>
                <p className="mt-3 text-sm leading-7 text-muted-strong">
                  {copy.whyDescription}
                </p>
                <div className="mt-5 flex flex-wrap gap-2">
                  {copy.whyChips.map((chip) => (
                    <span key={chip} className="theme-chip">
                      {chip}
                    </span>
                  ))}
                </div>
              </article>

              <article className="rounded-[2rem] border border-border/70 bg-background/68 p-5 shadow-card backdrop-blur-xl sm:p-6">
                <p className="section-label">{copy.journey}</p>
                <div className="mt-4 grid gap-3">
                  {[copy.step1, copy.step2, copy.step3].map((step, index) => (
                    <div key={step} className="rounded-[1.4rem] bg-surface/82 p-4 shadow-card">
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
