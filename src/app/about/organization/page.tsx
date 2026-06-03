import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { isPageEnabled } from "@/lib/page-config";
import Image from "next/image";
import Link from "next/link";
import { Reveal } from "@/components/animation/Reveal/Reveal";
import { Button } from "@/components/ui/Button/Button";
import { SectionLabel } from "@/components/ui/SectionLabel/SectionLabel";
import styles from "./page.module.css";
import { asset } from "@/lib/asset";

export const metadata: Metadata = {
  title: "グループ・組織図 | 諾亜建設株式会社",
  description:
    "諾亜建設株式会社のグループ・関連体制と組織図。6つの事業領域を横断し、構想、技術選定、調達、施工、運用まで支える推進体制を紹介します。",
};

const heroFacts = [
  { value: "2016", label: "関連会社の設立" },
  { value: "2018", label: "諾亜建設の設立" },
  { value: "6", label: "主要事業領域" },
];

const groupCompanies = [
  {
    eyebrow: "CORE COMPANY",
    title: "諾亜建設株式会社",
    text: "再生可能エネルギー、蓄電池、水素、AIデータセンターなど、エネルギー事業関連の製品・システム・サービスを扱う中核会社です。",
    facts: ["設立：2018年10月", "代表取締役：鈴木 仲娜", "資本金：99,000,000円"],
  },
  {
    eyebrow: "RELATED COMPANY",
    title: "諾亜國際株式会社",
    text: "機械の設計・製造、発電所燃料供給、EPCプラント設備などの領域で事業を展開する関連会社です。",
    facts: ["設立：2016年10月", "代表取締役：鈴木 仲娜", "事業：発電所燃料供給・EPC設備"],
  },
  {
    eyebrow: "PARTNER NETWORK",
    title: "国内外パートナーネットワーク",
    text: "水素設備、車両、発電所設備、港湾荷役設備など、各領域の技術・製品パートナーと連携し、案件ごとに最適な体制を組みます。",
    facts: ["技術・製品連携", "代理・販売ネットワーク", "案件別プロジェクト体制"],
  },
];

const organizationLayers = [
  {
    title: "経営・事業統括",
    text: "事業方針、投資判断、パートナー連携、リスク管理を統括します。",
  },
  {
    title: "プロジェクト推進",
    text: "案件ごとの計画、工程、品質、安全、顧客対応を横断的に管理します。",
  },
  {
    title: "技術・調達連携",
    text: "設備仕様、製品選定、海外メーカー連携、施工・試運転支援を担います。",
  },
];

const businessUnits = [
  { href: "/business/batteryenergystorage", label: "蓄電池事業", code: "BATTERY" },
  { href: "/business/windpower", label: "風力発電事業", code: "WIND" },
  { href: "/business/biomasspower", label: "バイオマス", code: "BIOMASS" },
  { href: "/business/hopper", label: "走行式集塵ホッパー事業", code: "HOPPER" },
  { href: "/business/hydrogen-mobility", label: "水素モビリティ事業", code: "HYDROGEN" },
  { href: "/business/ai-data-center", label: "AIデータセンター事業", code: "AI DC" },
];

const processItems = [
  {
    title: "構想・事業企画",
    text: "地域、施設、需要、規制、投資条件を踏まえ、事業の成立条件を整理します。",
  },
  {
    title: "技術選定・調達",
    text: "蓄電池、風力、水素、ハンドリング設備など、必要な製品とパートナーを選定します。",
  },
  {
    title: "導入・施工支援",
    text: "設計、調達、施工、試運転に関わる実務を一体で進め、現場で使える状態へ落とし込みます。",
  },
  {
    title: "運用・改善",
    text: "導入後の運用、O&M、データ活用、追加提案を通じて、事業価値の維持・向上を支えます。",
  },
];

const nextLinks = [
  { href: "/about/network", label: "国内外拠点" },
  { href: "/about/history", label: "沿革" },
  { href: "/about/outline", label: "会社概要" },
];

