import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { Reveal } from "@/components/animation/Reveal/Reveal";
import { Button } from "@/components/ui/Button/Button";
import { SectionLabel } from "@/components/ui/SectionLabel/SectionLabel";
import { isPageEnabled } from "@/lib/page-config";
import { jobOpenings, getJobBySlug } from "@/lib/recruit";
import styles from "./page.module.css";

type JobDetailPageProps = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return jobOpenings.map((job) => ({ slug: job.slug }));
}

export async function generateMetadata({ params }: JobDetailPageProps): Promise<Metadata> {
  const { slug } = await params;
  const job = getJobBySlug(slug);

  if (!job) {
    return { title: "採用情報 | 諾亜建設株式会社" };
  }

  return {
    title: `${job.title}｜募集要項 | 諾亜建設株式会社`,
    description: job.summary,
  };
}

export default async function JobDetailPage({ params }: JobDetailPageProps) {
  if (!isPageEnabled("/recruit")) notFound();

  const { slug } = await params;
  const job = getJobBySlug(slug);

  if (!job) notFound();

  const jobIndex = jobOpenings.findIndex((entry) => entry.slug === job.slug);

  return (
    <>
      <section className={styles.hero} aria-labelledby="job-title">
        <div className="container">
          <Reveal direction="up" className={styles.heroInner}>
            <nav className={styles.breadcrumb} aria-label="パンくず">
              <Link href="/recruit">採用情報</Link>
              <span aria-hidden="true">/</span>
              <span aria-current="page">{job.title}</span>
            </nav>
            <p className={styles.heroEyebrow}>
              JOB {String(jobIndex + 1).padStart(2, "0")}
            </p>
            <h1 id="job-title" className={styles.heroTitle}>
              {job.title}
            </h1>
            <p className={styles.heroLead}>{job.summary}</p>
            <div className={styles.tags} aria-label={`${job.title}の関連領域`}>
              {job.tags.map((tag) => (
                <span key={tag}>{tag}</span>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      <section className={styles.detail} aria-labelledby="detail-title">
        <div className={`container ${styles.detailInner}`}>
          <Reveal direction="left" className={styles.detailMain}>
            <SectionLabel eyebrow="REQUIREMENTS" subtitle="応募条件" />
            <h2 id="detail-title" className={styles.sectionTitle}>
              求める経験・スキル
            </h2>
            <ul className={styles.requirementList}>
              {job.requirements.map((requirement) => (
                <li key={requirement}>{requirement}</li>
              ))}
            </ul>
          </Reveal>

          <Reveal direction="right" className={styles.detailAside}>
            <h2 className={styles.asideTitle}>募集要項</h2>
            <dl className={styles.metaList}>
              {job.meta.map((item) => (
                <div key={item.label}>
                  <dt>{item.label}</dt>
                  <dd>{item.value}</dd>
                </div>
              ))}
            </dl>
            <Button href="/recruit/apply" variant="primary" className={styles.applyButton}>
              この職種に応募する
            </Button>
            <Link href="/recruit" className={styles.backLink}>
              ← 募集職種一覧へ戻る
            </Link>
          </Reveal>
        </div>
      </section>
    </>
  );
}
