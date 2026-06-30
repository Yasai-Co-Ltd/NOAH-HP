import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { isPageEnabled } from "@/lib/page-config";
import Image from "next/image";
import Link from "next/link";
import { Reveal } from "@/components/animation/Reveal/Reveal";
import { Button } from "@/components/ui/Button/Button";
import { SectionLabel } from "@/components/ui/SectionLabel/SectionLabel";
import { asset } from "@/lib/asset";
import styles from "./page.module.css";

export const metadata: Metadata = {
  title: "健康経営 | 諾亜建設株式会社",
  description:
    "諾亜建設株式会社の健康経営。従業員の安全と心身の健康を事業継続の基盤とし、現場安全、健康管理、働きやすい職場環境づくりに取り組みます。",
};

const declarationItems = [
  "経営層が率先して安全衛生と健康づくりを推進します。",
  "健康診断の受診と結果に応じたフォローを大切にします。",
  "現場・事務所の双方で、事故や疾病を未然に防ぐ環境づくりを進めます。",
  "心身の不調を早期に相談できる、風通しのよい職場を目指します。",
  "取り組み状況を継続的に確認し、改善につなげます。",
];

const policyCards = [
  {
    title: "安全を最優先する",
    text: "再エネ設備、蓄電池、モビリティ、港湾設備など、現場ごとに異なるリスクを把握し、作業前の確認と安全教育を徹底します。",
  },
  {
    title: "心身の健康を守る",
    text: "定期健康診断、生活習慣への配慮、メンタルヘルスの相談しやすさを重視し、従業員が安定して働ける状態を支えます。",
  },
  {
    title: "働き続けられる環境をつくる",
    text: "長時間労働の抑制、休暇取得、職場コミュニケーションの改善に取り組み、事業成長を支える人材基盤を整えます。",
  },
];

const focusItems = [
  {
    label: "01",
    title: "健康状態の把握",
    text: "定期健康診断の受診状況を確認し、必要に応じて再検査・保健指導につなげます。",
  },
  {
    label: "02",
    title: "現場安全と衛生管理",
    text: "施工・設備導入・保守の現場で、作業前確認、保護具、熱中症対策、動線管理を重視します。",
  },
  {
    label: "03",
    title: "メンタルヘルスケア",
    text: "業務負荷や人間関係の変化を早期に捉え、相談しやすいコミュニケーションを整えます。",
  },
  {
    label: "04",
    title: "働き方の改善",
    text: "業務の偏り、移動負担、繁忙期の負荷を見直し、無理なく成果を出せる働き方を目指します。",
  },
  {
    label: "05",
    title: "協力会社との安全連携",
    text: "プロジェクトに関わる協力会社とも安全情報を共有し、現場全体で事故防止に取り組みます。",
  },
];

const systemNodes = [
  {
    title: "経営層",
    text: "健康経営方針の発信、取り組み状況の確認",
  },
  {
    title: "管理部門",
    text: "健康診断、労務管理、相談対応、改善施策の推進",
  },
  {
    title: "各事業部・現場責任者",
    text: "現場リスクの共有、安全衛生教育、日々の声かけ",
  },
  {
    title: "従業員・協力会社",
    text: "安全ルールの遵守、体調変化の共有、相互確認",
  },
];

const cycleItems = ["健康課題の把握", "施策の計画", "現場・職場で実行", "評価と改善"];

const nextLinks = [
  { href: "/about/vision", label: "企業理念・ビジョン" },
  { href: "/about/outline", label: "会社概要" },
  { href: "/recruit", label: "採用情報" },
];