export default function OrganizationPage() {
  if (!isPageEnabled("/about/organization")) notFound();

  return (
    <>
      <section className={styles.hero} aria-labelledby="organization-title">
        <div className={`container ${styles.heroInner}`}>
          <Reveal direction="left" className={styles.heroCopy}>
            <p className={styles.eyebrow}>
              GROUP & ORGANIZATION
              <span>グループ・組織図</span>
            </p>
            <h1 id="organization-title" className={styles.heroTitle}>
              事業を横断して、
              <br />
              プロジェクトを動かす体制。
            </h1>
            <p className={styles.heroLead}>
              NOAHは、単独の製品販売ではなく、構想、技術選定、調達、施工、運用までを見据えてプロジェクトを組み立てます。
              グループ・関連体制と、6つの事業を支える組織の考え方を紹介します。
            </p>
            <div className={styles.heroActions}>
              <Button href="#organization-chart">組織図を見る</Button>
              <Button href="/about" variant="outline">
                企業情報へ戻る
              </Button>
            </div>
          </Reveal>

          <Reveal direction="right" className={styles.heroVisualReveal}>
            <figure className={styles.heroVisual}>
              <Image
                src={asset("/assets/about-collage.png")}
                alt="風力発電、水素モビリティ、EV、蓄電池設備を組み合わせたNOAHの事業イメージ"
                fill
                priority
                sizes="(max-width: 960px) calc(100vw - 40px), 52vw"
                className={styles.heroImage}
              />
              <figcaption className={styles.heroCaption}>
                <span>NOAH</span>
                <b>Group / Project / Business Unit</b>
              </figcaption>
            </figure>
          </Reveal>
        </div>

        <div className={`container ${styles.factStrip}`} aria-label="グループ・組織の概要">
          {heroFacts.map((fact) => (
            <div key={fact.value} className={styles.factItem}>
              <b>{fact.value}</b>
              <span>{fact.label}</span>
            </div>
          ))}
        </div>
      </section>

      <section className={styles.group} aria-labelledby="group-title">
        <div className="container">
          <Reveal direction="up">
            <div className={styles.sectionHeader}>
              <div>
                <SectionLabel eyebrow="GROUP STRUCTURE" subtitle="グループ・関連体制" />
                <h2 id="group-title" className={styles.heading}>
                  会社とパートナーをつなぎ、
                  <br />
                  実装体制を組む。
                </h2>
              </div>
              <p className={styles.sectionLead}>
                国内の顧客・現場に向き合う諾亜建設を中核に、関連会社と国内外パートナーが技術・製品・調達面を補完します。
              </p>
            </div>
          </Reveal>

          <div className={styles.groupGrid}>
            {groupCompanies.map((item, index) => (
              <Reveal key={item.title} direction="up" delay={index * 70} className={styles.cardReveal}>
                <article className={styles.groupCard}>
                  <span className={styles.cardEyebrow}>{item.eyebrow}</span>
                  <h3>{item.title}</h3>
                  <p>{item.text}</p>
                  <ul>
                    {item.facts.map((fact) => (
                      <li key={fact}>{fact}</li>
                    ))}
                  </ul>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className={styles.chartSection} id="organization-chart" aria-labelledby="chart-title">
        <div className="container">
          <Reveal direction="up">
            <div className={styles.sectionHeader}>
              <div>
                <SectionLabel eyebrow="ORGANIZATION CHART" subtitle="組織図" inverse />
                <h2 id="chart-title" className={styles.inverseHeading}>
                  6事業を、ひとつの推進体制で支える。
                </h2>
              </div>
              <p className={styles.inverseLead}>
                経営・事業統括のもと、プロジェクト推進と技術・調達連携が各事業領域を横断します。
                案件ごとに必要な専門性を組み合わせる、プロジェクト型の組織です。
              </p>
            </div>
          </Reveal>

          <Reveal direction="up">
            <div className={styles.orgChart} aria-label="NOAHの組織図">
              <div className={styles.topNode}>
                <span>BOARD / MANAGEMENT</span>
                <strong>代表取締役</strong>
                <b>鈴木 仲娜</b>
              </div>

              <div className={styles.layerGrid}>
                {organizationLayers.map((item) => (
                  <article key={item.title} className={styles.layerNode}>
                    <h3>{item.title}</h3>
                    <p>{item.text}</p>
                  </article>
                ))}
              </div>

              <div className={styles.businessUnitGrid}>
                {businessUnits.map((unit) => (
                  <Link key={unit.href} href={unit.href} className={styles.businessUnit}>
                    <span>{unit.code}</span>
                    <b>{unit.label}</b>
                  </Link>
                ))}
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      <section className={styles.process} aria-labelledby="process-title">
        <div className={`container ${styles.processGrid}`}>
          <Reveal direction="left">
            <SectionLabel eyebrow="PROJECT FLOW" subtitle="連携の流れ" />
            <h2 id="process-title" className={styles.heading}>
              組織図を、実務の流れに落とす。
            </h2>
            <p className={styles.lead}>
              NOAHの組織は、部門を並べるためのものではなく、案件を前に進めるための体制です。
              構想段階から導入後の改善まで、各領域をつなぎながら進行します。
            </p>
          </Reveal>

          <div className={styles.processList}>
            {processItems.map((item, index) => (
              <Reveal key={item.title} direction="up" delay={index * 60}>
                <article className={styles.processItem}>
                  <span>{String(index + 1).padStart(2, "0")}</span>
                  <div>
                    <h3>{item.title}</h3>
                    <p>{item.text}</p>
                  </div>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className={styles.next} aria-labelledby="next-title">
        <div className={`container ${styles.nextInner}`}>
          <Reveal direction="up">
            <p className={styles.nextEyebrow}>NEXT CONTENTS</p>
            <h2 id="next-title" className={styles.nextTitle}>
              拠点、沿革、会社概要もあわせてご覧ください。
            </h2>
            <div className={styles.nextLinks}>
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
