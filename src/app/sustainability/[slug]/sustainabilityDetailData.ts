export type SustainabilityDetail = {
  slug: string;
  href: string;
  variant: "community" | "environment" | "carbon";
  eyebrow: string;
  title: string;
  heroTitle: string;
  description: string;
  lead: string;
  image: {
    src: string;
    alt: string;
  };
  articleTitle: string;
  paragraphs: string[];
  pointsTitle: string;
  pointsHeading: string;
  points: string[];
  diagram: {
    src: string;
    alt: string;
    title: string;
    lead: string;
    caption: string;
  };
  actionTitle: string;
  actionLead: string;
  initiatives: Array<{
    title: string;
    text: string;
  }>;
  closingTitle: string;
  closingText: string;
};

export const sustainabilityDetails = [
  {
    slug: "community-relations",
    href: "/sustainability/community-relations",
    variant: "community",
    eyebrow: "COMMUNITY RELATIONS",
    title: "地域共生",
    heroTitle: "地域との対話から始める、再生可能エネルギー事業。",
    description:
      "自治体、土地所有者、地域住民との対話を大切にし、暮らしや産業と調和する事業運営を進めます。",
    lead: "発電設備は、地域の暮らしや産業の近くで長く運用されるインフラです。だからこそ、事業の初期段階から地域との関係づくりを大切にします。",
    image: {
      src: "/assets/sustainability/community-relations-v3.png",
      alt: "地域住民と現場スタッフが地図を見ながら地域の計画について話し合う様子",
    },
    articleTitle: "合意形成と地域メリットを、計画の初期から設計する。",
    paragraphs: [
      "自治体、土地所有者、近隣住民の皆さまとの対話を通じて、事業の目的、工事内容、運転開始後の管理体制を分かりやすく共有します。",
      "景観、騒音、工事車両の動線、安全説明など、日常生活に関わる項目を丁寧に確認し、地域の不安を事業計画へ反映します。",
      "地元企業との連携、地域雇用、地域活動への協力、災害時の情報共有など、事業が地域にとって意味のある存在となる関係づくりを進めます。",
    ],
    pointsTitle: "地域共生で重視すること",
    pointsHeading: "地域との関係づくりで確認すること。",
    points: [
      "自治体・地域住民・土地所有者との対話",
      "景観・騒音・交通・安全面への配慮",
      "地元企業との連携と地域雇用の創出",
      "地域行事・地域活動への協力",
    ],
    diagram: {
      src: "/assets/sustainability/community-relations-diagram.png",
      alt: "地域共生における自治体、住民、土地所有者、地元企業との関係を示す図",
      title: "地域関係者との接点を、計画の中心に置く。",
      lead: "発電事業は土地、生活道路、景観、地域経済と接続します。関係者ごとの接点を整理し、説明・確認・協力を同時に進めます。",
      caption: "自治体、住民、土地所有者、地元企業、交通動線を一つの地域マップとして捉えるイメージ。",
    },
    actionTitle: "対話・説明・協力を、地域対応の基本に。",
    actionLead:
      "地域共生では、設備そのものよりも、関係者との接点をどう設計するかが重要です。説明機会、生活影響の確認、地域活動との関わりを一つずつ積み上げます。",
    initiatives: [
      {
        title: "計画段階からの対話",
        text: "地域の不安や期待を早期に把握し、事業計画へ反映できるコミュニケーションを重視します。",
      },
      {
        title: "暮らしへの配慮",
        text: "工事車両、景観、騒音、安全管理など、地域の日常生活に関わる項目を丁寧に確認します。",
      },
      {
        title: "地域経済への貢献",
        text: "地元企業との協力や雇用機会の創出を通じて、事業の地域メリットを広げます。",
      },
    ],
    closingTitle: "地域に受け入れられる事業へ。",
    closingText:
      "地域との信頼関係を大切にしながら、暮らしや産業と調和するエネルギー事業を進めます。",
  },
  {
    slug: "environment",
    href: "/sustainability/environment",
    variant: "environment",
    eyebrow: "ENVIRONMENTAL CONSERVATION",
    title: "環境保全",
    heroTitle: "自然環境との調和を大切にした事業運営。",
    description:
      "地形、植生、鳥類、水環境、土壌、景観などを確認し、事業地ごとの環境負荷低減に取り組みます。",
    lead: "環境保全では、事業地ごとの自然条件を把握し、計画・施工・運用の各段階で必要な対策を講じることを重視します。",
    image: {
      src: "/assets/sustainability/environment-v3.png",
      alt: "水辺の自然環境を調査する現場スタッフ",
    },
    articleTitle: "調査・対策・モニタリングを、環境保全の軸に。",
    paragraphs: [
      "事業計画の段階から、地形、植生、鳥類、水環境、土壌、景観などの状態を確認し、事業地の環境特性を整理します。",
      "工事期間中は、粉じん、騒音、振動、濁水、廃棄物を管理し、周辺環境への負荷を抑える施工管理を徹底します。",
      "運転開始後も、設備点検や必要な環境モニタリングを継続し、確認結果に応じて適切な対応を行います。",
    ],
    pointsTitle: "環境保全で確認すること",
    pointsHeading: "環境影響を抑えるために確認すること。",
    points: [
      "計画段階からの環境影響確認",
      "工事中の粉じん・騒音・振動・濁水対策",
      "廃棄物の適正管理と周辺環境への配慮",
      "運転開始後の点検・モニタリング",
    ],
    diagram: {
      src: "/assets/sustainability/environment-diagram.png",
      alt: "地形、水環境、生態系、工事境界、監視センサーを確認する環境保全の図",
      title: "自然条件を読み取り、影響を抑える。",
      lead: "環境保全は、事業地の地形や水環境、生態系を把握することから始まります。調査、施工管理、運用後の確認を分けて管理します。",
      caption: "水環境、土壌、鳥類、植生、工事境界を現場で確認しながら管理するイメージ。",
    },
    actionTitle: "調査・施工管理・継続確認を徹底する。",
    actionLead:
      "環境保全では、自然条件の把握、工事中の負荷低減、運用後の確認を分けて管理します。感覚的な配慮ではなく、段階ごとの確認項目として扱います。",
    initiatives: [
      {
        title: "環境影響の確認",
        text: "地形、植生、鳥類、水環境、土壌、景観など、事業地ごとの特性を確認します。",
      },
      {
        title: "工事中の負荷低減",
        text: "粉じん、騒音、振動、濁水、廃棄物を管理し、周辺環境への影響を抑えます。",
      },
      {
        title: "運用後の継続管理",
        text: "定期点検や必要なモニタリングを通じて、設備と環境の状態を継続的に確認します。",
      },
    ],
    closingTitle: "自然と調和する発電事業へ。",
    closingText:
      "事業地の自然条件を尊重し、施工時と運用時の確認を重ねながら、環境負荷の少ない事業運営を目指します。",
  },
  {
    slug: "carbon-neutrality",
    href: "/sustainability/carbon-neutrality",
    variant: "carbon",
    eyebrow: "CARBON NEUTRALITY",
    title: "カーボンニュートラル",
    heroTitle: "脱炭素社会の実現に向けて。",
    description:
      "再生可能電源、蓄電池、水素、AI制御を組み合わせ、CO₂排出量削減に向けたエネルギー基盤を構想します。",
    lead: "カーボンニュートラルでは、発電設備の導入に加え、つくった電力を安定して使い続けるための仕組みづくりが重要です。",
    image: {
      src: "/assets/sustainability/carbon-neutrality-v3.png",
      alt: "蓄電池、太陽光、水素設備が連携するカーボンニュートラルインフラ",
    },
    articleTitle: "CO₂削減効果を、長く続くエネルギー価値へ。",
    paragraphs: [
      "風力発電をはじめとする再生可能電源の活用により、化石燃料由来のエネルギー利用を減らし、CO₂排出量の削減に寄与します。",
      "蓄電池、水素、AIデータセンター領域との連携を視野に入れ、発電、蓄電、利用、制御をつなぐエネルギー基盤を構想します。",
      "運転データの把握、効率的なメンテナンス、発電性能の維持を通じて、導入後も脱炭素価値が継続する運用を目指します。",
    ],
    pointsTitle: "カーボンニュートラルで重視すること",
    pointsHeading: "脱炭素価値を高めるために取り組むこと。",
    points: [
      "再生可能電源の導入拡大",
      "蓄電池・水素とのエネルギー連携",
      "運転効率と発電性能の維持",
      "CO₂削減価値の継続的な創出",
    ],
    diagram: {
      src: "/assets/sustainability/carbon-neutrality-diagram.png",
      alt: "風力、太陽光、蓄電池、水素、AIデータセンター、送電網を接続する脱炭素エネルギー基盤の図",
      title: "発電・蓄電・利用・制御を一体で考える。",
      lead: "脱炭素価値を高めるには、再生可能電源を増やすだけでなく、電力をため、使い、制御する仕組みをつなぐことが重要です。",
      caption: "再生可能電源、蓄電池、水素、AI制御、需要側設備をつなぐエネルギー連携のイメージ。",
    },
    actionTitle: "発電・蓄電・利用をつなぎ、脱炭素効果を高める。",
    actionLead:
      "カーボンニュートラルでは、単体設備の導入だけでなく、エネルギーをどう生み、ため、使い、制御するかを一体で考えます。",
    initiatives: [
      {
        title: "再生可能電源の導入",
        text: "自然由来の電源を活用し、化石燃料への依存低減とCO₂排出量削減につなげます。",
      },
      {
        title: "エネルギーマネジメント",
        text: "蓄電池や水素、AI制御と組み合わせ、電力の安定利用と効率的な運用を検討します。",
      },
      {
        title: "長期運用データの活用",
        text: "運転状況や設備性能を把握し、脱炭素価値が継続する運用改善につなげます。",
      },
    ],
    closingTitle: "次世代へつなぐエネルギー基盤へ。",
    closingText:
      "再生可能電源、蓄電、水素、AI制御を組み合わせ、脱炭素社会を支えるエネルギー基盤づくりに取り組みます。",
  },
] as const satisfies readonly SustainabilityDetail[];

export type SustainabilitySlug = (typeof sustainabilityDetails)[number]["slug"];

export function getSustainabilityDetail(slug: string): SustainabilityDetail | undefined {
  return sustainabilityDetails.find((item) => item.slug === slug);
}

export function getOtherSustainabilityDetails(slug: string): SustainabilityDetail[] {
  return sustainabilityDetails.filter((item) => item.slug !== slug);
}
