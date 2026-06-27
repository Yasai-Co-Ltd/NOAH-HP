/**
 * 採用情報（募集職種）の共有データ。
 *
 * 一覧ページ（/recruit）、個別ページ（/recruit/[slug]）、
 * 応募フォーム（/recruit/apply）から参照する単一の情報源。
 */

export interface JobMeta {
  label: string;
  value: string;
}

export interface JobOpening {
  /** URL スラッグ（/recruit/[slug]） */
  slug: string;
  title: string;
  /** カードや一覧で使う短い説明 */
  summary: string;
  /** 関連領域タグ */
  tags: string[];
  /** 勤務地・募集人数などの基本情報 */
  meta: JobMeta[];
  /** 応募条件 */
  requirements: string[];
}

export const jobOpenings: readonly JobOpening[] = [
  {
    slug: "hr-general-affairs",
    title: "人事・総務",
    summary:
      "人事・総務に関する管理業務を中心に、法務関連手続き、営業サポート、翻訳、庶務まで会社運営を支える職種です。",
    tags: ["総務関連事務", "法務手続き", "営業サポート", "中日翻訳"],
    meta: [
      { label: "勤務地", value: "東京都中野区" },
      { label: "募集人数", value: "若干名" },
      { label: "雇用形態", value: "正社員／契約社員" },
      { label: "給与", value: "面談" },
    ],
    requirements: [
      "専門学校卒以上",
      "事務経験、Word・Excel・PowerPointなどの基本操作",
      "日本語でのメール・電話対応ができる方",
      "英語が話せる方は歓迎",
    ],
  },
  {
    slug: "sales",
    title: "営業募集",
    summary:
      "水素関連設備、バイオマス発電向け設備、ハンドリング装置など、エネルギー・プラント領域の提案営業を担います。",
    tags: ["法人営業", "水素・再エネ", "プラント設備", "提案資料作成"],
    meta: [
      { label: "勤務地", value: "東京都中野区" },
      { label: "募集人数", value: "若干名" },
      { label: "雇用形態", value: "正社員／契約社員" },
      { label: "給与", value: "面談" },
    ],
    requirements: [
      "産業用機械装置の営業経験",
      "環境、プラント、自動車、水素を含むエネルギー分野への関心",
      "社内外の関係者と円滑にコミュニケーションできる方",
      "Word・Excel・Outlookなどの基本操作",
    ],
  },
  {
    slug: "electrical-engineer",
    title: "電気設備エンジニア",
    summary:
      "プラント設備建設や設備増設に関わる配線工事の設計、見積り、工事管理、保全計画、点検対応を行う職種です。",
    tags: ["電気設備", "施工管理", "保全計画", "高圧・低圧設備"],
    meta: [
      { label: "勤務地", value: "東京都中野区" },
      { label: "募集人数", value: "若干名" },
      { label: "雇用形態", value: "正社員／契約社員" },
      { label: "給与", value: "面談" },
    ],
    requirements: [
      "工場、プラント、発電所での高圧・低圧電気設備の保全、メンテナンス、施工管理などの経験",
      "電気工事士、電気主任技術者、電気工事施工管理技士などの資格保有者は歓迎",
      "緊急時対応、外注業者管理、小規模工事の施工管理に対応できる方",
    ],
  },
];

export function getJobBySlug(slug: string): JobOpening | undefined {
  return jobOpenings.find((job) => job.slug === slug);
}

export const recruitCommonInfo: readonly JobMeta[] = [
  { label: "勤務地", value: "東京都中野区本町2丁目46-1 サンブライトツインビル北棟15F" },
  { label: "雇用形態", value: "職種により正社員／契約社員。詳細は面談時に確認します。" },
  { label: "給与", value: "経験・スキルを考慮し、面談のうえ決定します。" },
  { label: "応募方法", value: "応募フォームに必要事項をご入力のうえ送信してください。" },
];

export interface ApplyStep {
  title: string;
  text: string;
}

export const applySteps: readonly ApplyStep[] = [
  {
    title: "募集職種を確認",
    text: "仕事内容、応募条件、勤務地を確認してください。",
  },
  {
    title: "フォームで応募",
    text: "応募職種を選び、必要事項を入力して送信してください。",
  },
  {
    title: "書類確認・面談",
    text: "経験や希望を確認し、必要に応じて面談を行います。",
  },
  {
    title: "条件確認・採用",
    text: "雇用条件を確認し、入社までの手続きを進めます。",
  },
];
