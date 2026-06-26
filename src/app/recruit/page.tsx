import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Image from "next/image";
import { Reveal } from "@/components/animation/Reveal/Reveal";
import { Button } from "@/components/ui/Button/Button";
import { SectionLabel } from "@/components/ui/SectionLabel/SectionLabel";
import { RecruitForm } from "@/components/forms/RecruitForm/RecruitForm";
import { asset } from "@/lib/asset";
import { isPageEnabled } from "@/lib/page-config";
import styles from "./page.module.css";

export const metadata: Metadata = {
  title: "採用情報 | 諾亜建設株式会社",
  description:
    "諾亜建設株式会社の採用情報です。人事・総務、営業、電気設備エンジニアなど、現在募集中の職種と応募フォームを掲載します。",
};

const jobOpenings = [
  {
    title: "人事・総務",
    summary:
      "人事・総務に関する管理業務を中心に、法務関連手続き、営業サポート、翻訳、庶務まで会社運営を支える職種です。",
    tags: ["総務関連事務", "法務手続き", "営業サポート", "中日翻訳"],
    meta: [
      { label: "勤務地", value: "東京都中野区" },
      { label: "募集人数", value: "若干名" },
      { label: "雇用形態", value: "正社員／契約社員" },
      { label: "給与", value: "面談" },
    ],
    requirements: [
      "専門学校卒以上",
      "事務経験、Word・Excel・PowerPointなどの基本操作",
      "日本語でのメール・電話対応ができる方",
      "英語が話せる方は歓迎",
    ],
  },
  {
    title: "営業募集",
    summary:
      "水素関連設備、バイオマス発電向け設備、ハンドリング装置など、エネルギー・プラント領域の提案営業を担います。",
    tags: ["法人営業", "水素・再エネ", "プラント設備", "提案資料作成"],
    meta: [
      { label: "勤務地", value: "東京都中野区" },
      { label: "募集人数", value: "若干名" },
      { label: "雇用形態", value: "正社員／契約社員" },
      { label: "給与", value: "面談" },
    ],
    requirements: [
      "産業用機械装置の営業経験",
      "環境、プラント、自動車、水素を含むエネルギー分野への関心",
      "社内外の関係者と円滑にコミュニケーションできる方",
      "Word・Excel・Outlookなどの基本操作",
    ],
  },
  {
    title: "電気設備エンジニア",
    summary:
      "プラント設備建設や設備増設に関わる配線工事の設計、見積り、工事管理、保全計画、点検対応を行う職種です。",
    tags: ["電気設備", "施工管理", "保全計画", "高圧・低圧設備"],
    meta: [
      { label: "勤務地", value: "東京都中野区" },
      { label: "募集人数", value: "若干名" },
      { label: "必要資格", value: "普通自動車運転免許" },
      { label: "給与", value: "面談" },
    ],
    requirements: [
      "工場、プラント、発電所での高圧・低圧電気設備の保全、メンテナンス、施工管理などの経験",
      "電気工事士、電気主任技術者、電気工事施工管理技士などの資格保有者は歓迎",
      "緊急時対応、外注業者管理、小規模工事の施工管理に対応できる方",
    ],
  },
];

const commonInfo = [
  { label: "勤務地", value: "東京都中野区本町2丁目46-1 サンブライトツインビル北棟15F" },
  { label: "雇用形態", value: "職種により正社員／契約社員。詳細は面談時に確認します。" },
  { label: "給与", value: "経験・スキルを考慮し、面談のうえ決定します。" },
  { label: "応募方法", value: "応募フォームに必要事項をご入力のうえ送信してください。" },
];

const applySteps = [
  {
    title: "募集職種を確認",
    text: "仕事内容、応募条件、勤務地を確認してください。",
  },
  {
    title: "フォームで応募",
    text: "応募職種を選び、必要事項を入力して送信してください。",
  },
  {
    title: "書類確認・面談",
    text: "経験や希望を確認し、必要に応じて面談を行います。",
  },
  {
    title: "条件確認・採用",
    text: "雇用条件を確認し、入社までの手続きを進めます。",
  },
];

