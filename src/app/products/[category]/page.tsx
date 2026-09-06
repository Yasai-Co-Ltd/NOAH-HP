import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Reveal } from "@/components/animation/Reveal/Reveal";
import { Button } from "@/components/ui/Button/Button";
import { isPageEnabled } from "@/lib/page-config";
import { ProductCard } from "../ProductCard";
import { ProductCategoryVisual } from "../ProductCategoryVisual";
import { ProductCategoryName } from "../ProductText";
import {
  getProductCategory,
  getProductsByCategory,
  isProductCategory,
  productCategories,
} from "../productData";
import styles from "../products.module.css";

type ProductCategoryPageProps = {
  params: Promise<{ category: string }>;
};

export function generateStaticParams() {
  return productCategories.map((category) => ({ category: category.slug }));
}

export async function generateMetadata({
  params,
}: ProductCategoryPageProps): Promise<Metadata> {
  const { category: categorySlug } = await params;
  const category = getProductCategory(categorySlug);

  if (!category) return { title: "製品情報 | 諾亜建設株式会社" };

  return {
    title: `${category.name}製品 | 製品情報 | 諾亜建設株式会社`,
    description: category.description,
  };
}

export default async function ProductCategoryPage({ params }: ProductCategoryPageProps) {
  if (!isPageEnabled("/products")) notFound();

  const { category: categorySlug } = await params;
  if (!isProductCategory(categorySlug)) notFound();

  const category = getProductCategory(categorySlug);
  if (!category) notFound();

  const categoryProducts = getProductsByCategory(category.slug);
  const heroProducts = [
    ...categoryProducts.filter((product) => product.image === category.image),
    ...categoryProducts.filter((product) => product.image !== category.image),
  ].slice(0, 3).map(({ model, image, displayName }) => ({ model, image, displayName }));

  return (
    <>
      <section
        className={styles.categoryHero}
        aria-labelledby="category-page-title"
      >
        <div className={`container ${styles.categoryHeroInner}`}>
          <Reveal direction="left" className={styles.categoryHeroCopy}>
            <Link href="/products" className={styles.backToProducts}>
              <span aria-hidden="true">←</span>
              製品情報
            </Link>
            <p className={styles.categoryHeroEnglish}>{category.fullName}</p>
            <h1 id="category-page-title">{category.name}</h1>
            <span className={styles.categoryHeroJapanese}><ProductCategoryName name={category.japaneseName} /></span>
            <p className={styles.categoryHeroLead}>{category.description}</p>
          </Reveal>

          <Reveal direction="right" className={styles.categoryHeroVisualReveal}>
            <ProductCategoryVisual key={category.slug} products={heroProducts} />
          </Reveal>
        </div>
      </section>

      <nav className={styles.categorySwitcher} aria-label="製品カテゴリ切り替え">
        <div className={`container ${styles.categorySwitcherInner}`}>
          {productCategories.map((item) => (
            <Link
              key={item.slug}
              href={`/products/${item.slug}`}
              className={item.slug === category.slug ? styles.categorySwitcherActive : undefined}
              aria-current={item.slug === category.slug ? "page" : undefined}
            >
              <span>{item.name}</span>
              <small>{item.role}</small>
            </Link>
          ))}
        </div>
      </nav>

      <section className={styles.categoryLineup} aria-labelledby="lineup-title">
        <div className="container">
          <Reveal direction="up">
            <div className={styles.lineupHeading}>
              <div>
                <p className={styles.sectionEyebrow}>LINEUP</p>
                <h2 id="lineup-title">{category.name} 製品ラインアップ</h2>
              </div>
              <span>{categoryProducts.length} MODELS</span>
            </div>
          </Reveal>

          <div className={styles.productGrid}>
            {categoryProducts.map((product, index) => (
              <Reveal
                key={product.slug}
                direction="up"
                delay={index * 70}
                className={styles.productCardReveal}
              >
                <ProductCard product={product} />
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className={styles.categoryContact} aria-labelledby="category-contact-title">
        <div className={`container ${styles.categoryContactInner}`}>
          <Reveal direction="left">
            <p>製品の選定からシステム構成まで</p>
            <h2 id="category-contact-title">設備要件に合わせてご提案します。</h2>
          </Reveal>
          <Reveal direction="right">
            <Button href="/contact" variant="primary">
              製品について問い合わせる
            </Button>
          </Reveal>
        </div>
      </section>
    </>
  );
}
