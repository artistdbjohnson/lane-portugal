"use client";

import { useEffect, useState } from "react";
import { useDict } from "@/lib/dictionary";
import { lane } from "@/lib/lane";
import { setLocale, setTheme, useLocale, useTheme } from "@/lib/prefs";

export function Nav() {
  const copy = useDict();
  const locale = useLocale();
  const theme = useTheme();
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const bar = document.querySelector("[data-nav-bar]");
    if (!bar) return;
    const apply = () => {
      const height = Math.ceil(bar.getBoundingClientRect().height);
      document.documentElement.style.setProperty("--nav-h", `${height}px`);
    };
    apply();
    const observer = new ResizeObserver(apply);
    observer.observe(bar);
    window.addEventListener("resize", apply);
    return () => {
      observer.disconnect();
      window.removeEventListener("resize", apply);
    };
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  function go(href: string) {
    const id = href.replace("#", "");
    setOpen(false);
    window.setTimeout(() => {
      document.getElementById(id)?.scrollIntoView({ behavior: "smooth", block: "start" });
    }, 60);
  }

  return (
    <header className="sticky top-0 z-50">
      <div data-nav-bar className="nav-frost border-b border-[var(--line)] pt-[env(safe-area-inset-top)]">
        <div className="mx-auto flex h-[4.5rem] max-w-[96rem] items-center gap-3 px-4 min-[1280px]:gap-5 min-[1280px]:px-8">
          <a href="#pesquisa" className="shrink-0" onClick={(event) => { event.preventDefault(); go("#pesquisa"); }} aria-label="Lane Portugal">
            <img src="/media/logo.png" alt="Lane Exclusive Real Estate" className="brand-mark h-8 w-auto min-[1280px]:h-9" />
          </a>

          <nav className="hidden min-w-0 flex-1 items-center justify-center gap-x-4 min-[1280px]:flex min-[1440px]:gap-x-6" aria-label="Principal">
            {copy.nav.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={(event) => {
                  event.preventDefault();
                  go(item.href);
                }}
                className="whitespace-nowrap text-[12.5px] font-medium tracking-[0.04em] text-ink transition-colors hover:text-brass"
              >
                {item.label}
              </a>
            ))}
          </nav>

          <div className="ml-auto flex shrink-0 items-center gap-1.5 min-[1280px]:gap-2">
            <div className="flex items-center text-[11px] font-semibold tracking-[0.16em]" role="group" aria-label={copy.localeLabel}>
              <button
                type="button"
                onClick={() => setLocale("pt")}
                className={`px-1.5 py-1 ${locale === "pt" ? "text-ink" : "text-muted"}`}
                aria-pressed={locale === "pt"}
              >
                PT
              </button>
              <span className="text-greige" aria-hidden="true">|</span>
              <button
                type="button"
                onClick={() => setLocale("en")}
                className={`px-1.5 py-1 ${locale === "en" ? "text-ink" : "text-muted"}`}
                aria-pressed={locale === "en"}
              >
                EN
              </button>
            </div>
            <button
              type="button"
              onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
              className="grid h-9 w-9 place-items-center text-ink"
              aria-label={theme === "dark" ? copy.themeToLight : copy.themeToDark}
            >
              {theme === "dark" ? <SunIcon /> : <MoonIcon />}
            </button>
            <a
              href={lane(copy.searchLive, locale)}
              className="nav-cta hidden h-9 items-center rounded-full px-4 text-[12.5px] font-medium tracking-wide transition-opacity hover:opacity-90 min-[1280px]:inline-flex"
            >
              {copy.cta}
            </a>
            <button
              type="button"
              className="grid h-10 w-10 place-items-center min-[1280px]:hidden"
              aria-expanded={open}
              aria-label={open ? copy.menuClose : copy.menuOpen}
              onClick={() => setOpen((value) => !value)}
            >
              {open ? <CloseIcon /> : <MenuIcon />}
            </button>
          </div>
        </div>
      </div>

      {open ? (
        <div className="nav-frost max-h-[calc(100svh-var(--nav-h))] overflow-y-auto rounded-b-2xl border-b border-[var(--line)] shadow-[0_24px_50px_rgba(11,22,32,0.12)] min-[1280px]:hidden">
          <nav className="flex flex-col gap-6 px-6 py-10" aria-label="Principal">
            {copy.nav.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={(event) => {
                  event.preventDefault();
                  go(item.href);
                }}
                className="font-serif text-4xl leading-none tracking-tight"
              >
                {item.label}
              </a>
            ))}
            <a
              href={lane(copy.searchLive, locale)}
              className="nav-cta mt-4 inline-flex w-fit items-center rounded-full px-5 py-3 text-sm font-medium"
            >
              {copy.cta}
            </a>
          </nav>
        </div>
      ) : null}
    </header>
  );
}

function MenuIcon() {
  return (
    <svg width="20" height="14" viewBox="0 0 20 14" fill="none" aria-hidden="true">
      <path d="M0 1h20M0 7h20M0 13h20" stroke="currentColor" strokeWidth="1.25" />
    </svg>
  );
}

function CloseIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true">
      <path d="M1 1l14 14M15 1L1 15" stroke="currentColor" strokeWidth="1.25" />
    </svg>
  );
}

function MoonIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true">
      <path d="M13.5 9.4A5.8 5.8 0 0 1 6.6 2.2 5.8 5.8 0 1 0 13.5 9.4Z" stroke="currentColor" strokeWidth="1.2" />
    </svg>
  );
}

function SunIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true">
      <circle cx="8" cy="8" r="2.6" stroke="currentColor" strokeWidth="1.2" />
      <path d="M8 1.2v1.6M8 13.2v1.6M1.2 8h1.6M13.2 8h1.6M3.2 3.2l1.1 1.1M11.7 11.7l1.1 1.1M12.8 3.2l-1.1 1.1M4.3 11.7l-1.1 1.1" stroke="currentColor" strokeWidth="1.2" />
    </svg>
  );
}
