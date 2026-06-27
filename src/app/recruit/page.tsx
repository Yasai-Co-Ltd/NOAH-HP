import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Image from "next/image";
import { Reveal } from "@/components/animation/Reveal/Reveal";
import { Button } from "@/components/ui/Button/Button";
import { SectionLabel } from "@/components/ui/SectionLabel/SectionLabel";
import { asset } from "@/lib/asset";
import { isPageEnabled } from "@/lib/page-config";
import { jobOpenings, recruitCommonInfo, applySteps } from "@/lib/recruit";
import styles from "./page.module.css";

export const metadata: Metadata = {
  title: "採用情報 | 諾亜建設株式会社",
  description:
    "諾亜建設株式会社の採用情報です。人事・総務、営業、電気設備エンジニアなど、現在募集中の職種と応募フォームを掲載します。",
};

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
              <Button href="/recruit/apply" variant="outline">
                応募フォームへ
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
                気になる職種の詳細を開き、応募フォームよりご応募ください。
              </p>
            </div>
          </Reveal>

          <div className={styles.jobList}>
            {jobOpenings.map((job, index) => (
              <Reveal key={job.slug} direction="up" delay={index * 70}>
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
                    <Button
                      href={`/recruit/${job.slug}`}
                      variant="primary"
                      className={styles.jobButton}
                    >
                      募集要項の詳細
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
              {recruitCommonInfo.map((item) => (
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
              募集内容をご確認のうえ、応募フォームよりご応募ください。
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
              募集職種をご確認のうえ、応募フォームより必要事項をご入力ください。
            </p>
          </Reveal>
          <Reveal direction="right" className={styles.ctaActions}>
            <Button href="/recruit/apply" variant="white">
              応募フォームへ
            </Button>
            <Button href="#positions" variant="cyan" className={styles.ctaOutline}>
              募集職種へ戻る
            </Button>
          </Reveal>
        </div>
      </section>
    </>
  );
}
