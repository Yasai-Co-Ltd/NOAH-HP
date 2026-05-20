import type { Service } from "@/lib/content";
import styles from "./BusinessCard.module.css";

interface BusinessCardProps {
  service: Service;
  index: number;
}

export function BusinessCard({ service, index }: BusinessCardProps) {
  const number = String(index + 1).padStart(2, "0");

  return (
    <article className={styles.card}>
      <a className={styles.cardLink} href={service.href} aria-label={`${service.title}の詳細を見る`}>
        <div className={styles.imageWrap}>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img className={styles.image} src={service.image.src} alt={service.image.alt} />
        </div>
        <div className={styles.body}>
          <div className={styles.headingLine}>
            <span className={styles.number}>{number}</span>
            <h3 className={styles.title}>{service.title}</h3>
          </div>
          <p className={styles.description}>{service.description}</p>
        </div>
      </a>
    </article>
  );
}
