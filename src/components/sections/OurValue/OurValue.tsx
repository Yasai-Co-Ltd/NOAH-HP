import { Reveal } from "@/components/animation/Reveal/Reveal";
import { SectionLabel } from "@/components/ui/SectionLabel/SectionLabel";
import styles from "./OurValue.module.css";

type ValueIcon = "earth" | "people" | "engineer" | "idea";

interface ValueItem {
  icon: ValueIcon;
  title: string;
  description: string;
}

const VALUES: ValueItem[] = [
  {
    icon: "earth",
    title: "地域とともに、未来をつくる",
    description: "地域資源を活かしたエネルギー事業で、持続可能な地域社会の実現に貢献します。",
  },
  {
    icon: "people",
    title: "共生を大切に、信頼を築く",
    description: "地域との対話を重ね、環境と社会に配慮した事業運営を徹底します。",
  },
  {
    icon: "engineer",
    title: "確かな技術で、カタチにする",
    description: "調査・設計・施工・保守まで、確かな技術と専門性でプロジェクトを推進します。",
  },
  {
    icon: "idea",
    title: "未来を見据え、挑戦を続ける",
    description: "再生可能エネルギーの可能性を広げ、新しい価値創出に挑戦し続けます。",
  },
];

function ValueIconSvg({ icon }: { icon: ValueIcon }) {
  if (icon === "earth") {
    return (
      <svg viewBox="0 0 64 64" aria-hidden="true">
        <circle cx="32" cy="32" r="23" />
        <path d="M14 28c7 1 10-3 14-8 2-3 6-3 9 0l4 4c3 3 6 3 10 1" />
        <path d="M22 50c1-7 4-11 9-13 4-2 4-5 1-8l-3-3" />
        <path d="M43 43c-5-1-8 0-10 4l-2 5" />
      </svg>
    );
  }

  if (icon === "people") {
    return (
      <svg viewBox="0 0 64 64" aria-hidden="true">
        <circle cx="32" cy="22" r="8" />
        <circle cx="18" cy="27" r="6" />
        <circle cx="46" cy="27" r="6" />
        <path d="M20 50v-6c0-8 5-13 12-13s12 5 12 13v6" />
        <path d="M8 50v-5c0-6 4-10 10-10" />
        <path d="M56 50v-5c0-6-4-10-10-10" />
      </svg>
    );
  }

  if (icon === "engineer") {
    return (
      <svg viewBox="0 0 64 64" aria-hidden="true">
        <path d="M18 28c1-11 7-18 14-18s13 7 14 18" />
        <path d="M14 28h36" />
        <path d="M24 28V16" />
        <path d="M40 28V16" />
        <path d="M22 36l-8 8 18 12 18-12-8-8" />
        <path d="M24 36h16" />
      </svg>
    );
  }

  return (
    <svg viewBox="0 0 64 64" aria-hidden="true">
      <path d="M24 43h16" />
      <path d="M25 51h14" />
      <path d="M27 58h10" />
      <path d="M32 6v8" />
      <path d="M12 28H5" />
      <path d="M59 28h-7" />
      <path d="M16 12l5 5" />
      <path d="M48 12l-5 5" />
      <path d="M44 29c0 6-4 10-7 14H27c-3-4-7-8-7-14 0-7 5-13 12-13s12 6 12 13Z" />
    </svg>
  );
}

export function OurValue() {
  return (
    <section className={styles.value} id="value" aria-labelledby="value-title">
      <div className={`container ${styles.inner}`}>
        <Reveal direction="up">
          <div className={styles.heading}>
            <SectionLabel eyebrow="OUR VALUE" subtitle="私たちの価値観" />
            <h2 id="value-title" className="section-heading">
              私たちが大切にすること
            </h2>
          </div>
        </Reveal>
        <div className={styles.list}>
          {VALUES.map((value, index) => (
            <Reveal
              key={value.title}
              direction="up"
              delay={index * 90}
              className={styles.item}
            >
              <div className={styles.iconWrap}>
                <ValueIconSvg icon={value.icon} />
              </div>
              <h3 className={styles.title}>{value.title}</h3>
              <p className={styles.description}>{value.description}</p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
