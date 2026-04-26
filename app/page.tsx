import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";
import { localizePath } from "./lib/i18n";
import { getRequestLocale, tr } from "./lib/request-locale";

const trustItems = [
  "Video HD orientee terrain",
  "Experts INDH disponibles",
  "Suivi de progression continu",
];

const keyStats = [
  { value: "120+", label: "modules guides" },
  { value: "35", label: "experts mobilises" },
  { value: "24/7", label: "acces plateforme" },
];

const topicChips = [
  "Montage de projet",
  "Business plan",
  "Financement INDH",
  "Marketing local",
];

const formations = [
  {
    title: "Creer un projet INDH de A a Z",
    level: "Debutant",
    duration: "6h 20",
    format: "Video + atelier",
    image:
      "https://images.pexels.com/photos/8134161/pexels-photo-8134161.jpeg?auto=compress&cs=tinysrgb&w=1200",
    description:
      "Apprenez a structurer votre idee, valider vos priorites et preparer un dossier convaincant.",
    badge: "Nouveau",
    learners: "1 820 inscrits",
  },
  {
    title: "Business plan pratique pour cooperatives",
    level: "Intermediaire",
    duration: "4h 45",
    format: "Cas reels",
    image:
      "https://images.pexels.com/photos/8284732/pexels-photo-8284732.jpeg?auto=compress&cs=tinysrgb&w=1200",
    description:
      "Modele complet avec tableaux financiers simples, hypotheses claires et feuille de route d'execution.",
    badge: "Populaire",
    learners: "1 260 inscrits",
  },
  {
    title: "Financement et subventions INDH",
    level: "Intermediaire",
    duration: "3h 30",
    format: "Guides + templates",
    image:
      "https://images.pexels.com/photos/15141500/pexels-photo-15141500.jpeg?auto=compress&cs=tinysrgb&w=1200",
    description:
      "Comprendre les mecanismes d'appui, les criteres d'eligibilite et la preparation des pieces requises.",
    badge: "Essentiel",
    learners: "2 100 inscrits",
  },
  {
    title: "Marketing local et vente digitale",
    level: "Debutant",
    duration: "5h 10",
    format: "Video + quiz",
    image:
      "https://images.pexels.com/photos/7693683/pexels-photo-7693683.jpeg?auto=compress&cs=tinysrgb&w=1200",
    description:
      "Construisez une strategie simple pour attirer des clients, fideliser et vendre de facon durable.",
    badge: "Tendance",
    learners: "980 inscrits",
  },
  {
    title: "Gestion de projet et suivi des indicateurs",
    level: "Avance",
    duration: "7h 00",
    format: "Masterclass",
    image:
      "https://images.pexels.com/photos/7433900/pexels-photo-7433900.jpeg?auto=compress&cs=tinysrgb&w=1200",
    description:
      "Pilotez vos activites avec des KPIs utiles, un calendrier realiste et un suivi hebdomadaire efficace.",
    badge: "Certifiant",
    learners: "740 inscrits",
  },
  {
    title: "Leadership et gouvernance associative",
    level: "Intermediaire",
    duration: "4h 05",
    format: "Live + replay",
    image:
      "https://images.pexels.com/photos/7693733/pexels-photo-7693733.jpeg?auto=compress&cs=tinysrgb&w=1200",
    description:
      "Renforcez l'organisation interne, la prise de decision et la cohesion autour des objectifs communs.",
    badge: "Live",
    learners: "1 140 inscrits",
  },
];

