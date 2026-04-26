import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { localizePath } from "../lib/i18n";
import { getRequestLocale, tr } from "../lib/request-locale";

const featuredEpisode = {
  title: "INDH TV Live Studio: De l'idee a l'impact terrain",
  description:
    "Un format studio inspire des plateformes streaming: retours d'experience, coaching en direct et capsules podcast pour accelerer vos projets.",
  duration: "58 min",
  tag: "Nouveau",
  viewers: "2 140 en lecture cette semaine",
};

const quickFilters = [
  "Tout",
  "En direct",
  "Podcasts",
  "Experiences terrain",
  "Masterclass",
  "Replays",
];

const continueWatching = [
  {
    title: "Pitch projet social: structure gagnante",
    image:
      "https://images.pexels.com/photos/3184328/pexels-photo-3184328.jpeg?auto=compress&cs=tinysrgb&w=1400",
    type: "Experience",
    duration: "42 min",
    progress: 62,
  },
  {
    title: "Podcast financement INDH 2026",
    image:
      "https://images.pexels.com/photos/7156889/pexels-photo-7156889.jpeg?auto=compress&cs=tinysrgb&w=1400",
    type: "Podcast",
    duration: "31 min",
    progress: 34,
  },
  {
    title: "Live mentorat cooperatives rurales",
    image:
      "https://images.pexels.com/photos/1181406/pexels-photo-1181406.jpeg?auto=compress&cs=tinysrgb&w=1400",
    type: "Live",
    duration: "1h 12",
    progress: 78,
  },
  {
    title: "Table ronde: pilotage par KPI",
    image:
      "https://images.pexels.com/photos/7651899/pexels-photo-7651899.jpeg?auto=compress&cs=tinysrgb&w=1400",
    type: "Masterclass",
    duration: "49 min",
    progress: 15,
  },
];

const liveShows = [
  {
    title: "Debrief dossiers retenus",
    host: "Salma Idrissi",
    schedule: "Aujourd'hui - 18:00",
    image:
      "https://images.pexels.com/photos/7948043/pexels-photo-7948043.jpeg?auto=compress&cs=tinysrgb&w=1200",
  },
  {
    title: "Clinique business plan",
    host: "Yassine El Amrani",
    schedule: "Aujourd'hui - 20:30",
    image:
      "https://images.pexels.com/photos/7693690/pexels-photo-7693690.jpeg?auto=compress&cs=tinysrgb&w=1200",
  },
  {
    title: "Forum provinces: projets pilotes",
    host: "Equipe INDH TV",
    schedule: "Demain - 11:00",
    image:
      "https://images.pexels.com/photos/3184360/pexels-photo-3184360.jpeg?auto=compress&cs=tinysrgb&w=1200",
  },
];

const podcastSeries = [
  {
    title: "Voix du terrain: cooperatives",
    image:
      "https://images.pexels.com/photos/670720/pexels-photo-670720.jpeg?auto=compress&cs=tinysrgb&w=1200",
    episodes: "12 episodes",
    color: "from-brand-500/70 to-brand-800/75",
  },
  {
    title: "Finance utile pour porteurs",
    image:
      "https://images.pexels.com/photos/4065158/pexels-photo-4065158.jpeg?auto=compress&cs=tinysrgb&w=1200",
    episodes: "18 episodes",
    color: "from-accent-500/70 to-accent-900/80",
  },
  {
    title: "Leadership associatif",
    image:
      "https://images.pexels.com/photos/6476588/pexels-photo-6476588.jpeg?auto=compress&cs=tinysrgb&w=1200",
    episodes: "9 episodes",
    color: "from-brand-700/70 to-accent-700/75",
  },
];

