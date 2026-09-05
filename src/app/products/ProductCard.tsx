import Image from "next/image";
import Link from "next/link";
import { asset } from "@/lib/asset";
import type { Product } from "./productData";
import { ProductModelName } from "./ProductText";
import styles from "./products.module.css";

type ProductCardProps = {
  product: Product;
};

export function ProductCard({ product }: ProductCardProps) {
  return (
    <article className={styles.productCard}>
      <Link
        href={`/products/${product.category}/${product.slug}`}
        className={styles.productCardLink}
      >
        <div className={styles.productCardVisual}>
          <Image
            src={asset(product.image)}
            alt={`${product.model} ${product.displayName}`}
            fill
            sizes="(max-width: 720px) calc(100vw - 40px), (max-width: 1100px) 44vw, 31vw"
            className={styles.productCardImage}
          />
          <span className={styles.productCardCategory}>{product.category.toUpperCase()}</span>
        </div>
        <div className={styles.productCardBody}>
          <span className={styles.productCardName}>{product.displayName}</span>
          <h3><ProductModelName model={product.model} /></h3>
          <p>{product.tagline}</p>
          <span className={styles.productCardCta}>
            製品詳細を見る
            <b aria-hidden="true">→</b>
          </span>
        </div>
      </Link>
    </article>
  );
}
