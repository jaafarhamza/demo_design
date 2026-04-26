"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import { Locale, localizePath, stripLocaleFromPathname } from "../lib/i18n";
import { ThemeToggle } from "./theme-toggle";

type ThemePreference = "light" | "dark";

const copyByLocale: Record<
  Locale,
  {
    openMenu: string;
    closeMenu: string;
    primaryNavigation: string;
    mobileNavigation: string;
    languageLabel: string;
    navigation: Array<{ href: string; label: string }>;
  }
> = {
  fr: {
    openMenu: "Ouvrir la navigation",
    closeMenu: "Fermer la navigation",
    primaryNavigation: "Navigation principale",
    mobileNavigation: "Navigation mobile",
    languageLabel: "Langue",
    navigation: [
      { href: "/", label: "Accueil" },
      { href: "/formation", label: "Formations" },
      { href: "/province", label: "Provinces" },
      { href: "/communaute", label: "Communauté" },
      { href: "/indh-tv", label: "INDH TV" },
      { href: "/dashboard", label: "Dashboard" },
    ],
  },
  ar: {
    openMenu: "فتح القائمة",
    closeMenu: "إغلاق القائمة",
    primaryNavigation: "التنقل الرئيسي",
    mobileNavigation: "تنقل الهاتف",
    languageLabel: "اللغة",
    navigation: [
      { href: "/", label: "الرئيسية" },
      { href: "/formation", label: "التكوينات" },
      { href: "/province", label: "الأقاليم" },
      { href: "/communaute", label: "المجتمع" },
      { href: "/indh-tv", label: "INDH TV" },
      { href: "/dashboard", label: "لوحة القيادة" },
    ],
  },
};

