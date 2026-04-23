"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { FormEvent, useEffect, useMemo, useRef, useState } from "react";

type WorkspaceGroup = {
  id: string;
  name: string;
  province: string;
  focus: string;
  members: string;
  image: string;
  toneClass: string;
  avatars: string[];
};

type Thread = {
  id: string;
  author: string;
  role: string;
  avatar: string;
  channel: string;
  time: string;
  text: string;
  reactions: string[];
};

type Mentor = {
  name: string;
  role: string;
  province: string;
  status: "En ligne" | "En atelier" | "Absent";
  avatar: string;
};

type EventItem = {
  title: string;
  date: string;
  mode: string;
  seats: string;
};

type ChatMessage = {
  id: string;
  role: "user" | "assistant";
  text: string;
  time: string;
};

type WorkspaceShortcut = {
  id: string;
  label: string;
  href: string;
  title: string;
  gradientClass: string;
};

const workspaceShortcuts: WorkspaceShortcut[] = [
  {
    id: "shortcut-accueil",
    label: "AC",
    href: "/",
    title: "Accueil",
    gradientClass: "from-emerald-500 to-teal-500",
  },
  {
    id: "shortcut-formation",
    label: "FO",
    href: "/formation",
    title: "Formations",
    gradientClass: "from-sky-500 to-indigo-500",
  },
  {
    id: "shortcut-tv",
    label: "TV",
    href: "/indh-tv",
    title: "INDH TV",
    gradientClass: "from-fuchsia-500 to-rose-500",
  },
  {
    id: "shortcut-communaute",
    label: "CO",
    href: "/communaute",
    title: "Communaute",
    gradientClass: "from-amber-500 to-orange-500",
  },
  {
    id: "shortcut-experts",
    label: "EX",
    href: "/formation",
    title: "Experts",
    gradientClass: "from-violet-500 to-indigo-500",
  },
];

const channelGroups = [
  {
    title: "General",
    channels: ["accueil", "annonces", "questions-rapides"],
  },
  {
    title: "Projets",
    channels: ["business-plan", "financement-indh", "pilotage-kpi"],
  },
  {
    title: "Mentorat",
    channels: ["coach-live", "retour-dossier", "entraide-terrain"],
  },
];

