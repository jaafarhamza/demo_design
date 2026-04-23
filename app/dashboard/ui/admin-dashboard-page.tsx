"use client";

import Link from "next/link";
import { useMemo, useState } from "react";

type ActivityStatus = "Planifie" | "En cours" | "Bloque" | "Termine";
type ActivityPriority = "Haute" | "Moyenne" | "Basse";
type ActivityCategory = "Formation" | "Coaching" | "Terrain" | "Evaluation";

type AdminActivity = {
  id: string;
  title: string;
  province: string;
  category: ActivityCategory;
  status: ActivityStatus;
  priority: ActivityPriority;
  owner: string;
  date: string;
  participants: number;
  progress: number;
};

const activities: AdminActivity[] = [
  {
    id: "act-001",
    title: "Lancement module financement coop",
    province: "Rabat-Sale-Kenitra",
    category: "Formation",
    status: "En cours",
    priority: "Haute",
    owner: "Salma Idrissi",
    date: "2026-04-24",
    participants: 68,
    progress: 64,
  },
  {
    id: "act-002",
    title: "Atelier business plan express",
    province: "Casablanca-Settat",
    category: "Coaching",
    status: "Termine",
    priority: "Moyenne",
    owner: "Yassine El Amrani",
    date: "2026-04-20",
    participants: 52,
    progress: 100,
  },
  {
    id: "act-003",
    title: "Revue des KPI terrains",
    province: "Marrakech-Safi",
    category: "Evaluation",
    status: "En cours",
    priority: "Haute",
    owner: "Omar Chraibi",
    date: "2026-04-27",
    participants: 34,
    progress: 48,
  },
  {
    id: "act-004",
    title: "Session mentorat dossier INDH",
    province: "Fes-Meknes",
    category: "Coaching",
    status: "Planifie",
    priority: "Moyenne",
    owner: "Nora Boussouf",
    date: "2026-04-28",
    participants: 41,
    progress: 12,
  },
  {
    id: "act-005",
    title: "Audit des projets a risque",
    province: "Tanger-Tetouan-Al Hoceima",
    category: "Evaluation",
    status: "Bloque",
    priority: "Haute",
    owner: "Karim Boukili",
    date: "2026-04-18",
    participants: 18,
    progress: 29,
  },
  {
    id: "act-006",
    title: "Live Q&A marketing local",
    province: "Souss-Massa",
    category: "Formation",
    status: "En cours",
    priority: "Basse",
    owner: "Sara Benjelloun",
    date: "2026-04-26",
    participants: 76,
    progress: 55,
  },
  {
    id: "act-007",
    title: "Coaching pitch provincial",
    province: "Rabat-Sale-Kenitra",
    category: "Coaching",
    status: "Planifie",
    priority: "Moyenne",
    owner: "Hajar El Fassi",
    date: "2026-05-01",
    participants: 29,
    progress: 8,
  },
  {
    id: "act-008",
    title: "Formation gouvernance associative",
    province: "Casablanca-Settat",
    category: "Formation",
    status: "En cours",
    priority: "Moyenne",
    owner: "Rachid El Idrissi",
    date: "2026-04-29",
    participants: 47,
    progress: 42,
  },
  {
    id: "act-009",
    title: "Visite terrain pilotage rural",
    province: "Marrakech-Safi",
    category: "Terrain",
    status: "En cours",
    priority: "Haute",
    owner: "Nadia Belkadi",
    date: "2026-04-25",
    participants: 21,
    progress: 58,
  },
  {
    id: "act-010",
    title: "Validation des dossiers complementaires",
    province: "Fes-Meknes",
    category: "Evaluation",
    status: "Termine",
    priority: "Moyenne",
    owner: "Samira El Mansouri",
    date: "2026-04-21",
    participants: 39,
    progress: 100,
  },
  {
    id: "act-011",
    title: "Revue hebdo des activites province",
    province: "Souss-Massa",
    category: "Evaluation",
    status: "Planifie",
    priority: "Basse",
    owner: "Othmane Kabbaj",
    date: "2026-04-30",
    participants: 33,
    progress: 10,
  },
  {
    id: "act-012",
    title: "Atelier terrain croissance cooperative",
    province: "Tanger-Tetouan-Al Hoceima",
    category: "Terrain",
    status: "Bloque",
    priority: "Haute",
    owner: "Hind Bennani",
    date: "2026-04-19",
    participants: 16,
    progress: 24,
  },
];

