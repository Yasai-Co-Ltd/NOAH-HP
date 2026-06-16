import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { Reveal } from "@/components/animation/Reveal/Reveal";
import { Button } from "@/components/ui/Button/Button";
import { SectionLabel } from "@/components/ui/SectionLabel/SectionLabel";
import { asset } from "@/lib/asset";
import { isPageEnabled } from "@/lib/page-config";
import styles from "./page.module.css";

export const metadata: Metadata = {
  title: "サステナビリティ | 諾亜建設株式会社",
  description:
    "諾亜建設株式会社のサステナビリティ。地域共生、環境保全、カーボンニュートラルの3つの視点から、持続可能なインフラづくりへの取り組みを紹介します。",
};

const themes = [
  {
    href: "/sustainability/community-relations",
    number: "THEME 01",
    title: "地域共生",
    text: "地域との対話を重ね、暮らしと事業が共に発展する関係づくりを進めます。",
    image: {
      src: "/assets/sustainability/community-relations-v3.png",
      alt: "地域住民と現場スタッフが地図を見ながら地域の計画について話し合う様子",
    },
  },
  {
    href: "/sustainability/environment",
    number: "THEME 02",
    title: "環境保全",
    text: "計画から運用まで自然環境に配慮し、景観と生態系への影響低減に取り組みます。",
    image: {
      src: "/assets/sustainability/environment-v3.png",
      alt: "水辺の自然環境を調査する現場スタッフ",
    },
  },
  {
    href: "/sustainability/carbon-neutrality",
    number: "THEME 03",
    title: "カーボンニュートラル",
    text: "蓄電池・再エネ・水素を組み合わせ、脱炭素社会を支える基盤づくりを進めます。",
    image: {
      src: "/assets/sustainability/carbon-neutrality-v3.png",
      alt: "蓄電池、太陽光、水素設備が連携するカーボンニュートラルインフラ",
    },
  },
];

const stanceItems = [
  {
    number: "01",
    title: "地域と進める",
    text: "立地や暮らしに配慮し、地域と対話しながら計画します。",
  },
  {
    number: "02",
    title: "環境を守る",
    text: "景観、生態系、安全性に配慮し、影響低減を図ります。",
  },
  {
    number: "03",
    title: "脱炭素を支える",
    text: "再エネ、蓄電池、水素、AI制御を組み合わせます。",
  },
];

const businessTags = [
  "蓄電池",
  "風力発電",
  "バイオマス",
  "走行式集塵ホッパー",
  "水素モビリティ",
  "AIデータセンター",
];

