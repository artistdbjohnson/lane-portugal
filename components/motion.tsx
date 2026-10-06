"use client";

import { useEffect, useRef, useState, type ReactNode } from "react";

/**
 * In-house rebuild of the motion-primitives InView pattern.
 * Reveals once, with a short rise. No blur on photographic blocks.
 */
export function InView({
  children,
  className = "",
  delay = 0,
}: {
  children: ReactNode;
  className?: string;
  delay?: number;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const [shown, setShown] = useState(false);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      setShown(true);
      return;
    }
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry?.isIntersecting) {
          setShown(true);
          observer.disconnect();
        }
      },
      { threshold: 0.18, rootMargin: "0px 0px -6% 0px" },
    );
    observer.observe(node);
    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      className={className}
      style={{
        opacity: shown ? 1 : 0,
        transform: shown ? "none" : "translateY(14px)",
        transition: `opacity 0.8s cubic-bezier(0.22, 1, 0.36, 1) ${delay}ms, transform 0.8s cubic-bezier(0.22, 1, 0.36, 1) ${delay}ms`,
      }}
    >
      {children}
    </div>
  );
}

/** In-house rebuild of the motion-primitives TextEffect pattern (word stagger). */
export function TextEffect({
  text,
  italicWord,
  className = "",
}: {
  text: string;
  italicWord?: string;
  className?: string;
}) {
  const words = text.split(" ");
  return (
    <span className={className}>
      {words.map((word, index) => {
        const italic =
          italicWord && word.toLocaleLowerCase().includes(italicWord.toLocaleLowerCase());
        return (
          <span
            key={`${word}-${index}`}
            className={`set-word${italic ? " italic font-medium" : ""}`}
            style={{ animationDelay: `${0.72 + index * 0.055}s` }}
          >
            {word}
            {index < words.length - 1 ? "\u00A0" : ""}
          </span>
        );
      })}
    </span>
  );
}

/** Once, when the node is actually in view. Stays false under reduced motion. */
export function useOnceDrawn<T extends Element>() {
  const ref = useRef<T>(null);
  const [drawn, setDrawn] = useState(false);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry?.isIntersecting) {
          setDrawn(true);
          observer.disconnect();
        }
      },
      { threshold: 0.85 },
    );
    observer.observe(node);
    return () => observer.disconnect();
  }, []);

  return { ref, drawn };
}

/** 1px brass inlay. Measure matches the price; the ledger uses a short tick. */
export function BrassRule({ drawn, inlay = false }: { drawn: boolean; inlay?: boolean }) {
  return (
    <span
      className={inlay ? "brass-rule brass-rule-inlay" : "brass-rule brass-rule-measure"}
      data-drawn={drawn ? "true" : "false"}
      aria-hidden="true"
    />
  );
}

export function BrassPrice({ children }: { children: ReactNode }) {
  const { ref, drawn } = useOnceDrawn<HTMLSpanElement>();
  return (
    <span ref={ref} className="relative inline-block">
      {children}
      <BrassRule drawn={drawn} />
    </span>
  );
}