export default function RecruitPage() {
  if (!isPageEnabled("/recruit")) notFound();

  return (
    <>
      <section className={styles.hero} aria-labelledby="recruit-page-title">
        <div className={`container ${styles.heroInner}`}>
          <Reveal direction="left" className={styles.heroCopy}>
            <p className={styles.heroEyebrow}>
              RECRUIT
              <span>採用情報</span>
            </p>
            <h1 id="recruit-page-title" className={styles.heroTitle}>
              採用情報
            </h1>
            <p className={styles.heroLead}>
              諾亜建設では、エネルギー・プラント・設備領域の事業を支える人材を募集しています。
              募集中の職種、仕事内容、応募条件をご確認ください。
            </p>
            <div className={styles.heroActions}>
              <Button href="#positions">募集職種を見る</Button>
              <Button href="#apply" variant="outline">
                応募方法を見る
              </Button>
            </div>
          </Reveal>

          <Reveal direction="right" className={styles.heroVisualReveal}>
            <figure className={styles.heroVisual}>
              <Image
                src={asset("/assets/recruit-hq.jpg")}
                alt="風力発電設備を背景に現場で打ち合わせを行うスタッフ"
                fill
                priority
                sizes="(max-width: 920px) calc(100vw - 40px), 50vw"
                className={styles.heroImage}
              />
              <figcaption className={styles.heroBadge}>
                <span>NOAH RECRUIT</span>
                <b>Energy Infrastructure</b>
              </figcaption>
            </figure>
          </Reveal>
        </div>
      </section>

      <section className={styles.positions} id="positions" aria-labelledby="positions-title">
        <div className="container">
          <Reveal direction="up">
            <div className={styles.sectionHeader}>
              <div>
                <SectionLabel eyebrow="JOB OPENINGS" subtitle="募集職種" />
                <h2 id="positions-title" className={styles.sectionTitle}>
                  現在募集中の職種
                </h2>
              </div>
              <p className={styles.sectionLead}>
                職種ごとの仕事内容、勤務地、募集条件を一覧で確認できます。
                ご希望の職種を選び、応募フォームよりご応募ください。
              </p>
            </div>
          </Reveal>

          <div className={styles.jobList}>
            {jobOpenings.map((job, index) => (
              <Reveal key={job.title} direction="up" delay={index * 70}>
                <article className={styles.jobCard}>
                  <dl className={styles.jobMeta}>
                    <dt className={styles.jobNumber}>JOB {String(index + 1).padStart(2, "0")}</dt>
                    {job.meta.map((item) => (
                      <div key={item.label}>
                        <dt>{item.label}</dt>
                        <dd>{item.value}</dd>
                      </div>
                    ))}
                  </dl>

                  <div className={styles.jobBody}>
                    <h3>{job.title}</h3>
                    <p>{job.summary}</p>
                    <div className={styles.tags} aria-label={`${job.title}の関連領域`}>
                      {job.tags.map((tag) => (
                        <span key={tag}>{tag}</span>
                      ))}
                    </div>
                  </div>

                  <div className={styles.jobAction}>
                    <Button href="#entry" variant="primary" className={styles.jobButton}>
                      この職種に応募
                    </Button>
                  </div>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className={styles.guide} id="apply" aria-labelledby="apply-title">
        <div className={`container ${styles.guideInner}`}>
          <Reveal direction="left" className={styles.infoPanel}>
            <h2 id="apply-title" className={styles.guideTitle}>
              共通情報
            </h2>
            <dl className={styles.infoList}>
              {commonInfo.map((item) => (
                <div key={item.label}>
                  <dt>{item.label}</dt>
                  <dd>{item.value}</dd>
                </div>
              ))}
            </dl>
          </Reveal>

          <Reveal direction="right" className={styles.flowPanel}>
            <h2 className={styles.guideTitle}>応募の流れ</h2>
            <p className={styles.flowLead}>
              募集内容をご確認のうえ、ページ下部の応募フォームよりご応募ください。
            </p>
            <ol className={styles.flowList}>
              {applySteps.map((step, index) => (
                <li key={step.title}>
                  <span aria-hidden="true">{String(index + 1).padStart(2, "0")}</span>
                  <b>{step.title}</b>
                </li>
              ))}
            </ol>
          </Reveal>
        </div>
      </section>

      <section
        className={styles.cta}
        aria-labelledby="recruit-cta-title"
        style={{
          backgroundImage: `linear-gradient(90deg, rgba(3, 16, 38, 0.95), rgba(5, 39, 102, 0.78)), url(${asset(
            "/assets/recruit-hq.jpg",
          )})`,
        }}
      >
        <div className={`container ${styles.ctaInner}`}>
          <Reveal direction="left" className={styles.ctaCopy}>
            <p className={styles.ctaEyebrow}>ENTRY</p>
            <h2 id="recruit-cta-title" className={styles.ctaTitle}>
              ご応募をお待ちしています。
            </h2>
            <p className={styles.ctaLead}>
              募集職種をご確認のうえ、下記の応募フォームより必要事項をご入力ください。
            </p>
          </Reveal>
          <Reveal direction="right" className={styles.ctaActions}>
            <Button href="#entry" variant="white">
              応募フォームへ
            </Button>
            <Button href="#positions" variant="cyan" className={styles.ctaOutline}>
              募集職種へ戻る
            </Button>
          </Reveal>
        </div>
      </section>

      <section className={styles.entry} id="entry" aria-labelledby="entry-title">
        <div className={`container ${styles.entryInner}`}>
          <Reveal direction="up">
            <div className={styles.entryHeader}>
              <SectionLabel eyebrow="ENTRY FORM" subtitle="応募フォーム" />
              <h2 id="entry-title" className={styles.sectionTitle}>
                応募フォーム
              </h2>
              <p className={styles.entryLead}>
                以下のフォームに必要事項をご入力のうえ送信してください。
                内容を確認のうえ、採用担当よりご連絡いたします。
              </p>
            </div>
          </Reveal>
          <Reveal direction="up" delay={80}>
            <RecruitForm jobTitles={jobOpenings.map((job) => job.title)} />
          </Reveal>
        </div>
      </section>
    </>
  );
}
