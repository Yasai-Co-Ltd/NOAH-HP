import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { isPageEnabled } from "@/lib/page-config";
import Image from "next/image";
import Link from "next/link";
import { Reveal } from "@/components/animation/Reveal/Reveal";
import { AiImageNote } from "@/components/ui/AiImageNote/AiImageNote";
import { Button } from "@/components/ui/Button/Button";
import { JcStarNotice } from "@/components/ui/JcStarNotice/JcStarNotice";
import { SectionLabel } from "@/components/ui/SectionLabel/SectionLabel";
import styles from "./page.module.css";
import { asset } from "@/lib/asset";

export const metadata: Metadata = {
  title: "蓄電池事業（系統用蓄電池発電所開発） | 諾亜建設株式会社",
  description:
    "特別高圧・高圧系統用蓄電池発電所の開発事業。用地・権利の取得、系統連系、行政許認可、EPC建設、運用・EXITまで一貫して推進します。保有案件約25件・合計約790MW。",
};

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
    title: "市場活用につなげる",
    text: "アグリゲーター運営と遠隔O&Mを組み合わせ、各電力市場での活用を支援します。",
  },
];

const marketBadges = ["卸電力市場", "容量市場", "需給調整市場", "一次調整力対応"];

const heroMetrics = [
  { value: "約25件", label: "保有する特別高圧蓄電池プラント案件" },
  { value: "約790MW", label: "合計出力規模" },
  { value: "約21件", label: "うち特別高圧級の案件" },
  { value: "2年以内", label: "系統連系が可能な案件を多数保有" },
];

