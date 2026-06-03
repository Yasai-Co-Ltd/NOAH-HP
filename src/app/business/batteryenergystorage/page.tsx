import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { isPageEnabled } from "@/lib/page-config";
import Image from "next/image";
import { Reveal } from "@/components/animation/Reveal/Reveal";
import { Button } from "@/components/ui/Button/Button";
import { SectionLabel } from "@/components/ui/SectionLabel/SectionLabel";
import styles from "./page.module.css";

export const metadata: Metadata = {
  title: "蓄電池事業 | 諾亜建設株式会社",
  description:
    "2MW/8MWhの系統用蓄電池を中心に、設計・調達・施工、EMSによる遠隔監視、6S+EDR制御基盤、運用保守まで一貫して支援します。",
};

const heroMetrics = [
  { value: "2MW/8MWh", label: "系統用蓄電池パッケージ" },
  { value: "6S+EDR", label: "安全・制御・記録を統合" },
  { value: "EMS/HCS", label: "遠隔監視・高速制御" },
];

const overviewSteps = [
  {
    number: "01",
    title: "電力を受ける",
    text: "再エネ発電所、変電所、需要地に接続し、余剰電力や調整力を受け入れます。",
  },
  {
    number: "02",
    title: "安全に蓄える",
    text: "液冷式ESSと多次元監視により、温度・電圧・防火を一体で管理します。",
  },
  {
    number: "03",
    title: "高速に制御する",
    text: "EMS/HCSが充放電、一次調整、系統連系をリアルタイムに制御します。",
  },
  {
    number: "04",
    title: "運用で収益化する",
    text: "アグリゲーター運営と遠隔O&Mにより、電力市場での活用まで支援します。",
  },
];

const marketBadges = ["卸電力市場", "容量市場", "需給調整市場", "一次調整"];

const products = [
  {
    number: "02",
    title: "100kW/215kWh 分散型蓄電",
    text: "工場・商業施設のピークカット、非常用電源、分散型スマートグリッドに対応します。",
    image: "/assets/battery/bess-215kwh.png",
    alt: "100kW/215kWh産業商業用蓄電池",
  },
  {
    number: "03",
    title: "200kW/418kWh 液冷蓄電",
    text: "高効率な液冷方式で、需要側蓄電・マイクログリッド・BCP用途に展開します。",
    image: "/assets/battery/bess-418kwh.png",
    alt: "200kW/418kWh液冷蓄電池",
  },
];

const specs = [
  { value: "2089/4178kWh", label: "ESS単機容量" },
  { value: "995kW×2", label: "PCS定格出力" },
  { value: "IP55", label: "屋外設置対応" },
  { value: "-25〜45℃", label: "液冷・動作温度範囲" },
];

const platformItems = [
  {
    title: "Battery / Cooling",
    text: "電池データ、液冷冷却、防火防災、ガス監視を常時取得。",
  },
  {
    title: "PCS / Transformer",
    text: "系統連系、出力制御、昇圧、保護機能を統合。",
  },
  {
    title: "EMS / HCS",
    text: "充放電計画、一次調整、高速制御、負荷分配を実行。",
  },
  {
    title: "NOAH Cloud",
    text: "4G/5Gで遠隔監視し、運転履歴・異常兆候を蓄積。",
  },
  {
    title: "O&M",
    text: "予兆保全、OTAアップグレード、運用レポートを支援。",
  },
  {
    title: "Aggregator",
    text: "電力市場・需給調整市場での運用収益化へつなげます。",
  },
];

const proofItems = [
  { value: "20年以上", label: "電力産業の研究開発・エンジニアリング経験" },
  { value: "40件以上", label: "製品・コアシステムの特許、ソフトウェア著作権" },
  { value: "50MW / 200MWh", label: "魯能海西州 蓄電発電所など大規模実績" },
  { value: "2GWh", label: "蓄電池調達に関する戦略的パートナー体制" },
];

