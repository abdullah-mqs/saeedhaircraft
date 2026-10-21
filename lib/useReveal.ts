"use client";

import { useEffect, useRef } from "react";

interface RevealOptions {
  delay?: number;
  threshold?: number;
  rootMargin?: string;
}

/**
 * Custom hook for scroll reveal animations in React/Next.js.
 * Returns a ref that you can attach to any HTML element.
 */
export function useReveal<T extends HTMLElement = HTMLDivElement>(
  options: RevealOptions = {},
) {
  const { delay = 0, threshold = 0.1, rootMargin = "0px" } = options;
  const ref = useRef<T>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    // Agar SSR hai ya IntersectionObserver support nahi hai, toh direct visible kar do
    if (typeof window === "undefined" || !("IntersectionObserver" in window)) {
      el.classList.add("reveal-visible");
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setTimeout(() => {
              el.classList.add("reveal-visible");
            }, delay);
            observer.unobserve(el);
          }
        });
      },
      { threshold, rootMargin },
    );

    observer.observe(el);

    return () => observer.disconnect();
  }, [delay, threshold, rootMargin]);

  return ref;
}

/**
 * Utility to check if user prefers reduced motion
 */
export function prefersReducedMotion(): boolean {
  if (typeof window === "undefined") return false;
  return window.matchMedia("(prefers-reduced-motion: reduce)").matches;
}