export default function SafetyHealthPage() {
  if (!isPageEnabled("/about/safety-health")) notFound();

  return (
    <>
      <section className={styles.hero} aria-labelledby="health-title">
        <div className={`container ${styles.heroInner}`}>
          <Reveal direction="left" className={styles.heroCopy}>
            <p className={styles.eyebrow}>
              HEALTH MANAGEMENT
              <span>健康経営</span>
            </p>
            <h1 id="health-title" className={styles.heroTitle}>
              働く人の安全と健康を、
              <br />
              事業継続の基盤に。
            </h1>
            <p className={styles.heroLead}>
              諾亜建設は、脱炭素インフラを支える事業を継続的に展開するために、従業員一人ひとりの安全と心身の健康を重要な経営基盤と考えます。
              現場とオフィスの双方で、安心して力を発揮できる職場づくりに取り組みます。
            </p>
            <div className={styles.heroActions}>
              <Button href="#declaration">健康宣言を見る</Button>
              <Button href="#system" variant="outline">
                推進体制を見る
              </Button>
            </div>
          </Reveal>

          <Reveal direction="right" className={styles.heroVisualReveal}>
            <figure className={styles.heroVisual}>
              <Image
                src={asset("/assets/about/menu/safety-health-v2.png")}
                alt="ヘルメットを持つ社員が屋外でストレッチをしている様子"
                fill
                priority
                sizes="(max-width: 960px) calc(100vw - 40px), 48vw"
                className={styles.heroImage}
              />
              <figcaption>現場で働く人、支える人の健康を守る。</figcaption>
            </figure>
          </Reveal>
        </div>
      </section>

      <section className={styles.declaration} id="declaration" aria-labelledby="declaration-title">
        <div className={`container ${styles.declarationInner}`}>
          <Reveal direction="up">
            <div className={styles.statementBlock}>
              <SectionLabel eyebrow="DECLARATION" subtitle="健康宣言" />
              <h2 id="declaration-title" className={styles.statementTitle}>
                健康で安全に働ける環境を整え、
                <br />
                持続可能な事業成長につなげます。
              </h2>
              <p>
                従業員の健康管理を経営的な視点で捉え、事業活動の基盤として安全衛生と健康づくりを推進します。
                再生可能エネルギー、蓄電池、水素、AIデータセンターなど多様な事業を支える人材が、長く安心して働ける会社を目指します。
              </p>
              <div className={styles.signature}>
                <span>諾亜建設株式会社</span>
                <b>代表取締役社長　鈴木 仲娜</b>
              </div>
            </div>
          </Reveal>

          <Reveal direction="up" delay={80}>
            <ul className={styles.declarationList}>
              {declarationItems.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </Reveal>
        </div>
      </section>

      <section className={styles.policy} aria-labelledby="policy-title">
        <div className="container">
          <Reveal direction="up">
            <div className={styles.sectionHeader}>
              <div>
                <SectionLabel eyebrow="POLICY" subtitle="推進方針" inverse />
                <h2 id="policy-title" className={styles.inverseHeading}>
                  安全・健康・働き方を、
                  <br />
                  一体で整える。
                </h2>
              </div>
              <p className={styles.inverseLead}>
                健康経営は、福利厚生にとどまらず、現場品質、施工安全、事業継続、採用力にも関わる取り組みです。
                NOAHでは、日々の安全確認と健康管理を結びつけ、事業を支える人のコンディションを整えます。
              </p>
            </div>
          </Reveal>

          <div className={styles.policyGrid}>
            {policyCards.map((item, index) => (
              <Reveal key={item.title} direction="up" delay={index * 70}>
                <article className={styles.policyCard}>
                  <span>{String(index + 1).padStart(2, "0")}</span>
                  <h3>{item.title}</h3>
                  <p>{item.text}</p>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className={styles.focus} aria-labelledby="focus-title">
        <div className="container">
          <Reveal direction="up">
            <div className={styles.sectionHeader}>
              <div>
                <SectionLabel eyebrow="FOCUS" subtitle="重点取り組み" />
                <h2 id="focus-title" className={styles.heading}>
                  日々の行動に落とし込む、
                  <br />
                  健康経営のテーマ。
                </h2>
              </div>
              <p className={styles.lead}>
                事業領域が広がるほど、働く場所、移動、作業環境、関係者の数も変化します。
                それぞれの現場に合わせて、必要な対策を一つずつ整えていきます。
              </p>
            </div>
          </Reveal>

          <div className={styles.focusList}>
            {focusItems.map((item, index) => (
              <Reveal key={item.title} direction="up" delay={index * 55}>
                <article className={styles.focusItem}>
                  <span>{item.label}</span>
                  <div>
                    <h3>{item.title}</h3>
                    <p>{item.text}</p>
                  </div>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className={styles.system} id="system" aria-labelledby="system-title">
        <div className="container">
          <Reveal direction="up">
            <div className={styles.systemHeader}>
              <SectionLabel eyebrow="SYSTEM" subtitle="推進体制" />
              <h2 id="system-title" className={styles.heading}>
                経営層から現場まで、
                <br />
                状況を共有し改善する。
              </h2>
            </div>
          </Reveal>

          <div className={styles.systemGrid}>
            {systemNodes.map((node, index) => (
              <Reveal key={node.title} direction="up" delay={index * 60}>
                <article className={styles.systemNode}>
                  <span>{String(index + 1).padStart(2, "0")}</span>
                  <h3>{node.title}</h3>
                  <p>{node.text}</p>
                </article>
              </Reveal>
            ))}
          </div>

          <Reveal direction="up">
            <div className={styles.cycle}>
              {cycleItems.map((item, index) => (
                <div key={item} className={styles.cycleItem}>
                  <span>{String(index + 1).padStart(2, "0")}</span>
                  <b>{item}</b>
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      <section className={styles.next} aria-labelledby="next-title">
        <div className={`container ${styles.nextInner}`}>
          <Reveal direction="up">
            <p className={styles.nextEyebrow}>NEXT CONTENTS</p>
            <h2 id="next-title" className={styles.nextTitle}>
              理念や会社概要もあわせてご覧ください。
            </h2>
            <div className={styles.nextLinks}>
              {nextLinks.map((item) => (
                <Link key={item.href} href={item.href}>
                  {item.label}
                </Link>
              ))}
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
