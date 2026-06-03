import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { isPageEnabled } from "@/lib/page-config";
import Image from "next/image";
import Link from "next/link";
import { Reveal } from "@/components/animation/Reveal/Reveal";
import { Button } from "@/components/ui/Button/Button";
import { SectionLabel } from "@/components/ui/SectionLabel/SectionLabel";
import styles from "./page.module.css";

export const metadata: Metadata = {
  title: "沿革 | 諾亜建設株式会社",
  description:
    "諾亜建設株式会社の沿革。2018年の設立から、防塵ホッパー、脱炭素製品、水素設備、新エネルギー車両、現在の主要事業領域までの歩みを紹介します。",
};

const heroFacts = [
  { value: "2018", label: "会社設立" },
  { value: "6", label: "現在の主要事業" },
  { value: "Energy", label: "脱炭素インフラ" },
];

const focusItems = [
  {
    title: "発電所設備から始まる実装力",
    text: "港湾荷卸し設備や発電所関連設備を通じ、現場で機能する設備を納入する経験を積み上げてきました。",
  },
  {
    title: "水素・EV領域への展開",
    text: "水素製造設備、水素ステーション、新エネルギー車両の取り扱いを広げ、移動体の脱炭素化にも対応しています。",
  },
  {
    title: "複数事業をつなぐ現在地",
    text: "蓄電池、風力、バイオマス、ホッパー、水素、AIデータセンターを横断し、地域と企業の課題に合わせて提案します。",
  },
];

const timelineItems = [
  {
    year: "2018",
    title: "諾亜建設株式会社を設立",
    text: "中国首鋼集団からの出資を受け、日本に諾亜建設株式会社を設立。エネルギー・建設領域の事業基盤を整えました。",
    tags: ["設立", "事業基盤"],
  },
  {
    year: "2019",
    title: "港湾荷卸し防塵ホッパーを納入",
    text: "イーレックス株式会社の発電所向けに港湾荷卸し防塵ホッパーを納入。発電所関連設備とハンドリング領域で実績を積み上げました。",
    tags: ["発電所設備", "ホッパー"],
  },
  {
    year: "2020",
    title: "脱炭素製品の研究開発を推進",
    text: "脱炭素製品の研究開発に取り組み、小型バイオマスガス化炉の商品化を進めました。",
    tags: ["脱炭素", "バイオマス"],
  },
  {
    year: "2021",
    title: "新エネルギー車両と水素設備を展開",
    text: "福田汽車2t EVトラックを日本に導入。中国船舶集団の水素製造設備・水素ステーションについて日本総代理として取り扱いを開始しました。",
    tags: ["EV", "水素設備"],
  },
  {
    year: "2022",
    title: "水素リムジンバスを大阪万博へ提案",
    text: "水素モビリティ領域で、大型輸送・公共交通への活用提案を進めました。",
    tags: ["水素モビリティ", "提案"],
  },
  {
    year: "2023",
    title: "水素トラック・EV自動車・大型バイオマス案件へ拡張",
    text: "Grove水素トラック日本総代理、万山諾亜グループEV自動車の日本展開、JILI（吉利）汽車日本総代理を開始。田原市の大型バイオマス発電所向け港湾荷卸防塵ホッパーも受注しました。",
    tags: ["水素トラック", "EV", "バイオマス"],
  },
  {
    year: "2024",
    title: "陝西汽車の日本総代理を開始",
    text: "商用車・水素モビリティ関連の選択肢を拡充し、脱炭素交通インフラの提案範囲を広げました。",
    tags: ["商用車", "モビリティ"],
  },
  {
    year: "現在",
    title: "6つの主要事業へ展開",
    text: "蓄電池、風力発電、バイオマス、走行式集塵ホッパー、水素モビリティ、AIデータセンターを主要事業として展開し、脱炭素インフラの社会実装を進めます。",
    tags: ["蓄電池", "風力", "AI"],
    current: true,
  },
];

const businessLinks = [
  { href: "/business/batteryenergystorage", label: "蓄電池事業" },
  { href: "/business/windpower", label: "風力発電事業" },
  { href: "/business/biomasspower", label: "バイオマス" },
  { href: "/business/hopper", label: "走行式集塵ホッパー事業" },
  { href: "/business/hydrogen-mobility", label: "水素モビリティ事業" },
  { href: "/business/ai-data-center", label: "AIデータセンター事業" },
];

const nextLinks = [
  { href: "/about/outline", label: "会社概要" },
  { href: "/about/network", label: "国内外拠点" },
  { href: "/about/safety-health", label: "健康経営" },
];