const solutionSeries = [
  {
    number: "01",
    category: "DEMAND SERIES",
    title: "デマンドシリーズ",
    text: "工場・商業施設のピークカット、非常用電源、需要側のエネルギー管理に対応します。",
    products: [
      {
        model: "100kW/215kWh・125kW/261kWh",
        title: "空冷／液冷蓄電",
        image: asset("/assets/battery/bess-215kwh-noah-ai.webp"),
        alt: "100kW／215kWh産業・商業用蓄電池",
        specs: ["需要側蓄電", "ピークカット・BCP", "空冷／液冷方式"],
      },
      {
        model: "200kW/418kWh",
        title: "液冷蓄電",
        image: asset("/assets/battery/bess-418kwh-noah-ai.webp"),
        alt: "200kW／418kWh液冷式蓄電池",
        specs: ["液冷方式", "産業・商業施設向け", "分散型電源に対応"],
      },
      {
        model: "CLOUD PLATFORM",
        title: "分散型電源統合クラウドプラットフォーム・アシスト",
        image: asset("/assets/battery/ems-cloud-platform-ai.png"),
        alt: "分散型電源統合クラウドプラットフォーム",
        specs: ["遠隔監視", "運転データ管理", "複数設備を統合"],
      },
    ],
  },
  {
    number: "02",
    category: "SOLAR / CHARGING SERIES",
    title: "太陽光蓄電充電シリーズ",
    text: "太陽光発電、蓄電池、充電設備を組み合わせ、発電電力を施設内で有効活用します。",
    products: [
      {
        model: "100kW/215kWh",
        title: "太陽光蓄電一体型装置",
        image: asset("/assets/battery/solar-storage-100-215-noah-ai.webp"),
        alt: "100kW／215kWh太陽光蓄電一体型装置",
        specs: ["太陽光発電と蓄電を統合", "一体型キャビネット", "自家消費を支援"],
      },
      {
        model: "209kWh/180kW",
        title: "蓄電充電器",
        image: asset("/assets/battery/storage-charger-209-180-noah-ai.webp"),
        alt: "蓄電充電設備",
        specs: ["蓄電・充電を一体化", "急速充電用途", "液冷システム"],
      },
      {
        model: "4×240kW",
        title: "太陽光蓄電充電装置",
        image: asset("/assets/battery/solar-charging-4x240-noah-ai.webp"),
        alt: "4台構成の太陽光蓄電充電装置",
        specs: ["複数充電器を構成", "太陽光発電と連携", "大規模充電拠点向け"],
      },
      {
        model: "iEFC100",
        title: "蓄電充電一体機",
        image: asset("/assets/battery/product-iefc100-noah-ai.webp"),
        alt: "iEFC100蓄電充電一体機",
        specs: ["蓄電容量186kWh", "入力30〜90kW・出力180kW", "液冷・IP54"],
      },
    ],
  },
  {
    number: "03",
    category: "MICROGRID SERIES",
    title: "マイクログリッド蓄電シリーズ",
    text: "分散型電源を監視・制御し、施設や地域単位での安定した電力運用を支えます。",
    products: [
      {
        model: "100kW/215kWh",
        title: "（太陽光）蓄電一体型キャビネット",
        image: asset("/assets/battery/solar-storage-100-215-noah-ai.webp"),
        alt: "100kW／215kWh太陽光蓄電一体型キャビネット",
        specs: ["太陽光・蓄電を統合", "分散型電源として運用", "施設・地域単位に対応"],
      },
      {
        model: "OPERATION PLATFORM",
        title: "監視・運用管理プラットフォーム",
        image: asset("/assets/battery/ems-cloud-platform-ai.png"),
        alt: "マイクログリッド監視・運用管理プラットフォーム",
        specs: ["発電・蓄電設備を監視", "運転計画を管理", "遠隔O&Mを支援"],
      },
    ],
  },
  {
    number: "04",
    category: "UTILITY SCALE SERIES",
    title: "系統用蓄電池",
    text: "中規模から大規模まで、ESS、PCS、昇圧設備、EMSを組み合わせ、系統連系案件を構成します。",
    products: [
      {
        model: "2MW/8MWh",
        title: "コンテナ型系統用蓄電池",
        image: asset("/assets/battery/ess-4178kwh-noah-ai.webp"),
        alt: "4.178MWh液冷式コンテナ蓄電池",
        specs: ["2,089kWh×4基／4,178kWh×2基", "液冷・IP55", "EMS・O&Mと連携"],
      },
      {
        model: "CONTAINER ESS",
        title: "コンテナ型蓄電システム",
        image: asset("/assets/battery/product-container-ess-noah-ai.webp"),
        alt: "コンテナ型蓄電システム",
        specs: ["200〜5,000kW", "1,000〜5,000kWh", "20ft／40ft・IP54"],
      },
      {
        model: "PWS1-1725KTL-H-EX-XMY-O",
        title: "蓄電池用パワーコンディショナー",
        image: asset("/assets/battery/product-pws1-1725-noah-ai.webp"),
        alt: "PWS1-1725KTL-H-EX-XMY-O蓄電池用パワーコンディショナー",
        specs: ["215kW〜1.72MW", "690Vac直接接続", "応答時間20ms未満・IP54"],
      },
      {
        model: "PWX1-1575KTL-H",
        title: "蓄電池用パワーコンディショナー",
        image: asset("/assets/battery/product-pwx1-1575-noah-ai.webp"),
        alt: "PWX1-1575KTL-H蓄電池用パワーコンディショナー",
        specs: ["1,500V対応", "IP65・C5耐環境設計", "グリッドフォーミング対応"],
      },
      {
        model: "SES2H-5000-MV-EX",
        title: "変圧器・PCS一体型コンテナ",
        image: asset("/assets/battery/product-ses2h-5000-noah-ai.webp"),
        alt: "SES2H-5000-MV-EX変圧器・PCS一体型コンテナ",
        specs: ["5MWh・1,500V対応", "変圧器とPCSを一体化", "応答時間20ms未満"],
      },
    ],
  },
  {
    number: "05",
    category: "6S+EDR CORE COMPONENTS",
    title: "コアコンポーネント・制御システム",
    text: "蓄電池本体とPCS、EMS、高速制御、故障記録を統合し、安全性・応答性・運用性を高めます。",
    products: [
      {
        model: "100kW PCS",
        title: "蓄電PCS",
        alt: "モジュール式蓄電PCS",
        specs: ["モジュール構成", "系統連系・変換制御", "用途に応じて構成"],
      },
      {
        model: "iPCS 125kW / 215kW",
        title: "モジュール式蓄電PCS",
        image: asset("/assets/battery/product-ipcs-modular-noah-ai.webp"),
        alt: "125kW／215kWモジュール式蓄電PCS",
        specs: ["AC400V／AC690V", "DC1,000V／1,500V", "RS485・CAN通信"],
      },
      {
        model: "EMS",
        title: "監視・運用エネルギー管理システム",
        image: asset("/assets/battery/ems-cloud-platform-ai.png"),
        alt: "監視・運用エネルギー管理システム",
        specs: ["充放電計画", "遠隔監視", "アグリゲーター運用と連携"],
      },
      {
        model: "HCS",
        title: "高速制御システム",
        specs: ["応答速度0.05秒", "一次調整力対応", "リアルタイム制御"],
      },
      {
        model: "EDR",
        title: "故障記録システム／ブラックボックス",
        specs: ["事故記録", "故障分析・追跡", "運用改善に活用"],
      },
      {
        model: "SMART GRID CONTROL",
        title: "分散スマートグリッド運用制御システム",
        specs: ["分散電源を統合", "運用計画を制御", "複数拠点に対応"],
      },
    ],
  },
];

