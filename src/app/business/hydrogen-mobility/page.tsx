import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { isPageEnabled } from "@/lib/page-config";
import Image from "next/image";
import { Reveal } from "@/components/animation/Reveal/Reveal";
import { Button } from "@/components/ui/Button/Button";
import { SectionLabel } from "@/components/ui/SectionLabel/SectionLabel";
import styles from "./page.module.css";
import { asset } from "@/lib/asset";

export const metadata: Metadata = {
  title: "水素モビリティ事業 | 諾亜建設株式会社",
  description:
    "FCVトラックの導入、水素製造、水素ステーション、補助金・TCO検討、運用開始までを一体で支援する諾亜建設の水素モビリティ事業を紹介します。",
};

const heroMetrics = [
  { value: "500km", label: "FCEVトレーラーヘッド想定輸送半径" },
  { value: "20分", label: "資料記載の充填時間" },
  { value: "140kW", label: "実車搭載済み燃料電池製品" },
  { value: "20km/kg", label: "資料記載のFCトラック燃費" },
];

const supportSteps = [
  {
    number: "01",
    title: "車両・用途整理",
    text: "輸送距離、積載量、稼働時間、既存車両の更新計画を整理し、FCVトラックの導入条件を明確にします。",
  },
  {
    number: "02",
    title: "水素供給・ステーション計画",
    text: "水素発生装置、メタノール供給、水素ステーションの能力や設置条件を、拠点と走行ルートに合わせて検討します。",
  },
  {
    number: "03",
    title: "補助金・TCO試算",
    text: "国・自治体の制度、燃料単価、走行距離、リース条件を踏まえ、導入判断に必要な費用感を可視化します。",
  },
  {
    number: "04",
    title: "導入・運用開始",
    text: "車両調達、充填設備、ドライバー教育、点検・保守まで、商用運用へ移行するための実務を支援します。",
  },
];

const vehicleSpecs = [
  { label: "対象車両", value: "FCVトラクターヘッドを中心とした商用車" },
  { label: "想定用途", value: "石炭、鋼材、港湾などの500km圏輸送" },
  { label: "燃料電池", value: "140kW級製品を実車搭載済み" },
  { label: "参考燃費", value: "FCトラック 20km/kg" },
  { label: "充填時間", value: "20分（資料記載値）" },
  { label: "導入支援", value: "車両、補助金、ステーション、運用計画を一体で整理" },
  { label: "運用実績", value: "FCEVトレーラーヘッド900台超の納車・運営実績" },
];

const infrastructureItems = [
  {
    title: "つくる",
    text: "メタノール水素発生装置など、地域条件に合う水素製造・調達方法を比較します。",
  },
  {
    title: "貯める",
    text: "タンク、圧縮、保安距離、補給頻度を踏まえ、拠点で必要な貯蔵容量を検討します。",
  },
  {
    title: "充填する",
    text: "大型車の稼働計画に合わせて、充填能力、動線、待機時間、安全運用を設計します。",
  },
  {
    title: "走らせる",
    text: "走行データ、燃料費、保守履歴を管理し、商用運用として継続できる状態に整えます。",
  },
];

const operationScenes = [
  {
    title: "幹線・港湾輸送",
    text: "長距離・中距離の輸送半径を持つトレーラーヘッドを中心に、充填拠点と走行ルートをセットで検討します。",
    image:asset("/assets/hydrogen-mobility/route-operation.jpg"),
    alt: "寒冷地の道路を走行するFCVトラック",
  },
  {
    title: "建設・構内輸送",
    text: "工事現場、港湾、鉱山、構内物流など、決まった運行範囲で稼働する車両から導入効果を見極めます。",
    image:asset("/assets/hydrogen-mobility/construction-truck.jpg"),
    alt: "建設現場で稼働する新エネルギー商用車",
  },
  {
    title: "フリート導入",
    text: "複数台導入では、補給順序、待機スペース、点検体制、ドライバー教育まで運用設計が重要になります。",
    image:asset("/assets/hydrogen-mobility/fleet-lineup.jpg"),
    alt: "複数台並ぶ新エネルギー商用車",
  },
];