const workspaceGroups: WorkspaceGroup[] = [
  {
    id: "group-1",
    name: "Studio Lancement",
    province: "Rabat-Sale-Kenitra",
    focus: "Transformer une idee en plan d'action en 2 semaines.",
    members: "320 membres",
    image:
      "https://images.pexels.com/photos/7648047/pexels-photo-7648047.jpeg?auto=compress&cs=tinysrgb&w=1400",
    toneClass: "from-[#5865f2]/75 via-[#7f8bff]/50 to-[#52d7c8]/45",
    avatars: [
      "https://images.pexels.com/photos/5905902/pexels-photo-5905902.jpeg?auto=compress&cs=tinysrgb&w=200",
      "https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=200",
      "https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=200",
    ],
  },
  {
    id: "group-2",
    name: "Dossier Express",
    province: "Casablanca-Settat",
    focus: "Preparation complete du dossier et simulation orale.",
    members: "410 membres",
    image:
      "https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=1400",
    toneClass: "from-[#f97316]/70 via-[#fb923c]/45 to-[#facc15]/38",
    avatars: [
      "https://images.pexels.com/photos/697509/pexels-photo-697509.jpeg?auto=compress&cs=tinysrgb&w=200",
      "https://images.pexels.com/photos/1043471/pexels-photo-1043471.jpeg?auto=compress&cs=tinysrgb&w=200",
      "https://images.pexels.com/photos/762020/pexels-photo-762020.jpeg?auto=compress&cs=tinysrgb&w=200",
    ],
  },
  {
    id: "group-3",
    name: "Pilotage Terrain",
    province: "Fes-Meknes",
    focus: "Rituels d'equipe et suivi KPI actionnable chaque semaine.",
    members: "276 membres",
    image:
      "https://images.pexels.com/photos/1181438/pexels-photo-1181438.jpeg?auto=compress&cs=tinysrgb&w=1400",
    toneClass: "from-[#22c55e]/65 via-[#14b8a6]/45 to-[#0ea5e9]/42",
    avatars: [
      "https://images.pexels.com/photos/91227/pexels-photo-91227.jpeg?auto=compress&cs=tinysrgb&w=200",
      "https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=200",
      "https://images.pexels.com/photos/697509/pexels-photo-697509.jpeg?auto=compress&cs=tinysrgb&w=200",
    ],
  },
  {
    id: "group-4",
    name: "Marketing Local Sprint",
    province: "Souss-Massa",
    focus: "Attraction client locale avec actions terrain simples.",
    members: "194 membres",
    image:
      "https://images.pexels.com/photos/3184339/pexels-photo-3184339.jpeg?auto=compress&cs=tinysrgb&w=1400",
    toneClass: "from-[#06b6d4]/65 via-[#3b82f6]/45 to-[#818cf8]/40",
    avatars: [
      "https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=200",
      "https://images.pexels.com/photos/5905902/pexels-photo-5905902.jpeg?auto=compress&cs=tinysrgb&w=200",
      "https://images.pexels.com/photos/762020/pexels-photo-762020.jpeg?auto=compress&cs=tinysrgb&w=200",
    ],
  },
  {
    id: "group-5",
    name: "Coop Boost",
    province: "Marrakech-Safi",
    focus: "Gouvernance cooperative et acceleration execution.",
    members: "238 membres",
    image:
      "https://images.pexels.com/photos/3184418/pexels-photo-3184418.jpeg?auto=compress&cs=tinysrgb&w=1400",
    toneClass: "from-[#ec4899]/62 via-[#a855f7]/45 to-[#6366f1]/35",
    avatars: [
      "https://images.pexels.com/photos/1043471/pexels-photo-1043471.jpeg?auto=compress&cs=tinysrgb&w=200",
      "https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=200",
      "https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=200",
    ],
  },
];

const threads: Thread[] = [
  {
    id: "thread-1",
    author: "Salma Idrissi",
    role: "Mentor financement",
    avatar:
      "https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=240",
    channel: "#financement-indh",
    time: "Il y a 12 min",
    text: "Partage du jour: avant depot du dossier, validez 3 preuves terrain claires et un budget lisible.",
    reactions: ["36 utiles", "14 questions"],
  },
  {
    id: "thread-2",
    author: "Yassine El Amrani",
    role: "Coach business plan",
    avatar:
      "https://images.pexels.com/photos/697509/pexels-photo-697509.jpeg?auto=compress&cs=tinysrgb&w=240",
    channel: "#business-plan",
    time: "Il y a 34 min",
    text: "Le template one-page est publie. On le complete ensemble ce soir pendant le coaching live.",
    reactions: ["49 likes", "22 telechargements"],
  },
  {
    id: "thread-3",
    author: "Hajar El Fassi",
    role: "Pilote provincial",
    avatar:
      "https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=240",
    channel: "#pilotage-kpi",
    time: "Il y a 1 h",
    text: "Pour rester agile: 3 KPI max + revue hebdo de 20 min + plan d'action immediat.",
    reactions: ["28 approuvent", "8 exemples"],
  },
];

const mentors: Mentor[] = [
  {
    name: "Nora Boussouf",
    role: "Formatrice ESS",
    province: "Souss-Massa",
    status: "En ligne",
    avatar:
      "https://images.pexels.com/photos/5905902/pexels-photo-5905902.jpeg?auto=compress&cs=tinysrgb&w=240",
  },
  {
    name: "Omar Chraibi",
    role: "Expert KPI",
    province: "Tanger-Tetouan-Al Hoceima",
    status: "En atelier",
    avatar:
      "https://images.pexels.com/photos/697509/pexels-photo-697509.jpeg?auto=compress&cs=tinysrgb&w=240",
  },
  {
    name: "Sara Benjelloun",
    role: "Mentor marketing",
    province: "Fes-Meknes",
    status: "En ligne",
    avatar:
      "https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=240",
  },
  {
    name: "Karim Boukili",
    role: "Consultant gouvernance",
    province: "Casablanca-Settat",
    status: "Absent",
    avatar:
      "https://images.pexels.com/photos/91227/pexels-photo-91227.jpeg?auto=compress&cs=tinysrgb&w=240",
  },
];

