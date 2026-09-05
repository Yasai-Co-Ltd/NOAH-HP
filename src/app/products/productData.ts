export type ProductCategorySlug = "bms" | "ems" | "pcs";

export interface ProductSpec {
  label: string;
  value: string;
}

export interface ProductHighlight {
  label: string;
  value: string;
}

export interface Product {
  category: ProductCategorySlug;
  slug: string;
  displayName: string;
  model: string;
  tagline: string;
  overview: string[];
  features: string[];
  specs: ProductSpec[];
  highlights: ProductHighlight[];
  image: string;
  sheetImage: string;
}

export interface ProductCategory {
  slug: ProductCategorySlug;
  name: string;
  fullName: string;
  japaneseName: string;
  description: string;
  role: string;
  image: string;
}

export const productCategories: ProductCategory[] = [
  {
    slug: "bms",
    name: "BMS",
    fullName: "BATTERY MANAGEMENT SYSTEM",
    japaneseName: "バッテリーマネジメントシステム",
    description:
      "セル、クラスタ、システム全体の状態を監視し、蓄電池の安全で安定した運用を支える制御製品です。",
    role: "電池状態の監視・診断・保護",
    image: "/assets/products/bms/n-bams-10ht.png",
  },
  {
    slug: "ems",
    name: "EMS",
    fullName: "ENERGY MANAGEMENT SYSTEM",
    japaneseName: "エネルギーマネジメントシステム",
    description:
      "設備データの収集、通信、監視、現場制御を担い、蓄電池システムの運用をつなぐコントローラーです。",
    role: "設備データの収集・通信・制御",
    image: "/assets/products/ems/n-bk-3000.png",
  },
  {
    slug: "pcs",
    name: "PCS",
    fullName: "POWER CONDITIONING SYSTEM",
    japaneseName: "パワーコンディショニングシステム",
    description:
      "蓄電池の直流電力と系統の交流電力を高効率に変換し、設備規模や運用要件に合わせた充放電制御を行います。",
    role: "電力変換・系統連系制御",
    image: "/assets/products/pcs/n-pws1-1375ktl-h-jp-6m1-o.png",
  },
];

