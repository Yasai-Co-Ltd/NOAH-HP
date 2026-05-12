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
          <SectionLabel eyebrow="OUR BUSINESS" subtitle="事業内容" />
          <h2 id="business-title" className="sr-only">
            事業内容
          </h2>
        </Reveal>
        <div className={styles.grid}>
          {services.map((service, index) => (
            <Reveal key={service.id} direction="up" delay={index * STAGGER_MS}>
              <BusinessCard service={service} />
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