export default function HistoryPage() {
  if (!isPageEnabled("/about/history")) notFound();

  return (
    <>
      <section className={styles.hero} aria-labelledby="history-title">
        <div className={`container ${styles.heroInner}`}>
          <Reveal direction="left" className={styles.heroCopy}>
            <p className={styles.eyebrow}>
              COMPANY HISTORY
              <span>沿革</span>
            </p>
            <h1 id="history-title" className={styles.heroTitle}>
              技術導入から、
              <br />
              脱炭素インフラの実装へ。
            </h1>
            <p className={styles.heroLead}>
              2018年の設立以降、発電所設備、脱炭素製品、水素設備、新エネルギー車両へと領域を広げてきました。
              NOAHの歩みを、現在の主要事業につながる流れとして整理します。
            </p>
            <div className={styles.heroActions}>
              <Button href="#timeline">年表を見る</Button>
              <Button href="/about" variant="outline">
                企業情報へ戻る
              </Button>
            </div>
          </Reveal>

          <Reveal direction="right" className={styles.heroVisualReveal}>
            <figure className={styles.heroVisual}>
              <Image
                src="/assets/about-collage.png"
                alt="風力発電、水素モビリティ、EV、蓄電池設備を組み合わせたNOAHの事業イメージ"
                fill
                priority
                sizes="(max-width: 960px) calc(100vw - 40px), 52vw"
                className={styles.heroImage}
              />
              <figcaption className={styles.heroCaption}>
                <span>2018</span>
                <b>NOAH CONSTRUCTION</b>
                <span>NOW</span>
              </figcaption>
            </figure>
          </Reveal>
        </div>

        <div className={`container ${styles.factStrip}`} aria-label="沿革の概要">
          {heroFacts.map((fact) => (
            <div key={fact.value} className={styles.factItem}>
              <b>{fact.value}</b>
              <span>{fact.label}</span>
            </div>
          ))}
        </div>
      </section>

      <section className={styles.context} aria-labelledby="context-title">
        <div className={`container ${styles.contextGrid}`}>
          <Reveal direction="left">
            <SectionLabel eyebrow="OUR PATH" subtitle="歩みの読み方" />
            <h2 id="context-title" className={styles.heading}>
              年表を、事業の広がりとして読む。
            </h2>
            <p className={styles.lead}>
              沿革は出来事の羅列ではなく、NOAHがどの領域で経験を積み、現在の事業構成へたどり着いたかを示すものです。
              発電所設備、脱炭素製品、水素・EV領域の流れを、今の6事業へ接続して見せます。
            </p>
          </Reveal>

          <div className={styles.focusGrid}>
            {focusItems.map((item, index) => (
              <Reveal key={item.title} direction="up" delay={index * 70}>
                <article className={styles.focusCard}>
                  <span>{String(index + 1).padStart(2, "0")}</span>
                  <h3>{item.title}</h3>
                  <p>{item.text}</p>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className={styles.timelineSection} id="timeline" aria-labelledby="timeline-title">
        <div className="container">
          <Reveal direction="up">
            <div className={styles.sectionHeader}>
              <div>
                <SectionLabel eyebrow="TIMELINE" subtitle="会社沿革" inverse />
                <h2 id="timeline-title" className={styles.inverseHeading}>
                  2018年から現在までの主な歩み。
                </h2>
              </div>
              <p className={styles.inverseLead}>
                発電所設備、脱炭素製品、水素・モビリティへと広がってきた歩みが、現在の主要事業につながっています。
              </p>
            </div>
          </Reveal>

          <div className={styles.timelineList}>
            {timelineItems.map((item, index) => (
              <Reveal key={`${item.year}-${item.title}`} direction="up" delay={index * 45}>
                <article className={item.current ? `${styles.timelineItem} ${styles.currentItem}` : styles.timelineItem}>
                  <div className={styles.yearBlock}>
                    <span>{item.year}</span>
                  </div>
                  <div className={styles.timelineBody}>
                    <div>
                      <h3>{item.title}</h3>
                      <p>{item.text}</p>
                    </div>
                    <ul className={styles.tagList} aria-label={`${item.year}年の関連領域`}>
                      {item.tags.map((tag) => (
                        <li key={tag}>{tag}</li>
                      ))}
                    </ul>
                  </div>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className={styles.business} aria-labelledby="business-title">
        <div className={`container ${styles.businessGrid}`}>
          <Reveal direction="left">
            <SectionLabel eyebrow="CURRENT BUSINESS" subtitle="現在の主要事業" />
            <h2 id="business-title" className={styles.heading}>
              沿革の先にある、
              <br />
              6つの事業領域。
            </h2>
            <p className={styles.lead}>
              これまでに広げてきた設備、発電、水素、モビリティの知見を、現在の事業ページへつなげます。
              詳細は各事業ページからご確認ください。
            </p>
          </Reveal>

          <Reveal direction="right">
            <div className={styles.businessLinks}>
              {businessLinks.map((item, index) => (
                <Link key={item.href} href={item.href}>
                  <span>{String(index + 1).padStart(2, "0")}</span>
                  <b>{item.label}</b>
                </Link>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      <section className={styles.next} aria-labelledby="next-title">
        <div className={`container ${styles.nextInner}`}>
          <Reveal direction="up">
            <p className={styles.nextEyebrow}>NEXT CONTENTS</p>
            <h2 id="next-title" className={styles.nextTitle}>
              会社の基本情報や拠点情報もご確認ください。
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
