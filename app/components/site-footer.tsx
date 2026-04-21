import type { CSSProperties } from "react";
import Link from "next/link";
import { type Locale, localizeHref, uiDictionary } from "../i18n";

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

export function SiteFooter({ locale }: { locale: Locale }) {
  const copy = uiDictionary[locale].footer;

  return (
    <footer className="px-3 pb-0 pt-10 sm:px-4 sm:pt-12 lg:px-6 lg:pt-16">
      <div className="mx-auto max-w-[1440px]">
        <div className="relative overflow-hidden rounded-[2rem] border border-border/70 bg-surface/78 shadow-card backdrop-blur-2xl">
          <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-brand/30 to-transparent" />
          <div className="pointer-events-none absolute -right-24 bottom-0 h-56 w-56 rounded-full bg-accent/10 blur-3xl" />
          <div className="pointer-events-none absolute -left-20 top-12 h-48 w-48 rounded-full bg-brand/12 blur-3xl" />

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
                  href={localizeHref(locale, "/contact")}
                  className="inline-flex min-h-12 items-center justify-center rounded-full bg-brand px-5 text-sm font-semibold text-brand-contrast shadow-soft transition-colors hover:bg-brand-700 sm:justify-start"
                >
                  {uiDictionary[locale].nav.contactUs}
                </Link>
                <Link
                  href={localizeHref(locale, "/community")}
                  className="inline-flex min-h-12 items-center justify-center rounded-full border border-border-strong/55 bg-background/80 px-5 text-sm font-semibold text-foreground transition-colors hover:bg-surface-strong sm:justify-start"
                >
                  {copy.helpCenter}
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
                {copy.primaryLinks.map((item) => (
                  <li key={`${item.href}-${item.label}`}>
                    <Link
                      href={localizeHref(locale, item.href)}
                      className="inline-flex min-h-12 items-center rounded-2xl px-3 text-sm text-muted-strong transition-colors hover:bg-surface-strong hover:text-foreground"
                    >
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>

            <nav aria-labelledby="footer-nav-platform" className="relative">
              <h2
                id="footer-nav-platform"
                className="text-sm font-semibold tracking-[0.18em] text-muted uppercase"
              >
                {copy.platform}
              </h2>
              <ul className="mt-4 grid gap-2">
                {copy.platformLinks.map((item) => (
                  <li key={`${item.href}-${item.label}`}>
                    <Link
                      href={localizeHref(locale, item.href)}
                      className="inline-flex min-h-12 items-center rounded-2xl px-3 text-sm text-muted-strong transition-colors hover:bg-surface-strong hover:text-foreground"
                    >
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>

            <nav aria-labelledby="footer-nav-legal" className="relative">
              <h2
                id="footer-nav-legal"
                className="text-sm font-semibold tracking-[0.18em] text-muted uppercase"
              >
                {copy.trust}
              </h2>
              <ul className="mt-4 grid gap-2">
                {copy.legalLinks.map((item) => (
                  <li key={`${item.href}-${item.label}`}>
                    <Link
                      href={localizeHref(locale, item.href)}
                      className="inline-flex min-h-12 items-center rounded-2xl px-3 text-sm text-muted-strong transition-colors hover:bg-surface-strong hover:text-foreground"
                    >
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>
          </div>

          <div className="relative flex flex-col gap-4 border-t border-border/70 px-5 py-4 text-sm text-muted sm:px-6 lg:flex-row lg:items-center lg:justify-between lg:px-8">
            <p>
              {copy.designed}
            </p>
            <div className="flex flex-wrap gap-4">
              <span className="inline-flex min-h-10 items-center">
                {copy.location}
              </span>
              <Link
                href={localizeHref(locale, "/contact")}
                className="inline-flex min-h-10 items-center rounded-full px-2 text-muted transition-colors hover:text-foreground"
              >
                federation.n.j.e@gmail.com
              </Link>
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
