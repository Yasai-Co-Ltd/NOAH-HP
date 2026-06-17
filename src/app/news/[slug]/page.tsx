import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { Reveal } from "@/components/animation/Reveal/Reveal";
import { asset } from "@/lib/asset";
import { content } from "@/lib/content";
import type { NewsItem } from "@/lib/content";
import { isPageEnabled } from "@/lib/page-config";
import styles from "./page.module.css";

type NewsDetailPageProps = {
  params: Promise<{ slug: string }>;
};

const DEFAULT_EYECATCH = {
  src: "/assets/news/default-eyecatch-noah.png",
  alt: "NOAHロゴと再生可能エネルギー設備を組み合わせたニュース用アイキャッチ",
};

function formatDate(iso: string): string {
  return iso.replaceAll("-", ".");
}

function getThumbnail(item: NewsItem) {
  return item.image ?? DEFAULT_EYECATCH;
}

async function getSortedNews() {
  const news = await content.findNews();
  return [...news].sort((a, b) => b.publishedAt.localeCompare(a.publishedAt));
}

async function getNewsBySlug(slug: string) {
  const news = await getSortedNews();
  return {
    item: news.find((entry) => entry.slug === slug),
    news,
  };
}

export async function generateStaticParams() {
  const news = await content.findNews();
  return news.map((item) => ({ slug: item.slug }));
}

export async function generateMetadata({ params }: NewsDetailPageProps): Promise<Metadata> {
  const { slug } = await params;
  const { item } = await getNewsBySlug(slug);

  if (!item) {
    return {
      title: "ニュース | 諾亜建設株式会社",
    };
  }

  return {
    title: `${item.title} | ニュース | 諾亜建設株式会社`,
    description: item.excerpt ?? "諾亜建設株式会社のお知らせです。",
  };
}

export default async function NewsDetailPage({ params }: NewsDetailPageProps) {
  if (!isPageEnabled("/news")) notFound();

  const { slug } = await params;
  const { item, news } = await getNewsBySlug(slug);

  if (!item) notFound();

  const thumbnail = getThumbnail(item);
  const relatedNews = news.filter((entry) => entry.id !== item.id).slice(0, 2);
  const lead = item.content?.lead ?? item.excerpt;
  const sections = item.content?.sections ?? [];

  return (
    <>
      <section className={styles.hero} aria-labelledby="news-detail-title">
        <Image
          src={asset(thumbnail.src)}
          alt=""
          fill
          priority
          sizes="100vw"
          className={styles.heroImage}
        />
        <div className={styles.heroShade} />
        <div className={`container ${styles.heroInner}`}>
          <Reveal direction="left">
            <nav className={styles.breadcrumb} aria-label="パンくず">
              <Link href="/news">NEWS</Link>
              <span>{item.category}</span>
            </nav>
            <div className={styles.heroMeta}>
              <time dateTime={item.publishedAt}>{formatDate(item.publishedAt)}</time>
              <span>{item.category}</span>
            </div>
            <h1 id="news-detail-title" className={styles.heroTitle}>
              {item.title}
            </h1>
            {item.excerpt && <p className={styles.heroLead}>{item.excerpt}</p>}
          </Reveal>
        </div>
      </section>

      <section className={styles.articleSection} aria-labelledby="article-title">
        <div className={`container ${styles.articleGrid}`}>
          <Reveal direction="up" className={styles.articleReveal}>
            <article className={styles.articleBody}>
              <h2 id="article-title" className={styles.articleTitle}>
                {item.title}
              </h2>
              {lead && <p className={styles.articleLead}>{lead}</p>}

              {sections.map((section) => (
                <section key={section.heading} className={styles.contentBlock}>
                  <h3>{section.heading}</h3>
                  {section.paragraphs.map((paragraph) => (
                    <p key={paragraph}>{paragraph}</p>
                  ))}
                </section>
              ))}
            </article>
          </Reveal>

          <Reveal direction="right" className={styles.sideReveal}>
            <aside className={styles.sideColumn} aria-label="記事情報">
              <div className={styles.infoCard}>
                <h2>ARTICLE INFO</h2>
                <dl>
                  <div>
                    <dt>日付</dt>
                    <dd>{formatDate(item.publishedAt)}</dd>
                  </div>
                  <div>
                    <dt>カテゴリ</dt>
                    <dd>{item.category}</dd>
                  </div>
                </dl>
                <Link href="/news" className={styles.backLink}>
                  ニュース一覧へ戻る
                </Link>
              </div>

              {relatedNews.length > 0 && (
                <div className={styles.relatedCard}>
                  <h2>RELATED NEWS</h2>
                  <div className={styles.relatedList}>
                    {relatedNews.map((entry) => (
                      <Link key={entry.id} href={entry.href} className={styles.relatedItem}>
                        <time dateTime={entry.publishedAt}>{formatDate(entry.publishedAt)}</time>
                        <span>{entry.category}</span>
                        <b>{entry.title}</b>
                      </Link>
                    ))}
                  </div>
                </div>
              )}
            </aside>
          </Reveal>
        </div>
      </section>
    </>
  );
}
