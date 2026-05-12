"use client";

import type { CSSProperties, ElementType, ReactNode } from "react";
import { useInView } from "@/lib/animation/useInView";
import styles from "./Reveal.module.css";

export type RevealDirection = "up" | "left" | "right" | "none";

interface RevealProps {
  children: ReactNode;
  /** Animation entry direction. Default "up". */
  direction?: RevealDirection;
  /** Delay before animation starts (ms). */
  delay?: number;
  /** Render as a different element. Default "div". */
  as?: ElementType;
  className?: string;
  /** Custom rootMargin for the IntersectionObserver. */
  rootMargin?: string;
}

const directionClass: Record<RevealDirection, string> = {
  up: styles.directionUp,
  left: styles.directionLeft,
  right: styles.directionRight,
  none: styles.directionNone,
};

export function Reveal({
  children,
  direction = "up",
  delay = 0,
  as: Tag = "div",
  className,
  rootMargin,
}: RevealProps) {
  const { ref, inView } = useInView<HTMLDivElement>({ rootMargin });

  const classes = [
    styles.root,
    directionClass[direction],
    inView ? styles.visible : null,
    className,
  ]
    .filter(Boolean)
    .join(" ");

  const style: CSSProperties = delay
    ? ({ "--reveal-delay": `${delay}ms` } as CSSProperties)
    : {};

  return (
    <Tag ref={ref} className={classes} style={style}>
      {children}
    </Tag>
  );
}