const packageComponents = [
  { value: "2,089kWh×4", label: "ESS100-1000/2090-LC構成" },
  { value: "4,178kWh×2", label: "ESS100-2000/4180-LC構成" },
  { value: "995kW×2", label: "PCS定格出力" },
  { value: "2,000kVA×1", label: "昇圧変圧器" },
];

const modelSpecs = [
  {
    model: "ESS100-1000/2090-LC",
    energy: "2,089kWh",
    power: "1,000kW",
    connection: "10P416S",
    weight: "30t以下",
  },
  {
    model: "ESS100-2000/4180-LC",
    energy: "4,178kWh",
    power: "2,000kW",
    connection: "5P416S",
    weight: "40t以下",
  },
];

const commonSpecs = [
  "リン酸鉄リチウムイオン電池",
  "定格電圧 DC1,331.2V",
  "電圧範囲 DC1,164.8〜1,497.6V",
  "液冷方式（50%エチレングリコール水溶液）",
  "動作温度 -25〜45℃",
  "保護等級 IP55",
  "外形 6,058×2,438×2,896mm（L×W×H）",
  "PCS：CAN／Modbus、EMS：IEC104／IEC61850／Modbus",
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
    text: "卸電力・容量・需給調整市場での活用を支援します。",
  },
];

const proofItems = [
  { value: "20年以上", label: "連携する技術パートナーを含む電力分野の研究開発・エンジニアリング経験" },
  { value: "40件以上", label: "技術パートナーが保有する製品・コアシステム関連の知的財産" },
  { value: "50MW / 200MWh", label: "技術パートナーによる大規模蓄電発電所の導入実績" },
  { value: "2GWh", label: "NOAHによる蓄電池調達の戦略的パートナー体制" },
];

const pipelineRoles = [
  {
    number: "01",
    company: "諾亜建設",
    note: "用地・権利のオーナー",
    items: ["特別高圧蓄電池プラント用地・権利の取得・保有", "建設業者の選定"],
  },
  {
    number: "02",
    company: "株式会社Birdman",
    note: "アドバイザリーパートナー（東証グロース：7063）",
    items: ["開発事業者の選定・紹介", "蓄電池システムの部材の調達・確保"],
  },
];

