import Image from "next/image";
import { asset } from "@/lib/asset";
import styles from "./JcStarNotice.module.css";

interface JcStarNoticeProps {
  title: string;
  description: string;
  points: string[];
  variant?: "light" | "dark";
  className?: string;
}

export function JcStarNotice({
  title,
  description,
  points,
  variant = "light",
  className,
}: JcStarNoticeProps) {
  const classes = [styles.notice, styles[variant], className].filter(Boolean).join(" ");

  return (
    <aside className={classes} aria-label="JC-STAR適合製品の取扱い">
      <div className={styles.logoPanel}>
        <span>JC-STAR</span>
        <Image
          src={asset("/assets/security/jc-star.jpg")}
          alt="JC-STAR"
          width={1230}
          height={562}
          sizes="(max-width: 760px) 180px, 220px"
          className={styles.logo}
        />
      </div>
      <div className={styles.body}>
        <p className={styles.eyebrow}>SECURITY REQUIREMENT</p>
        <h3>{title}</h3>
        <p>{description}</p>
        <ul>
          {points.map((point) => (
            <li key={point}>{point}</li>
          ))}
        </ul>
      </div>
    </aside>
  );
}
