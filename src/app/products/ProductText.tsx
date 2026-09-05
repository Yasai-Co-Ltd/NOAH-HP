import { Fragment } from "react";
import styles from "./products.module.css";

export function ProductModelName({ model }: { model: string }) {
  const parts = model.split("-");
  return <>{parts.map((part, index) => (
    <Fragment key={index}>
      {index > 0 && <wbr />}
      <span className={styles.textUnit}>{part}{index < parts.length - 1 ? "-" : ""}</span>
    </Fragment>
  ))}</>;
}

export function ProductCategoryName({ name }: { name: string }) {
  const parts = name.split(/(マネジメント|コンディショニング)/);
  return <>{parts.filter(Boolean).map((part, index) => (
    <Fragment key={index}>
      {index > 0 && <wbr />}
      <span className={styles.textUnit}>{part}</span>
    </Fragment>
  ))}</>;
}
