import type { ContentProvider } from "../provider";
import type { FindParams, NewsItem, Project, Service } from "../types";

const services: Service[] = [
  {
    id: "svc-hydrogen",
    slug: "hydrogen",
    title: "水素事業",
    description: "水素の製造・貯蔵・供給設備の設計から施工、運用までをトータルで支援します。",
    image: { src: "/assets/hydrogen-hq.jpg", alt: "水素供給設備" },
    icon: { tone: "blue", label: "H₂" },
    href: "#contact",
  },
  {
    id: "svc-ev",
    slug: "ev",
    title: "新エネルギー自動車",
    description:
      "次世代モビリティの導入支援や充電インフラ整備を行い、移動の脱炭素化を促進します。",
    image: { src: "/assets/ev-hq.jpg", alt: "電気自動車と充電設備" },
    icon: { tone: "green", label: "EV" },
    href: "#contact",
  },
  {
    id: "svc-power",
    slug: "power",
    title: "発電事業",
    description: "再生可能エネルギーを中心に、効率的で安定した発電設備の設計・施工を担います。",
    image: { src: "/assets/power-hq.jpg", alt: "発電プラント設備" },
    icon: { tone: "gold", label: "kW" },
    href: "#contact",
  },
  {
    id: "svc-battery",
    slug: "battery",
    title: "蓄電池事業",
    description:
      "大規模蓄電システムの導入により、エネルギーの最適化とレジリエンス向上に貢献します。",
    image: { src: "/assets/battery-hq.jpg", alt: "大型蓄電池設備" },
    icon: { tone: "teal", label: "B" },
    href: "#contact",
  },
  {
    id: "svc-wind",
    slug: "wind",
    title: "風力発電事業",
    description:
      "風況調査から設計・施工・保守まで、風力発電プロジェクトを一貫してサポートします。",
    image: { src: "/assets/hero-wind-hq.jpg", alt: "風力発電設備" },
    icon: { tone: "navy", label: "W" },
    href: "#contact",
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
    id: "news-2024-05-20",
    slug: "site-renewal",
    title: "コーポレートサイトをリニューアルしました。",
    publishedAt: "2024-05-20",
    category: "お知らせ",
    href: "#",
  },
  {
    id: "news-2024-05-10",
    slug: "new-renewable-project",
    title: "再生可能エネルギー事業の新プロジェクトを開始",
    publishedAt: "2024-05-10",
    category: "プレスリリース",
    href: "#",
  },
  {
    id: "news-2024-04-25",
    slug: "gw-holiday",
    title: "ゴールデンウィーク休業のお知らせ",
    publishedAt: "2024-04-25",
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
