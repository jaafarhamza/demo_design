import Image from "next/image";
import Link from "next/link";
import { defaultLocale, type Locale, localizeHref } from "../i18n";

const communityContent = {
  fr: {
    heroKicker: "Communaute",
    heroTitle: "Une page communaute qui donne de la vie, de l'entraide et de la confiance.",
    heroDescription:
      "Ce hub communautaire relie discussions, groupes, retours terrain et evenements pour faire exister une dynamique collective autour de l'INDH Digitale.",
    primaryCta: "Rejoindre la communaute",
    secondaryCta: "Voir les experts",
    stat1Label: "espaces communautaires",
    stat1Detail: "groupes, discussions et evenements",
    stat2Value: "Live",
    stat2Label: "dynamique active",
    stat2Detail: "avec echanges, webinaires et retours",
    stat3Label: "participation inclusive",
    stat3Detail: "pour des echanges plus accessibles",
    spotlight: "Spotlight communaute",
    story: "Histoire collective",
    storyTitle: "Des conversations utiles pour apprendre aussi des autres.",
    storyDescription:
      "La communaute devient un prolongement naturel des formations, des experts et du suivi projet.",
    live: "En direct",
    liveStats: [
      ["Echanges actifs", "24 discussions"],
      ["Webinaires", "2 cette semaine"],
      ["Groupes", "3 thematiques"],
    ],
    groupsEyebrow: "Groupes communautaires",
    groupsTitle: "Des espaces differents selon les profils et les besoins.",
    whyEyebrow: "Pourquoi cette page marche",
    whyTitle: "Une communaute utile relie contenu, personnes et temps forts.",
    whyDescription:
      "Le design doit montrer une energie collective tout en restant lisible: discussions, groupes et evenements doivent se comprendre vite.",
    chips: ["discussions", "groupes", "events", "entraide"],
    eventsEyebrow: "Evenements a venir",
    discussionsEyebrow: "Discussions et entraide",
    discussionsTitle: "Des sujets concrets pour nourrir la progression des beneficiaires.",
    discussionCta: "Voir la discussion",
    groups: [
      {
        title: "Jeunes entrepreneurs",
        description:
          "Un espace pour partager les premiers pas, les blocages et les retours d'experience.",
        members: "420 membres",
        tone: "brand",
      },
      {
        title: "Cooperatives actives",
        description:
          "Des echanges sur l'organisation collective, les roles et les priorites terrain.",
        members: "180 membres",
        tone: "accent",
      },
      {
        title: "Digital et visibilite",
        description:
          "Des discussions pratiques autour de la communication, des outils et de la presence en ligne.",
        members: "260 membres",
        tone: "neutral",
      },
    ],
    discussions: [
      {
        category: "Discussion en cours",
        title: "Comment prioriser les premieres actions d'un nouveau projet ?",
        description:
          "Une conversation utile pour aider les porteurs de projets a distinguer l'essentiel du secondaire.",
        replies: "18 reponses",
      },
      {
        category: "Conseil expert",
        title: "Quelles pieces preparer avant un premier rendez-vous financement ?",
        description:
          "Des recommandations concretes partagees par les experts et les beneficiaires deja accompagnes.",
        replies: "9 reponses",
      },
      {
        category: "Retour terrain",
        title: "Quels outils simples utilisez-vous pour suivre l'avancement ?",
        description:
          "Un fil de discussion sur les habitudes de pilotage leger, mobile et adapte au terrain.",
        replies: "12 reponses",
      },
    ],
    events: [
      {
        date: "24 Avril",
        title: "Webinaire lancement de projet",
        description:
          "Une session live pour comprendre le passage de l'idee au plan d'action.",
      },
      {
        date: "29 Avril",
        title: "Atelier financement terrain",
        description:
          "Un temps d'echange pour mieux preparer le budget et les besoins prioritaires.",
      },
    ],
  },
  ar: {
    heroKicker: "المجتمع",
    heroTitle: "صفحة مجتمع تمنح الحياة والتعاون والثقة.",
    heroDescription:
      "يربط هذا الفضاء المجتمعي بين النقاشات والمجموعات والتجارب الميدانية والفعاليات لخلق دينامية جماعية حول INDH Digitale.",
    primaryCta: "الانضمام إلى المجتمع",
    secondaryCta: "عرض الخبراء",
    stat1Label: "فضاءات مجتمعية",
    stat1Detail: "مجموعات ونقاشات وفعاليات",
    stat2Value: "مباشر",
    stat2Label: "دينامية نشطة",
    stat2Detail: "مع تبادلات وندوات وتجارب",
    stat3Label: "مشاركة شاملة",
    stat3Detail: "من أجل تبادلات أسهل وأكثر قربا",
    spotlight: "واجهة المجتمع",
    story: "قصة جماعية",
    storyTitle: "نقاشات مفيدة للتعلم أيضا من الآخرين.",
    storyDescription:
      "يصبح المجتمع امتدادا طبيعيا للتكوينات والخبراء وتتبع المشروع.",
    live: "مباشر",
    liveStats: [
      ["نقاشات نشطة", "24 نقاشا"],
      ["ندوات", "2 هذا الأسبوع"],
      ["مجموعات", "3 مواضيع"],
    ],
    groupsEyebrow: "المجموعات المجتمعية",
    groupsTitle: "فضاءات مختلفة بحسب الملفات والحاجيات.",
    whyEyebrow: "لماذا تنجح هذه الصفحة",
    whyTitle: "مجتمع مفيد يربط المحتوى بالأشخاص وبالمواعيد المهمة.",
    whyDescription:
      "يجب أن يُظهر التصميم طاقة جماعية مع الحفاظ على الوضوح: النقاشات والمجموعات والفعاليات يجب أن تُفهم بسرعة.",
    chips: ["نقاشات", "مجموعات", "فعاليات", "تعاون"],
    eventsEyebrow: "فعاليات قادمة",
    discussionsEyebrow: "نقاشات وتعاون",
    discussionsTitle: "مواضيع عملية تغذي تقدم المستفيدين.",
    discussionCta: "عرض النقاش",
    groups: [
      {
        title: "رواد الأعمال الشباب",
        description: "فضاء لمشاركة البدايات الأولى والعراقيل والتجارب الميدانية.",
        members: "420 عضوا",
        tone: "brand",
      },
      {
        title: "تعاونيات نشطة",
        description: "تبادلات حول التنظيم الجماعي والأدوار والأولويات الميدانية.",
        members: "180 عضوا",
        tone: "accent",
      },
      {
        title: "الرقمي والظهور",
        description: "نقاشات عملية حول التواصل والأدوات والحضور على الإنترنت.",
        members: "260 عضوا",
        tone: "neutral",
      },
    ],
    discussions: [
      {
        category: "نقاش جار",
        title: "كيف نحدد أولى الخطوات الأكثر أولوية في مشروع جديد؟",
        description:
          "محادثة مفيدة تساعد حاملي المشاريع على التمييز بين الأساسي والثانوي.",
        replies: "18 ردا",
      },
      {
        category: "نصيحة خبير",
        title: "ما الوثائق التي يجب تحضيرها قبل أول موعد حول التمويل؟",
        description:
          "توصيات عملية يتقاسمها الخبراء والمستفيدون الذين استفادوا من المواكبة.",
        replies: "9 ردود",
      },
      {
        category: "تجربة ميدانية",
        title: "ما الأدوات البسيطة التي تستعملونها لتتبع التقدم؟",
        description:
          "خيط نقاش حول عادات التتبع الخفيف والمتحرك والملائم للميدان.",
        replies: "12 ردا",
      },
    ],
    events: [
      {
        date: "24 أبريل",
        title: "ويبينار إطلاق المشروع",
        description: "جلسة مباشرة لفهم الانتقال من الفكرة إلى خطة عمل.",
      },
      {
        date: "29 أبريل",
        title: "ورشة تمويل ميداني",
        description: "وقت للتبادل من أجل إعداد الميزانية والحاجيات ذات الأولوية.",
      },
    ],
  },
} as const;

