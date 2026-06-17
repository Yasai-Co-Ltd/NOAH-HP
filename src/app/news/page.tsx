import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { Reveal } from "@/components/animation/Reveal/Reveal";
import { Button } from "@/components/ui/Button/Button";
import { SectionLabel } from "@/components/ui/SectionLabel/SectionLabel";
import { content } from "@/lib/content";
import type { NewsItem } from "@/lib/content";
import { asset } from "@/lib/asset";
import { isPageEnabled } from "@/lib/page-config";
import styles from "./page.module.css";

export const metadata: Metadata = {
  title: "ニュース | 諾亜建設株式会社",
  description:
    "諾亜建設株式会社のニュース一覧です。お知らせ、プレスリリース、事業に関する最新情報を掲載します。",
};

const DEFAULT_EYECATCH = {
  src: "/assets/news/default-eyecatch-noah.png",
  alt: "NOAHロゴと再生可能エネルギー設備を組み合わせたニュース用アイキャッチ",
};

function formatDate(iso: string): string {
  return iso.replaceAll("-", ".");
}

function getYear(iso: string): string {
  return iso.slice(0, 4);
}

function groupNewsByYear(news: NewsItem[]): Array<[string, NewsItem[]]> {
  const groups = new Map<string, NewsItem[]>();

  news.forEach((item) => {
    const year = getYear(item.publishedAt);
    const items = groups.get(year) ?? [];
    items.push(item);
    groups.set(year, items);
  });

  return [...groups.entries()];
}

function getThumbnail(item: NewsItem) {
  return item.image ?? DEFAULT_EYECATCH;
}

function getCategories(news: NewsItem[]): Array<{ label: string; count: number }> {
  const counts = new Map<string, number>();

  news.forEach((item) => {
    counts.set(item.category, (counts.get(item.category) ?? 0) + 1);
  });

  return [...counts.entries()].map(([label, count]) => ({ label, count }));
}