export function SiteHeader({
  initialTheme,
  locale,
}: {
  initialTheme: ThemePreference;
  locale: Locale;
}) {
  const [isOpen, setIsOpen] = useState(false);
  const headerRef = useRef<HTMLElement | null>(null);
  const pathname = usePathname();
  const normalizedPathname = stripLocaleFromPathname(pathname || "/");
  const isDarkShowcaseRoute = normalizedPathname.startsWith("/indh-tv");
  const copy = copyByLocale[locale];

  const getLocalizedHref = (href: string) => localizePath(href, locale);
  const currentPathFr = localizePath(normalizedPathname, "fr");
  const currentPathAr = localizePath(normalizedPathname, "ar");

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
      dir="ltr"
      className={`sticky top-0 z-50 px-3 pt-3 sm:px-4 lg:px-6 ${
        isDarkShowcaseRoute ? "bg-black" : ""
      }`}
    >
      <div className="mx-auto max-w-full">
        <div
          className={`relative overflow-hidden rounded-[1.5rem] lg:rounded-full ${
            isDarkShowcaseRoute
              ? " bg-black/55 shadow-[0_18px_50px_rgba(0,0,0,0.45)] backdrop-blur-2xl"
              : "border border-border/70 bg-surface"
          }`}
        >
          <div
            className={`pointer-events-none absolute inset-x-0 top-0 h-px ${
              isDarkShowcaseRoute
                ? "bg-linear-to-r from-transparent via-white/55 to-transparent"
                : "bg-linear-to-r from-transparent via-brand to-transparent"
            }`}
          />
          <div className="flex min-h-15 items-center justify-between gap-2 px-3 py-2.5 sm:min-h-16 sm:px-4 lg:px-5">
            <Link
              href={getLocalizedHref("/")}
              className="group inline-flex min-h-12 min-w-0 self-stretch items-center rounded-full transition-transform hover:scale-[1.01] focus-visible:outline-none"
            >
              <span className="relative flex h-full w-[4.5rem] shrink-0 items-center justify-center sm:w-[5rem] lg:w-[6rem]">
                <Image
                  src="/INDH logo.png"
                  alt="Logo INDH Digitale"
                  fill
                  sizes="(min-width: 1024px) 100px, (min-width: 640px) 100px, 100px"
                  className="object-cover scale-[1.25]"
                  priority
                />
              </span>
            </Link>

            <nav
              aria-label={copy.primaryNavigation}
              className="hidden lg:flex lg:items-center lg:gap-0.5 xl:gap-1"
            >
              {copy.navigation.map((item) => (
                <Link
                  key={item.href}
                  href={getLocalizedHref(item.href)}
                  className={`inline-flex items-center rounded-full px-3 py-2 text-[0.92rem] font-medium transition-colors xl:min-h-12 xl:px-4 xl:text-sm ${
                    isDarkShowcaseRoute
                      ? "text-white/85 hover:bg-white/10 hover:text-white"
                      : "text-muted hover:bg-surface-strong hover:text-foreground"
                  }`}
                >
                  {item.label}
                </Link>
              ))}
            </nav>

            <div className="hidden items-center gap-2.5 lg:flex xl:gap-3">
              <span className="sr-only">{copy.languageLabel}</span>
              <div
                className={`inline-flex items-center rounded-full border p-1 ${
                  isDarkShowcaseRoute
                    ? "border-white/20 bg-white/10"
                    : "border-border/70 bg-background"
                }`}
              >
                <a
                  href={currentPathFr}
                  className={`rounded-full px-3 py-1 text-xs font-semibold transition-colors ${
                    locale === "fr"
                      ? "bg-brand text-brand-contrast"
                      : isDarkShowcaseRoute
                        ? "text-white/80 hover:bg-white/12 hover:text-white"
                        : "text-muted hover:bg-surface-strong hover:text-foreground"
                  }`}
                >
                  FR
                </a>
                <a
                  href={currentPathAr}
                  className={`rounded-full px-3 py-1 text-xs font-semibold transition-colors ${
                    locale === "ar"
                      ? "bg-brand text-brand-contrast"
                      : isDarkShowcaseRoute
                        ? "text-white/80 hover:bg-white/12 hover:text-white"
                        : "text-muted hover:bg-surface-strong hover:text-foreground"
                  }`}
                >
                  AR
                </a>
              </div>

              {!isDarkShowcaseRoute && (
                <ThemeToggle initialTheme={initialTheme} />
              )}
            </div>

            <div className="flex shrink-0 items-center gap-2 lg:hidden">
              {!isDarkShowcaseRoute && (
                <ThemeToggle initialTheme={initialTheme} />
              )}
              <button
                type="button"
                aria-expanded={isOpen}
                aria-controls="mobile-navigation"
                aria-label={isOpen ? copy.closeMenu : copy.openMenu}
                onClick={() => setIsOpen((open) => !open)}
                className={`inline-flex h-10 w-10 items-center justify-center rounded-full border transition-colors ${
                  isDarkShowcaseRoute
                    ? "border-white/25 bg-white/10 text-white hover:bg-white/16"
                    : "border-border/70 bg-background/85 text-foreground hover:bg-surface-strong"
                }`}
              >
                <span className="sr-only">
                  {isOpen ? copy.closeMenu : copy.openMenu}
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
                ? "pointer-events-auto max-h-[32rem] opacity-100"
                : "pointer-events-none max-h-0 opacity-0"
            }`}
          >
            <div
              className={`border-t px-4 pb-4 pt-3 backdrop-blur-2xl sm:px-5 ${
                isDarkShowcaseRoute
                  ? "border-white/18 bg-black/88"
                  : "border-border/70 bg-surface/95"
              }`}
              id="mobile-navigation"
            >
              <div className="mb-3 inline-flex items-center rounded-full border border-border/70 bg-background p-1">
                <a
                  href={currentPathFr}
                  onClick={() => setIsOpen(false)}
                  className={`rounded-full px-3 py-1 text-xs font-semibold transition-colors ${
                    locale === "fr"
                      ? "bg-brand text-brand-contrast"
                      : "text-muted hover:bg-surface-strong hover:text-foreground"
                  }`}
                >
                  FR
                </a>
                <a
                  href={currentPathAr}
                  onClick={() => setIsOpen(false)}
                  className={`rounded-full px-3 py-1 text-xs font-semibold transition-colors ${
                    locale === "ar"
                      ? "bg-brand text-brand-contrast"
                      : "text-muted hover:bg-surface-strong hover:text-foreground"
                  }`}
                >
                  AR
                </a>
              </div>
              <nav aria-label={copy.mobileNavigation} className="grid gap-1">
                {copy.navigation.map((item) => (
                  <Link
                    key={item.href}
                    href={getLocalizedHref(item.href)}
                    onClick={() => setIsOpen(false)}
                    className={`flex min-h-12 items-center rounded-2xl px-4 text-base font-medium transition-colors ${
                      isDarkShowcaseRoute
                        ? "text-white hover:bg-white/10"
                        : "text-foreground hover:bg-surface-strong"
                    }`}
                  >
                    {item.label}
                  </Link>
                ))}
              </nav>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
