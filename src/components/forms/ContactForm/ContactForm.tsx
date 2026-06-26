"use client";

import { useState } from "react";
import type { ChangeEvent, FormEvent } from "react";
import styles from "./ContactForm.module.css";

// 問い合わせ送信先。WordPress 移行時はフォームプラグイン側の宛先設定に置き換えます。
const CONTACT_MAIL_TO = "info@genshinn.com";

const INQUIRY_TYPES = [
  "事業・サービスについて",
  "協業・パートナーシップ",
  "取材・メディア",
  "採用について",
  "その他",
];

interface FormValues {
  type: string;
  company: string;
  name: string;
  email: string;
  tel: string;
  message: string;
  agree: boolean;
  /** ハニーポット（スパム対策・通常は空のまま） */
  fax: string;
}

type FieldErrors = Partial<Record<keyof FormValues, string>>;

const EMPTY_VALUES: FormValues = {
  type: "",
  company: "",
  name: "",
  email: "",
  tel: "",
  message: "",
  agree: false,
  fax: "",
};

const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

function validate(values: FormValues): FieldErrors {
  const errors: FieldErrors = {};

  if (!values.type) errors.type = "お問い合わせ種別を選択してください。";
  if (!values.name.trim()) errors.name = "お名前を入力してください。";
  if (!values.email.trim()) {
    errors.email = "メールアドレスを入力してください。";
  } else if (!EMAIL_PATTERN.test(values.email.trim())) {
    errors.email = "メールアドレスの形式が正しくありません。";
  }
  if (!values.message.trim()) errors.message = "お問い合わせ内容を入力してください。";
  if (!values.agree) errors.agree = "個人情報の取り扱いへの同意が必要です。";

  return errors;
}

/**
 * お問い合わせ内容を送信する。
 *
 * 現状は静的サイト（バックエンドなし）のため、入力内容を整形したうえで
 * 窓口宛のメールを起動する暫定実装です。WordPress テーマへ移行する際は、
 * この関数の中身をフォームプラグインの送信処理（POST など）へ差し替えてください。
 * 入力欄の `name` 属性はそのまま移植できるよう付与しています。
 */
function submitInquiry(values: FormValues): void {
  const lines = [
    `お問い合わせ種別: ${values.type}`,
    `会社名・団体名: ${values.company || "（未入力）"}`,
    `お名前: ${values.name}`,
    `メールアドレス: ${values.email}`,
    `電話番号: ${values.tel || "（未入力）"}`,
    "",
    "お問い合わせ内容:",
    values.message,
  ];

  const subject = `お問い合わせ（${values.type}）`;
  const body = lines.join("\n");
  const href = `mailto:${CONTACT_MAIL_TO}?subject=${encodeURIComponent(
    subject,
  )}&body=${encodeURIComponent(body)}`;

  window.location.href = href;
}

