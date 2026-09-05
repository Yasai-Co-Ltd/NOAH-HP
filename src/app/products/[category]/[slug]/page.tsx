import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Reveal } from "@/components/animation/Reveal/Reveal";
import { Button } from "@/components/ui/Button/Button";
import { asset } from "@/lib/asset";
import { isPageEnabled } from "@/lib/page-config";
import { ProductCard } from "../../ProductCard";
import { ProductModelName } from "../../ProductText";
import {
  getProduct,
  getProductCategory,
  getRelatedProducts,
  products,
} from "../../productData";
import styles from "../../products.module.css";

type ProductDetailPageProps = {
  params: Promise<{ category: string; slug: string }>;
};

export function generateStaticParams() {
  return products.map((product) => ({
    category: product.category,
    slug: product.slug,
  }));
}

export async function generateMetadata({ params }: ProductDetailPageProps): Promise<Metadata> {
  const { category, slug } = await params;
  const product = getProduct(category, slug);

  if (!product) return { title: "製品情報 | 諾亜建設株式会社" };

  return {
    title: `${product.model} | 製品情報 | 諾亜建設株式会社`,
    description: product.tagline,
  };
}

export default async function ProductDetailPage({ params }: ProductDetailPageProps) {
  if (!isPageEnabled("/products")) notFound();

  const { category: categorySlug, slug } = await params;
  const product = getProduct(categorySlug, slug);
  if (!product) notFound();

  const category = getProductCategory(product.category);
  if (!category) notFound();

  const relatedProducts = getRelatedProducts(product);

  return (
    <>
      <section className={styles.detailHero} aria-labelledby="product-title">
        <div className={`container ${styles.detailHeroInner}`}>
          <Reveal direction="left" className={styles.detailHeroCopy}>
            <Link href={`/products/${product.category}`} className={styles.backToProducts}>
              <span aria-hidden="true">←</span>
              {category.name} 製品一覧
            </Link>
            <p className={styles.detailCategory}>{category.fullName}</p>
            <span className={styles.detailProductName}>{product.displayName}</span>
            <h1 id="product-title"><ProductModelName model={product.model} /></h1>
            <p className={styles.detailTagline}>{product.tagline}</p>
          </Reveal>

          <Reveal direction="right" className={styles.detailHeroVisualReveal}>
            <figure className={styles.detailHeroVisual}>
              <Image
                src={asset(product.image)}
                alt={`${product.model} ${product.displayName}`}
                fill
                priority
                sizes="(max-width: 920px) calc(100vw - 40px), 48vw"
                className={styles.detailHeroImage}
              />
            </figure>
          </Reveal>
        </div>

        <div className={`container ${styles.highlightRail}`}>
          {product.highlights.map((highlight) => (
            <div key={highlight.label}>
              <span>{highlight.label}</span>
              <strong>{highlight.value}</strong>
            </div>
          ))}
        </div>
      </section>

      <section className={styles.productOverview} aria-labelledby="overview-title">
        <div className={`container ${styles.productOverviewInner}`}>
          <Reveal direction="left" className={styles.productOverviewHeading}>
            <p className={styles.sectionEyebrow}>OVERVIEW</p>
            <h2 id="overview-title">製品概要</h2>
          </Reveal>
          <Reveal direction="up" className={styles.productOverviewBody}>
            {product.overview.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
          </Reveal>
        </div>
      </section>

      <section className={styles.productFeatures} aria-labelledby="features-title">
        <div className="container">
          <Reveal direction="up">
            <div className={styles.featureHeading}>
              <p className={styles.sectionEyebrow}>FEATURES</p>
              <h2 id="features-title">主な特長</h2>
            </div>
          </Reveal>
          <div className={styles.featureList}>
            {product.features.map((feature, index) => (
              <Reveal key={feature} direction="up" delay={index * 65}>
                <div className={styles.featureItem}>
                  <span aria-hidden="true" />
                  <p>{feature}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className={styles.productSpecs} aria-labelledby="specs-title">
        <div className={`container ${styles.productSpecsInner}`}>
          <Reveal direction="left" className={styles.productSpecsHeading}>
            <p>SPECIFICATIONS</p>
            <h2 id="specs-title">主要仕様</h2>
            <span>掲載仕様は製品資料に基づいています。</span>
            <Link
              href={asset(product.sheetImage)}
              target="_blank"
              rel="noreferrer"
              className={styles.sheetLink}
            >
              製品資料画像を見る
              <b aria-hidden="true">↗</b>
            </Link>
          </Reveal>

          <Reveal direction="up" className={styles.specTableReveal}>
            <dl className={styles.specTable}>
              {product.specs.map((spec) => (
                <div key={spec.label}>
                  <dt>{spec.label}</dt>
                  <dd>{spec.value}</dd>
                </div>
              ))}
            </dl>
          </Reveal>
        </div>
      </section>

      {relatedProducts.length > 0 && (
        <section className={styles.relatedProducts} aria-labelledby="related-products-title">
          <div className="container">
            <Reveal direction="up">
              <div className={styles.relatedHeading}>
                <div>
                  <p className={styles.sectionEyebrow}>RELATED MODELS</p>
                  <h2 id="related-products-title">同じカテゴリの製品</h2>
                </div>
                <Link href={`/products/${product.category}`}>
                  {category.name}製品をすべて見る
                  <span aria-hidden="true">→</span>
                </Link>
              </div>
            </Reveal>
            <div className={styles.productGrid}>
              {relatedProducts.map((related, index) => (
                <Reveal
                  key={related.slug}
                  direction="up"
                  delay={index * 70}
                  className={styles.productCardReveal}
                >
                  <ProductCard product={related} />
                </Reveal>
              ))}
            </div>
          </div>
        </section>
      )}

      <section className={styles.detailContact} aria-labelledby="detail-contact-title">
        <div className={`container ${styles.detailContactInner}`}>
          <Reveal direction="left">
            <p>{product.model}</p>
            <h2 id="detail-contact-title">製品仕様・導入についてご相談ください。</h2>
          </Reveal>
          <Reveal direction="right">
            <Button href="/contact" variant="white">
              この製品について問い合わせる
            </Button>
          </Reveal>
        </div>
      </section>
    </>
  );
}
