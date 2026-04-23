"use client";

import type { CSSProperties } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

const footerWordmarkVars = {
  "--footer-wordmark-size": "clamp(4.4rem, 15vw, 13rem)",
  "--footer-wordmark-shadow-offset": "clamp(0.2rem, 0.55vw, 0.45rem)",
} as CSSProperties;

const footerWordmarkFill = {
  fontSize: "var(--footer-wordmark-size)",
  backgroundImage:
    "linear-gradient(90deg, color-mix(in oklab, var(--brand) 88%, white 12%), color-mix(in oklab, var(--accent) 78%, var(--brand) 22%), color-mix(in oklab, var(--brand) 84%, black 8%))",
  WebkitBackgroundClip: "text",
  backgroundClip: "text",
  WebkitTextFillColor: "transparent",
} as CSSProperties;

const footerWordmarkShadow = {
  fontSize: "var(--footer-wordmark-size)",
  top: "var(--footer-wordmark-shadow-offset)",
} as CSSProperties;

export function SiteFooter() {
  const pathname = usePathname();
  const isDarkShowcaseRoute = pathname.startsWith("/indh-tv");

  const copy = {
    description:
      "Une experience numerique moderne pour orienter, former et accompagner les porteurs de projets INDH avec un parcours clair, accessible et responsive.",
    navigation: "Navigation",
    designed:
      "© 2026 INDH Digitale. Concu pour une presentation moderne, accessible et evolutive.",
    location: "Maroc · FR",
  };

  return (
    <footer
      className={`px-3 pb-0 pt-10 sm:px-4 sm:pt-12 lg:px-6 lg:pt-16 ${
        isDarkShowcaseRoute ? "dark bg-[oklch(0.1_0.015_210)]" : ""
      }`}
    >
      <div className="mx-auto max-w-full">
        <div
          className={`relative overflow-hidden rounded-[2rem] border backdrop-blur-2xl ${
            isDarkShowcaseRoute
              ? "border-white/16 bg-black/72 shadow-[0_22px_55px_rgba(0,0,0,0.5)]"
              : "border-border/70 bg-surface/78 shadow-card"
          }`}
        >
          <div
            className={`pointer-events-none absolute inset-x-0 top-0 h-px ${
              isDarkShowcaseRoute
                ? "bg-gradient-to-r from-transparent via-white/45 to-transparent"
                : "bg-gradient-to-r from-transparent via-brand/30 to-transparent"
            }`}
          />
          <div
            className={`pointer-events-none absolute -right-24 bottom-0 h-56 w-56 rounded-full blur-3xl ${
              isDarkShowcaseRoute ? "bg-white/10" : "bg-accent/10"
            }`}
          />
          <div
            className={`pointer-events-none absolute -left-20 top-12 h-48 w-48 rounded-full blur-3xl ${
              isDarkShowcaseRoute ? "bg-brand/20" : "bg-brand/12"
            }`}
          />

          <div className="grid gap-8 px-5 py-6 sm:px-6 sm:py-8 lg:grid-cols-[1.3fr_0.8fr_0.8fr_0.9fr] lg:gap-10 lg:px-8 lg:py-10">
            <section className="relative space-y-6">
              <div className="inline-flex items-center gap-4">
                <span className="relative flex h-14 w-14 shrink-0 items-center justify-center overflow-hidden rounded-[1.2rem] bg-gradient-to-br from-brand via-brand-600 to-accent text-brand-contrast shadow-soft sm:h-15 sm:w-15">
                  <span className="absolute inset-0 bg-[radial-gradient(circle_at_25%_20%,rgba(255,255,255,0.32),transparent_48%)]" />
                  <span className="relative font-display text-sm tracking-[0.12em] sm:text-[0.95rem]">
                    INDH
                  </span>
                </span>
                <div>
                  <p className="font-display text-[1.75rem] leading-none text-foreground sm:text-[1.95rem]">
                    INDH Digitale
                  </p>
                  <p className="mt-2 max-w-sm text-sm leading-6 text-muted">
                    {copy.description}
                  </p>
                </div>
              </div>

              <p className="max-w-xl text-sm leading-7 text-muted-strong sm:text-[0.96rem]">
                {copy.description}
              </p>

              <div className="flex flex-col gap-2 sm:flex-row sm:flex-wrap sm:items-center">
                <Link
                  href="/"
                  className="inline-flex min-h-12 items-center justify-center rounded-full bg-brand px-5 text-sm font-semibold text-brand-contrast shadow-soft transition-colors hover:bg-brand-700 sm:justify-start"
                >
                  Accueil
                </Link>
              </div>
            </section>

            <nav aria-labelledby="footer-nav-primary" className="relative">
              <h2
                id="footer-nav-primary"
                className="text-sm font-semibold tracking-[0.18em] text-muted uppercase"
              >
                {copy.navigation}
              </h2>
              <ul className="mt-4 grid gap-2">
                <li>
                  <Link
                    href="/"
                    className="inline-flex min-h-12 items-center rounded-2xl px-3 text-sm text-muted-strong transition-colors hover:bg-surface-strong hover:text-foreground"
                  >
                    Accueil
                  </Link>
                </li>
                <li>
                  <Link
                    href="/formation"
                    className="inline-flex min-h-12 items-center rounded-2xl px-3 text-sm text-muted-strong transition-colors hover:bg-surface-strong hover:text-foreground"
                  >
                    Formations
                  </Link>
                </li>
                <li>
                  <Link
                    href="/dashboard"
                    className="inline-flex min-h-12 items-center rounded-2xl px-3 text-sm text-muted-strong transition-colors hover:bg-surface-strong hover:text-foreground"
                  >
                    Dashboard
                  </Link>
                </li>
                <li>
                  <Link
                    href="/benchmark"
                    className="inline-flex min-h-12 items-center rounded-2xl px-3 text-sm text-muted-strong transition-colors hover:bg-surface-strong hover:text-foreground"
                  >
                    Benchmark
                  </Link>
                </li>
                <li>
                  <Link
                    href="/province"
                    className="inline-flex min-h-12 items-center rounded-2xl px-3 text-sm text-muted-strong transition-colors hover:bg-surface-strong hover:text-foreground"
                  >
                    Provinces
                  </Link>
                </li>
                <li>
                  <Link
                    href="/indh-tv"
                    className="inline-flex min-h-12 items-center rounded-2xl px-3 text-sm text-muted-strong transition-colors hover:bg-surface-strong hover:text-foreground"
                  >
                    INDH TV
                  </Link>
                </li>
                <li>
                  <Link
                    href="/communaute"
                    className="inline-flex min-h-12 items-center rounded-2xl px-3 text-sm text-muted-strong transition-colors hover:bg-surface-strong hover:text-foreground"
                  >
                    Communaute
                  </Link>
                </li>
              </ul>
            </nav>

            <div className="hidden lg:block" />
            <div className="hidden lg:block" />
          </div>

          <div className="relative flex flex-col gap-4 border-t border-border/70 px-5 py-4 text-sm text-muted sm:px-6 lg:flex-row lg:items-center lg:justify-between lg:px-8">
            <p>{copy.designed}</p>
            <div className="flex flex-wrap gap-4">
              <span className="inline-flex min-h-10 items-center">
                {copy.location}
              </span>
              <span className="inline-flex min-h-10 items-center rounded-full px-2 text-muted">
                federation.n.j.e@gmail.com
              </span>
            </div>
          </div>
        </div>

        <div
          aria-hidden="true"
          className="relative mt-3 w-full overflow-hidden px-1 pt-3"
          style={footerWordmarkVars}
        >
          <p
            className="block w-full select-none whitespace-nowrap text-center font-display leading-[0.82] tracking-[-0.08em] text-transparent opacity-85"
            style={footerWordmarkFill}
          >
            INDH Digitale
          </p>
          <p
            className="pointer-events-none absolute inset-x-0 block w-full select-none whitespace-nowrap text-center font-display leading-[0.82] tracking-[-0.08em] text-foreground/6"
            style={footerWordmarkShadow}
          >
            INDH Digitale
          </p>
        </div>
      </div>
    </footer>
  );
}
