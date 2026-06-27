import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { Reveal } from "@/components/animation/Reveal/Reveal";
import { SectionLabel } from "@/components/ui/SectionLabel/SectionLabel";
import { RecruitForm } from "@/components/forms/RecruitForm/RecruitForm";
import { isPageEnabled } from "@/lib/page-config";
import { jobOpenings, applySteps } from "@/lib/recruit";
import styles from "./page.module.css";

export const metadata: Metadata = {
  title: "応募フォーム | 採用情報 | 諾亜建設株式会社",
  description:
    "諾亜建設株式会社の採用応募フォームです。応募職種を選び、必要事項をご入力のうえ送信してください。",
};

export default function RecruitApplyPage() {
  if (!isPageEnabled("/recruit/apply")) notFound();

  return (
    <>
      <section className={styles.hero} aria-labelledby="apply-page-title">
        <div className="container">
          <Reveal direction="up" className={styles.heroInner}>
            <nav className={styles.breadcrumb} aria-label="パンくず">
              <Link href="/recruit">採用情報</Link>
              <span aria-hidden="true">/</span>
              <span aria-current="page">応募フォーム</span>
            </nav>
            <p className={styles.heroEyebrow}>ENTRY FORM</p>
            <h1 id="apply-page-title" className={styles.heroTitle}>
              応募フォーム
            </h1>
            <p className={styles.heroLead}>
              以下のフォームに必要事項をご入力のうえ送信してください。
              内容を確認のうえ、採用担当よりご連絡いたします。
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

      <section className={styles.entry} aria-labelledby="entry-title">
        <div className={`container ${styles.entryInner}`}>
          <Reveal direction="up">
            <div className={styles.entryHeader}>
              <SectionLabel eyebrow="ENTRY" subtitle="応募内容のご入力" />
              <h2 id="entry-title" className={styles.entryTitle}>
                応募内容のご入力
              </h2>
              <p className={styles.entryLead}>
                応募職種を選び、お名前・連絡先・志望内容をご入力ください。
                内容を確認のうえ、採用担当よりご連絡いたします。
              </p>
            </div>
          </Reveal>
          <Reveal direction="up" delay={80}>
            <RecruitForm jobTitles={jobOpenings.map((job) => job.title)} />
          </Reveal>

          <Reveal direction="up" delay={120}>
            <Link href="/recruit" className={styles.backLink}>
              ← 募集職種一覧へ戻る
            </Link>
          </Reveal>
        </div>
      </section>
    </>
  );
}
