"use client";

import { useEffect, useState } from "react";
import { useInView } from "@/lib/animation/useInView";

interface CountUpProps {
  /** Final number to count up to. */
  end: number;
  /** Duration of the animation in ms. */
  duration?: number;
  /** Locale for thousands formatting. */
  locale?: string;
  className?: string;
}

const easeOutCubic = (t: number): number => 1 - Math.pow(1 - t, 3);

export function CountUp({
  end,
  duration = 1200,
  locale = "ja-JP",
  className,
}: CountUpProps) {
  const { ref, inView } = useInView<HTMLSpanElement>({ threshold: 0.4 });
  const [value, setValue] = useState(0);

  useEffect(() => {
    if (!inView) return;

    const prefersReduced =
      typeof window !== "undefined" &&
      window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (prefersReduced) {
      setValue(end);
      return;
    }

    let raf = 0;
    const start = performance.now();

    const step = (now: number) => {
      const progress = Math.min((now - start) / duration, 1);
      const next = Math.round(easeOutCubic(progress) * end);
      setValue(next);
      if (progress < 1) raf = requestAnimationFrame(step);
    };

    raf = requestAnimationFrame(step);
    return () => cancelAnimationFrame(raf);
  }, [inView, end, duration]);

  return (
    <span ref={ref} className={className}>
      {value.toLocaleString(locale)}
    </span>
  );
}
