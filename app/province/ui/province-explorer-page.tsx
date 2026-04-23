"use client";

import Image from "next/image";
import Link from "next/link";
import { useMemo, useState } from "react";

type ProvinceStat = {
  label: string;
  value: string;
};

type ProvinceCommunity = {
  name: string;
  members: string;
  focus: string;
  image: string;
  description: string;
};

type ProvinceActivity = {
  title: string;
  time: string;
  format: string;
};

type ProvinceExpert = {
  name: string;
  role: string;
  avatar: string;
  availability: string;
  projects: string;
};

type ProvinceData = {
  id: string;
  name: string;
  heroImage: string;
  symbolName: string;
  symbolImage: string;
  summary: string;
  overlayClass: string;
  stats: ProvinceStat[];
  communities: ProvinceCommunity[];
  activities: ProvinceActivity[];
  experts: ProvinceExpert[];
};

const provinces: ProvinceData[] = [
  {
    id: "rabat-sale-kenitra",
    name: "Rabat-Sale-Kenitra",
    heroImage:
      "https://images.pexels.com/photos/30462538/pexels-photo-30462538.jpeg?auto=compress&cs=tinysrgb&w=1800",
    symbolName: "Tour Hassan",
    symbolImage:
      "https://images.pexels.com/photos/14722317/pexels-photo-14722317.jpeg?auto=compress&cs=tinysrgb&w=900",
    summary:
      "Polaire institutionnelle forte pour accelerer la structuration des dossiers, l'accompagnement et le suivi des projets.",
    overlayClass:
      "from-cyan-600/44 via-slate-950/64 to-emerald-500/34 dark:from-cyan-500/42 dark:via-black/72 dark:to-emerald-400/32",
    stats: [
      { label: "Communautes actives", value: "14" },
      { label: "Activites cette semaine", value: "26" },
      { label: "Experts mobilises", value: "19" },
      { label: "Projets suivis", value: "138" },
    ],
    communities: [
      {
        name: "Lab Dossier Public",
        members: "420 membres",
        focus: "Montage de dossier",
        image:
          "https://images.pexels.com/photos/7648047/pexels-photo-7648047.jpeg?auto=compress&cs=tinysrgb&w=1200",
        description:
          "Revues collectives des dossiers INDH avec checklists normalisees et feedback mentors.",
      },
      {
        name: "Sprint Impact Social",
        members: "305 membres",
        focus: "Impact terrain",
        image:
          "https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=1200",
        description:
          "Ateliers courts pour relier objectifs sociaux, KPI et preuves d'execution locale.",
      },
      {
        name: "Forum Gouvernance Locale",
        members: "246 membres",
        focus: "Gouvernance",
        image:
          "https://images.pexels.com/photos/3184418/pexels-photo-3184418.jpeg?auto=compress&cs=tinysrgb&w=1200",
        description:
          "Espace d'entraide entre associations et cooperatives autour de la gouvernance operationnelle.",
      },
    ],
    activities: [
      {
        title: "Clinique de dossier: structure et budget",
        time: "Aujourd'hui 18:00",
        format: "Live Room",
      },
      {
        title: "Atelier KPI de suivi provincial",
        time: "Demain 10:30",
        format: "Workshop",
      },
      {
        title: "Session mentorat financement",
        time: "Vendredi 16:00",
        format: "Mentorat",
      },
      {
        title: "Debrief hebdo pilotes de projet",
        time: "Samedi 11:00",
        format: "Table ronde",
      },
    ],
    experts: [
      {
        name: "Salma Idrissi",
        role: "Experte financement INDH",
        avatar:
          "https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=260",
        availability: "Disponible en visio",
        projects: "98 projets accompagnes",
      },
      {
        name: "Yassine El Amrani",
        role: "Coach business plan",
        avatar:
          "https://images.pexels.com/photos/697509/pexels-photo-697509.jpeg?auto=compress&cs=tinysrgb&w=260",
        availability: "Disponible cette semaine",
        projects: "126 projets accompagnes",
      },
      {
        name: "Nora Boussouf",
        role: "Formatrice ESS",
        avatar:
          "https://images.pexels.com/photos/5905902/pexels-photo-5905902.jpeg?auto=compress&cs=tinysrgb&w=260",
        availability: "Prochain creneau: 48h",
        projects: "77 projets accompagnes",
      },
    ],
  },
  {
    id: "casablanca-settat",
    name: "Casablanca-Settat",
    heroImage:
      "https://images.pexels.com/photos/28289056/pexels-photo-28289056.jpeg?auto=compress&cs=tinysrgb&w=1800",
    symbolName: "Mosquee Hassan II",
    symbolImage:
      "https://images.pexels.com/photos/28289057/pexels-photo-28289057.jpeg?auto=compress&cs=tinysrgb&w=900",
    summary:
      "Ecosysteme entrepreneurial dense, ideal pour l'innovation de parcours, l'orientation et l'acceleration terrain.",
    overlayClass:
      "from-blue-600/44 via-slate-950/64 to-orange-500/34 dark:from-sky-500/40 dark:via-black/72 dark:to-orange-400/30",
    stats: [
      { label: "Communautes actives", value: "18" },
      { label: "Activites cette semaine", value: "34" },
      { label: "Experts mobilises", value: "23" },
      { label: "Projets suivis", value: "172" },
    ],
    communities: [
      {
        name: "Club Launch & Scale",
        members: "510 membres",
        focus: "Lancement projet",
        image:
          "https://images.pexels.com/photos/8134161/pexels-photo-8134161.jpeg?auto=compress&cs=tinysrgb&w=1200",
        description:
          "Feuilles de route 30-60-90 jours pour lancer vite et maintenir une execution durable.",
      },
      {
        name: "Market Lab Casablanca",
        members: "402 membres",
        focus: "Marketing local",
        image:
          "https://images.pexels.com/photos/7693683/pexels-photo-7693683.jpeg?auto=compress&cs=tinysrgb&w=1200",
        description:
          "Partages d'experiences clients, pricing et canaux de vente pour les projets de proximite.",
      },
      {
        name: "Finance & Pitch Circle",
        members: "358 membres",
        focus: "Pitch financement",
        image:
          "https://images.pexels.com/photos/15141500/pexels-photo-15141500.jpeg?auto=compress&cs=tinysrgb&w=1200",
        description:
          "Simulations de presentation et revue des hypotheses budgetaires avant depot.",
      },
    ],
    activities: [
      {
        title: "Masterclass pricing pour cooperatives",
        time: "Aujourd'hui 19:30",
        format: "Masterclass",
      },
      {
        title: "Open clinic: dossier de subvention",
        time: "Demain 12:00",
        format: "Q&A",
      },
      {
        title: "Atelier express: communication digitale",
        time: "Jeudi 17:00",
        format: "Workshop",
      },
      {
        title: "Comite de pilotage provincial",
        time: "Vendredi 09:30",
        format: "Coordination",
      },
    ],
    experts: [
      {
        name: "Omar Chraibi",
        role: "Expert KPI et pilotage",
        avatar:
          "https://images.pexels.com/photos/91227/pexels-photo-91227.jpeg?auto=compress&cs=tinysrgb&w=260",
        availability: "Disponible en presentiel",
        projects: "91 projets accompagnes",
      },
      {
        name: "Sara Benjelloun",
        role: "Mentor marketing digital",
        avatar:
          "https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=260",
        availability: "Disponible cette semaine",
        projects: "112 projets accompagnes",
      },
      {
        name: "Karim Boukili",
        role: "Consultant gouvernance",
        avatar:
          "https://images.pexels.com/photos/1043471/pexels-photo-1043471.jpeg?auto=compress&cs=tinysrgb&w=260",
        availability: "Prochain creneau: 72h",
        projects: "88 projets accompagnes",
      },
    ],
  },
  {
    id: "marrakech-safi",
    name: "Marrakech-Safi",
    heroImage:
      "https://images.pexels.com/photos/35816036/pexels-photo-35816036.jpeg?auto=compress&cs=tinysrgb&w=1800",
    symbolName: "Minaret Koutoubia",
    symbolImage:
      "https://images.pexels.com/photos/35816173/pexels-photo-35816173.jpeg?auto=compress&cs=tinysrgb&w=900",
    summary:
      "Territoire a fort potentiel coop, tourisme et artisanat, avec focus sur la montee en competence et l'impact local.",
    overlayClass:
      "from-amber-600/42 via-slate-950/66 to-rose-500/32 dark:from-amber-500/38 dark:via-black/74 dark:to-pink-400/28",
    stats: [
      { label: "Communautes actives", value: "12" },
      { label: "Activites cette semaine", value: "22" },
      { label: "Experts mobilises", value: "16" },
      { label: "Projets suivis", value: "119" },
    ],
    communities: [
      {
        name: "Coop Artisanat Studio",
        members: "336 membres",
        focus: "Cooperatives",
        image:
          "https://images.pexels.com/photos/7693733/pexels-photo-7693733.jpeg?auto=compress&cs=tinysrgb&w=1200",
        description:
          "Accompagnement des coop artisanales sur la structuration commerciale et la qualite de service.",
      },
      {
        name: "Impact Rural Collective",
        members: "284 membres",
        focus: "Zones rurales",
        image:
          "https://images.pexels.com/photos/7433900/pexels-photo-7433900.jpeg?auto=compress&cs=tinysrgb&w=1200",
        description:
          "Retours terrain, modeles logistiques et solutions d'execution pour projets en milieu rural.",
      },
      {
        name: "ESS Growth Forum",
        members: "259 membres",
        focus: "ESS et gouvernance",
        image:
          "https://images.pexels.com/photos/3184339/pexels-photo-3184339.jpeg?auto=compress&cs=tinysrgb&w=1200",
        description:
          "Plateforme d'entraide ESS pour renforcer leadership, gouvernance et impact social.",
      },
    ],
    activities: [
      {
        title: "Atelier storytelling pour porteurs de projet",
        time: "Aujourd'hui 17:30",
        format: "Atelier",
      },
      {
        title: "Revue budget pre-depot",
        time: "Demain 09:00",
        format: "Coaching",
      },
      {
        title: "Session terrain: indicateurs de progression",
        time: "Jeudi 15:00",
        format: "Field Lab",
      },
      {
        title: "Forum experts artisanat et ESS",
        time: "Vendredi 11:30",
        format: "Forum",
      },
    ],
    experts: [
      {
        name: "Mehdi Ait Lahcen",
        role: "Coach business plan",
        avatar:
          "https://images.pexels.com/photos/762020/pexels-photo-762020.jpeg?auto=compress&cs=tinysrgb&w=260",
        availability: "Disponible cette semaine",
        projects: "84 projets accompagnes",
      },
      {
        name: "Hajar El Fassi",
        role: "Coach leadership terrain",
        avatar:
          "https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=260",
        availability: "Disponible en visio",
        projects: "69 projets accompagnes",
      },
      {
        name: "Rachid El Idrissi",
        role: "Expert pilotage rural",
        avatar:
          "https://images.pexels.com/photos/697509/pexels-photo-697509.jpeg?auto=compress&cs=tinysrgb&w=260",
        availability: "Prochain creneau: 48h",
        projects: "73 projets accompagnes",
      },
    ],
  },
];

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

