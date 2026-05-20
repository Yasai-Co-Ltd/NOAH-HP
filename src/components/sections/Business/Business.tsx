import { Reveal } from "@/components/animation/Reveal/Reveal";
import { SectionLabel } from "@/components/ui/SectionLabel/SectionLabel";
import { content } from "@/lib/content";
import { BusinessCard } from "./BusinessCard";
import styles from "./Business.module.css";

const STAGGER_MS = 90;

export async function Business() {
  const services = await content.findServices();

  return (
    <section className={styles.business} id="business" aria-labelledby="business-title">
      <div className="container">
        <Reveal direction="up">
          <div className={styles.heading}>
            <div>
              <SectionLabel eyebrow="OUR BUSINESS" subtitle="事業内容" />
              <h2 id="business-title" className={styles.title}>
                6つの事業領域から、
                <br />
                最適なインフラを提案。
              </h2>
            </div>
            <p className={styles.lead}>
              サイトマップ配下の事業ページをトップの主要導線として整理。
              画像で領域差を見せ、各詳細ページへ迷わず進める構成。
            </p>
          </div>
        </Reveal>
        <div className={styles.grid}>
          {services.map((service, index) => (
            <Reveal
              key={service.id}
              direction="up"
              delay={index * STAGGER_MS}
              className={styles.item}
            >
              <BusinessCard service={service} index={index} />
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
