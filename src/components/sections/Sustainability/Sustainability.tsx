import Link from "next/link";
import { Reveal } from "@/components/animation/Reveal/Reveal";
import { SectionLabel } from "@/components/ui/SectionLabel/SectionLabel";
import { asset } from "@/lib/asset";
import styles from "./Sustainability.module.css";

interface SustainabilityCard {
  title: string;
  description: string;
  href: string;
  image: {
    src: string;
    alt: string;
  };
}

const CARDS: SustainabilityCard[] = [
  {
    title: "地域共生",
    description: "地域との対話を重ね、暮らしと事業が共に発展する関係を築きます。",
    href: "/sustainability/community-relations",
    image: {
      src: "/assets/sustainability-community-relations-v2.png",
      alt: "地域の方々と風力発電設備を見渡す現場スタッフ",
    },
  },
  {
    title: "環境保全",
    description: "計画から運用まで自然環境に配慮し、景観と生態系への影響低減に取り組みます。",
    href: "/sustainability/environment",
    image: {
      src: "/assets/sustainability-environment-v2.png",
      alt: "海と森に調和して並ぶ風力発電設備",
    },
  },
  {
    title: "カーボンニュートラル",
    description: "蓄電池・再エネ・水素を組み合わせ、脱炭素社会を支える基盤づくりを進めます。",
    href: "/sustainability/carbon-neutrality",
    image: {
      src: "/assets/sustainability-carbon-neutrality-v2.png",
      alt: "蓄電池と太陽光、水素設備が連携する脱炭素インフラ",
    },
  },
];

const STAGGER_MS = 90;

export function Sustainability() {
  return (
    <section
      className={styles.sustainability}
      id="sustainability"
      aria-labelledby="sustainability-title"
    >
      <div className={`container ${styles.inner}`}>
        <Reveal direction="up">
          <div className={styles.heading}>
            <div>
              <SectionLabel eyebrow="SUSTAINABILITY" subtitle="サステナビリティ" />
              <h2 id="sustainability-title" className={styles.title}>
                地域・環境・脱炭素を、
                <br />
                事業の中心に。
              </h2>
            </div>
            <p className={styles.lead}>
              再生可能エネルギー事業を通じて、地域との共生、自然環境への配慮、
              脱炭素社会への貢献を一体で推進します。
            </p>
          </div>
        </Reveal>
        <div className={styles.grid}>
          {CARDS.map((card, index) => (
            <Reveal
              key={card.href}
              direction="up"
              delay={index * STAGGER_MS}
              className={styles.item}
            >
              <article className={styles.card}>
                <Link
                  href={card.href}
                  className={styles.cardLink}
                  aria-label={`${card.title}の詳細を見る`}
                >
                  <div className={styles.imageWrap}>
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img className={styles.image} src={asset(card.image.src)} alt={card.image.alt} />
                  </div>
                  <div className={styles.body}>
                    <h3 className={styles.cardTitle}>{card.title}</h3>
                    <p className={styles.cardDescription}>{card.description}</p>
                  </div>
                </Link>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
