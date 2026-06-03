import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { isPageEnabled } from "@/lib/page-config";
import Image from "next/image";
import Link from "next/link";
import { Reveal } from "@/components/animation/Reveal/Reveal";
import { Button } from "@/components/ui/Button/Button";
import { SectionLabel } from "@/components/ui/SectionLabel/SectionLabel";
import styles from "./page.module.css";

export const metadata: Metadata = {
  title: "トップメッセージ | 諾亜建設株式会社",
  description:
    "諾亜建設株式会社 代表取締役社長からのメッセージ。脱炭素社会、再生可能エネルギー、信頼を起点とした事業姿勢を紹介します。",
};

const messageParagraphs = [
  "平素より諾亜建設に格別のご高配を賜り、誠にありがとうございます。",
  "当社は2018年10月の創業以来、「人と地球に優しい持続可能な社会を創造する」という理念を大切に、事業を通じて社会の持続的な発展に貢献することを目指してまいりました。",
  "気候変動やエネルギー需給の不安定化は、企業活動や地域の暮らしにとって避けて通れない課題です。だからこそ、再生可能エネルギーをただ導入するだけでなく、発電、蓄電、活用、運用までを一体で考えることが重要だと考えています。",
  "現在NOAHは、蓄電池、風力発電、バイオマス、水素モビリティ、AIデータセンターなど、脱炭素社会の基盤となる複数の領域に取り組んでいます。技術を社会に実装し、お客様と共に事業として育てていくことが、私たちの役割です。",
  "社名に用いた「諾」には、信頼と約束を大切にする姿勢を込めています。すべては人と人との関係から始まります。お客様と共に、社会と共に、持続可能な未来へ向けた一歩を重ねてまいります。",
  "地球規模で見れば、私たち一社にできることは大きくないかもしれません。それでも、環境保全と循環型社会の実現に向け、誠実に挑戦を続けることを私たちの使命と考えています。今後とも一層のご支援を賜りますようお願い申し上げます。",
];

const commitments = [
  {
    title: "信頼を起点にする",
    text: "お客様、地域、パートナーとの関係を大切にし、約束を積み重ねる事業運営を行います。",
  },
  {
    title: "脱炭素を実装する",
    text: "理念だけでなく、発電・蓄電・モビリティ・データ基盤として社会に使える形へ落とし込みます。",
  },
  {
    title: "未来世代へつなぐ",
    text: "環境保全と循環型社会を見据え、これからの子どもたちに残せるインフラを構想します。",
  },
];

const nextLinks = [
  { href: "/about/vision", label: "企業理念・ビジョン" },
  { href: "/about/standard", label: "行動基準" },
  { href: "/about/outline", label: "会社概要" },
];

export default function MessagePage() {
  if (!isPageEnabled("/about/message")) notFound();

  return (
    <>
      <section className={styles.hero} aria-labelledby="message-title">
        <div className={`container ${styles.heroInner}`}>
          <Reveal direction="left" className={styles.heroCopy}>
            <p className={styles.eyebrow}>
              TOP MESSAGE
              <span>トップメッセージ</span>
            </p>
            <h1 id="message-title" className={styles.heroTitle}>
              信頼を起点に、
              <br />
              脱炭素の未来を形にする。
            </h1>
            <p className={styles.heroLead}>
              創業時から大切にしてきた想いを、現在の再生可能エネルギー事業へ。
              お客様と社会に向けた、諾亜建設 代表取締役社長からのメッセージです。
            </p>
            <div className={styles.heroActions}>
              <Button href="#message-body">メッセージを読む</Button>
              <Button href="/about" variant="outline">
                企業情報へ戻る
              </Button>
            </div>
          </Reveal>

          <Reveal direction="right" className={styles.portraitReveal}>
            <figure className={styles.portraitCard}>
              <div className={styles.portraitWrap}>
                <Image
                  src="/assets/about/message/representative-suzuki.jpg"
                  alt="諾亜建設株式会社 代表取締役社長 鈴木 仲娜"
                  fill
                  priority
                  sizes="(max-width: 960px) 240px, 280px"
                  className={styles.portraitImage}
                />
              </div>
              <figcaption>
                <span>代表取締役社長</span>
                <b>鈴木 仲娜</b>
              </figcaption>
            </figure>
          </Reveal>
        </div>
      </section>

      <section className={styles.message} id="message-body" aria-labelledby="message-body-title">
        <div className={`container ${styles.messageGrid}`}>
          <Reveal direction="left" className={styles.sideRail}>
            <SectionLabel eyebrow="MESSAGE" subtitle="代表メッセージ" />
            <h2 id="message-body-title" className={styles.heading}>
              小さな一歩を、
              <br />
              持続可能な社会の力へ。
            </h2>
            <figure className={styles.calligraphy}>
              <Image
                src="/assets/about/message/message-calligraphy.jpg"
                alt="企業理念を表した書"
                fill
                sizes="(max-width: 960px) calc(100vw - 40px), 28vw"
                className={styles.calligraphyImage}
              />
            </figure>
          </Reveal>

          <Reveal direction="right">
            <article className={styles.messageBody}>
              {messageParagraphs.map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}
              <div className={styles.signature}>
                <span>諾亜建設株式会社</span>
                <span>代表取締役社長</span>
                <b>鈴木 仲娜</b>
              </div>
            </article>
          </Reveal>
        </div>
      </section>

      <section className={styles.commitment} aria-labelledby="commitment-title">
        <div className="container">
          <Reveal direction="up">
            <div className={styles.sectionHeader}>
              <div>
                <SectionLabel eyebrow="COMMITMENT" subtitle="メッセージに込めた姿勢" />
                <h2 id="commitment-title" className={styles.heading}>
                  事業の前に、
                  <br />
                  約束がある。
                </h2>
              </div>
              <p className={styles.sectionLead}>
                信頼、脱炭素、環境保全への想いを、現在のNOAHの事業を通じて形にしていきます。
                一つひとつの判断に、社会へ誠実に向き合う姿勢を込めています。
              </p>
            </div>
          </Reveal>

          <div className={styles.commitmentGrid}>
            {commitments.map((item, index) => (
              <Reveal key={item.title} direction="up" delay={index * 70}>
                <article className={styles.commitmentItem}>
                  <span>{String(index + 1).padStart(2, "0")}</span>
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
              企業理念や会社概要もあわせてご覧ください。
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
