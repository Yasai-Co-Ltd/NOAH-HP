import styles from "./AiImageNote.module.css";

interface AiImageNoteProps {
  /** 表示ラベル。既定は「完成イメージ図」。図解・イラスト系には「イメージ図」を指定する。 */
  label?: string;
  /** バッジ位置。metricBoard等と重なる場合は top-right を指定する。 */
  position?: "bottom-right" | "top-right";
}

/**
 * AI生成画像に「完成イメージ図」の注記を重ねるバッジ。
 * position: relative な要素（Next Image fill のラッパー等）の内側に置く。
 */
export function AiImageNote({ label = "完成イメージ図", position = "bottom-right" }: AiImageNoteProps) {
  const positionClass = position === "top-right" ? styles.topRight : styles.bottomRight;
  return <span className={`${styles.note} ${positionClass}`}>{label}</span>;
}
