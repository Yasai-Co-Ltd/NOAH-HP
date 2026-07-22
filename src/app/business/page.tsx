import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { isPageEnabled } from "@/lib/page-config";
import Image from "next/image";
import Link from "next/link";
import { Reveal } from "@/components/animation/Reveal/Reveal";
import { Button } from "@/components/ui/Button/Button";
import { SectionLabel } from "@/components/ui/SectionLabel/SectionLabel";
import { content } from "@/lib/content";
import styles from "./page.module.css";
import { asset } from "@/lib/asset";

export const metadata: Metadata = {
  title: "事業紹介 | 諾亜建設株式会社",
  description:
    "蓄電池、風力発電、バイオマス、走行式集塵ホッパー、水素モビリティ、水素コンプレッサー、AIデータセンターまで、諾亜建設の事業領域を紹介します。",
};

const FEATURE = {
  eyebrow: "FEATURED TECHNOLOGY",
  subtitle: "注目技術",
  description:
    "飛行船型の空中風力発電システムを、離島・災害拠点・既存風力との併設へ。NOAHらしい新しい発電インフラとして訴求します。",
  image: {
    src:asset("/assets/airborne-power-noah.png"),
    alt: "NOAHロゴが入った飛行船型の空中発電所",
  },
};

const SUPPORT_STEPS = ["調査・企画", "設計・調達", "施工・導入", "運用・改善"];

export default async function BusinessPage() {
  if (!isPageEnabled("/business")) notFound();

  const services = await content.findServices();

  return (
    <>
      <section className={styles.hero} aria-labelledby="business-page-title">
        <Image
          src={asset("/assets/strengths-bg-integrated-energy.png")}
          alt=""
          fill
          priority
          sizes="100vw"
          className={styles.heroImage}
        />
        <div className={styles.heroOverlay} />
        <div className={`container ${styles.heroInner}`}>
          <Reveal direction="left">
            <p className={styles.heroEyebrow}>BUSINESS</p>
            <span className={styles.heroSubtitle}>事業紹介</span>
            <h1 id="business-page-title" className={styles.heroTitle}>
              エネルギーの生成・蓄電・活用を、
              <br />
              ひとつの構想でつなぐ。
            </h1>
            <p className={styles.heroLead}>
              蓄電池、風力発電、バイオマス、走行式集塵ホッパー、水素モビリティ、水素コンプレッサー、AIデータセンター。
              NOAHは地域と企業の課題に合わせ、最適なインフラを設計します。
            </p>
            <Button href="/contact" variant="white" className={styles.heroButton}>
              導入相談をする
            </Button>
          </Reveal>
        </div>
      </section>

      <section className={styles.featured} aria-labelledby="featured-title">
        <div className={`container ${styles.featuredInner}`}>
          <Reveal direction="left" className={styles.featureCopy}>
            <SectionLabel eyebrow={FEATURE.eyebrow} subtitle={FEATURE.subtitle} />
            <h2 id="featured-title" className={styles.featureTitle}>
              空を活用する、
              <br />
              次世代の電源。
            </h2>
            <p className={styles.featureLead}>{FEATURE.description}</p>
            <Button href="/contact" className={styles.featureButton}>
              導入相談をする
            </Button>
          </Reveal>

          <Reveal direction="right" className={styles.featureVisualReveal}>
            <figure className={styles.featureVisual}>
              <Image
                src={FEATURE.image.src}
                alt={FEATURE.image.alt}
                fill
                sizes="(max-width: 920px) calc(100vw - 40px), 58vw"
                className={styles.featureImage}
              />
              <span className={styles.featureTag} aria-hidden="true">
                NOAH AIRBORNE WIND
              </span>
              <figcaption className={styles.featureCaption}>
                空に浮かぶ、可搬型の発電所。
              </figcaption>
            </figure>
          </Reveal>
        </div>
      </section>

      <section className={styles.domains} id="business-domains" aria-labelledby="domains-title">
        <div className="container">
          <Reveal direction="up">
            <div className={styles.domainHeading}>
              <div>
                <SectionLabel eyebrow="BUSINESS DOMAIN" subtitle="主要事業領域" />
                <h2 id="domains-title" className={styles.domainTitle}>
                  複数の事業領域を結び、
                  <br />
                  最適なインフラを設計する。
                </h2>
              </div>
              {/* <p className={styles.domainLead}>
                再生可能エネルギーの導入、電力の安定化、環境設備、次世代モビリティ、AI時代のデータ基盤まで。
                  7つの領域を組み合わせて提案します。
              </p> */}
            </div>
          </Reveal>

          <div className={styles.serviceGrid}>
            {services.map((service, index) => (
              <Reveal
                key={service.id}
                direction="up"
                delay={index * 80}
                className={styles.serviceReveal}
              >
                <article className={styles.serviceCard}>
                  <Link href={service.href} className={styles.serviceLink}>
                    <div className={styles.serviceImageWrap}>
                      <Image
                        src={asset(service.image.src)}
                        alt={service.image.alt}
                        width={900}
                        height={500}
                        className={styles.serviceImage}
                      />
                    </div>
                    <div className={styles.serviceBody}>
                      <h3 className={styles.serviceTitle}>
                        <span className={styles.serviceNumber}>
                          {String(index + 1).padStart(2, "0")}
                        </span>
                        {service.title}
                      </h3>
                      <p className={styles.serviceDescription}>{service.description}</p>
                      <span className={styles.serviceCta}>詳しく見る →</span>
                    </div>
                  </Link>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className={styles.support} aria-labelledby="support-title">
        <div className={`container ${styles.supportInner}`}>
          <Reveal direction="up">
            <div className={styles.supportPanel}>
              <div>
                <p className={styles.supportEyebrow}>INTEGRATED SUPPORT</p>
                <h2 id="support-title" className={styles.supportTitle}>
                  構想から運用まで、
                  <br />
                  一貫して支援。
                </h2>
              </div>
              <div className={styles.supportBody}>
                <p>
                  調査・企画、設計・調達、施工・導入、運用・改善まで、
                  7つの事業領域を横断してプロジェクトを支えます。
                </p>
                <ol className={styles.supportSteps} aria-label="統合支援の流れ">
                  {SUPPORT_STEPS.map((step) => (
                    <li key={step}>{step}</li>
                  ))}
                </ol>
              </div>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
