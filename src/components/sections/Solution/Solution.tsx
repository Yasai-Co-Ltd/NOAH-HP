import type { ReactNode } from "react";
import { Button } from "@/components/ui/Button/Button";
import { SectionLabel } from "@/components/ui/SectionLabel/SectionLabel";
import styles from "./Solution.module.css";

interface ProcessStep {
  title: string;
  description: ReactNode;
  icon: ReactNode;
}

const STEPS: ProcessStep[] = [
  {
    title: "調査・計画",
    description: (
      <>
        現況・立地・環境調査
        <br />
        事業性評価
      </>
    ),
    icon: (
      <svg aria-hidden="true" viewBox="0 0 48 48">
        <circle cx="14" cy="14" r="5" />
        <circle cx="34" cy="14" r="5" />
        <circle cx="14" cy="34" r="5" />
        <circle cx="34" cy="34" r="5" />
        <path d="M18 18 30 30M30 18 18 30" />
      </svg>
    ),
  },
  {
    title: "設計・許認可",
    description: (
      <>
        設計・シミュレーション
        <br />
        各種申請支援
      </>
    ),
    icon: (
      <svg aria-hidden="true" viewBox="0 0 48 48">
        <path d="M15 8h15l6 6v26H15z" />
        <path d="M30 8v8h8M20 23h12M20 30h9" />
        <path d="m30 36 8-8 3 3-8 8-5 1z" />
      </svg>
    ),
  },
  {
    title: "施工・導入",
    description: (
      <>
        土木・電気工事
        <br />
        設備設置
      </>
    ),
    icon: (
      <svg aria-hidden="true" viewBox="0 0 48 48">
        <path d="M10 38h28M15 38V18h8v20M29 38V10h8v28" />
        <path d="M13 18h12M27 10h12M20 13l4-5 4 5" />
      </svg>
    ),
  },
  {
    title: "運用・保守",
    description: (
      <>
        運転監視・メンテナンス
        <br />
        長期安定運用
      </>
    ),
    icon: (
      <svg aria-hidden="true" viewBox="0 0 48 48">
        <path d="M24 9c8 0 15 6 15 15S32 39 24 39 9 32 9 24" />
        <path d="M9 13v11h11M24 16v9l7 4" />
      </svg>
    ),
  },
];

export function Solution() {
  return (
    <section className={styles.solution} aria-labelledby="solution-title">
      <div className={styles.sky} aria-hidden="true" />
      <div className={`container ${styles.grid}`}>
        <div className={styles.copy}>
          <SectionLabel eyebrow="TOTAL SOLUTION" subtitle="トータルソリューション" />
          <h2 id="solution-title" className="section-heading">
            計画から運用まで、
            <br />
            ワンストップで支援。
          </h2>
          <p className={styles.body}>
            調査・計画から設計・施工、運用・保守まで、プロジェクトの全フェーズを一貫して支援し、
            最適なエネルギーソリューションを提供します。
          </p>
          <Button href="#contact" variant="primary">
            詳しく見る
          </Button>
        </div>
        <ol className={styles.processList}>
          {STEPS.map((step) => (
            <li key={step.title} className={styles.step}>
              <span className={styles.iconWrap}>{step.icon}</span>
              <strong className={styles.stepTitle}>{step.title}</strong>
              <small className={styles.stepDescription}>{step.description}</small>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