const technologyStats = [
  { value: "140kW", label: "実車搭載済み燃料電池製品" },
  { value: "5.3kW/L", label: "金属板双極板スタックのパワー密度" },
  { value: "500人規模", label: "新エネルギー・知能ネットワーク化チーム" },
  { value: "4領域", label: "知能化・電動化・ネットワーク化・軽量化" },
];

const proofStats = [
  { value: "900台超", label: "FCEVトレーラーヘッド納車実績" },
  { value: "4,000万km", label: "トレーラーヘッド総走行距離" },
  { value: "200車種超", label: "商用車運用シーン対応車種" },
];

const processSteps = [
  {
    number: "01",
    title: "ヒアリング",
    text: "保有車両、走行距離、積載量、拠点、更新時期を整理します。",
  },
  {
    number: "02",
    title: "導入モデル設計",
    text: "車両、充填方式、補助金、リース、保守条件を組み合わせます。",
  },
  {
    number: "03",
    title: "実行計画",
    text: "調達、設備、許認可、安全教育、運用開始日程を具体化します。",
  },
  {
    number: "04",
    title: "運用改善",
    text: "走行データと燃料費を確認し、台数拡大や充填能力の増強を検討します。",
  },
];

export default function HydrogenMobilityPage() {
  if (!isPageEnabled("/business/hydrogen-mobility")) notFound();

  return (
    <>
      <section className={styles.hero} aria-labelledby="hydrogen-title">
        <div className={`container ${styles.heroInner}`}>
          <Reveal direction="left" className={styles.heroCopy}>
            <p className={styles.eyebrow}>
              HYDROGEN MOBILITY
              <span>水素モビリティ事業</span>
            </p>
            <h1 id="hydrogen-title" className={styles.heroTitle}>
              水素商用車の導入を、
              <br />
              運用から設計する。
            </h1>
            <p className={styles.heroLead}>
              FCVトラックは、車両だけでは導入できません。走行ルート、水素製造、水素ステーション、
              補助金、燃料費、保守体制をひとつの事業計画として整理し、
              商用フリートの脱炭素化を現実的に進めます。
            </p>
            <div className={styles.heroActions}>
              <Button href="/contact">導入相談をする</Button>
              <Button href="#vehicle" variant="outline">
                車両仕様を見る
              </Button>
            </div>
          </Reveal>

          <Reveal direction="right" className={styles.heroVisualReveal}>
            <figure className={styles.heroVisual}>
              <Image
                src={asset("/assets/hydrogen-mobility/hero-fcv-truck.jpg")}
                alt="FCVトラック"
                fill
                priority
                sizes="(max-width: 960px) calc(100vw - 40px), 54vw"
                className={styles.heroImage}
              />
              <figcaption className={styles.heroCaption}>
                FCVトラック、水素製造、水素ステーション、補助金・運用コストを一体で検討。
              </figcaption>
            </figure>
          </Reveal>
        </div>

        <div className={`container ${styles.metricStrip}`} aria-label="FCVトラックの参考仕様">
          {heroMetrics.map((metric) => (
            <div key={metric.value} className={styles.metricItem}>
              <b>{metric.value}</b>
              <span>{metric.label}</span>
            </div>
          ))}
        </div>
      </section>

      <section className={styles.program} aria-labelledby="program-title">
        <div className="container">
          <Reveal direction="up">
            <div className={styles.sectionHeader}>
              <SectionLabel eyebrow="INTRODUCTION PROGRAM" subtitle="導入支援プログラム" />
              <h2 id="program-title" className={styles.heading}>
                車両を買う前に、
                <br />
                運用条件を固める。
              </h2>
            </div>
          </Reveal>

          <div className={styles.programLayout}>
            <Reveal direction="left">
              <figure className={styles.stationPhoto}>
                <Image
                  src={asset("/assets/hydrogen-mobility/station-night.jpg")}
                  alt="水素ステーション"
                  fill
                  sizes="(max-width: 960px) calc(100vw - 40px), 46vw"
                  className={styles.stationImage}
                />
              </figure>
            </Reveal>

            <div className={styles.supportRail}>
              {supportSteps.map((step, index) => (
                <Reveal key={step.number} direction="up" delay={index * 70}>
                  <article className={styles.supportStep}>
                    <span>{step.number}</span>
                    <h3>{step.title}</h3>
                    <p>{step.text}</p>
                  </article>
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className={styles.vehicle} id="vehicle" aria-labelledby="vehicle-title">
        <div className={`container ${styles.vehicleInner}`}>
          <Reveal direction="left" className={styles.vehicleCopy}>
            <SectionLabel eyebrow="FCV TRUCK" subtitle="対象車両" inverse />
            <h2 id="vehicle-title" className={styles.inverseHeading}>
              大型商用車を、
              <br />
              水素へ置き換える。
            </h2>
            <p className={styles.inverseLead}>
              トレーラーヘッドを中心に、500km圏の輸送半径、短時間充填、長時間稼働が求められる商用用途での導入を想定。
              資料掲載値を起点に、国内運用条件、法規、補助金制度に合わせて導入条件を整理します。
            </p>
          </Reveal>

          <Reveal direction="right">
            <div className={styles.vehicleSheet}>
              <figure className={styles.vehicleImageWrap}>
                <Image
                  src={asset("/assets/hydrogen-mobility/truck-front.jpg")}
                  alt="FCVトラックの正面"
                  fill
                  sizes="(max-width: 960px) calc(100vw - 40px), 54vw"
                  className={styles.vehicleImage}
                />
              </figure>
              <table className={styles.specTable} aria-label="FCVトラック参考仕様">
                <tbody>
                  {vehicleSpecs.map((row) => (
                    <tr key={row.label}>
                      <th>{row.label}</th>
                      <td>{row.value}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </Reveal>
        </div>
      </section>

      <section className={styles.infrastructure} aria-labelledby="infrastructure-title">
        <div className="container">
          <Reveal direction="up">
            <div className={styles.sectionHeader}>
              <SectionLabel eyebrow="HYDROGEN INFRASTRUCTURE" subtitle="水素供給・充填インフラ" />
              <h2 id="infrastructure-title" className={styles.heading}>
                つくる、貯める、充填する。
                <br />
                車両台数から逆算する。
              </h2>
            </div>
          </Reveal>

          <div className={styles.infrastructureGrid}>
            <Reveal direction="left">
              <figure className={styles.systemFigure}>
                <Image
                  src={asset("/assets/hydrogen-mobility/station-system.png")}
                  alt="メタノール水素発生装置の構成図"
                  fill
                  sizes="(max-width: 960px) calc(100vw - 40px), 54vw"
                  className={styles.systemImage}
                />
              </figure>
            </Reveal>

            <div className={styles.infrastructureList}>
              {infrastructureItems.map((item, index) => (
                <Reveal key={item.title} direction="up" delay={index * 70}>
                  <article className={styles.infrastructureItem}>
                    <b>{item.title}</b>
                    <p>{item.text}</p>
                  </article>
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className={styles.operation} aria-labelledby="operation-title">
        <div className="container">
          <Reveal direction="up">
            <div className={styles.operationHeader}>
              <SectionLabel eyebrow="OPERATION SCENE" subtitle="想定運用シーン" />
              <h2 id="operation-title" className={styles.heading}>
                まずは、走行ルートが読める
                <br />
                商用フリートから。
              </h2>
            </div>
          </Reveal>

          <div className={styles.sceneGrid}>
            {operationScenes.map((scene, index) => (
              <Reveal key={scene.title} direction="up" delay={index * 80}>
                <article className={styles.sceneCard}>
                  <figure>
                    <Image
                      src={scene.image}
                      alt={scene.alt}
                      fill
                      sizes="(max-width: 760px) calc(100vw - 40px), 32vw"
                      className={styles.sceneImage}
                    />
                  </figure>
                  <div>
                    <span>{String(index + 1).padStart(2, "0")}</span>
                    <h3>{scene.title}</h3>
                    <p>{scene.text}</p>
                  </div>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className={styles.technology} aria-labelledby="technology-title">
        <div className={`container ${styles.technologyGrid}`}>
          <Reveal direction="left" className={styles.technologyCopy}>
            <SectionLabel eyebrow="TECHNOLOGY" subtitle="燃料電池・車両技術" inverse />
            <h2 id="technology-title" className={styles.inverseHeading}>
              燃料電池、制御、車両設計を
              <br />
              商用運用へつなぐ。
            </h2>
            <p className={styles.inverseLead}>
              メーカー資料では、140kW級燃料電池システム、車両制御、ネットワーク化、軽量化を組み合わせた商用車プラットフォームを展開。
              NOAHは水素製造・水素ステーション・車両運用を含む国内導入時の条件整理と事業化支援を担います。
            </p>
            <div className={styles.techStats}>
              {technologyStats.map((stat) => (
                <div key={stat.value}>
                  <b>{stat.value}</b>
                  <span>{stat.label}</span>
                </div>
              ))}
            </div>
          </Reveal>

          <Reveal direction="right">
            <div className={styles.techVisuals}>
              <figure>
                <Image
                  src={asset("/assets/hydrogen-mobility/fuelcell-stack.jpg")}
                  alt="燃料電池システム"
                  fill
                  sizes="(max-width: 960px) calc(100vw - 40px), 42vw"
                  className={styles.techImage}
                />
              </figure>
              <figure>
                <Image
                  src={asset("/assets/hydrogen-mobility/truck-xray.jpg")}
                  alt="FCVトラックのシステム配置"
                  fill
                  sizes="(max-width: 960px) calc(100vw - 40px), 42vw"
                  className={styles.techImage}
                />
              </figure>
            </div>
          </Reveal>
        </div>
      </section>

      <section className={styles.proof} aria-labelledby="proof-title">
        <div className="container">
          <Reveal direction="up">
            <SectionLabel eyebrow="PARTNER MATERIALS" subtitle="資料掲載実績" />
            <h2 id="proof-title" className={styles.heading}>
              導入判断に必要な根拠を、
              <br />
              数字と運用実績で確認する。
            </h2>
          </Reveal>

          <div className={styles.proofGrid}>
            {proofStats.map((stat, index) => (
              <Reveal key={stat.value} direction="up" delay={index * 70}>
                <div className={styles.proofStat}>
                  <b>{stat.value}</b>
                  <span>{stat.label}</span>
                </div>
              </Reveal>
            ))}
          </div>
          <p className={styles.note}>
            メーカー・パートナー情報は導入条件により変動します。国内導入時は、最新仕様、法規、補助金制度、運用条件を個別に確認します。
          </p>
        </div>
      </section>

      <section className={styles.process} aria-labelledby="process-title">
        <div className="container">
          <Reveal direction="up">
            <SectionLabel eyebrow="PROJECT FLOW" subtitle="導入までの流れ" />
            <h2 id="process-title" className={styles.heading}>
              1台の検討から、
              <br />
              フリート展開まで支援。
            </h2>
          </Reveal>

          <div className={styles.processList}>
            {processSteps.map((step, index) => (
              <Reveal key={step.number} direction="up" delay={index * 70}>
                <article className={styles.processStep}>
                  <b>{step.number}</b>
                  <h3>{step.title}</h3>
                  <p>{step.text}</p>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className={styles.cta} aria-labelledby="hydrogen-cta-title">
        <div className={`container ${styles.ctaInner}`}>
          <Reveal direction="up">
            <h2 id="hydrogen-cta-title">
              水素商用車の導入条件を、
              <br />
              一緒に整理しませんか。
            </h2>
            <p>車両更新、走行距離、拠点、補助金、充填インフラの前提をまとめ、現実的な導入モデルを検討します。</p>
            <div className={styles.ctaActions}>
              <Button href="/contact" variant="white">
                お問い合わせ
              </Button>
              <Button href="/business" variant="outline" className={styles.ctaOutline}>
                事業一覧へ戻る
              </Button>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
