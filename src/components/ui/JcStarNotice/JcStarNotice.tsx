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
        <p className={styles.status}>現在JC-STAR認証対応中</p>
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
