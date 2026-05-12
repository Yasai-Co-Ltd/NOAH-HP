import { CountUp } from "@/components/animation/CountUp/CountUp";
import { Reveal } from "@/components/animation/Reveal/Reveal";
import { SectionLabel } from "@/components/ui/SectionLabel/SectionLabel";
import styles from "./Strengths.module.css";

interface Stat {
  label: string;
  /** Numeric value to count up. Use null for non-numeric (e.g. "全国"). */
  value: number | null;
  /** Display text when value is null. */
  staticValue?: string;
  unit: string;
}

const STATS: Stat[] = [
  { label: "年間施工実績", value: 80, unit: "件" },
  { label: "再エネ関連実績", value: 150, unit: "MW+" },
  { label: "取引先企業数", value: 200, unit: "社" },
  { label: "全国対応エリア", value: null, staticValue: "全国", unit: "対応可能" },
  { label: "運用・保守実績", value: 10, unit: "年+" },
];

const STAGGER_MS = 80;

export function Strengths() {
  return (
    <section className={styles.strengths} id="sustainability" aria-labelledby="strengths-title">
      <div className={`container ${styles.grid}`}>
        <Reveal direction="left">
          <div>
            <SectionLabel eyebrow="OUR STRENGTHS" subtitle="私たちの強み" inverse />
            <h2 id="strengths-title" className={styles.heading}>
              確かな技術と実績で、
              <br />
              信頼されるパートナーに。
            </h2>
          </div>
        </Reveal>
        <dl className={styles.stats}>
          {STATS.map((stat, index) => (
            <Reveal key={stat.label} direction="up" delay={index * STAGGER_MS}>
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