export default function SustainabilityPage() {
  if (!isPageEnabled("/sustainability")) notFound();

  return (
    <>
      <section className={styles.hero} aria-labelledby="sustainability-title">
        <Image
          src={asset("/assets/sustainability-carbon-neutrality-v2.png")}
          alt=""
          fill
          priority
          sizes="100vw"
          className={styles.heroImage}
        />
        <div className={styles.heroOverlay} />
        <div className={`container ${styles.heroInner}`}>
          <Reveal direction="left">
            <p className={styles.heroEyebrow}>SUSTAINABILITY</p>
            <span className={styles.heroSubtitle}>サステナビリティ</span>
            <h1 id="sustainability-title" className={styles.heroTitle}>
              地域・環境・脱炭素を、
              <br />
              事業の中心に。
            </h1>
            <p className={styles.heroLead}>
              NOAHは、再生可能エネルギー、蓄電池、水素、AIデータセンターを組み合わせ、
              持続可能なインフラの実装に取り組みます。
            </p>
            <div className={styles.heroActions}>
              <Button href="#themes" variant="white" className={styles.heroButton}>
                テーマを見る
              </Button>
              <Button href="/business" variant="outline" className={styles.heroOutlineButton}>
                事業紹介へ
              </Button>
            </div>
          </Reveal>
        </div>
      </section>

      <section className={styles.themes} id="themes" aria-labelledby="themes-title">
        <div className="container">
          <Reveal direction="up">
            <div className={styles.themesHeader}>
              <div>
                <SectionLabel eyebrow="CONTENTS" subtitle="テーマ別の取り組み" />
                <h2 id="themes-title" className={styles.sectionTitle}>
                  3つの視点で見る、
                  <br />
                  NOAHの取り組み。
                </h2>
              </div>
              <p className={styles.sectionLead}>
                地域共生、環境保全、カーボンニュートラルの3つの視点から、
                NOAHの考え方と取り組みを紹介します。
              </p>
            </div>
          </Reveal>

          <div className={styles.themeGrid}>
            {themes.map((theme, index) => (
              <Reveal
                key={theme.href}
                direction="up"
                delay={index * 80}
                className={styles.themeReveal}
              >
                <Link href={theme.href} className={styles.themeCard}>
                  <span className={styles.themeImageWrap}>
                    <Image
                      src={asset(theme.image.src)}
                      alt={theme.image.alt}
                      width={900}
                      height={520}
                      className={styles.themeImage}
                    />
                  </span>
                  <span className={styles.themeBody}>
                    <span className={styles.themeNumber}>{theme.number}</span>
                    <h3>{theme.title}</h3>
                    <span className={styles.themeText}>{theme.text}</span>
                    <span className={styles.themeCta}>詳しく見る</span>
                  </span>
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className={styles.stance} aria-labelledby="stance-title">
        <div className={`container ${styles.stanceInner}`}>
          <Reveal direction="left" className={styles.stanceCopy}>
            <SectionLabel eyebrow="NOAH'S STANCE" subtitle="NOAHの考え方" inverse />
            <h2 id="stance-title" className={styles.inverseTitle}>
              理念で終わらせず、
              <br />
              事業として実装する。
            </h2>
            <p className={styles.inverseLead}>
              発電、蓄電、利用、運用までをつなぎ、地域や企業の現場で使い続けられる仕組みにします。
            </p>
          </Reveal>

          <div className={styles.stanceList}>
            {stanceItems.map((item, index) => (
              <Reveal key={item.title} direction="up" delay={index * 70}>
                <article className={styles.stanceItem}>
                  <b>{item.number}</b>
                  <h3>{item.title}</h3>
                  <p>{item.text}</p>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className={styles.businessBridge} aria-labelledby="business-bridge-title">
        <div className={`container ${styles.businessPanel}`}>
          <Reveal direction="left" className={styles.businessImageReveal}>
            <div className={styles.businessImageWrap}>
              <Image
                src={asset("/assets/strengths-bg-integrated-energy.png")}
                alt="発電設備、蓄電池、水素設備が地域インフラとして配置された風景"
                fill
                sizes="(max-width: 920px) calc(100vw - 40px), 48vw"
                className={styles.businessImage}
              />
            </div>
          </Reveal>

          <Reveal direction="right" className={styles.businessBody}>
            <SectionLabel eyebrow="BUSINESS" subtitle="事業を通じた貢献" />
            <h2 id="business-bridge-title" className={styles.bridgeTitle}>
              6つの事業領域で、
              <br />
              持続可能なインフラへ。
            </h2>
            <p className={styles.bridgeLead}>
              サステナビリティの考え方を起点に、各事業領域で具体的な取り組みを紹介します。
            </p>
            <div className={styles.businessTags} aria-label="関連事業">
              {businessTags.map((tag) => (
                <span key={tag}>{tag}</span>
              ))}
            </div>
            <Button href="/business" variant="outline" className={styles.businessButton}>
              事業紹介を見る
            </Button>
          </Reveal>
        </div>
      </section>

      <section className={styles.cta} aria-labelledby="sustainability-cta-title">
        <div className={`container ${styles.ctaInner}`}>
          <Reveal direction="left" className={styles.ctaCopy}>
            <h2 id="sustainability-cta-title">
              地域と企業の脱炭素化を、
              <br />
              事業計画からご相談ください。
            </h2>
            <p>
              再生可能エネルギー、蓄電池、水素、AIデータセンターまで、
              目的に合わせた構想を一緒に検討します。
            </p>
          </Reveal>
          <Reveal direction="right" className={styles.ctaActions}>
            <Button href="/contact" variant="primary" className={styles.ctaPrimary}>
              お問い合わせ
            </Button>
            <Button href="/business" variant="white">
              事業紹介を見る
            </Button>
          </Reveal>
        </div>
      </section>
    </>
  );
}