const experiences = [
  {
    title: "Experience Province Rabat: acceleration dossier",
    image:
      "https://images.pexels.com/photos/1181396/pexels-photo-1181396.jpeg?auto=compress&cs=tinysrgb&w=1400",
    badge: "Terrain",
    meta: "24 min",
  },
  {
    title: "Success story: cooperative textile",
    image:
      "https://images.pexels.com/photos/7651949/pexels-photo-7651949.jpeg?auto=compress&cs=tinysrgb&w=1400",
    badge: "Impact",
    meta: "19 min",
  },
  {
    title: "Roadshow financement: region Fes-Meknes",
    image:
      "https://images.pexels.com/photos/3182773/pexels-photo-3182773.jpeg?auto=compress&cs=tinysrgb&w=1400",
    badge: "Roadshow",
    meta: "27 min",
  },
  {
    title: "Mentorat collectif: plan d'action 90 jours",
    image:
      "https://images.pexels.com/photos/7648047/pexels-photo-7648047.jpeg?auto=compress&cs=tinysrgb&w=1400",
    badge: "Masterclass",
    meta: "33 min",
  },
];

const scheduleCards = [
  { slot: "Lun - 19:00", title: "Podcast live experts", type: "Live Audio" },
  { slot: "Mer - 18:30", title: "Cas reel finance", type: "Experience" },
  { slot: "Jeu - 20:00", title: "Q&A communautaire", type: "Interactive" },
  { slot: "Sam - 11:00", title: "Best of provinces", type: "Replay Premiere" },
];

const latestNews = [
  {
    title:
      "INDH et Nations Unies: signature d'une declaration d'engagements communs",
    date: "16 avril 2026",
    source: "Nations Unies Maroc",
    summary:
      "Renforcement du partenariat strategique en faveur d'un developpement humain durable, inclusif et territorialise.",
    href: "https://morocco.un.org/fr/313908-signature-d%E2%80%99une-declaration-d%E2%80%99engagements-communs-entre-l%E2%80%99initiative-nationale-pour-le",
  },
  {
    title:
      "Developpement humain: l'INDH et l'ONU renforcent leurs actions communes",
    date: "16 avril 2026",
    source: "Le Matin",
    summary:
      "Couverture media de la nouvelle etape de cooperation entre la coordination nationale de l'INDH et le SNUD.",
    href: "https://lematin.ma/nation/developpement-humain-lindh-et-lonu-renforcent-leurs-actions-communes/340761/amp",
  },
  {
    title: "Communique CPDH Ain Sebaa-Hay Mohammadi",
    date: "2 juillet 2025",
    source: "INDH Ain Sebaa",
    summary:
      "Validation de projets entrepreneuriat, employabilite et ESS avec budget et contribution INDH detailles.",
    href: "https://indh-ainsebaa.gov.ma/communique-de-presse-sur-la-reunion-cpdh-26-juin-2025/",
  },
];

export async function generateMetadata(): Promise<Metadata> {
  const locale = await getRequestLocale();
  return {
    title: "INDH TV | INDH Digitale",
    description: tr(
      locale,
      "INDH TV: experiences terrain, podcasts et lives pour inspirer, former et accelerer les projets.",
      "INDH TV: تجارب ميدانية، بودكاست وبث مباشر للإلهام والتكوين وتسريع المشاريع.",
    ),
  };
}

function PlayIcon() {
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 24 24"
      className="h-4.5 w-4.5"
      fill="currentColor"
      focusable="false"
    >
      <path d="M8 6v12l10-6z" />
    </svg>
  );
}

function VideoPlayBadge({ className = "" }: { className?: string }) {
  return (
    <span
      className={`inline-flex h-11 w-11 items-center justify-center rounded-full border border-white/40 bg-black/45 text-white shadow-[0_10px_24px_rgba(0,0,0,0.45)] backdrop-blur-sm ${className}`}
      aria-hidden="true"
    >
      <PlayIcon />
    </span>
  );
}

function LiveDot() {
  return (
    <span className="h-2 w-2 rounded-full bg-danger shadow-[0_0_0_6px_rgba(255,72,72,0.2)]" />
  );
}

