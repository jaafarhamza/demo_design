import Image from "next/image";
import Link from "next/link";

const impactStats = [
  {
    value: "4",
    label: "piliers reunis",
    detail: "formation, projet, experts, suivi",
  },
  {
    value: "FR / AR",
    label: "experience bilingue",
    detail: "pensée pour le contexte marocain",
  },
  {
    value: "24/7",
    label: "acces continu",
    detail: "desktop, tablette et mobile",
  },
];

const audiences = [
  "Jeunes porteurs de projets",
  "Cooperatives et associations",
  "Auto-entrepreneurs",
];

const missionHighlights = [
  {
    title: "Orientation claire",
    description:
      "Un parcours plus simple a comprendre des le premier contact.",
  },
  {
    title: "Accompagnement humain",
    description:
      "Experts, mentorat et rendez-vous dans un meme espace digital.",
  },
  {
    title: "Impact visible",
    description:
      "Des outils de suivi qui rendent la progression plus lisible.",
  },
];

const journeySteps = [
  {
    step: "01",
    label: "Formation",
    title: "Se former avec des contenus courts et utiles",
    description:
      "L'utilisateur entre dans le parcours avec des modules simples, pratiques et accessibles.",
  },
  {
    step: "02",
    label: "Projet",
    title: "Construire son projet avec une trame claire",
    description:
      "La plateforme aide a structurer l'idee, les besoins et les premiers livrables sans se disperser.",
  },
  {
    step: "03",
    label: "Experts",
    title: "Recevoir un accompagnement au bon moment",
    description:
      "Questions, mentorat et rendez-vous experts restent relies au meme espace de travail.",
  },
  {
    step: "04",
    label: "Suivi",
    title: "Suivre la progression et les prochaines actions",
    description:
      "Chaque etape laisse une trace lisible pour savoir ou l'on en est et quoi faire ensuite.",
  },
];

const featureModules = [
  {
    label: "Formations",
    title: "Des contenus courts pour apprendre vite",
    description:
      "Modules, parcours et ressources pour comprendre et progresser sans surcharge.",
  },
  {
    label: "Experts",
    title: "Un lien direct avec l'accompagnement",
    description:
      "Mentorat, questions et rendez-vous relies au parcours utilisateur.",
  },
  {
    label: "Projet",
    title: "Des outils pour structurer l'idee",
    description:
      "Guidage, organisation et premiers livrables dans un meme flux.",
  },
  {
    label: "Dashboard",
    title: "Une vue claire sur l'avancement",
    description:
      "Progression, priorites et prochaines actions visibles en un coup d'oeil.",
  },
  {
    label: "Communaute",
    title: "Un espace plus vivant et collaboratif",
    description:
      "Partage d'experiences, entraide et dynamique collective autour des projets.",
  },
];

const targetUsers = [
  {
    step: "01",
    label: "Jeunes entrepreneurs",
    title: "Un point d'entree plus simple pour lancer une idee",
    description:
      "Des contenus utiles, un cadre clair et un accompagnement plus rassurant pour demarrer.",
  },
  {
    step: "02",
    label: "Cooperatives",
    title: "Des outils pour structurer une dynamique collective",
    description:
      "La plateforme aide a organiser les besoins, les etapes et les ressources autour du projet.",
  },
  {
    step: "03",
    label: "Associations",
    title: "Un espace pour orienter et suivre les initiatives",
    description:
      "L'information, les experts et le suivi restent plus faciles a mobiliser dans un meme environnement.",
  },
  {
    step: "04",
    label: "Auto-entrepreneurs",
    title: "Un accompagnement agile pour avancer plus vite",
    description:
      "Une experience legere, mobile et pratique pour apprendre, clarifier et passer a l'action.",
  },
];

const supportPillars = [
  {
    label: "Learning",
    title: "Des modules pour comprendre avant d'agir",
    description:
      "Cours, parcours et ressources pour apprendre avec un rythme simple et progressif.",
    accent: "bg-brand/10 text-brand-emphasis",
  },
  {
    label: "Project Support",
    title: "Des outils pour transformer une idee en plan d'action",
    description:
      "Organisation, accompagnement et suivi pour faire avancer le projet sans perdre le fil.",
    accent: "bg-accent/12 text-accent-contrast dark:text-accent",
  },
];

const impactStories = [
  {
    label: "Beneficiaire",
    title: "De l'idee a un projet mieux structure",
    description:
      "Une experience qui aide a comprendre les etapes, suivre l'avancement et mieux preparer les prochaines decisions.",
  },
  {
    label: "Territoire",
    title: "Un accompagnement plus visible sur le terrain",
    description:
      "Des outils partages pour rendre l'appui plus lisible entre acteurs, experts et beneficiaires.",
  },
  {
    label: "Impact",
    title: "Plus de clarte, plus de confiance, plus d'action",
    description:
      "La plateforme donne des reperes concrets qui renforcent la confiance dans le parcours.",
  },
];

const finalActions = [
  {
    title: "Explorer la plateforme",
    description:
      "Decouvrir les modules, les parcours et la logique globale de l'experience.",
    href: "/how-it-works",
    cta: "Voir le parcours",
  },
  {
    title: "Contacter l'equipe",
    description:
      "Poser une question, demander un echange ou presenter le besoin de votre structure.",
    href: "/contact",
    cta: "Nous contacter",
  },
  {
    title: "Commencer son parcours",
    description:
      "Entrer dans une experience claire pour apprendre, structurer et faire avancer un projet.",
    href: "/trainings",
    cta: "Commencer",
  },
];

const heroImageSrc =
  "https://cdn.pixabay.com/photo/2020/01/20/11/51/woman-4780153_1280.jpg";
const missionImagePrimarySrc =
  "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=1400&q=80";
const missionImageSecondarySrc =
  "https://images.unsplash.com/photo-1517048676732-d65bc937f952?auto=format&fit=crop&w=900&q=80";
const journeyImagePrimarySrc =
  "https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=1400&q=80";
