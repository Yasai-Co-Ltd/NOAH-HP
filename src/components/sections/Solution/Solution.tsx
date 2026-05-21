import Image from "next/image";
import { Reveal } from "@/components/animation/Reveal/Reveal";
import { SectionLabel } from "@/components/ui/SectionLabel/SectionLabel";
import styles from "./Solution.module.css";

interface SolutionStep {
  number: string;
  title: string;
  description: string;
}

const STEPS: SolutionStep[] = [
  {
    number: "01",
    title: "調査・企画",
    description: "風況・需要・立地を読み、事業化の入口を整理。",
  },
  {
    number: "02",
    title: "設計・調達",
    description: "設備構成、系統、調達を横断して計画。",
  },
  {
    number: "03",
    title: "施工・導入",
    description: "現場・電気・設備をつなぎ、導入を推進。",
  },
  {
    number: "04",
    title: "運用・改善",
    description: "保守、監視、更新まで継続して支える。",
  },
];

const DOMAINS = ["蓄電池", "風力発電", "発電事業", "水素モビリティ", "AIデータセンター"];

function SolutionStep({ step }: { step: SolutionStep }) {
  return (
    <li className={styles.step}>
      <span className={styles.node} aria-hidden="true">
        <span className={styles.nodeNumber}>{step.number}</span>
        <span className={styles.nodeLabel}>STEP</span>
      </span>
      <div className={styles.stepBody}>
        <h3 className={styles.stepTitle}>{step.title}</h3>
        <p className={styles.stepDescription}>{step.description}</p>
      </div>
    </li>
  );
}

export function Solution() {
  return (
    <section id="solution" className={styles.solution} aria-labelledby="solution-title">
      <div className={`container ${styles.inner}`}>
        <Reveal direction="up">
          <div className={styles.heading}>
            <div>
              <SectionLabel eyebrow="INTEGRATED SOLUTION" subtitle="統合ソリューション" />
              <h2 id="solution-title" className={styles.title}>
                構想から運用まで、
                <br />
                一本の導線で支える。
              </h2>
            </div>
            <p className={styles.lead}>
              複数の事業領域を並べるだけではなく、計画・導入・運用までをつなげて設計。
              NOAHの横断支援で、プロジェクトを前に進めます。
            </p>
          </div>
        </Reveal>

        <Reveal direction="up" delay={80}>
          <div className={styles.panel}>
            <div className={styles.supportBadge} aria-hidden="true">
              <Image
                src="/assets/noah_logo-mark.png"
                alt=""
                width={40}
                height={40}
                className={styles.logo}
              />
              <span>一貫した支援体制</span>
            </div>
            <ol className={styles.steps} aria-label="統合ソリューションの流れ">
              {STEPS.map((step) => (
                <SolutionStep key={step.number} step={step} />
              ))}
            </ol>
          </div>
        </Reveal>

        <Reveal direction="up" delay={120}>
          <div className={styles.domains} aria-label="対応領域">
            <span className={styles.domainLabel}>SUPPORTED DOMAIN</span>
            <ul className={styles.domainList}>
              {DOMAINS.map((domain) => (
                <li key={domain} className={styles.domainItem}>
                  {domain}
                </li>
              ))}
            </ul>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
