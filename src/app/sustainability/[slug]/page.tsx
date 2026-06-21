import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { Reveal } from "@/components/animation/Reveal/Reveal";
import { Button } from "@/components/ui/Button/Button";
import { SectionLabel } from "@/components/ui/SectionLabel/SectionLabel";
import { asset } from "@/lib/asset";
import { isPageEnabled } from "@/lib/page-config";
import {
  getOtherSustainabilityDetails,
  getSustainabilityDetail,
  sustainabilityDetails,
} from "./sustainabilityDetailData";
import styles from "./page.module.css";

type SustainabilityDetailPageProps = {
  params: Promise<{ slug: string }>;
};

export async function generateStaticParams() {
  return sustainabilityDetails.map((item) => ({ slug: item.slug }));
}

export async function generateMetadata({
  params,
}: SustainabilityDetailPageProps): Promise<Metadata> {
  const { slug } = await params;
  const detail = getSustainabilityDetail(slug);

  if (!detail) {
    return {
      title: "サステナビリティ | 諾亜建設株式会社",
    };
  }

  return {
    title: `${detail.title} | サステナビリティ | 諾亜建設株式会社`,
    description: detail.description,
  };
}

export default async function SustainabilityDetailPage({
  params,
}: SustainabilityDetailPageProps) {
  const { slug } = await params;
  const detail = getSustainabilityDetail(slug);

  if (!detail || !isPageEnabled(detail.href)) notFound();

  const related = getOtherSustainabilityDetails(slug);
  const variantClass = {
    community: styles.communityPage,
    environment: styles.environmentPage,
    carbon: styles.carbonPage,
  }[detail.variant];

  return (
    <main className={`${styles.page} ${variantClass}`}>
      <section className={styles.hero} aria-labelledby="sustainability-detail-title">
        <div className={`container ${styles.heroShell}`}>
          <Reveal direction="left" className={styles.heroCopy}>
            <p className={styles.heroEyebrow}>SUSTAINABILITY</p>
            <span className={styles.heroSubtitle}>{detail.eyebrow}</span>
            <h1 id="sustainability-detail-title" className={styles.heroTitle}>
              {detail.heroTitle}
            </h1>
            <p className={styles.heroLead}>{detail.description}</p>
          </Reveal>

          <Reveal direction="right" className={styles.heroVisualReveal}>
            <figure className={styles.heroVisual}>
              <Image
                src={asset(detail.image.src)}
                alt={detail.image.alt}
                fill
                priority
                sizes="(max-width: 980px) calc(100vw - 40px), 44vw"
                className={styles.heroImage}
              />
              <figcaption>
                <span>{detail.title}</span>
              </figcaption>
            </figure>
          </Reveal>
        </div>
      </section>

      <section className={styles.policySection} aria-labelledby="intro-title">
        <div className={`container ${styles.policyGrid}`}>
          <Reveal direction="left" className={styles.policyRail}>
            <SectionLabel eyebrow={detail.eyebrow} subtitle={detail.title} />
            <div className={styles.themeIndex} aria-label={detail.pointsHeading}>
              {detail.points.map((point) => (
                <span key={point}>{point}</span>
              ))}
            </div>
          </Reveal>

          <Reveal direction="up" className={styles.policyArticle}>
            <h2 id="intro-title" className={styles.sectionTitle}>
              {detail.articleTitle}
            </h2>
            <p className={styles.leadText}>{detail.lead}</p>
            <div className={styles.paragraphs}>
              {detail.paragraphs.map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      <section className={styles.diagramSection} aria-labelledby="diagram-title">
        <div className="container">
          <Reveal direction="up">
            <div className={styles.diagramHeader}>
              <div>
                <SectionLabel
                  eyebrow="SYSTEM VIEW"
                  subtitle={detail.pointsTitle}
                  inverse={detail.variant === "carbon"}
                />
                <h2 id="diagram-title" className={styles.diagramTitle}>
                  {detail.diagram.title}
                </h2>
              </div>
              <p className={styles.diagramLead}>{detail.diagram.lead}</p>
            </div>
          </Reveal>

          <Reveal direction="up" className={styles.diagramFigureReveal}>
            <figure className={styles.diagramFigure}>
              <Image
                src={asset(detail.diagram.src)}
                alt={detail.diagram.alt}
                fill
                sizes="(max-width: 980px) calc(100vw - 40px), 1180px"
                className={styles.diagramImage}
              />
              <figcaption>{detail.diagram.caption}</figcaption>
            </figure>
          </Reveal>
        </div>
      </section>

      <section className={styles.initiativesSection} aria-labelledby="initiatives-title">
        <div className={`container ${styles.actionGrid}`}>
          <Reveal direction="left" className={styles.actionIntro}>
            <SectionLabel
              eyebrow="ACTION"
              subtitle="具体的な取り組み"
            />
            <h2 id="initiatives-title" className={styles.sectionTitle}>
              {detail.actionTitle}
            </h2>
            <p className={styles.sectionLead}>
              {detail.actionLead}
            </p>
          </Reveal>

          <div className={styles.actionList}>
            {detail.initiatives.map((item, index) => (
              <Reveal key={item.title} direction="up" delay={index * 80}>
                <article className={styles.actionItem}>
                  <span aria-hidden="true" />
                  <h3>{item.title}</h3>
                  <p>{item.text}</p>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className={styles.closingSection} aria-labelledby="closing-title">
        <div className={`container ${styles.closingInner}`}>
          <Reveal direction="left" className={styles.closingCopy}>
            <h2 id="closing-title">{detail.closingTitle}</h2>
            <p>{detail.closingText}</p>
          </Reveal>
          <Reveal direction="right" className={styles.closingActions}>
            <Button href="/contact" variant="primary" className={styles.ctaPrimary}>
              お問い合わせ
            </Button>
            <Button href="/sustainability" variant="white">
              サステナビリティへ戻る
            </Button>
          </Reveal>
        </div>
      </section>

      <section className={styles.relatedSection} aria-labelledby="related-title">
        <div className="container">
          <Reveal direction="up">
            <SectionLabel eyebrow="RELATED CONTENTS" subtitle="関連する取り組み" />
            <h2 id="related-title" className={styles.relatedTitle}>
              その他のテーマもご確認ください。
            </h2>
          </Reveal>

          <div className={styles.relatedList}>
            {related.map((item, index) => (
              <Reveal key={item.href} direction="up" delay={index * 70}>
                <Link href={item.href} className={styles.relatedLink}>
                  <span>{item.eyebrow}</span>
                  <b>{item.title}</b>
                  <small>{item.description}</small>
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
