import Image from "next/image";
import { CountUp } from "@/components/animation/CountUp/CountUp";
import { Reveal } from "@/components/animation/Reveal/Reveal";
import { SectionLabel } from "@/components/ui/SectionLabel/SectionLabel";
import styles from "./Strengths.module.css";

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
    title: "横断的な提案力",
    description: "複数領域を組み合わせ、事業目的に合うインフラ構成を設計。",
    image: {
      src: "/assets/strengths-card-cross-domain-v2.png",
      alt: "複数のエネルギー設備を俯瞰して計画するイメージ",
    },
  },
  {
    number: "02",
    title: "構想から運用まで対応",
    description: "調査・設計・施工・運用保守まで、各フェーズを一貫支援。",
    image: {
      src: "/assets/strengths-card-one-stop.png",
      alt: "風力発電設備を確認する技術者",
    },
  },
  {
    number: "03",
    title: "地域課題に合わせる設計",
    description: "立地、電力需要、災害対策、周辺環境を踏まえた計画。",
    image: {
      src: "/assets/strengths-card-regional-design-v2.png",
      alt: "地域に配置された蓄電池設備",
    },
  },
  {
    number: "04",
    title: "脱炭素とBCPに貢献",
    description: "再エネ活用、蓄電、水素、電力安定化を組み合わせる提案。",
    image: {
      src: "/assets/strengths-card-decarbon-bcp.png",
      alt: "水素設備と再生可能エネルギー設備",
    },
  },
];

const STATS: Stat[] = [
  { label: "年間施工実績", value: 80, unit: "件" },
  { label: "再エネ関連実績", value: 150, unit: "MW+" },
  { label: "取引先企業数", value: 200, unit: "社" },
  { label: "対応エリア", value: null, staticValue: "全国", unit: "対応可能" },
  { label: "運用・保守実績", value: 10, unit: "年+" },
];

const CARD_STAGGER_MS = 80;
const STAT_STAGGER_MS = 60;

export function Strengths() {
  return (
    <section className={styles.strengths} id="strengths" aria-labelledby="strengths-title">
      <div className={`container ${styles.inner}`}>
        <div className={styles.content}>
          <Reveal direction="left" className={styles.copy}>
            <SectionLabel eyebrow="OUR STRENGTHS" subtitle="NOAHの強み" inverse />
            <h2 id="strengths-title" className={styles.heading}>
              <span className={styles.headingLine}>複数の事業領域をつなぎ、</span>
              <span className={styles.headingLine}>エネルギーインフラを支える。</span>
            </h2>
            <p className={styles.lead}>
              蓄電池・風力・バイオマス・集塵ホッパー・水素モビリティ・AIデータセンターを横断し、
              地域や企業の課題に合わせた導入計画と実行体制を提供します。
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
                      src={card.image.src}
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