export const products: Product[] = [
  {
    category: "bms",
    slug: "n-bams-10ht",
    displayName: "BMS制御装置",
    model: "N-BAMS-10HT",
    tagline: "蓄電池システム全体を統合監視・制御する、蓄電所向けBMS上位制御装置。",
    overview: [
      "N-BAMS-10HTは、蓄電池システムの上位監視・制御を担うBMS制御装置です。BMU・BCMUから収集した電池データを一元管理し、リアルタイムでの状態監視、データ処理、記録を行います。",
      "PCSおよびEMSとの通信に対応し、充放電制御に必要な情報を連携することで、蓄電池システムの安定運用と効率的なエネルギー管理を支援します。",
    ],
    features: [
      "BMS情報の一元管理",
      "PCS・EMSとのシステム連携",
      "リアルタイム監視・制御",
      "豊富な通信・I/Oインターフェース",
    ],
    specs: [
      { label: "ディスプレイ", value: "10.1インチ IPS、16:9" },
      { label: "解像度", value: "1024 × 600" },
      { label: "CPU", value: "Quad-Core 64-bit Cortex-A55、2.0GHz" },
      { label: "メモリ", value: "4GB DDR4" },
      { label: "ストレージ", value: "32GB eMMC" },
      { label: "Ethernet", value: "RJ45 × 3" },
      { label: "RS485", value: "5ポート、独立絶縁" },
      { label: "CAN", value: "3ポート、独立絶縁" },
      { label: "電源", value: "DC24V（DC12～36V）" },
      { label: "動作温度", value: "－20～60℃" },
    ],
    highlights: [
      { label: "DISPLAY", value: "10.1 inch" },
      { label: "ETHERNET", value: "RJ45 × 3" },
      { label: "OPERATING TEMP.", value: "－20～60℃" },
    ],
    image: "/assets/products/bms/n-bams-10ht.png",
    sheetImage: "/assets/products/bms/n-bams-10ht-sheet.png",
  },
  {
    category: "bms",
    slug: "n-bcmu-w",
    displayName: "BMS制御装置",
    model: "N-BCMU-W",
    tagline: "蓄電池クラスタの電圧・電流・温度・絶縁状態をリアルタイムで監視・管理するBMS制御ユニット。",
    overview: [
      "N-BCMU-Wは、110～1500VDCのリチウムイオン蓄電池システムに対応したバッテリークラスタ管理ユニットです。電圧、電流、温度、絶縁抵抗をリアルタイムで監視し、SOC・SOHの演算、状態診断、異常監視、保護制御を行います。",
      "Ethernet、CAN、RS485を備え、BAMS、BMU、PCS、EMSとのデータ連携に対応。蓄電池クラスタの運転状態を一元管理し、安全で安定した運用を支援します。",
    ],
    features: [
      "電池クラスタのリアルタイム監視",
      "SOC・SOH演算および状態診断",
      "多様な保護・異常監視機能",
      "Ethernet・CAN・RS485によるシステム連携",
    ],
    specs: [
      { label: "動作電圧", value: "DC16～32V" },
      { label: "電圧測定範囲", value: "0～1500VDC" },
      { label: "電圧測定精度", value: "±0.2%FS" },
      { label: "電流測定範囲", value: "±400A" },
      { label: "電流測定精度", value: "±0.2%FS" },
      { label: "温度測定範囲", value: "－40～125℃" },
      { label: "BMU接続数", value: "最大32台" },
      { label: "セル対応数", value: "最大500セル" },
      { label: "通信", value: "Ethernet × 1 / CAN × 2 / RS485 × 3" },
      { label: "動作温度", value: "－30～70℃" },
    ],
    highlights: [
      { label: "VOLTAGE", value: "1500VDC" },
      { label: "CELL", value: "最大500" },
      { label: "OPERATING TEMP.", value: "－30～70℃" },
    ],
    image: "/assets/products/bms/n-bcmu-w.png",
    sheetImage: "/assets/products/bms/n-bcmu-w-sheet.png",
  },
  {
    category: "bms",
    slug: "n-bmu-l37104-bd",
    displayName: "BMU制御ユニット",
    model: "N-BMU-L37104-BD",
    tagline: "最大104セルの電圧・温度を監視し、SOC・SOH演算とセルバランシングを行うBMU制御ユニット。",
    overview: [
      "N-BMU-L37104-BDは、蓄電池システムにおけるセルレベルの監視・管理を担うBMU制御ユニットです。最大104セルの電圧と最大112点の温度をリアルタイムで監視し、SOC・SOHの演算、セル状態の管理、パッシブバランシングを行います。",
      "CAN通信により上位BMSへ運転データやアラーム情報を送信でき、無電圧接点出力やファン制御にも対応。モジュール化された構造で、設置・保守性と安定した蓄電池管理を支援します。",
    ],
    features: [
      "最大104セルのリアルタイム監視",
      "SOC・SOH演算",
      "パッシブセルバランシング",
      "CAN通信・外部制御対応",
    ],
    specs: [
      { label: "電源電圧", value: "DC24V ±20%" },
      { label: "消費電力", value: "2W未満" },
      { label: "セル電圧監視数", value: "最大104セル" },
      { label: "電圧測定範囲", value: "0～5V" },
      { label: "電圧測定精度", value: "±3mV" },
      { label: "温度監視点数", value: "最大112点" },
      { label: "温度測定範囲", value: "－40～125℃" },
      { label: "セルバランシング", value: "パッシブ方式、100mA" },
      { label: "通信", value: "CAN、250kbps（デフォルト）" },
      { label: "外形寸法", value: "252 × 98 × 44mm" },
    ],
    highlights: [
      { label: "CELL", value: "最大104" },
      { label: "TEMPERATURE", value: "最大112点" },
      { label: "ACCURACY", value: "±3mV" },
    ],
    image: "/assets/products/bms/n-bmu-l37104-bd.png",
    sheetImage: "/assets/products/bms/n-bmu-l37104-bd-sheet.png",
  },
  {
    category: "ems",
    slug: "n-bk-1000",
    displayName: "EMSコントローラー",
    model: "N-BK-1000",
    tagline: "多様な通信インターフェースとI/Oを備え、設備のデータ収集・監視・制御を担うEMSコントローラー。",
    overview: [
      "N-BK-1000は、蓄電池システムやエネルギー設備向けのエッジ制御を担うEMSコントローラーです。6系統のRS485、2系統のCAN、2系統のEthernetを備え、PCS、BMS、電力計、各種センサーとの通信・データ収集に対応します。",
      "DI／DOによる状態入力や外部機器制御に加え、4G通信とGPS／北斗による測位機能を備え、遠隔監視や多拠点設備の通信構成を支援します。",
    ],
    features: [
      "多様な通信インターフェース",
      "現場I/Oによる設備制御",
      "エッジデータ処理",
      "4G・GPS／北斗による遠隔通信対応",
    ],
    specs: [
      { label: "CPU", value: "Dual-Core Cortex-A7、1.2GHz" },
      { label: "メモリ", value: "512MB" },
      { label: "内蔵ストレージ", value: "4GB" },
      { label: "電源", value: "DC24V（入力範囲 DC9～36V）" },
      { label: "RS485", value: "6ポート" },
      { label: "CAN", value: "2ポート" },
      { label: "Ethernet", value: "2ポート" },
      { label: "DI / DO", value: "各4点" },
      { label: "4G・GPS／北斗", value: "対応" },
      { label: "動作温度", value: "－25～55℃" },
    ],
    highlights: [
      { label: "RS485", value: "6 PORTS" },
      { label: "ETHERNET", value: "2 PORTS" },
      { label: "DI / DO", value: "各4点" },
    ],
    image: "/assets/products/ems/n-bk-1000.png",
    sheetImage: "/assets/products/ems/n-bk-1000-sheet.png",
  },
  {
    category: "ems",
    slug: "n-bk-2000",
    displayName: "EMSコントローラー",
    model: "N-BK-2000",
    tagline: "多彩な通信・I/Oを備え、大規模設備のデータ収集・監視・現場制御を担う高機能EMSコントローラー。",
    overview: [
      "N-BK-2000は、蓄電池システムやエネルギー設備におけるエッジ制御を担う高拡張型EMSコントローラーです。8系統のRS485、2系統のCAN、4系統のEthernet、DI／DO各10点を備え、各種機器との通信・データ収集・状態監視・現場制御に対応します。",
      "4G通信、GPS・北斗測位、Nano-SIMに対応し、遠隔監視や多拠点設備の通信構成を支援。大規模で複雑な蓄電池システムへの適用を想定したモデルです。",
    ],
    features: [
      "豊富な通信インターフェース",
      "多点I/Oによる現場設備制御",
      "高拡張型エッジ制御",
      "4G・GPS／北斗による遠隔通信対応",
    ],
    specs: [
      { label: "CPU", value: "Dual-Core Cortex-A7、1.2GHz" },
      { label: "メモリ", value: "512MB" },
      { label: "内蔵ストレージ", value: "4GB" },
      { label: "電源", value: "DC24V（入力範囲 DC20～26V）" },
      { label: "RS485", value: "8ポート" },
      { label: "CAN", value: "2ポート" },
      { label: "Ethernet", value: "4ポート" },
      { label: "DI / DO", value: "各10点" },
      { label: "4G・GPS／北斗", value: "対応" },
      { label: "動作温度", value: "－25～55℃" },
    ],
    highlights: [
      { label: "RS485", value: "8 PORTS" },
      { label: "ETHERNET", value: "4 PORTS" },
      { label: "DI / DO", value: "各10点" },
    ],
    image: "/assets/products/ems/n-bk-2000.png",
    sheetImage: "/assets/products/ems/n-bk-2000-sheet.png",
  },
  {
    category: "ems",
    slug: "n-bk-3000",
    displayName: "EMSコントローラー",
    model: "N-BK-3000",
    tagline: "高性能プロセッサと豊富な通信インターフェースを備え、大規模蓄電池システムを支えるEMSコントローラー。",
    overview: [
      "N-BK-3000は、大規模蓄電池システムやエネルギー設備におけるエッジ制御を担う高性能EMSコントローラーです。4コアCortex-A55、2GBメモリ、16GBストレージを搭載し、データ収集、通信、監視、制御処理を安定して実行します。",
      "8系統のRS485、2系統のCAN、5系統のEthernet、DI／DO各8点を備え、HDMI表示とTFカード拡張にも対応。4G通信とGPS・北斗測位機能もオプションで選択できます。",
    ],
    features: [
      "高性能エッジ処理",
      "豊富な通信インターフェース",
      "多点I/Oによる設備制御",
      "高いシステム拡張性",
    ],
    specs: [
      { label: "CPU", value: "Quad-Core Cortex-A55、1.8GHz" },
      { label: "メモリ", value: "2GB" },
      { label: "内蔵ストレージ", value: "16GB" },
      { label: "電源", value: "DC24V（入力範囲 DC9～36V）" },
      { label: "RS485", value: "8ポート" },
      { label: "CAN", value: "2ポート" },
      { label: "Ethernet", value: "5ポート" },
      { label: "DI / DO", value: "各8点" },
      { label: "4G・GPS／北斗", value: "オプション対応" },
      { label: "動作温度", value: "－25～55℃" },
    ],
    highlights: [
      { label: "CPU", value: "4 CORE" },
      { label: "ETHERNET", value: "5 PORTS" },
      { label: "STORAGE", value: "16GB" },
    ],
    image: "/assets/products/ems/n-bk-3000.png",
    sheetImage: "/assets/products/ems/n-bk-3000-sheet.png",
  },
  {
    category: "pcs",
    slug: "n-pws1-1375ktl-h-jp-6m1-o",
    displayName: "パワーコンディショナー",
    model: "N-PWS1-1375KTL-H-JP-6M1-O",
    tagline: "高効率・高速応答・モジュール拡張に対応した、大規模蓄電池システム向け高出力PCS。",
    overview: [
      "N-PWS1-1375KTL-H-JP-6M1-Oは、大規模蓄電池システム向けのパワーコンディショナーです。1～6台のパワーモジュールにより、約172kWから最大1.03MW級まで設備容量に応じた構成が可能です。",
      "AC550V出力、最高効率97.5％、20ms未満の高速応答、グリッドサポート機能、ピークカット・ピークシフトに対応。RS485、Ethernet、CANによりEMSやBMSとも連携します。",
    ],
    features: [
      "柔軟なモジュール構成",
      "高効率・高信頼性",
      "高速応答・グリッドサポート",
      "高い環境適応性・通信性",
    ],
    specs: [
      { label: "定格容量", value: "1030kVA" },
      { label: "定格AC電圧", value: "550V（－15％～＋10％）" },
      { label: "DC電圧範囲", value: "855～1500VDC" },
      { label: "最高効率", value: "97.5％" },
      { label: "応答速度", value: "20ms未満" },
      { label: "電流歪率", value: "3％以下" },
      { label: "保護等級", value: "IP54" },
      { label: "使用周囲温度", value: "－20～60℃" },
      { label: "通信", value: "RS485 / Ethernet / CAN" },
      { label: "外形寸法", value: "2200 × 2160 × 1300mm" },
    ],
    highlights: [
      { label: "RATED CAPACITY", value: "1030kVA" },
      { label: "EFFICIENCY", value: "97.5%" },
      { label: "RESPONSE", value: "< 20ms" },
    ],
    image: "/assets/products/pcs/n-pws1-1375ktl-h-jp-6m1-o.png",
    sheetImage: "/assets/products/pcs/n-pws1-1375ktl-h-jp-6m1-o-sheet.png",
  },
  {
    category: "pcs",
    slug: "n-pwx1-1250ktl-h-ex",
    displayName: "パワーコンディショナー",
    model: "N-PWX1-1250KTL-H-EX",
    tagline: "高効率・高耐環境性能とグリッドフォーミング機能を備えた、大規模蓄電池システム向け1250kVA級PCS。",
    overview: [
      "N-PWX1-1250KTL-H-EXは、大規模蓄電池システム向けの1250kVA級パワーコンディショナーです。1500Vクラスの高電圧DCシステムに対応し、最大効率98.7％、IP65・C5の耐環境性能を備えています。",
      "VSG・PQ・VF運転、四象限制御、LVRT・HVRT、ブラックスタート、グリッドフォーミングに対応し、系統連系からオフグリッド運転まで幅広い用途を支援します。",
    ],
    features: [
      "高効率・1500V高電圧設計",
      "多様な運転・四象限制御",
      "グリッドフォーミング・ブラックスタート対応",
      "高い耐環境性・システム拡張性",
    ],
    specs: [
      { label: "定格容量", value: "1250kVA" },
      { label: "最大DC電力", value: "1375kW" },
      { label: "DC電圧範囲", value: "1040～1500VDC" },
      { label: "最大効率", value: "98.7％" },
      { label: "定格AC電圧", value: "550V（－15％～＋10％）" },
      { label: "保護等級", value: "IP65 / C5" },
      { label: "使用周囲温度", value: "－40～60℃" },
      { label: "並列運転", value: "AC／DC側 最大4台" },
      { label: "通信", value: "RS485 / Ethernet / CAN" },
      { label: "外形寸法", value: "720 × 2300 × 1600mm" },
    ],
    highlights: [
      { label: "RATED CAPACITY", value: "1250kVA" },
      { label: "MAX EFFICIENCY", value: "98.7%" },
      { label: "PROTECTION", value: "IP65 / C5" },
    ],
    image: "/assets/products/pcs/n-pwx1-1250ktl-h-ex.png",
    sheetImage: "/assets/products/pcs/n-pwx1-1250ktl-h-ex-sheet.png",
  },
  {
    category: "pcs",
    slug: "n-pws1-49-9m-jp-r",
    displayName: "パワーコンディショナー",
    model: "N-PWS1-49.9M-JP-R",
    tagline: "日本向け49.9kW蓄電池システムに対応する、高効率・高信頼性PCS。",
    overview: [
      "N-PWS1-49.9M-JP-Rは、蓄電池システム向けに設計された49.9kW級パワーコンディショナーです。PWS1シリーズの高効率・高応答性能をベースに、単機出力を49.9kWに制限した専用仕様です。",
      "有効電力・無効電力の四象限制御、定電力制御、定電圧制御、電流制限制御に対応。高圧ボックスを一体化しない構成で、設備に応じた柔軟なシステム設計が可能です。",
    ],
    features: [
      "49.9kW専用出力仕様",
      "高効率・高安定性",
      "多様な充放電制御",
      "高速応答・BMS／EMS連携",
    ],
    specs: [
      { label: "定格出力", value: "49.9kW" },
      { label: "DC電圧範囲", value: "600～1000VDC" },
      { label: "効率", value: "98％" },
      { label: "応答時間", value: "15ms未満" },
      { label: "電流歪率", value: "3％以下" },
      { label: "保護等級", value: "IP66 / C5" },
      { label: "使用周囲温度", value: "－40～60℃" },
      { label: "通信", value: "RS485 / Ethernet / CAN" },
      { label: "外形寸法", value: "720 × 265 × 960mm" },
      { label: "質量", value: "115kg以下" },
    ],
    highlights: [
      { label: "RATED OUTPUT", value: "49.9kW" },
      { label: "EFFICIENCY", value: "98%" },
      { label: "RESPONSE", value: "< 15ms" },
    ],
    image: "/assets/products/pcs/n-pws1-49-9m-jp-r.png",
    sheetImage: "/assets/products/pcs/n-pws1-49-9m-jp-r-sheet.png",
  },
  {
    category: "pcs",
    slug: "n-pcs-9567tu-2500",
    displayName: "パワーコンディショナー",
    model: "N-PCS-9567TU-2500",
    tagline: "1500V DC・2500kVA級の大容量蓄電池システムに対応する、高効率・高信頼性の屋外型PCS。",
    overview: [
      "N-PCS-9567TU-2500は、大規模蓄電池システム向けに設計された2500kVA級の屋外型パワーコンディショナーです。定格AC出力2500kVA、最大AC出力2750kVA、最大効率99％を実現します。",
      "独立した2系統の電力変換・制御システムで構成され、PQ制御、無効電力調整、IEC61850による高速通信に対応。IP65、－40～60℃、最大5000mの設置高度に対応します。",
    ],
    features: [
      "2500kVA・1500V大容量設計",
      "最大効率99％の高効率変換",
      "系統連系制御・高速通信",
      "高信頼・高拡張設計",
    ],
    specs: [
      { label: "定格AC出力", value: "2500kVA" },
      { label: "最大AC出力", value: "2750kVA" },
      { label: "定格AC電圧", value: "690V" },
      { label: "DC電圧範囲", value: "1050～1500VDC" },
      { label: "最大効率", value: "99％" },
      { label: "無効電力調整範囲", value: "－100％～＋100％" },
      { label: "保護等級", value: "IP65" },
      { label: "使用周囲温度", value: "－40～60℃" },
      { label: "通信", value: "CAN / RS485 / Ethernet / 光ファイバー" },
      { label: "外形寸法", value: "1400 × 2400 × 1600mm" },
    ],
    highlights: [
      { label: "RATED OUTPUT", value: "2500kVA" },
      { label: "MAX EFFICIENCY", value: "99%" },
      { label: "PROTECTION", value: "IP65" },
    ],
    image: "/assets/products/pcs/n-pcs-9567tu-2500.png",
    sheetImage: "/assets/products/pcs/n-pcs-9567tu-2500-sheet.png",
  },
  {
    category: "pcs",
    slug: "n-pcs-9567mv-5000",
    displayName: "中圧PCSシステム",
    model: "N-PCS-9567MV-5000",
    tagline: "PCS・昇圧変圧器・中圧開閉装置を20ftスキッドに一体化した、大規模蓄電所向け5MVA級システム。",
    overview: [
      "N-PCS-9567MV-5000は、PCS、昇圧変圧器、中圧開閉装置を20ftスキッド内に一体化した中圧PCSシステムです。1500V DCと合計5MVA級の電力変換容量、中圧側6.6～33kVに対応します。",
      "工場で組立・配線・設定・試験を行って出荷するプレアセンブリ方式により、現地の据付・配線作業と施工期間を低減。四象限運転、グリッドフォーミング、LVRT／HVRTなど多様な系統連系制御に対応します。",
    ],
    features: [
      "PCS・変圧器・RMU一体化",
      "5MVA級・1500V大容量設計",
      "高度な系統連系制御",
      "プレアセンブリ・高保守性",
    ],
    specs: [
      { label: "システム容量", value: "5MVA級" },
      { label: "DC電圧", value: "1050～1500VDC" },
      { label: "中圧電圧", value: "6.6～33kV" },
      { label: "PCS効率", value: "98.7％" },
      { label: "変圧器容量", value: "5000kVA" },
      { label: "RMU定格電圧", value: "12 / 24 / 36kV" },
      { label: "系統制御", value: "Grid Forming / 四象限運転" },
      { label: "通信", value: "CAN / RS485 / Ethernet / 光ファイバー" },
      { label: "外形寸法", value: "6058 × 2896 × 2438mm（20ft）" },
      { label: "保護等級", value: "IP54" },
    ],
    highlights: [
      { label: "SYSTEM CAPACITY", value: "5MVA" },
      { label: "MEDIUM VOLTAGE", value: "6.6～33kV" },
      { label: "PACKAGE", value: "20ft" },
    ],
    image: "/assets/products/pcs/n-pcs-9567mv-5000.png",
    sheetImage: "/assets/products/pcs/n-pcs-9567mv-5000-sheet.png",
  },
  {
    category: "pcs",
    slug: "n-pcs-9726gmc",
    displayName: "PMS制御装置",
    model: "N-PCS-9726GMC",
    tagline: "多数のPCSを高速・集中制御し、大規模蓄電所の安定運転と系統連系制御を支えるPMS制御装置。",
    overview: [
      "N-PCS-9726GMCは、大規模蓄電池システムにおける複数のPCSを集中管理・協調制御するPMS制御装置です。上位システムからの指令を受け、有効・無効電力制御、一次周波数調整、慣性応答、動的電圧調整をリアルタイムで実行します。",
      "逆潮流防止、主変圧器過負荷防止、ブラックスタート、系統連系／自立運転切替、SOC動的バランス制御に対応。IEC61850、IEC103、Modbus TCP、GOOSE通信を利用できます。",
    ],
    features: [
      "多数PCSの集中・高速制御",
      "高度な系統連系制御",
      "系統連系・自立運転対応",
      "高信頼・冗長制御設計",
    ],
    specs: [
      { label: "制御PCS数", value: "最大128台 / PMS" },
      { label: "システム拡張", value: "2階層PMS構成対応" },
      { label: "冗長構成", value: "Dual PMS対応" },
      { label: "演算構成", value: "ARM + FPGA" },
      { label: "通信", value: "Ethernet / RS485 / 光ファイバー" },
      { label: "プロトコル", value: "IEC61850 / IEC103 / Modbus TCP / GOOSE" },
      { label: "時刻同期精度", value: "1ms未満" },
      { label: "電源", value: "110 / 220VDC" },
      { label: "動作温度", value: "－25～＋55℃" },
      { label: "構造", value: "19インチ・4Uラック" },
    ],
    highlights: [
      { label: "PCS CONTROL", value: "最大128台" },
      { label: "TIME SYNC", value: "< 1ms" },
      { label: "REDUNDANCY", value: "DUAL PMS" },
    ],
    image: "/assets/products/pcs/n-pcs-9726gmc.png",
    sheetImage: "/assets/products/pcs/n-pcs-9726gmc-sheet.png",
  },
];

export function isProductCategory(value: string): value is ProductCategorySlug {
  return productCategories.some((category) => category.slug === value);
}

export function getProductCategory(slug: string) {
  return productCategories.find((category) => category.slug === slug);
}

export function getProductsByCategory(category: ProductCategorySlug) {
  return products.filter((product) => product.category === category);
}

export function getProduct(category: string, slug: string) {
  return products.find((product) => product.category === category && product.slug === slug);
}

export function getRelatedProducts(product: Product) {
  return products
    .filter((item) => item.category === product.category && item.slug !== product.slug)
    .slice(0, 3);
}
