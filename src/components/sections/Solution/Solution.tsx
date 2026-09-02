import Image from "next/image";
import { Reveal } from "@/components/animation/Reveal/Reveal";
import { SectionLabel } from "@/components/ui/SectionLabel/SectionLabel";
import { asset } from "@/lib/asset";
import styles from "./Solution.module.css";

interface SolutionStep {
  number: string;
  title: string;
  description: string;
}

const STEPS: SolutionStep[] = [
  {
    number: "01",
    title: "設計・エンジニアリング",
    description: "発電所のニーズと事業条件に応じ、設備構成を設計。",
  },
  {
    number: "02",
    title: "機器選定・調達",
    description: "国内外のネットワークを活かし、適切な機器を選定・調達。",
  },
  {
    number: "03",
    title: "製造・据付・試運転",
    description: "品質と工程を管理し、施工から試運転まで一貫して対応。",
  },
  {
    number: "04",
    title: "O&M（運用・保守）",
    description: "稼働後の運用・保守まで、継続的な支援体制を構築。",
  },
];

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
                一貫して支える。
              </h2>
            </div>
            <p className={styles.lead}>
              発電所設備の設計、機器選定・調達、製造・据付、試運転、O&Mまでを一貫して支援。
              技術・統合・展開の3つの力で、プロジェクトを前に進めます。
            </p>
          </div>
        </Reveal>

        <Reveal direction="up" delay={80}>
          <div className={styles.panel}>
            <div className={styles.supportBadge} aria-hidden="true">
              <Image
                src={asset("/assets/noah_logo-mark.png")}
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
      </div>
    </section>
  );
}