/** 保有・開発中の蓄電所案件一覧。所在地は市区町村・町字レベルで掲載（地番は非公開）。 */
const storageProjects = [
  { name: "鹿児島宮之浦町蓄電所", location: "鹿児島県鹿児島市宮之浦町", siteArea: "6,484", powerKw: "9,500", energyKwh: "38,000" },
  { name: "C-42蓄電所", location: "福岡県飯塚市横田", siteArea: "5,011", powerKw: "19,780", energyKwh: "79,120" },
  { name: "C-02蓄電所", location: "佐賀県佐賀市大和町尼寺", siteArea: "3,139", powerKw: "29,950", energyKwh: "119,800" },
  { name: "C-53蓄電所", location: "福岡県筑紫野市原", siteArea: "4,530", powerKw: "17,230", energyKwh: "68,920" },
  { name: "1-70蓄電所", location: "佐賀県鳥栖市幸津町", siteArea: "5,419", powerKw: "19,950", energyKwh: "79,800" },
  { name: "1-72蓄電所", location: "佐賀県鳥栖市幸津町", siteArea: "10,498", powerKw: "19,950", energyKwh: "79,800" },
  { name: "E-36-2蓄電所", location: "大分県大分市毛井", siteArea: "9,722", powerKw: "89,080", energyKwh: "356,320" },
  { name: "1-71蓄電所", location: "佐賀県鳥栖市幸津町", siteArea: "1,013", powerKw: "9,950", energyKwh: "39,800" },
  { name: "1-95蓄電所", location: "佐賀県三養基郡上峰町", siteArea: "6,012", powerKw: "29,950", energyKwh: "119,800" },
  { name: "C-09蓄電所", location: "福岡県大川市中古賀", siteArea: "3,294", powerKw: "19,950", energyKwh: "79,800" },
  {
    name: "日向市富高・日向市塩見 メガバッテリーステーション",
    location: "宮崎県日向市富高・塩見",
    siteArea: "6,962",
    powerKw: "29,270",
    energyKwh: "117,080",
  },
  { name: "1-78蓄電所", location: "福岡県朝倉市一木", siteArea: "7,691", powerKw: "29,950", energyKwh: "119,800" },
  { name: "C-10蓄電所", location: "福岡県大川市中古賀", siteArea: "2,825", powerKw: "29,950", energyKwh: "119,800" },
  { name: "高圧14蓄電所", location: "宮崎県えびの市向江", siteArea: "1,934", powerKw: "1,997", energyKwh: "7,988" },
  { name: "C-06蓄電所", location: "佐賀県佐賀市高木瀬西", siteArea: "2,241", powerKw: "1,996", energyKwh: "7,984" },
  { name: "C-05蓄電所", location: "佐賀県佐賀市高木瀬町長瀬", siteArea: "4,500", powerKw: "29,950", energyKwh: "119,800" },
];

const projectTotals = {
  count: storageProjects.length,
  powerKw: "388,403",
  energyKwh: "1,553,612",
};

/** 開発用地の現地写真（NOAH撮影）。 */
const projectPhotos = [
  {
    src: "/assets/battery/projects/site-c42.jpg",
    name: "C-42蓄電所",
    area: "福岡県飯塚市",
    width: 1107,
    height: 622,
  },
  {
    src: "/assets/battery/projects/site-c53.jpg",
    name: "C-53蓄電所",
    area: "福岡県筑紫野市",
    width: 947,
    height: 532,
  },
  {
    src: "/assets/battery/projects/site-1-72.jpg",
    name: "1-72蓄電所",
    area: "佐賀県鳥栖市",
    width: 1144,
    height: 858,
  },
  {
    src: "/assets/battery/projects/site-1-78.jpg",
    name: "1-78蓄電所",
    area: "福岡県朝倉市",
    width: 1331,
    height: 748,
  },
];