export default async function NewsPage() {
  if (!isPageEnabled("/news")) notFound();

  const news = await content.findNews();
  const sortedNews = [...news].sort((a, b) => b.publishedAt.localeCompare(a.publishedAt));
  const featuredNews = sortedNews[0];
  const remainingNews = sortedNews.slice(1);
  const groupedNews = groupNewsByYear(sortedNews);
  const categories = getCategories(sortedNews);
  const totalNewsCount = sortedNews.length;

  return (
    <>
      <section className={styles.hero} aria-labelledby="news-page-title">
        <div className={styles.heroOverlay} />
        <div className={`container ${styles.heroInner}`}>
          <Reveal direction="left">
            <p className={styles.heroEyebrow}>NEWS</p>
            <h1 id="news-page-title" className={styles.heroTitle}>
              ニュース
            </h1>
            <p className={styles.heroLead}>
              お知らせ、プレスリリース、事業に関する最新の取り組みや更新情報を順次掲載します。
            </p>
          </Reveal>
        </div>
      </section>

      <section className={styles.newsSection} aria-labelledby="news-list-title">
        <div className="container">
          <Reveal direction="up">
            <div className={styles.newsHeader}>
              <div>
                <SectionLabel eyebrow="NEWS LIST" subtitle="お知らせ一覧" />
                <h2 id="news-list-title" className={styles.sectionTitle}>
                  最新のお知らせ
                </h2>
              </div>
            </div>
          </Reveal>

          {featuredNews ? (
            <div className={styles.newsLayout}>
              <div className={styles.newsMain}>
                <Reveal direction="up" className={styles.featuredReveal}>
                  <article className={styles.featuredRow}>
                    <div className={styles.featuredImageWrap}>
                      <Image
                        src={asset(getThumbnail(featuredNews).src)}
                        alt={getThumbnail(featuredNews).alt}
                        fill
                        sizes="(max-width: 900px) calc(100vw - 40px), 390px"
                        className={styles.cardImage}
                      />
                    </div>
                    <div className={styles.featuredBody}>
                      <div className={styles.newsMeta}>
                        <time dateTime={featuredNews.publishedAt}>
                          {formatDate(featuredNews.publishedAt)}
                        </time>
                        <span>{featuredNews.category}</span>
                      </div>
                      <h3>{featuredNews.title}</h3>
                      {featuredNews.excerpt && <p>{featuredNews.excerpt}</p>}
                    </div>
                    {featuredNews.href !== "#" ? (
                      <Link
                        href={featuredNews.href}
                        className={styles.rowArrow}
                        aria-label={`${featuredNews.title}の詳細を見る`}
                      >
                        →
                      </Link>
                    ) : (
                      <span className={styles.rowArrow} aria-hidden="true">
                        →
                      </span>
                    )}
                  </article>
                </Reveal>

                {remainingNews.length > 0 && (
                  <div className={styles.newsList} aria-label="その他のお知らせ">
                    {remainingNews.map((item, index) => (
                      <Reveal
                        key={item.id}
                        direction="up"
                        delay={index * 80}
                        className={styles.listReveal}
                      >
                        <article className={styles.newsRow}>
                          <div className={styles.rowImageWrap}>
                            <Image
                              src={asset(getThumbnail(item).src)}
                              alt={getThumbnail(item).alt}
                              fill
                              sizes="(max-width: 760px) calc(100vw - 40px), 180px"
                              className={styles.cardImage}
                            />
                          </div>
                          <div className={styles.rowBody}>
                            <div className={styles.newsMeta}>
                              <time dateTime={item.publishedAt}>{formatDate(item.publishedAt)}</time>
                              <span>{item.category}</span>
                            </div>
                            <h3>{item.title}</h3>
                            {item.excerpt && <p>{item.excerpt}</p>}
                          </div>
                          {item.href !== "#" ? (
                            <Link
                              href={item.href}
                              className={styles.rowArrow}
                              aria-label={`${item.title}の詳細を見る`}
                            >
                              →
                            </Link>
                          ) : (
                            <span className={styles.rowArrow} aria-hidden="true">
                              →
                            </span>
                          )}
                        </article>
                      </Reveal>
                    ))}
                  </div>
                )}
              </div>

              <Reveal direction="right" className={styles.sidebarReveal}>
                <aside className={styles.newsSidebar} aria-label="ニュース絞り込み">
                  <div className={styles.filterPanel}>
                    <h3>カテゴリ</h3>
                    <span className={styles.filterItem}>
                      <b>すべて</b>
                      <em>{totalNewsCount}</em>
                    </span>
                    {categories.map((category) => (
                      <span key={category.label} className={styles.filterItem}>
                        <b>{category.label}</b>
                        <em>{category.count}</em>
                      </span>
                    ))}
                  </div>

                  {groupedNews.length > 0 && (
                    <div className={styles.archivePanel}>
                      <h3>ARCHIVE</h3>
                      {groupedNews.map(([year, items]) => (
                        <span key={year} className={styles.archiveItem}>
                          <b>{year}</b>
                          <em>{items.length}</em>
                        </span>
                      ))}
                    </div>
                  )}
                </aside>
              </Reveal>
            </div>
          ) : (
            <Reveal direction="up">
              <p className={styles.empty}>現在掲載中のニュースはありません。</p>
            </Reveal>
          )}
        </div>
      </section>

      <section className={styles.cta} aria-labelledby="news-cta-title">
        <div className={`container ${styles.ctaInner}`}>
          <Reveal direction="left" className={styles.ctaCopy}>
            <h2 id="news-cta-title">
              事業や取り組みに関する
              <br />
              ご相談はこちら。
            </h2>
            <p>
              再生可能エネルギー、蓄電池、水素、AIデータセンターなど、
              目的に合わせてご相談を承ります。
            </p>
          </Reveal>
          <Reveal direction="right" className={styles.ctaActions}>
            <Button href="/contact" variant="primary" className={styles.ctaPrimary}>
              お問い合わせ
            </Button>
            <Button href="/business" variant="white">
              事業紹介を見る
            </Button>
          </Reveal>
        </div>
      </section>
    </>
  );
}
