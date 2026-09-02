import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Image from "next/image";
import { Reveal } from "@/components/animation/Reveal/Reveal";
import { Button } from "@/components/ui/Button/Button";
import { SectionLabel } from "@/components/ui/SectionLabel/SectionLabel";
import { asset } from "@/lib/asset";
import { isPageEnabled } from "@/lib/page-config";
import styles from "./page.module.css";

export const metadata: Metadata = {
  title: "水素コンプレッサー事業 | 諾亜建設株式会社",
  description:
    "水素充填、オンサイト水素ステーション、高純度ガス圧縮に対応する隔膜式・ピストン式コンプレッサーの選定、設備構成、導入支援を行う諾亜建設の水素コンプレッサー事業を紹介します。",
};

const lineupItems = [
  {
    title: "水素充填用 隔膜式コンプレッサー",
    text: "水素充填設備向けに、22MPaクラスを中心とした圧縮ユニットを検討。流量、入口圧、充填能力に合わせてモデルを選定します。",
    spec: "資料掲載例：出口22MPa、流量170-1000Nm³/h、37-185kW",
  },
  {
    title: "オンサイト水素ステーション向け",
    text: "現場で水素を製造・貯蔵・充填する計画に合わせて、圧縮、冷却、制御、保安距離、メンテナンス動線を整理します。",
    spec: "資料掲載例：出口22/45MPa、流量100-620Nm³/h、37-185kW",
  },
  {
    title: "45MPa / 87MPaステーション対応",
    text: "中高圧充填や高圧貯蔵を想定し、入口圧、吐出圧、日量、充填サイクルから必要能力を確認します。",
    spec: "資料掲載例：45MPa、87MPaクラスの水素用途モデル",
  },
  {
    title: "ピストン式・周辺ガス圧縮設備",
    text: "天然ガス、LNG-BOG、酸素など、関連するガス圧縮設備も用途に応じて比較。水素設備の周辺条件まで見て構成します。",
    spec: "資料掲載例：高圧・BOG・酸素・天然ガス用途モデル",
  },
];

const technicalPoints = [
  {
    title: "高純度ガスに適した密封構造",
    text: "隔膜式はガスが潤滑油に触れにくい構造で、高純度水素や腐食性・可燃性ガス用途に適した方式として整理されています。",
  },
  {
    title: "熱管理と高圧圧縮",
    text: "シリンダーの放熱性や冷却構成を踏まえ、高圧ガスの圧縮に必要な温度管理と安定運転を検討します。",
  },
  {
    title: "膜破損検知と安全運用",
    text: "膜破損警報、シール構造、制御・計装を含め、設備単体ではなくステーション全体の安全運用として設計します。",
  },
  {
    title: "スキッド化による導入性",
    text: "主要部品を共通ベース上に集約するスキッド構成により、輸送、据付、点検、更新を見据えた設備計画が可能です。",
  },
];

const specRows = [
  {
    use: "水素充填用",
    inlet: "1.7-1.9MPa",
    outlet: "22MPa",
    flow: "170-1000Nm³/h",
    motor: "37-185kW",
  },
  {
    use: "オンサイト水素ステーション",
    inlet: "1.5MPa",
    outlet: "22 / 45MPa",
    flow: "100-620Nm³/h",
    motor: "37-185kW",
  },
  {
    use: "45MPa加圧ステーション",
    inlet: "5-20MPa",
    outlet: "45MPa",
    flow: "100-1000Nm³/h",
    motor: "15-110kW",
  },
  {
    use: "GDシリーズ隔膜式",
    inlet: "用途別",
    outlet: "最大100MPa",
    flow: "30-2000Nm³/h",
    motor: "22-200kW",
  },
];