const experts = [
  {
    name: "Yassine El Amrani",
    role: "Consultant montage de projet",
    image:
      "https://images.pexels.com/photos/3867849/pexels-photo-3867849.jpeg?auto=compress&cs=tinysrgb&w=600",
    region: "Casablanca-Settat",
    rating: "4.9",
    projects: "126 projets accompagnes",
    availability: "Disponible cette semaine",
  },
  {
    name: "Salma Idrissi",
    role: "Experte financement INDH",
    image:
      "https://images.pexels.com/photos/7652054/pexels-photo-7652054.jpeg?auto=compress&cs=tinysrgb&w=600",
    region: "Rabat-Sale-Kenitra",
    rating: "4.8",
    projects: "98 projets accompagnes",
    availability: "Disponible en visio",
  },
  {
    name: "Mehdi Ait Lahcen",
    role: "Coach business plan",
    image:
      "https://images.pexels.com/photos/5265333/pexels-photo-5265333.jpeg?auto=compress&cs=tinysrgb&w=600",
    region: "Marrakech-Safi",
    rating: "4.7",
    projects: "84 projets accompagnes",
    availability: "Prochain creneau: 48h",
  },
  {
    name: "Sara Benjelloun",
    role: "Mentor marketing digital",
    image:
      "https://images.pexels.com/photos/9242832/pexels-photo-9242832.jpeg?auto=compress&cs=tinysrgb&w=600",
    region: "Fes-Meknes",
    rating: "4.9",
    projects: "112 projets accompagnes",
    availability: "Disponible cette semaine",
  },
  {
    name: "Omar Chraibi",
    role: "Expert suivi et KPI",
    image:
      "https://images.pexels.com/photos/8134161/pexels-photo-8134161.jpeg?auto=compress&cs=tinysrgb&w=600",
    region: "Tanger-Tetouan-Al Hoceima",
    rating: "4.8",
    projects: "91 projets accompagnes",
    availability: "Disponible en presentiel",
  },
  {
    name: "Nora Boussouf",
    role: "Formatrice ESS cooperative",
    image:
      "https://images.pexels.com/photos/8284732/pexels-photo-8284732.jpeg?auto=compress&cs=tinysrgb&w=600",
    region: "Souss-Massa",
    rating: "4.7",
    projects: "77 projets accompagnes",
    availability: "Prochain creneau: 72h",
  },
  {
    name: "Karim Boukili",
    role: "Consultant gouvernance",
    image:
      "https://images.pexels.com/photos/15141500/pexels-photo-15141500.jpeg?auto=compress&cs=tinysrgb&w=600",
    region: "Oriental",
    rating: "4.8",
    projects: "88 projets accompagnes",
    availability: "Disponible cette semaine",
  },
  {
    name: "Hajar El Fassi",
    role: "Coach leadership terrain",
    image:
      "https://images.pexels.com/photos/7693683/pexels-photo-7693683.jpeg?auto=compress&cs=tinysrgb&w=600",
    region: "Draa-Tafilalet",
    rating: "4.9",
    projects: "69 projets accompagnes",
    availability: "Disponible en visio",
  },
];

const communityGroups = [
  {
    name: "Groupe Ideation & Lancement",
    image:
      "https://images.pexels.com/photos/7433900/pexels-photo-7433900.jpeg?auto=compress&cs=tinysrgb&w=1200",
    members: "420 membres",
    focus: "Ideation",
    rhythm: "2 sessions / semaine",
    description:
      "Echangez avec des porteurs de projets pour transformer une idee en plan d'action concret.",
  },
  {
    name: "Business Plan Collaboratif",
    image:
      "https://images.pexels.com/photos/7693733/pexels-photo-7693733.jpeg?auto=compress&cs=tinysrgb&w=1200",
    members: "365 membres",
    focus: "Business plan",
    rhythm: "Atelier hebdomadaire",
    description:
      "Co-construction de business plans avec retours des mentors et exemples terrain INDH.",
  },
  {
    name: "Financement & Subventions",
    image:
      "https://images.pexels.com/photos/3867849/pexels-photo-3867849.jpeg?auto=compress&cs=tinysrgb&w=1200",
    members: "510 membres",
    focus: "Financement",
    rhythm: "Live Q&A chaque semaine",
    description:
      "Partage des opportunites, dossiers type et strategies de preparation pour le financement.",
  },
  {
    name: "Marketing Local & Vente",
    image:
      "https://images.pexels.com/photos/7652054/pexels-photo-7652054.jpeg?auto=compress&cs=tinysrgb&w=1200",
    members: "298 membres",
    focus: "Marketing",
    rhythm: "3 ateliers / mois",
    description:
      "Retours d'experience sur l'acquisition client locale et la communication digitale simple.",
  },
  {
    name: "Suivi KPI & Pilotage",
    image:
      "https://images.pexels.com/photos/5265333/pexels-photo-5265333.jpeg?auto=compress&cs=tinysrgb&w=1200",
    members: "254 membres",
    focus: "Pilotage",
    rhythm: "Sprint bi-mensuel",
    description:
      "Apprenez a suivre vos indicateurs et a ajuster vos priorites avec une communaute active.",
  },
  {
    name: "Mentorat Cooperatives",
    image:
      "https://images.pexels.com/photos/9242832/pexels-photo-9242832.jpeg?auto=compress&cs=tinysrgb&w=1200",
    members: "332 membres",
    focus: "Gouvernance",
    rhythm: "Forum quotidien",
    description:
      "Un espace d'entraide entre cooperatives pour renforcer organisation, leadership et impact.",
  },
];

const communityActivities = [
  "Live: Questions-reponses financement INDH (ce soir 18h00)",
  "Nouveau fil: Check-list dossier de subvention 2026",
  "Atelier pratique: Pricing et marge pour auto-entrepreneurs",
  "Session mentorat: Gouvernance associative et repartition des roles",
  "Cas reel partage: Projet agricole finance et deploye",
];

