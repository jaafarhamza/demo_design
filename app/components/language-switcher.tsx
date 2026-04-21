"use client";

import { usePathname, useRouter } from "next/navigation";
import { getDirection, locales, type Locale, uiDictionary } from "../i18n";

function replaceLocaleInPath(pathname: string, nextLocale: Locale) {
  const segments = pathname.split("/").filter(Boolean);

  if (segments.length > 0 && locales.includes(segments[0] as Locale)) {
    segments[0] = nextLocale;
    return `/${segments.join("/")}`;
  }

  return pathname === "/" ? `/${nextLocale}` : `/${nextLocale}${pathname}`;
}

function applyDocumentLocale(locale: Locale) {
  document.documentElement.lang = locale;
  document.documentElement.dir = getDirection(locale);
}

export function LanguageSwitcher({ locale }: { locale: Locale }) {
  const pathname = usePathname();
  const router = useRouter();
  const labels = uiDictionary[locale].lang;

  const switchLocale = async (nextLocale: Locale) => {
    if (nextLocale === locale) {
      return;
    }

    applyDocumentLocale(nextLocale);

    await fetch("/api/locale", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ locale: nextLocale }),
    });

    router.push(replaceLocaleInPath(pathname, nextLocale));
    router.refresh();
  };

  return (
    <div
      className="inline-flex items-center gap-1 rounded-full border border-border/70 bg-background/82 p-1 shadow-card backdrop-blur-xl"
      role="group"
      aria-label={labels.label}
    >
      {locales.map((entry) => {
        const active = entry === locale;

        return (
          <button
            key={entry}
            type="button"
            onClick={() => switchLocale(entry)}
            className={`inline-flex min-h-9 items-center rounded-full px-3 text-xs font-semibold tracking-[0.18em] transition-colors uppercase ${
              active
                ? "bg-brand text-brand-contrast"
                : "text-muted-strong hover:bg-surface-strong hover:text-foreground"
            }`}
            aria-pressed={active}
          >
            {entry === "fr" ? labels.french : labels.arabic}
          </button>
        );
      })}
    </div>
  );
}
