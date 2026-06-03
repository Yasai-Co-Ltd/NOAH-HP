import Image from "next/image";
import { Reveal } from "@/components/animation/Reveal/Reveal";
import { Button } from "@/components/ui/Button/Button";
import { SectionLabel } from "@/components/ui/SectionLabel/SectionLabel";
import { asset } from "@/lib/asset";
import styles from "./AirbornePower.module.css";

export function AirbornePower() {
  return (
    <section
      className={styles.airborne}
      id="airborne-power"
      aria-labelledby="airborne-power-title"
    >
      <div className={`container ${styles.inner}`}>
        <Reveal direction="left" className={styles.copy}>
          <SectionLabel eyebrow="AIRBORNE POWER" subtitle="空中発電所" />
          <h2 id="airborne-power-title" className={styles.title}>
            空を活用する、
            <br />
            次世代の電源。
          </h2>
          <p className={styles.lead}>
            上空の安定した風を活用する、飛行船型の空中風力発電システム。
            離島・災害拠点・既存風力との併設へ。
          </p>
          <Button href="#contact" className={styles.cta}>
            導入相談をする
          </Button>
        </Reveal>

        <Reveal direction="right" className={styles.visualWrap}>
          <figure className={styles.visual}>
            <Image
              src={asset("/assets/airborne-power-noah.png")}
              alt="NOAHロゴが入った飛行船型の空中風力発電システム"
              fill
              sizes="(max-width: 920px) calc(100vw - 40px), 63vw"
              className={styles.image}
            />
            <figcaption className={styles.caption}>
              空に浮かぶ、可搬型の発電所。
            </figcaption>
            <span className={styles.imageLabel} aria-hidden="true">
              NOAH AIRBORNE WIND
            </span>
          </figure>
        </Reveal>
      </div>
    </section>
  );
}
