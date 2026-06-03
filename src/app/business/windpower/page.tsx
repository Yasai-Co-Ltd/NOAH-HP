import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { isPageEnabled } from "@/lib/page-config";
import Image from "next/image";
import { Reveal } from "@/components/animation/Reveal/Reveal";
import { Button } from "@/components/ui/Button/Button";
import { SectionLabel } from "@/components/ui/SectionLabel/SectionLabel";
import styles from "./page.module.css";

export const metadata: Metadata = {
  title: "風力発電事業 | 諾亜建設株式会社",
  description:
    "風況調査、事業性評価、系統連系、許認可、設計・調達・施工、O&Mまで、諾亜建設の風力発電事業を紹介します。",
};

const heroMetrics = [
  { value: "2.5MW級", label: "想定風車モデル" },
  { value: "45MW", label: "岩屋計画の設備容量案" },
  { value: "7.2m/s", label: "平均風速参考値" },
  { value: "2027年以降", label: "運転開始検討" },
];

const projectSpecs = [
  { label: "所在地", value: "青森県下北郡東通村大字岩屋" },
  { label: "計画種別", value: "既設小型風車のリプレース計画" },
  { label: "想定機種", value: "2.5MW級 風力発電機" },
  { label: "計画基数", value: "18基（計画想定）" },
  { label: "計画容量", value: "45MW（計画想定）" },
  { label: "状況", value: "検討中・一次調査完了" },
];

const technologyItems = [
  {
    title: "高効率",
    text: "広い調整範囲と直駆動方式により、従来機比5%の効率向上を狙います。",
  },
  {
    title: "高信頼性",
    text: "部品点数を抑え、システム誤差を回避しながら、98%以上の稼働率を目指します。",
  },
  {
    title: "低コスト",
    text: "ギアシステムの保守負担を減らし、総コスト約20%低減の考え方を取り入れます。",
  },
  {
    title: "捕風能力",
    text: "大型ローター、高塔柱、カスタムブレードで、低風速・複雑地形でも出力を引き出します。",
  },
  {
    title: "スマート制御",
    text: "風況を感知して事前に調整し、安全性を確保しながら発電効率を最大化します。",
  },
  {
    title: "IoT運用",
    text: "風車をIoT端末化し、データ連携と予知保全により、予防型の管理へつなげます。",
  },
];

const replacementScenes = [
  {
    title: "既設小型風車",
    text: "既存設備の稼働状況、地形、道路、系統条件を確認します。",
    image: "/assets/windpower/02_existing_small_wind_turbines.jpg",
    alt: "既設小型風車のある山間部",
  },
  {
    title: "リプレース後",
    text: "大型化による発電量向上と、配置の最適化を検討します。",
    image: "/assets/windpower/03_replacement_wind_farm_image.jpg",
    alt: "大型風車へリプレースした風力発電所のイメージ",
  },
  {
    title: "大型部材の搬入",
    text: "ブレード輸送、道路幅、曲線半径、仮設計画まで事前に整理します。",
    image: "/assets/windpower/04_blade_transport_image.jpg",
    alt: "大型ブレードを輸送するトラック",
  },
  {
    title: "変電・連系設備",
    text: "発電所内設備、変電設備、系統連系の条件をまとめます。",
    image: "/assets/windpower/05_substation_facility_image.jpg",
    alt: "風力発電所に併設される変電設備",
  },
];