const coreCapabilities = [
  {
    number: "01",
    title: "プロジェクトリソース開発",
    items: ["土地選定・用地取得", "案件ID取得", "権利調整"],
  },
  {
    number: "02",
    title: "系統連系推進",
    items: ["接続検討申込", "保証金・工事負担金対応", "連系協議"],
  },
  {
    number: "03",
    title: "行政許認可",
    items: ["開発許可", "農地転用・林地開発", "消防・環境調査"],
  },
  {
    number: "04",
    title: "EPC建設",
    items: ["土木・電気工事", "設備設置・変電設備", "システム統合"],
  },
  {
    number: "05",
    title: "設備統合",
    items: ["蓄電池・PCS・EMS", "変圧器", "防災・監視システム"],
  },
  {
    number: "06",
    title: "投資・EXIT",
    items: ["SPC・GK-TKスキーム", "銀行融資対応", "案件売却・長期運営"],
  },
];

const processSteps = [
  {
    number: "01",
    title: "用地・案件開発",
    text: "土地選定、権利調整、案件ID取得まで、事業の起点となるリソースを確保します。",
  },
  {
    number: "02",
    title: "系統連系・許認可",
    text: "接続検討、保証金・工事負担金、連系協議、開発許可・農地転用などを推進します。",
  },
  {
    number: "03",
    title: "EPC建設",
    text: "設計、土木・電気工事、設備設置、変電設備、試運転まで一貫して施工します。",
  },
  {
    number: "04",
    title: "運用・EXIT",
    text: "遠隔監視・O&M、市場運用に加え、SPC組成や案件売却まで対応します。",
  },
];

/**
 * 製品カタログ（製品ラインアップ / 6S+EDR / 主力製品 / EMS）の表示フラグ。
 * 経営レビューを受けて一旦非表示。復活または完全削除は今後判断する。
 */
const SHOW_PRODUCT_CATALOG = false;

