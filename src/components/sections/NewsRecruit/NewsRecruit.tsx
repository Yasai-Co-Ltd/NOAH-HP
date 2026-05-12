import Link from "next/link";
import { SectionLabel } from "@/components/ui/SectionLabel/SectionLabel";
import { TextLink } from "@/components/ui/TextLink/TextLink";
import { content } from "@/lib/content";
import styles from "./NewsRecruit.module.css";

function formatDate(iso: string): string {
  return iso.replaceAll("-", ".");
}

export async function NewsRecruit() {
  const news = await content.findNews({ limit: 3 });

  return (
    <section className={styles.section} id="news" aria-labelledby="news-title">
      <div className={`container ${styles.grid}`}>
        <div>
          <SectionLabel eyebrow="NEWS" subtitle="お知らせ" />
          <h2 id="news-title" className="sr-only">
            お知らせ
          </h2>
          <div className={styles.list}>
            {news.map((item) => (
              <Link key={item.id} href={item.href} className={styles.item}>
                <time dateTime={item.publishedAt} className={styles.time}>
                  {formatDate(item.publishedAt)}
                </time>
                <span className={styles.tag}>{item.category}</span>
                <strong className={styles.itemTitle}>{item.title}</strong>
              </Link>
            ))}
          </div>
          <TextLink href="#" className={styles.more}>
            すべてのお知らせを見る
          </TextLink>
        </div>
        <Link href="#contact" className={styles.banner}>
          <span className={styles.bannerCopy}>
            <b className={styles.bannerTitle}>採用情報</b>
            <em className={styles.bannerDescription}>
              ともに未来をつくる
              <br />
              仲間を募集しています。
            </em>
            <i className={styles.bannerCta}>詳しく見る →</i>
          </span>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img className={styles.bannerImage} src="/assets/recruit-hq.jpg" alt="" />
        </Link>
      </div>
    </section>
  );
}
