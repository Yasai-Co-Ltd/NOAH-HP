import { SectionLabel } from "@/components/ui/SectionLabel/SectionLabel";
import styles from "./Strengths.module.css";

interface Stat {
  label: string;
  value: string;
  unit: string;
}

const STATS: Stat[] = [
  { label: "年間施工実績", value: "80", unit: "件" },
  { label: "再エネ関連実績", value: "150", unit: "MW+" },
  { label: "取引先企業数", value: "200", unit: "社" },
  { label: "全国対応エリア", value: "全国", unit: "対応可能" },
  { label: "運用・保守実績", value: "10", unit: "年+" },
];

export function Strengths() {
  return (
    <section className={styles.strengths} id="sustainability" aria-labelledby="strengths-title">
      <div className={`container ${styles.grid}`}>
        <div>
          <SectionLabel eyebrow="OUR STRENGTHS" subtitle="私たちの強み" inverse />
          <h2 id="strengths-title" className={styles.heading}>
            確かな技術と実績で、
            <br />
            信頼されるパートナーに。
          </h2>
        </div>
        <dl className={styles.stats}>
          {STATS.map((stat) => (
            <div key={stat.label} className={styles.stat}>
              <dt className={styles.statLabel}>{stat.label}</dt>
              <dd className={styles.statValue}>
                <strong className={styles.value}>{stat.value}</strong>
                <span className={styles.unit}>{stat.unit}</span>
              </dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  );
}