const processSteps = [
  {
    number: "01",
    title: "調査・企画",
    text: "設置候補地、系統連系、用途、電力市場の活用方針を整理します。",
  },
  {
    number: "02",
    title: "システム設計",
    text: "ESS、PCS、EMS、変圧設備、通信構成を要件に合わせて設計します。",
  },
  {
    number: "03",
    title: "調達・施工",
    text: "機器調達、据付、電気工事、試運転、連系手続きを進めます。",
  },
  {
    number: "04",
    title: "運用・保守",
    text: "遠隔監視、予兆保全、一次調整、市場運用まで継続的に支援します。",
  },
];

export default function BatteryEnergyStoragePage() {
  if (!isPageEnabled("/business/batteryenergystorage")) notFound();

  return (
    <>
      <section className={styles.hero} aria-labelledby="battery-page-title">
        <div className={`container ${styles.heroInner}`}>
          <Reveal direction="left" className={styles.heroCopy}>
            <p className={styles.kicker}>
              BATTERY ENERGY STORAGE
              <span>蓄電池事業</span>
            </p>
            <h1 id="battery-page-title" className={styles.heroTitle}>
              系統用蓄電池を、
              <br />
              安定電源と
              <br />
              収益基盤へ。
            </h1>
            <p className={styles.heroLead}>
              2MW/8MWhの系統用蓄電池を中心に、設計・調達・施工、EMSによる遠隔監視、一次調整・需給調整市場での運用まで。
              NOAHは蓄電池を「置く設備」ではなく、地域電力を支える運用資産として構築します。
            </p>
            <div className={styles.heroActions}>
              <Button href="/contact" variant="white">
                導入相談をする
              </Button>
              <Button href="#solution" variant="outline" className={styles.darkButton}>
                ソリューションを見る
              </Button>
            </div>
          </Reveal>

          <Reveal direction="right" className={styles.heroVisualReveal}>
            <figure className={styles.heroVisual}>
              <Image
                src="/assets/battery/utility-installation.png"
                alt="屋外に設置された系統用蓄電池設備"
                fill
                priority
                sizes="(max-width: 900px) calc(100vw - 40px), 54vw"
                className={styles.heroImage}
              />
              <div className={styles.metricStrip} aria-label="蓄電池事業の主要指標">
                {heroMetrics.map((metric) => (
                  <div key={metric.value} className={styles.metric}>
                    <b>{metric.value}</b>
                    <span>{metric.label}</span>
                  </div>
                ))}
              </div>
            </figure>
          </Reveal>
        </div>
      </section>

      <section className={styles.overview} aria-labelledby="overview-title">
        <div className={`container ${styles.twoColumn}`}>
          <Reveal direction="left">
            <SectionLabel eyebrow="OVERVIEW" subtitle="系統用蓄電池とは" />
            <h2 id="overview-title" className={styles.heading}>
              電力を蓄えるだけでなく、
              <br />
              制御して運用する。
            </h2>
            <p className={styles.lead}>
              系統用蓄電池は、再生可能エネルギーの余剰電力を蓄え、必要なタイミングで放電するだけではありません。
              EMS、PCS、HCS、アグリゲーター運営まで連携することで、需給調整・周波数制御・市場活用を同時に支えます。
            </p>
            <div className={styles.marketBadges} aria-label="対応市場">
              {marketBadges.map((badge) => (
                <span key={badge}>{badge}</span>
              ))}
            </div>
          </Reveal>

          <Reveal direction="right">
            <div className={styles.powerFlow}>
              {overviewSteps.map((step) => (
                <article key={step.number} className={styles.flowItem}>
                  <span>{step.number}</span>
                  <h3>{step.title}</h3>
                  <p>{step.text}</p>
                </article>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      <section className={styles.lineup} id="lineup" aria-labelledby="lineup-title">
        <div className="container">
          <Reveal direction="up">
            <div className={styles.sectionHeading}>
              <div>
                <SectionLabel eyebrow="PRODUCT LINEUP" subtitle="製品ラインアップ" />
                <h2 id="lineup-title" className={styles.heading}>
                  用途と容量に合わせて、
                  <br />
                  最適な蓄電池を選ぶ。
                </h2>
              </div>
              <p className={styles.sectionLead}>
                系統用の2MW/8MWhパッケージを主力に、産業・商業用の分散型蓄電、太陽光＋蓄電＋充電まで展開。
                製品単体ではなく、PCS・EMS・監視基盤を含むシステムとして構成します。
              </p>
            </div>
          </Reveal>

          <div className={styles.productStage}>
            <Reveal direction="left" className={styles.mainProductReveal}>
              <article className={styles.mainProduct}>
                <Image
                  src="/assets/battery/bess-container-5mwh.png"
                  alt="2MW/8MWh系統用蓄電池コンテナ"
                  fill
                  sizes="(max-width: 960px) calc(100vw - 40px), 52vw"
                  className={styles.mainProductImage}
                />
                <div className={styles.mainProductText}>
                  <b>01</b>
                  <h3>2MW/8MWh 系統用蓄電池</h3>
                  <p>
                    2090kWh×4基または4180kWh×2基を基本構成とし、発電・配電・需要の各領域をカバーします。
                  </p>
                </div>
              </article>
            </Reveal>

            <div className={styles.productCards}>
              {products.map((product, index) => (
                <Reveal
                  key={product.number}
                  direction="right"
                  delay={index * 90}
                  className={styles.productCardReveal}
                >
                  <article className={styles.sideProduct}>
                    <div className={styles.sideVisual}>
                      <Image
                        src={product.image}
                        alt={product.alt}
                        width={520}
                        height={420}
                        className={styles.sideImage}
                      />
                    </div>
                    <div className={styles.sideBody}>
                      <b>{product.number}</b>
                      <h3>{product.title}</h3>
                      <p>{product.text}</p>
                    </div>
                  </article>
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className={styles.technology} id="solution" aria-labelledby="technology-title">
        <div className="container">
          <Reveal direction="up">
            <SectionLabel eyebrow="CORE TECHNOLOGY" subtitle="6S+EDR" />
            <h2 id="technology-title" className={styles.heading}>
              安全性・制御性・可視化を、
              <br />
              ひとつの基盤に統合。
            </h2>
            <p className={styles.techLead}>
              6S+EDRは、PCS・BMS・EMSに加え、HCS高速制御、BWS予兆警報、OMS予防安全、EDR故障記録を統合する制御基盤です。
              AI・IoTと電力制御技術を組み合わせ、安全性、グリッド適応性、運用判断を高めます。
            </p>
          </Reveal>
          <Reveal direction="up" className={styles.techFigureReveal}>
            <figure className={styles.techFigure}>
              <Image
                src="/assets/battery/core-technology-ai-diagram.png"
                alt="6S+EDRの安全制御基盤を示す図"
                width={1672}
                height={941}
                sizes="(max-width: 900px) calc(100vw - 40px), 1280px"
                className={styles.techImage}
              />
            </figure>
          </Reveal>
        </div>
      </section>

      <section className={styles.package} aria-labelledby="package-title">
        <div className="container">
          <Reveal direction="up">
            <SectionLabel eyebrow="MAIN PRODUCT" subtitle="主力製品" />
            <h2 id="package-title" className={styles.heading}>
              2MW/8MWh
              <br />
              系統用蓄電池パッケージ。
            </h2>
          </Reveal>

          <Reveal direction="up" className={styles.packageReveal}>
            <div className={styles.packagePanel}>
              <div className={styles.packageVisual}>
                <Image
                  src="/assets/battery/bess-container-5mwh.png"
                  alt="2MW/8MWh系統用蓄電池パッケージ"
                  fill
                  sizes="(max-width: 960px) calc(100vw - 40px), 50vw"
                  className={styles.packageImage}
                />
              </div>
              <div className={styles.specPanel}>
                <h3>特高圧・大規模案件に合わせて、構成を最適化。</h3>
                <p>
                  ESS100-1000/2090-LC、ESS100-2000/4180-LCを中心に、PCS、昇圧トランス、EMS、
                  監視・運用保守プラットフォームまで組み合わせて設計します。
                </p>
                <div className={styles.specGrid}>
                  {specs.map((spec) => (
                    <div key={spec.value} className={styles.spec}>
                      <b>{spec.value}</b>
                      <span>{spec.label}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      <section className={styles.platform} aria-labelledby="platform-title">
        <div className="container">
          <Reveal direction="up">
            <div className={styles.sectionHeading}>
              <div>
                <SectionLabel eyebrow="OPERATION PLATFORM" subtitle="EMS・NOAH Cloud" />
                <h2 id="platform-title" className={styles.heading}>
                  クラウドから現場設備まで、
                  <br />
                  一元管理する。
                </h2>
              </div>
              <p className={styles.sectionLead}>
                4G/5G回線でクラウドに接続し、蓄電池データ、液冷冷却、防火防災、ガス監視、PCS、計量、HMIを統合。
                運転状況や異常兆候を可視化し、遠隔制御・OTA・市場運用の判断まで支援します。
              </p>
            </div>
          </Reveal>

          <div className={styles.platformGrid}>
            <Reveal direction="left">
              <figure className={styles.platformVisual}>
                <Image
                  src="/assets/battery/ems-cloud-platform-ai.png"
                  alt="EMSとクラウド運用を示す図"
                  fill
                  sizes="(max-width: 960px) calc(100vw - 40px), 44vw"
                  className={styles.platformImage}
                />
              </figure>
            </Reveal>

            <div className={styles.platformItems}>
              {platformItems.map((item, index) => (
                <Reveal key={item.title} direction="up" delay={index * 50}>
                  <article className={styles.platformItem}>
                    <h3>{item.title}</h3>
                    <p>{item.text}</p>
                  </article>
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className={styles.proof} aria-labelledby="proof-title">
        <Image
          src="/assets/battery/battery-system-lineup.jpg"
          alt=""
          fill
          sizes="100vw"
          className={styles.proofBg}
        />
        <div className={`container ${styles.proofInner}`}>
          <Reveal direction="left">
            <SectionLabel eyebrow="CREDIBILITY" subtitle="技術力・実績" />
            <h2 id="proof-title" className={styles.heading}>
              技術標準と導入実績を、
              <br />
              日本市場へ。
            </h2>
          </Reveal>

          <div className={styles.proofGrid}>
            {proofItems.map((item, index) => (
              <Reveal key={item.value} direction="up" delay={index * 70}>
                <article className={styles.proofCard}>
                  <b>{item.value}</b>
                  <span>{item.label}</span>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className={styles.process} aria-labelledby="process-title">
        <div className="container">
          <Reveal direction="up">
            <SectionLabel eyebrow="PROJECT FLOW" subtitle="導入までの流れ" />
            <h2 id="process-title" className={styles.heading}>
              調査から運用まで、
              <br />
              蓄電池プロジェクトを一貫支援。
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

      <section className={styles.cta} aria-labelledby="battery-cta-title">
        <Image
          src="/assets/battery/utility-installation.png"
          alt=""
          fill
          sizes="100vw"
          className={styles.ctaImage}
        />
        <div className={`container ${styles.ctaInner}`}>
          <Reveal direction="up">
            <h2 id="battery-cta-title">
              系統用蓄電池・産業用蓄電池の
              <br />
              導入相談はこちら
            </h2>
            <p>事業計画の初期段階から、候補地・容量・運用モデルまでご相談ください。</p>
            <div className={styles.ctaActions}>
              <Button href="/contact" variant="white">
                お問い合わせ
              </Button>
              <Button href="/contact" variant="outline" className={styles.darkButton}>
                資料ダウンロード
              </Button>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
