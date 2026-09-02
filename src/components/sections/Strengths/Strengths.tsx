import Image from "next/image";
import type { CSSProperties } from "react";
import { CountUp } from "@/components/animation/CountUp/CountUp";
import { Reveal } from "@/components/animation/Reveal/Reveal";
import { SectionLabel } from "@/components/ui/SectionLabel/SectionLabel";
import { asset } from "@/lib/asset";
import styles from "./Strengths.module.css";

const strengthsStyle = {
  "--bg-image": `url(${asset("/assets/strengths-bg-integrated-energy.png")})`,
} as CSSProperties;

interface StrengthCard {
  number: string;
  title: string;
  description: string;
  image: {
    src: string;
    alt: string;
  };
}

interface Stat {
  label: string;
  /** Numeric value to count up. Use null for non-numeric (e.g. "全国"). */
  value: number | null;
  /** Display text when value is null. */
  staticValue?: string;
  unit: string;
}

const STRENGTH_CARDS: StrengthCard[] = [
  {
    number: "01",
    title: "技術",
    description: "発電所のニーズに応じ、設計・調達・製造・据付・試運転まで一貫して対応。",
    image: {
      src: "/assets/strengths-card-cross-domain-v2.png",
      alt: "発電設備の設計とエンジニアリング",
    },
  },
  {
    number: "02",
    title: "統合",
    description: "発電所設備に加え、バイオマス燃料・木質ペレット・燃料改造まで幅広く対応。",
    image: {
      src: "/assets/strengths-card-one-stop.png",
      alt: "複数のエネルギー設備を統合するプロジェクト",
    },
  },
  {
    number: "03",
    title: "展開",
    description: "新エネルギー開発、風力案件の開発・導入、AIデータセンター建設を積極的に推進。",
    image: {
      src: "/assets/strengths-card-regional-design-v2.png",
      alt: "全国で展開する新エネルギーインフラ",
    },
  },
  {
    number: "04",
    title: "パートナーシップ",
    description: "電力会社・大手企業との協業体制を構築し、案件開発から運用まで連携。",
    image: {
      src: "/assets/strengths-card-decarbon-bcp.png",
      alt: "企業間の連携で進めるエネルギープロジェクト",
    },
  },
];

const STATS: Stat[] = [
  { label: "システム用蓄電池", value: 26, unit: "案件" },
  { label: "蓄電池開発規模", value: null, staticValue: "約1.2", unit: "GW" },
  { label: "AIデータセンター", value: 10, unit: "案件" },
  { label: "AIデータセンター想定規模", value: null, staticValue: "1.2", unit: "GW" },
  { label: "木質ペレット製造拠点", value: 8, unit: "工場（中国）" },
];

const CARD_STAGGER_MS = 80;
const STAT_STAGGER_MS = 60;

export function Strengths() {
  return (
    <section
      className={styles.strengths}
      id="strengths"
      aria-labelledby="strengths-title"
      style={strengthsStyle}
    >
      <div className={`container ${styles.inner}`}>
        <div className={styles.content}>
          <Reveal direction="left" className={styles.copy}>
            <SectionLabel eyebrow="OUR STRENGTHS" subtitle="NOAHの強み" inverse />
            <h2 id="strengths-title" className={styles.heading}>
              <span className={styles.headingLine}>日本のエネルギーインフラ市場へ、</span>
              <span className={styles.headingLine}>新エネルギーソリューションを。</span>
            </h2>
            <p className={styles.lead}>
              技術（Engineering）、統合（Integration）、展開（Development）を軸に、
              設計からO&Mまで一貫した体制で新エネルギー事業を推進します。
            </p>
          </Reveal>

          <div className={styles.cardGrid}>
            {STRENGTH_CARDS.map((card, index) => (
              <Reveal
                key={card.number}
                direction="up"
                delay={index * CARD_STAGGER_MS}
                className={styles.cardReveal}
              >
                <article className={styles.card}>
                  <div className={styles.cardImageWrap}>
                    <Image
                      src={asset(card.image.src)}
                      width={1024}
                      height={1536}
                      alt={card.image.alt}
                      className={styles.cardImage}
                    />
                  </div>
                  <div className={styles.cardBody}>
                    <span className={styles.cardNumber}>{card.number}</span>
                    <h3 className={styles.cardTitle}>{card.title}</h3>
                    <p className={styles.cardDescription}>{card.description}</p>
                  </div>
                </article>
              </Reveal>
            ))}
          </div>
        </div>

        <dl className={styles.stats}>
          {STATS.map((stat, index) => (
            <Reveal key={stat.label} direction="up" delay={index * STAT_STAGGER_MS}>
              <div className={styles.stat}>
                <dt className={styles.statLabel}>{stat.label}</dt>
                <dd className={styles.statValue}>
                  <strong className={styles.value}>
                    {stat.value !== null ? (
                      <CountUp end={stat.value} duration={1400} />
                    ) : (
                      stat.staticValue
                    )}
                  </strong>
                  <span className={styles.unit}>{stat.unit}</span>
                </dd>
              </div>
            </Reveal>
          ))}
        </dl>
      </div>
    </section>
  );
}
