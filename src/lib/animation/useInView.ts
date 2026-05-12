"use client";

import { useEffect, useRef, useState } from "react";
import type { RefObject } from "react";

interface UseInViewOptions {
  /** Distance from the viewport edge (CSS rootMargin syntax). */
  rootMargin?: string;
  /** Intersection ratio that toggles inView=true. */
  threshold?: number | number[];
  /** Once true, never flips back to false. Default true for entrance animations. */
  once?: boolean;
}

interface UseInViewResult<T extends Element> {
  ref: RefObject<T>;
  inView: boolean;
}

const prefersReducedMotion = (): boolean => {
  if (typeof window === "undefined") return false;
  return window.matchMedia("(prefers-reduced-motion: reduce)").matches;
};

export function useInView<T extends Element = HTMLDivElement>(
  options: UseInViewOptions = {},
): UseInViewResult<T> {
  const { rootMargin = "0px 0px -10% 0px", threshold = 0.15, once = true } = options;
  const ref = useRef<T>(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    if (prefersReducedMotion()) {
      setInView(true);
      return;
    }

    const node = ref.current;
    if (!node) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true);
          if (once) observer.disconnect();
        } else if (!once) {
          setInView(false);
        }
      },
      { rootMargin, threshold },
    );

    observer.observe(node);
    return () => observer.disconnect();
  }, [rootMargin, threshold, once]);

  return { ref, inView };
}
