import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { isPageEnabled } from "@/lib/page-config";
import Image from "next/image";
import { Reveal } from "@/components/animation/Reveal/Reveal";
import { Button } from "@/components/ui/Button/Button";
import { SectionLabel } from "@/components/ui/SectionLabel/SectionLabel";
import styles from "./page.module.css";
import { asset } from "@/lib/asset";

export const metadata: Metadata = {
  title: "バイオマス発電事業 | 諾亜建設株式会社",
  description:
    "PKS、炭化PKS、木質ペレットの燃料供給から、バイオマス発電、乾燥設備、生産ライン、港湾荷役・粉塵管理まで、諾亜建設のバイオマス発電事業を紹介します。",
};

const fuelItems = [
  {
    name: "PKS",
    subtitle: "Palm Kernel Shell",
    image:asset("/assets/biomasspower/pks-yard.png"),
    alt: "PKSの原料ヤード",
    description:
      "パーム油の生産過程で発生するパーム椰子殻。水分が少なく発熱量が高いため、石炭代替・混焼燃料として注目されています。",
    // 認証表記（RSPO）は裏付け確認まで一旦非表示（元: RSPO認証取得工場との提携）
    points: ["現地工場との直接提携", "東南アジア各地域から調達", "石炭代替・混焼燃料に対応"],
  },
  {
    name: "炭化PKS",
    subtitle: "Carbonized PKS",
    image:asset("/assets/biomasspower/pks-close.png"),
    alt: "炭化PKSの燃料サンプル",
    description:
      "低温炭化により、エネルギー密度、ハンドリング性、粉砕性を高めたPKS。既存燃料との混焼率向上を狙えます。",
    points: ["木質チップ同等の貯蔵性", "粉砕性・ハンドリング性を向上", "販売予約受付中"],
  },
  {
    name: "木質ペレット",
    subtitle: "Wood Pellet",
    image:asset("/assets/biomasspower/wood-pellet-sample.jpg"),
    alt: "木質ペレットのサンプル",
    description:
      "木くずなどを直径6〜10mm程度に成形した燃料。化石燃料の代替として、欧州を中心に需要が拡大しています。",
    // 会社概要2026年版に基づく（木質ペレット＝FSC認証取得・GGL認証取得、中国8箇所製造工場）
    points: ["FSC・GGL認証取得工場で製造", "中国8箇所の製造工場から安定供給", "化石燃料の代替として需要拡大"],
  },
];

const pelletStrengths = [
  {
    label: "MATERIAL SUPPLY",
    title: "安定供給と認証対応",
    text: "地域の資源と燃料サプライヤーを結び、年間最大150万tまでの安定供給に対応。藁・松など、FSC認証の取得に配慮した原料調達を進めます。",
  },
  {
    label: "QUALITY CONTROL",
    title: "高品質なペレット製造",
    text: "高圧縮成形によって粉塵発生を抑制。設備構造、製造工程での集塵、流通工程での封じ込めを組み合わせます。",
  },
  {
    label: "DUST REDUCTION",
    title: "粉塵拡散を約15%削減",
    text: "テレスコピックベルト式コンベヤを採用し、積込み・搬送時の粉塵拡散を抑えます。",
  },
  {
    label: "LOCAL LOGISTICS",
    title: "近距離でつなぐ地域物流",
    text: "原材料は工場から50km圏内で調達し、製品は工場から港まで約10kmの動線で輸送します。",
  },
];

const pelletMetrics = [
  { value: "3,500〜4,500", unit: "kcal/kg", label: "発熱量" },
  { value: "2,000", unit: "ppm以下", label: "Na＋K含有量" },
  { value: "約15%", unit: "削減", label: "粉塵拡散" },
  { value: "約1,200万", unit: "t/年", label: "年間CO₂削減効果" },
];

