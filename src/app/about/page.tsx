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
  title: "企業情報 | 諾亜建設株式会社",
  description:
    "諾亜建設株式会社のトップメッセージ、企業理念・ビジョン、行動基準、会社概要、組織、拠点、沿革、健康経営に関する企業情報です。",
};

const overviewItems = [
  { value: "Energy", label: "再生可能エネルギーを軸にした事業開発" },
  { value: "Regional", label: "地域・企業の課題に合わせた構想設計" },
  { value: "Operation", label: "導入後の運用まで見据えた支援体制" },
];

const aboutLinks = [
  {
    href: "/about/message",
    eyebrow: "MESSAGE",
    title: "トップメッセージ",
    text: "NOAHがどのような未来を見据え、事業を進めているのか。代表メッセージを掲載します。",
    image:asset("/assets/about/menu/message-v2.png"),
  },
  {
    href: "/about/vision",
    eyebrow: "VISION",
    title: "企業理念・ビジョン",
    text: "脱炭素社会と地域インフラに向き合う、NOAHの理念と目指す姿を整理します。",
    image:asset("/assets/about/menu/vision-v2.png"),
  },
  {
    href: "/about/standard",
    eyebrow: "STANDARD",
    title: "行動基準",
    text: "品質、安全、地域共生、誠実な事業運営を支える判断基準を掲載します。",
    image:asset("/assets/about/menu/standard-v2.png"),
  },
  {
    href: "/about/outline",
    eyebrow: "OUTLINE",
    title: "会社概要",
    text: "会社名、所在地、事業内容、基本情報など、企業情報の基本項目をまとめます。",
    image:asset("/assets/about/menu/outline-v2.png"),
  },
  {
    href: "/about/organization",
    eyebrow: "ORGANIZATION",
    title: "グループ・組織図",
    text: "事業領域を横断してプロジェクトを支える組織体制を紹介します。",
    image:asset("/assets/about/menu/organization-v2.png"),
  },
  {
    href: "/about/network",
    eyebrow: "NETWORK",
    title: "国内外拠点",
    text: "国内外のパートナー、拠点、プロジェクト対応エリアを整理します。",
    image:asset("/assets/about/menu/network-v2.png"),
  },
  {
    href: "/about/history",
    eyebrow: "HISTORY",
    title: "沿革",
    text: "NOAHの歩み、事業展開、再生可能エネルギー領域への取り組みを掲載します。",
    image:asset("/assets/about/menu/history-v2.png"),
  },
  {
    href: "/about/safety-health",
    eyebrow: "SAFETY & HEALTH",
    title: "健康経営",
    text: "安全で持続的に働ける組織づくり、健康経営への取り組みを紹介します。",
    image:asset("/assets/about/menu/safety-health-v2.png"),
  },
];

const principles = [
  {
    title: "社会実装から考える",
    text: "技術そのものではなく、地域や企業の現場で使い続けられるインフラとして計画します。",
  },
  {
    title: "複数領域をつなぐ",
    text: "蓄電池、風力、バイオマス、水素、AIデータセンターを横断し、最適な組み合わせを検討します。",
  },
  {
    title: "運用で価値を高める",
    text: "導入して終わりではなく、遠隔監視、O&M、改善提案まで含めて事業価値を高めます。",
  },
];

