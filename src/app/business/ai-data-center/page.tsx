import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { isPageEnabled } from "@/lib/page-config";
import Image from "next/image";
import { Reveal } from "@/components/animation/Reveal/Reveal";
import { AiImageNote } from "@/components/ui/AiImageNote/AiImageNote";
import { Button } from "@/components/ui/Button/Button";
import { JcStarNotice } from "@/components/ui/JcStarNotice/JcStarNotice";
import { SectionLabel } from "@/components/ui/SectionLabel/SectionLabel";
import styles from "./page.module.css";
import { asset } from "@/lib/asset";

export const metadata: Metadata = {
  title: "AIデータセンター事業 | 諾亜建設株式会社",
  description:
    "川越市、和歌山県、千葉県、群馬県で検討を進めるAIデータセンター計画と、電力・蓄電池・EMS・冷却を一体で整理する諾亜建設の取り組みを紹介します。",
};

const heroMetrics = [
  { value: "4エリア", label: "建設計画・候補地を整理中" },
  { value: "約23,000㎡", label: "和歌山市金谷 データセンター用地計画" },
  { value: "約20万坪", label: "群馬・赤城事業所 場内規模" },
  { value: "2026-2029", label: "和歌山県計画 工事期間予定" },
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

const projectSites = [
  {
    status: "条件整理中",
    area: "埼玉県 川越市",
    title: "首都圏西側の計算需要を見据えた計画候補",
    image: "/assets/ai-data-center/project-kawagoe.png",
    isAiImage: true,
    alt: "川越市周辺を想定したAIデータセンター計画イメージ",
    text: "詳細条件の整理後、受電条件、敷地条件、冷却・運用計画を確認しながら、AIデータセンターとしての成立条件を検討します。",
    facts: ["詳細条件整理中", "電力・用地条件を確認予定"],
  },
  {
    status: "計画確認済",
    area: "和歌山県 和歌山市金谷",
    title: "蓄電池とデータセンターを一体で整備する計画",
    image: "/assets/ai-data-center/project-wakayama-kanaya-source.jpg",
    isAiImage: false,
    alt: "和歌山市金谷の開発地区を示す衛星図",
    text: "再生可能エネルギーの安定供給と情報インフラの整備を目的に、蓄電池設備用地とデータセンター用地を同時に確保する計画です。",
    facts: ["データセンター用地：約23,000㎡", "工事期間：2026年4月-2029年3月予定", "関西空港から車で45分、JR和歌山駅から20分"],
  },
  {
    status: "条件整理中",
    area: "千葉県",
    title: "首都圏・湾岸エリアの電力需要を見据えた計画候補",
    image: "/assets/ai-data-center/project-chiba.png",
    isAiImage: true,
    alt: "千葉県湾岸エリアを想定したAIデータセンター計画イメージ",
    text: "詳細条件の整理後、再エネ電源、系統接続、蓄電池、運用監視の組み合わせを確認し、掲載情報を更新します。",
    facts: ["詳細条件整理中", "再エネ・系統条件を確認予定"],
  },
  {
    status: "計画確認済",
    area: "群馬県 前橋市 赤城事業所",
    title: "既存工場・大規模用地を活用する計画候補",
    image: "/assets/ai-data-center/project-gunma-akagi-source.jpg",
    isAiImage: false,
    alt: "群馬県前橋市赤城事業所の空撮写真",
    text: "Sanden Forest・赤城事業所の土地・建物条件を確認。既存建物、未利用地、山林を含む大規模敷地の活用可能性を検討します。",
    facts: ["場内：687,557㎡（約20万坪）", "建物合計：21棟・120,110.42㎡", "東京から車約140km、電車約2時間"],
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
  if (!isPageEnabled("/business/ai-data-center")) notFound();

  return (
    <>
      <section className={styles.hero} aria-labelledby="ai-dc-title">
        <Image
          src={asset("/assets/ai-data-center/hero-data-center.jpg")}
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
              AI DATA CENTER
              <span>AIデータセンター事業</span>
            </p>
            <h1 id="ai-dc-title" className={styles.heroTitle}>
              AI計算基盤を、
              <br />
              電力インフラから構築する。
            </h1>
            <p className={styles.heroLead}>
              現在、川越市、和歌山県、千葉県、群馬県を中心に、AIデータセンターの建設計画・候補地を整理しています。
              高密度な電力、冷却、蓄電池、再エネ、EMSを一体で検討し、計算基盤を支えるインフラから事業化を進めます。
            </p>
            <div className={styles.heroActions}>
              <Button href="/contact" variant="white">
                事業相談をする
              </Button>
              <Button href="#energy-model" variant="cyan" className={styles.darkButton}>
                統合モデルを見る
              </Button>
            </div>
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
                  src={asset("/assets/ai-data-center/energy-model.jpg")}
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
            AIサーバーの電力密度は導入機器・構成により変動します。実案件では受電条件、冷却方式、法規、運用要件を個別に確認します。
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
                src={asset("/assets/ai-data-center/green-model.jpg")}
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
                src={asset("/assets/ai-data-center/ems-dashboard.png")}
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

        <div className="container">
          <Reveal direction="up">
            <JcStarNotice
              className={styles.jcStarNotice}
              title="監視・制御基盤の接続機器にも、選定段階から配慮。"
              description="AIデータセンターのEMS、蓄電池、監視制御機器では、ネットワーク接続を前提にセキュリティ要件を確認します。JC-STAR適合製品の活用も視野に入れ、設備計画を進めます。"
              points={["EMS / NOAH Cloud", "蓄電池連携", "接続機器"]}
            />
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
                src={asset("/assets/ai-data-center/ai-control-ai-ja.png")}
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
            <SectionLabel eyebrow="PROJECT AREA" subtitle="建設計画エリア" />
            <h2 id="concepts-title" className={styles.heading}>
              電力、用地、蓄電池を、
              <br />
              エリアごとに整理する。
            </h2>
          </Reveal>

          <div className={styles.projectGrid}>
            {projectSites.map((site, index) => (
              <Reveal key={site.area} direction="up" delay={index * 70}>
                <article className={styles.conceptItem}>
                  <figure className={styles.projectPhoto}>
                    <Image
                      src={asset(site.image)}
                      alt={site.alt}
                      fill
                      sizes="(max-width: 960px) calc(100vw - 40px), 50vw"
                      className={styles.projectImage}
                    />
                    {site.isAiImage && <AiImageNote />}
                  </figure>
                  <div className={styles.conceptBody}>
                    <div className={styles.conceptMeta}>
                      <span className={styles.conceptStatus}>{site.status}</span>
                      <p>{site.area}</p>
                    </div>
                    <h3>{site.title}</h3>
                    <p>{site.text}</p>
                    <ul className={styles.factList}>
                      {site.facts.map((fact) => (
                        <li key={fact}>{fact}</li>
                      ))}
                    </ul>
                  </div>
                </article>
              </Reveal>
            ))}
          </div>
          <p className={styles.sourceNote}>
            掲載画像には計画説明用の図版・イメージを含みます。掲載内容は計画段階の情報です。川越市・千葉県は詳細条件が整い次第、掲載内容を更新します。
          </p>
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
              <Button href="/business" variant="cyan">
                事業一覧へ戻る
              </Button>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