function toneClass(tone: "brand" | "accent" | "neutral") {
  switch (tone) {
    case "brand":
      return "bg-brand/10 text-brand-emphasis";
    case "accent":
      return "bg-accent/12 text-accent-contrast dark:text-accent";
    default:
      return "bg-surface text-muted-strong";
  }
}

export default function CommunityPage({
  locale = defaultLocale,
}: {
  locale?: Locale;
}) {
  const copy = communityContent[locale];

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
                href={localizeHref(locale, "/experts")}
                className="inline-flex min-h-12 items-center justify-center rounded-full border border-border-strong/55 bg-background/85 px-6 text-sm font-semibold text-foreground transition-colors hover:bg-surface-strong"
              >
                {copy.secondaryCta}
              </Link>
            </div>

            <div className="grid gap-3 sm:grid-cols-3">
              <article className="rounded-[1.5rem] border border-border/70 bg-background/62 p-4 shadow-card backdrop-blur-xl">
                <p className="font-display text-2xl text-foreground">3</p>
                <p className="mt-1 text-sm font-semibold text-muted-strong">
                  {copy.stat1Label}
                </p>
                <p className="mt-2 text-sm leading-6 text-muted">
                  {copy.stat1Detail}
                </p>
              </article>
              <article className="rounded-[1.5rem] border border-border/70 bg-background/62 p-4 shadow-card backdrop-blur-xl">
                <p className="font-display text-2xl text-foreground">{copy.stat2Value}</p>
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
              src="https://images.unsplash.com/photo-1522204538344-922f76ecc041?auto=format&fit=crop&w=1400&q=80"
              alt={
                locale === "ar"
                  ? "مجموعة من المهنيين الشباب في نقاش تعاوني حول طاولة"
                  : "Groupe de jeunes professionnels en discussion collaborative autour d'une table"
              }
              width="1400"
              height="934"
              priority
              className="h-[18.5rem] w-full object-cover sm:h-[24rem] xl:h-[31rem]"
            />
            <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(180deg,rgba(16,27,20,0.04),rgba(16,27,20,0.16)_42%,rgba(16,27,20,0.84))]" />

            <div className="absolute left-4 top-4 flex flex-wrap gap-2">
              <span className="inline-flex min-h-10 items-center rounded-full bg-background/84 px-4 text-sm font-semibold text-brand-emphasis shadow-card backdrop-blur-xl">
                {copy.spotlight}
              </span>
            </div>

            <div className="relative z-10 mx-4 -mt-10 grid gap-3 md:absolute md:inset-x-4 md:bottom-4 md:mx-0 md:mt-0 md:grid-cols-[1.05fr_0.95fr]">
              <div className="rounded-[1.6rem] bg-background/90 p-4 shadow-card backdrop-blur-xl sm:p-5">
                <p className="text-xs font-semibold tracking-[0.18em] text-muted uppercase">
                  {copy.story}
                </p>
                <h2 className="mt-3 font-display text-[1.45rem] leading-tight text-foreground sm:text-[1.72rem]">
                  {copy.storyTitle}
                </h2>
                <p className="mt-3 text-sm leading-6 text-muted-strong">
                  {copy.storyDescription}
                </p>
              </div>

              <div className="rounded-[1.6rem] bg-background/84 p-4 shadow-card backdrop-blur-xl sm:p-5">
                <p className="text-xs font-semibold tracking-[0.18em] text-muted uppercase">
                  {copy.live}
                </p>
                <div className="mt-3 grid gap-3">
                  {copy.liveStats.map(([label, value]) => (
                    <div key={label} className="flex items-center justify-between gap-3">
                      <span className="text-sm text-muted">{label}</span>
                      <span className="text-sm font-semibold text-foreground">
                        {value}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </article>
        </div>
      </section>

      <section className="relative mt-8 px-2 py-8 sm:px-3 sm:py-10 lg:mt-12 lg:px-4 lg:py-14 xl:px-6">
        <div className="grid gap-4 xl:grid-cols-[1.02fr_0.98fr]">
          <div className="space-y-4">
            <div className="space-y-3">
              <span className="section-label">{copy.groupsEyebrow}</span>
              <h2 className="font-display text-[1.9rem] leading-tight text-foreground sm:text-[2.25rem]">
                {copy.groupsTitle}
              </h2>
            </div>

            <div className="grid gap-4 md:grid-cols-3 xl:grid-cols-1">
              {copy.groups.map((group) => (
                <article
                  key={group.title}
                  className="rounded-[1.9rem] border border-border/70 bg-background/68 p-5 shadow-card backdrop-blur-xl sm:p-6"
                >
                  <span
                    className={`inline-flex min-h-9 items-center rounded-full px-4 text-xs font-semibold tracking-[0.18em] uppercase ${toneClass(
                      group.tone,
                    )}`}
                  >
                    {group.members}
                  </span>
                  <h3 className="mt-4 font-display text-[1.4rem] leading-tight text-foreground">
                    {group.title}
                  </h3>
                  <p className="mt-3 text-sm leading-7 text-muted">
                    {group.description}
                  </p>
                </article>
              ))}
            </div>
          </div>

          <div className="space-y-4">
            <article className="rounded-[2rem] border border-border/70 bg-[linear-gradient(135deg,color-mix(in_oklab,var(--brand)_14%,transparent),color-mix(in_oklab,var(--accent)_10%,transparent))] p-5 shadow-card sm:p-6">
              <p className="section-label">{copy.whyEyebrow}</p>
              <h3 className="mt-3 font-display text-[1.6rem] leading-tight text-foreground">
                {copy.whyTitle}
              </h3>
              <p className="mt-3 text-sm leading-7 text-muted-strong">
                {copy.whyDescription}
              </p>
              <div className="mt-5 flex flex-wrap gap-2">
                {copy.chips.map((chip) => (
                  <span key={chip} className="theme-chip">
                    {chip}
                  </span>
                ))}
              </div>
            </article>

            <article className="rounded-[2rem] border border-border/70 bg-background/68 p-5 shadow-card backdrop-blur-xl sm:p-6">
              <p className="section-label">{copy.eventsEyebrow}</p>
              <div className="mt-4 grid gap-3">
                {copy.events.map((event) => (
                  <div
                    key={event.title}
                    className="rounded-[1.4rem] bg-surface/82 p-4 shadow-card"
                  >
                    <p className="text-xs font-semibold tracking-[0.18em] text-muted uppercase">
                      {event.date}
                    </p>
                    <p className="mt-2 text-sm font-semibold text-foreground">
                      {event.title}
                    </p>
                    <p className="mt-2 text-sm leading-6 text-muted">
                      {event.description}
                    </p>
                  </div>
                ))}
              </div>
            </article>
          </div>
        </div>
      </section>

      <section className="relative mt-8 px-2 py-8 sm:px-3 sm:py-10 lg:mt-12 lg:px-4 lg:py-14 xl:px-6">
        <div className="space-y-6">
          <div className="space-y-3">
            <span className="section-label">{copy.discussionsEyebrow}</span>
            <h2 className="font-display text-[1.9rem] leading-tight text-foreground sm:text-[2.25rem]">
              {copy.discussionsTitle}
            </h2>
          </div>

          <div className="grid gap-4 md:grid-cols-3">
            {copy.discussions.map((discussion) => (
              <article
                key={discussion.title}
                className="rounded-[1.9rem] border border-border/70 bg-background/68 p-5 shadow-card backdrop-blur-xl sm:p-6"
              >
                <p className="text-xs font-semibold tracking-[0.18em] text-muted uppercase">
                  {discussion.category}
                </p>
                <h3 className="mt-3 font-display text-[1.35rem] leading-tight text-foreground">
                  {discussion.title}
                </h3>
                <p className="mt-3 text-sm leading-7 text-muted">
                  {discussion.description}
                </p>
                <div className="mt-5 flex items-center justify-between gap-3">
                  <span className="text-xs font-semibold tracking-[0.18em] text-muted uppercase">
                    {discussion.replies}
                  </span>
                  <button
                    type="button"
                    className="inline-flex min-h-10 items-center rounded-full bg-surface px-4 text-sm font-semibold text-brand-emphasis transition-colors hover:bg-surface-strong"
                  >
                    {copy.discussionCta}
                  </button>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
