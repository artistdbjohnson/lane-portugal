"use client";

import { useEffect } from "react";
import { Aperture } from "./Aperture";
import { Nav } from "./Nav";
import { Footer, Sections } from "./Sections";
import { bootPrefs } from "@/lib/prefs";

export function Site() {
  useEffect(() => {
    bootPrefs();
    const hash = window.location.hash;
    if (!hash) return;
    const target = document.getElementById(hash.slice(1));
    if (!target) return;
    const timer = window.setTimeout(() => target.scrollIntoView({ block: "start" }), 40);
    return () => window.clearTimeout(timer);
  }, []);

  return (
    <>
      <Aperture />
      <Nav />
      <Sections />
      <Footer />
    </>
  );
}
