import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Reveal } from "@/components/animation/Reveal/Reveal";
import { Button } from "@/components/ui/Button/Button";
import { SectionLabel } from "@/components/ui/SectionLabel/SectionLabel";
import styles from "./page.module.css";

export const metadata: Metadata = {
  title: "企業理念・ビジョン | 諾亜建設株式会社",
  description:
    "諾亜建設株式会社の企業理念とビジョン。人と地球に優しい持続可能な社会を創造し、再生可能エネルギーと脱炭素インフラで環境に優しい世界を目指します。",
};

const missionCards = [
  {
    title: "人に優しい",
    text: "地域の暮らし、企業活動、働く人の安全を支えるインフラとして計画します。",
  },
  {
    title: "地球に優しい",
    text: "再生可能エネルギー、蓄電、水素、環境設備を組み合わせ、脱炭素化を進めます。",
  },
  {
    title: "持続可能にする",
    text: "導入だけでなく、運用・保守・改善まで見据え、長く使える仕組みにします。",
  },
];

const visionActions = [
  {
    title: "最適なエネルギーネットワークを構築する",
    text: "地域事情に合わせて、発電、蓄電、供給、利用をつなぎ、経済性のある脱炭素インフラを設計します。",
  },
  {
    title: "国内エネルギー供給を強くする",
    text: "再生可能エネルギーや水素、蓄電池の活用を通じて、地域で使えるエネルギーの選択肢を広げます。",
  },
  {
    title: "地域BCPと経済に貢献する",
    text: "マイクログリッドや分散型電源を活用し、災害時にも地域を支える電力・燃料の仕組みを検討します。",
  },
  {
    title: "余剰再エネを価値に変える",
    text: "出力抑制や変動電源の課題に対して、蓄電池、水素、需要側設備を組み合わせて活用余地を広げます。",
  },
  {
    title: "環境に優しい世界を創る",
    text: "再生可能エネルギーの導入拡大と脱炭素社会の普及を通じ、地球環境の保全に取り組みます。",
  },
];

const businessLinks = [
  { href: "/business/windpower", label: "風力発電" },
  { href: "/business/batteryenergystorage", label: "蓄電池" },
  { href: "/business/hydrogen-mobility", label: "水素モビリティ" },
  { href: "/business/ai-data-center", label: "AIデータセンター" },
];

const nextLinks = [
  { href: "/about/message", label: "トップメッセージ" },
  { href: "/about/standard", label: "行動基準" },
  { href: "/about/outline", label: "会社概要" },
];

export default function VisionPage() {
  return (
    <>
      <section className={styles.hero} aria-labelledby="vision-title">
        <div className={`container ${styles.heroInner}`}>
          <Reveal direction="left" className={styles.heroCopy}>
            <p className={styles.eyebrow}>
              PHILOSOPHY & VISION
              <span>企業理念・ビジョン</span>
            </p>
            <h1 id="vision-title" className={styles.heroTitle}>
              人と地球に優しい、
              <br />
              持続可能な社会を創造する。
            </h1>
            <p className={styles.heroLead}>
              NOAHの企業理念は、事業を広げるための言葉ではなく、判断の起点です。
              再生可能エネルギー、蓄電、水素、AIデータセンターを社会に実装し、環境に優しい世界を目指します。
            </p>
            <div className={styles.heroActions}>
              <Button href="#philosophy">理念を見る</Button>
              <Button href="/about" variant="outline">
                企業情報へ戻る
              </Button>
            </div>
          </Reveal>

          <Reveal direction="right" className={styles.heroVisualReveal}>
            <figure className={styles.heroVisual}>
              <Image
                src="/assets/about/vision/vision-earth.jpg"
                alt="手の上の若木と地球"
                fill
                priority
                sizes="(max-width: 960px) calc(100vw - 40px), 52vw"
                className={styles.heroImage}
              />
              <figcaption>環境に優しい世界を、事業として実装する。</figcaption>
            </figure>
          </Reveal>
        </div>
      </section>

      <section className={styles.philosophy} id="philosophy" aria-labelledby="philosophy-title">
        <div className={`container ${styles.philosophyGrid}`}>
          <Reveal direction="left">
            <SectionLabel eyebrow="PHILOSOPHY" subtitle="経営理念" />
            <h2 id="philosophy-title" className={styles.heading}>
              持続的な成長を支える、
              <br />
              NOAHの基盤。
            </h2>
            <p className={styles.lead}>
              私たちの理念は、どの事業領域にも通底する判断の軸です。
              技術、設備、プロジェクトの前に、何のために社会へ届けるのかを明確にします。
            </p>
          </Reveal>

          <Reveal direction="right">
            <div className={styles.statement}>
              <span>OUR PHILOSOPHY</span>
              <strong>
                人と地球に優しい
                <br />
                持続可能な社会を創造する。
              </strong>
            </div>
          </Reveal>
        </div>

        <div className={`container ${styles.missionGrid}`} aria-label="理念を構成する3つの視点">
          {missionCards.map((item, index) => (
            <Reveal key={item.title} direction="up" delay={index * 70}>
              <article className={styles.missionCard}>
                <span>{String(index + 1).padStart(2, "0")}</span>
                <h3>{item.title}</h3>
                <p>{item.text}</p>
              </article>
            </Reveal>
          ))}
        </div>
      </section>

      <section className={styles.vision} aria-labelledby="vision-body-title">
        <div className="container">
          <Reveal direction="up">
            <div className={styles.sectionHeader}>
              <div>
                <SectionLabel eyebrow="VISION" subtitle="社会使命" inverse />
                <h2 id="vision-body-title" className={styles.inverseHeading}>
                  環境に優しい世界を、
                  <br />
                  仕組みから創る。
                </h2>
              </div>
              <p className={styles.inverseLead}>
                再生可能エネルギーは、発電量の変動や出力抑制などの課題も抱えています。
                NOAHは、発電、蓄電、水素、需要側設備を組み合わせ、地域に合うエネルギーシステムとして提案します。
              </p>
            </div>
          </Reveal>

          <div className={styles.actionGrid}>
            {visionActions.map((item, index) => (
              <Reveal key={item.title} direction="up" delay={index * 55}>
                <article className={styles.actionItem}>
                  <b>{String(index + 1).padStart(2, "0")}</b>
                  <h3>{item.title}</h3>
                  <p>{item.text}</p>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className={styles.implementation} aria-labelledby="implementation-title">
        <div className={`container ${styles.implementationGrid}`}>
          <Reveal direction="left">
            <SectionLabel eyebrow="IMPLEMENTATION" subtitle="理念を事業へ" />
            <h2 id="implementation-title" className={styles.heading}>
              理念を、ページの言葉で終わらせない。
            </h2>
            <p className={styles.lead}>
              持続可能な社会の実現は、具体的な事業と運用に落ちてはじめて意味を持ちます。
              NOAHは複数の事業領域を組み合わせ、地域・企業ごとの課題に合わせた構想を進めます。
            </p>
          </Reveal>

          <Reveal direction="right">
            <div className={styles.businessLinks}>
              {businessLinks.map((item, index) => (
                <Link key={item.href} href={item.href}>
                  <span>{String(index + 1).padStart(2, "0")}</span>
                  <b>{item.label}</b>
                </Link>
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
              理念を支えるメッセージや行動基準もご覧ください。
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