const pilotsByProvince = [
  {
    province: "Rabat-Sale-Kenitra",
    image:
      "https://images.pexels.com/photos/8134161/pexels-photo-8134161.jpeg?auto=compress&cs=tinysrgb&w=1200",
    pilot: "Samira El Mansouri",
    specialty: "Pilotage formation & execution",
    activeProjects: "42 projets actifs",
    completionRate: "88% finalisation",
    linkedTrack: "Parcours: montage + financement",
    nextReview: "Revue province: mardi 10h00",
  },
  {
    province: "Casablanca-Settat",
    image:
      "https://images.pexels.com/photos/8284732/pexels-photo-8284732.jpeg?auto=compress&cs=tinysrgb&w=1200",
    pilot: "Youssef Berrada",
    specialty: "Suivi terrain multisectoriel",
    activeProjects: "57 projets actifs",
    completionRate: "85% finalisation",
    linkedTrack: "Parcours: business plan avance",
    nextReview: "Revue province: jeudi 14h30",
  },
  {
    province: "Marrakech-Safi",
    image:
      "https://images.pexels.com/photos/15141500/pexels-photo-15141500.jpeg?auto=compress&cs=tinysrgb&w=1200",
    pilot: "Nadia Belkadi",
    specialty: "Coaching cooperatives",
    activeProjects: "38 projets actifs",
    completionRate: "90% finalisation",
    linkedTrack: "Parcours: ESS & gouvernance",
    nextReview: "Revue province: lundi 09h30",
  },
  {
    province: "Fes-Meknes",
    image:
      "https://images.pexels.com/photos/7693683/pexels-photo-7693683.jpeg?auto=compress&cs=tinysrgb&w=1200",
    pilot: "Karim Lahrach",
    specialty: "Accompagnement financement",
    activeProjects: "33 projets actifs",
    completionRate: "84% finalisation",
    linkedTrack: "Parcours: financement INDH",
    nextReview: "Revue province: mercredi 16h00",
  },
  {
    province: "Tanger-Tetouan-Al Hoceima",
    image:
      "https://images.pexels.com/photos/7433900/pexels-photo-7433900.jpeg?auto=compress&cs=tinysrgb&w=1200",
    pilot: "Salwa Amrani",
    specialty: "Pilotage KPI & indicateurs",
    activeProjects: "29 projets actifs",
    completionRate: "87% finalisation",
    linkedTrack: "Parcours: pilotage et reporting",
    nextReview: "Revue province: vendredi 11h00",
  },
  {
    province: "Souss-Massa",
    image:
      "https://images.pexels.com/photos/7693733/pexels-photo-7693733.jpeg?auto=compress&cs=tinysrgb&w=1200",
    pilot: "Othmane Kabbaj",
    specialty: "Animation communautaire",
    activeProjects: "31 projets actifs",
    completionRate: "82% finalisation",
    linkedTrack: "Parcours: marketing local",
    nextReview: "Revue province: jeudi 09h00",
  },
  {
    province: "Oriental",
    image:
      "https://images.pexels.com/photos/3867849/pexels-photo-3867849.jpeg?auto=compress&cs=tinysrgb&w=1200",
    pilot: "Hind Bennani",
    specialty: "Structuration des dossiers",
    activeProjects: "24 projets actifs",
    completionRate: "86% finalisation",
    linkedTrack: "Parcours: dossier & validation",
    nextReview: "Revue province: mardi 15h00",
  },
  {
    province: "Draa-Tafilalet",
    image:
      "https://images.pexels.com/photos/7652054/pexels-photo-7652054.jpeg?auto=compress&cs=tinysrgb&w=1200",
    pilot: "Rachid El Idrissi",
    specialty: "Pilotage zones rurales",
    activeProjects: "27 projets actifs",
    completionRate: "83% finalisation",
    linkedTrack: "Parcours: suivi terrain",
    nextReview: "Revue province: lundi 13h00",
  },
];

const provinceInsights = [
  { label: "Provinces suivies", value: "8" },
  { label: "Pilotes actifs", value: "23" },
  { label: "Projets en cours", value: "281" },
  { label: "Taux moyen", value: "86%" },
];

export async function generateMetadata(): Promise<Metadata> {
  const locale = await getRequestLocale();
  return {
    title: tr(locale, "Accueil | INDH Digitale", "الرئيسية | INDH Digitale"),
    description: tr(
      locale,
      "Plateforme INDH Digitale pour la formation, l'accompagnement et le suivi des projets.",
      "منصة INDH Digitale للتكوين والمواكبة وتتبع المشاريع.",
    ),
  };
}