const events: EventItem[] = [
  {
    title: "Sprint Pitch Projet",
    date: "Jeudi 18:30",
    mode: "Live room",
    seats: "42 places",
  },
  {
    title: "Clinique Dossier INDH",
    date: "Vendredi 11:00",
    mode: "Atelier interactif",
    seats: "28 places",
  },
  {
    title: "Masterclass KPI Terrain",
    date: "Samedi 10:00",
    mode: "Hybrid",
    seats: "56 places",
  },
];

const quickPrompts = [
  "Aide-moi a preparer mon dossier INDH en 5 etapes.",
  "Quels KPI suivre pour mon projet debutant ?",
  "Donne un plan de lancement sur 30 jours.",
];

const initialMessages: ChatMessage[] = [
  {
    id: "msg-1",
    role: "assistant",
    text: "Bienvenue dans AI Coach. Je peux t'aider sur dossier, business plan ou pilotage.",
    time: "Maintenant",
  },
];

function currentTimeLabel() {
  return new Intl.DateTimeFormat("fr-FR", {
    hour: "2-digit",
    minute: "2-digit",
  }).format(new Date());
}

function buildAssistantReply(prompt: string) {
  const normalized = prompt.toLowerCase();

  if (normalized.includes("dossier") || normalized.includes("financ")) {
    return "Sequence rapide: objectif social, preuve terrain, budget, impact attendu, plan 90 jours. Je peux ensuite te donner un modele de reponse.";
  }

  if (normalized.includes("kpi") || normalized.includes("pilot")) {
    return "Choisis 3 KPI: avancement activites, impact beneficiaires, tresorerie. On peut construire ton rituel hebdo en 15 min.";
  }

  if (normalized.includes("lancement") || normalized.includes("plan")) {
    return "Plan 30 jours: semaine 1 cadrage, semaine 2 test terrain, semaine 3 ajustements budget, semaine 4 prepa pitch final.";
  }

  return "Je te propose un plan en 3 blocs: cadrage, execution, suivi. Donne-moi ton contexte et je personnalise.";
}

function HashIcon() {
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 24 24"
      className="h-4 w-4"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M10 3 8 21" />
      <path d="m16 3-2 18" />
      <path d="M4 9h17" />
      <path d="M3 15h17" />
    </svg>
  );
}

function SendIcon() {
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 24 24"
      className="h-4 w-4"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.9"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="m22 2-7 20-4-9-9-4Z" />
      <path d="M22 2 11 13" />
    </svg>
  );
}