export function ContactForm() {
  const [values, setValues] = useState<FormValues>(EMPTY_VALUES);
  const [errors, setErrors] = useState<FieldErrors>({});
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (
    event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>,
  ) => {
    const { name, value, type } = event.target;
    const nextValue =
      type === "checkbox" ? (event.target as HTMLInputElement).checked : value;
    setValues((prev) => ({ ...prev, [name]: nextValue }));
    setErrors((prev) => ({ ...prev, [name]: undefined }));
  };

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    // ハニーポットに入力があれば送信を無視（ボット対策）
    if (values.fax) return;

    const nextErrors = validate(values);
    if (Object.keys(nextErrors).length > 0) {
      setErrors(nextErrors);
      setSubmitted(false);
      return;
    }

    submitInquiry(values);
    setSubmitted(true);
  };

  return (
    <form className={styles.form} onSubmit={handleSubmit} noValidate>
      <div className={styles.grid}>
        <div className={`${styles.field} ${styles.fieldFull}`}>
          <label htmlFor="contact-type">
            お問い合わせ種別<span className={styles.required}>必須</span>
          </label>
          <select
            id="contact-type"
            name="type"
            value={values.type}
            onChange={handleChange}
            aria-invalid={Boolean(errors.type)}
            aria-describedby={errors.type ? "contact-type-error" : undefined}
          >
            <option value="" disabled>
              選択してください
            </option>
            {INQUIRY_TYPES.map((type) => (
              <option key={type} value={type}>
                {type}
              </option>
            ))}
          </select>
          {errors.type && (
            <p id="contact-type-error" className={styles.error}>
              {errors.type}
            </p>
          )}
        </div>

        <div className={styles.field}>
          <label htmlFor="contact-company">会社名・団体名</label>
          <input
            id="contact-company"
            name="company"
            type="text"
            autoComplete="organization"
            placeholder="諾亜建設株式会社"
            value={values.company}
            onChange={handleChange}
          />
        </div>

        <div className={styles.field}>
          <label htmlFor="contact-name">
            お名前<span className={styles.required}>必須</span>
          </label>
          <input
            id="contact-name"
            name="name"
            type="text"
            autoComplete="name"
            placeholder="諾亜 太郎"
            value={values.name}
            onChange={handleChange}
            aria-invalid={Boolean(errors.name)}
            aria-describedby={errors.name ? "contact-name-error" : undefined}
          />
          {errors.name && (
            <p id="contact-name-error" className={styles.error}>
              {errors.name}
            </p>
          )}
        </div>

        <div className={styles.field}>
          <label htmlFor="contact-email">
            メールアドレス<span className={styles.required}>必須</span>
          </label>
          <input
            id="contact-email"
            name="email"
            type="email"
            autoComplete="email"
            placeholder="example@email.com"
            value={values.email}
            onChange={handleChange}
            aria-invalid={Boolean(errors.email)}
            aria-describedby={errors.email ? "contact-email-error" : undefined}
          />
          {errors.email && (
            <p id="contact-email-error" className={styles.error}>
              {errors.email}
            </p>
          )}
        </div>

        <div className={styles.field}>
          <label htmlFor="contact-tel">電話番号</label>
          <input
            id="contact-tel"
            name="tel"
            type="tel"
            autoComplete="tel"
            placeholder="090-1234-5678"
            value={values.tel}
            onChange={handleChange}
          />
        </div>

        <div className={`${styles.field} ${styles.fieldFull}`}>
          <label htmlFor="contact-message">
            お問い合わせ内容<span className={styles.required}>必須</span>
          </label>
          <textarea
            id="contact-message"
            name="message"
            rows={7}
            placeholder="お問い合わせ内容をご記入ください。"
            value={values.message}
            onChange={handleChange}
            aria-invalid={Boolean(errors.message)}
            aria-describedby={errors.message ? "contact-message-error" : undefined}
          />
          {errors.message && (
            <p id="contact-message-error" className={styles.error}>
              {errors.message}
            </p>
          )}
        </div>
      </div>

      {/* ハニーポット（画面外・スクリーンリーダー非表示） */}
      <div className={styles.honeypot} aria-hidden="true">
        <label htmlFor="contact-fax">FAX（入力しないでください）</label>
        <input
          id="contact-fax"
          name="fax"
          type="text"
          tabIndex={-1}
          autoComplete="off"
          value={values.fax}
          onChange={handleChange}
        />
      </div>

      <div className={styles.consent}>
        <label className={styles.checkbox}>
          <input
            name="agree"
            type="checkbox"
            checked={values.agree}
            onChange={handleChange}
            aria-invalid={Boolean(errors.agree)}
            aria-describedby={errors.agree ? "contact-agree-error" : undefined}
          />
          <span>
            個人情報の取り扱いに同意のうえ送信します。
            <span className={styles.required}>必須</span>
          </span>
        </label>
        {errors.agree && (
          <p id="contact-agree-error" className={styles.error}>
            {errors.agree}
          </p>
        )}
      </div>

      {submitted && (
        <p className={styles.success} role="status">
          メールソフトを起動しました。内容をご確認のうえ送信してください。起動しない場合は{" "}
          <a href={`mailto:${CONTACT_MAIL_TO}`}>{CONTACT_MAIL_TO}</a> まで直接ご連絡ください。
        </p>
      )}

      <div className={styles.actions}>
        <button type="submit" className={styles.submit}>
          この内容で送信する
          <span aria-hidden="true">→</span>
        </button>
      </div>
    </form>
  );
}