const overseasDustMeasures = [
  "製造工程で発生する粉塵を設備構造と集塵装置で管理",
  "原料・製造・搬送の各段階に粉塵抑制技術を導入",
  "高圧縮成形と集塵フィルターで生産ラインを低粉塵化",
  "工場から港まで約10kmの短距離輸送で摩擦・振動を低減",
];

const domesticDustMeasures = [
  "港湾用集塵ホッパーで、荷役時の粉塵を処理",
  "テレスコピック設備で低粉塵排出し、荷降ろし時の拡散を防止",
  "到着後3日以内を目安に倉庫へ搬入し、長期屋外保管による劣化を抑制",
];

/** 会社概要資料（2026年版）P8「火力発電所に向けて木粉燃料改造・炭化ペレット設備設計」に基づく。 */
const equipmentItems = [
  {
    title: "防塵ホッパー・ハンドリング設備",
    text: "バッグフィルター、サイクロン、ドライフォグなどの粉塵対策と、シップアンローダー・大型コンベヤによる搬送を一体で計画します。",
  },
  {
    title: "乾燥設備・ペレット製造ライン",
    text: "内熱式乾燥機・チェーン式乾燥機と、年産3万トン・年間7,500時間稼働の木質ペレット製造ラインを設計・提供します。",
  },
  {
    title: "燃料改造技術",
    text: "微粒子粉砕機の設計やブラックペレット技術により、火力発電の高効率化・脱炭素化を支援します。",
  },
];

const supplySteps = [
  {
    title: "認証取得工場と連携",
    text: "FSC・GGLなど、持続可能性に配慮した認証取得工場から調達します。",
  },
  {
    title: "直接契約で安定供給",
    text: "現地工場との契約により、商社任せにしない供給体制を構築します。",
  },
  {
    title: "FOB / DDPに対応",
    text: "指定出発港渡し、海上運賃・輸入関税込みなど条件に合わせて設計します。",
  },
  {
    title: "粉塵を抑えて荷役",
    text: "工場、輸送、港湾、国内受入まで、粉塵発生を抑える設備計画を組み込みます。",
  },
];

const specRows = [
  {
    label: "低位発熱量",
    pks: "3,990kcal/kg",
    pellet: "4,200kcal/kg",
  },
  {
    label: "含水率",
    pks: "13.3%",
    pellet: "10%以下",
  },
  {
    label: "灰分",
    pks: "1.8%",
    pellet: "0.6%以下",
  },
  {
    label: "主な調達地",
    pks: "東南アジア各地域",
    pellet: "東南アジア各地域",
  },
];

const projectSteps = [
  {
    number: "01",
    title: "燃料条件の確認",
    text: "発熱量、含水率、灰分、荷姿、受入設備を確認します。",
  },
  {
    number: "02",
    title: "供給条件・見積",
    text: "購入量、時期、FOB・DDPなどの引取方式、長期契約の可否を整理します。",
  },
  {
    number: "03",
    title: "設備・荷役計画",
    text: "港湾荷役、ハンドリング設備、乾燥設備、粉塵対策、在庫管理を具体化します。",
  },
  {
    number: "04",
    title: "継続供給・改善",
    text: "品質、納期、粉塵、在庫を見ながら運用改善を続けます。",
  },
];

