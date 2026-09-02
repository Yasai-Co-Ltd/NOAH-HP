import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { isPageEnabled } from "@/lib/page-config";
import Image from "next/image";
import { Reveal } from "@/components/animation/Reveal/Reveal";
import { AiImageNote } from "@/components/ui/AiImageNote/AiImageNote";
import { Button } from "@/components/ui/Button/Button";
import { SectionLabel } from "@/components/ui/SectionLabel/SectionLabel";
import styles from "./page.module.css";
import { asset } from "@/lib/asset";

export const metadata: Metadata = {
  title: "風力発電事業 | 諾亜建設株式会社",
  description:
    "風況調査、事業性評価、系統連系、許認可、設計・調達・施工、O&Mまで、既設風車のリプレースを含む諾亜建設の風力発電事業を紹介します。",
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

const technologyGroups = [
  {
    number: "01",
    title: "発電性能",
    subtitle: "高効率・捕風能力",
    text: "大型ローター、高塔柱、カスタムブレードと直駆動方式を組み合わせ、低風速・複雑地形でも風を捉えて発電量を引き出します。",
  },
  {
    number: "02",
    title: "信頼性",
    subtitle: "高信頼性・低コスト",
    text: "部品点数とギアシステムの保守負担を抑え、安定稼働とライフサイクルコストの最適化を両立します。",
  },
  {
    number: "03",
    title: "運用高度化",
    subtitle: "スマート制御・IoT運用",
    text: "風況と設備状態を継続的に把握し、制御最適化と予知保全によって発電ロスと停止時間の低減につなげます。",
  },
];

const airborneMechanism = [
  {
    title: "上空へ展開",
    text: "浮力を利用した飛行船型の機体を係留し、地形や建物の影響を受けにくい上空の風へアクセスします。",
  },
  {
    title: "空中で発電",
    text: "機体の風路に配置された風車で風力を電力へ変換し、高高度の風力資源を活用します。",
  },
  {
    title: "地上へ送電",
    text: "係留・送電システムを通じて地上設備と接続し、制御、回収、安全管理を一体で行います。",
  },
];

const replacementScenes = [
  {
    title: "既設小型風車",
    text: "既存設備の稼働状況、地形、道路、系統条件を確認します。",
    image:asset("/assets/windpower/02_existing_small_wind_turbines.jpg"),
    alt: "既設小型風車のある山間部",
  },
  {
    title: "リプレース後",
    text: "大型化による発電量向上と、配置の最適化を検討します。",
    image:asset("/assets/windpower/03_replacement_wind_farm_image.jpg"),
    alt: "大型風車へリプレースした風力発電所のイメージ",
  },
  {
    title: "大型部材の搬入",
    text: "ブレード輸送、道路幅、曲線半径、仮設計画まで事前に整理します。",
    image:asset("/assets/windpower/04_blade_transport_image.jpg"),
    alt: "大型ブレードを輸送するトラック",
  },
  {
    title: "変電・連系設備",
    text: "発電所内設備、変電設備、系統連系の条件をまとめます。",
    image:asset("/assets/windpower/05_substation_facility_image.jpg"),
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

const flowPhases = [
  {
    code: "PHASE A",
    title: "調査・構想",
    steps: projectFlow.slice(0, 2),
  },
  {
    code: "PHASE B",
    title: "事業性評価",
    steps: projectFlow.slice(2, 4),
  },
  {
    code: "PHASE C",
    title: "系統・許認可",
    steps: projectFlow.slice(4, 6),
  },
  {
    code: "PHASE D",
    title: "設計・運用",
    steps: projectFlow.slice(6, 8),
  },
];

/**
 * 空中発電所セクションの表示フラグ。
 * 会社概要2026年版に存在しないコンセプトのため一旦非表示。再表示の可能性あり。
 */
const SHOW_AIRBORNE_POWER = false;

export default function WindPowerPage() {
  if (!isPageEnabled("/business/windpower")) notFound();

  return (
    <>
      <section className={styles.hero} aria-labelledby="wind-title">
        <Image
          src={asset("/assets/windpower/01_main_wind_farm_panorama.jpg")}
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
              <Button href="#project" variant="cyan" className={styles.darkButton}>
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
                src={asset("/assets/windpower/iwaya-project-board.png")}
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
          <Reveal direction="up">
            <div className={styles.technologyHeader}>
              <div>
                <SectionLabel eyebrow="TECHNOLOGY" subtitle="風車技術の特徴" inverse />
                <h2 id="technology-title" className={styles.inverseHeading}>
                  風を捉え、
                  <br />
                  止めずに運用する。
                </h2>
              </div>
              <p className={styles.inverseLead}>
                大型ローター、高塔柱、直駆動方式、スマート制御、IoT運用を組み合わせ、
                発電性能、信頼性、運用高度化の3つの視点から事業価値を高めます。
              </p>
            </div>
          </Reveal>

          <div className={styles.technologyBody}>
            <Reveal direction="left">
              <figure className={styles.technologyVisual}>
                <Image
                  src={asset("/assets/windpower/technology-turbine-front.png")}
                  alt="山間の風力発電所に設置された大型風車のローターハブ"
                  fill
                  sizes="(max-width: 960px) calc(100vw - 40px), 42vw"
                  className={styles.technologyImage}
                />
              </figure>
            </Reveal>

            <ul className={styles.technologyList}>
              {technologyGroups.map((item, index) => (
                <Reveal
                  key={item.title}
                  as="li"
                  direction="up"
                  delay={index * 70}
                  className={styles.technologyItem}
                >
                  <span className={styles.technologyNumber}>{item.number}</span>
                  <div className={styles.technologyItemBody}>
                    <h3>{item.title}</h3>
                    <b>{item.subtitle}</b>
                    <p>{item.text}</p>
                  </div>
                </Reveal>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {SHOW_AIRBORNE_POWER && (
      <section className={styles.airborne} id="airborne-power" aria-labelledby="airborne-title">
        <div className={`container ${styles.airborneInner}`}>
          <Reveal direction="left" className={styles.airborneVisualReveal}>
            <figure className={styles.airborneVisual}>
              <Image
                src={asset("/assets/airborne-power-noah.png")}
                alt="NOAHロゴが入った飛行船型の空中風力発電システムのコンセプトイメージ"
                fill
                sizes="(max-width: 960px) calc(100vw - 40px), 54vw"
                className={styles.airborneImage}
              />
              <AiImageNote />
              <figcaption>飛行船型空中風力発電システムのコンセプトイメージ</figcaption>
            </figure>
          </Reveal>

          <Reveal direction="right" className={styles.airborneCopy}>
            <SectionLabel eyebrow="AIRBORNE WIND ENERGY" subtitle="空中発電所" />
            <p className={styles.airborneKicker}>NEXT-GENERATION WIND</p>
            <h2 id="airborne-title" className={styles.heading}>
              地上だけでなく、
              <br />
              空の風もエネルギーへ。
            </h2>
            <p className={styles.airborneLead}>
              空中発電所は、飛行船型の発電ユニットを上空へ係留し、
              地表より強く安定した風を活用する空中風力発電システムです。
              従来の風力発電を補完する、新しい発電インフラとして導入可能性を検討しています。
            </p>

            <ul className={styles.airborneSteps}>
              {airborneMechanism.map((item) => (
                <li key={item.title}>
                  <div>
                    <h3>{item.title}</h3>
                    <p>{item.text}</p>
                  </div>
                </li>
              ))}
            </ul>
          </Reveal>
        </div>
      </section>
      )}

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
              <div>
                <SectionLabel eyebrow="PROJECT FLOW" subtitle="風力発電プロジェクトの流れ" />
                <h2 id="flow-title" className={styles.heading}>
                  構想から商業運転まで、
                  <br />
                  判断の節目を見える化。
                </h2>
              </div>
              <p className={styles.sectionLead}>
                調査、事業性評価、系統・許認可、設計・運用の4フェーズで、
                次に進むための条件とリスクを段階的に整理します。
              </p>
            </div>
          </Reveal>

          <ol className={styles.flowPhases}>
            {flowPhases.map((phase, phaseIndex) => (
              <Reveal
                key={phase.code}
                as="li"
                direction="up"
                delay={phaseIndex * 70}
                className={styles.flowPhase}
              >
                <header className={styles.flowPhaseHeader}>
                  <span>{phase.code}</span>
                  <h3>{phase.title}</h3>
                </header>
                <ol className={styles.flowSteps}>
                  {phase.steps.map((step) => (
                    <li key={step.number} className={styles.flowItem}>
                      <b>{step.number}</b>
                      <div>
                        <h4>{step.title}</h4>
                        <p>{step.text}</p>
                      </div>
                    </li>
                  ))}
                </ol>
              </Reveal>
            ))}
          </ol>
        </div>
      </section>

      <section className={styles.cta} aria-labelledby="wind-cta-title">
        <Image
          src={asset("/assets/windpower/01_main_wind_farm_panorama.jpg")}
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
              <Button href="/business" variant="cyan" className={styles.darkButton}>
                事業一覧へ戻る
              </Button>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
