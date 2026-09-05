import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Reveal } from "@/components/animation/Reveal/Reveal";
import { Button } from "@/components/ui/Button/Button";
import { asset } from "@/lib/asset";
import { isPageEnabled } from "@/lib/page-config";
import { ProductCard } from "./ProductCard";
import { ProductCategoryName } from "./ProductText";
import {
  getProductsByCategory,
  productCategories,
  products,
} from "./productData";
import styles from "./products.module.css";

export const metadata: Metadata = {
  title: "製品情報 | 諾亜建設株式会社",
  description:
    "BMS、EMS、PCSを中心とする諾亜建設の蓄電池システム関連製品をご紹介します。",
};

export default function ProductsPage() {
  if (!isPageEnabled("/products")) notFound();

  return (
    <>
      <section className={styles.hero} aria-labelledby="products-title">
        <Image
          src={asset("/assets/products/hero-showroom-v1.png")}
          alt="NOAHのBMS・EMS・PCSを並べた製品イメージ"
          width={1536}
          height={1024}
          priority
          sizes="100vw"
          className={styles.heroImage}
        />
        <div className={`container ${styles.heroInner}`}>
          <Reveal direction="left" className={styles.heroCopy}>
            <p className={styles.heroEyebrow}>PRODUCTS</p>
            <h1 id="products-title" className={styles.heroTitle}>製品情報</h1>
            <p className={styles.heroStatement}>
              <span className={styles.textUnit}>蓄電池システムの</span><wbr />
              <span className={styles.textUnit}>制御を、</span><br />
              <span className={styles.textUnit}>製品から支える。</span>
            </p>
            <p className={styles.heroLead}>
              電池状態を監視するBMS、設備全体をつなぐEMS、電力変換を担うPCS。
              NOAHの製品ラインアップを、役割と型式からご確認いただけます。
            </p>
          </Reveal>

        </div>
      </section>

      <nav className={styles.categoryNav} aria-label="製品カテゴリ">
        <div className={`container ${styles.categoryNavInner}`}>
          {productCategories.map((category) => (
            <Link key={category.slug} href={`/products/${category.slug}`}>
              <span>{category.name}</span>
              <small><ProductCategoryName name={category.japaneseName} /></small>
              <b aria-hidden="true">→</b>
            </Link>
          ))}
        </div>
      </nav>

      <section className={styles.catalogIntro} aria-labelledby="catalog-title">
        <div className={`container ${styles.catalogIntroInner}`}>
          <Reveal direction="left">
            <p className={styles.sectionEyebrow}>PRODUCT LINEUP</p>
            <h2 id="catalog-title">
              3つの制御領域、
              <br />
              全{products.length}型式。
            </h2>
          </Reveal>
          <Reveal direction="up">
            <p>
              小さなセル単位の監視から、大規模蓄電所の電力変換・系統連系制御まで。
              用途と設備規模に応じて選べる製品をラインアップしています。
            </p>
          </Reveal>
        </div>
      </section>

      {productCategories.map((category, categoryIndex) => {
        const categoryProducts = getProductsByCategory(category.slug);
        return (
          <section
            key={category.slug}
            className={`${styles.catalogSection} ${styles[`catalog${category.name}`]}`}
            aria-labelledby={`${category.slug}-title`}
          >
            <div className="container">
              <Reveal direction="up">
                <div className={styles.catalogHeading}>
                  <div className={styles.catalogCode} aria-hidden="true">
                    {category.name}
                  </div>
                  <div className={styles.catalogHeadingCopy}>
                    <p>{category.fullName}</p>
                    <h2 id={`${category.slug}-title`}><ProductCategoryName name={category.japaneseName} /></h2>
                    <span>{category.description}</span>
                  </div>
                  <Link href={`/products/${category.slug}`} className={styles.catalogAllLink}>
                    {category.name}をすべて見る
                    <b aria-hidden="true">→</b>
                  </Link>
                </div>
              </Reveal>

              <div className={styles.productGrid}>
                {categoryProducts.map((product, index) => (
                  <Reveal
                    key={product.slug}
                    direction="up"
                    delay={(categoryIndex + index) * 45}
                    className={styles.productCardReveal}
                  >
                    <ProductCard product={product} />
                  </Reveal>
                ))}
              </div>
            </div>
          </section>
        );
      })}

      <section className={styles.contactBand} aria-labelledby="products-contact-title">
        <div className={`container ${styles.contactBandInner}`}>
          <Reveal direction="left">
            <p>PRODUCT INQUIRY</p>
            <h2 id="products-contact-title">製品選定・仕様についてご相談ください。</h2>
          </Reveal>
          <Reveal direction="right">
            <Button href="/contact" variant="white">
              製品について問い合わせる
            </Button>
          </Reveal>
        </div>
      </section>
    </>
  );
}
