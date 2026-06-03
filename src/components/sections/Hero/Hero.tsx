import type { CSSProperties } from "react";
import { Button } from "@/components/ui/Button/Button";
import { asset } from "@/lib/asset";
import styles from "./Hero.module.css";

const heroMediaStyle = {
  "--bg-image": `url(${asset("/assets/hero-wind-noah-nacelle-natural.jpg")})`,
} as CSSProperties;

export function Hero() {
  return (
    <section className={styles.hero} aria-labelledby="hero-title">
      <div className={styles.media} style={heroMediaStyle} aria-hidden="true" />
      <div className={styles.overlay} aria-hidden="true" />
      <div className={`container ${styles.inner}`}>
        <p className={`eyebrow ${styles.fadeIn} ${styles.delay1}`}>
          Renewable Energy Infrastructure
        </p>
        <h1 id="hero-title" className={`hero-heading ${styles.fadeIn} ${styles.delay2}`}>
          風を、未来の
          <br />
          インフラに。
        </h1>
        <p className={`${styles.copy} ${styles.fadeIn} ${styles.delay3}`}>
          再生可能エネルギーで、地域と企業の
          <br />
          持続可能な未来をつくる。
        </p>
        <div className={`${styles.fadeIn} ${styles.delay4}`}>
          <Button href="/business" variant="primary">
            事業内容を見る
          </Button>
        </div>
      </div>
    </section>
  );
}
