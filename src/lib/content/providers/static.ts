import type { ContentProvider } from "../provider";
import type { FindParams, NewsItem, Project, Service } from "../types";

const services: Service[] = [
  {
    id: "svc-batteryenergystorage",
    slug: "batteryenergystorage",
    title: "蓄電池事業",
    description:
      "大規模蓄電システムの導入により、再生可能エネルギーの安定活用と地域のレジリエンス向上に貢献します。",
    image: { src: "/assets/battery-hq.jpg", alt: "大型蓄電池設備" },
    icon: { tone: "teal", label: "B" },
    href: "/business/batteryenergystorage",
  },
  {
    id: "svc-windpower",
    slug: "windpower",
    title: "風力発電事業",
    description:
      "風況調査から設計・施工・保守まで、風力発電プロジェクトを一貫してサポートします。",
    image: { src: "/assets/hero-wind-hq.jpg", alt: "風力発電設備" },
    icon: { tone: "navy", label: "W" },
    href: "/business/windpower",
  },
  {
    id: "svc-biomasspower",
    slug: "biomasspower",
    title: "バイオマス",
    description:
      "木質資源などを活用したバイオマス発電により、地域資源の循環と安定した再生可能エネルギー供給を支えます。",
    image: { src: "/assets/business-biomasspower.png", alt: "バイオマス発電設備" },
    icon: { tone: "green", label: "Bio" },
    href: "/business/biomasspower",
  },
  {
    id: "svc-hopper",
    slug: "hopper",
    title: "走行式集塵ホッパー事業",
    description:
      "港湾・発電所・資源受入施設に向けて、粉じんを抑えながら原料を効率的に荷役する走行式集塵ホッパーを提案します。",
    image: { src: "/assets/business-hopper.png", alt: "走行式集塵ホッパー設備" },
    icon: { tone: "gold", label: "HP" },
    href: "/business/hopper",
  },
  {
    id: "svc-hydrogen-mobility",
    slug: "hydrogen-mobility",
    title: "水素モビリティ事業",
    description:
      "水素ステーションや関連設備の整備を通じて、商用車・産業車両を中心とした次世代モビリティを支えます。",
    image: {
      src: "/assets/business-hydrogen-mobility-branded.jpg",
      alt: "NOAHロゴ入り水素トラックの充填設備",
    },
    icon: { tone: "blue", label: "H₂" },
    href: "/business/hydrogen-mobility",
  },
  {
    id: "svc-hydrogen-compressor",
    slug: "hydrogen-compressor",
    title: "水素コンプレッサー事業",
    description:
      "水素充填・オンサイト水素ステーションに向けて、高圧圧縮設備の選定、構成、導入計画を支援します。",
    image: {
      src: "/assets/hydrogen-compressor/compressor-hero.jpg",
      alt: "工場内に設置された水素コンプレッサーユニット",
    },
    icon: { tone: "cyan", label: "HC" },
    href: "/business/hydrogen-compressor",
  },
  {
    id: "svc-ai-data-center",
    slug: "ai-data-center",
    title: "AIデータセンター事業",
    description:
      "AI計算基盤を支えるデータセンターの電力・冷却・エネルギーマネジメントを総合的に計画します。",
    image: {
      src: "/assets/business-ai-data-center.jpg",
      alt: "再生可能エネルギーと連携するAIデータセンター",
    },
    icon: { tone: "cyan", label: "AI" },
    href: "/business/ai-data-center",
  },
];

const projects: Project[] = [
  {
    id: "prj-hokkaido-wind",
    slug: "hokkaido-wind",
    title: "北海道風力発電所建設プロジェクト",
    meta: "出力：20MW　所在地：北海道",
    image: { src: "/assets/hero-wind-hq.jpg", alt: "風力発電所" },
  },
  {
    id: "prj-kyushu-battery",
    slug: "kyushu-battery",
    title: "大規模蓄電池システム導入事例",
    meta: "出力：15MW/60MWh　所在地：九州",
    image: { src: "/assets/battery-hq.jpg", alt: "蓄電池設備" },
  },
  {
    id: "prj-chubu-biomass",
    slug: "chubu-biomass",
    title: "バイオマス発電設備建設事例",
    meta: "出力：7.5MW　所在地：中部地方",
    image: { src: "/assets/power-hq.jpg", alt: "発電設備" },
  },
  {
    id: "prj-kanto-hydrogen",
    slug: "kanto-hydrogen",
    title: "水素ステーション整備事例",
    meta: "所在地：関東地方",
    image: { src: "/assets/hydrogen-hq.jpg", alt: "水素ステーション" },
  },
];