export default function AboutPage() {
  if (!isPageEnabled("/about")) notFound();

  return (
    <>
      <section className={styles.hero} aria-labelledby="about-page-title">
        <div className={`container ${styles.heroInner}`}>
          <Reveal direction="left" className={styles.heroCopy}>
            <p className={styles.eyebrow}>
              ABOUT NOAH
              <span>企業情報</span>
            </p>
            <h1 id="about-page-title" className={styles.heroTitle}>
              未来のインフラを、
              <br />
              誠実に構想し、実装する。
            </h1>
            {/* <p className={styles.heroLead}>
              諾亜建設は、再生可能エネルギーを起点に、発電、蓄電、水素、AIデータセンターをつなぎ、
              地域と企業の脱炭素化を支えるインフラを社会へ届けます。
            </p> */}
            {/* <div className={styles.heroActions}>
              <Button href="/contact">お問い合わせ</Button>
              <Button href="#company-menu" variant="outline">
                企業情報を見る
              </Button>
            </div> */}
          </Reveal>

          <Reveal direction="right" className={styles.heroVisualReveal}>
            <figure className={styles.heroVisual}>
              <Image
                src={asset("/assets/about/hero-noah-brand-ai.png")}
                alt="NOAHロゴを配したブランドパネルと再生可能エネルギー、蓄電池、水素設備を組み合わせた企業イメージ"
                fill
                priority
                sizes="(max-width: 960px) calc(100vw - 40px), 52vw"
                className={styles.heroImage}
              />
            </figure>
          </Reveal>
        </div>

        <div className={`container ${styles.overviewStrip}`} aria-label="NOAHの企業姿勢">
          {overviewItems.map((item) => (
            <div key={item.value} className={styles.overviewItem}>
              <b>{item.value}</b>
              <span>{item.label}</span>
            </div>
          ))}
        </div>
      </section>

      <section className={styles.directory} id="company-menu" aria-labelledby="directory-title">
        <div className="container">
          <Reveal direction="up">
            <div className={styles.directoryHeader}>
              <SectionLabel eyebrow="COMPANY MENU" subtitle="企業情報メニュー" />
              <h2 id="directory-title" className={styles.visuallyHidden}>
                企業情報メニュー
              </h2>
            </div>
          </Reveal>

          <div className={styles.linkGrid}>
            {aboutLinks.map((item, index) => (
              <Reveal key={item.href} direction="up" delay={index * 45} className={styles.cardReveal}>
                <Link href={item.href} className={styles.infoCard}>
                  <span className={styles.cardImage} aria-hidden="true">
                    <Image
                      src={item.image}
                      alt=""
                      fill
                      sizes="(max-width: 640px) calc(100vw - 40px), (max-width: 1180px) 50vw, 25vw"
                      className={styles.cardImageAsset}
                    />
                  </span>
                  <span className={styles.cardShade} aria-hidden="true" />
                  <span className={styles.cardNumber}>{String(index + 1).padStart(2, "0")}</span>
                  <span className={styles.cardEyebrow}>{item.eyebrow}</span>
                  <h3>{item.title}</h3>
                  <span className={styles.cardCta}>詳しく見る</span>
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* <section className={styles.principles} aria-labelledby="principles-title">
        <div className={`container ${styles.principlesInner}`}>
          <Reveal direction="left" className={styles.principlesCopy}>
            <SectionLabel eyebrow="OUR STANCE" subtitle="NOAHの姿勢" inverse />
            <h2 id="principles-title" className={styles.inverseHeading}>
              事業領域が広がっても、
              <br />
              判断軸はぶらさない。
            </h2>
            <p className={styles.inverseLead}>
              再生可能エネルギー、蓄電池、水素、AIデータセンターなど、取り組む領域は広がっています。
              その一方で、社会に実装できるか、地域に根づくか、運用で価値を出せるかを大切にしています。
            </p>
          </Reveal>

          <div className={styles.principleGrid}>
            {principles.map((item, index) => (
              <Reveal key={item.title} direction="up" delay={index * 70}>
                <article className={styles.principleItem}>
                  <span>{String(index + 1).padStart(2, "0")}</span>
                  <h3>{item.title}</h3>
                  <p>{item.text}</p>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section> */}

      <section className={styles.cta} aria-labelledby="about-cta-title">
        <div className={`container ${styles.ctaInner}`}>
          <Reveal direction="up">
            <p className={styles.ctaEyebrow}>CONTACT</p>
            <h2 id="about-cta-title" className={styles.ctaTitle}>
              会社情報・事業連携に関するお問い合わせ
            </h2>
            <p className={styles.ctaLead}>
              会社案内、事業連携、資料請求など、お気軽にお問い合わせください。
            </p>
            <div className={styles.ctaActions}>
              <Button href="/contact" variant="white">
                お問い合わせ
              </Button>
              <Button href="/business" variant="cyan">
                事業紹介を見る
              </Button>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