export function ProvinceExplorerPage() {
  const [activeProvinceId, setActiveProvinceId] = useState(provinces[0].id);

  const activeProvince = useMemo(
    () => provinces.find((province) => province.id === activeProvinceId) ?? provinces[0],
    [activeProvinceId]
  );

  return (
    <main className="relative flex-1 pb-16 sm:pb-20 lg:pb-24">
      <div className="pointer-events-none absolute inset-0 " />

      <section className="relative px-3 pt-6 sm:px-4 sm:pt-8 lg:px-6 lg:pt-10">
        <div className="mx-auto max-w-full">
          <article className="relative overflow-hidden rounded-[2rem] border border-border/70 bg-surface/92 shadow-card backdrop-blur-xl">
            <div className="relative min-h-[32rem] p-4 sm:p-6 lg:p-8">
              <Image
                src={activeProvince.heroImage}
                alt={`Vue ${activeProvince.name}`}
                fill
                className="object-cover"
                sizes="100vw"
                priority
              />
              <div className={`absolute inset-0 bg-gradient-to-br ${activeProvince.overlayClass}`} />
              <div className="absolute inset-0 bg-[linear-gradient(120deg,rgba(7,10,15,0.84),rgba(7,10,15,0.42),rgba(7,10,15,0.74))]" />

              <div className="relative z-10">
                <div className="flex flex-wrap gap-2">
                  {provinces.map((province) => {
                    const isActive = province.id === activeProvince.id;
                    return (
                      <button
                        key={province.id}
                        type="button"
                        onClick={() => setActiveProvinceId(province.id)}
                        className={`inline-flex min-h-9 items-center rounded-full border px-3 text-xs font-semibold tracking-[0.08em] uppercase transition-colors ${
                          isActive
                            ? "border-white/56 bg-white/24 text-white"
                            : "border-white/26 bg-black/26 text-white/86 hover:bg-white/16"
                        }`}
                      >
                        {province.name}
                      </button>
                    );
                  })}
                </div>

                <div className="mt-6 grid gap-6 xl:grid-cols-[1.12fr_0.88fr] xl:items-end">
                  <div>
                    <p className="inline-flex min-h-8 items-center px-3 text-[0.68rem] font-semibold tracking-[0.12em] text-white/88 uppercase">
                      Province Lab INDH
                    </p>
                    <h1 className="mt-3 max-w-4xl text-4xl leading-[1.02] text-white sm:text-5xl xl:text-[4.2rem]">
                      Piloter les communautes et l&apos;apprentissage par province.
                    </h1>
                    <p className="mt-3 max-w-3xl text-sm leading-7 text-white/84 sm:text-base">
                      {activeProvince.summary}
                    </p>

                    <div className="mt-5 grid gap-2 sm:grid-cols-2 xl:grid-cols-4">
                      {activeProvince.stats.map((stat) => (
                        <article
                          key={stat.label}
                          className="rounded-xl border border-white/22 bg-black/28 px-3 py-3 backdrop-blur-sm"
                        >
                          <p className="font-display text-2xl leading-none text-white">{stat.value}</p>
                          <p className="mt-1 text-[0.68rem] tracking-[0.09em] text-white/72 uppercase">
                            {stat.label}
                          </p>
                        </article>
                      ))}
                    </div>
                  </div>

                  <article className="justify-self-start rounded-[1.2rem] border border-white/22 bg-black/34 p-3 shadow-[0_18px_38px_rgba(0,0,0,0.35)] backdrop-blur-sm sm:max-w-md">
                    <div className="relative h-40 overflow-hidden rounded-lg border border-white/24 sm:h-48">
                      <Image
                        src={activeProvince.symbolImage}
                        alt={`Symbole ${activeProvince.symbolName}`}
                        fill
                        className="object-cover"
                        sizes="(min-width: 640px) 30vw, 100vw"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/62 via-black/8 to-transparent" />
                    </div>
                    <p className="mt-3 text-xs font-semibold tracking-[0.12em] text-white/72 uppercase">
                      Symbole provincial
                    </p>
                    <p className="mt-1 text-xl text-white">{activeProvince.symbolName}</p>
                    <p className="mt-1 text-sm leading-6 text-white/78">
                      Signature visuelle utilisee comme ancrage narratif pour l&apos;experience de cette province.
                    </p>
                  </article>
                </div>
              </div>
            </div>
          </article>
        </div>
      </section>

      <section className="px-3 pt-6 sm:px-4 sm:pt-8 lg:px-6 lg:pt-10">
        <div className="mx-auto max-w-full">
          <div className="grid gap-5 xl:grid-cols-[minmax(0,1fr)_22rem]">
            <article className="rounded-[1.6rem] border border-border/70 bg-surface/90 p-4 shadow-card sm:p-5">
              <div className="flex flex-wrap items-end justify-between gap-3">
                <div>
                  <p className="text-xs font-semibold tracking-[0.18em] text-muted uppercase">
                    Communautes de la province
                  </p>
                  <h2 className="mt-1 text-3xl leading-tight text-foreground sm:text-[3rem]">
                    Espaces actifs par territoire
                  </h2>
                </div>
                <Link
                  href="/communaute"
                  className="inline-flex min-h-10 items-center justify-center rounded-full bg-brand px-4 text-sm font-semibold text-brand-contrast transition-colors hover:bg-brand-700"
                >
                  Explorer toute la communaute
                </Link>
              </div>

              <div className="mt-4 grid gap-3 lg:grid-cols-3">
                {activeProvince.communities.map((community) => (
                  <article
                    key={community.name}
                    className="group overflow-hidden rounded-[1rem] border border-border/70 bg-background/62"
                  >
                    <div className="relative h-36 overflow-hidden">
                      <Image
                        src={community.image}
                        alt={`Groupe ${community.name}`}
                        fill
                        className="object-cover transition-transform duration-700 group-hover:scale-[1.05]"
                        sizes="(min-width: 1024px) 30vw, 100vw"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/62 via-black/18 to-transparent" />
                      <span className="absolute bottom-2 left-2 inline-flex min-h-7 items-center rounded-full border border-white/26 bg-black/46 px-2.5 text-[0.66rem] font-semibold tracking-[0.08em] text-white uppercase">
                        {community.focus}
                      </span>
                    </div>
                    <div className="p-3">
                      <p className="text-sm font-semibold text-foreground">{community.name}</p>
                      <p className="mt-1 text-xs leading-5 text-muted-strong">{community.description}</p>
                      <p className="mt-2 text-[0.7rem] font-semibold tracking-[0.08em] text-brand-emphasis uppercase">
                        {community.members}
                      </p>
                    </div>
                  </article>
                ))}
              </div>
            </article>

            <aside className="rounded-[1.6rem] border border-border/70 bg-surface/88 p-4 shadow-card sm:p-5">
              <p className="text-xs font-semibold tracking-[0.18em] text-muted uppercase">Activite locale</p>
              <h3 className="mt-1 text-2xl leading-tight text-foreground">Agenda province</h3>

              <div className="mt-4 space-y-3">
                {activeProvince.activities.map((activity) => (
                  <article
                    key={activity.title}
                    className="rounded-xl border border-border/70 bg-background/60 p-3"
                  >
                    <div className="flex items-start gap-2.5">
                      <span className="mt-1 h-2.5 w-2.5 shrink-0 rounded-full bg-brand shadow-[0_0_0_4px_color-mix(in_oklab,var(--brand)_18%,transparent)]" />
                      <div>
                        <p className="text-sm font-semibold text-foreground">{activity.title}</p>
                        <p className="mt-1 text-xs text-muted">{activity.time}</p>
                        <span className="mt-2 inline-flex min-h-6 items-center rounded-full border border-border/70 bg-surface px-2 text-[0.64rem] text-muted-strong">
                          {activity.format}
                        </span>
                      </div>
                    </div>
                  </article>
                ))}
              </div>
            </aside>
          </div>
        </div>
      </section>

      <section className="px-3 pt-6 sm:px-4 sm:pt-8 lg:px-6 lg:pt-10">
        <div className="mx-auto max-w-full">
          <article className="rounded-[1.6rem] border border-border/70 bg-surface/90 p-4 shadow-card sm:p-5">
            <div className="flex flex-wrap items-end justify-between gap-3">
              <div>
                <p className="text-xs font-semibold tracking-[0.18em] text-muted uppercase">
                  Experts de la province
                </p>
                <h2 className="mt-1 text-3xl leading-tight text-foreground sm:text-[2.8rem]">
                  Accompagnement de proximite
                </h2>
              </div>
              <Link
                href="/formation"
                className="inline-flex min-h-10 items-center justify-center gap-1.5 rounded-full border border-border/70 bg-surface px-4 text-sm font-semibold text-foreground transition-colors hover:bg-surface-strong"
              >
                Voir les parcours
                <ArrowIcon />
              </Link>
            </div>

            <div className="mt-4 grid gap-3 md:grid-cols-2 xl:grid-cols-3">
              {activeProvince.experts.map((expert) => (
                <article
                  key={expert.name}
                  className="rounded-xl border border-border/70 bg-background/62 p-3"
                >
                  <div className="flex items-center gap-3">
                    <Image
                      src={expert.avatar}
                      alt={`Expert ${expert.name}`}
                      width={96}
                      height={96}
                      className="h-12 w-12 rounded-xl object-cover"
                      sizes="48px"
                    />
                    <div className="min-w-0">
                      <p className="truncate text-sm font-semibold text-foreground">{expert.name}</p>
                      <p className="truncate text-xs text-muted">{expert.role}</p>
                    </div>
                  </div>
                  <p className="mt-3 text-xs text-muted-strong">{expert.projects}</p>
                  <p className="mt-1 text-xs font-semibold text-brand-emphasis">{expert.availability}</p>
                </article>
              ))}
            </div>
          </article>
        </div>
      </section>
    </main>
  );
}
