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
    id: "news-2026-05-20",
    slug: "site-renewal",
    title: "コーポレートサイトをリニューアルしました。",
    excerpt: "諾亜建設の事業領域や取り組みをより分かりやすくお伝えするため、サイト構成と掲載情報を更新しました。",
    publishedAt: "2026-05-20",
    category: "お知らせ",
    href: "#",
  },
  {
    id: "news-2026-05-10",
    slug: "new-renewable-project",
    title: "再生可能エネルギー事業の新プロジェクトを開始",
    excerpt: "地域と企業の脱炭素化を支える再生可能エネルギー事業について、新たな取り組みを開始しました。",
    publishedAt: "2026-05-10",
    category: "プレスリリース",
    href: "#",
  },
  {
    id: "news-2026-04-25",
    slug: "gw-holiday",
    title: "ゴールデンウィーク休業のお知らせ",
    excerpt: "ゴールデンウィーク期間中の営業日程についてお知らせします。",
    publishedAt: "2026-04-25",
    category: "お知らせ",
    href: "#",
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
