import { Reveal } from "@/components/animation/Reveal/Reveal";
import { Button } from "@/components/ui/Button/Button";
import { SectionLabel } from "@/components/ui/SectionLabel/SectionLabel";
import styles from "./About.module.css";

export function About() {
  return (
    <section className={styles.about} id="about" aria-labelledby="about-title">
      <div className={`container ${styles.grid}`}>
        <Reveal direction="left">
          <div className={styles.copy}>
            <SectionLabel eyebrow="ABOUT US" subtitle="私たちについて" />
            <h2 id="about-title" className="section-heading">
              エネルギーの未来を見据え、
              <br />
              社会に価値あるインフラを。
            </h2>
            <p className={styles.body}>
              諾亜建設は、再生可能エネルギーの可能性を信じ、
              蓄電池・風力発電・発電・水素モビリティ・AIデータセンター事業を通じて、
              脱炭素社会の実現に貢献します。
            </p>
            <Button href="/about" variant="outline">
              私たちについて
            </Button>
          </div>
        </Reveal>
        <Reveal direction="up" delay={150}>
          <div className={styles.visual} aria-hidden="true">
            {/* eslint-disable @next/next/no-img-element */}
            <img className={styles.main} src="/assets/hero-wind-hq.jpg" alt="" />
            <div className={styles.stack}>
              <img src="/assets/business-hydrogen-mobility-branded.jpg" alt="" />
              <img src="/assets/business-ai-data-center.jpg" alt="" />
              <img src="/assets/battery-hq.jpg" alt="" />
            </div>
            {/* eslint-enable @next/next/no-img-element */}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
