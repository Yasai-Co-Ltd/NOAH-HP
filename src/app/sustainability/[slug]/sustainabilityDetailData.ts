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
      "自治体、土地所有者、地域住民との対話を重ね、地域経済や日々の暮らしと調和する事業運営を進めます。",
    lead: "発電設備やエネルギー関連設備は、地域の暮らしや産業の近くで長く運用されるインフラです。だからこそ、計画段階から地域の声を聞き、事業の必要性、工事内容、安全管理、運用後の関わり方まで丁寧に共有します。",
    image: {
      src: "/assets/sustainability/community-relations-v3.png",
      alt: "地域住民と現場スタッフが地図を見ながら地域の計画について話し合う様子",
    },
    articleTitle: "地域の理解とメリットを、計画の初期から設計する。",
    paragraphs: [
      "自治体、土地所有者、近隣住民の皆さまとの対話を通じて、事業の目的、設備の安全性、工事期間中の対応、運転開始後の管理体制を分かりやすく共有します。",
      "景観、騒音、工事車両の動線、安全説明など、日常生活に関わる項目を早い段階で確認し、地域の不安や期待を事業計画に反映します。",
      "地元企業との連携、地域雇用、地域活動への参加・協力、周辺の美化活動などを通じて、事業が地域の経済や暮らしに還元される関係づくりを進めます。",
      "再生可能エネルギーを一つの設備導入で終わらせず、地域資源の活用や新しい産業づくりにつながる可能性も地域とともに検討します。",
    ],
    pointsTitle: "地域共生で重視すること",
    pointsHeading: "地域との関係づくりで確認すること。",
    points: [
      "自治体・地域住民・土地所有者との対話",
      "景観・騒音・交通・安全面への配慮",
      "地元企業との連携と地域雇用の創出",
      "地域イベント・清掃活動への参加",
      "地域課題に応じた共創テーマの検討",
    ],
    diagram: {
      src: "/assets/sustainability/community-relations-diagram.png",
      alt: "地域共生における自治体、住民、土地所有者、地元企業との関係を示す図",
      title: "地域関係者との接点を、計画の中心に置く。",
      lead: "エネルギー事業は土地、生活道路、景観、雇用、地域経済と接続します。関係者ごとの接点を整理し、説明・確認・協力を同時に進めます。",
      caption: "自治体、住民、土地所有者、地元企業、交通動線、地域活動を一つの地域マップとして捉えるイメージ。",
    },
    actionTitle: "説明・参加・還元を、地域対応の基本に。",
    actionLead:
      "地域共生では、設備そのものよりも、関係者との接点をどう設計するかが重要です。説明機会、生活影響の確認、地域経済への波及、地域活動との関わりを一つずつ積み上げます。",
    initiatives: [
      {
        title: "計画段階からの対話",
        text: "事業の必要性、設備の安全性、工事内容、運用後の管理体制を共有し、地域の不安や期待を早期に把握します。",
      },
      {
        title: "暮らしへの配慮",
        text: "工事車両、景観、騒音、安全管理など、地域の日常生活に関わる項目を丁寧に確認します。",
      },
      {
        title: "地域経済への貢献",
        text: "地元企業との協力、雇用機会、立地・運営に伴う経済波及など、事業の地域メリットを広げます。",
      },
      {
        title: "地域活動との接点づくり",
        text: "地域イベントへの参加・協賛、施設見学、周辺清掃などを通じて、日常的な接点を育てます。",
      },
    ],
    closingTitle: "地域に受け入れられる事業へ。",
    closingText:
      "地域との信頼関係を大切にしながら、暮らし、産業、地域の未来と調和するエネルギー事業を進めます。",
  },
  {
    slug: "environment",
    href: "/sustainability/environment",
    variant: "environment",
    eyebrow: "ENVIRONMENTAL CONSERVATION",
    title: "環境保全",
    heroTitle: "自然環境との調和を大切にした事業運営。",
    description:
      "生物多様性、水環境、土壌、景観などを確認し、計画・施工・運用の各段階で環境負荷の低減に取り組みます。",
    lead: "再生可能エネルギーは地球環境に貢献する一方で、建設地の自然環境に負荷を与えない配慮が不可欠です。NOAHは、事業地ごとの地形、植生、鳥類、水環境、土壌、景観を把握し、自然と共生する事業運営を目指します。",
    image: {
      src: "/assets/sustainability/environment-v3.png",
      alt: "水辺の自然環境を調査する現場スタッフ",
    },
    articleTitle: "生物多様性と水・土壌環境を、事業計画に組み込む。",
    paragraphs: [
      "計画段階から、専門的な調査や関係者との確認を通じて、希少植物、鳥類、動物の移動経路、水の流れ、土砂の流出リスクなどを整理します。",
      "設備配置や工事範囲を検討する際は、改変面積を抑え、過剰な伐採を避け、必要に応じて在来種を意識した緑化や植生回復を行います。",
      "工事期間中は、粉じん、騒音、振動、濁水、廃棄物を管理し、沈砂・排水・土砂流出防止など、現場条件に応じた対策を講じます。",
      "運転開始後も、設備点検や必要な環境モニタリングを継続し、確認結果に応じて追加対策や運用改善につなげます。",
    ],
    pointsTitle: "環境保全で確認すること",
    pointsHeading: "環境影響を抑えるために確認すること。",
    points: [
      "計画段階からの生態系・環境影響確認",
      "改変面積・伐採範囲の最小化",
      "濁水・土砂流出・廃棄物の適正管理",
      "希少植物・鳥類・動物移動経路への配慮",
      "運転開始後の点検・モニタリング",
    ],
    diagram: {
      src: "/assets/sustainability/environment-diagram.png",
      alt: "地形、水環境、生態系、工事境界、監視センサーを確認する環境保全の図",
      title: "自然条件を読み取り、影響を抑える。",
      lead: "環境保全は、事業地の地形や水環境、生態系を把握することから始まります。調査、設計、施工管理、運用後の確認を分けて管理します。",
      caption: "水環境、土壌、鳥類、植生、工事境界、排水経路を現場で確認しながら管理するイメージ。",
    },
    actionTitle: "調査・低負荷施工・継続確認を徹底する。",
    actionLead:
      "環境保全では、自然条件の把握、設計段階での回避・低減、工事中の負荷管理、運用後の確認を分けて管理します。感覚的な配慮ではなく、段階ごとの確認項目として扱います。",
    initiatives: [
      {
        title: "生態系への配慮",
        text: "希少植物、鳥類、動物の移動経路などを確認し、設備配置や工事計画に反映します。",
      },
      {
        title: "改変範囲の最小化",
        text: "造成範囲や伐採範囲を抑え、必要に応じて斜面緑化や植生回復を行います。",
      },
      {
        title: "水・土壌への対策",
        text: "濁水処理、沈砂、土砂流出防止、排水経路の確認など、現場条件に応じた対策を講じます。",
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
      "再生可能電源、蓄電池、水素、AI制御を組み合わせ、企業と地域のCO₂排出量削減につながるエネルギー基盤を構想します。",
    lead: "カーボンニュートラルでは、再生可能エネルギーをつくるだけでなく、その価値を安定して使い、企業や地域の脱炭素に役立てる仕組みが重要です。",
    image: {
      src: "/assets/sustainability/carbon-neutrality-v3.png",
      alt: "蓄電池、太陽光、水素設備が連携するカーボンニュートラルインフラ",
    },
    articleTitle: "CO₂削減効果を、企業と地域で使える価値へ。",
    paragraphs: [
      "風力発電やバイオマス発電などの再生可能電源を活用し、化石燃料由来のエネルギー利用を減らすことで、CO₂排出量の削減に寄与します。",
      "蓄電池、水素モビリティ、AIデータセンター領域との連携を視野に入れ、発電、蓄電、利用、制御をつなぐエネルギー基盤を構想します。",
      "非化石価値やグリーン電力の活用、PPAなどのスキームも選択肢として捉え、企業が脱炭素に取り組みやすい提案につなげます。",
      "運転データの把握、AIを活用した需給・設備管理、効率的なメンテナンスを通じて、導入後も脱炭素価値が継続する運用を目指します。",
    ],
    pointsTitle: "カーボンニュートラルで重視すること",
    pointsHeading: "脱炭素価値を高めるために取り組むこと。",
    points: [
      "再生可能電源の導入拡大",
      "蓄電池・水素とのエネルギー連携",
      "非化石価値・PPA等の活用検討",
      "AI制御による需給・設備管理",
      "CO₂削減価値の継続的な創出",
    ],
    diagram: {
      src: "/assets/sustainability/carbon-neutrality-diagram.png",
      alt: "風力、太陽光、蓄電池、水素、AIデータセンター、送電網を接続する脱炭素エネルギー基盤の図",
      title: "発電・蓄電・利用・制御を一体で考える。",
      lead: "脱炭素価値を高めるには、再生可能電源を増やすだけでなく、電力をため、使い、証書やPPAなどの環境価値も含めて制御する仕組みをつなぐことが重要です。",
      caption: "再生可能電源、蓄電池、水素、AI制御、需要側設備、環境価値をつなぐエネルギー連携のイメージ。",
    },
    actionTitle: "再エネ価値を、使える脱炭素ソリューションへ。",
    actionLead:
      "カーボンニュートラルでは、単体設備の導入だけでなく、エネルギーをどう生み、ため、使い、価値として届けるかを一体で考えます。",
    initiatives: [
      {
        title: "再生可能電源の導入",
        text: "自然由来の電源を活用し、化石燃料への依存低減とCO₂排出量削減につなげます。",
      },
      {
        title: "企業の脱炭素支援",
        text: "再エネ電力、非化石価値、PPAなどの選択肢を踏まえ、企業がCO₂削減に取り組みやすい形を検討します。",
      },
      {
        title: "エネルギーマネジメント",
        text: "蓄電池や水素、AI制御と組み合わせ、電力の安定利用、ピーク抑制、効率的な運用を検討します。",
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
