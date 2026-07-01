import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { isPageEnabled } from "@/lib/page-config";
import Image from "next/image";
import Link from "next/link";
import { Reveal } from "@/components/animation/Reveal/Reveal";
import { SectionLabel } from "@/components/ui/SectionLabel/SectionLabel";
import styles from "./page.module.css";
import { asset } from "@/lib/asset";

export const metadata: Metadata = {
  title: "グループ・組織図 | 諾亜建設株式会社",
  description:
    "諾亜建設株式会社のグループ会社、関連体制と、脱炭素、水素エネルギー、発電、新エネルギー自動車、ハンドリング設備、IOTソリューションの事業組織、契約販売店を紹介します。",
};

const groupCompanies = [
  {
    eyebrow: "GROUP CORE",
    role: "国内事業の中核会社",
    title: "諾亜建設株式会社",
    text: "再生可能エネルギー、蓄電池、水素、AIデータセンターなど、エネルギー関連の製品・システム・サービスを国内のお客様へ提供します。",
    facts: ["設立：2018年10月", "代表取締役：鈴木 仲娜", "資本金：99,000,000円"],
  },
  {
    eyebrow: "GROUP COMPANY",
    role: "技術・設備領域を支える関連会社",
    title: "諾亜國際株式会社",
    text: "機械の設計・製造、発電所燃料供給、EPCプラント設備などの領域で事業を展開する関連会社です。",
    facts: ["設立：2016年10月", "代表取締役：鈴木 仲娜", "事業：発電所燃料供給・EPC設備"],
  },
];

const partnerCapabilities = [
  "技術・製品連携",
  "海外メーカー調達",
  "代理・販売ネットワーク",
  "案件別プロジェクト体制",
];

const affiliatedCompanies = [
  { category: "ゲーム事業", company: "サイバーステップ株式会社" },
  { category: "プライズ事業", company: "トレバ株式会社" },
  { category: "マーチャンダイジング事業", company: "ミライラツナグ株式会社" },
  { category: "フィンテック事業", company: "CrypTech Capital 株式会社" },
  { category: "Web3事業", company: "テノーラ株式会社" },
  { category: "セールス事業", company: "株式会社3rd" },
  { category: "AI・DX事業", company: "NAXA株式会社" },
  { category: "キャスティング・マーケティング事業", company: "株式会社TRUXiA" },
  { category: "防災事業", company: "ココロツナグ株式会社" },
];

const businessDivisions = [
  "脱炭素事業部",
  "水素エネルギー事業部",
  "発電事業部",
  "新エネルギー自動車事業部",
  "ハンドリング設備事業部",
  "IOTソリューション事業部",
];

const nextLinks = [
  { href: "/about/history", label: "沿革" },
  { href: "/about/outline", label: "会社概要" },
  { href: "/about/safety-health", label: "健康経営" },
];