const journeyImageSecondarySrc =
  "https://images.unsplash.com/photo-1521737604893-d14cc237f11d?auto=format&fit=crop&w=900&q=80";
const featuresImagePrimarySrc =
  "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=1400&q=80";
const targetUsersImagePrimarySrc =
  "https://images.unsplash.com/photo-1522204538344-922f76ecc041?auto=format&fit=crop&w=1400&q=80";
const supportPreviewImagePrimarySrc =
  "https://images.unsplash.com/photo-1516321165247-4aa89a48be28?auto=format&fit=crop&w=1400&q=80";
const impactImagePrimarySrc =
  "https://images.unsplash.com/photo-1515169067868-5387ec356754?auto=format&fit=crop&w=1400&q=80";
const finalCtaImagePrimarySrc =
  "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=1400&q=80";

export default function Home() {
  return (
    <main className="mx-auto flex w-full max-w-360 flex-1 flex-col px-3 pb-16 pt-8 sm:px-4 sm:pt-10 lg:px-6 lg:pb-24">
      <section className="relative scroll-mt-28 overflow-hidden px-2 py-6 sm:scroll-mt-32 sm:px-3 sm:py-8 lg:px-4 lg:py-10 xl:px-6">
        <div className="grid gap-10 xl:grid-cols-[1.05fr_0.95fr] xl:items-center">
          <div className="relative z-10 space-y-7">
            <div className="space-y-4">
              <span className="hero-kicker">Plateforme nationale INDH</span>
              <h1 className="max-w-4xl font-display text-[clamp(2.8rem,7vw,6.4rem)] leading-[0.92] tracking-[-0.055em] text-foreground">
                Former, orienter et transformer une idee en projet structure.
              </h1>
              <p className="max-w-2xl text-[1.03rem] leading-8 text-muted-strong sm:text-[1.12rem]">
                INDH Digitale centralise la formation, l&apos;accompagnement
                expert et les outils de suivi dans une experience claire,
                moderne et accessible pour les porteurs de projets au Maroc.
              </p>
            </div>

            <div className="flex flex-col gap-3 sm:flex-row sm:flex-wrap sm:items-center">
              <Link
                href="/how-it-works"
                className="inline-flex min-h-12 items-center justify-center rounded-full bg-brand px-6 text-sm font-semibold text-brand-contrast shadow-soft transition-colors hover:bg-brand-700"
              >
                Decouvrir le parcours
              </Link>
              <Link
                href="/trainings"
                className="inline-flex min-h-12 items-center justify-center rounded-full border border-border-strong/55 bg-background/80 px-6 text-sm font-semibold text-foreground transition-colors hover:bg-surface-strong"
              >
                Explorer les formations
              </Link>
            </div>

            <div className="grid gap-3 sm:grid-cols-3">
              {impactStats.map((item) => (
                <article
                  key={item.label}
                  className="rounded-[1.5rem] border border-border/70 bg-background/62 p-4 backdrop-blur-xl"
                >
                  <p className="font-display text-2xl text-foreground">
                    {item.value}
                  </p>
                  <p className="mt-1 text-sm font-semibold text-muted-strong">
                    {item.label}
                  </p>
                  <p className="mt-2 text-sm leading-6 text-muted">
                    {item.detail}
                  </p>
                </article>
              ))}
            </div>

            <div className="flex flex-wrap gap-2">
              {audiences.map((audience) => (
                <span
                  key={audience}
                  className="inline-flex min-h-11 items-center rounded-full border border-border/70 bg-surface px-4 text-sm text-muted-strong"
                >
                  {audience}
                </span>
              ))}
            </div>
          </div>

          <div className="relative z-10">
            <div className="relative mx-auto max-w-full">
              <div className="pointer-events-none absolute inset-8  " />

              <div className="relative overflow-hidden p-3">
                <div className="absolute inset-0 " />
                <div className="relative overflow-hidden rounded-[2rem]">
                  <Image
                    unoptimized
                    src={heroImageSrc}
                    alt="Entrepreneur working on a laptop in a collaborative workspace"
                    width="1280"
                    height="853"
                    priority
                    className="h-[27rem] w-full object-cover sm:h-[31rem] lg:h-144"
                  />
                  <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(180deg,rgba(13,24,18,0.12),rgba(13,24,18,0.18)_48%,rgba(13,24,18,0.62))]" />

                  <div className="absolute left-4 top-4 flex flex-wrap gap-2 sm:left-5 sm:top-5">
                    <span className="inline-flex min-h-10 items-center rounded-full bg-background/82 px-4 text-sm font-semibold text-brand-emphasis shadow-card backdrop-blur-xl">
                      Formation + mentorat
                    </span>
                    <span className="inline-flex min-h-10 items-center rounded-full bg-background/76 px-4 text-sm font-semibold text-foreground shadow-card backdrop-blur-xl">
                      FR / AR
                    </span>
                  </div>
                </div>
              </div>

              <div className="mt-4 grid gap-3 px-3 sm:grid-cols-2">
                <article className="rounded-[1.4rem] bg-background/80 p-4 ">
                  <p className="text-xs font-semibold tracking-[0.18em] text-muted uppercase">
                    Suivi
                  </p>
                  <div className="mt-3 flex items-end justify-between gap-3">
                    <p className="font-display text-4xl leading-none text-foreground">
                      78%
                    </p>
                    <p className="text-right text-sm leading-6 text-muted">
                      progression du parcours
                    </p>
                  </div>
                  <div className="mt-4 h-2.5 rounded-full bg-surface-muted">
                    <div className="h-2.5 w-[78%] rounded-full bg-gradient-to-r from-brand to-accent" />
                  </div>
                </article>

                <article className="rounded-[1.4rem] bg-background/80 p-4">
                  <p className="text-xs font-semibold tracking-[0.18em] text-muted uppercase">
                    Rendez-vous expert
                  </p>
                  <p className="mt-3 font-display text-3xl text-foreground">
                    09:30
                  </p>
                  <p className="mt-2 text-sm leading-6 text-muted-strong">
                    Session financement local reservee
                  </p>
                </article>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section
        aria-labelledby="mission-title"
        className="relative mt-8 scroll-mt-28 px-2 py-8 sm:scroll-mt-32 sm:px-3 sm:py-10 lg:mt-12 lg:px-4 lg:py-14 xl:px-6"
      >
        <div className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:gap-10 xl:gap-12">
          <div className="space-y-6 lg:pt-5">
            <div className="space-y-4 sm:space-y-5">
              <span className="section-label">
                Project Mission / Why It Exists
              </span>
              <h2
                id="mission-title"
                className="max-w-3xl font-display text-[clamp(1.95rem,5vw,4.6rem)] leading-[0.98] tracking-[-0.05em] text-foreground"
              >
                Une plateforme pensee pour rendre l&apos;accompagnement plus
                simple.
              </h2>
              <p className="max-w-xl text-[1rem] leading-8 text-muted-strong sm:text-[1.08rem]">
                INDH Digitale relie orientation, formation et suivi pour que le
                porteur de projet avance plus vite, avec moins de friction et
                plus de clarte.
              </p>
            </div>

            <div className="grid gap-3 sm:grid-cols-2">
              <article className="panel p-5">
                <p className="section-label">Le besoin</p>
                <p className="mt-3 text-base leading-7 text-muted-strong">
                  Eviter un parcours fragmente entre information, appui et
                  prise de decision.
                </p>
              </article>

              <article className="panel p-5">
                <p className="section-label">Le role de l&apos;INDH</p>
                <p className="mt-3 text-base leading-7 text-muted-strong">
                  Offrir une experience plus visible, plus accessible et mieux
                  suivie.
                </p>
              </article>
            </div>

            <article className="rounded-[1.8rem] border border-border/70 bg-[linear-gradient(135deg,color-mix(in_oklab,var(--brand)_14%,transparent),color-mix(in_oklab,var(--accent)_12%,transparent))] p-5 shadow-card sm:p-6">
              <p className="section-label">Pourquoi cela compte</p>
              <p className="mt-3 max-w-xl text-base leading-8 text-muted-strong">
                Une plateforme utile ne doit pas seulement informer. Elle doit
                aussi aider a comprendre, se former et avancer.
              </p>
            </article>
          </div>

          <div className="space-y-4">
            <div className="grid gap-4 md:grid-cols-[1.1fr_0.9fr]">
              <article className="relative overflow-hidden rounded-[2rem] bg-surface shadow-card">
                <Image
                  unoptimized
                  src={missionImagePrimarySrc}
                  alt="Equipe en reunion autour d'un ordinateur pour echanger sur un projet"
                  width="1400"
                  height="934"
                  className="h-[19rem] w-full object-cover sm:h-[23rem] lg:h-[27rem]"
                />
                <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(180deg,rgba(16,27,20,0.08),rgba(16,27,20,0.2)_52%,rgba(16,27,20,0.72))]" />
                <div className="absolute left-4 top-4 rounded-full bg-background/82 px-4 py-2 text-sm font-semibold text-brand-emphasis shadow-card backdrop-blur-xl">
                  Contexte terrain
                </div>
                <div className="absolute inset-x-4 bottom-4 rounded-[1.4rem] bg-background/84 p-4 shadow-card backdrop-blur-xl">
                  <p className="text-xs font-semibold tracking-[0.18em] text-muted uppercase">
                    Une mission claire
                  </p>
                  <p className="mt-2 text-sm leading-6 text-muted-strong">
                    Rapprocher les beneficiaires, les experts et les outils dans
                    une seule experience.
                  </p>
                </div>
              </article>

              <div className="grid gap-4">
                <article className="panel flex min-h-[10rem] flex-col justify-between p-5">
                  <div>
                    <p className="section-label">Objectif</p>
                    <h3 className="mt-3 font-display text-[1.55rem] leading-tight text-foreground">
                      Moins de dispersion, plus d&apos;action.
                    </h3>
                  </div>
                  <p className="mt-4 text-sm leading-6 text-muted">
                    Un espace unique pour comprendre, apprendre et avancer.
                  </p>
                </article>

                <article className="relative overflow-hidden rounded-[1.8rem] bg-surface shadow-card">
                  <Image
                    unoptimized
                    src={missionImageSecondarySrc}
                    alt="Groupe en atelier de travail et d'accompagnement"
                    width="900"
                    height="600"
                    className="h-[12rem] w-full object-cover sm:h-[13rem] lg:h-[15rem]"
                  />
                  <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(180deg,rgba(16,27,20,0.05),rgba(16,27,20,0.1)_40%,rgba(16,27,20,0.6))]" />
                  <div className="absolute inset-x-4 bottom-4 flex items-center justify-between gap-2 rounded-[1.2rem] bg-background/82 px-4 py-2 text-sm text-muted-strong shadow-card backdrop-blur-xl">
                    <span>Formation</span>
                    <span>Mentorat</span>
                    <span>Suivi</span>
                  </div>
                </article>
              </div>
            </div>

            <div className="grid gap-3 md:grid-cols-3">
              {missionHighlights.map((item) => (
                <article
                  key={item.title}
                  className="rounded-[1.5rem] border border-border/70 bg-background/62 p-4 backdrop-blur-xl"
                >
                  <h3 className="text-base text-foreground">{item.title}</h3>
                  <p className="mt-2 text-sm leading-6 text-muted">
                    {item.description}
                  </p>
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section
        aria-labelledby="how-it-works-title"
        className="relative mt-8 scroll-mt-28 px-2 py-8 sm:scroll-mt-32 sm:px-3 sm:py-10 lg:mt-12 lg:px-4 lg:py-14 xl:px-6"
      >
        <div className="grid gap-8 lg:grid-cols-[1fr_0.98fr] lg:gap-10 xl:gap-12">
          <div className="space-y-6">
            <div className="space-y-4">
              <span className="section-label">How It Works</span>
              <h2
                id="how-it-works-title"
                className="max-w-3xl font-display text-[clamp(1.95rem,5vw,4.6rem)] leading-[0.98] tracking-[-0.05em] text-foreground"
              >
                Un parcours continu de la formation au suivi.
              </h2>
              <p className="max-w-xl text-[1rem] leading-8 text-muted-strong sm:text-[1.08rem]">
                L&apos;utilisateur avance pas a pas: il se forme, structure son
                projet, echange avec un expert puis suit sa progression dans un
                meme flux.
              </p>
            </div>

            <ol className="grid gap-4">
              {journeySteps.map((item, index) => (
                <li
                  key={item.step}
                  className="list-none rounded-[1.8rem] border border-border/70 bg-background/65 p-4 shadow-card backdrop-blur-xl sm:p-5"
                >
                  <div className="grid gap-4 sm:grid-cols-[auto_1fr] sm:items-start">
                    <div className="relative flex h-14 w-14 items-center justify-center rounded-[1.35rem] bg-gradient-to-br from-brand to-accent font-display text-lg text-brand-contrast shadow-card">
                      {item.step}
                      {index < journeySteps.length - 1 ? (
                        <span className="pointer-events-none absolute left-1/2 top-full hidden h-8 w-px -translate-x-1/2 bg-gradient-to-b from-border-strong to-transparent sm:block" />
                      ) : null}
                    </div>

                    <div className="space-y-2">
                      <div className="flex flex-wrap items-center gap-3">
                        <p className="text-xs font-semibold tracking-[0.18em] text-muted uppercase">
                          {item.label}
                        </p>
                        <span className="inline-flex min-h-8 items-center rounded-full bg-brand/10 px-3 text-xs font-semibold text-brand-emphasis">
                          Etape {item.step}
                        </span>
                      </div>
                      <h3 className="max-w-xl text-[1.15rem] leading-7 text-foreground sm:text-[1.28rem]">
                        {item.title}
                      </h3>
                      <p className="max-w-2xl text-sm leading-7 text-muted">
                        {item.description}
                      </p>
                    </div>
                  </div>
                </li>
              ))}
            </ol>
          </div>

          <div className="space-y-4 lg:pt-6">
            <article className="relative overflow-hidden rounded-[2.15rem] bg-surface pb-4 shadow-card md:pb-0">
              <Image
                unoptimized
                src={journeyImagePrimarySrc}
                alt="Equipe en reunion autour d'une table pour suivre l'avancement d'un projet"
                width="1400"
                height="933"
                className="h-[18rem] w-full object-cover sm:h-[24rem] lg:h-[31rem]"
              />
              <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(180deg,rgba(16,27,20,0.06),rgba(16,27,20,0.2)_46%,rgba(16,27,20,0.76))]" />
              <div className="absolute left-4 top-4 inline-flex min-h-10 items-center rounded-full bg-background/84 px-4 text-sm font-semibold text-brand-emphasis shadow-card backdrop-blur-xl">
                Parcours accompagne
              </div>
              <div className="relative z-10 mx-4 -mt-12 rounded-[1.5rem] bg-background/92 p-4 shadow-card backdrop-blur-xl sm:p-5 md:absolute md:inset-x-4 md:bottom-4 md:mx-0 md:mt-0 md:bg-background/84">
                <p className="text-xs font-semibold tracking-[0.18em] text-muted uppercase">
                  Vue d&apos;ensemble
                </p>
                <div className="mt-3 grid gap-3 sm:grid-cols-3">
                  <div>
                    <p className="font-display text-2xl text-foreground">4</p>
                    <p className="text-sm text-muted">etapes lisibles</p>
                  </div>
                  <div>
                    <p className="font-display text-2xl text-foreground">1</p>
                    <p className="text-sm text-muted">parcours continu</p>
                  </div>
                  <div>
                    <p className="font-display text-2xl text-foreground">
                      1 espace
                    </p>
                    <p className="text-sm text-muted">pour avancer</p>
                  </div>
                </div>
              </div>
            </article>

            <div className="grid gap-4 md:grid-cols-[0.92fr_1.08fr]">
              <article className="relative overflow-hidden rounded-[1.8rem] bg-surface pb-4 shadow-card md:pb-0">
                <Image
                  unoptimized
                  src={journeyImageSecondarySrc}
                  alt="Participants en atelier de travail collaboratif"
                  width="900"
                  height="600"
                  className="h-[13rem] w-full object-cover sm:h-[14rem] lg:h-full"
                />
                <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(180deg,rgba(16,27,20,0.04),rgba(16,27,20,0.14)_42%,rgba(16,27,20,0.6))]" />
                <div className="relative z-10 mx-4 -mt-8 rounded-[1.2rem] bg-background/90 px-4 py-3 text-sm text-muted-strong shadow-card backdrop-blur-xl md:absolute md:inset-x-4 md:bottom-4 md:mx-0 md:mt-0 md:bg-background/82">
                  Formation, projet, experts, suivi
                </div>
              </article>

              <article className="rounded-[1.8rem] border border-border/70 bg-[linear-gradient(135deg,color-mix(in_oklab,var(--brand)_14%,transparent),color-mix(in_oklab,var(--accent)_12%,transparent))] p-5 shadow-card sm:p-6">
                <p className="section-label">Le principe</p>
                <h3 className="mt-3 font-display text-[1.5rem] leading-tight text-foreground sm:text-[1.75rem]">
                  Chaque etape prepare la suivante.
                </h3>
                <p className="mt-3 text-sm leading-7 text-muted-strong">
                  Le design doit toujours montrer la prochaine action utile,
                  sans perdre l&apos;utilisateur entre plusieurs interfaces.
                </p>
                <div className="mt-5 flex flex-wrap gap-2">
                  <span className="theme-chip">Formation</span>
                  <span className="theme-chip">Projet</span>
                  <span className="theme-chip">Experts</span>
                  <span className="theme-chip">Suivi</span>
                </div>
              </article>
            </div>
          </div>
        </div>
      </section>

      <section
        aria-labelledby="features-title"
        className="relative mt-8 scroll-mt-28 px-2 py-8 sm:scroll-mt-32 sm:px-3 sm:py-10 lg:mt-12 lg:px-4 lg:py-14 xl:px-6"
      >
        <div className="space-y-6">
          <div className="flex flex-col gap-4 lg:flex-row lg:items-end lg:justify-between">
            <div className="space-y-4">
              <span className="section-label">Key Features</span>
              <h2
                id="features-title"
                className="max-w-3xl font-display text-[clamp(1.95rem,5vw,4.6rem)] leading-[0.98] tracking-[-0.05em] text-foreground"
              >
                Les modules essentiels dans une seule plateforme.
              </h2>
              <p className="max-w-2xl text-[1rem] leading-8 text-muted-strong sm:text-[1.08rem]">
                L&apos;experience regroupe les briques principales du projet:
                apprendre, echanger avec des experts, construire son projet,
                suivre ses avancees et rester connecte a une dynamique
                collective.
              </p>
            </div>

            <div className="rounded-full border border-border/70 bg-background/70 px-4 py-2 text-sm text-muted-strong">
              5 modules pour guider l&apos;experience
            </div>
          </div>

          <div className="grid gap-4 xl:grid-cols-[1.05fr_0.95fr]">
            <article className="relative overflow-hidden rounded-[2.2rem] bg-surface pb-4 shadow-card md:pb-0">
              <Image
                unoptimized
                src={featuresImagePrimarySrc}
                alt="Equipe en atelier digital autour d'ordinateurs et d'un tableau de travail"
                width="1400"
                height="933"
                className="h-[18rem] w-full object-cover sm:h-[25rem] lg:h-[30rem]"
              />
              <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(180deg,rgba(16,27,20,0.08),rgba(16,27,20,0.16)_38%,rgba(16,27,20,0.82))]" />
              <div className="absolute left-4 top-4 inline-flex min-h-10 items-center rounded-full bg-background/84 px-4 text-sm font-semibold text-brand-emphasis shadow-card backdrop-blur-xl">
                Apercu plateforme
              </div>
              <div className="relative z-10 mx-4 -mt-10 grid gap-3 md:absolute md:inset-x-4 md:bottom-4 md:mx-0 md:mt-0 md:grid-cols-[1.2fr_0.8fr]">
                <div className="rounded-[1.6rem] bg-background/84 p-4 shadow-card backdrop-blur-xl sm:p-5">
                  <p className="text-xs font-semibold tracking-[0.18em] text-muted uppercase">
                    Module principal
                  </p>
                  <h3 className="mt-3 font-display text-[1.45rem] leading-tight text-foreground sm:text-[1.7rem]">
                    Dashboard central pour relier formation, projet et suivi.
                  </h3>
                  <p className="mt-3 text-sm leading-6 text-muted-strong">
                    Une vue unique pour reprendre son parcours, retrouver ses
                    actions et passer a l&apos;etape suivante.
                  </p>
                </div>

                <div className="rounded-[1.6rem] bg-background/82 p-4 shadow-card backdrop-blur-xl sm:p-5">
                  <p className="text-xs font-semibold tracking-[0.18em] text-muted uppercase">
                    Modules relies
                  </p>
                  <div className="mt-3 flex flex-wrap gap-2">
                    <span className="theme-chip">Formation</span>
                    <span className="theme-chip">Experts</span>
                    <span className="theme-chip">Projet</span>
                    <span className="theme-chip">Suivi</span>
                    <span className="theme-chip">Communaute</span>
                  </div>
                </div>
              </div>
            </article>

            <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-2">
              {featureModules.map((item, index) => (
                <article
                  key={item.label}
                  className={`rounded-[1.8rem] border border-border/70 p-5 shadow-card backdrop-blur-xl sm:p-6 ${
                    index === 0
                      ? "bg-[linear-gradient(135deg,color-mix(in_oklab,var(--brand)_16%,transparent),color-mix(in_oklab,var(--accent)_10%,transparent))]"
                      : "bg-background/68"
                  }`}
                >
                  <div className="flex items-center justify-between gap-3">
                    <span className="inline-flex h-11 w-11 items-center justify-center rounded-[1rem] bg-gradient-to-br from-brand to-accent font-display text-base text-brand-contrast shadow-card">
                      0{index + 1}
                    </span>
                    <p className="text-xs font-semibold tracking-[0.18em] text-muted uppercase">
                      {item.label}
                    </p>
                  </div>
                  <h3 className="mt-4 font-display text-[1.35rem] leading-tight text-foreground">
                    {item.title}
                  </h3>
                  <p className="mt-3 text-sm leading-7 text-muted">
                    {item.description}
                  </p>
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section
        aria-labelledby="target-users-title"
        className="relative mt-8 scroll-mt-28 px-2 py-8 sm:scroll-mt-32 sm:px-3 sm:py-10 lg:mt-12 lg:px-4 lg:py-14 xl:px-6"
      >
        <div className="grid gap-6 xl:grid-cols-[0.9fr_1.1fr] xl:gap-8">
          <div className="space-y-5">
            <div className="space-y-4">
              <span className="section-label">Target Users</span>
              <h2
                id="target-users-title"
                className="max-w-3xl font-display text-[clamp(1.95rem,5vw,4.6rem)] leading-[0.98] tracking-[-0.05em] text-foreground"
              >
                Une plateforme utile pour plusieurs profils de beneficiaires.
              </h2>
              <p className="max-w-xl text-[1rem] leading-8 text-muted-strong sm:text-[1.08rem]">
                INDH Digitale s&apos;adresse a des publics differents, mais avec
                un meme objectif: rendre l&apos;accompagnement plus lisible,
                plus accessible et plus actionnable.
              </p>
            </div>

            <article className="rounded-[1.9rem] border border-border/70 bg-[linear-gradient(135deg,color-mix(in_oklab,var(--brand)_14%,transparent),color-mix(in_oklab,var(--accent)_12%,transparent))] p-5 shadow-card sm:p-6">
              <p className="section-label">Vision d&apos;ensemble</p>
              <div className="mt-4 grid gap-3 sm:grid-cols-3">
                <div>
                  <p className="font-display text-3xl text-foreground">4</p>
                  <p className="text-sm text-muted">profils prioritaires</p>
                </div>
                <div>
                  <p className="font-display text-3xl text-foreground">1</p>
                  <p className="text-sm text-muted">experience continue</p>
                </div>
                <div>
                  <p className="font-display text-3xl text-foreground">
                    mobile
                  </p>
                  <p className="text-sm text-muted">et accessible</p>
                </div>
              </div>
            </article>

            <article className="relative overflow-hidden rounded-[2rem] bg-surface pb-4 shadow-card md:pb-0">
              <Image
                unoptimized
                src={targetUsersImagePrimarySrc}
                alt="Groupe de jeunes professionnels et porteurs de projets en echange collaboratif"
                width="1400"
                height="934"
                className="h-[17rem] w-full object-cover sm:h-[22rem] xl:h-[25rem]"
              />
              <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(180deg,rgba(16,27,20,0.06),rgba(16,27,20,0.14)_40%,rgba(16,27,20,0.72))]" />
              <div className="absolute left-4 top-4 inline-flex min-h-10 items-center rounded-full bg-background/84 px-4 text-sm font-semibold text-brand-emphasis shadow-card backdrop-blur-xl">
                Publics cibles
              </div>
              <div className="relative z-10 mx-4 -mt-10 rounded-[1.45rem] bg-background/92 p-4 shadow-card backdrop-blur-xl sm:p-5 md:absolute md:inset-x-4 md:bottom-4 md:mx-0 md:mt-0 md:bg-background/84">
                <p className="text-xs font-semibold tracking-[0.18em] text-muted uppercase">
                  Une meme base, plusieurs usages
                </p>
                <p className="mt-2 text-sm leading-6 text-muted-strong">
                  Le design doit rester assez flexible pour parler a des
                  parcours individuels, collectifs et associatifs.
                </p>
              </div>
            </article>
          </div>

          <div className="grid gap-4 md:grid-cols-2">
            {targetUsers.map((item) => (
              <article
                key={item.label}
                className="rounded-[1.9rem] border border-border/70 bg-background/68 p-5 shadow-card backdrop-blur-xl sm:p-6"
              >
                <div className="flex items-center justify-between gap-3">
                  <span className="inline-flex h-11 w-11 items-center justify-center rounded-[1rem] bg-gradient-to-br from-brand to-accent font-display text-base text-brand-contrast shadow-card">
                    {item.step}
                  </span>
                  <p className="text-xs font-semibold tracking-[0.18em] text-muted uppercase">
                    Profil
                  </p>
                </div>
                <p className="mt-4 text-sm font-semibold text-brand-emphasis">
                  {item.label}
                </p>
                <h3 className="mt-3 font-display text-[1.35rem] leading-tight text-foreground">
                  {item.title}
                </h3>
                <p className="mt-3 text-sm leading-7 text-muted">
                  {item.description}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section
        aria-labelledby="support-preview-title"
        className="relative mt-8 scroll-mt-28 px-2 py-8 sm:scroll-mt-32 sm:px-3 sm:py-10 lg:mt-12 lg:px-4 lg:py-14 xl:px-6"
      >
        <div className="grid gap-6 xl:grid-cols-[1.02fr_0.98fr] xl:gap-8">
          <div className="space-y-5">
            <div className="space-y-4">
              <span className="section-label">
                Learning + Project Support Preview
              </span>
              <h2
                id="support-preview-title"
                className="max-w-3xl font-display text-[clamp(1.95rem,5vw,4.6rem)] leading-[0.98] tracking-[-0.05em] text-foreground"
              >
                Les deux piliers les plus forts, reunis dans une meme
                experience.
              </h2>
              <p className="max-w-xl text-[1rem] leading-8 text-muted-strong sm:text-[1.08rem]">
                La plateforme ne se limite pas a former. Elle aide aussi a
                construire un projet avec une progression claire, des outils
                utiles et un appui visible.
              </p>
            </div>

            <article className="relative overflow-hidden rounded-[2rem] bg-surface pb-4 shadow-card md:pb-0">
              <Image
                unoptimized
                src={supportPreviewImagePrimarySrc}
                alt="Personnes en session de travail sur ordinateur entre apprentissage et construction de projet"
                width="1400"
                height="934"
                className="h-[18rem] w-full object-cover sm:h-[22rem] xl:h-[26rem]"
              />
              <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(180deg,rgba(16,27,20,0.06),rgba(16,27,20,0.18)_42%,rgba(16,27,20,0.78))]" />
              <div className="absolute left-4 top-4 inline-flex min-h-10 items-center rounded-full bg-background/84 px-4 text-sm font-semibold text-brand-emphasis shadow-card backdrop-blur-xl">
                Learn and build
              </div>
              <div className="relative z-10 mx-4 -mt-10 rounded-[1.45rem] bg-background/92 p-4 shadow-card backdrop-blur-xl sm:p-5 md:absolute md:inset-x-4 md:bottom-4 md:mx-0 md:mt-0 md:bg-background/84">
                <p className="text-xs font-semibold tracking-[0.18em] text-muted uppercase">
                  Une logique simple
                </p>
                <p className="mt-2 text-sm leading-6 text-muted-strong">
                  Apprendre pour gagner en clarte, puis structurer pour passer
                  a l&apos;action avec plus de confiance.
                </p>
              </div>
            </article>
          </div>

          <div className="grid gap-4">
            <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-1">
              {supportPillars.map((pillar) => (
                <article
                  key={pillar.label}
                  className="rounded-[1.9rem] border border-border/70 bg-background/68 p-5 shadow-card backdrop-blur-xl sm:p-6"
                >
                  <span
                    className={`inline-flex min-h-9 items-center rounded-full px-4 text-xs font-semibold tracking-[0.18em] uppercase ${pillar.accent}`}
                  >
                    {pillar.label}
                  </span>
                  <h3 className="mt-4 font-display text-[1.45rem] leading-tight text-foreground">
                    {pillar.title}
                  </h3>
                  <p className="mt-3 text-sm leading-7 text-muted">
                    {pillar.description}
                  </p>
                </article>
              ))}
            </div>

            <article className="rounded-[1.9rem] border border-border/70 bg-[linear-gradient(135deg,color-mix(in_oklab,var(--brand)_14%,transparent),color-mix(in_oklab,var(--accent)_12%,transparent))] p-5 shadow-card sm:p-6">
              <p className="section-label">Ce que l&apos;utilisateur ressent</p>
              <h3 className="mt-3 font-display text-[1.55rem] leading-tight text-foreground">
                Une experience qui apprend puis accompagne.
              </h3>
              <p className="mt-3 max-w-2xl text-sm leading-7 text-muted-strong">
                Le contenu aide a comprendre, tandis que les outils projet
                aident a structurer et faire avancer les prochaines etapes.
              </p>
              <div className="mt-5 flex flex-wrap gap-2">
                <span className="theme-chip">Cours en ligne</span>
                <span className="theme-chip">Parcours guides</span>
                <span className="theme-chip">Documents utiles</span>
                <span className="theme-chip">Suivi du projet</span>
              </div>
            </article>
          </div>
        </div>
      </section>

      <section
        aria-labelledby="impact-title"
        className="relative mt-8 scroll-mt-28 px-2 py-8 sm:scroll-mt-32 sm:px-3 sm:py-10 lg:mt-12 lg:px-4 lg:py-14 xl:px-6"
      >
        <div className="space-y-6">
          <div className="flex flex-col gap-4 lg:flex-row lg:items-end lg:justify-between">
            <div className="space-y-4">
              <span className="section-label">Success Stories / Impact</span>
              <h2
                id="impact-title"
                className="max-w-3xl font-display text-[clamp(1.95rem,5vw,4.6rem)] leading-[0.98] tracking-[-0.05em] text-foreground"
              >
                Montrer des trajectoires inspirantes et un impact attendu.
              </h2>
              <p className="max-w-2xl text-[1rem] leading-8 text-muted-strong sm:text-[1.08rem]">
                Cette section sert a installer la confiance: elle montre ce que
                la plateforme peut changer pour les beneficiaires et pour
                l&apos;accompagnement sur le terrain.
              </p>
            </div>

            <div className="rounded-full border border-border/70 bg-background/70 px-4 py-2 text-sm text-muted-strong">
              Histoires, effets attendus, confiance
            </div>
          </div>

          <div className="grid gap-4 xl:grid-cols-[1.06fr_0.94fr]">
            <article className="relative overflow-hidden rounded-[2.1rem] bg-surface pb-4 shadow-card md:pb-0">
              <Image
                unoptimized
                src={impactImagePrimarySrc}
                alt="Femme entrepreneure en echange confiant dans un environnement professionnel"
                width="1400"
                height="933"
                className="h-[18rem] w-full object-cover sm:h-[24rem] lg:h-[28rem]"
              />
              <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(180deg,rgba(16,27,20,0.06),rgba(16,27,20,0.18)_38%,rgba(16,27,20,0.84))]" />
              <div className="absolute left-4 top-4 inline-flex min-h-10 items-center rounded-full bg-background/84 px-4 text-sm font-semibold text-brand-emphasis shadow-card backdrop-blur-xl">
                Histoire type
              </div>
              <div className="relative z-10 mx-4 -mt-10 grid gap-3 md:absolute md:inset-x-4 md:bottom-4 md:mx-0 md:mt-0 md:grid-cols-[1.08fr_0.92fr]">
                <div className="rounded-[1.6rem] bg-background/88 p-4 shadow-card backdrop-blur-xl sm:p-5">
                  <p className="text-xs font-semibold tracking-[0.18em] text-muted uppercase">
                    Parcours exemple
                  </p>
                  <h3 className="mt-3 font-display text-[1.45rem] leading-tight text-foreground sm:text-[1.72rem]">
                    Une beneficiariaire gagne en clarte, apprend plus vite et
                    avance avec plus de confiance.
                  </h3>
                  <p className="mt-3 text-sm leading-6 text-muted-strong">
                    Formation, outils projet et suivi l&apos;aident a passer
                    d&apos;une intention a une demarche plus structuree.
                  </p>
                </div>

                <div className="rounded-[1.6rem] bg-background/84 p-4 shadow-card backdrop-blur-xl sm:p-5">
                  <p className="text-xs font-semibold tracking-[0.18em] text-muted uppercase">
                    Signaux de confiance
                  </p>
                  <div className="mt-3 grid gap-3">
                    <div>
                      <p className="font-display text-2xl text-foreground">
                        + clarte
                      </p>
                      <p className="text-sm text-muted">sur les prochaines etapes</p>
                    </div>
                    <div>
                      <p className="font-display text-2xl text-foreground">
                        + suivi
                      </p>
                      <p className="text-sm text-muted">
                        dans l&apos;avancement du projet
                      </p>
                    </div>
                    <div>
                      <p className="font-display text-2xl text-foreground">
                        + appui
                      </p>
                      <p className="text-sm text-muted">entre contenu et expertise</p>
                    </div>
                  </div>
                </div>
              </div>
            </article>

            <div className="grid gap-4">
              <article className="rounded-[1.9rem] border border-border/70 bg-[linear-gradient(135deg,color-mix(in_oklab,var(--brand)_14%,transparent),color-mix(in_oklab,var(--accent)_12%,transparent))] p-5 shadow-card sm:p-6">
                <p className="section-label">Impact attendu</p>
                <h3 className="mt-3 font-display text-[1.55rem] leading-tight text-foreground">
                  Rendre le parcours plus rassurant et plus lisible.
                </h3>
                <p className="mt-3 text-sm leading-7 text-muted-strong">
                  Le design de la plateforme doit montrer qu&apos;elle n&apos;est
                  pas seulement informative: elle accompagne une progression
                  concrete.
                </p>
                <div className="mt-5 flex flex-wrap gap-2">
                  <span className="theme-chip">Progression visible</span>
                  <span className="theme-chip">Appui humain</span>
                  <span className="theme-chip">Confiance</span>
                </div>
              </article>

              <div className="grid gap-4 md:grid-cols-3 xl:grid-cols-1">
                {impactStories.map((item) => (
                  <article
                    key={item.title}
                    className="rounded-[1.8rem] border border-border/70 bg-background/68 p-5 shadow-card backdrop-blur-xl"
                  >
                    <p className="text-xs font-semibold tracking-[0.18em] text-muted uppercase">
                      {item.label}
                    </p>
                    <h3 className="mt-3 font-display text-[1.28rem] leading-tight text-foreground">
                      {item.title}
                    </h3>
                    <p className="mt-3 text-sm leading-7 text-muted">
                      {item.description}
                    </p>
                  </article>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section
        aria-labelledby="final-cta-title"
        className="relative mt-8 scroll-mt-28 px-2 py-8 sm:scroll-mt-32 sm:px-3 sm:py-10 lg:mt-12 lg:px-4 lg:py-14 xl:px-6"
      >
        <div className="relative overflow-hidden rounded-[2.2rem] border border-border/70 bg-[linear-gradient(135deg,color-mix(in_oklab,var(--brand)_12%,transparent),color-mix(in_oklab,var(--accent)_14%,transparent))] p-4 shadow-card sm:p-5 lg:p-6">
          <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top_right,color-mix(in_oklab,var(--accent)_16%,transparent),transparent_42rem)]" />

          <div className="relative grid gap-5 xl:grid-cols-[1.04fr_0.96fr] xl:items-stretch">
            <div className="space-y-5 rounded-[1.9rem] bg-background/78 p-5 backdrop-blur-xl sm:p-6">
              <div className="space-y-4">
                <span className="section-label">Final CTA + Contact</span>
                <h2
                  id="final-cta-title"
                  className="max-w-3xl font-display text-[clamp(1.95rem,5vw,4.4rem)] leading-[0.98] tracking-[-0.05em] text-foreground"
                >
                  Pret a explorer la plateforme ou a lancer le premier pas.
                </h2>
                <p className="max-w-2xl text-[1rem] leading-8 text-muted-strong sm:text-[1.08rem]">
                  Cette derniere section doit donner une sortie claire:
                  decouvrir le parcours, contacter l&apos;equipe ou commencer
                  directement l&apos;experience.
                </p>
              </div>

              <div className="flex flex-col gap-3 sm:flex-row sm:flex-wrap">
                <Link
                  href="/how-it-works"
                  className="inline-flex min-h-12 items-center justify-center rounded-full bg-brand px-6 text-sm font-semibold text-brand-contrast shadow-soft transition-colors hover:bg-brand-700"
                >
                  Explorer la plateforme
                </Link>
                <Link
                  href="/contact"
                  className="inline-flex min-h-12 items-center justify-center rounded-full border border-border-strong/55 bg-background/85 px-6 text-sm font-semibold text-foreground transition-colors hover:bg-surface-strong"
                >
                  Contacter l&apos;equipe
                </Link>
              </div>

              <div className="grid gap-3 md:grid-cols-3">
                {finalActions.map((item) => (
                  <article
                    key={item.title}
                    className="rounded-[1.6rem] border border-border/70 bg-background/68 p-4 shadow-card backdrop-blur-xl"
                  >
                    <h3 className="text-lg text-foreground">{item.title}</h3>
                    <p className="mt-2 text-sm leading-6 text-muted">
                      {item.description}
                    </p>
                    <Link
                      href={item.href}
                      className="mt-4 inline-flex min-h-10 items-center rounded-full bg-surface px-4 text-sm font-semibold text-brand-emphasis transition-colors hover:bg-surface-strong"
                    >
                      {item.cta}
                    </Link>
                  </article>
                ))}
              </div>
            </div>

            <article className="relative overflow-hidden rounded-[1.9rem] bg-surface pb-4 shadow-card md:pb-0">
              <Image
                unoptimized
                src={finalCtaImagePrimarySrc}
                alt="Equipe en discussion pour passer a l'action autour d'un projet"
                width="1400"
                height="934"
                className="h-[18rem] w-full object-cover sm:h-[24rem] xl:h-full"
              />
              <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(180deg,rgba(16,27,20,0.06),rgba(16,27,20,0.18)_38%,rgba(16,27,20,0.84))]" />
              <div className="absolute left-4 top-4 inline-flex min-h-10 items-center rounded-full bg-background/84 px-4 text-sm font-semibold text-brand-emphasis shadow-card backdrop-blur-xl">
                Prochaine etape
              </div>
              <div className="relative z-10 mx-4 -mt-10 rounded-[1.45rem] bg-background/92 p-4 shadow-card backdrop-blur-xl sm:p-5 md:absolute md:inset-x-4 md:bottom-4 md:mx-0 md:mt-0 md:bg-background/84">
                <p className="text-xs font-semibold tracking-[0.18em] text-muted uppercase">
                  Appel a l&apos;action
                </p>
                <p className="mt-2 text-sm leading-6 text-muted-strong">
                  Une fin de page efficace donne une direction nette, avec des
                  actions visibles et un contact simple a activer.
                </p>
                <div className="mt-4 flex flex-wrap gap-2">
                  <span className="theme-chip">Explorer</span>
                  <span className="theme-chip">Contacter</span>
                  <span className="theme-chip">Commencer</span>
                </div>
              </div>
            </article>
          </div>
        </div>
      </section>
    </main>
  );
}
