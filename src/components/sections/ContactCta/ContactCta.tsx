import { Button } from "@/components/ui/Button/Button";
import styles from "./ContactCta.module.css";

export function ContactCta() {
  return (
    <section className={styles.section} id="contact" aria-labelledby="contact-title">
      <div className={`container ${styles.grid}`}>
        <div className={styles.iconWrap} aria-hidden="true">
          <svg viewBox="0 0 56 56">
            <path d="M10 16h36v26H10z" />
            <path d="m10 18 18 14 18-14" />
          </svg>
        </div>
        <div>
          <p className={styles.eyebrow}>再生可能エネルギーに関するご相談・お問い合わせ</p>
          <h2 id="contact-title" className={styles.heading}>
            お気軽にご相談ください
          </h2>
          <span className={styles.description}>
            プロジェクトのご相談やお見積りなど、専門スタッフが丁寧に対応いたします。
          </span>
        </div>
        <Button href="mailto:info@example.com" variant="white">
          お問い合わせフォームへ
        </Button>
      </div>
    </section>
  );
}
