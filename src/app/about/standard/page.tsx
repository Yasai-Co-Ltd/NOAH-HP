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
  title: "行動基準 | 諾亜建設株式会社",
  description:
    "諾亜建設株式会社の行動基準。法令遵守、安全・品質、公正な取引、地域共生、環境保全、人権尊重、情報管理など、事業活動の判断基準を紹介します。",
};

const coreMessages = [
  {
    title: "誠実に判断する",
    text: "法令、契約、社会規範を守り、短期的な利益よりも長期的な信頼を優先します。",
  },
  {
    title: "安全を守る",
    text: "現場で働く人、地域、設備、環境に対するリスクを把握し、事故の未然防止を徹底します。",
  },
  {
    title: "未来へつなぐ",
    text: "脱炭素インフラの社会実装に携わる企業として、環境と地域に責任ある行動を選びます。",
  },
];

const standards = [
  {
    title: "法令の遵守と社会規範の尊重",
    points: [
      "国内外の法令、契約、社内ルールを遵守します。",
      "社会の一員として、人と地域に対して誠実な姿勢で行動します。",
      "約束を守り、公正で透明性のある企業活動を行います。",
    ],
  },
  {
    title: "安全・品質を最優先する事業運営",
    points: [
      "施工、設備導入、保守、運用の各段階で安全確認を徹底します。",
      "蓄電池、水素、発電設備、データセンターなどの特性を理解し、品質と安全性を両立します。",
      "協力会社とも安全情報を共有し、現場全体で事故防止に取り組みます。",
    ],
  },
  {
    title: "公正な取引と信頼関係の構築",
    points: [
      "取引先、協力会社、行政、地域関係者と健全で透明な関係を保ちます。",
      "不当な利益供与、利益相反、優越的地位の濫用を行いません。",
      "節度ある態度で業務にあたり、信頼されるパートナーであり続けます。",
    ],
  },
  {
    title: "地域社会との対話と共生",
    points: [
      "事業計画に関わる地域の声を丁寧に受け止めます。",
      "景観、騒音、交通、安全、環境への影響に配慮し、説明責任を果たします。",
      "地域の暮らしと産業に役立つインフラづくりを目指します。",
    ],
  },
  {
    title: "環境保全と脱炭素への貢献",
    points: [
      "再生可能エネルギー、蓄電池、水素、AIデータセンターを通じて脱炭素化に貢献します。",
      "自然環境、生態系、資源利用への影響を把握し、環境負荷の低減に努めます。",
      "環境に優しい世界を創るという理念を、日々の事業判断に反映します。",
    ],
  },
  {
    title: "人権・多様性・健康への配慮",
    points: [
      "従業員、取引先、地域の方々の人権と個性を尊重します。",
      "ハラスメントや差別を許さず、安心して意見を交わせる職場をつくります。",
      "安全で健康に働ける環境づくりに継続して取り組みます。",
    ],
  },
  {
    title: "情報と知的財産の適正管理",
    points: [
      "個人情報、機密情報、事業資料、技術情報を適切に管理します。",
      "知的財産権を尊重し、他者の権利を侵害しません。",
      "情報を不正に取得、利用、開示せず、必要な範囲で正確に取り扱います。",
    ],
  },
  {
    title: "反社会的勢力との関係遮断",
    points: [
      "社会の秩序や安全に脅威を与える組織・団体とは一切関係を持ちません。",
      "不当な要求には毅然と対応し、関係機関とも連携して対処します。",
    ],
  },
  {
    title: "社内体制と教育の充実",
    points: [
      "事業活動に必要な法規制、安全基準、社内ルールの理解を深めます。",
      "社員教育、現場共有、ルールの見直しを通じて、企業倫理の実効性を高めます。",
      "新しい事業領域に応じて、必要な知識と管理体制を更新します。",
    ],
  },
  {
    title: "問題の早期発見と是正・再発防止",
    points: [
      "行動基準に反するおそれのある事態を見つけた場合、速やかに共有します。",
      "原因を確認し、是正措置と再発防止策を講じます。",
      "失敗や課題を隠さず、よりよい事業運営につなげます。",
    ],
  },
];

const operationItems = [
  "事業判断に迷ったときの共通基準として活用します。",
  "社内外の関係者との対話、契約、現場運営に反映します。",
  "必要に応じて内容を見直し、事業環境の変化に対応します。",
];

