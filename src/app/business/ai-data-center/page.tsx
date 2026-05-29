import type { Metadata } from "next";
import Image from "next/image";
import { Reveal } from "@/components/animation/Reveal/Reveal";
import { Button } from "@/components/ui/Button/Button";
import { SectionLabel } from "@/components/ui/SectionLabel/SectionLabel";
import styles from "./page.module.css";

export const metadata: Metadata = {
  title: "AIデータセンター事業 | 諾亜建設株式会社",
  description:
    "AI計算基盤に必要な大容量電力、再生可能エネルギー、蓄電池、EMS、冷却・運用計画を一体で検討する諾亜建設のAIデータセンター事業を紹介します。",
};

const heroMetrics = [
  { value: "35kW", label: "現行AIデータセンター ラック電力参考値" },
  { value: "100kW", label: "次世代AIデータセンター ラック電力参考値" },
  { value: "200MW級", label: "データセンター建設構想" },
  { value: "400MW級", label: "グリーン電力一体化モデル" },
];

const challengeItems = [
  {
    title: "電力密度",
    text: "AIサーバーはラック当たりの消費電力が大きく、受電容量、配電、冷却、非常用電源を同時に設計する必要があります。",
  },
  {
    title: "電力の安定性",
    text: "再エネを活用する場合でも、蓄電池とEMSで変動を吸収し、計算基盤へ安定した電力を届ける構成が重要です。",
  },
  {
    title: "運用の可視化",
    text: "発電、充放電、負荷、故障、CO2削減量をリアルタイムに把握し、設備運用を継続的に改善します。",
  },
];

const architectureItems = [
  {
    number: "01",
    title: "電源・系統接続",
    text: "大容量受電、変電設備、送電ルート、系統接続条件を整理し、AI計算基盤の前提をつくります。",
  },
  {
    number: "02",
    title: "再エネ電力",
    text: "太陽光・風力などの再生可能エネルギーを組み合わせ、データセンターの電力調達を計画します。",
  },
  {
    number: "03",
    title: "蓄電池・調整力",
    text: "BESSで出力変動を吸収し、ピークカット、バックアップ、需給調整の可能性を検討します。",
  },
  {
    number: "04",
    title: "冷却・建屋計画",
    text: "サーバー負荷と発熱量を前提に、空調・冷却設備、電源室、動線、保守性を計画します。",
  },
  {
    number: "05",
    title: "EMS・遠隔監視",
    text: "発電・蓄電・消費電力を統合監視し、遠隔操作、異常検知、運用データ分析へ接続します。",
  },
];

const emsFeatures = [
  "リアルタイム監視",
  "データ分析・予測",
  "故障診断・保守",
  "エネルギー最適化管理",
  "遠隔監視・遠隔操作",
  "省エネ・脱炭素管理",
];

const conceptModels = [
  {
    title: "川越200MWデータセンター建設構想",
    text: "AI計算基盤に必要な電力・建屋・運用設備を一体で検討するモデル。",
  },
  {
    title: "群馬データセンター工場改修",
    text: "既存施設の改修・転用を視野に入れた、データセンター整備の検討モデル。",
  },
  {
    title: "銚子400MWグリーン電力モデル",
    text: "再エネ電源、蓄電池、データセンターを組み合わせる大容量電力供給モデル。",
  },
];

const processSteps = [
  {
    number: "01",
    title: "需要整理",
    text: "GPUサーバー規模、ラック電力、冗長性、運用開始時期を整理します。",
  },
  {
    number: "02",
    title: "電力・敷地検討",
    text: "受電容量、再エネ候補、蓄電池容量、建屋条件、冷却方式を比較します。",
  },
  {
    number: "03",
    title: "統合設計",
    text: "電源、BESS、EMS、冷却、監視、保守動線を一体の計画に落とし込みます。",
  },
  {
    number: "04",
    title: "構築・運用",
    text: "施工、試運転、遠隔監視、運用改善まで継続的に支援します。",
  },
];

