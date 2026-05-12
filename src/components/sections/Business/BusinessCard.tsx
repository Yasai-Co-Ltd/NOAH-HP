import { ServiceIcon } from "@/components/ui/ServiceIcon/ServiceIcon";
import { TextLink } from "@/components/ui/TextLink/TextLink";
import type { Service } from "@/lib/content";
import styles from "./BusinessCard.module.css";

interface BusinessCardProps {
  service: Service;
}

function renderIconLabel(label: string) {
  if (label === "H₂") {
    return (
      <>
        H<sub>2</sub>
      </>
    );
  }
  return label;
}

export function BusinessCard({ service }: BusinessCardProps) {
  return (
    <article className={styles.card}>
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img className={styles.image} src={service.image.src} alt={service.image.alt} />
      <div className={styles.body}>
        <ServiceIcon tone={service.icon.tone}>{renderIconLabel(service.icon.label)}</ServiceIcon>
        <h3 className={styles.title}>{service.title}</h3>
        <p className={styles.description}>{service.description}</p>
        <TextLink href={service.href}>詳しく見る</TextLink>
      </div>
    </article>
  );
}
