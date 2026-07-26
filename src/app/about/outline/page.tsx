import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { isPageEnabled } from "@/lib/page-config";
import Link from "next/link";
import { Reveal } from "@/components/animation/Reveal/Reveal";
import styles from "./page.module.css";

export const metadata: Metadata = {
  title: "会社概要 | 諾亜建設株式会社",
  description:
    "諾亜建設株式会社の会社名、設立、所在地、連絡先、代表者、資本金、事業内容、登録・許可、取引銀行などの会社概要です。",
};

const companyRows = [
  { label: "会社名", value: "諾亜建設株式会社" },
  { label: "設立", value: "2018年10月" },
  {
    label: "所在地",
    value: "〒160-0022 東京都中野区本町2丁目46-1 サンブライトツインビル北棟15F 1501-3",
  },
  { label: "連絡先", value: "TEL：03-5341-4696　FAX：03-5341-4697" },
  { label: "代表者", value: "代表取締役社長　鈴木 仲娜" },
  { label: "資本金", value: "99,000,000円" },
  {
    label: "事業内容",
    value: "エネルギー事業関連の製品・システム・サービスの開発・製造・販売",
  },
  // 一旦非表示（登録・許可）
  // {
  //   label: "登録・許可",
  //   value:
  //     "建設業許可（特定）：建築工事業、大工工事業、鋼構造物工事業、内装仕上工事業　東京都知事許可（特-30）第149709号",
  // },
  { label: "弁護士", value: "古宮 憲一郎（弁護士法人リオ．パートナーズ）" },
  { label: "監査役", value: "高木 泰（税理士）" },
  { label: "取引先銀行", value: "三井住友銀行 新宿支店、東京スター銀行" },
];

const nextLinks = [
  { href: "/about/organization", label: "グループ・組織図" },
  { href: "/about/history", label: "沿革" },
  { href: "/about/message", label: "トップメッセージ" },
];

export default function OutlinePage() {
  if (!isPageEnabled("/about/outline")) notFound();

  return (
    <>
      <section className={styles.hero} aria-labelledby="outline-title">
        <div className={`container ${styles.heroInner}`}>
          <Reveal direction="up">
            <p className={styles.eyebrow}>COMPANY PROFILE</p>
            <h1 id="outline-title" className={styles.heroTitle}>
              会社概要
            </h1>
          </Reveal>
        </div>
      </section>

      <section className={styles.profile} aria-label="会社の基本情報">
        <div className={`container ${styles.profileInner}`}>
          <Reveal direction="up">
            <div className={styles.tableWrap}>
              <dl className={styles.companyTable}>
                {companyRows.map((row) => (
                  <div key={row.label}>
                    <dt>{row.label}</dt>
                    <dd>{row.value}</dd>
                  </div>
                ))}
              </dl>
            </div>
          </Reveal>
        </div>
      </section>

      <section className={styles.next} aria-labelledby="next-title">
        <div className={`container ${styles.nextInner}`}>
          <Reveal direction="up">
            <p className={styles.nextEyebrow}>NEXT CONTENTS</p>
            <h2 id="next-title" className={styles.nextTitle}>
              組織体制や沿革もあわせてご覧ください。
            </h2>
            <div className={styles.nextLinks}>
              {nextLinks.map((item) => (
                <Link key={item.href} href={item.href}>
                  {item.label}
                </Link>
              ))}
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
