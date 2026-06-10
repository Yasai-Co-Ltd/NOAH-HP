import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { isPageEnabled } from "@/lib/page-config";
import Image from "next/image";
import Link from "next/link";
import { Reveal } from "@/components/animation/Reveal/Reveal";
import { Button } from "@/components/ui/Button/Button";
import { SectionLabel } from "@/components/ui/SectionLabel/SectionLabel";
import styles from "./page.module.css";
import { asset } from "@/lib/asset";

export const metadata: Metadata = {
  title: "企業理念・ビジョン | 諾亜建設株式会社",
  description:
    "諾亜建設株式会社の企業理念とビジョン。人と地球に優しい持続可能な社会を創造し、再生可能エネルギーと脱炭素インフラで環境に優しい世界を目指します。",
};

const missionCards = [
  {
    title: "人に優しい",
    text: "地域の暮らしと、働く人の安全を支えるインフラを。",
  },
  {
    title: "地球に優しい",
    text: "再エネ・蓄電・水素を組み合わせ、脱炭素化を前へ。",
  },
  {
    title: "持続可能にする",
    text: "運用・保守まで見据えた、長く使える仕組みに。",
  },
];

const visionActions = [
  {
    title: "経済的な水素社会を創る",
    text: "最適な水素事業ネットワークの構築により、経済的な水素社会の実現を目指します。",
  },
  {
    title: "水素供給の強化を図る",
    text: "水素の国内自給率向上により、水素供給の強化を図ります。",
  },
  {
    title: "地域経済・地域BCPに貢献する",
    text: "マイクログリッドを活用した地域水素製造により、地域経済、地域BCP対応に貢献します。",
  },
  {
    title: "再生可能エネルギー導入拡大に貢献する",
    text: "余剰となる再生可能エネルギーなどの活用により、再生可能エネルギーの導入拡大に貢献します。",
  },
  {
    title: "「環境に優しい世界を創る」を果たす",
    text: "再生可能エネルギーの導入拡大、水素社会の普及を通じて地球環境保全に努め、「環境に優しい世界を創る」という社会使命を果たします。",
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
  if (!isPageEnabled("/about/vision")) notFound();

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
              持続可能な社会を
              <br className={styles.spBreak} />
              創造する。
            </h1>
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
                src={asset("/assets/about/vision/vision-earth.jpg")}
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
        <div className={`container ${styles.philosophyIntro}`}>
          <Reveal direction="up">
            <SectionLabel eyebrow="PHILOSOPHY" subtitle="企業理念" />
            <h2 id="philosophy-title" className={styles.statementHeading}>
              人と地球に優しい
              <br />
              持続可能な社会を創造する。
            </h2>
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
                  環境に優しい
                  <br />
                  世界を創る。
                </h2>
              </div>
              <p className={styles.inverseLead}>
                再生可能エネルギーは環境に優しい一方、発電量の変動が課題となり、出力抑制も行われています。
                さらに、再生可能エネルギーから水素を製造するコストの高さは、水素社会実現の大きな壁です。
                NOAHは、水素の製造から供給、利用に至る一連の設備を取り扱い、地域事情に適したシステムのご提案により、次の5つを実行します。
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
