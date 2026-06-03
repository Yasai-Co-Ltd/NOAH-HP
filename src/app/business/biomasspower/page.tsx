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
  title: "バイオマス | 諾亜建設株式会社",
  description:
    "PKS、炭化PKS、木質ペレットの調達から、認証工場との連携、輸送、粉塵管理まで、諾亜建設のバイオマス燃料事業を紹介します。",
};

const heroMetrics = [
  { value: "200,000MT/月", label: "PKS調達可能量" },
  { value: "100,000MT/月", label: "木質ペレット調達可能量" },
  { value: "FOB / DDP", label: "引取方式に対応" },
];

const fuelItems = [
  {
    name: "PKS",
    subtitle: "Palm Kernel Shell",
    image:asset("/assets/biomasspower/pks-yard.png"),
    alt: "PKSの原料ヤード",
    description:
      "パーム油の生産過程で発生するパーム椰子殻。水分が少なく発熱量が高いため、石炭代替・混焼燃料として注目されています。",
    points: ["RSPO認証取得工場との提携", "東南アジア各地域から調達", "上位発熱量 adv.4000kcal"],
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
    points: ["FSC-COC認証取得工場との提携", "タイ・マレーシア・ベトナム等から調達", "上位発熱量 adv.4100kcal"],
  },
];

const supplySteps = [
  {
    title: "認証工場と連携",
    text: "RSPO、FSC-COCなど、持続可能性に配慮した供給元を選定します。",
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
    pks: "インドネシア、マレーシア、タイ等",
    pellet: "タイ、マレーシア、ベトナム等",
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
    title: "調達計画・見積",
    text: "購入量、時期、引取方式、長期契約の可否を整理します。",
  },
  {
    number: "03",
    title: "輸送・港湾設計",
    text: "指定港、荷役方法、粉塵対策、在庫管理を具体化します。",
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
        <div className={`container ${styles.heroInner}`}>
          <Reveal direction="left" className={styles.heroCopy}>
            <p className={styles.eyebrow}>
              BIOMASS FUEL
              <span>バイオマス</span>
            </p>
            <h1 id="biomass-title" className={styles.heroTitle}>
              燃料調達から粉塵管理まで、
              <br />
              バイオマス運用を支える。
            </h1>
            <p className={styles.heroLead}>
              PKS、炭化PKS、木質ペレットの安定調達に加え、認証工場との連携、輸送条件、港湾荷役、
              粉塵対策までを一体で設計。燃料を「買う」だけでなく、受け入れて使い続けられる状態まで整えます。
            </p>
            <div className={styles.heroActions}>
              <Button href="/contact">燃料調達を相談する</Button>
              <Button href="#fuel" variant="outline">
                取扱燃料を見る
              </Button>
            </div>
          </Reveal>

          <Reveal direction="right" className={styles.heroVisualReveal}>
            <figure className={styles.heroVisual}>
              <Image
                src={asset("/assets/biomasspower/biomass-plant-hero.png")}
                alt="バイオマス発電設備"
                fill
                priority
                sizes="(max-width: 960px) calc(100vw - 40px), 54vw"
                className={styles.heroImage}
              />
              <figcaption className={styles.heroCaption}>
                燃料・港湾・発電設備をひとつの運用線でつなぐ。
              </figcaption>
            </figure>
          </Reveal>
        </div>

        <div className={`container ${styles.metricBoard}`} aria-label="バイオマス燃料の主要指標">
          {heroMetrics.map((metric) => (
            <div key={metric.value} className={styles.metric}>
              <b>{metric.value}</b>
              <span>{metric.label}</span>
            </div>
          ))}
        </div>
      </section>

      <section className={styles.overview} aria-labelledby="overview-title">
        <div className={`container ${styles.overviewGrid}`}>
          <Reveal direction="left">
            <SectionLabel eyebrow="OVERVIEW" subtitle="事業概要" />
            <h2 id="overview-title" className={styles.heading}>
              カーボンニュートラル燃料を、
              <br />
              事業で使える供給体制へ。
            </h2>
          </Reveal>
          <Reveal direction="right">
            <div className={styles.overviewText}>
              <p>
                木質バイオマス燃料は、木材や枝葉などから作られる再生可能なエネルギー源です。
                樹木の成長過程でCO2を吸収するため、燃焼時の排出と相殺するカーボンニュートラル燃料として位置づけられます。
              </p>
              <p>
                NOAHは、燃料の調達量や価格だけではなく、認証、海上輸送、受入時の粉塵、保管、長期契約まで含めて、
                発電事業者が継続運用しやすい供給モデルを組み立てます。
              </p>
            </div>
          </Reveal>
        </div>
      </section>

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

      <section className={styles.supply} aria-labelledby="supply-title">
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
      </section>

      <section className={styles.dust} aria-labelledby="dust-title">
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
              燃料品質だけでなく、
              <br />
              粉塵リスクまで抑える。
            </h2>
            <p className={styles.lead}>
              テレスコピックコンベアや集塵ホッパーを組み合わせ、港湾荷役・国内受入時の粉塵発生を抑制。
              長期在庫による発酵や荷役時の飛散も含めて、燃料管理の安全性を高めます。
            </p>
            <div className={styles.dustStats}>
              <div>
                <b>20%</b>
                <span>サプライチェーン全体の粉塵削減目標</span>
              </div>
              <div>
                <b>99%+</b>
                <span>高効率集塵ホッパーの集塵効率</span>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

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
              見積から継続供給まで、
              <br />
              燃料運用を一貫して支援。
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
              バイオマス燃料の調達・受入計画を
              <br />
              ご相談ください
            </h2>
            <p>必要数量、燃料条件、港湾荷役、粉塵対策まで、初期段階から整理します。</p>
            <div className={styles.ctaActions}>
              <Button href="/contact" variant="white">
                お問い合わせ
              </Button>
              <Button href="/business" variant="outline" className={styles.ctaOutline}>
                事業一覧へ戻る
              </Button>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