export default async function IndhTvPage() {
  const locale = await getRequestLocale();
  const t = (fr: string, ar: string) => (locale === "ar" ? ar : fr);
  const href = (path: string) => localizePath(path, locale);
  return (
    <main className="dark flex-1 bg-[linear-gradient(180deg,oklch(0.16_0.02_210),oklch(0.14_0.018_210),oklch(0.1_0.015_210))] text-white">
      <section className="relative min-h-svh overflow-hidden">
        <video
          className="absolute inset-0 h-full w-full object-cover opacity-72 motion-reduce:hidden"
          autoPlay
          muted
          loop
          playsInline
          preload="metadata"
          poster="https://images.pexels.com/photos/3184635/pexels-photo-3184635.jpeg?auto=compress&cs=tinysrgb&w=1600"
        >
          <source src="/VID-20260418.mp4" type="video/mp4" />
        </video>
        <Image
          src="https://images.pexels.com/photos/3184635/pexels-photo-3184635.jpeg?auto=compress&cs=tinysrgb&w=1600"
          alt="Studio INDH TV"
          fill
          priority
          className="hidden object-cover opacity-72 motion-reduce:block"
          sizes="100vw"
        />
        <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(115deg,rgba(6,10,20,0.95)_12%,rgba(6,10,20,0.82)_50%,rgba(6,10,20,0.55)_72%,rgba(6,10,20,0.88)_100%)]" />
        <div className="pointer-events-none absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-[oklch(0.1_0.015_210)] to-transparent" />

        <div className="relative z-10 mx-auto flex min-h-svh max-w-full items-center px-3 pb-10 sm:px-4 sm:pb-12 lg:px-6 lg:pb-14">
          <div className="mx-auto w-full max-w-5xl text-center">
            <p className="inline-flex min-h-9 items-center gap-2 rounded-full border border-danger/45 bg-danger/15 px-4 text-xs font-semibold tracking-[0.16em] text-danger uppercase">
              <LiveDot />
              {t("En direct sur INDH TV", "مباشر على INDH TV")}
            </p>
            <h1 className="mt-4 mx-auto max-w-5xl text-[2.2rem] leading-[1.02] text-white sm:text-[3rem] lg:text-[6rem]">
              <span className="mt-3 block bg-gradient-to-r from-white via-brand-100 to-accent-200 bg-clip-text text-transparent drop-shadow-[0_8px_24px_rgba(0,0,0,0.5)]">
                INDH TV: De l&apos;idee a l&apos;impact terrain
              </span>
            </h1>
            <p className="mt-3 mx-auto max-w-3xl text-sm leading-7 text-white/85 sm:text-[1.02rem]">
              {featuredEpisode.description}
            </p>
            <div className="mt-4 flex flex-wrap justify-center gap-2">
              <span className="inline-flex min-h-8 items-center rounded-full border border-white/25 bg-black/35 px-3 text-xs text-white/88">
                {featuredEpisode.duration}
              </span>
              <span className="inline-flex min-h-8 items-center rounded-full border border-white/25 bg-black/35 px-3 text-xs text-white/88">
                {featuredEpisode.tag}
              </span>
              <span className="inline-flex min-h-8 items-center rounded-full border border-white/25 bg-black/35 px-3 text-xs text-white/88">
                {featuredEpisode.viewers}
              </span>
            </div>
            <div className="mt-5 flex flex-wrap justify-center gap-3">
              <Link
                href="#indh-tv-lives"
                className="inline-flex min-h-11 items-center justify-center gap-2 rounded-full bg-white px-5 text-sm font-semibold text-slate-900 transition-colors hover:bg-white/92"
              >
                <PlayIcon />
                {t("Regarder maintenant", "شاهد الآن")}
              </Link>
              <Link
                href="#indh-tv-podcasts"
                className="inline-flex min-h-11 items-center justify-center rounded-full border border-white/30 bg-black/28 px-5 text-sm font-semibold text-white transition-colors hover:bg-black/42"
              >
                {t("Explorer podcasts", "استكشاف البودكاست")}
              </Link>
            </div>

            <aside className="mt-7 rounded-[1.35rem] border border-white/20 bg-black/36 p-4 backdrop-blur-md sm:p-5">
              <p className="text-xs font-semibold tracking-[0.17em] text-white/72 uppercase">
                {t("Grille hebdomadaire", "البرمجة الأسبوعية")}
              </p>
              <div className="mt-3 grid gap-2.5 sm:grid-cols-2 lg:grid-cols-4">
                {scheduleCards.map((item) => (
                  <article
                    key={item.title}
                    className="rounded-lg border border-white/20 bg-black/35 p-3"
                  >
                    <p className="text-xs text-white/70">{item.slot}</p>
                    <p className="mt-1 text-sm font-semibold text-white">
                      {item.title}
                    </p>
                    <p className="mt-1 text-xs text-white/70">{item.type}</p>
                  </article>
                ))}
              </div>
            </aside>

            <div className="mt-4 flex flex-wrap justify-center gap-2">
              {quickFilters.map((chip, index) => (
                <button
                  key={chip}
                  type="button"
                  className={`inline-flex min-h-9 items-center rounded-full border px-3.5 text-xs font-semibold tracking-[0.08em] uppercase transition-colors ${
                    index === 0
                      ? "border-brand-300/70 bg-brand/30 text-white"
                      : "border-white/20 bg-white/6 text-white/80 hover:bg-white/12"
                  }`}
                >
                  {chip}
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section
        id="indh-tv-news"
        className="px-3 pb-12 sm:px-4 sm:pb-14 lg:px-6 lg:pb-16"
      >
        <div className="mx-auto max-w-full">
          <div className="flex flex-col gap-2 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <p className="text-xs font-semibold tracking-[0.2em] text-white/62 uppercase">
                Actualites INDH
              </p>
              <h2 className="mt-1 text-3xl leading-tight text-white sm:text-[2.6rem]">
                Dernieres nouvelles et annonces.
              </h2>
            </div>
            <a
              href="https://morocco.un.org/fr/press-centre/press-releases"
              target="_blank"
              rel="noreferrer"
              className="inline-flex min-h-10 items-center rounded-full border border-white/20 bg-white/8 px-4 text-sm font-semibold text-white/90 transition-colors hover:bg-white/14"
            >
              Voir plus d&apos;actualites
            </a>
          </div>

          <div className="mt-5 grid gap-3 lg:grid-cols-3">
            {latestNews.map((item) => (
              <article
                key={item.title}
                className="group rounded-[1.15rem] border border-white/16 bg-white/6 p-3.5 backdrop-blur-sm transition-colors hover:bg-white/10"
              >
                <div className="flex items-center justify-between gap-2">
                  <span className="inline-flex min-h-7 items-center rounded-full border border-white/25 bg-black/28 px-2.5 text-[0.66rem] font-semibold tracking-[0.08em] text-white/80 uppercase">
                    {item.source}
                  </span>
                  <span className="text-xs text-white/64">{item.date}</span>
                </div>
                <h3 className="mt-3 text-lg leading-snug text-white">
                  {item.title}
                </h3>
                <p className="mt-2 text-sm leading-6 text-white/76">
                  {item.summary}
                </p>
                <a
                  href={item.href}
                  target="_blank"
                  rel="noreferrer"
                  className="mt-4 inline-flex min-h-9 items-center justify-center rounded-lg border border-white/30 bg-black/25 px-3.5 text-xs font-semibold text-white transition-colors hover:bg-black/40"
                >
                  Lire l&apos;article
                </a>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="px-3 pb-12 sm:px-4 sm:pb-14 lg:px-6 lg:pb-16">
        <div className="mx-auto max-w-full">
          <div className="flex flex-col gap-2 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <p className="text-xs font-semibold tracking-[0.2em] text-white/62 uppercase">
                Pour vous
              </p>
              <h2 className="mt-1 text-3xl leading-tight text-white sm:text-[2.55rem]">
                Continuer a regarder
              </h2>
            </div>
            <Link
                href={href("/formation")}
              className="inline-flex min-h-10 items-center rounded-full border border-white/20 bg-white/8 px-4 text-sm font-semibold text-white/90 transition-colors hover:bg-white/14"
            >
              Voir toutes les formations
            </Link>
          </div>

          <div className="horizontal-slides mt-5 flex snap-x snap-mandatory gap-4 overflow-x-auto pb-2">
            {continueWatching.map((item) => (
              <article
                key={item.title}
                className="group min-w-[86%] snap-start overflow-hidden rounded-[1.25rem] border border-white/14 bg-black/45 shadow-card sm:min-w-[48%] xl:min-w-[31%]"
              >
                <div className="relative h-44 overflow-hidden">
                  <Image
                    src={item.image}
                    alt={`Visuel ${item.title}`}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-[1.05]"
                    sizes="(min-width: 1280px) 31vw, (min-width: 640px) 48vw, 86vw"
                  />
                  <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/70 via-black/25 to-transparent" />
                  <VideoPlayBadge className="absolute left-1/2 top-1/2 z-10 -translate-x-1/2 -translate-y-1/2" />
                  <span className="absolute left-3 top-3 inline-flex min-h-7 items-center rounded-full border border-white/25 bg-black/50 px-2.5 text-[0.68rem] font-semibold tracking-[0.08em] text-white uppercase">
                    {item.type}
                  </span>
                </div>
                <div className="p-4">
                  <h3 className="text-lg leading-snug text-white">
                    {item.title}
                  </h3>
                  <p className="mt-1 text-xs text-white/70">{item.duration}</p>
                  <div className="mt-3 h-2 w-full overflow-hidden rounded-full bg-white/15">
                    <span
                      className="block h-full rounded-full bg-gradient-to-r from-brand-300 to-accent-300"
                      style={{ width: `${item.progress}%` }}
                    />
                  </div>
                  <p className="mt-1 text-xs text-white/70">
                    {item.progress}% regarde
                  </p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section
        id="indh-tv-lives"
        className="bg-[linear-gradient(130deg,rgba(130,16,16,0.22),rgba(18,18,26,0.9),rgba(18,18,26,0.96))] px-3 py-12 sm:px-4 sm:py-14 lg:px-6 lg:py-16"
      >
        <div className="mx-auto max-w-full">
          <div className="flex flex-col gap-2 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <p className="text-xs font-semibold tracking-[0.2em] text-white/62 uppercase">
                Lives & Replays
              </p>
              <h2 className="mt-1 text-3xl leading-tight text-white sm:text-[2.5rem]">
                Sessions live, podcast et interventions terrain.
              </h2>
            </div>
            <button
              type="button"
              className="inline-flex min-h-10 items-center gap-2 rounded-full border border-danger/45 bg-danger/15 px-4 text-sm font-semibold text-white"
            >
              <LiveDot />3 lives programmes
            </button>
          </div>

          <div className="mt-6 grid gap-4 md:grid-cols-2 xl:grid-cols-3">
            {liveShows.map((show) => (
              <article
                key={show.title}
                className="group overflow-hidden rounded-[1.25rem] border border-white/15 bg-black/42 shadow-card"
              >
                <div className="relative h-48">
                  <Image
                    src={show.image}
                    alt={`Live ${show.title}`}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-[1.05]"
                    sizes="(min-width: 1280px) 32vw, (min-width: 768px) 48vw, 100vw"
                  />
                  <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
                  <VideoPlayBadge className="absolute left-1/2 top-1/2 z-10 -translate-x-1/2 -translate-y-1/2" />
                  <span className="absolute left-3 top-3 inline-flex min-h-7 items-center gap-2 rounded-full border border-danger/45 bg-danger/25 px-3 text-[0.68rem] font-semibold tracking-[0.08em] text-white uppercase">
                    <LiveDot />
                    Live
                  </span>
                </div>
                <div className="p-4">
                  <h3 className="text-lg leading-snug text-white">
                    {show.title}
                  </h3>
                  <p className="mt-1 text-sm text-white/75">
                    Host: {show.host}
                  </p>
                  <p className="mt-1 text-xs text-white/65">{show.schedule}</p>
                  <button
                    type="button"
                    className="mt-3 inline-flex min-h-10 items-center gap-2 rounded-lg bg-white px-4 text-sm font-semibold text-slate-900 transition-colors hover:bg-white/92"
                  >
                    <PlayIcon />
                    Rejoindre
                  </button>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section
        id="indh-tv-podcasts"
        className="px-3 py-12 sm:px-4 sm:py-14 lg:px-6 lg:py-16"
      >
        <div className="mx-auto max-w-full">
          <p className="text-xs font-semibold tracking-[0.2em] text-white/62 uppercase">
            Podcasts INDH TV
          </p>
          <h2 className="mt-1 text-3xl leading-tight text-white sm:text-[2.5rem]">
            Capsules audio et interviews d&apos;experts.
          </h2>

          <div className="mt-6 grid gap-4 lg:grid-cols-3">
            {podcastSeries.map((podcast) => (
              <article
                key={podcast.title}
                className={`relative overflow-hidden rounded-[1.35rem] border border-white/16 bg-gradient-to-br ${podcast.color} p-4 shadow-card`}
              >
                <div className="absolute -right-10 top-0 h-24 w-24 rounded-full bg-white/15 blur-2xl" />
                <div className="relative flex gap-3">
                  <div className="relative h-20 w-20 shrink-0">
                    <Image
                      src={podcast.image}
                      alt={podcast.title}
                      width={220}
                      height={220}
                      className="h-20 w-20 rounded-xl border border-white/20 object-cover"
                      sizes="80px"
                    />
                    <VideoPlayBadge className="absolute left-1/2 top-1/2 z-10 -translate-x-1/2 -translate-y-1/2" />
                  </div>
                  <div className="min-w-0">
                    <h3 className="text-lg leading-snug text-white">
                      {podcast.title}
                    </h3>
                    <p className="mt-1 text-xs text-white/75">
                      {podcast.episodes}
                    </p>
                    <button
                      type="button"
                      className="mt-2 inline-flex min-h-8 items-center rounded-full border border-white/30 bg-black/22 px-3 text-xs font-semibold tracking-[0.08em] text-white uppercase"
                    >
                      Ecouter
                    </button>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="px-3 pb-16 sm:px-4 sm:pb-20 lg:px-6 lg:pb-24">
        <div className="mx-auto max-w-full">
          <div className="flex flex-col gap-2 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <p className="text-xs font-semibold tracking-[0.2em] text-white/62 uppercase">
                Experiences
              </p>
              <h2 className="mt-1 text-3xl leading-tight text-white sm:text-[2.5rem]">
                Stories de terrain en format binge-ready.
              </h2>
            </div>
            <Link
                href={href("/formation")}
              className="inline-flex min-h-10 items-center rounded-full border border-white/20 bg-white/8 px-4 text-sm font-semibold text-white/90 transition-colors hover:bg-white/14"
            >
              Voir plus
            </Link>
          </div>

          <div className="horizontal-slides mt-6 flex snap-x snap-mandatory gap-4 overflow-x-auto pb-2">
            {experiences.map((item) => (
              <article
                key={item.title}
                className="group min-w-[88%] snap-start overflow-hidden rounded-[1.4rem] border border-white/15 bg-black/45 shadow-card sm:min-w-[54%] xl:min-w-[36%]"
              >
                <div className="relative h-52">
                  <Image
                    src={item.image}
                    alt={item.title}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-[1.05]"
                    sizes="(min-width: 1280px) 35vw, (min-width: 640px) 54vw, 88vw"
                  />
                  <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/74 via-black/18 to-transparent" />
                  <VideoPlayBadge className="absolute left-1/2 top-1/2 z-10 -translate-x-1/2 -translate-y-1/2" />
                </div>
                <div className="p-4">
                  <div className="flex items-center justify-between gap-2">
                    <span className="inline-flex min-h-7 items-center rounded-full border border-white/22 bg-white/8 px-2.5 text-[0.66rem] font-semibold tracking-[0.08em] text-white uppercase">
                      {item.badge}
                    </span>
                    <span className="text-xs text-white/72">{item.meta}</span>
                  </div>
                  <h3 className="mt-2 text-lg leading-snug text-white">
                    {item.title}
                  </h3>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