const news: NewsItem[] = [
  {
    id: "news-2026-07-03",
    slug: "birdman-partnership",
    title: "株式会社Birdmanと蓄電池プラント事業に関する業務提携契約を締結",
    excerpt:
      "特別高圧蓄電池プラント事業の推進に向けて、株式会社Birdman（東証グロース：7063）とアドバイザリー業務委託契約を締結しました。",
    publishedAt: "2026-07-03",
    category: "プレスリリース",
    href: "/news/birdman-partnership",
    content: {
      lead: "諾亜建設株式会社は、2026年7月3日付で、株式会社Birdman（東証グロース：7063）との間で、蓄電池プラント事業に関するアドバイザリー業務委託契約を締結しました。",
      sections: [
        {
          heading: "提携の目的・背景",
          paragraphs: [
            "世界的な脱炭素社会への移行と電力需給の調整力確保を背景に、系統用蓄電池市場は急速に拡大しています。",
            "当社は、特別高圧規模を含む蓄電池プラントについて、用地に関する権利、系統連系（接続）に係る権利・ID、および事業実施に必要な許認可を多数取得・保有しています。本提携により、当社が保有する土地・権利の開発を推進し、特別高圧蓄電池プラントの完成・運用を加速してまいります。",
          ],
        },
        {
          heading: "提携の内容",
          paragraphs: [
            "対象となるのは、系統連系および必要な許認可の取得が完了し運転可能な状態にある特別高圧蓄電池プラント（約25件・合計約790MW／うち特別高圧級 約21件）です。",
            "当社は用地・権利の取得・保有および建設業者の選定を担い、Birdman社は開発事業者の選定、蓄電池システムの部材の調達・確保を担います。",
          ],
        },
        {
          heading: "今後について",
          paragraphs: [
            "当社が保有する特別高圧蓄電池プラントには2年以内の系統連系が可能な案件も多く、特別高圧蓄電池の中では比較的早期の運用開始が見込まれます。",
            "今後もパートナーとの連携を通じて、電力の安定供給と脱炭素社会の実現に貢献してまいります。",
          ],
        },
      ],
    },
  },
  {
    id: "news-2026-05-20",
    slug: "site-renewal",
    title: "コーポレートサイトをリニューアルしました。",
    excerpt: "諾亜建設の事業領域や取り組みをより分かりやすくお伝えするため、サイト構成と掲載情報を更新しました。",
    publishedAt: "2026-05-20",
    category: "お知らせ",
    href: "/news/site-renewal",
    content: {
      lead: "このたび、諾亜建設株式会社のコーポレートサイトをリニューアルしました。",
      sections: [
        {
          heading: "リニューアルの目的",
          paragraphs: [
            "蓄電池、風力発電、バイオマス、水素モビリティ、AIデータセンターなど、諾亜建設が取り組む事業領域をより分かりやすくお伝えするため、サイト構成と掲載情報を見直しました。",
            "各事業の概要や強み、会社情報、サステナビリティに関する情報へスムーズにアクセスできる構成としています。",
          ],
        },
        {
          heading: "今後の情報発信について",
          paragraphs: [
            "今後も事業に関するお知らせ、プレスリリース、導入事例、各種取り組みを順次掲載してまいります。",
          ],
        },
      ],
    },
  },
  {
    id: "news-2026-05-10",
    slug: "new-renewable-project",
    title: "再生可能エネルギー事業の新プロジェクトを開始",
    excerpt: "地域と企業の脱炭素化を支える再生可能エネルギー事業について、新たな取り組みを開始しました。",
    publishedAt: "2026-05-10",
    category: "プレスリリース",
    href: "/news/new-renewable-project",
    content: {
      lead: "諾亜建設株式会社は、再生可能エネルギー事業における新たなプロジェクトの推進を開始しました。",
      sections: [
        {
          heading: "取り組みの背景",
          paragraphs: [
            "地域と企業の脱炭素化ニーズが高まる中、再生可能エネルギーの導入から運用までを見据えた計画づくりが重要になっています。",
            "当社はこれまで培ってきたエネルギー関連設備の知見を活かし、事業化に向けた検討と関係各所との調整を進めてまいります。",
          ],
        },
        {
          heading: "今後の予定",
          paragraphs: [
            "プロジェクトの詳細については、準備が整い次第、本サイトにて順次お知らせします。",
          ],
        },
      ],
    },
  },
  {
    id: "news-2026-04-25",
    slug: "gw-holiday",
    title: "ゴールデンウィーク休業のお知らせ",
    excerpt: "ゴールデンウィーク期間中の営業日程についてお知らせします。",
    publishedAt: "2026-04-25",
    category: "お知らせ",
    href: "/news/gw-holiday",
    content: {
      lead: "ゴールデンウィーク期間中の営業日程についてお知らせします。",
      sections: [
        {
          heading: "休業期間について",
          paragraphs: [
            "期間中にいただいたお問い合わせにつきましては、営業再開後に順次対応いたします。",
            "お急ぎのお客様にはご不便をおかけいたしますが、何卒ご了承くださいますようお願い申し上げます。",
          ],
        },
        {
          heading: "お問い合わせ対応",
          paragraphs: [
            "お問い合わせフォームからのご連絡は休業期間中も受け付けています。回答まで通常よりお時間をいただく場合があります。",
          ],
        },
      ],
    },
  },
];

function limit<T>(items: T[], params?: FindParams): T[] {
  return params?.limit ? items.slice(0, params.limit) : items;
}

export const staticProvider: ContentProvider = {
  async findServices(params) {
    return limit(services, params);
  },
  async findProjects(params) {
    return limit(projects, params);
  },
  async findNews(params) {
    return limit(news, params);
  },
};
