"use client";

import Image from "next/image";
import { useState } from "react";
import { asset } from "@/lib/asset";
import { ProductModelName } from "./ProductText";
import styles from "./products.module.css";

type PreviewProduct = {
  model: string;
  image: string;
  displayName: string;
};

export function ProductCategoryVisual({ products }: { products: PreviewProduct[] }) {
  const [selectedIndex, setSelectedIndex] = useState(0);
  const selected = products[selectedIndex];

  return (
    <div className={styles.categoryShowcase}>
      <div className={styles.categoryHeroVisual}>
        <Image
          key={selected.image}
          src={asset(selected.image)}
          alt={`${selected.displayName} ${selected.model}`}
          fill
          priority
          sizes="(max-width: 920px) calc(100vw - 40px), 52vw"
          className={styles.categoryHeroImage}
        />
      </div>
      <div className={styles.categoryShowcaseFooter}>
        <div className={styles.categorySelectedProduct} aria-live="polite" aria-atomic="true">
          <span>{selected.displayName}</span>
          <strong><ProductModelName model={selected.model} /></strong>
        </div>
        <div className={styles.categoryThumbnails} role="group" aria-label="製品画像の選択">
          {products.map((product, index) => (
            <button
              key={product.model}
              type="button"
              onClick={() => setSelectedIndex(index)}
              aria-pressed={selectedIndex === index}
              aria-label={`${product.model}の画像を表示`}
              title={product.model}
            >
              <Image src={asset(product.image)} alt="" width={64} height={48} />
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}
