"use client";

import { useEffect, useSyncExternalStore } from "react";

type ThemePreference = "light" | "dark";

const STORAGE_KEY = "indh-theme";
const THEME_EVENT = "indh-theme-change";

function SunIcon({ className }: { className?: string }) {
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 24 24"
      className={className}
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <circle cx="12" cy="12" r="4.25" />
      <path d="M12 2.75v2.5M12 18.75v2.5M21.25 12h-2.5M5.25 12h-2.5M18.54 5.46l-1.77 1.77M7.23 16.77l-1.77 1.77M18.54 18.54l-1.77-1.77M7.23 7.23 5.46 5.46" />
    </svg>
  );
}

function MoonIcon({ className }: { className?: string }) {
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 24 24"
      className={className}
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M20.25 14.2A8.75 8.75 0 1 1 9.8 3.75a7.2 7.2 0 1 0 10.45 10.45Z" />
    </svg>
  );
}

function getClientTheme(fallback: ThemePreference): ThemePreference {
  if (typeof window === "undefined") {
    return fallback;
  }

  const domTheme = document.documentElement.dataset.theme;

  if (domTheme === "dark" || domTheme === "light") {
    return domTheme;
  }

  const stored = window.localStorage.getItem(STORAGE_KEY);

  return stored === "dark" ? "dark" : fallback;
}

function subscribe(onStoreChange: () => void) {
  if (typeof window === "undefined") {
    return () => {};
  }

  const handleStorage = (event: StorageEvent) => {
    if (event.key === STORAGE_KEY) {
      onStoreChange();
    }
  };
  const handleThemeChange = () => onStoreChange();

  window.addEventListener("storage", handleStorage);
  window.addEventListener(THEME_EVENT, handleThemeChange);

  return () => {
    window.removeEventListener("storage", handleStorage);
    window.removeEventListener(THEME_EVENT, handleThemeChange);
  };
}

function applyTheme(preference: ThemePreference) {
  const root = document.documentElement;

  root.dataset.theme = preference;
  root.classList.toggle("dark", preference === "dark");
  root.style.colorScheme = preference;
}

export function ThemeToggle({
  initialTheme,
}: {
  initialTheme: ThemePreference;
}) {
  const theme = useSyncExternalStore(
    subscribe,
    () => getClientTheme(initialTheme),
    () => initialTheme
  );

  useEffect(() => {
    applyTheme(theme);
  }, [theme]);

  const nextTheme: ThemePreference = theme === "dark" ? "light" : "dark";
  const Icon = theme === "dark" ? SunIcon : MoonIcon;

  const updateTheme = () => {
    localStorage.setItem(STORAGE_KEY, nextTheme);
    document.cookie = `${STORAGE_KEY}=${nextTheme}; path=/; max-age=31536000; samesite=lax`;
    applyTheme(nextTheme);
    window.dispatchEvent(new Event(THEME_EVENT));
  };

  return (
    <button
      type="button"
      onClick={updateTheme}
      className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-border/70 bg-surface/90 text-muted shadow-card transition-colors hover:bg-surface-strong hover:text-foreground sm:h-11 sm:w-11"
      aria-label={`Switch to ${nextTheme} mode`}
      title={`Switch to ${nextTheme} mode`}
    >
      <Icon className="h-4.5 w-4.5 sm:h-5 sm:w-5" />
      <span className="sr-only">
        {theme === "dark" ? "Dark mode active" : "Light mode active"}
      </span>
    </button>
  );
}