const processSteps = [
  {
    number: "01",
    title: "用途・圧力条件の整理",
    text: "水素製造方式、入口圧、目標吐出圧、充填量、運転時間、将来増設の有無を整理します。",
  },
  {
    number: "02",
    title: "モデル選定・設備構成",
    text: "隔膜式、ピストン式、冷却、制御、配管、保安機器を組み合わせ、必要能力に合う構成を検討します。",
  },
  {
    number: "03",
    title: "配置・保守計画",
    text: "スキッド寸法、搬入動線、点検スペース、騒音、換気、保安距離など、現場に合わせた配置を設計します。",
  },
  {
    number: "04",
    title: "導入・運用支援",
    text: "調達、据付、試運転、保守体制、運転データ確認まで、ステーション運用を見据えて支援します。",
  },
];

export default function HydrogenCompressorPage() {
  if (!isPageEnabled("/business/hydrogen-compressor")) notFound();

  return (
    <>
      <section className={styles.hero} aria-labelledby="hydrogen-compressor-title">
        <Image
          src={asset("/assets/hydrogen-compressor/compressor-hero.jpg")}
          alt=""
          fill
          priority
          sizes="100vw"
          className={styles.heroBackground}
        />
        <div className={styles.heroOverlay} />
        <div className={`container ${styles.heroInner}`}>
          <Reveal direction="left" className={styles.heroCopy}>
            <p className={styles.eyebrow}>HYDROGEN COMPRESSOR</p>
            <h1 id="hydrogen-compressor-title" className={styles.heroTitle}>
              水素コンプレッサー事業
            </h1>
            <p className={styles.heroLead}>
              水素供給を支える、高圧圧縮設備。
              隔膜式・ピストン式コンプレッサーを用途に合わせて整理し、水素インフラの導入計画を支援します。
            </p>
            <div className={styles.heroActions}>
              <Button href="/contact" variant="white">
                導入相談をする
              </Button>
              <Button href="#spec" variant="cyan" className={styles.darkButton}>
                参考仕様を見る
              </Button>
            </div>
          </Reveal>
        </div>
      </section>

      <section className={styles.intro} aria-labelledby="intro-title">
        <div className={`container ${styles.introGrid}`}>
          <Reveal direction="left" className={styles.introCopy}>
            <SectionLabel eyebrow="ROLE" subtitle="水素圧縮設備の役割" />
            <h2 id="intro-title" className={styles.heading}>
              つくる水素を、
              <br />
              使える圧力へ。
            </h2>
            <p className={styles.lead}>
              水素製造装置、貯蔵タンク、ディスペンサー、商用車の運用計画は、コンプレッサーの能力と密接に関わります。
              NOAHは設備単体の選定だけでなく、充填量、運転サイクル、保守動線、将来増設まで含めた計画として整理します。
            </p>
          </Reveal>
          <Reveal direction="right">
            <figure className={styles.introImageWrap}>
              <Image
                src={asset("/assets/hydrogen-compressor/diaphragm-detail.jpg")}
                alt="隔膜式水素コンプレッサーの詳細"
                fill
                sizes="(max-width: 960px) calc(100vw - 40px), 48vw"
                className={styles.introImage}
              />
              <figcaption>Diaphragm compressor unit for hydrogen application</figcaption>
            </figure>
          </Reveal>
        </div>
      </section>

      <section className={styles.lineup} aria-labelledby="lineup-title">
        <div className="container">
          <Reveal direction="up">
            <div className={styles.sectionHeader}>
              <SectionLabel eyebrow="PRODUCT LINEUP" subtitle="対応領域" />
              <h2 id="lineup-title" className={styles.heading}>
                水素ステーションから、
                <br />
                周辺ガス設備まで。
              </h2>
            </div>
          </Reveal>

          <div className={styles.lineupGrid}>
            {lineupItems.map((item, index) => (
              <Reveal key={item.title} direction="up" delay={index * 70}>
                <article className={styles.lineupCard}>
                  <span>{String(index + 1).padStart(2, "0")}</span>
                  <h3>{item.title}</h3>
                  <p>{item.text}</p>
                  <small>{item.spec}</small>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className={styles.technology} aria-labelledby="technology-title">
        <div className={`container ${styles.technologyInner}`}>
          <Reveal direction="left">
            <figure className={styles.technologyImageWrap}>
              <Image
                src={asset("/assets/hydrogen-compressor/lineup-factory.jpg")}
                alt="工場内に並ぶ水素コンプレッサーユニット"
                fill
                sizes="(max-width: 960px) calc(100vw - 40px), 46vw"
                className={styles.technologyImage}
              />
            </figure>
          </Reveal>

          <Reveal direction="right" className={styles.technologyCopy}>
            <SectionLabel eyebrow="TECHNOLOGY" subtitle="技術上のポイント" inverse />
            <h2 id="technology-title" className={styles.inverseHeading}>
              高純度・高圧ガスを、
              <br />
              安定して扱うために。
            </h2>
            <div className={styles.techList}>
              {technicalPoints.map((point) => (
                <article key={point.title} className={styles.techItem}>
                  <h3>{point.title}</h3>
                  <p>{point.text}</p>
                </article>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      <section className={styles.spec} id="spec" aria-labelledby="spec-title">
        <div className={`container ${styles.specInner}`}>
          <Reveal direction="left" className={styles.specCopy}>
            <SectionLabel eyebrow="REFERENCE SPEC" subtitle="参考仕様" />
            <h2 id="spec-title" className={styles.heading}>
              用途別に、
              <br />
              圧力・流量を確認。
            </h2>
            <p className={styles.lead}>
              以下は資料掲載値をもとにした参考レンジです。実際の選定では、ガス条件、法規、設置環境、
              充填サイクル、保守条件を確認したうえで個別に仕様を確定します。
            </p>
          </Reveal>

          <Reveal direction="right" className={styles.specTableWrap}>
            <table className={styles.specTable}>
              <thead>
                <tr>
                  <th>用途</th>
                  <th>入口圧</th>
                  <th>吐出圧</th>
                  <th>流量</th>
                  <th>出力</th>
                </tr>
              </thead>
              <tbody>
                {specRows.map((row) => (
                  <tr key={row.use}>
                    <th>{row.use}</th>
                    <td>{row.inlet}</td>
                    <td>{row.outlet}</td>
                    <td>{row.flow}</td>
                    <td>{row.motor}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </Reveal>
        </div>
      </section>

      <section className={styles.process} aria-labelledby="process-title">
        <div className="container">
          <Reveal direction="up">
            <div className={styles.processHeader}>
              <SectionLabel eyebrow="PROJECT FLOW" subtitle="導入の進め方" />
              <h2 id="process-title" className={styles.heading}>
                圧縮機単体ではなく、
                <br />
                水素設備として設計する。
              </h2>
            </div>
          </Reveal>

          <div className={styles.processGrid}>
            {processSteps.map((step, index) => (
              <Reveal key={step.number} direction="up" delay={index * 70}>
                <article className={styles.processItem}>
                  <b>{step.number}</b>
                  <h3>{step.title}</h3>
                  <p>{step.text}</p>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className={styles.cta} aria-labelledby="compressor-cta-title">
        <Image
          src={asset("/assets/hydrogen-compressor/testing-scene.jpg")}
          alt=""
          fill
          sizes="100vw"
          className={styles.ctaImage}
        />
        <div className={styles.ctaOverlay} />
        <div className={`container ${styles.ctaInner}`}>
          <Reveal direction="left" className={styles.ctaCopy}>
            <h2 id="compressor-cta-title">
              水素設備の圧縮条件から、
              <br />
              事業計画を整理します。
            </h2>
            <p>
              入口圧、吐出圧、流量、日量、設置条件、保守計画まで、導入前に確認すべき条件を一緒に整理します。
            </p>
          </Reveal>
          <Reveal direction="right" className={styles.ctaActions}>
            <Button href="/contact" variant="white">
              お問い合わせ
            </Button>
            <Button href="/business" variant="cyan" className={styles.ctaOutline}>
              事業一覧へ戻る
            </Button>
          </Reveal>
        </div>
      </section>
    </>
  );
}