const nextLinks = [
  { href: "/about/vision", label: "企業理念・ビジョン" },
  { href: "/about/safety-health", label: "健康経営" },
  { href: "/about/outline", label: "会社概要" },
];

export default function StandardPage() {
  if (!isPageEnabled("/about/standard")) notFound();

  return (
    <>
      <section className={styles.hero} aria-labelledby="standard-title">
        <div className={`container ${styles.heroInner}`}>
          <Reveal direction="left" className={styles.heroCopy}>
            <p className={styles.eyebrow}>
              CODE OF CONDUCT
              <span>行動基準</span>
            </p>
            <h1 id="standard-title" className={styles.heroTitle}>
              信頼される事業を、
              <br />
              誠実な行動からつくる。
            </h1>
            <p className={styles.heroLead}>
              脱炭素インフラを社会へ実装する企業として、NOAHは法令遵守、安全、品質、地域共生、環境保全を日々の判断基準に置きます。
              事業に関わるすべての人と信頼を築くため、次の行動基準を定めます。
            </p>
            <div className={styles.heroActions}>
              <Button href="#standards">基準を見る</Button>
              <Button href="/about/vision" variant="outline">
                理念を見る
              </Button>
            </div>
          </Reveal>

          <Reveal direction="right" className={styles.heroVisualReveal}>
            <figure className={styles.heroVisual}>
              <Image
                src={asset("/assets/about/menu/standard-v2.png")}
                alt="水素設備と蓄電池設備を点検する作業員"
                fill
                priority
                sizes="(max-width: 960px) calc(100vw - 40px), 48vw"
                className={styles.heroImage}
              />
              <figcaption>安全と品質を、現場の行動で積み上げる。</figcaption>
            </figure>
          </Reveal>
        </div>
      </section>

      <section className={styles.principle} aria-labelledby="principle-title">
        <div className="container">
          <Reveal direction="up">
            <div className={styles.sectionHeader}>
              <div>
                <SectionLabel eyebrow="BASIC STANCE" subtitle="基本姿勢" />
                <h2 id="principle-title" className={styles.heading}>
                  判断に迷ったとき、
                  <br />
                  立ち返る3つの姿勢。
                </h2>
              </div>
              <p className={styles.lead}>
                行動基準は、個人の良識だけに委ねるものではなく、会社として守るべき共通の約束です。
                事業スピードを高めながらも、誠実さ、安全性、社会性を損なわない判断を重視します。
              </p>
            </div>
          </Reveal>

          <div className={styles.coreGrid}>
            {coreMessages.map((item, index) => (
              <Reveal key={item.title} direction="up" delay={index * 70}>
                <article className={styles.coreCard}>
                  <span>{String(index + 1).padStart(2, "0")}</span>
                  <h3>{item.title}</h3>
                  <p>{item.text}</p>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className={styles.standards} id="standards" aria-labelledby="standards-title">
        <div className="container">
          <Reveal direction="up">
            <div className={styles.standardsHeader}>
              <SectionLabel eyebrow="STANDARD" subtitle="10の行動基準" inverse />
              <h2 id="standards-title" className={styles.inverseHeading}>
                事業活動のあらゆる場面で、
                <br />
                守るべきこと。
              </h2>
            </div>
          </Reveal>

          <div className={styles.standardList}>
            {standards.map((item, index) => (
              <Reveal key={item.title} direction="up" delay={index * 35}>
                <article className={styles.standardItem}>
                  <span className={styles.standardNumber}>{String(index + 1).padStart(2, "0")}</span>
                  <div className={styles.standardBody}>
                    <h3>{item.title}</h3>
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

      <section className={styles.operation} aria-labelledby="operation-title">
        <div className={`container ${styles.operationInner}`}>
          <Reveal direction="left">
            <SectionLabel eyebrow="OPERATION" subtitle="運用方針" />
            <h2 id="operation-title" className={styles.heading}>
              掲げるだけでなく、
              <br />
              実務に反映する。
            </h2>
          </Reveal>
          <Reveal direction="right">
            <ul className={styles.operationList}>
              {operationItems.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </Reveal>
        </div>
      </section>

      <section className={styles.next} aria-labelledby="next-title">
        <div className={`container ${styles.nextInner}`}>
          <Reveal direction="up">
            <p className={styles.nextEyebrow}>NEXT CONTENTS</p>
            <h2 id="next-title" className={styles.nextTitle}>
              理念や健康経営の取り組みもご覧ください。
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
