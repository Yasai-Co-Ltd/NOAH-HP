import styles from "./SectionLabel.module.css";

interface SectionLabelProps {
  eyebrow: string;
  subtitle: string;
  inverse?: boolean;
}

export function SectionLabel({ eyebrow, subtitle, inverse = false }: SectionLabelProps) {
  const classes = [styles.label, inverse ? styles.inverse : null]
    .filter(Boolean)
    .join(" ");

  return (
    <p className={classes}>
      {eyebrow} <span className={styles.subtitle}>{subtitle}</span>
    </p>
  );
}