function SearchIcon() {
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 24 24"
      className="h-5 w-5"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <circle cx="11" cy="11" r="7" />
      <path d="m20 20-3.5-3.5" />
    </svg>
  );
}

function ArrowIcon() {
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 24 24"
      className="h-4.5 w-4.5"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.9"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M5 12h14" />
      <path d="m13 5 7 7-7 7" />
    </svg>
  );
}

export default async function Home() {
  const locale = await getRequestLocale();
  const t = (fr: string, ar: string) => (locale === "ar" ? ar : fr);
  const href = (path: string) => localizePath(path, locale);
  const trustItemsLocalized =
    locale === "ar"
      ? ["فيديو HD موجه للميدان", "خبراء INDH متاحون", "تتبع مستمر للتقدم"]
      : trustItems;
  const topicChipsLocalized =
    locale === "ar"
      ? ["تركيب المشروع", "مخطط الأعمال", "تمويل INDH", "تسويق محلي"]
      : topicChips;
  const keyStatsLocalized =
    locale === "ar"
      ? [
          { value: "120+", label: "وحدات موجهة" },
          { value: "35", label: "خبراء معبؤون" },
          { value: "24/7", label: "ولوج المنصة" },
        ]
      : keyStats;
  return (
    <main className="flex-1">
      <section className="px-3 pb-12 pt-6 sm:px-4 sm:pb-14 sm:pt-8 ">
        <div className="mx-auto max-w-full">
          <div className="relative overflow-hidden ">
            <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-brand/40 to-transparent" />

            <div className="grid gap-4 xl:grid-cols-[1.04fr_0.96fr] xl:items-center xl:gap-6">
              <div className="relative space-y-7">
                <div className="inline-flex items-center gap-2  px-4 text-sm font-semibold tracking-[0.14em] text-brand-emphasis uppercase">
                  {t("Plateforme de formation INDH", "منصة التكوين INDH")}
                </div>

                <div className="space-y-4">
                  <h1 className="max-w-full text-[3rem] leading-[1.05] text-foreground md:text-[5rem] xl:text-[3.5rem] 2xl:text-[4rem]">
                    <span className="bg-gradient-to-r from-brand-700 via-brand to-accent bg-clip-text text-transparent">
                      {t("Apprenez vite,", "تعلّم بسرعة،")}
                    </span>{" "}
                    {t("structurez votre projet et avancez avec une", "هيكل مشروعك وتقدّم مع")}{" "}
                    <span className="bg-gradient-to-r from-accent-700 via-accent to-brand-600 bg-clip-text text-transparent">
                      {t("communaute engagee", "مجتمع ملتزم")}
                    </span>{" "}
                    {t("et un", "و")}{" "}
                    <span className="bg-gradient-to-r from-brand-700 via-brand to-success bg-clip-text text-transparent">
                      {t("encadrement expert", "تأطير خبير")}
                    </span>
                    .
                  </h1>
                  <p className="max-w-3xl text-[1.02rem] leading-7 text-muted-strong sm:text-[1.08rem]">
                    {t(
                      "INDH Digitale propose une experience de formation moderne, inspiree des meilleures plateformes e-learning, pour guider les porteurs de projets vers une execution claire, pratique et mesurable.",
                      "تقدم INDH Digitale تجربة تكوين حديثة مستلهمة من أفضل منصات التعلم، لمرافقة حاملي المشاريع نحو تنفيذ واضح وعملي وقابل للقياس.",
                    )}
                  </p>
                </div>

                <div className=" relative max-w-3xl rounded-[1.45rem] border-border/75 bg-surface/85 p-2.5">
                  <div className="flex flex-col gap-2 sm:flex-row sm:items-center">
                    <label htmlFor="hero-search" className="sr-only">
                      {t("Rechercher une formation", "البحث عن تكوين")}
                    </label>
                    <div className="flex min-h-12 flex-1 items-center gap-3 rounded-xl border border-border/70 bg-background/65 px-4 text-muted">
                      <SearchIcon />
                      <input
                        id="hero-search"
                        type="search"
                        placeholder={t(
                          "Rechercher: business plan, financement, gestion...",
                          "ابحث: مخطط الأعمال، التمويل، التدبير...",
                        )}
                        className="w-full border-0 bg-transparent text-sm text-foreground placeholder:text-muted outline-none sm:text-[0.96rem]"
                      />
                    </div>
                    <button
                      type="button"
                      className="inline-flex min-h-12 items-center justify-center gap-2 rounded-xl bg-brand px-5 text-sm font-semibold text-brand-contrast transition-colors hover:bg-brand-700"
                    >
                      {t("Explorer", "استكشاف")}
                      <ArrowIcon />
                    </button>
                  </div>
                  <div className="mt-2 flex flex-wrap gap-2">
                    {topicChipsLocalized.map((chip) => (
                      <span
                        key={chip}
                        className="inline-flex min-h-9 items-center rounded-full border border-border/65 bg-surface px-3 text-xs font-medium text-muted-strong sm:text-sm"
                      >
                        {chip}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="flex flex-wrap gap-3">
                  <Link
                    href={href("/")}
                    className="inline-flex min-h-12 items-center justify-center rounded-full bg-brand px-5 text-sm font-semibold text-brand-contrast shadow-soft transition-colors hover:bg-brand-700"
                  >
                    {t("Commencer la formation", "ابدأ التكوين")}
                  </Link>
                  <Link
                    href={href("/formation")}
                    className="inline-flex min-h-12 items-center justify-center rounded-full border border-border-strong/60 bg-surface px-5 text-sm font-semibold text-foreground transition-colors hover:bg-surface-strong"
                  >
                    {t("Voir le parcours complet", "عرض المسار الكامل")}
                  </Link>
                </div>

                <ul className="grid gap-2.5 pt-1 sm:grid-cols-3">
                  {trustItemsLocalized.map((item) => (
                    <li
                      key={item}
                      className="inline-flex min-h-11 items-center rounded-full border border-border/70 bg-background/55 px-4 text-sm text-muted-strong"
                    >
                      {item}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="relative">
                <div className="relative overflow-hidden rounded-[1.6rem] border border-border/70 bg-black shadow-[0_24px_55px_color-mix(in_oklab,var(--foreground)_18%,transparent)]">
                  <div className="pointer-events-none absolute inset-x-0 top-0 z-10 flex items-center justify-between px-4 py-3 text-[0.72rem] font-semibold tracking-[0.16em] text-white/90 uppercase sm:px-5 sm:text-xs">
                    <span>Session immersive</span>
                    <span>INDH DIGITALE</span>
                  </div>

                  <video
                    className="hero-video aspect-[16/10] w-full object-cover"
                    src="/VID-20260418.mp4"
                    autoPlay
                    muted
                    loop
                    controls
                    preload="metadata"
                    playsInline
                  >
                    Votre navigateur ne prend pas en charge la lecture video.
                  </video>

                  <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/62 via-black/14 to-black/38" />
                </div>

                <div className="mt-3 grid gap-3 sm:grid-cols-3">
                  {keyStatsLocalized.map((stat) => (
                    <article
                      key={stat.label}
                      className="rounded-2xl border border-border/70 bg-surface/92 px-4 py-3 backdrop-blur"
                    >
                      <p className="font-display text-[1.35rem] leading-none text-foreground sm:text-[1.6rem]">
                        {stat.value}
                      </p>
                      <p className="mt-2 text-xs tracking-[0.1em] text-muted uppercase">
                        {stat.label}
                      </p>
                    </article>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="px-3 pb-16 sm:px-4 sm:pb-20 lg:px-6 lg:pb-24">
        <div className="mx-auto max-w-full">
          <div className="flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <p className="text-xs font-semibold tracking-[0.2em] text-muted uppercase">
                {t("Formations recommandees", "تكوينات موصى بها")}
              </p>
              <h2 className="mt-1 text-3xl leading-tight text-foreground sm:text-[3.5rem]">
                {t("Une experience premium de formation.", "تجربة تكوين احترافية.")}
              </h2>
              <p className="mt-2 max-w-2xl text-sm leading-6 text-muted-strong sm:text-[0.98rem]">
                {t(
                  "Contenus video, parcours progressifs et accompagnement expert pour passer de l'idee a l'execution.",
                  "محتوى فيديو، مسارات تدريجية ومواكبة خبراء للانتقال من الفكرة إلى التنفيذ.",
                )}
              </p>
            </div>
            <Link
              href={href("/formation")}
              className="inline-flex min-h-11 items-center justify-center rounded-full bg-brand px-5 text-sm font-semibold text-brand-contrast transition-colors hover:bg-brand-700"
            >
              {t("Voir toutes les formations", "عرض كل التكوينات")}
            </Link>
          </div>

          <div className="mt-6 grid gap-4 xl:grid-cols-[1.2fr_0.8fr]">
            <article className="group relative overflow-hidden rounded-[1.75rem] border border-border/70 bg-surface shadow-card">
              <Image
                src={formations[0].image}
                alt={`Formation vedette: ${formations[0].title}`}
                width={1200}
                height={720}
                className="h-[22rem] w-full object-cover transition-transform duration-700 group-hover:scale-[1.04] sm:h-[25rem]"
                sizes="(min-width: 1280px) 62vw, 100vw"
              />
              <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/78 via-black/28 to-transparent" />
              <div className="absolute inset-x-0 bottom-0 p-4 sm:p-5">
                <div className="flex items-center justify-between gap-3">
                  <span className="inline-flex min-h-8 items-center rounded-full border border-white/30 bg-black/55 px-3 text-xs font-semibold tracking-[0.08em] text-white uppercase">
                    {formations[0].badge}
                  </span>
                  <span className="text-xs font-semibold text-white/90">{formations[0].learners}</span>
                </div>
                <h3 className="mt-3 text-2xl leading-tight text-white sm:text-[2rem]">{formations[0].title}</h3>
                <p className="mt-2 max-w-2xl text-sm leading-6 text-white/86">{formations[0].description}</p>
                <div className="mt-3 flex flex-wrap gap-2">
                  <span className="inline-flex min-h-7 items-center rounded-full border border-white/25 bg-black/55 px-2.5 text-xs text-white/90">
                    {formations[0].level}
                  </span>
                  <span className="inline-flex min-h-7 items-center rounded-full border border-white/25 bg-black/55 px-2.5 text-xs text-white/90">
                    {formations[0].duration}
                  </span>
                  <span className="inline-flex min-h-7 items-center rounded-full border border-white/25 bg-black/55 px-2.5 text-xs text-white/90">
                    {formations[0].format}
                  </span>
                </div>
                <Link
                  href={href("/")}
                  className="mt-4 inline-flex min-h-10 items-center justify-center rounded-lg border border-white/35 bg-white/12 px-4 text-sm font-semibold text-white transition-colors hover:bg-white/20"
                >
                  Voir plus
                </Link>
              </div>
            </article>

            <div className="grid gap-3">
              {formations.slice(1, 5).map((formation) => (
                <article
                  key={formation.title}
                  className="group flex gap-3 overflow-hidden rounded-[1.2rem] border border-border/70 bg-surface/92 p-3 shadow-card transition-transform duration-300 hover:-translate-y-0.5 hover:border-brand/35"
                >
                  <div className="relative h-24 w-24 shrink-0 overflow-hidden rounded-lg border border-border/70 sm:h-28 sm:w-28">
                    <Image
                      src={formation.image}
                      alt={`Apercu de ${formation.title}`}
                      width={600}
                      height={420}
                      className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-[1.05]"
                      sizes="112px"
                    />
                  </div>
                  <div className="min-w-0 flex-1">
                    <div className="flex items-center justify-between gap-2">
                      <span className="inline-flex min-h-7 items-center rounded-full border border-brand/35 bg-brand/12 px-2.5 text-[0.68rem] font-semibold tracking-[0.08em] text-brand-emphasis uppercase">
                        {formation.badge}
                      </span>
                      <span className="text-[0.7rem] text-muted">{formation.learners}</span>
                    </div>
                    <h3 className="mt-2 line-clamp-2 text-sm font-semibold leading-snug text-foreground sm:text-[0.98rem]">
                      {formation.title}
                    </h3>
                    <div className="mt-2 flex flex-wrap items-center gap-2">
                      <span className="inline-flex min-h-6 items-center rounded-full border border-border/70 bg-background/55 px-2 text-[0.68rem] text-muted-strong">
                        {formation.level}
                      </span>
                      <span className="inline-flex min-h-6 items-center rounded-full border border-border/70 bg-background/55 px-2 text-[0.68rem] text-muted-strong">
                        {formation.duration}
                      </span>
                      <Link
                        href={href("/")}
                        className="ml-auto inline-flex min-h-8 items-center justify-center rounded-md border border-border-strong/55 bg-surface px-3 text-xs font-semibold text-foreground transition-colors hover:bg-surface-strong"
                      >
                        Voir plus
                      </Link>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </div>

          <div className="mt-5 rounded-[1.25rem] border border-border/70 bg-surface/85 p-3.5 sm:p-4">
            <div className="flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
              <p className="text-xs font-semibold tracking-[0.16em] text-muted uppercase">Mentors en avance</p>
              <Link
                href={href("/")}
                className="inline-flex min-h-9 items-center justify-center rounded-full border border-border-strong/55 px-3 text-xs font-semibold text-foreground transition-colors hover:bg-surface-strong"
              >
                Voir plus d&apos;experts
              </Link>
            </div>
            <div className="mt-3 grid gap-2 sm:grid-cols-2 xl:grid-cols-5">
              {experts.slice(0, 5).map((expert) => (
                <article
                  key={expert.name}
                  className="flex items-center gap-2.5 rounded-xl border border-border/70 bg-background/55 px-2.5 py-2.5"
                >
                  <Image
                    src={expert.image}
                    alt={`Profil expert ${expert.name}`}
                    width={320}
                    height={320}
                    className="h-11 w-11 rounded-lg object-cover"
                    sizes="44px"
                  />
                  <div className="min-w-0">
                    <p className="truncate text-xs font-semibold text-foreground">{expert.name}</p>
                    <p className="truncate text-[0.7rem] text-muted">{expert.role}</p>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="pb-16">
        <div className="mx-auto max-w-full">
          <div className="relative overflow-hidden border border-brand-700/30 bg-[linear-gradient(135deg,oklch(0.26_0.06_160),oklch(0.33_0.09_154),oklch(0.28_0.08_28))] px-5 py-6 sm:px-7 sm:py-8">
           

            <div className="flex flex-col gap-3 lg:flex-row lg:items-end lg:justify-between">
              <div>
                <p className="text-xs font-semibold tracking-[0.2em] text-white/75 uppercase">Groupes Communaute</p>
                <h2 className="mt-1 text-3xl leading-tight text-white sm:text-[3.35rem]">
                  Un espace vivant, en format slides.
                </h2>
                <p className="mt-2 max-w-2xl text-sm leading-6 text-white/80 sm:text-[0.98rem]">
                  Chaque slide represente un groupe actif pour apprendre, echanger et progresser avec des cas
                  reels.
                </p>
              </div>
              <Link
                href={href("/")}
                className="inline-flex min-h-11 items-center justify-center rounded-full border border-white/35 bg-white/14 px-5 text-sm font-semibold text-white transition-colors hover:bg-white/22"
              >
                Voir toutes les communautes
              </Link>
            </div>

            <div className="horizontal-slides mt-6 flex snap-x snap-mandatory gap-4 overflow-x-auto pb-2">
              {communityGroups.map((group) => (
                <article
                  key={group.name}
                  className="group min-w-[84%] snap-start overflow-hidden rounded-[1.35rem] border border-white/20 bg-black/22 p-3 backdrop-blur-sm sm:min-w-[62%] xl:min-w-[38%]"
                >
                  <div className="relative overflow-hidden rounded-xl">
                    <Image
                      src={group.image}
                      alt={`Visuel du groupe ${group.name}`}
                      width={1200}
                      height={760}
                      className="h-46 w-full object-cover transition-transform duration-700 group-hover:scale-[1.05]"
                      sizes="(min-width: 1280px) 34vw, (min-width: 768px) 58vw, 84vw"
                    />
                    <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/65 via-black/18 to-transparent" />
                    <span className="absolute bottom-2 left-2 inline-flex min-h-7 items-center rounded-full border border-white/30 bg-black/55 px-2.5 text-[0.68rem] font-semibold tracking-[0.08em] text-white uppercase">
                      {group.focus}
                    </span>
                  </div>

                  <h3 className="mt-3 text-lg leading-snug text-white">{group.name}</h3>
                  <p className="mt-1 text-sm leading-6 text-white/82">{group.description}</p>

                  <div className="mt-3 flex flex-wrap gap-2">
                    <span className="inline-flex min-h-7 items-center rounded-full border border-white/30 bg-black/35 px-2.5 text-xs text-white/88">
                      {group.members}
                    </span>
                    <span className="inline-flex min-h-7 items-center rounded-full border border-white/30 bg-black/35 px-2.5 text-xs text-white/88">
                      {group.rhythm}
                    </span>
                  </div>

                  <Link
                    href={href("/")}
                    className="mt-4 inline-flex min-h-10 items-center justify-center rounded-lg border border-white/35 bg-white/14 px-4 text-sm font-semibold text-white transition-colors hover:bg-white/22"
                  >
                    Voir plus
                  </Link>
                </article>
              ))}
            </div>

            <div className="mt-6 grid gap-2.5 sm:grid-cols-2 xl:grid-cols-3">
              {communityActivities.map((activity) => (
                <article
                  key={activity}
                  className="rounded-xl border border-white/22 bg-black/26 px-3 py-2.5 text-sm leading-6 text-white/85"
                >
                  {activity}
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="px-3 pb-18 sm:px-4 sm:pb-22 lg:px-6 lg:pb-26">
        <div className="mx-auto max-w-full">
          <div className="grid gap-6 xl:grid-cols-[minmax(0,1fr)_20rem] xl:items-start">
            <div className="overflow-hidden rounded-[1.6rem] border border-border/70 bg-surface/88 shadow-card">
              <div className="flex flex-col gap-3 border-b border-border/70 px-5 py-4 sm:flex-row sm:items-end sm:justify-between">
                <div>
                  <p className="text-xs font-semibold tracking-[0.2em] text-muted uppercase">Pilotage Par Province</p>
                  <h2 className="mt-1 text-3xl leading-tight text-foreground sm:text-[3rem]">
                    Vue operationnelle des pilotes.
                  </h2>
                  <p className="mt-2 max-w-3xl text-sm leading-6 text-muted-strong sm:text-[0.98rem]">
                    Un format tableau modernise pour lire rapidement l&apos;avancement par province.
                  </p>
                </div>
                <Link
                  href={href("/")}
                  className="inline-flex min-h-11 items-center justify-center rounded-full bg-brand px-5 text-sm font-semibold text-brand-contrast transition-colors hover:bg-brand-700"
                >
                  Voir plus
                </Link>
              </div>

              <div className="divide-y divide-border/70">
                {pilotsByProvince.map((item) => {
                  const completion = Number.parseInt(item.completionRate, 10) || 0;
                  return (
                    <article
                      key={item.province}
                      className="grid gap-3 px-4 py-3 sm:grid-cols-[6rem_minmax(0,1fr)_auto] sm:items-center"
                    >
                      <div className="relative h-16 overflow-hidden rounded-lg border border-border/70">
                        <Image
                          src={item.image}
                          alt={`Province ${item.province}`}
                          width={1200}
                          height={740}
                          className="h-full w-full object-cover"
                          sizes="96px"
                        />
                      </div>

                      <div className="min-w-0">
                        <p className="truncate text-sm font-semibold text-foreground">{item.province}</p>
                        <p className="truncate text-xs text-muted">
                          Pilote: <span className="font-semibold text-foreground">{item.pilot}</span> · {item.specialty}
                        </p>
                        <div className="mt-2 h-2 w-full overflow-hidden rounded-full bg-border/60">
                          <span
                            className="block h-full rounded-full bg-gradient-to-r from-brand to-accent"
                            style={{ width: `${completion}%` }}
                          />
                        </div>
                        <div className="mt-2 flex flex-wrap items-center gap-2">
                          <span className="inline-flex min-h-6 items-center rounded-full border border-border/70 bg-background/55 px-2 text-[0.68rem] text-muted-strong">
                            {item.activeProjects}
                          </span>
                          <span className="inline-flex min-h-6 items-center rounded-full border border-border/70 bg-background/55 px-2 text-[0.68rem] text-muted-strong">
                            {item.linkedTrack}
                          </span>
                          <span className="text-[0.68rem] text-brand-emphasis">{item.nextReview}</span>
                        </div>
                      </div>

                      <Link
                        href={href("/")}
                        className="inline-flex min-h-9 items-center justify-center rounded-md border border-border-strong/55 bg-surface px-3 text-xs font-semibold text-foreground transition-colors hover:bg-surface-strong"
                      >
                        Voir plus
                      </Link>
                    </article>
                  );
                })}
              </div>
            </div>

            <aside className="xl:sticky xl:top-24">
              <div className="rounded-[1.35rem] border border-border/70 bg-surface/82 p-4 shadow-card">
                <p className="text-xs font-semibold tracking-[0.2em] text-muted uppercase">Tableau de bord</p>
                <h3 className="mt-1 text-2xl leading-tight text-foreground">Synthese province</h3>
                <div className="mt-4 grid grid-cols-2 gap-2.5">
                  {provinceInsights.map((insight) => (
                    <article
                      key={insight.label}
                      className="rounded-xl border border-border/70 bg-background/55 px-3 py-2.5"
                    >
                      <p className="font-display text-xl leading-none text-foreground">{insight.value}</p>
                      <p className="mt-1 text-[0.72rem] tracking-[0.08em] text-muted uppercase">{insight.label}</p>
                    </article>
                  ))}
                </div>

                <div className="mt-4 rounded-xl border border-border/70 bg-background/55 p-3">
                  <p className="text-xs font-semibold tracking-[0.15em] text-muted uppercase">Top provinces</p>
                  <ul className="mt-2 grid gap-2">
                    {pilotsByProvince.slice(0, 5).map((item) => (
                      <li
                        key={`top-${item.province}`}
                        className="flex items-center justify-between rounded-lg border border-border/70 bg-surface px-2.5 py-2 text-sm text-muted-strong"
                      >
                        <span className="truncate pr-2">{item.province}</span>
                        <span className="shrink-0 font-semibold text-foreground">{item.completionRate}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <Link
                  href={href("/")}
                  className="mt-4 inline-flex min-h-11 w-full items-center justify-center rounded-full bg-brand px-4 text-sm font-semibold text-brand-contrast transition-colors hover:bg-brand-700"
                >
                  Voir plus
                </Link>
              </div>
            </aside>
          </div>
        </div>
      </section>
    </main>
  );
}

