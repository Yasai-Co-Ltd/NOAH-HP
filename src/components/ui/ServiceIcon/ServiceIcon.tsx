import type { ReactNode } from "react";
import styles from "./ServiceIcon.module.css";

export type ServiceIconTone = "blue" | "green" | "gold" | "teal" | "navy";

interface ServiceIconProps {
  tone: ServiceIconTone;
  children: ReactNode;
}

const toneClass: Record<ServiceIconTone, string> = {
  blue: styles.blue,
  green: styles.green,
  gold: styles.gold,
  teal: styles.teal,
  navy: styles.navy,
};

export function ServiceIcon({ tone, children }: ServiceIconProps) {
  return <span className={`${styles.icon} ${toneClass[tone]}`}>{children}</span>;
}
