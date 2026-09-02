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
  title: "走行式集塵ホッパー事業 | 諾亜建設株式会社",
  description:
    "木質ペレット・PKSなどの港湾荷役に対応する走行式集塵ホッパー。密閉グリル、集塵システム、テレスコピック、自走機構、PLC制御まで備えた設備事業を紹介します。",
};

const operationSteps = [
  {
    number: "01",
    title: "船から受ける",
    text: "グラブバケットで木質ペレットやPKSをつかみ、上部ホッパーへ投入します。",
  },
  {
    number: "02",
    title: "粉塵を閉じ込める",
    text: "密閉グリルと防風板で、投入時に発生する粉塵の外部飛散を抑えます。",
  },
  {
    number: "03",
    title: "吸引・濾過する",
    text: "負圧と集塵ファンにより粉塵を吸引し、フィルターで捕集します。",
  },
  {
    number: "04",
    title: "トラックへ払い出す",
    text: "開閉ゲートとテレスコピックで粉塵を抑えながら積み込みます。",
  },
];

const architectureItems = [
  {
    title: "密閉グリル",
    text: "燃料投入後にゴムシートが閉じ、粉塵を内部に閉じ込めます。",
  },
  {
    title: "集塵システム",
    text: "集塵機、配管、ファン、エアコンプレッサーで負圧を形成します。",
  },
  {
    title: "粉塵逆洗回収",
    text: "フィルターに残った粉塵を圧縮空気でホッパーへ戻し、材料ロスを抑えます。",
  },
  {
    title: "テレスコピック",
    text: "二重構造の排出口で、積込部の粉塵も集塵経路へ導きます。",
  },
  {
    title: "自走・旋回機構",
    text: "駆動輪、旋回ベアリング、サポートレッグにより現場内移動に対応します。",
  },
  {
    title: "安全保護",
    text: "レベル警告灯、移動警報灯、衝突防止部材、防風チェーンを備えます。",
  },
];

const dustStats = [
  { value: "59,000m³/h", label: "開口部風量" },
  { value: "22kW×4", label: "開口部集塵ファンモーター" },
  { value: "2.4m³/分", label: "エアコンプレッサー風量" },
  { value: "0.8MPa", label: "定格圧力" },
];

const specRows = [
  { label: "機器タイプ", value: "走行式集塵ホッパー" },
  { label: "適用材料", value: "木質ペレット、PKS" },
  { label: "材料比重", value: "0.5〜0.7t/m³" },
  { label: "定格作業効率", value: "300m³/時" },
  { label: "総高", value: "9000mm（遮風板含む）" },
  { label: "トラック通路空間高さ", value: "4250mm" },
  { label: "長さ×幅", value: "7000mm×6000mm（輪距離）" },
  { label: "ホッパー内容量", value: "25トン" },
  { label: "移動方式", value: "自走式移動歩行" },
  { label: "総重量", value: "約60トン" },
  { label: "電源", value: "220V、60Hz、三相4線" },
  { label: "制御方式", value: "PLC制御（三菱PLC）" },
];

/** 会社概要資料（2026年版）の近年事業実績リストに基づく納入実績。 */
const deliveryRecords = [
  {
    name: "自走式集塵ホッパー",
    units: "3台",
    client: "田原バイオマスパワー合同会社",
    site: "愛知県田原市 田原港1区",
  },
  {
    name: "牽引式集塵ホッパー",
    units: "1台",
    client: "愛知海運株式会社",
    site: "愛知県田原市 田原港4区",
  },
  {
    name: "牽引式集塵ホッパー",
    units: "1台",
    client: "愛知海運株式会社",
    site: "愛知県 衣浦港",
  },
  {
    name: "自走式集塵ホッパー",
    units: "2台",
    client: "豊前エナジーバイオマス発電所",
    site: "大分県 中津港",
  },
];

const deliverySteps = [
  {
    number: "01",
    title: "仕様整理",
    text: "荷役対象、港湾条件、処理量、粉塵基準、運用動線を整理します。",
  },
  {
    number: "02",
    title: "設計・製造",
    text: "海外パートナーと連携し、設計・製造・検査まで進めます。",
  },
  {
    number: "03",
    title: "輸送・通関",
    text: "海上輸送、日本国内の通関、陸上輸送まで一体で管理します。",
  },
  {
    number: "04",
    title: "据付・運用支援",
    text: "据付、試運転、操作手順、メンテナンス体制まで支援します。",
  },
];