const dateRangeOptions = [
  { value: "all", label: "Toute periode" },
  { value: "7", label: "7 jours" },
  { value: "30", label: "30 jours" },
  { value: "90", label: "90 jours" },
] as const;

type DateRangeFilter = (typeof dateRangeOptions)[number]["value"];

function formatDateLabel(value: string) {
  return new Intl.DateTimeFormat("fr-FR", {
    day: "2-digit",
    month: "short",
    year: "numeric",
  }).format(new Date(value));
}

function statusBadgeClass(status: ActivityStatus) {
  if (status === "Termine") {
    return "bg-success/18 text-success";
  }

  if (status === "En cours") {
    return "bg-brand/16 text-brand-emphasis";
  }

  if (status === "Bloque") {
    return "bg-danger/18 text-danger";
  }

  return "bg-warning/18 text-accent-800 dark:text-warning";
}

function priorityChipClass(priority: ActivityPriority) {
  if (priority === "Haute") {
    return "border-danger/40 bg-danger/12 text-danger";
  }

  if (priority === "Moyenne") {
    return "border-warning/40 bg-warning/16 text-accent-900 dark:text-warning";
  }

  return "border-success/35 bg-success/12 text-success";
}

export function AdminDashboardPage() {
  const [selectedProvince, setSelectedProvince] = useState("Toutes");
  const [selectedStatus, setSelectedStatus] = useState("Tous");
  const [selectedCategory, setSelectedCategory] = useState("Toutes");
  const [dateRange, setDateRange] = useState<DateRangeFilter>("30");
  const [search, setSearch] = useState("");

  const provinces = useMemo(
    () => ["Toutes", ...new Set(activities.map((activity) => activity.province))],
    []
  );
  const statuses = useMemo(
    () => ["Tous", ...new Set(activities.map((activity) => activity.status))],
    []
  );
  const categories = useMemo(
    () => ["Toutes", ...new Set(activities.map((activity) => activity.category))],
    []
  );

  const filteredActivities = useMemo(() => {
    const today = new Date();
    const trimmedSearch = search.trim().toLowerCase();

    return activities.filter((activity) => {
      if (selectedProvince !== "Toutes" && activity.province !== selectedProvince) {
        return false;
      }

      if (selectedStatus !== "Tous" && activity.status !== selectedStatus) {
        return false;
      }

      if (selectedCategory !== "Toutes" && activity.category !== selectedCategory) {
        return false;
      }

      if (dateRange !== "all") {
        const activityDate = new Date(activity.date);
        const diffDays = (activityDate.getTime() - today.getTime()) / (1000 * 60 * 60 * 24);

        if (diffDays < -Number(dateRange) || diffDays > Number(dateRange)) {
          return false;
        }
      }

      if (trimmedSearch) {
        const target = `${activity.title} ${activity.owner} ${activity.province}`.toLowerCase();
        if (!target.includes(trimmedSearch)) {
          return false;
        }
      }

      return true;
    });
  }, [selectedProvince, selectedStatus, selectedCategory, dateRange, search]);

  const stats = useMemo(() => {
    const total = filteredActivities.length;
    const completed = filteredActivities.filter((activity) => activity.status === "Termine").length;
    const inProgress = filteredActivities.filter((activity) => activity.status === "En cours").length;
    const blocked = filteredActivities.filter((activity) => activity.status === "Bloque").length;
    const participants = filteredActivities.reduce(
      (sum, activity) => sum + activity.participants,
      0
    );
    const averageProgress =
      total > 0
        ? Math.round(
            filteredActivities.reduce((sum, activity) => sum + activity.progress, 0) / total
          )
        : 0;

    const completionRate = total > 0 ? Math.round((completed / total) * 100) : 0;

    return {
      total,
      completed,
      inProgress,
      blocked,
      participants,
      averageProgress,
      completionRate,
    };
  }, [filteredActivities]);

  const byProvince = useMemo(() => {
    const groups = new Map<string, number>();

    filteredActivities.forEach((activity) => {
      groups.set(activity.province, (groups.get(activity.province) ?? 0) + 1);
    });

    const max = Math.max(1, ...groups.values());

    return Array.from(groups.entries()).map(([province, count]) => ({
      province,
      count,
      width: Math.round((count / max) * 100),
    }));
  }, [filteredActivities]);

  const topExperts = useMemo(() => {
    const map = new Map<string, number>();

    filteredActivities.forEach((activity) => {
      map.set(activity.owner, (map.get(activity.owner) ?? 0) + 1);
    });

    return Array.from(map.entries())
      .sort((a, b) => b[1] - a[1])
      .slice(0, 5);
  }, [filteredActivities]);

  return (
    <main className="relative flex-1 pb-16 sm:pb-20 lg:pb-24">
      <div className="pointer-events-none absolute inset-0 " />

      <section className="relative px-3 pt-6 sm:px-4 sm:pt-8 lg:px-6 lg:pt-10">
        <div className="mx-auto max-w-full">
          <article className="relative overflow-hidden ">

            <div className="relative grid gap-5 p-4 sm:p-6 xl:grid-cols-[1.08fr_0.92fr] xl:gap-8">
              <div>
                <p className="inline-flex min-h-8 items-center  px-3 text-[0.68rem] font-semibold tracking-[0.12em] text-brand-emphasis uppercase">
                  Admin Control Center
                </p>
                <h1 className="mt-3 max-w-4xl text-4xl leading-[1.03] text-foreground sm:text-5xl xl:text-[4.2rem]">
                  Tableau de bord intelligent pour piloter toutes les activites.
                </h1>
                <p className="mt-3 max-w-3xl text-sm leading-7 text-muted-strong sm:text-base">
                  Filtrez les actions, suivez la performance par province et gardez une vue operationnelle en
                  temps reel sur l&apos;ensemble de la plateforme INDH Digitale.
                </p>

                <div className="mt-5 grid gap-2 sm:grid-cols-3">
                  <article className="rounded-xl border border-border/70 bg-background/72 p-3">
                    <p className="font-display text-2xl leading-none text-foreground">{stats.total}</p>
                    <p className="mt-1 text-[0.7rem] tracking-[0.1em] text-muted uppercase">
                      Activites filtrees
                    </p>
                  </article>
                  <article className="rounded-xl border border-border/70 bg-background/72 p-3">
                    <p className="font-display text-2xl leading-none text-foreground">{stats.completionRate}%</p>
                    <p className="mt-1 text-[0.7rem] tracking-[0.1em] text-muted uppercase">
                      Taux de completion
                    </p>
                  </article>
                  <article className="rounded-xl border border-border/70 bg-background/72 p-3">
                    <p className="font-display text-2xl leading-none text-foreground">{stats.participants}</p>
                    <p className="mt-1 text-[0.7rem] tracking-[0.1em] text-muted uppercase">
                      Participants cumules
                    </p>
                  </article>
                </div>
              </div>

              <article className="rounded-[1.35rem] border border-border/70 bg-background/65 p-4">
                <p className="text-xs font-semibold tracking-[0.16em] text-muted uppercase">
                  Etat global
                </p>
                <div className="mt-3 grid grid-cols-2 gap-2.5">
                  <div className="rounded-xl border border-border/70 bg-surface p-3">
                    <p className="text-xs text-muted">En cours</p>
                    <p className="mt-1 text-2xl font-semibold text-foreground">{stats.inProgress}</p>
                  </div>
                  <div className="rounded-xl border border-border/70 bg-surface p-3">
                    <p className="text-xs text-muted">Termines</p>
                    <p className="mt-1 text-2xl font-semibold text-foreground">{stats.completed}</p>
                  </div>
                  <div className="rounded-xl border border-border/70 bg-surface p-3">
                    <p className="text-xs text-muted">Bloques</p>
                    <p className="mt-1 text-2xl font-semibold text-foreground">{stats.blocked}</p>
                  </div>
                  <div className="rounded-xl border border-border/70 bg-surface p-3">
                    <p className="text-xs text-muted">Progression moyenne</p>
                    <p className="mt-1 text-2xl font-semibold text-foreground">{stats.averageProgress}%</p>
                  </div>
                </div>
                <div className="mt-3 h-2 w-full overflow-hidden rounded-full bg-border/70">
                  <span
                    className="block h-full rounded-full bg-gradient-to-r from-brand to-accent"
                    style={{ width: `${stats.averageProgress}%` }}
                  />
                </div>
                <p className="mt-2 text-xs text-muted">
                  Progression moyenne calculee automatiquement sur les activites visibles.
                </p>

                <Link
                  href="/formation"
                  className="mt-4 inline-flex min-h-10 items-center justify-center rounded-full border border-border-strong/55 bg-surface px-4 text-sm font-semibold text-foreground transition-colors hover:bg-surface-strong"
                >
                  Ouvrir les parcours formation
                </Link>
              </article>
            </div>
          </article>
        </div>
      </section>

      <section className="px-3 pt-6 sm:px-4 sm:pt-8 lg:px-6 lg:pt-10">
        <div className="mx-auto max-w-full">
          <article className="rounded-[1.6rem] border border-border/70 bg-surface/88 p-4 shadow-card sm:p-5">
            <div className="flex flex-wrap items-end justify-between gap-3">
              <div>
                <p className="text-xs font-semibold tracking-[0.18em] text-muted uppercase">Filtres admin</p>
                <h2 className="mt-1 text-3xl leading-tight text-foreground sm:text-[2.7rem]">
                  Filtrer les activites et statistiques
                </h2>
              </div>
              <button
                type="button"
                onClick={() => {
                  setSelectedProvince("Toutes");
                  setSelectedStatus("Tous");
                  setSelectedCategory("Toutes");
                  setDateRange("30");
                  setSearch("");
                }}
                className="inline-flex min-h-10 items-center justify-center rounded-full border border-border-strong/55 bg-surface px-4 text-sm font-semibold text-foreground transition-colors hover:bg-surface-strong"
              >
                Reinitialiser
              </button>
            </div>

            <div className="mt-4 grid gap-3 sm:grid-cols-2 xl:grid-cols-5">
              <label className="grid gap-1.5">
                <span className="text-[0.72rem] font-semibold tracking-[0.1em] text-muted uppercase">Province</span>
                <select
                  value={selectedProvince}
                  onChange={(event) => setSelectedProvince(event.target.value)}
                  className="min-h-10 rounded-lg border border-border/70 bg-background/70 px-3 text-sm text-foreground"
                >
                  {provinces.map((province) => (
                    <option key={province} value={province}>
                      {province}
                    </option>
                  ))}
                </select>
              </label>

              <label className="grid gap-1.5">
                <span className="text-[0.72rem] font-semibold tracking-[0.1em] text-muted uppercase">Statut</span>
                <select
                  value={selectedStatus}
                  onChange={(event) => setSelectedStatus(event.target.value)}
                  className="min-h-10 rounded-lg border border-border/70 bg-background/70 px-3 text-sm text-foreground"
                >
                  {statuses.map((status) => (
                    <option key={status} value={status}>
                      {status}
                    </option>
                  ))}
                </select>
              </label>

              <label className="grid gap-1.5">
                <span className="text-[0.72rem] font-semibold tracking-[0.1em] text-muted uppercase">
                  Categorie
                </span>
                <select
                  value={selectedCategory}
                  onChange={(event) => setSelectedCategory(event.target.value)}
                  className="min-h-10 rounded-lg border border-border/70 bg-background/70 px-3 text-sm text-foreground"
                >
                  {categories.map((category) => (
                    <option key={category} value={category}>
                      {category}
                    </option>
                  ))}
                </select>
              </label>

              <label className="grid gap-1.5">
                <span className="text-[0.72rem] font-semibold tracking-[0.1em] text-muted uppercase">Periode</span>
                <select
                  value={dateRange}
                  onChange={(event) => setDateRange(event.target.value as DateRangeFilter)}
                  className="min-h-10 rounded-lg border border-border/70 bg-background/70 px-3 text-sm text-foreground"
                >
                  {dateRangeOptions.map((range) => (
                    <option key={range.value} value={range.value}>
                      {range.label}
                    </option>
                  ))}
                </select>
              </label>

              <label className="grid gap-1.5">
                <span className="text-[0.72rem] font-semibold tracking-[0.1em] text-muted uppercase">Recherche</span>
                <input
                  type="search"
                  value={search}
                  onChange={(event) => setSearch(event.target.value)}
                  placeholder="Titre, province, expert..."
                  className="min-h-10 rounded-lg border border-border/70 bg-background/70 px-3 text-sm text-foreground placeholder:text-muted"
                />
              </label>
            </div>
          </article>
        </div>
      </section>

      <section className="px-3 pt-6 sm:px-4 sm:pt-8 lg:px-6 lg:pt-10">
        <div className="mx-auto max-w-full">
          <div className="grid gap-5 xl:grid-cols-[1.08fr_0.92fr]">
            <article className="rounded-[1.6rem] border border-border/70 bg-surface/88 p-4 shadow-card sm:p-5">
              <p className="text-xs font-semibold tracking-[0.18em] text-muted uppercase">Statistiques province</p>
              <h3 className="mt-1 text-2xl leading-tight text-foreground">Distribution des activites</h3>

              <div className="mt-4 space-y-3">
                {byProvince.length > 0 ? (
                  byProvince.map((item) => (
                    <div key={item.province}>
                      <div className="mb-1.5 flex items-center justify-between gap-2 text-xs">
                        <span className="truncate text-muted-strong">{item.province}</span>
                        <span className="font-semibold text-foreground">{item.count}</span>
                      </div>
                      <div className="h-2.5 w-full overflow-hidden rounded-full bg-border/70">
                        <span
                          className="block h-full rounded-full bg-gradient-to-r from-brand via-brand-600 to-accent"
                          style={{ width: `${item.width}%` }}
                        />
                      </div>
                    </div>
                  ))
                ) : (
                  <p className="rounded-xl border border-border/70 bg-background/62 p-3 text-sm text-muted">
                    Aucune activite pour les filtres actuels.
                  </p>
                )}
              </div>
            </article>

            <article className="rounded-[1.6rem] border border-border/70 bg-surface/88 p-4 shadow-card sm:p-5">
              <p className="text-xs font-semibold tracking-[0.18em] text-muted uppercase">Top contributeurs</p>
              <h3 className="mt-1 text-2xl leading-tight text-foreground">Experts les plus mobilises</h3>

              <div className="mt-4 space-y-2.5">
                {topExperts.length > 0 ? (
                  topExperts.map(([name, count], index) => (
                    <article
                      key={name}
                      className="flex items-center justify-between rounded-xl border border-border/70 bg-background/62 px-3 py-2.5"
                    >
                      <div>
                        <p className="text-sm font-semibold text-foreground">{name}</p>
                        <p className="text-xs text-muted">
                          Rang #{index + 1}
                        </p>
                      </div>
                      <span className="inline-flex min-h-7 items-center rounded-full border border-brand/35 bg-brand/12 px-2.5 text-xs font-semibold text-brand-emphasis">
                        {count} activites
                      </span>
                    </article>
                  ))
                ) : (
                  <p className="rounded-xl border border-border/70 bg-background/62 p-3 text-sm text-muted">
                    Pas de contributeur visible avec ces filtres.
                  </p>
                )}
              </div>
            </article>
          </div>
        </div>
      </section>

      <section className="px-3 pt-6 sm:px-4 sm:pt-8 lg:px-6 lg:pt-10">
        <div className="mx-auto max-w-full">
          <article className="rounded-[1.6rem] border border-border/70 bg-surface/88 p-4 shadow-card sm:p-5">
            <div className="flex flex-wrap items-end justify-between gap-3">
              <div>
                <p className="text-xs font-semibold tracking-[0.18em] text-muted uppercase">Activites admin</p>
                <h3 className="mt-1 text-3xl leading-tight text-foreground sm:text-[2.7rem]">
                  Suivi detaille des actions
                </h3>
              </div>
              <span className="inline-flex min-h-8 items-center rounded-full border border-border/70 bg-background/65 px-3 text-xs font-semibold text-muted-strong">
                {filteredActivities.length} activite(s)
              </span>
            </div>

            <div className="mt-4 overflow-x-auto rounded-xl border border-border/70">
              <table className="min-w-[58rem] w-full text-left">
                <thead className="bg-background/68">
                  <tr className="text-[0.68rem] tracking-[0.1em] text-muted uppercase">
                    <th className="px-3 py-2.5 font-semibold">Activite</th>
                    <th className="px-3 py-2.5 font-semibold">Province</th>
                    <th className="px-3 py-2.5 font-semibold">Expert</th>
                    <th className="px-3 py-2.5 font-semibold">Date</th>
                    <th className="px-3 py-2.5 font-semibold">Statut</th>
                    <th className="px-3 py-2.5 font-semibold">Priorite</th>
                    <th className="px-3 py-2.5 font-semibold">Progression</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-border/70 bg-surface/82">
                  {filteredActivities.length > 0 ? (
                    filteredActivities.map((activity) => (
                      <tr key={activity.id}>
                        <td className="px-3 py-3">
                          <p className="text-sm font-semibold text-foreground">{activity.title}</p>
                          <p className="mt-0.5 text-xs text-muted">
                            {activity.category} · {activity.participants} participants
                          </p>
                        </td>
                        <td className="px-3 py-3 text-sm text-muted-strong">{activity.province}</td>
                        <td className="px-3 py-3 text-sm text-muted-strong">{activity.owner}</td>
                        <td className="px-3 py-3 text-sm text-muted-strong">{formatDateLabel(activity.date)}</td>
                        <td className="px-3 py-3">
                          <span
                            className={`inline-flex min-h-7 items-center rounded-full px-2.5 text-xs font-semibold ${statusBadgeClass(activity.status)}`}
                          >
                            {activity.status}
                          </span>
                        </td>
                        <td className="px-3 py-3">
                          <span
                            className={`inline-flex min-h-7 items-center rounded-full border px-2.5 text-xs font-semibold ${priorityChipClass(activity.priority)}`}
                          >
                            {activity.priority}
                          </span>
                        </td>
                        <td className="px-3 py-3">
                          <div className="w-40">
                            <div className="flex items-center justify-between text-xs text-muted">
                              <span>{activity.progress}%</span>
                            </div>
                            <div className="mt-1.5 h-2 w-full overflow-hidden rounded-full bg-border/70">
                              <span
                                className="block h-full rounded-full bg-gradient-to-r from-brand to-accent"
                                style={{ width: `${activity.progress}%` }}
                              />
                            </div>
                          </div>
                        </td>
                      </tr>
                    ))
                  ) : (
                    <tr>
                      <td className="px-3 py-6 text-sm text-muted" colSpan={7}>
                        Aucun resultat pour les filtres selectionnes.
                      </td>
                    </tr>
                  )}
                </tbody>
              </table>
            </div>
          </article>
        </div>
      </section>
    </main>
  );
}
