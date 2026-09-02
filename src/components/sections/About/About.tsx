import { Reveal } from "@/components/animation/Reveal/Reveal";
import { Button } from "@/components/ui/Button/Button";
import { SectionLabel } from "@/components/ui/SectionLabel/SectionLabel";
import { asset } from "@/lib/asset";
import styles from "./About.module.css";

export function About() {
  return (
    <section className={styles.about} id="about" aria-labelledby="about-title">
      <div className={`container ${styles.grid}`}>
        <Reveal direction="left">
          <div className={styles.copy}>
            <SectionLabel eyebrow="ABOUT US" subtitle="私たちについて" />
            <h2 id="about-title" className="section-heading">
              再生可能エネルギーと
              <br />
              次世代インフラを融合する。
            </h2>
            <p className={styles.body}>
              諾亜建設は、発電所設備の設計段階から、機器選定、調達、施工、試運転まで一貫して対応します。
              発電、蓄電池、風力、水素・新エネルギー自動車、AIデータセンターの5つの事業領域を通じ、
              脱炭素社会の実現に取り組んでいます。
            </p>
            <Button href="/about" variant="outline">
              私たちについて
            </Button>
          </div>
        </Reveal>
        <Reveal direction="up" delay={150}>
          <div className={styles.visual} aria-hidden="true">
            {/* eslint-disable @next/next/no-img-element */}
            <img className={styles.main} src={asset("/assets/hero-wind-hq.jpg")} alt="" />
            <div className={styles.stack}>
              <img src={asset("/assets/business-hydrogen-mobility-branded.jpg")} alt="" />
              <img src={asset("/assets/business-ai-data-center.jpg")} alt="" />
              <img src={asset("/assets/battery-hq.jpg")} alt="" />
            </div>
            {/* eslint-enable @next/next/no-img-element */}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