export default function OrganizationPage() {
  if (!isPageEnabled("/about/organization")) notFound();

  return (
    <>
      <section className={styles.hero} aria-labelledby="organization-title">
        <div className={`container ${styles.heroInner}`}>
          <Reveal direction="up">
            <p className={styles.eyebrow}>GROUP & ORGANIZATION</p>
            <h1 id="organization-title" className={styles.heroTitle}>
              グループ・組織図
            </h1>
          </Reveal>
        </div>
      </section>

      <section className={styles.group} id="group-structure" aria-labelledby="group-title">
        <div className="container">
          <Reveal direction="up">
            <div className={styles.sectionHeader}>
              <div>
                <SectionLabel eyebrow="GROUP STRUCTURE" subtitle="グループ構成" />
              </div>
            </div>
          </Reveal>

          <div className={styles.groupRelationship}>
            {groupCompanies.map((item, index) => (
              <Reveal key={item.title} direction="up" delay={index * 70}>
                <article className={`${styles.groupCard} ${index === 0 ? styles.groupCardPrimary : ""}`}>
                  <div className={styles.groupCardHeader}>
                    <span className={styles.cardEyebrow}>{item.eyebrow}</span>
                    <span className={styles.groupRole}>{item.role}</span>
                  </div>
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
            <span className={styles.groupConnection} aria-hidden="true">
              連携
            </span>
          </div>

          <div className={styles.affiliatedBlock} aria-labelledby="affiliated-title">
            <Reveal direction="up">
              <div className={styles.affiliatedHeader}>
                <div>
                  <SectionLabel eyebrow="GROUP COMPANIES" subtitle="グループ会社" />
                  <h2 id="affiliated-title" className={styles.heading}>
                    多様な事業領域へ広がる、
                    <br />
                    グループ会社。
                  </h2>
                </div>
                <p className={styles.sectionLead}>
                  ゲーム、プライズ、Web3、AI・DX、防災など、各領域の専門会社と連携しながら、
                  グループ全体で事業機会を広げています。
                </p>
              </div>
            </Reveal>

            <div className={styles.affiliatedGrid}>
              {affiliatedCompanies.map((item, index) => (
                <Reveal key={item.company} direction="up" delay={index * 35}>
                  <article className={styles.affiliatedCard}>
                    <span className={styles.affiliatedNumber}>
                      {String(index + 1).padStart(2, "0")}
                    </span>
                    <div>
                      <p>{item.category}</p>
                      <h3>{item.company}</h3>
                    </div>
                  </article>
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className={styles.chartSection} id="organization-chart" aria-labelledby="chart-title">
        <div className="container">
          <Reveal direction="up">
            <div className={styles.sectionHeader}>
              <div>
                <SectionLabel eyebrow="ORGANIZATION CHART" subtitle="事業組織" inverse />
                <h2 id="chart-title" className={styles.inverseHeading}>
                  6つの専門事業部が、
                  <br />
                  各事業領域を担う。
                </h2>
              </div>
              <p className={styles.inverseLead}>
                脱炭素、水素エネルギー、発電、新エネルギー自動車、ハンドリング設備、IOTソリューションの各事業部が、
                専門性を生かして事業を推進します。
              </p>
            </div>
          </Reveal>

          <Reveal direction="up">
            <figure className={styles.aiDiagramFigure}>
              <div className={styles.aiDiagramViewport}>
                <div className={styles.aiDiagramCanvas}>
                  <Image
                    src={asset("/assets/about/organization/business-organization-ai.png")}
                    alt="中央拠点から6つの事業領域へつながるNOAHの事業組織イメージ"
                    fill
                    sizes="(max-width: 900px) 980px, 1280px"
                    className={styles.aiDiagramImage}
                  />
                  <div className={styles.companyNode}>
                    <span>HEAD OFFICE</span>
                    <strong>諾亜建設株式会社</strong>
                  </div>
                  <ol className={styles.divisionLabels}>
                    {businessDivisions.map((division, index) => (
                      <li
                        key={division}
                        className={`${styles.divisionLabel} ${styles[`division${index + 1}`]}`}
                      >
                        <span>{String(index + 1).padStart(2, "0")}</span>
                        <strong>{division}</strong>
                      </li>
                    ))}
                  </ol>
                </div>
              </div>
            </figure>
          </Reveal>
        </div>
      </section>

      <section className={styles.dealerSection} aria-labelledby="dealer-title">
        <div className="container">
          <Reveal direction="up">
            <div className={styles.sectionHeader}>
              <div>
                <SectionLabel eyebrow="AUTHORIZED SALES NETWORK" subtitle="契約販売店" />
              </div>
            </div>
          </Reveal>

          <Reveal direction="up">
            <figure className={styles.dealerFigure}>
              <Image
                src={asset("/assets/about/organization/authorized-dealers-modern.png")}
                alt="名古屋支社コンテナハウス事業部と契約販売店ティーエス株式会社の関係図"
                width={1800}
                height={680}
                sizes="(max-width: 900px) calc(100vw - 40px), 1280px"
                className={styles.diagramImage}
              />
            </figure>
          </Reveal>
        </div>
      </section>

      <section className={styles.next} aria-labelledby="next-title">
        <div className={`container ${styles.nextInner}`}>
          <Reveal direction="up">
            <p className={styles.nextEyebrow}>NEXT CONTENTS</p>
            <h2 id="next-title" className={styles.nextTitle}>
              沿革、会社概要、健康経営もあわせてご覧ください。
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