export default function BiomassPowerPage() {
  if (!isPageEnabled("/business/biomasspower")) notFound();

  return (
    <>
      <section className={styles.hero} aria-labelledby="biomass-title">
        <Image
          src={asset("/assets/biomasspower/biomass-plant-hero-v2.jpg")}
          alt=""
          fill
          priority
          sizes="100vw"
          className={styles.heroBackground}
        />
        <div className={styles.heroOverlay} />
        <div className={`container ${styles.heroInner}`}>
          <Reveal direction="left" className={styles.heroCopy}>
            <p className={styles.eyebrow}>BIOMASS POWER</p>
            <h1 id="biomass-title" className={styles.heroTitle}>
              バイオマス発電事業
            </h1>
            <p className={styles.heroLead}>
              燃料供給から設備計画まで、バイオマス発電を支える。
              PKS・炭化PKS・木質ペレットの安定供給と、乾燥設備、港湾荷役・粉塵対策までを一体で整理します。
            </p>
            <div className={styles.heroActions}>
              <Button href="/contact" variant="white">
                燃料・設備計画を相談する
              </Button>
              <Button href="#fuel" variant="cyan" className={styles.darkButton}>
                取扱燃料を見る
              </Button>
            </div>
          </Reveal>
        </div>
      </section>

      <section className={styles.pelletStrength} aria-labelledby="pellet-strength-title">
        <div className="container">
          <Reveal direction="up">
            <div className={styles.pelletStrengthHeader}>
              <div>
                <SectionLabel eyebrow="BIOMASS PELLET" subtitle="諾亜バイオマスペレットの強み" />
                <h2 id="pellet-strength-title" className={styles.pelletStrengthTitle}>
                  高品質・低粉塵・地域循環型の、
                  <br />
                  再生可能エネルギー燃料。
                </h2>
              </div>
              <p>
                原料調達から製造、粉塵対策、港湾への輸送までを地域内でつなぎ、発電所で扱いやすい燃料供給モデルを構築します。
              </p>
            </div>
          </Reveal>

          <div className={styles.pelletStrengthStage}>
            <Reveal direction="left" className={styles.pelletCycleReveal}>
              <figure className={styles.pelletCycleVisual}>
                <Image
                  src={asset("/assets/biomasspower/biomass-pellet-regional-cycle-2026.png")}
                  alt="原料調達、ペレット製造、粉塵を抑えた輸送、港湾までを結ぶ地域循環モデル"
                  fill
                  sizes="(max-width: 960px) calc(100vw - 40px), 57vw"
                  className={styles.pelletCycleImage}
                />
                <figcaption>REGIONAL BIOMASS PELLET CYCLE</figcaption>
              </figure>
            </Reveal>

            <div className={styles.pelletStrengthList} role="list" aria-label="バイオマスペレットの特徴">
              {pelletStrengths.map((strength, index) => (
                <Reveal key={strength.title} direction="up" delay={index * 60} className={styles.pelletStrengthReveal}>
                  <article role="listitem">
                    <p>{strength.label}</p>
                    <h3>{strength.title}</h3>
                    <span>{strength.text}</span>
                  </article>
                </Reveal>
              ))}
            </div>
          </div>

          <Reveal direction="up">
            <dl className={styles.pelletMetricBand} aria-label="バイオマスペレットの品質・環境指標">
              {pelletMetrics.map((metric) => (
                <div key={metric.label}>
                  <dt>{metric.label}</dt>
                  <dd>
                    {metric.value}<small>{metric.unit}</small>
                  </dd>
                </div>
              ))}
            </dl>
          </Reveal>

          <Reveal direction="up">
            <p className={styles.pelletStatement}>
              諾亜バイオマスペレットは、地域の資源を発電へつなぎ、持続可能な社会づくりに貢献します。
            </p>
            <p className={styles.pelletSourceNote}>※ CO₂削減効果は資料記載の試算値であり、原料・輸送・運用条件により変動します。</p>
          </Reveal>
        </div>
      </section>

      <section className={styles.dustChain} aria-labelledby="dust-chain-title">
        <div className="container">
          <Reveal direction="up">
            <div className={styles.dustChainHeader}>
              <div>
                <SectionLabel eyebrow="DUST REDUCTION SOLUTION" subtitle="諾亜の粉塵削減ソリューション" inverse />
                <h2 id="dust-chain-title" className={styles.dustChainTitle}>
                  製造から港湾荷役まで、
                  <br />
                  粉塵を全体で抑える。
                </h2>
              </div>
              <p>
                中国での原料調達・ペレット製造から、海上輸送、日本の港湾での荷役・保管まで。工程ごとの粉塵対策をひとつのサプライチェーンとして設計します。
              </p>
            </div>
          </Reveal>

          <div className={styles.dustChainFlow}>
            <article className={styles.dustChainStage}>
              <Reveal direction="left" className={styles.dustChainVisualReveal}>
                <figure className={styles.dustChainVisual}>
                  <Image
                    src={asset("/assets/biomasspower/fuel-storage.jpg")}
                    alt="屋内保管施設に積み上げられたバイオマス燃料"
                    fill
                    sizes="(max-width: 960px) calc(100vw - 40px), 56vw"
                    className={styles.dustChainImage}
                  />
                  <figcaption>OVERSEAS / CHINA</figcaption>
                </figure>
              </Reveal>
              <Reveal direction="right" className={styles.dustChainCopyReveal}>
                <div className={styles.dustChainCopy}>
                  <p className={styles.dustChainKicker}>海外（中国）</p>
                  <h3>製造・港湾までを、低粉塵でつなぐ。</h3>
                  <dl className={styles.dustChainFacts}>
                    <div><dt>原料供給</dt><dd>年間150万t</dd></div>
                    <div><dt>生産能力</dt><dd>年間100万t</dd></div>
                    <div><dt>原料調達圏</dt><dd>50km以内</dd></div>
                    <div><dt>工場〜港湾</dt><dd>約10km</dd></div>
                  </dl>
                  <p className={styles.dustCertification}>藁・松由来原料のFSC認証取得に対応</p>
                  <ul>
                    {overseasDustMeasures.map((measure) => <li key={measure}>{measure}</li>)}
                  </ul>
                </div>
              </Reveal>
            </article>

            <div className={styles.dustChainConnector} aria-label="次の工程へ輸送">
              <span>輸送</span>
              <i aria-hidden="true" />
            </div>

            <Reveal direction="up">
              <figure className={styles.dustTransportVisual}>
                <Image
                  src={asset("/assets/biomasspower/dust-chain-sea-transport-2026.png")}
                  alt="密閉船倉でバイオマスペレットを輸送する貨物船"
                  fill
                  sizes="(max-width: 960px) calc(100vw - 40px), 1180px"
                  className={styles.dustTransportImage}
                />
                <figcaption>
                  <span>SEA TRANSPORT</span>
                  <strong>安定した品質のまま、日本の指定港へ。</strong>
                </figcaption>
              </figure>
            </Reveal>

            <div className={styles.dustChainConnector} aria-label="次の工程へ輸送">
              <span>輸送</span>
              <i aria-hidden="true" />
            </div>

            <article className={`${styles.dustChainStage} ${styles.dustChainStageDomestic}`}>
              <Reveal direction="left" className={styles.dustChainCopyReveal}>
                <div className={styles.dustChainCopy}>
                  <p className={styles.dustChainKicker}>国内（日本）</p>
                  <h3>日本到着後も、荷役・保管で粉塵を管理。</h3>
                  <ul>
                    {domesticDustMeasures.map((measure) => <li key={measure}>{measure}</li>)}
                  </ul>
                </div>
              </Reveal>
              <Reveal direction="right" className={styles.dustChainVisualReveal}>
                <figure className={styles.dustChainVisual}>
                  <Image
                    src={asset("/assets/biomasspower/dust-collection-hopper.png")}
                    alt="港湾荷役で粉塵を抑制する走行式集塵ホッパー"
                    fill
                    sizes="(max-width: 960px) calc(100vw - 40px), 56vw"
                    className={styles.dustChainImage}
                  />
                  <figcaption>DOMESTIC / JAPAN</figcaption>
                </figure>
              </Reveal>
            </article>
          </div>

          <Reveal direction="up">
            <div className={styles.dustChainOutcome}>
              <div>
                <p>TOTAL DUST REDUCTION</p>
                <strong>約20<small>%</small></strong>
              </div>
              <p>
                全サプライチェーンを通じて粉塵を削減し、燃料管理の安全性・作業環境・品質を高めます。
              </p>
            </div>
          </Reveal>
        </div>
      </section>

      {/* <section className={styles.overview} aria-labelledby="overview-title">
        <div className={`container ${styles.overviewGrid}`}>
          <Reveal direction="left">
            <SectionLabel eyebrow="OVERVIEW" subtitle="事業概要" />
            <h2 id="overview-title" className={styles.heading}>
              カーボンニュートラル燃料を、
              <br />
              発電事業で使える設備計画へ。
            </h2>
          </Reveal>
          <Reveal direction="right">
            <div className={styles.overviewText}>
              <p>
                木質バイオマス燃料は、木材や枝葉などから作られる再生可能なエネルギー源です。
                樹木の成長過程でCO2を吸収するため、燃焼時の排出と相殺するカーボンニュートラル燃料として位置づけられます。
              </p>
              <p>
                NOAHは、燃料の調達量や価格だけではなく、認証、海上輸送、受入時の粉塵、
                乾燥設備、生産ライン、長期契約まで含めて、発電事業者が継続運用しやすい供給・設備モデルを組み立てます。
              </p>
            </div>
          </Reveal>
        </div>
      </section> */}

      <section className={styles.fuelSection} id="fuel" aria-labelledby="fuel-title">
        <div className="container">
          <Reveal direction="up">
            <div className={styles.sectionHeader}>
              <SectionLabel eyebrow="FUEL PORTFOLIO" subtitle="取扱燃料" />
              <h2 id="fuel-title" className={styles.heading}>
                用途と設備条件に合わせて、
                <br />
                燃料を選定する。
              </h2>
            </div>
          </Reveal>

          <div className={styles.fuelList}>
            {fuelItems.map((item, index) => (
              <Reveal key={item.name} direction="up" delay={index * 80}>
                <article className={styles.fuelItem}>
                  <div className={styles.fuelImageWrap}>
                    <Image
                      src={item.image}
                      alt={item.alt}
                      fill
                      sizes="(max-width: 900px) calc(100vw - 40px), 34vw"
                      className={styles.fuelImage}
                    />
                  </div>
                  <div className={styles.fuelBody}>
                    <span className={styles.fuelNumber}>{String(index + 1).padStart(2, "0")}</span>
                    <p className={styles.fuelSubtitle}>{item.subtitle}</p>
                    <h3>{item.name}</h3>
                    <p>{item.description}</p>
                    <ul>
                      {item.points.map((point) => (
                        <li key={point}>{point}</li>
                      ))}
                    </ul>
                  </div>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* <section className={styles.supply} aria-labelledby="supply-title">
        <div className={`container ${styles.supplyInner}`}>
          <Reveal direction="left" className={styles.supplyCopy}>
            <SectionLabel eyebrow="SUPPLY CHAIN" subtitle="安定供給モデル" inverse />
            <h2 id="supply-title" className={styles.heading}>
              調達、輸送、荷役を、
              <br />
              一連の品質管理として設計。
            </h2>
            <p className={styles.lead}>
              燃料品質だけでなく、工場内粉塵、輸送距離、船積み、国内受入時の粉塵まで。
              サプライチェーン全体で燃料管理の安全性を高めます。
            </p>
          </Reveal>

          <Reveal direction="right" className={styles.supplyVisualReveal}>
            <figure className={styles.supplyVisual}>
              <Image
                src={asset("/assets/biomasspower/fuel-storage.jpg")}
                alt="屋内に保管されたバイオマス燃料"
                fill
                sizes="(max-width: 960px) calc(100vw - 40px), 46vw"
                className={styles.supplyImage}
              />
            </figure>
          </Reveal>

          <div className={styles.supplySteps}>
            {supplySteps.map((step, index) => (
              <Reveal key={step.title} direction="up" delay={index * 70}>
                <article className={styles.supplyStep}>
                  <b>{String(index + 1).padStart(2, "0")}</b>
                  <h3>{step.title}</h3>
                  <p>{step.text}</p>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section> */}

      {/* <section className={styles.dust} aria-labelledby="dust-title">
        <div className={`container ${styles.dustGrid}`}>
          <Reveal direction="left">
            <figure className={styles.dustVisual}>
              <Image
                src={asset("/assets/biomasspower/dust-collection-hopper.png")}
                alt="走行式集塵ホッパー"
                fill
                sizes="(max-width: 960px) calc(100vw - 40px), 52vw"
                className={styles.dustImage}
              />
            </figure>
          </Reveal>

          <Reveal direction="right" className={styles.dustCopy}>
            <SectionLabel eyebrow="DUST CONTROL" subtitle="粉塵管理" />
            <h2 id="dust-title" className={styles.heading}>
              荷役、搬送、乾燥まで、
              <br />
              設備面から安定運用を支える。
            </h2>
            <p className={styles.lead}>
              テレスコピックコンベアや防塵ホッパーを組み合わせ、港湾荷役・国内受入時の粉塵発生を抑制。
              さらに、ハンドリング設備や乾燥設備まで含めて、燃料管理の安全性と作業効率を高めます。
            </p>
            <div className={styles.dustStats}>
              <div>
                <b>20%</b>
                <span>サプライチェーン全体の粉塵削減目標</span>
              </div>
              <div>
                <b>3方式</b>
                <span>バッグフィルター・サイクロン・ドライフォグに対応</span>
              </div>
            </div>
            <div className={styles.equipmentList}>
              {equipmentItems.map((item) => (
                <article key={item.title} className={styles.equipmentItem}>
                  <h3>{item.title}</h3>
                  <p>{item.text}</p>
                </article>
              ))}
            </div>
          </Reveal>
        </div>
      </section> */}

      <section className={styles.specs} aria-labelledby="specs-title">
        <div className="container">
          <Reveal direction="up">
            <div className={styles.sectionHeader}>
              <SectionLabel eyebrow="FUEL SPEC" subtitle="燃料分析データ" />
              <h2 id="specs-title" className={styles.heading}>
                導入判断に必要な燃料条件を、
                <br />
                比較して確認する。
              </h2>
            </div>
          </Reveal>

          <Reveal direction="up">
            <div className={styles.specTableWrap}>
              <table className={styles.specTable}>
                <thead>
                  <tr>
                    <th>項目</th>
                    <th>PKS</th>
                    <th>木質ペレット</th>
                  </tr>
                </thead>
                <tbody>
                  {specRows.map((row) => (
                    <tr key={row.label}>
                      <th>{row.label}</th>
                      <td>{row.pks}</td>
                      <td>{row.pellet}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </Reveal>
        </div>
      </section>

      <section className={styles.process} aria-labelledby="process-title">
        <div className="container">
          <Reveal direction="up">
            <SectionLabel eyebrow="PROJECT FLOW" subtitle="導入までの流れ" />
            <h2 id="process-title" className={styles.heading}>
              見積から継続供給、
              <br />
              設備計画まで一貫して支援。
            </h2>
          </Reveal>
          <div className={styles.processList}>
            {projectSteps.map((step, index) => (
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

      <section className={styles.cta} aria-labelledby="biomass-cta-title">
        <div className={`container ${styles.ctaInner}`}>
          <Reveal direction="up">
            <h2 id="biomass-cta-title">
              バイオマス発電・
              <br className="sp-br" />
              燃料供給・設備計画を
              <br />
              ご相談ください
            </h2>
            <p>必要数量、燃料条件、港湾荷役、乾燥設備、粉塵対策まで、初期段階から整理します。</p>
            <div className={styles.ctaActions}>
              <Button href="/contact" variant="white">
                お問い合わせ
              </Button>
              <Button href="/business" variant="cyan" className={styles.ctaOutline}>
                事業一覧へ戻る
              </Button>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