export function CommunityHubPage() {
  const [selectedProvince, setSelectedProvince] = useState("Toutes");
  const [draft, setDraft] = useState("");
  const [isTyping, setIsTyping] = useState(false);
  const [messages, setMessages] = useState<ChatMessage[]>(initialMessages);
  const [chatOpen, setChatOpen] = useState(false);
  const [activeChannel, setActiveChannel] = useState("accueil");
  const pathname = usePathname();
  const messageIdRef = useRef(2);
  const logRef = useRef<HTMLUListElement | null>(null);

  const provinces = useMemo(
    () => ["Toutes", ...new Set(workspaceGroups.map((group) => group.province))],
    []
  );

  const filteredGroups = useMemo(() => {
    if (selectedProvince === "Toutes") {
      return workspaceGroups;
    }

    return workspaceGroups.filter((group) => group.province === selectedProvince);
  }, [selectedProvince]);

  useEffect(() => {
    if (!logRef.current) {
      return;
    }

    logRef.current.scrollTop = logRef.current.scrollHeight;
  }, [messages, isTyping, chatOpen]);

  const submitPrompt = (value: string) => {
    const trimmed = value.trim();

    if (!trimmed) {
      return;
    }

    const userMessage: ChatMessage = {
      id: `msg-user-${messageIdRef.current++}`,
      role: "user",
      text: trimmed,
      time: currentTimeLabel(),
    };

    setMessages((prev) => [...prev, userMessage]);
    setIsTyping(true);
    setDraft("");

    window.setTimeout(() => {
      const assistantMessage: ChatMessage = {
        id: `msg-ai-${messageIdRef.current++}`,
        role: "assistant",
        text: buildAssistantReply(trimmed),
        time: currentTimeLabel(),
      };

      setMessages((prev) => [...prev, assistantMessage]);
      setIsTyping(false);
    }, 520);
  };

  const onSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    submitPrompt(draft);
  };

  return (
    <main className="relative flex-1 text-foreground">
      <div className="pointer-events-none absolute inset-0 " />

      <section className="relative px-3 pb-12 pt-6 sm:px-4 sm:pb-14 sm:pt-8 lg:px-6 lg:pb-16 lg:pt-10">
        <div className="mx-auto max-w-full">
          <article className="overflow-hidden rounded-[1.7rem] border border-border/70 bg-surface/92 shadow-card backdrop-blur-xl dark:border-white/12 dark:bg-[#171a22]/88 dark:shadow-[0_34px_80px_rgba(0,0,0,0.5)]">
            <div className="grid min-h-[80vh] lg:grid-cols-[72px_280px_minmax(0,1fr)] xl:grid-cols-[72px_280px_minmax(0,1fr)_320px]">
              <aside className="hidden border-r border-border/70 bg-surface-muted/75 p-3 lg:flex lg:flex-col lg:gap-2 dark:border-white/10 dark:bg-[#11141b]">
                {workspaceShortcuts.map((shortcut) => {
                  const isActive =
                    shortcut.href === "/"
                      ? pathname === "/"
                      : pathname.startsWith(shortcut.href);

                  return (
                    <Link
                      key={shortcut.id}
                      href={shortcut.href}
                      title={shortcut.title}
                      aria-label={shortcut.title}
                      className={`group relative inline-flex h-12 w-12 items-center justify-center rounded-2xl border transition-all hover:-translate-y-0.5 ${
                        isActive
                          ? "border-brand/45 bg-brand text-brand-contrast shadow-[0_10px_24px_color-mix(in_oklab,var(--brand)_38%,transparent)] dark:border-white/28 dark:bg-[#5865f2] dark:text-white"
                          : "border-border/70 bg-surface text-muted-strong hover:border-transparent hover:text-white dark:border-white/10 dark:bg-[#1e222d] dark:text-white/84"
                      }`}
                    >
                      {!isActive && (
                        <span
                          className={`absolute inset-0 rounded-2xl bg-gradient-to-br opacity-0 transition-opacity group-hover:opacity-100 ${shortcut.gradientClass}`}
                        />
                      )}
                      <span className="relative text-[0.64rem] font-semibold tracking-[0.11em]">
                        {shortcut.label}
                      </span>
                    </Link>
                  );
                })}
                <div className="mt-auto flex items-center justify-center gap-2 rounded-2xl border border-success/35 bg-success/14 p-2.5 text-center text-sm font-semibold text-success">
                   
                  <span>138</span>
                </div>
              </aside>

              <aside className="hidden border-r border-border/70 bg-surface-muted/65 p-4 lg:flex lg:flex-col dark:border-white/10 dark:bg-[#151923]">
                <div className="rounded-xl border border-border/70 bg-surface px-3 py-2 text-xs text-muted-strong dark:border-white/10 dark:bg-[#202535] dark:text-white/70">
                  Salons de la communaute
                </div>

                <div className="mt-4 space-y-4">
                  {channelGroups.map((group) => (
                    <section key={group.title}>
                      <p className="text-[0.68rem] font-semibold tracking-[0.09em] text-muted uppercase dark:text-white/45">
                        {group.title}
                      </p>
                      <div className="mt-2 grid gap-1.5">
                        {group.channels.map((channel) => {
                          const isActive = activeChannel === channel;

                          return (
                            <button
                              key={channel}
                              type="button"
                              onClick={() => setActiveChannel(channel)}
                              className={`inline-flex min-h-9 items-center gap-2 rounded-lg px-2.5 text-left text-sm transition-colors ${
                                isActive
                                  ? "bg-brand/22 text-foreground dark:bg-[#5865f2]/30 dark:text-white"
                                  : "text-muted-strong hover:bg-surface hover:text-foreground dark:text-white/75 dark:hover:bg-white/10 dark:hover:text-white"
                              }`}
                            >
                              <HashIcon />
                              <span>{channel}</span>
                            </button>
                          );
                        })}
                      </div>
                    </section>
                  ))}

                  <section>
                    <p className="text-[0.68rem] font-semibold tracking-[0.09em] text-muted uppercase dark:text-white/45">
                      Provinces
                    </p>
                    <div className="mt-2 grid gap-1.5">
                      {provinces.map((province) => (
                        <button
                          key={province}
                          type="button"
                          onClick={() => setSelectedProvince(province)}
                          className={`inline-flex min-h-9 items-center gap-2 rounded-lg px-2.5 text-left text-sm transition-colors ${
                            selectedProvince === province
                              ? "bg-brand/22 text-foreground dark:bg-[#5865f2]/30 dark:text-white"
                              : "text-muted-strong hover:bg-surface hover:text-foreground dark:text-white/75 dark:hover:bg-white/10 dark:hover:text-white"
                          }`}
                        >
                          <span className="h-1.5 w-1.5 rounded-full bg-brand dark:bg-cyan-300" />
                          <span className="truncate">{province}</span>
                        </button>
                      ))}
                    </div>
                  </section>
                </div>

                <div className="mt-auto rounded-xl border border-border/70 bg-surface p-3 dark:border-white/10 dark:bg-[#202535]">
                  <p className="text-xs font-semibold text-foreground dark:text-white">Mode collaboratif</p>
                  <p className="mt-1 text-xs text-muted dark:text-white/65">
                    Activez les salles voix et ateliers guides par province.
                  </p>
                  <button
                    type="button"
                    className="mt-3 inline-flex min-h-8 items-center justify-center rounded-lg bg-brand px-3 text-xs font-semibold text-brand-contrast transition-colors hover:bg-brand-700 dark:bg-[#5865f2] dark:hover:bg-[#707dff]"
                  >
                    Activer
                  </button>
                </div>
              </aside>

              <section className="min-h-0 xl:border-r xl:border-border/70 dark:xl:border-white/10">
                <header className="border-b border-border/70 px-3 py-3 sm:px-4 dark:border-white/10">
                  <div className="flex flex-wrap items-center justify-between gap-3">
                    <div>
                      <p className="text-xs font-semibold tracking-[0.16em] text-muted uppercase dark:text-white/58">
                        Communaute collaborative
                      </p>
                      <h1 className="mt-1 text-2xl leading-tight text-foreground sm:text-[2.1rem] dark:text-white">
                        Hub communautaire INDH: collaboration, mentorat et pilotage provincial.
                      </h1>
                    </div>
                    <Link
                      href="/formation"
                      className="inline-flex min-h-10 items-center rounded-full border border-border/70 bg-surface px-4 text-sm font-semibold text-foreground transition-colors hover:bg-surface-strong dark:border-white/16 dark:bg-white/10 dark:text-white/90 dark:hover:bg-white/14"
                    >
                      Voir les formations
                    </Link>
                  </div>

                </header>

                <div className="space-y-4 px-3 py-4 sm:px-4">
                  <div className="grid gap-3 md:grid-cols-2">
                    {filteredGroups.map((group) => (
                      <article
                        key={group.id}
                        className="group relative overflow-hidden rounded-[1.1rem] border border-border/70 bg-surface dark:border-white/12 dark:bg-[#1e2230]"
                      >
                        <Image
                          src={group.image}
                          alt={`Visuel ${group.name}`}
                          width={1200}
                          height={700}
                          className="absolute inset-0 h-full w-full object-cover opacity-30 transition-transform duration-700 group-hover:scale-[1.06]"
                          sizes="(min-width: 768px) 36vw, 100vw"
                        />
                        <div className={`pointer-events-none absolute inset-0 bg-gradient-to-br ${group.toneClass}`} />
                        <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(140deg,rgba(255,255,255,0.9),rgba(255,255,255,0.55),rgba(255,255,255,0.86))] dark:bg-[linear-gradient(140deg,rgba(10,14,25,0.9),rgba(10,14,25,0.58),rgba(10,14,25,0.86))]" />

                        <div className="relative p-3.5">
                          <p className="inline-flex min-h-7 items-center rounded-full border border-border/70 bg-surface/75 px-2.5 text-[0.64rem] font-semibold tracking-[0.08em] text-muted-strong uppercase dark:border-white/22 dark:bg-black/26 dark:text-white/90">
                            {group.province}
                          </p>
                          <h2 className="mt-2 text-lg leading-snug text-foreground dark:text-white">{group.name}</h2>
                          <p className="mt-1 text-sm leading-6 text-muted-strong dark:text-white/82">{group.focus}</p>
                          <p className="mt-2 text-xs font-semibold text-brand-emphasis dark:text-cyan-200">
                            {group.members}
                          </p>
                          <div className="mt-2 flex items-center gap-1.5">
                            {group.avatars.map((avatar, index) => (
                              <Image
                                key={`${group.id}-${index}`}
                                src={avatar}
                                alt={`Membre ${group.name}`}
                                width={72}
                                height={72}
                                className="h-7 w-7 rounded-full border-2 border-surface object-cover dark:border-[#171a22]"
                                sizes="28px"
                              />
                            ))}
                          </div>
                        </div>
                      </article>
                    ))}
                  </div>

                  <div className="space-y-3">
                    {threads.map((thread) => (
                      <article
                        key={thread.id}
                        className="rounded-[1rem] border border-border/70 bg-surface/90 p-3.5 dark:border-white/10 dark:bg-[#1e2230]/88"
                      >
                        <div className="flex items-start gap-3">
                          <Image
                            src={thread.avatar}
                            alt={`Avatar ${thread.author}`}
                            width={96}
                            height={96}
                            className="h-11 w-11 rounded-xl object-cover"
                            sizes="44px"
                          />
                          <div className="min-w-0 flex-1">
                            <div className="flex flex-wrap items-center gap-2 text-xs text-muted dark:text-white/65">
                              <p className="text-sm font-semibold text-foreground dark:text-white">{thread.author}</p>
                              <span>{thread.role}</span>
                              <span>{thread.channel}</span>
                              <span>{thread.time}</span>
                            </div>
                            <p className="mt-2 text-sm leading-6 text-muted-strong dark:text-white/85">{thread.text}</p>
                            <div className="mt-3 flex flex-wrap gap-2">
                              {thread.reactions.map((reaction) => (
                                <span
                                  key={reaction}
                                  className="inline-flex min-h-7 items-center rounded-full border border-border/70 bg-background/68 px-2.5 text-xs text-muted-strong dark:border-white/15 dark:bg-white/8 dark:text-white/78"
                                >
                                  {reaction}
                                </span>
                              ))}
                            </div>
                          </div>
                        </div>
                      </article>
                    ))}
                  </div>
                </div>
              </section>

              <aside className="hidden min-h-0 bg-surface-muted/65 p-4 xl:flex xl:flex-col dark:bg-[#141821]/84">
                <p className="text-xs font-semibold tracking-[0.16em] text-muted uppercase dark:text-white/58">
                  Mentors & Agenda
                </p>
                <div className="mt-3 grid gap-2.5">
                  {mentors.map((mentor) => (
                    <article
                      key={mentor.name}
                      className="flex items-center gap-2 rounded-lg border border-border/70 bg-surface/90 p-2 dark:border-white/12 dark:bg-white/6"
                    >
                      <Image
                        src={mentor.avatar}
                        alt={`Profil ${mentor.name}`}
                        width={88}
                        height={88}
                        className="h-10 w-10 rounded-lg object-cover"
                        sizes="40px"
                      />
                      <div className="min-w-0 flex-1">
                        <p className="truncate text-sm font-semibold text-foreground dark:text-white">{mentor.name}</p>
                        <p className="truncate text-xs text-muted dark:text-white/65">{mentor.role}</p>
                      </div>
                      <span
                        className={`inline-flex min-h-6 items-center rounded-full px-2 text-[0.62rem] font-semibold tracking-[0.08em] uppercase ${
                          mentor.status === "En ligne"
                            ? "bg-success/18 text-success dark:bg-emerald-500/18 dark:text-emerald-200"
                            : mentor.status === "En atelier"
                              ? "bg-brand/16 text-brand-emphasis dark:bg-sky-500/18 dark:text-sky-200"
                              : "bg-border/70 text-muted dark:bg-white/12 dark:text-white/62"
                        }`}
                      >
                        {mentor.status}
                      </span>
                    </article>
                  ))}
                </div>

                <div className="mt-4 rounded-xl border border-border/70 bg-surface p-3 dark:border-white/12 dark:bg-white/6">
                  <p className="text-xs font-semibold tracking-[0.1em] text-muted uppercase dark:text-white/64">
                    Evenements
                  </p>
                  <div className="mt-2 grid gap-2">
                    {events.map((eventItem) => (
                      <article
                        key={eventItem.title}
                        className="rounded-lg border border-border/70 bg-background/80 px-2.5 py-2 dark:border-white/12 dark:bg-[#1b1f2a]"
                      >
                        <p className="text-sm font-semibold text-foreground dark:text-white">{eventItem.title}</p>
                        <p className="mt-1 text-xs text-muted dark:text-white/65">{eventItem.date}</p>
                        <div className="mt-2 flex flex-wrap gap-1.5">
                          <span className="inline-flex min-h-6 items-center rounded-full border border-border/70 bg-surface px-2 text-[0.62rem] text-muted-strong dark:border-white/14 dark:bg-white/8 dark:text-white/72">
                            {eventItem.mode}
                          </span>
                          <span className="inline-flex min-h-6 items-center rounded-full border border-border/70 bg-surface px-2 text-[0.62rem] text-muted-strong dark:border-white/14 dark:bg-white/8 dark:text-white/72">
                            {eventItem.seats}
                          </span>
                        </div>
                      </article>
                    ))}
                  </div>
                </div>
              </aside>
            </div>
          </article>
        </div>
      </section>

      <button
        type="button"
        onClick={() => setChatOpen((open) => !open)}
        aria-expanded={chatOpen}
        aria-controls="ai-chat-popup"
        className="fixed bottom-5 right-5 z-50 inline-flex min-h-12 items-center gap-2 rounded-full border border-brand/35 bg-brand px-4 text-sm font-semibold text-brand-contrast shadow-[0_12px_30px_color-mix(in_oklab,var(--brand)_45%,transparent)] transition-colors hover:bg-brand-700 dark:border-white/25 dark:bg-[#5865f2] dark:text-white dark:shadow-[0_12px_30px_rgba(88,101,242,0.45)] dark:hover:bg-[#6f7cff]"
      >
        AI Chat
      </button>

      <aside
        id="ai-chat-popup"
        className={`fixed bottom-20 right-4 z-50 w-[min(24rem,calc(100vw-1.5rem))] rounded-[1rem] border border-border/70 bg-surface/95 p-3 shadow-card backdrop-blur-xl transition-all duration-200 dark:border-white/14 dark:bg-[#181c27]/96 dark:shadow-[0_20px_55px_rgba(0,0,0,0.55)] ${
          chatOpen ? "pointer-events-auto translate-y-0 opacity-100" : "pointer-events-none translate-y-3 opacity-0"
        }`}
      >
        <div className="flex items-center justify-between gap-2">
          <div>
            <p className="text-sm font-semibold text-foreground dark:text-white">AI Coach Communaute</p>
            <p className="text-xs text-muted dark:text-white/62">Reponses rapides et actionnables</p>
          </div>
          <button
            type="button"
            onClick={() => setChatOpen(false)}
            className="inline-flex h-8 w-8 items-center justify-center rounded-lg border border-border/70 bg-surface text-muted-strong transition-colors hover:bg-surface-strong dark:border-white/14 dark:bg-white/8 dark:text-white/82 dark:hover:bg-white/14"
            aria-label="Fermer le chat"
          >
            X
          </button>
        </div>

        <div className="mt-3 flex flex-wrap gap-1.5">
          {quickPrompts.map((prompt) => (
            <button
              key={prompt}
              type="button"
              onClick={() => submitPrompt(prompt)}
              className="inline-flex min-h-7 items-center rounded-full border border-border/70 bg-background/70 px-2 text-[0.62rem] font-semibold tracking-[0.07em] text-muted-strong uppercase transition-colors hover:bg-surface-strong dark:border-white/16 dark:bg-white/8 dark:text-white/82 dark:hover:bg-white/14"
            >
              {prompt}
            </button>
          ))}
        </div>

        <ul
          ref={logRef}
          role="log"
          aria-live="polite"
          aria-relevant="additions text"
          className="mt-3 h-56 space-y-2 overflow-y-auto rounded-lg border border-border/70 bg-background/70 p-2 dark:border-white/12 dark:bg-[#11141b]"
        >
          {messages.map((message) => (
            <li
              key={message.id}
              className={`rounded-lg px-2.5 py-2 text-sm leading-6 ${
                message.role === "assistant"
                  ? "border border-brand/22 bg-brand/10 text-foreground dark:border-[#5865f2]/35 dark:bg-[#5865f2]/16 dark:text-white/90"
                  : "border border-border/70 bg-surface text-foreground dark:border-white/12 dark:bg-white/8 dark:text-white"
              }`}
            >
              <p>{message.text}</p>
              <p className="mt-1 text-[0.64rem] text-muted dark:text-white/58">{message.time}</p>
            </li>
          ))}
          {isTyping && (
            <li className="rounded-lg border border-border/70 bg-surface px-2.5 py-2 text-sm text-muted dark:border-white/12 dark:bg-white/8 dark:text-white/70">
              AI Coach est en train de repondre...
            </li>
          )}
        </ul>

        <form onSubmit={onSubmit} className="mt-3">
          <label htmlFor="community-ai-input" className="sr-only">
            Message pour AI Coach
          </label>
          <div className="flex items-center gap-2 rounded-lg border border-border/70 bg-background/72 p-2 dark:border-white/12 dark:bg-[#11141b]">
            <input
              id="community-ai-input"
              value={draft}
              onChange={(event) => setDraft(event.target.value)}
              placeholder="Pose ta question..."
              className="h-9 flex-1 bg-transparent px-1 text-sm text-foreground outline-none placeholder:text-muted dark:text-white dark:placeholder:text-white/46"
            />
            <button
              type="submit"
              className="inline-flex h-9 w-9 items-center justify-center rounded-lg bg-brand text-brand-contrast transition-colors hover:bg-brand-700 dark:bg-[#5865f2] dark:text-white dark:hover:bg-[#707dff]"
              aria-label="Envoyer"
            >
              <SendIcon />
            </button>
          </div>
        </form>
      </aside>
    </main>
  );
}
