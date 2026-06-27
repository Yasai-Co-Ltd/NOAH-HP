import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { Reveal } from "@/components/animation/Reveal/Reveal";
import { isPageEnabled } from "@/lib/page-config";
import styles from "./page.module.css";

export const metadata: Metadata = {
  title: "プライバシーポリシー | 諾亜建設株式会社",
  description:
    "諾亜建設株式会社の個人情報保護方針（プライバシーポリシー）です。個人情報の取得・利用目的、第三者提供、安全管理、開示請求への対応などを定めています。",
};

type PolicySection = {
  heading: string;
  paragraphs?: string[];
  list?: string[];
};

const policySections: PolicySection[] = [
  {
    heading: "基本方針",
    paragraphs: [
      "諾亜建設株式会社（以下「当社」といいます。）は、エネルギー事業をはじめとする事業活動において、お客様、取引先、採用応募者など関係者の皆様の個人情報を取り扱います。当社は、個人情報の保護に関する法律その他の関係法令およびガイドラインを遵守し、個人情報を適切に取得・利用・管理することを社会的責務と認識し、本プライバシーポリシーを定めます。",
    ],
  },
  {
    heading: "個人情報の定義",
    paragraphs: [
      "本ポリシーにおいて「個人情報」とは、生存する個人に関する情報であって、氏名、生年月日、住所、電話番号、メールアドレスその他の記述等により特定の個人を識別することができるもの、および他の情報と容易に照合することができ、それにより特定の個人を識別することができることとなるものをいいます。",
    ],
  },
  {
    heading: "個人情報の取得",
    paragraphs: [
      "当社は、適法かつ公正な手段により個人情報を取得します。お問い合わせフォーム、採用応募フォーム、お電話・メール、お取引等を通じて、必要な範囲で個人情報をご提供いただく場合があります。",
    ],
  },
  {
    heading: "利用目的",
    paragraphs: ["当社は、取得した個人情報を以下の目的の範囲内で利用します。"],
    list: [
      "お問い合わせ・ご相談への対応およびご連絡のため",
      "採用選考および採用に関するご連絡・手続きのため",
      "ご契約の履行、製品・サービスの提供、アフターサポートのため",
      "取引先との連絡・調整および業務上必要な手続きのため",
      "当社事業に関する情報やご案内の提供のため",
      "上記利用目的に付随する業務の遂行のため",
    ],
  },
  {
    heading: "第三者提供",
    paragraphs: [
      "当社は、次のいずれかに該当する場合を除き、あらかじめご本人の同意を得ることなく、個人情報を第三者に提供しません。",
    ],
    list: [
      "法令に基づく場合",
      "人の生命、身体または財産の保護のために必要があり、ご本人の同意を得ることが困難な場合",
      "公衆衛生の向上または児童の健全な育成の推進のために特に必要があり、ご本人の同意を得ることが困難な場合",
      "国の機関等が法令の定める事務を遂行することに協力する必要があり、同意を得ることにより当該事務の遂行に支障を及ぼすおそれがある場合",
    ],
  },
  {
    heading: "業務委託",
    paragraphs: [
      "当社は、利用目的の達成に必要な範囲内で個人情報の取り扱いを外部に委託する場合があります。この場合、委託先について適切な調査を行い、必要かつ適切な監督を行います。",
    ],
  },
  {
    heading: "安全管理措置",
    paragraphs: [
      "当社は、個人情報の漏えい、滅失またはき損の防止その他の安全管理のために、必要かつ適切な措置を講じるとともに、個人情報を取り扱う従業者に対して適切な監督を行います。",
    ],
  },
  {
    heading: "開示・訂正・利用停止等",
    paragraphs: [
      "ご本人から、個人情報の開示、訂正、追加、削除、利用停止または第三者提供の停止のご請求があった場合には、ご本人であることを確認のうえ、法令に従い、合理的な範囲で速やかに対応します。ご請求は、末尾のお問い合わせ窓口までご連絡ください。",
    ],
  },
  {
    heading: "Cookie・アクセス解析",
    paragraphs: [
      "当社ウェブサイトでは、利用状況の把握やサービス改善のためにCookieやアクセス解析ツールを利用する場合があります。これらにより取得される情報には、単独で特定の個人を識別できる情報は含まれません。ブラウザの設定によりCookieを無効化することができますが、その場合、一部の機能がご利用いただけないことがあります。",
    ],
  },
  {
    heading: "本ポリシーの改定",
    paragraphs: [
      "当社は、法令の改正や事業内容の変更等に応じて、本プライバシーポリシーを改定することがあります。改定後の内容は、当社ウェブサイトに掲載した時点から効力を生じるものとします。",
    ],
  },
];

export default function PrivacyPage() {
  if (!isPageEnabled("/privacy")) notFound();

  return (
    <>
      <section className={styles.hero} aria-labelledby="privacy-title">
        <div className={`container ${styles.heroInner}`}>
          <Reveal direction="up">
            <p className={styles.eyebrow}>PRIVACY POLICY</p>
            <h1 id="privacy-title" className={styles.heroTitle}>
              プライバシーポリシー
            </h1>
            <p className={styles.heroLead}>
              諾亜建設株式会社における個人情報の取り扱い方針を定めたものです。
            </p>
          </Reveal>
        </div>
      </section>

      <section className={styles.body} aria-label="プライバシーポリシー本文">
        <div className={`container ${styles.bodyInner}`}>
          <Reveal direction="up">
            <ol className={styles.policyList}>
              {policySections.map((section, index) => (
                <li key={section.heading} className={styles.policyItem}>
                  <h2 className={styles.policyHeading}>
                    <span className={styles.policyNumber}>
                      {String(index + 1).padStart(2, "0")}
                    </span>
                    {section.heading}
                  </h2>
                  {section.paragraphs?.map((paragraph) => (
                    <p key={paragraph} className={styles.policyText}>
                      {paragraph}
                    </p>
                  ))}
                  {section.list && (
                    <ul className={styles.policyBullets}>
                      {section.list.map((item) => (
                        <li key={item}>{item}</li>
                      ))}
                    </ul>
                  )}
                </li>
              ))}
            </ol>

            <div className={styles.contact}>
              <h2 className={styles.contactHeading}>お問い合わせ窓口</h2>
              <p className={styles.policyText}>
                本ポリシーおよび個人情報の取り扱いに関するお問い合わせ、開示等のご請求は、以下までご連絡ください。
              </p>
              <dl className={styles.contactInfo}>
                <div>
                  <dt>事業者名</dt>
                  <dd>諾亜建設株式会社</dd>
                </div>
                <div>
                  <dt>所在地</dt>
                  <dd>〒160-0022 東京都中野区本町2丁目46-1 サンブライトツインビル北棟15F 1501-3</dd>
                </div>
                <div>
                  <dt>電話番号</dt>
                  <dd>TEL：03-5341-4696　FAX：03-5341-4697</dd>
                </div>
              </dl>
              <Link href="/contact" className={styles.contactLink}>
                お問い合わせフォームへ
                <span aria-hidden="true">→</span>
              </Link>
            </div>

            <p className={styles.revision}>制定日：2026年4月1日</p>
          </Reveal>
        </div>
      </section>
    </>
  );
}
