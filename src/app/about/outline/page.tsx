import type { Metadata } from "next";
import Link from "next/link";
import { Reveal } from "@/components/animation/Reveal/Reveal";
import { Button } from "@/components/ui/Button/Button";
import { SectionLabel } from "@/components/ui/SectionLabel/SectionLabel";
import styles from "./page.module.css";

export const metadata: Metadata = {
  title: "会社概要 | 諾亜建設株式会社",
  description:
    "諾亜建設株式会社の会社名、設立、所在地、連絡先、代表者、資本金、事業内容、登録・許可、取引銀行などの会社概要です。",
};

const keyFacts = [
  { value: "2018", label: "設立" },
  { value: "99,000,000円", label: "資本金" },
  { value: "Tokyo", label: "本社所在地" },
];

const companyRows = [
  { label: "会社名", value: "諾亜建設株式会社" },
  { label: "設立", value: "2018年10月" },
  {
    label: "所在地",
    value: "〒160-0022 東京都中野区本町2丁目46-1 サンブライトッインビル北棟15F 1503-1",
  },
  { label: "連絡先", value: "TEL：03-5341-4696　FAX：03-5341-4697" },
  { label: "代表者", value: "代表取締役社長　鈴木 仲娜" },
  { label: "資本金", value: "99,000,000円" },
  {
    label: "事業内容",
    value: "エネルギー事業関連の製品・システム・サービスの開発・製造・販売",
  },
  {
    label: "登録・許可",
    value:
      "建設業許可（特定）：建築工事業、大工工事業、鋼構造物工事業、内装仕上工事業　東京都知事許可（特-30）第149709号",
  },
  { label: "弁護士", value: "古宮 憲一郎（弁護士法人リオ．パートナーズ）" },
  { label: "監査役", value: "高木 泰（税理士）" },
  { label: "取引先銀行", value: "三井住友銀行 新宿支店、東京スター銀行" },
];

const businessDomains = [
  { href: "/business/batteryenergystorage", label: "蓄電池事業" },
  { href: "/business/windpower", label: "風力発電事業" },
  { href: "/business/biomasspower", label: "バイオマス" },
  { href: "/business/hopper", label: "走行式集塵ホッパー事業" },
  { href: "/business/hydrogen-mobility", label: "水素モビリティ事業" },
  { href: "/business/ai-data-center", label: "AIデータセンター事業" },
];

const nextLinks = [
  { href: "/about/organization", label: "グループ・組織図" },
  { href: "/about/network", label: "国内外拠点" },
  { href: "/about/history", label: "沿革" },
];

export default function OutlinePage() {
  return (
    <>
      <section className={styles.hero} aria-labelledby="outline-title">
        <div className={`container ${styles.heroInner}`}>
          <Reveal direction="left" className={styles.heroCopy}>
            <p className={styles.eyebrow}>
              COMPANY PROFILE
              <span>会社概要</span>
            </p>
            <h1 id="outline-title" className={styles.heroTitle}>
              NOAHの基本情報を、
              <br />
              正確に、見やすく。
            </h1>
            <p className={styles.heroLead}>
              会社名、所在地、代表者、資本金、事業内容、許可情報など、諾亜建設株式会社の基本情報を掲載しています。
              エネルギー事業を支える企業基盤をご確認ください。
            </p>
            <div className={styles.heroActions}>
              <Button href="#profile-table">会社概要を見る</Button>
              <Button href="/about" variant="outline">
                企業情報へ戻る
              </Button>
            </div>
          </Reveal>

          <Reveal direction="right" className={styles.heroPanelReveal}>
            <aside className={styles.heroPanel} aria-label="会社概要の主要情報">
              <span className={styles.panelLabel}>NOAH CONSTRUCTION CO., LTD.</span>
              <strong>人と地球に優しい、持続可能な未来へ。</strong>
              <p>
                再生可能エネルギー、蓄電池、水素、AIデータセンターなどの事業を通じて、
                社会に価値あるインフラを構想・実装します。
              </p>
              <div className={styles.factGrid}>
                {keyFacts.map((fact) => (
                  <div key={fact.value}>
                    <b>{fact.value}</b>
                    <span>{fact.label}</span>
                  </div>
                ))}
              </div>
            </aside>
          </Reveal>
        </div>
      </section>

      <section className={styles.profile} id="profile-table" aria-labelledby="profile-title">
        <div className={`container ${styles.profileGrid}`}>
          <Reveal direction="left" className={styles.profileIntro}>
            <SectionLabel eyebrow="OUTLINE" subtitle="会社概要" />
            <h2 id="profile-title" className={styles.heading}>
              会社の基本情報を
              <br />
              一覧で確認する。
            </h2>
            <p className={styles.lead}>
              会社名、設立、所在地、連絡先、代表者、資本金、事業内容など、NOAHの基本情報をまとめています。
              事業連携やお問い合わせの前に、会社の概要をご確認いただけます。
            </p>
          </Reveal>

          <Reveal direction="right">
            <div className={styles.tableWrap}>
              <dl className={styles.companyTable}>
                {companyRows.map((row) => (
                  <div key={row.label}>
                    <dt>{row.label}</dt>
                    <dd>{row.value}</dd>
                  </div>
                ))}
              </dl>
            </div>
          </Reveal>
        </div>
      </section>

      <section className={styles.business} aria-labelledby="business-title">
        <div className="container">
          <Reveal direction="up">
            <div className={styles.sectionHeader}>
              <div>
                <SectionLabel eyebrow="BUSINESS DOMAIN" subtitle="事業領域" inverse />
                <h2 id="business-title" className={styles.inverseHeading}>
                  エネルギー事業を中心に、
                  <br />
                  複数領域を横断する。
                </h2>
              </div>
              <p className={styles.inverseLead}>
                NOAHは、エネルギー関連の製品・システム・サービスを軸に、複数の事業領域を横断して展開しています。
                各事業の詳細は、事業紹介ページからご確認いただけます。
              </p>
            </div>
          </Reveal>

          <div className={styles.domainGrid}>
            {businessDomains.map((domain, index) => (
              <Reveal key={domain.href} direction="up" delay={index * 55}>
                <Link href={domain.href} className={styles.domainCard}>
                  <span>{String(index + 1).padStart(2, "0")}</span>
                  <b>{domain.label}</b>
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className={styles.access} aria-labelledby="access-title">
        <div className={`container ${styles.accessGrid}`}>
          <Reveal direction="left" className={styles.accessCard}>
            <SectionLabel eyebrow="ACCESS" subtitle="所在地・連絡先" />
            <h2 id="access-title" className={styles.heading}>
              お問い合わせ先
            </h2>
            <address>
              〒160-0022
              <br />
              東京都中野区本町2丁目46-1
              <br />
              サンブライトッインビル北棟15F 1503-1
            </address>
            <p>TEL：03-5341-4696 / FAX：03-5341-4697</p>
            <Button href="/contact">お問い合わせ</Button>
          </Reveal>

          <Reveal direction="right" className={styles.documentCard}>
            <span className={styles.documentLabel}>DOCUMENT</span>
            <h3>会社情報に関するご相談</h3>
            <p>
              会社案内、事業連携、資料請求など、企業情報に関するお問い合わせを受け付けています。
              詳しい事業内容や拠点情報もあわせてご覧ください。
            </p>
            <div className={styles.documentLinks}>
              {nextLinks.map((item) => (
                <Link key={item.href} href={item.href}>
                  {item.label}
                </Link>
              ))}
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
