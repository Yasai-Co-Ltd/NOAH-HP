import { SectionLabel } from "@/components/ui/SectionLabel/SectionLabel";
import { content } from "@/lib/content";
import { BusinessCard } from "./BusinessCard";
import styles from "./Business.module.css";

export async function Business() {
  const services = await content.findServices();

  return (
    <section className={styles.business} id="business" aria-labelledby="business-title">
      <div className="container">
        <SectionLabel eyebrow="OUR BUSINESS" subtitle="事業内容" />
        <h2 id="business-title" className="sr-only">
          事業内容
        </h2>
        <div className={styles.grid}>
          {services.map((service) => (
            <BusinessCard key={service.id} service={service} />
          ))}
        </div>
      </div>
    </section>
  );
}