export default function HopperPage() {
  if (!isPageEnabled("/business/hopper")) notFound();

  return (
    <>
      <section className={styles.hero} aria-labelledby="hopper-title">
        <Image
          src={asset("/assets/hopper/hopper-hero-port-v3.jpg")}
          alt=""
          fill
          priority
          sizes="100vw"
          className={styles.heroBackground}
        />
        <div className={styles.heroOverlay} />
        <div className={`container ${styles.heroInner}`}>
          <Reveal direction="left" className={styles.heroCopy}>
            <p className={styles.eyebrow}>MOBILE DUST COLLECTION HOPPER</p>
            <h1 id="hopper-title" className={styles.heroTitle}>
              走行式集塵ホッパー事業
            </h1>
            <p className={styles.heroLead}>
              粉塵を閉じ込め、港湾荷役を止めない。
              バルク燃料の荷役で発生する粉塵を設備で抑制し、設計・製造・輸送・据付まで一貫して支援します。
            </p>
            <div className={styles.heroActions}>
              <Button href="/contact" variant="white">
                設備導入を相談する
              </Button>
              <Button href="#spec" variant="cyan" className={styles.darkButton}>
                仕様を見る
              </Button>
            </div>
          </Reveal>
        </div>
      </section>

      <section className={styles.operation} aria-labelledby="operation-title">
        <div className="container">
          <Reveal direction="up">
            <div className={styles.sectionHeader}>
              <SectionLabel eyebrow="OPERATION" subtitle="荷役時の粉塵抑制" />
              <h2 id="operation-title" className={styles.heading}>
                投入から払い出しまで、
                <br />
                粉塵を設備内で処理する。
              </h2>
            </div>
          </Reveal>

          <div className={styles.operationGrid}>
            <Reveal direction="left">
              <figure className={styles.sitePhoto}>
                <Image
                  src={asset("/assets/hopper/hopper-site-front.jpg")}
                  alt="工場内で組み立てられた走行式集塵ホッパー"
                  fill
                  sizes="(max-width: 960px) calc(100vw - 40px), 48vw"
                  className={styles.siteImage}
                />
              </figure>
            </Reveal>

            <ol className={styles.operationSteps} aria-label="荷役フロー">
              {operationSteps.map((step, index) => (
                <Reveal
                  key={step.number}
                  as="li"
                  direction="up"
                  delay={index * 70}
                  className={styles.operationStep}
                >
                  <b>{step.number}</b>
                  <h3>{step.title}</h3>
                  <p>{step.text}</p>
                </Reveal>
              ))}
            </ol>
          </div>
        </div>
      </section>

      <section className={styles.architecture} aria-labelledby="architecture-title">
        <div className={`container ${styles.architectureInner}`}>
          <Reveal direction="left" className={styles.architectureCopy}>
            <SectionLabel eyebrow="EQUIPMENT STRUCTURE" subtitle="構成機能" inverse />
            <h2 id="architecture-title" className={styles.inverseHeading}>
              荷役、集塵、走行、安全を、
              <br />
              一台にまとめる。
            </h2>
            <p className={styles.inverseLead}>
              上部ホッパー、密閉グリル、集塵装置、開閉ゲート、テレスコピック、走行輪、操作室を一体化。
              現場の荷役動線に合わせて、粉塵を抑えながら移載作業を進めます。
            </p>
          </Reveal>

          <Reveal direction="right">
            <figure className={styles.blueprint}>
              <Image
                src={asset("/assets/hopper/hopper-structure-cutaway-v2.png")}
                alt="走行式集塵ホッパーの構成が分かる3Dビジュアル"
                fill
                sizes="(max-width: 960px) calc(100vw - 40px), 44vw"
                className={styles.blueprintImage}
              />
            </figure>
          </Reveal>

          <div className={styles.architectureGrid}>
            {architectureItems.map((item, index) => (
              <Reveal key={item.title} direction="up" delay={index * 45}>
                <article className={styles.architectureItem}>
                  <span>{String(index + 1).padStart(2, "0")}</span>
                  <h3>{item.title}</h3>
                  <p>{item.text}</p>
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
                src={asset("/assets/hopper/hopper-site-side.jpg")}
                alt="側面から見た走行式集塵ホッパー"
                fill
                sizes="(max-width: 960px) calc(100vw - 40px), 52vw"
                className={styles.dustImage}
              />
            </figure>
          </Reveal>

          <Reveal direction="right" className={styles.dustCopy}>
            <SectionLabel eyebrow="DUST COLLECTION" subtitle="集塵システム" />
            <h2 id="dust-title" className={styles.heading}>
              負圧で吸引し、
              <br />
              フィルターで捕集する。
            </h2>
            <p className={styles.lead}>
              密閉グリルの下部に集塵装置を配置し、投入時に舞い上がる粉塵をファンで吸引。
              フィルター表面に残った粉塵は圧縮空気でホッパーへ戻し、材料ロスを抑えます。
            </p>
            <div className={styles.dustStats}>
              {dustStats.map((stat) => (
                <div key={stat.value}>
                  <b>{stat.value}</b>
                  <span>{stat.label}</span>
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      <section className={styles.model} id="spec" aria-labelledby="model-title">
        <div className="container">
          <Reveal direction="up">
            <div className={styles.sectionHeader}>
              <SectionLabel eyebrow="TECHNICAL SPEC" subtitle="主要仕様" />
              <h2 id="model-title" className={styles.heading}>
                港湾条件に合わせて、
                <br />
                仕様を確認する。
              </h2>
            </div>
          </Reveal>

          <div className={styles.modelGrid}>
            <Reveal direction="left">
              <figure className={styles.modelVisual}>
                <Image
                  src={asset("/assets/hopper/hopper-sea-side.png")}
                  alt="走行式集塵ホッパーの海側図面"
                  fill
                  sizes="(max-width: 960px) calc(100vw - 40px), 44vw"
                  className={styles.modelImage}
                />
              </figure>
            </Reveal>

            <Reveal direction="right">
              <div className={styles.specTableWrap}>
                <table className={styles.specTable}>
                  <tbody>
                    {specRows.map((row) => (
                      <tr key={row.label}>
                        <th>{row.label}</th>
                        <td>{row.value}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </Reveal>
          </div>
          <p className={styles.specNote}>
            上記は走行式集塵ホッパーの代表仕様です。実案件では対象材料、処理量、港湾条件、電源条件に合わせて個別に確認します。
          </p>
        </div>
      </section>

      <section className={styles.record} aria-labelledby="record-title">
        <div className="container">
          <Reveal direction="up">
            <div className={styles.sectionHeader}>
              <SectionLabel eyebrow="TRACK RECORD" subtitle="納入実績" />
              <h2 id="record-title" className={styles.heading}>
                発電所・港湾で、
                <br />
                確かな納入実績。
              </h2>
            </div>
          </Reveal>

          <Reveal direction="up">
            <div className={styles.recordTableWrap}>
              <table className={styles.recordTable} aria-label="集塵ホッパーの納入実績一覧">
                <thead>
                  <tr>
                    <th scope="col">No.</th>
                    <th scope="col">ホッパー名</th>
                    <th scope="col">台数</th>
                    <th scope="col">客先</th>
                    <th scope="col">使用場所</th>
                  </tr>
                </thead>
                <tbody>
                  {deliveryRecords.map((record, index) => (
                    <tr key={`${record.client}-${record.site}`}>
                      <td>{String(index + 1).padStart(2, "0")}</td>
                      <th scope="row">{record.name}</th>
                      <td>{record.units}</td>
                      <td>{record.client}</td>
                      <td>{record.site}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </Reveal>
          <p className={styles.specNote}>
            2019年10月には、当時日本最大級となる自走式防塵ホッパーを納入し、港湾荷役の効率化と粉じん対策に貢献しました。
          </p>
        </div>
      </section>

      <section className={styles.delivery} aria-labelledby="delivery-title">
        <div className="container">
          <Reveal direction="up">
            <SectionLabel eyebrow="DELIVERY SUPPORT" subtitle="導入支援" />
            <h2 id="delivery-title" className={styles.heading}>
              設計・製造から据付まで、
              <br />
              重量設備を一貫して届ける。
            </h2>
          </Reveal>

          <div className={styles.deliveryList}>
            {deliverySteps.map((step, index) => (
              <Reveal key={step.number} direction="up" delay={index * 70}>
                <article className={styles.deliveryStep}>
                  <b>{step.number}</b>
                  <h3>{step.title}</h3>
                  <p>{step.text}</p>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className={styles.cta} aria-labelledby="hopper-cta-title">
        <div className={`container ${styles.ctaInner}`}>
          <Reveal direction="up">
            <h2 id="hopper-cta-title">
              港湾荷役・粉塵対策設備の
              <br />
              導入相談はこちら
            </h2>
            <p>対象燃料、処理量、港湾条件、輸送・据付条件まで、初期段階から整理します。</p>
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