const projectFlow = [
  {
    number: "01",
    title: "計画・立項",
    text: "候補地選定、土地権利、地域との初期協議を整理します。",
  },
  {
    number: "02",
    title: "初期調査",
    text: "風況、地形・地質、環境条件を現地で確認します。",
  },
  {
    number: "03",
    title: "事業性評価",
    text: "発電量予測、コスト、投資回収の見通しを検討します。",
  },
  {
    number: "04",
    title: "詳細評価",
    text: "精密風況評価、環境影響評価、地質調査を進めます。",
  },
  {
    number: "05",
    title: "系統連系",
    text: "電力会社への連系申込と技術条件の調整を行います。",
  },
  {
    number: "06",
    title: "認定・許認可",
    text: "FIT/FIP認定や各種法令に基づく許可取得を支援します。",
  },
  {
    number: "07",
    title: "設計・建設",
    text: "詳細設計、設備調達、施工、据付、試運転へ進めます。",
  },
  {
    number: "08",
    title: "運転・O&M",
    text: "COD後の運営、保守、予防管理、改善を継続します。",
  },
];

export default function WindPowerPage() {
  if (!isPageEnabled("/business/windpower")) notFound();

  return (
    <>
      <section className={styles.hero} aria-labelledby="wind-title">
        <Image
          src="/assets/windpower/01_main_wind_farm_panorama.jpg"
          alt=""
          fill
          priority
          sizes="100vw"
          className={styles.heroBackground}
        />
        <div className={styles.heroOverlay} />
        <div className={`container ${styles.heroInner}`}>
          <Reveal direction="left" className={styles.heroCopy}>
            <p className={styles.eyebrow}>
              WIND POWER
              <span>風力発電事業</span>
            </p>
            <h1 id="wind-title" className={styles.heroTitle}>
              一つひとつの風を、
              <br />
              クリーンエネルギーに。
            </h1>
            <p className={styles.heroLead}>
              風況調査、事業性評価、系統連系、許認可、設計・調達・施工、O&Mまで。
              NOAHは地域の風を読み、発電所として長く運用できる計画へ落とし込みます。
            </p>
            <div className={styles.heroActions}>
              <Button href="/contact" variant="white">
                事業相談をする
              </Button>
              <Button href="#project" variant="outline" className={styles.darkButton}>
                計画概要を見る
              </Button>
            </div>
          </Reveal>
        </div>
        <div className={`container ${styles.metricBoard}`} aria-label="風力発電事業の参考指標">
          {heroMetrics.map((metric) => (
            <div key={metric.value} className={styles.metricItem}>
              <b>{metric.value}</b>
              <span>{metric.label}</span>
            </div>
          ))}
        </div>
      </section>

      <section className={styles.project} id="project" aria-labelledby="project-title">
        <div className={`container ${styles.projectGrid}`}>
          <Reveal direction="left" className={styles.projectCopy}>
            <SectionLabel eyebrow="IWAYA WIND FARM" subtitle="岩屋ウインドファーム計画" />
            <h2 id="project-title" className={styles.heading}>
              既設小型風車を、
              <br />
              次世代の発電所へ更新する。
            </h2>
            <p className={styles.lead}>
              青森県東通村の風況と既存インフラを活かし、既設小型風力発電設備を2.5MW級風車へリプレースする計画です。
              発電設備、搬入動線、変電設備、地域との調整をひとつの計画として整理します。
            </p>
            <dl className={styles.projectSpecs}>
              {projectSpecs.map((spec) => (
                <div key={spec.label}>
                  <dt>{spec.label}</dt>
                  <dd>{spec.value}</dd>
                </div>
              ))}
            </dl>
            <p className={styles.note}>
              計画値は検討段階の目安です。最終仕様は調査、許認可、系統条件により変動します。
            </p>
          </Reveal>

          <Reveal direction="right" className={styles.projectVisualReveal}>
            <figure className={styles.projectVisual}>
              <Image
                src="/assets/windpower/iwaya-project-board.png"
                alt="青森県東通村 岩屋ウインドファームの計画概要"
                fill
                sizes="(max-width: 960px) calc(100vw - 40px), 56vw"
                className={styles.projectImage}
              />
            </figure>
          </Reveal>
        </div>
      </section>

      <section className={styles.technology} aria-labelledby="technology-title">
        <div className={`container ${styles.technologyInner}`}>
          <Reveal direction="left" className={styles.technologyCopy}>
            <SectionLabel eyebrow="TECHNOLOGY" subtitle="風車技術の特徴" inverse />
            <h2 id="technology-title" className={styles.inverseHeading}>
              低風速・複雑地形でも、
              <br />
              風を逃さない設計へ。
            </h2>
            <p className={styles.inverseLead}>
              大型ローター、高塔柱、直駆動方式、スマート制御、IoT運用を組み合わせ、
              発電効率と保守性の両面から事業価値を高めます。
            </p>
          </Reveal>

          <div className={styles.technologyGrid}>
            {technologyItems.map((item, index) => (
              <Reveal key={item.title} direction="up" delay={index * 55}>
                <article className={styles.technologyItem}>
                  <span>{String(index + 1).padStart(2, "0")}</span>
                  <h3>{item.title}</h3>
                  <p>{item.text}</p>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className={styles.replacement} aria-labelledby="replacement-title">
        <div className="container">
          <Reveal direction="up">
            <div className={styles.sectionHeader}>
              <div>
                <SectionLabel eyebrow="REPLACEMENT SCOPE" subtitle="リプレース計画の視点" />
                <h2 id="replacement-title" className={styles.heading}>
                  発電機だけでなく、
                  <br />
                  現場全体を更新する。
                </h2>
              </div>
              <p className={styles.sectionLead}>
                既設風車の更新では、機種選定だけでなく、搬入、造成、送変電、保守動線までが成否を左右します。
                風力発電所を長く運用できる状態へ整えます。
              </p>
            </div>
          </Reveal>

          <div className={styles.sceneGrid}>
            {replacementScenes.map((scene, index) => (
              <Reveal
                key={scene.title}
                direction="up"
                delay={index * 70}
                className={styles.sceneReveal}
              >
                <article className={styles.sceneCard}>
                  <div className={styles.sceneImageWrap}>
                    <Image
                      src={scene.image}
                      alt={scene.alt}
                      fill
                      sizes="(max-width: 900px) calc(100vw - 40px), 25vw"
                      className={styles.sceneImage}
                    />
                  </div>
                  <div className={styles.sceneBody}>
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

      <section className={styles.flow} aria-labelledby="flow-title">
        <div className="container">
          <Reveal direction="up">
            <div className={styles.flowHeader}>
              <SectionLabel eyebrow="PROJECT FLOW" subtitle="風力発電プロジェクトの流れ" />
              <h2 id="flow-title" className={styles.heading}>
                構想から商業運転まで、
                <br />
                段階ごとに不確実性を減らす。
              </h2>
            </div>
          </Reveal>

          <ol className={styles.flowList}>
            {projectFlow.map((step, index) => (
              <Reveal
                key={step.number}
                as="li"
                direction="up"
                delay={index * 45}
                className={styles.flowItem}
              >
                <b>{step.number}</b>
                <h3>{step.title}</h3>
                <p>{step.text}</p>
              </Reveal>
            ))}
          </ol>
        </div>
      </section>

      <section className={styles.cta} aria-labelledby="wind-cta-title">
        <Image
          src="/assets/windpower/01_main_wind_farm_panorama.jpg"
          alt=""
          fill
          sizes="100vw"
          className={styles.ctaImage}
        />
        <div className={styles.ctaOverlay} />
        <div className={`container ${styles.ctaInner}`}>
          <Reveal direction="up">
            <p className={styles.ctaEyebrow}>WIND PROJECT CONSULTING</p>
            <h2 id="wind-cta-title" className={styles.ctaTitle}>
              風力発電・リプレース計画のご相談はこちら
            </h2>
            <p className={styles.ctaLead}>
              候補地、既存設備、系統条件、搬入条件、地域調整の初期整理からご相談ください。
            </p>
            <div className={styles.ctaActions}>
              <Button href="/contact" variant="white">
                お問い合わせ
              </Button>
              <Button href="/business" variant="outline" className={styles.darkButton}>
                事業一覧へ戻る
              </Button>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