export default function BatteryEnergyStoragePage() {
  if (!isPageEnabled("/business/batteryenergystorage")) notFound();

  return (
    <>
      <section className={styles.hero} aria-labelledby="battery-page-title">
        <Image
          src={asset("/assets/battery/battery-product-lineup-hero-noah-ai.webp")}
          alt=""
          fill
          priority
          sizes="100vw"
          className={styles.heroBackground}
        />
        <div className={styles.heroOverlay} />
        <AiImageNote position="top-right" />
        <div className={`container ${styles.heroInner}`}>
          <Reveal direction="left" className={styles.heroCopy}>
            <p className={styles.kicker}>
              BATTERY ENERGY STORAGE
              <span>蓄電池事業</span>
            </p>
            <h1 id="battery-page-title" className={styles.heroTitle}>
              特別高圧蓄電池発電所を、
              <br />
              開発から
              <br />
              運用・EXITまで。
            </h1>
            <p className={styles.heroLead}>
              NOAHは、日本国内で特別高圧・高圧系統用蓄電池発電所の開発・設計・建設・投資協業を推進しています。
              用地取得、系統連系、行政許認可、EPC施工、竣工引渡しから運営・EXITまで一貫して対応します。
            </p>
            <div className={styles.heroActions}>
              <Button href="/contact" variant="white">
                事業相談をする
              </Button>
              <Button href="#projects" variant="outline" className={styles.darkButton}>
                保有案件を見る
              </Button>
            </div>
          </Reveal>
        </div>

        <div className={`container ${styles.metricBoard}`} aria-label="蓄電池事業の参考指標">
          {heroMetrics.map((metric) => (
            <div key={metric.value} className={styles.metricItem}>
              <b>{metric.value}</b>
              <span>{metric.label}</span>
            </div>
          ))}
        </div>
      </section>

      <section className={styles.pipeline} aria-labelledby="pipeline-title">
        <div className="container">
          <Reveal direction="up">
            <div className={styles.sectionHeading}>
              <div>
                <SectionLabel
                  eyebrow="DEVELOPMENT PIPELINE"
                  subtitle="特別高圧蓄電池プラント"
                  inverse
                />
                <h2 id="pipeline-title" className={styles.pipelineHeading}>
                  特別高圧蓄電池プラントを、
                  <br />
                  開発パートナーとともに。
                </h2>
              </div>
              <p className={styles.pipelineLead}>
                当社は、系統連系および必要な許認可の取得が完了し、運転可能な状態にある特別高圧蓄電池プラントの用地・権利を多数保有しています。
                2026年7月には株式会社Birdmanとの業務提携により、開発事業者の参画から蓄電池システムの部材調達までを含む開発体制を構築しました。
              </p>
            </div>
          </Reveal>

          <div className={styles.pipelineRoles}>
            {pipelineRoles.map((role, index) => (
              <Reveal key={role.company} direction="up" delay={index * 80}>
                <article className={styles.pipelineRole}>
                  <p>ROLE {role.number}</p>
                  <h3>{role.company}</h3>
                  <span>{role.note}</span>
                  <ul>
                    {role.items.map((item) => (
                      <li key={item}>{item}</li>
                    ))}
                  </ul>
                </article>
              </Reveal>
            ))}
          </div>

          <Reveal direction="up">
            <div className={styles.pipelineFooter}>
              <p>※ 案件数・出力規模は2026年7月時点。個別案件の詳細はお問い合わせください。</p>
              <Link href="/news/birdman-partnership" className={styles.pipelineLink}>
                業務提携のプレスリリースを見る<span aria-hidden="true">→</span>
              </Link>
            </div>
          </Reveal>
        </div>
      </section>

      <section className={styles.projects} id="projects" aria-labelledby="projects-title">
        <div className="container">
          <Reveal direction="up">
            <div className={styles.sectionHeading}>
              <div>
                <SectionLabel eyebrow="PROJECT PORTFOLIO" subtitle="保有案件一覧" />
                <h2 id="projects-title" className={styles.heading}>
                  九州エリアを中心に、
                  <br />
                  蓄電所案件を保有。
                </h2>
              </div>
              <p className={styles.sectionLead}>
                用地・権利を確保し、系統連系・許認可の手続きとあわせて開発を進める代表的な蓄電所案件です。
                連系先はいずれも九州電力送配電株式会社です。
              </p>
            </div>
          </Reveal>

          <Reveal direction="up">
            <div className={styles.projectTableWrap}>
              <table className={styles.projectTable}>
                <thead>
                  <tr>
                    <th scope="col">No.</th>
                    <th scope="col">蓄電所名</th>
                    <th scope="col">所在地</th>
                    <th scope="col">開発用地</th>
                    <th scope="col">定格出力</th>
                    <th scope="col">蓄電容量</th>
                  </tr>
                </thead>
                <tbody>
                  {storageProjects.map((project, index) => (
                    <tr key={project.name}>
                      <td>{String(index + 1).padStart(2, "0")}</td>
                      <th scope="row">{project.name}</th>
                      <td>{project.location}</td>
                      <td>{project.siteArea}㎡</td>
                      <td>{project.powerKw}kW</td>
                      <td>{project.energyKwh}kWh</td>
                    </tr>
                  ))}
                </tbody>
                <tfoot>
                  <tr>
                    <td />
                    <th scope="row">合計（{projectTotals.count}件）</th>
                    <td />
                    <td />
                    <td>{projectTotals.powerKw}kW</td>
                    <td>{projectTotals.energyKwh}kWh</td>
                  </tr>
                </tfoot>
              </table>
            </div>
          </Reveal>

          <div className={styles.projectPhotoGrid}>
            {projectPhotos.map((photo, index) => (
              <Reveal key={photo.name} direction="up" delay={index * 60}>
                <figure className={styles.projectPhotoCard}>
                  <Image
                    src={asset(photo.src)}
                    alt={`${photo.name}（${photo.area}）の開発用地の現地写真`}
                    width={photo.width}
                    height={photo.height}
                    sizes="(max-width: 760px) calc(100vw - 40px), (max-width: 1180px) 46vw, 24vw"
                    className={styles.projectPhotoImage}
                  />
                  <figcaption>
                    <b>{photo.name}</b>
                    <span>{photo.area}｜現地写真</span>
                  </figcaption>
                </figure>
              </Reveal>
            ))}
          </div>

          <p className={styles.sourceNote}>
            ※ 保有・開発中案件の一部を掲載。所在地は町字までを表記しています。個別案件の詳細はお問い合わせください。
          </p>
        </div>
      </section>

      <section className={styles.capabilities} aria-labelledby="capabilities-title">
        <div className="container">
          <Reveal direction="up">
            <SectionLabel eyebrow="CORE CAPABILITIES" subtitle="NOAHのコア能力" />
            <h2 id="capabilities-title" className={styles.heading}>
              開発・連系・許認可・EPCを、
              <br />
              ひとつの体制で推進する。
            </h2>
          </Reveal>

          <div className={styles.capabilityGrid}>
            {coreCapabilities.map((capability, index) => (
              <Reveal key={capability.number} direction="up" delay={index * 60}>
                <article className={styles.capabilityCard}>
                  <b>{capability.number}</b>
                  <h3>{capability.title}</h3>
                  <ul>
                    {capability.items.map((item) => (
                      <li key={item}>{item}</li>
                    ))}
                  </ul>
                </article>
              </Reveal>
            ))}
          </div>

          <Reveal direction="up">
            <JcStarNotice
              className={styles.jcStarNotice}
              title="蓄電池システムの機器選定にも、セキュリティ要件を。"
              description="EMS、PCS、クラウド運用を含む蓄電池システムでは、JC-STAR適合製品の取扱いを通じて、導入時のセキュリティ要件にも配慮します。適合対象は製品・機器ごとに確認します。"
              points={["EMS / PCS", "遠隔監視", "機器選定"]}
            />
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
              EMS、PCS、HCS、アグリゲーター運営を連携させ、需給調整、周波数制御、各電力市場での活用を支えます。
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

      {/* 製品カタログここから（SHOW_PRODUCT_CATALOG=false で一旦非表示中） */}
      {SHOW_PRODUCT_CATALOG && (
        <>
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
                デマンド、太陽光蓄電充電、マイクログリッド、系統用蓄電池まで。
                各シリーズに必要なPCS、EMS、監視・制御システムを組み合わせ、用途に合った構成を提案します。
              </p>
            </div>
          </Reveal>

          <div className={styles.solutionList}>
            {solutionSeries.map((series, index) => (
              <Reveal
                key={series.number}
                direction="up"
                delay={(index % 2) * 70}
                className={styles.solutionReveal}
              >
                <article className={styles.solutionGroup}>
                  <header className={styles.solutionHeader}>
                    <div className={styles.solutionNumber}>{series.number}</div>
                    <div>
                      <p>{series.category}</p>
                      <h3>{series.title}</h3>
                    </div>
                    <span>{series.text}</span>
                  </header>

                  <div
                    className={`${styles.solutionProducts} ${
                      series.products.length <= 2 ? styles.solutionProductsCompact : ""
                    }`}
                  >
                    {series.products.map((product) => (
                      <article key={`${series.number}-${product.model}`} className={styles.solutionProduct}>
                        {product.image ? (
                          <div className={styles.solutionVisual}>
                            <Image
                              src={product.image}
                              alt={product.alt}
                              fill
                              sizes="(max-width: 760px) calc(100vw - 72px), (max-width: 1180px) 42vw, 22vw"
                              className={styles.solutionImage}
                            />
                            <AiImageNote />
                          </div>
                        ) : (
                          <div className={styles.systemMark} aria-hidden="true">
                            <span>{product.model}</span>
                          </div>
                        )}
                        <div className={styles.solutionBody}>
                          <p>{product.model}</p>
                          <h4>{product.title}</h4>
                          <ul>
                            {product.specs.map((spec) => (
                              <li key={spec}>{spec}</li>
                            ))}
                          </ul>
                        </div>
                      </article>
                    ))}
                  </div>
                </article>
              </Reveal>
            ))}
          </div>

          <p className={styles.sourceNote}>
            ※容量・構成・仕様は、接続条件や用途に応じて個別に設計します。
          </p>
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
                src={asset("/assets/battery/core-technology-ai-diagram.png")}
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
              <figure className={styles.packageVisual}>
                <Image
                  src={asset("/assets/battery/ess-4178kwh-noah-ai.webp")}
                  alt="ESS100-2000/4180-LC 4.178MWh液冷式コンテナ蓄電池"
                  fill
                  sizes="(max-width: 960px) calc(100vw - 40px), 50vw"
                  className={styles.packageImage}
                />
                <AiImageNote />
                <figcaption>ESS100-2000/4180-LC 完成イメージ図</figcaption>
              </figure>
              <div className={styles.specPanel}>
                <h3>2種類のESSから、2MW/8MWhの構成を選択。</h3>
                <p>
                  2,089kWh機を4基、または4,178kWh機を2基配置し、995kWのPCSを2基、2,000kVAの昇圧変圧器、
                  EMS、監視・運用保守プラットフォームを組み合わせます。
                </p>
                <div className={styles.specGrid}>
                  {packageComponents.map((spec) => (
                    <div key={spec.value} className={styles.spec}>
                      <b>{spec.value}</b>
                      <span>{spec.label}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </Reveal>

          <div className={styles.modelGrid}>
            {modelSpecs.map((model, index) => (
              <Reveal key={model.model} direction="up" delay={index * 80}>
                <article className={styles.modelCard}>
                  <p>MODEL {String(index + 1).padStart(2, "0")}</p>
                  <h3>{model.model}</h3>
                  <dl>
                    <div>
                      <dt>定格エネルギー</dt>
                      <dd>{model.energy}</dd>
                    </div>
                    <div>
                      <dt>定格充放電電力</dt>
                      <dd>{model.power}</dd>
                    </div>
                    <div>
                      <dt>直並列構成</dt>
                      <dd>{model.connection}</dd>
                    </div>
                    <div>
                      <dt>重量</dt>
                      <dd>{model.weight}</dd>
                    </div>
                  </dl>
                </article>
              </Reveal>
            ))}
          </div>

          <Reveal direction="up">
            <div className={styles.commonSpecs}>
              <h3>共通仕様</h3>
              <ul>
                {commonSpecs.map((spec) => (
                  <li key={spec}>{spec}</li>
                ))}
              </ul>
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
                  src={asset("/assets/battery/ems-cloud-platform-ai.png")}
                  alt="EMSとクラウド運用を示す図"
                  fill
                  sizes="(max-width: 960px) calc(100vw - 40px), 44vw"
                  className={styles.platformImage}
                />
                <AiImageNote label="イメージ図" />
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
        </>
      )}
      {/* 製品カタログここまで */}

      <section className={styles.proof} aria-labelledby="proof-title">
        <Image
          src={asset("/assets/battery/battery-product-lineup-hero-noah-ai.webp")}
          alt=""
          fill
          sizes="100vw"
          className={styles.proofBg}
        />
        <AiImageNote position="top-right" />
        <div className={`container ${styles.proofInner}`}>
          <Reveal direction="left">
            <SectionLabel eyebrow="TECHNOLOGY PARTNERS" subtitle="技術基盤・実績" />
            <h2 id="proof-title" className={styles.heading}>
              パートナーの技術基盤と
              <br />
              NOAHの調達力を、
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
            <SectionLabel eyebrow="PROJECT FLOW" subtitle="開発の流れ" />
            <h2 id="process-title" className={styles.heading}>
              用地開発から運用・EXITまで、
              <br />
              一貫して推進する。
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
          src={asset("/assets/battery/utility-installation.png")}
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
