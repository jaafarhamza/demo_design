"use client";

import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { type Locale, localizeHref, uiDictionary } from "../i18n";
import { LanguageSwitcher } from "./language-switcher";
import { ThemeToggle } from "./theme-toggle";

type ThemePreference = "light" | "dark";

export function SiteHeader({
  initialTheme,
  locale,
}: {
  initialTheme: ThemePreference;
  locale: Locale;
}) {
  const [isOpen, setIsOpen] = useState(false);
  const headerRef = useRef<HTMLElement | null>(null);
  const copy = uiDictionary[locale];
  const navigation = [
    { href: "/", label: copy.nav.home },
    { href: "/trainings", label: copy.nav.trainings },
    { href: "/experts", label: copy.nav.experts },
    { href: "/community", label: copy.nav.community },
  ];

  useEffect(() => {
    if (!isOpen) {
      return;
    }

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setIsOpen(false);
      }
    };

    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", onKeyDown);

    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKeyDown);
    };
  }, [isOpen]);

  useEffect(() => {
    if (!isOpen) {
      return;
    }

    const handlePointerDown = (event: MouseEvent | TouchEvent) => {
      const target = event.target;

      if (!(target instanceof Node)) {
        return;
      }

      if (!headerRef.current?.contains(target)) {
        setIsOpen(false);
      }
    };

    document.addEventListener("mousedown", handlePointerDown);
    document.addEventListener("touchstart", handlePointerDown);

    return () => {
      document.removeEventListener("mousedown", handlePointerDown);
      document.removeEventListener("touchstart", handlePointerDown);
    };
  }, [isOpen]);

  return (
    <header
      ref={headerRef}
      className="sticky top-0 z-50 px-3 pt-3 sm:px-4 lg:px-6"
    >
      <div className="mx-auto max-w-[1440px]">
        <div className="relative overflow-hidden rounded-[1.5rem] border border-border/70 bg-surface/80 shadow-card backdrop-blur-2xl lg:rounded-full">
          <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-brand/30 to-transparent" />
          <div className="flex min-h-15 items-center justify-between gap-2 px-3 py-2.5 sm:min-h-16 sm:px-4 lg:px-5">
            <Link
              href={localizeHref(locale, "/")}
              className="group inline-flex min-h-12 min-w-0 items-center gap-3 rounded-full transition-transform hover:scale-[1.01] focus-visible:outline-none"
            >
              <span className="relative flex h-9 w-9 shrink-0 items-center justify-center overflow-hidden rounded-[0.95rem] bg-gradient-to-br from-brand via-brand-600 to-accent text-brand-contrast shadow-soft sm:h-10 sm:w-10 lg:h-11 lg:w-11 lg:rounded-[1.1rem]">
                <span className="absolute inset-0 bg-[radial-gradient(circle_at_25%_20%,rgba(255,255,255,0.32),transparent_48%)]" />
                <span className="relative font-display text-[0.7rem] tracking-[0.08em] sm:text-[0.78rem] lg:text-sm">
                  INDH
                </span>
              </span>
              <span className="min-w-0">
                <span className="block truncate font-display text-[0.95rem] leading-none text-foreground sm:text-lg lg:text-xl">
                  INDH Digitale
                </span>
                <span className="mt-1 hidden text-sm leading-none text-muted xl:block">
                  {copy.brandTagline}
                </span>
              </span>
            </Link>

            <nav
              aria-label="Navigation principale"
              className="hidden lg:flex lg:items-center lg:gap-0.5 xl:gap-1"
            >
              {navigation.map((item) => (
                <Link
                  key={item.href}
                  href={localizeHref(locale, item.href)}
                  className="inline-flex items-center rounded-full px-3 py-2 text-[0.92rem] font-medium text-muted transition-colors hover:bg-surface-strong hover:text-foreground xl:min-h-12 xl:px-4 xl:text-sm"
                >
                  {item.label}
                </Link>
              ))}
            </nav>

            <div className="hidden items-center gap-2.5 lg:flex xl:gap-3">
              <LanguageSwitcher locale={locale} />
              <ThemeToggle initialTheme={initialTheme} />
              <Link
                href={localizeHref(locale, "/contact")}
                className="inline-flex items-center rounded-full border border-border-strong/55 bg-background/80 px-4 py-2 text-[0.92rem] font-semibold text-foreground transition-colors hover:bg-surface-strong xl:min-h-12 xl:px-5 xl:text-sm"
              >
                {copy.nav.contact}
              </Link>
            </div>

            <div className="flex shrink-0 items-center gap-2 lg:hidden">
              <LanguageSwitcher locale={locale} />
              <ThemeToggle initialTheme={initialTheme} />
              <button
                type="button"
                aria-expanded={isOpen}
                aria-controls="mobile-navigation"
                aria-label={isOpen ? "Fermer la navigation" : "Ouvrir la navigation"}
                onClick={() => setIsOpen((open) => !open)}
                className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-border/70 bg-background/85 text-foreground transition-colors hover:bg-surface-strong"
              >
                <span className="sr-only">
                  {isOpen ? "Fermer la navigation" : "Ouvrir la navigation"}
                </span>
                <span className="relative h-4 w-5">
                  <span
                    className={`absolute left-0 top-0 h-0.5 w-5 rounded-full bg-current transition-transform duration-200 ${
                      isOpen ? "translate-y-[7px] rotate-45" : ""
                    }`}
                  />
                  <span
                    className={`absolute left-0 top-[7px] h-0.5 w-5 rounded-full bg-current transition-opacity duration-200 ${
                      isOpen ? "opacity-0" : "opacity-100"
                    }`}
                  />
                  <span
                    className={`absolute left-0 top-[14px] h-0.5 w-5 rounded-full bg-current transition-transform duration-200 ${
                      isOpen ? "-translate-y-[7px] -rotate-45" : ""
                    }`}
                  />
                </span>
              </button>
            </div>
          </div>

          <div
            className={`overflow-hidden transition-[max-height,opacity] duration-300 ease-out lg:hidden ${
              isOpen
                ? "pointer-events-auto max-h-[28rem] opacity-100"
                : "pointer-events-none max-h-0 opacity-0"
            }`}
          >
            <div
              className="border-t border-border/70 bg-surface/95 px-4 pb-4 pt-3 backdrop-blur-2xl sm:px-5"
              id="mobile-navigation"
            >
              <nav aria-label="Navigation mobile" className="grid gap-1">
                {navigation.map((item) => (
                  <Link
                    key={item.href}
                    href={localizeHref(locale, item.href)}
                    onClick={() => setIsOpen(false)}
                    className="flex min-h-12 items-center rounded-2xl px-4 text-base font-medium text-foreground transition-colors hover:bg-surface-strong"
                  >
                    {item.label}
                  </Link>
                ))}
              </nav>

              <div className="mt-4 grid gap-3">
                <Link
                  href={localizeHref(locale, "/contact")}
                  onClick={() => setIsOpen(false)}
                  className="inline-flex min-h-12 items-center justify-center rounded-full border border-border-strong/55 bg-background/85 px-5 text-sm font-semibold text-foreground transition-colors hover:bg-surface-strong"
                >
                  {copy.nav.contactUs}
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
