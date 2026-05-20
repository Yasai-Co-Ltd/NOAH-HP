import Image from "next/image";
import type { ReactNode } from "react";
import { Reveal } from "@/components/animation/Reveal/Reveal";
import { SectionLabel } from "@/components/ui/SectionLabel/SectionLabel";
import styles from "./Solution.module.css";

type ProcessIcon = "survey" | "design" | "procure" | "start" | "operate" | "repower";

interface ProcessStep {
  number: string;
  title: string;
  description: ReactNode;
  icon: ProcessIcon;
}

const STEPS: ProcessStep[] = [
  {
    number: "01",
    title: "調査・企画",
    description: (
      <>
        風況・需要・立地調査
        <br />
        事業性評価
      </>
    ),
    icon: "survey",
  },
  {
    number: "02",
    title: "設計",
    description: (
      <>
        設備計画・系統検討
        <br />
        許認可支援
      </>
    ),
    icon: "design",
  },
  {
    number: "03",
    title: "調達・建設",
    description: (
      <>
        設備調達、土木・電気
        <br />
        工事管理
      </>
    ),
    icon: "procure",
  },
  {
    number: "04",
    title: "運転開始",
    description: (
      <>
        試運転・引き渡し
        <br />
        運用体制構築
      </>
    ),
    icon: "start",
  },
  {
    number: "05",
    title: "運用保守",
    description: (
      <>
        O&M・遠隔監視
        <br />
        定期保守
      </>
    ),
    icon: "operate",
  },
  {
    number: "06",
    title: "リパワリング",
    description: (
      <>
        設備更新・効率改善
        <br />
        収益性向上
      </>
    ),
    icon: "repower",
  },
];

const STEP_POSITIONS = [
  styles.step1,
  styles.step2,
  styles.step3,
  styles.step4,
  styles.step5,
  styles.step6,
];

const ICONS: Record<ProcessIcon, ReactNode> = {
  survey: (
    <svg aria-hidden="true" viewBox="0 0 48 48">
      <circle cx="22" cy="22" r="10" />
      <path d="m30 30 8 8M16 22h12M22 16v12" />
      <path d="M10 38h14M8 10h14" />
    </svg>
  ),
  design: (
    <svg aria-hidden="true" viewBox="0 0 48 48">
      <path d="M13 9h18l6 6v24H13z" />
      <path d="M31 9v8h8M18 24h15M18 31h10" />
      <path d="m30 37 7-7 3 3-7 7-5 1z" />
    </svg>
  ),
  procure: (
    <svg aria-hidden="true" viewBox="0 0 48 48">
      <path d="M9 38h30M14 38V21h8v17M28 38V12h8v26" />
      <path d="M12 21h12M26 12h12M20 16l5-6 5 6" />
    </svg>
  ),
  start: (
    <svg aria-hidden="true" viewBox="0 0 48 48">
      <path d="M15 37h18M24 11v26M24 11l9 8M24 11l-9 8" />
      <path d="M10 29c4-3 8-3 12 0s8 3 16 0" />
    </svg>
  ),
  operate: (
    <svg aria-hidden="true" viewBox="0 0 48 48">
      <path d="M24 10c8 0 14 6 14 14s-6 14-14 14S10 32 10 24" />
      <path d="M10 13v11h11M24 17v8l7 4" />
    </svg>
  ),
  repower: (
    <svg aria-hidden="true" viewBox="0 0 48 48">
      <path d="M15 17a12 12 0 0 1 20 7h5l-8 8-8-8h5a6 6 0 0 0-10-4" />
      <path d="M33 31a12 12 0 0 1-20-7H8l8-8 8 8h-5a6 6 0 0 0 10 4" />
    </svg>
  ),
};

function FlowStep({ step, index }: { step: ProcessStep; index: number }) {
  return (
    <li className={`${styles.flowStep} ${STEP_POSITIONS[index]}`}>
      <span className={styles.nodeIcon}>{ICONS[step.icon]}</span>
      <span className={styles.nodeNumber}>{step.number}</span>
      <strong className={styles.nodeTitle}>{step.title}</strong>
      <small className={styles.nodeDescription}>{step.description}</small>
    </li>
  );
}

function FlowDiagram() {
  return (
    <div className={styles.diagram}>
      <div className={styles.diagramFrame}>
        <div className={styles.flowBaseStage} aria-hidden="true">
          <Image
            src="/assets/solution-flow-base-transparent.png"
            width={2045}
            height={769}
            alt=""
            className={`${styles.flowBaseImage} ${styles.flowBaseDesktop}`}
          />
          <Image
            src="/assets/solution-flow-ring-transparent.png"
            width={695}
            height={695}
            alt=""
            className={`${styles.flowBaseImage} ${styles.flowBaseMobile}`}
          />
        </div>
        <div className={styles.centerMark}>
          <Image
            src="/assets/noah_logo-mark.png"
            width={128}
            height={128}
            alt="NOAH"
            className={styles.logo}
          />
          <span>一貫したサポート体制</span>
        </div>
        <ol className={styles.flowList} aria-label="ワンストップ支援の流れ">
          {STEPS.map((step, index) => (
            <FlowStep key={step.title} step={step} index={index} />
          ))}
        </ol>
      </div>
    </div>
  );
}

export function Solution() {
  return (
    <section id="solution" className={styles.solution} aria-labelledby="solution-title">
      <div className={`container ${styles.stage}`}>
        <Image
          src="/assets/solution-integrated-landscape.jpg"
          alt=""
          fill
          sizes="100vw"
          className={styles.landscapeImage}
          aria-hidden="true"
        />
        <Reveal direction="left" className={styles.copyWrap}>
          <div className={styles.copy}>
            <SectionLabel eyebrow="INTEGRATED SOLUTION" subtitle="統合ソリューション" />
            <h2 id="solution-title" className="section-heading">
              <span className={styles.headingLine}>構想から運用まで、</span>
              <br />
              <span className={styles.headingLine}>ワンストップで支援。</span>
            </h2>
            <p className={styles.body}>
              蓄電池・風力発電・発電・水素モビリティ・AIデータセンターまで、
              調査、設計、建設、運用保守を一体で支えます。
            </p>
          </div>
        </Reveal>
        <FlowDiagram />
      </div>
    </section>
  );
}
