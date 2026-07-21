import { Reveal } from "@/components/animation/Reveal/Reveal";
import { SectionLabel } from "@/components/ui/SectionLabel/SectionLabel";
import styles from "./SecurityStandard.module.css";

const securityPoints = [
  { label: "Connected", text: "遠隔監視・制御設備" },
  { label: "Selection", text: "適合状況を確認した機器選定" },
  { label: "Proposal", text: "調達・提案時の説明材料" },
];

export function SecurityStandard() {
  return (
    <section className={styles.security} aria-labelledby="security-standard-title">
      <div className={`container ${styles.inner}`}>
        <Reveal direction="up" className={styles.panelReveal}>
          <div className={styles.panel}>
            <div className={styles.copy}>
              <SectionLabel eyebrow="SECURITY STANDARD" subtitle="セキュリティ要件への配慮" inverse />
              <h2 id="security-standard-title" className={styles.heading}>
                つながる設備に、
                <br />
                選定段階から安心を。
              </h2>
              <p className={styles.lead}>
                ネットワーク接続や遠隔監視・制御を伴う設備提案では、JC-STAR適合製品の取扱いを通じ、
                導入時のセキュリティ確認にも配慮します。
              </p>

              <ul className={styles.pointList}>
                {securityPoints.map((point) => (
                  <li key={point.label}>
                    <span>{point.label}</span>
                    <strong>{point.text}</strong>
                  </li>
                ))}
              </ul>
            </div>

            <aside className={styles.badge} aria-label="JC-STAR適合製品の取扱い">
              <p className={styles.badgeLabel}>JC-STAR</p>
              <p className={styles.status}>現在JC-STAR認証対応中</p>
              <h3>適合製品の取扱い</h3>
              <p className={styles.note}>
                適合対象は製品・機器ごとに確認します。
              </p>
              <a
                href="https://www.ipa.go.jp/security/jc-star/index.html"
                target="_blank"
                rel="noreferrer"
                className={styles.externalLink}
              >
                IPAのJC-STAR制度を見る
              </a>
            </aside>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
