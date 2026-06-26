"use client";

import { useState } from "react";
import type { ChangeEvent, FormEvent } from "react";
import styles from "./RecruitForm.module.css";

const RECRUIT_MAIL_TO = "saiyou@genshinn.com";

interface RecruitFormProps {
  /** 応募職種の選択肢（採用ページの募集職種と揃える） */
  jobTitles: string[];
}

interface FormValues {
  job: string;
  name: string;
  kana: string;
  email: string;
  tel: string;
  message: string;
  agree: boolean;
  /** ハニーポット（スパム対策・通常は空のまま） */
  company: string;
}

type FieldErrors = Partial<Record<keyof FormValues, string>>;

const EMPTY_VALUES: FormValues = {
  job: "",
  name: "",
  kana: "",
  email: "",
  tel: "",
  message: "",
  agree: false,
  company: "",
};

const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

function validate(values: FormValues): FieldErrors {
  const errors: FieldErrors = {};

  if (!values.job) errors.job = "応募職種を選択してください。";
  if (!values.name.trim()) errors.name = "お名前を入力してください。";
  if (!values.email.trim()) {
    errors.email = "メールアドレスを入力してください。";
  } else if (!EMAIL_PATTERN.test(values.email.trim())) {
    errors.email = "メールアドレスの形式が正しくありません。";
  }
  if (!values.tel.trim()) errors.tel = "電話番号を入力してください。";
  if (!values.agree) errors.agree = "個人情報の取り扱いへの同意が必要です。";

  return errors;
}

/**
 * 応募内容を送信する。
 *
 * 現状は静的サイト（バックエンドなし）のため、入力内容を整形したうえで
 * 採用窓口宛のメールを起動する暫定実装です。WordPress テーマへ移行する際は、
 * この関数の中身をフォームプラグインの送信処理（POST など）へ差し替えてください。
 * 入力欄の `name` 属性はそのまま移植できるよう付与しています。
 */
function submitApplication(values: FormValues): void {
  const lines = [
    `応募職種: ${values.job}`,
    `お名前: ${values.name}`,
    `フリガナ: ${values.kana || "（未入力）"}`,
    `メールアドレス: ${values.email}`,
    `電話番号: ${values.tel}`,
    "",
    "志望動機・自己PR:",
    values.message || "（未入力）",
  ];

  const subject = `採用応募（${values.job}）`;
  const body = lines.join("\n");
  const href = `mailto:${RECRUIT_MAIL_TO}?subject=${encodeURIComponent(
    subject,
  )}&body=${encodeURIComponent(body)}`;

  window.location.href = href;
}

export function RecruitForm({ jobTitles }: RecruitFormProps) {
  const [values, setValues] = useState<FormValues>(EMPTY_VALUES);
  const [errors, setErrors] = useState<FieldErrors>({});
  const [submitted, setSubmitted] = useState(false);

  const jobOptions = [...jobTitles, "その他・職種未定"];

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
    if (values.company) return;

    const nextErrors = validate(values);
    if (Object.keys(nextErrors).length > 0) {
      setErrors(nextErrors);
      setSubmitted(false);
      return;
    }

    submitApplication(values);
    setSubmitted(true);
  };

  return (
    <form className={styles.form} onSubmit={handleSubmit} noValidate>
      <div className={styles.grid}>
        <div className={`${styles.field} ${styles.fieldFull}`}>
          <label htmlFor="recruit-job">
            応募職種<span className={styles.required}>必須</span>
          </label>
          <select
            id="recruit-job"
            name="job"
            value={values.job}
            onChange={handleChange}
            aria-invalid={Boolean(errors.job)}
            aria-describedby={errors.job ? "recruit-job-error" : undefined}
          >
            <option value="" disabled>
              選択してください
            </option>
            {jobOptions.map((title) => (
              <option key={title} value={title}>
                {title}
              </option>
            ))}
          </select>
          {errors.job && (
            <p id="recruit-job-error" className={styles.error}>
              {errors.job}
            </p>
          )}
        </div>

        <div className={styles.field}>
          <label htmlFor="recruit-name">
            お名前<span className={styles.required}>必須</span>
          </label>
          <input
            id="recruit-name"
            name="name"
            type="text"
            autoComplete="name"
            placeholder="諾亜 太郎"
            value={values.name}
            onChange={handleChange}
            aria-invalid={Boolean(errors.name)}
            aria-describedby={errors.name ? "recruit-name-error" : undefined}
          />
          {errors.name && (
            <p id="recruit-name-error" className={styles.error}>
              {errors.name}
            </p>
          )}
        </div>

        <div className={styles.field}>
          <label htmlFor="recruit-kana">フリガナ</label>
          <input
            id="recruit-kana"
            name="kana"
            type="text"
            placeholder="ノア タロウ"
            value={values.kana}
            onChange={handleChange}
          />
        </div>

        <div className={styles.field}>
          <label htmlFor="recruit-email">
            メールアドレス<span className={styles.required}>必須</span>
          </label>
          <input
            id="recruit-email"
            name="email"
            type="email"
            autoComplete="email"
            placeholder="example@email.com"
            value={values.email}
            onChange={handleChange}
            aria-invalid={Boolean(errors.email)}
            aria-describedby={errors.email ? "recruit-email-error" : undefined}
          />
          {errors.email && (
            <p id="recruit-email-error" className={styles.error}>
              {errors.email}
            </p>
          )}
        </div>

        <div className={styles.field}>
          <label htmlFor="recruit-tel">
            電話番号<span className={styles.required}>必須</span>
          </label>
          <input
            id="recruit-tel"
            name="tel"
            type="tel"
            autoComplete="tel"
            placeholder="090-1234-5678"
            value={values.tel}
            onChange={handleChange}
            aria-invalid={Boolean(errors.tel)}
            aria-describedby={errors.tel ? "recruit-tel-error" : undefined}
          />
          {errors.tel && (
            <p id="recruit-tel-error" className={styles.error}>
              {errors.tel}
            </p>
          )}
        </div>

        <div className={`${styles.field} ${styles.fieldFull}`}>
          <label htmlFor="recruit-message">志望動機・自己PR</label>
          <textarea
            id="recruit-message"
            name="message"
            rows={6}
            placeholder="これまでのご経験や、志望のきっかけなどをご記入ください。"
            value={values.message}
            onChange={handleChange}
          />
        </div>
      </div>

      {/* ハニーポット（画面外・スクリーンリーダー非表示） */}
      <div className={styles.honeypot} aria-hidden="true">
        <label htmlFor="recruit-company">会社名（入力しないでください）</label>
        <input
          id="recruit-company"
          name="company"
          type="text"
          tabIndex={-1}
          autoComplete="off"
          value={values.company}
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
            aria-describedby={errors.agree ? "recruit-agree-error" : undefined}
          />
          <span>
            個人情報の取り扱いに同意のうえ応募します。
            <span className={styles.required}>必須</span>
          </span>
        </label>
        {errors.agree && (
          <p id="recruit-agree-error" className={styles.error}>
            {errors.agree}
          </p>
        )}
      </div>

      {submitted && (
        <p className={styles.success} role="status">
          メールソフトを起動しました。内容をご確認のうえ送信してください。起動しない場合は{" "}
          <a href={`mailto:${RECRUIT_MAIL_TO}`}>{RECRUIT_MAIL_TO}</a> まで直接ご連絡ください。
        </p>
      )}

      <div className={styles.actions}>
        <button type="submit" className={styles.submit}>
          応募内容を送信する
          <span aria-hidden="true">→</span>
        </button>
      </div>
    </form>
  );
}
