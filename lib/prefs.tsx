"use client";

import { useSyncExternalStore } from "react";

export type Locale = "pt" | "en";
export type Theme = "light" | "dark";

let locale: Locale = "pt";
let theme: Theme = "light";
const listeners = new Set<() => void>();

function emit() {
  listeners.forEach((listener) => listener());
}

function subscribe(listener: () => void) {
  listeners.add(listener);
  return () => listeners.delete(listener);
}

export function setLocale(next: Locale) {
  locale = next;
  try {
    localStorage.setItem("lane-locale", next);
  } catch {
    /* private mode */
  }
  document.documentElement.dataset.locale = next;
  document.documentElement.lang = next === "en" ? "en" : "pt";
  emit();
}

export function setTheme(next: Theme) {
  theme = next;
  try {
    localStorage.setItem("lane-theme", next);
  } catch {
    /* private mode */
  }
  document.documentElement.dataset.theme = next;
  emit();
}

export function useLocale() {
  return useSyncExternalStore(
    subscribe,
    () => locale,
    () => "pt" as Locale,
  );
}

export function useTheme() {
  return useSyncExternalStore(
    subscribe,
    () => theme,
    () => "light" as Theme,
  );
}

export function bootPrefs() {
  const storedLocale = document.documentElement.dataset.locale;
  const storedTheme = document.documentElement.dataset.theme;
  let nextLocale: Locale = "pt";
  let nextTheme: Theme = "light";
  try {
    const l = localStorage.getItem("lane-locale");
    const t = localStorage.getItem("lane-theme");
    if (l === "en" || l === "pt") nextLocale = l;
    else if (storedLocale === "en" || storedLocale === "pt") nextLocale = storedLocale;
    if (t === "dark" || t === "light") nextTheme = t;
    else if (storedTheme === "dark" || storedTheme === "light") nextTheme = storedTheme;
  } catch {
    /* keep defaults */
  }
  locale = nextLocale;
  theme = nextTheme;
  document.documentElement.dataset.locale = nextLocale;
  document.documentElement.dataset.theme = nextTheme;
  document.documentElement.lang = nextLocale === "en" ? "en" : "pt";
  document.documentElement.dataset.ready = "1";
  emit();
}