export default function AiDataCenterPage() {
  return (
    <>
      <section className={styles.hero} aria-labelledby="ai-dc-title">
        <div className={`container ${styles.heroInner}`}>
          <Reveal direction="left" className={styles.heroCopy}>
            <p className={styles.eyebrow}>
              AI DATA CENTER
              <span>AIデータセンター事業</span>
            </p>
            <h1 id="ai-dc-title" className={styles.heroTitle}>
              AI計算基盤を、
              <br />
              電力インフラから構築する。
            </h1>
            <p className={styles.heroLead}>
              AIデータセンターは、サーバーを並べるだけでは成立しません。
              高密度な電力、冷却、蓄電池、再エネ、EMSを一体で設計し、グリーンでスマートな計算基盤を実装します。
            </p>
            <div className={styles.heroActions}>
              <Button href="/contact">事業相談をする</Button>
              <Button href="#energy-model" variant="outline">
                統合モデルを見る
              </Button>
            </div>
          </Reveal>

          <Reveal direction="right" className={styles.heroVisualReveal}>
            <figure className={styles.heroVisual}>
              <Image
                src="/assets/ai-data-center/hero-data-center.jpg"
                alt="再生可能エネルギーと連携するAIデータセンター"
                fill
                priority
                sizes="(max-width: 960px) calc(100vw - 40px), 54vw"
                className={styles.heroImage}
              />
              <figcaption className={styles.heroCaption}>
                AIサーバー、再エネ電源、蓄電池、EMSを統合したエネルギー起点のデータセンター計画。
              </figcaption>
            </figure>
          </Reveal>
        </div>

        <div className={`container ${styles.metricStrip}`} aria-label="AIデータセンター事業の参考指標">
          {heroMetrics.map((metric) => (
            <div key={metric.value} className={styles.metricItem}>
              <b>{metric.value}</b>
              <span>{metric.label}</span>
            </div>
          ))}
        </div>
      </section>

      <section className={styles.challenge} aria-labelledby="challenge-title">
        <div className="container">
          <Reveal direction="up">
            <div className={styles.sectionHeader}>
              <SectionLabel eyebrow="POWER DENSITY" subtitle="AI計算基盤の課題" />
              <h2 id="challenge-title" className={styles.heading}>
                ラック電力の上昇が、
                <br />
                データセンター設計を変える。
              </h2>
            </div>
          </Reveal>

          <div className={styles.challengeGrid}>
            <Reveal direction="left">
              <figure className={styles.modelFigure}>
                <Image
                  src="/assets/ai-data-center/energy-model.jpg"
                  alt="AIデータセンター向けエネルギー一体化モデル"
                  fill
                  sizes="(max-width: 960px) calc(100vw - 40px), 56vw"
                  className={styles.modelImage}
                />
              </figure>
            </Reveal>

            <div className={styles.challengeList}>
              {challengeItems.map((item, index) => (
                <Reveal key={item.title} direction="up" delay={index * 70}>
                  <article className={styles.challengeItem}>
                    <span>{String(index + 1).padStart(2, "0")}</span>
                    <h3>{item.title}</h3>
                    <p>{item.text}</p>
                  </article>
                </Reveal>
              ))}
            </div>
          </div>
          <p className={styles.sourceNote}>
            ラック電力・構想規模は提供資料内の掲載値をもとに整理しています。実案件では最新仕様・系統条件・法規に合わせて個別確認します。
          </p>
        </div>
      </section>

      <section className={styles.architecture} id="energy-model" aria-labelledby="architecture-title">
        <div className={`container ${styles.architectureInner}`}>
          <Reveal direction="left" className={styles.architectureCopy}>
            <SectionLabel eyebrow="INTEGRATED ENERGY MODEL" subtitle="エネルギー一体化モデル" inverse />
            <h2 id="architecture-title" className={styles.inverseHeading}>
              再エネ、蓄電池、EMSを、
              <br />
              AI計算基盤へ直結する。
            </h2>
            <p className={styles.inverseLead}>
              データセンターの立地、受電、再エネ調達、蓄電池、冷却、遠隔監視を一体で検討。
              電力の安定性と脱炭素性を両立する構成を計画します。
            </p>
          </Reveal>

          <Reveal direction="right">
            <figure className={styles.greenFigure}>
              <Image
                src="/assets/ai-data-center/green-model.jpg"
                alt="グリーンでスマートなAI計算インフラ構想"
                fill
                sizes="(max-width: 960px) calc(100vw - 40px), 52vw"
                className={styles.greenImage}
              />
            </figure>
          </Reveal>

          <div className={styles.architectureGrid}>
            {architectureItems.map((item, index) => (
              <Reveal key={item.number} direction="up" delay={index * 60}>
                <article className={styles.architectureItem}>
                  <b>{item.number}</b>
                  <h3>{item.title}</h3>
                  <p>{item.text}</p>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className={styles.ems} aria-labelledby="ems-title">
        <div className={`container ${styles.emsGrid}`}>
          <Reveal direction="left">
            <figure className={styles.emsVisual}>
              <Image
                src="/assets/ai-data-center/ems-dashboard.png"
                alt="EMS管理画面"
                fill
                sizes="(max-width: 960px) calc(100vw - 40px), 54vw"
                className={styles.emsImage}
              />
            </figure>
          </Reveal>

          <Reveal direction="right" className={styles.emsCopy}>
            <SectionLabel eyebrow="EMS / NOAH CLOUD" subtitle="監視・制御基盤" />
            <h2 id="ems-title" className={styles.heading}>
              電力を見える化し、
              <br />
              AIで運用を最適化する。
            </h2>
            <p className={styles.lead}>
              発電設備、蓄電池、サーバー負荷、充放電、異常情報をクラウドで統合。
              分析・予測・遠隔操作により、電力コストと停止リスクを抑えながら運用します。
            </p>
            <ul className={styles.featureList} aria-label="EMSの主な機能">
              {emsFeatures.map((feature) => (
                <li key={feature}>{feature}</li>
              ))}
            </ul>
          </Reveal>
        </div>
      </section>

      <section className={styles.control} aria-labelledby="control-title">
        <div className={`container ${styles.controlGrid}`}>
          <Reveal direction="left" className={styles.controlCopy}>
            <SectionLabel eyebrow="AI CONTROL" subtitle="AI制御・安全運用" inverse />
            <h2 id="control-title" className={styles.inverseHeading}>
              多源データを集め、
              <br />
              事故と停止を先回りする。
            </h2>
            <p className={styles.inverseLead}>
              発電・蓄電・負荷・設備状態のデータを集め、予測、異常検知、保守提案へつなげます。
              AIデータセンターの価値は、建設後の運用品質で決まります。
            </p>
            <div className={styles.controlStats}>
              <div>
                <b>5min</b>
                <span>事前予警イメージ</span>
              </div>
              <div>
                <b>50ms</b>
                <span>調頻時間短縮イメージ</span>
              </div>
              <div>
                <b>3%+</b>
                <span>アルゴリズム精度向上イメージ</span>
              </div>
            </div>
          </Reveal>

          <Reveal direction="right">
            <figure className={styles.controlVisual}>
              <Image
                src="/assets/ai-data-center/ai-control-ai-ja.png"
                alt="AI制御・データ収集・安全予測の概念図"
                fill
                sizes="(max-width: 960px) calc(100vw - 40px), 44vw"
                className={styles.controlImage}
              />
            </figure>
          </Reveal>
        </div>
      </section>

      <section className={styles.concepts} aria-labelledby="concepts-title">
        <div className="container">
          <Reveal direction="up">
            <SectionLabel eyebrow="CONCEPT MODEL" subtitle="資料掲載モデル" />
            <h2 id="concepts-title" className={styles.heading}>
              建設・改修・電力供給を、
              <br />
              案件ごとに組み合わせる。
            </h2>
          </Reveal>

          <div className={styles.conceptLayout}>
            <Reveal direction="left">
              <figure className={styles.conceptImageWrap}>
                <Image
                  src="/assets/ai-data-center/renewable-ems.jpg"
                  alt="再エネ統合スマート管理システム"
                  fill
                  sizes="(max-width: 960px) calc(100vw - 40px), 54vw"
                  className={styles.conceptImage}
                />
              </figure>
            </Reveal>

            <div className={styles.conceptList}>
              {conceptModels.map((model, index) => (
                <Reveal key={model.title} direction="up" delay={index * 70}>
                  <article className={styles.conceptItem}>
                    <span>{String(index + 1).padStart(2, "0")}</span>
                    <h3>{model.title}</h3>
                    <p>{model.text}</p>
                  </article>
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className={styles.process} aria-labelledby="process-title">
        <div className="container">
          <Reveal direction="up">
            <SectionLabel eyebrow="PROJECT FLOW" subtitle="導入までの流れ" />
            <h2 id="process-title" className={styles.heading}>
              計算需要から逆算して、
              <br />
              電力と建屋を設計する。
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

      <section className={styles.cta} aria-labelledby="ai-dc-cta-title">
        <div className={`container ${styles.ctaInner}`}>
          <Reveal direction="up">
            <h2 id="ai-dc-cta-title">
              AIデータセンターの電力計画を、
              <br />
              初期構想から整理します。
            </h2>
            <p>計算需要、受電容量、再エネ、蓄電池、冷却、運用監視まで、事業化に必要な前提を一緒に具体化します。</p>
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
