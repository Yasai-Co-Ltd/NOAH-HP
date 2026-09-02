import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { Reveal } from "@/components/animation/Reveal/Reveal";
import { SectionLabel } from "@/components/ui/SectionLabel/SectionLabel";
import { ContactForm } from "@/components/forms/ContactForm/ContactForm";
import { isPageEnabled } from "@/lib/page-config";
import styles from "./page.module.css";

export const metadata: Metadata = {
  title: "お問い合わせ | 諾亜建設株式会社",
  description:
    "諾亜建設株式会社へのお問い合わせページです。事業・サービス、協業、取材、採用などのご相談をフォームよりお寄せください。",
};

const contactChannels = [
  {
    label: "電話でのお問い合わせ",
    value: "03-5341-4696",
    href: "tel:0353414696",
    note: "受付時間／平日 9:00〜18:00",
  },
  {
    label: "FAX",
    value: "03-5341-4697",
  },
  {
    label: "所在地",
    value: "〒164-0012 東京都中野区本町2丁目46-1 サンブライトツインビル北棟15F 1501-3",
  },
];

export default function ContactPage() {
  if (!isPageEnabled("/contact")) notFound();

  return (
    <>
      <section className={styles.hero} aria-labelledby="contact-page-title">
        <div className={`container ${styles.heroInner}`}>
          <Reveal direction="left">
            <p className={styles.heroEyebrow}>CONTACT</p>
            <h1 id="contact-page-title" className={styles.heroTitle}>
              お問い合わせ
            </h1>
            <p className={styles.heroLead}>
              事業・サービスに関するご相談、協業のご提案、取材のご依頼などを承っております。
              以下のフォームに必要事項をご入力ください。担当者より折り返しご連絡いたします。
            </p>
          </Reveal>
        </div>
      </section>

      <section className={styles.main} aria-labelledby="contact-form-title">
        <div className={`container ${styles.mainInner}`}>
          <Reveal direction="up" className={styles.formColumn}>
            <div className={styles.formHeader}>
              {/* <SectionLabel eyebrow="INQUIRY FORM" subtitle="お問い合わせフォーム" /> */}
              <h2 id="contact-form-title" className={styles.formTitle}>
                フォームでのお問い合わせ
              </h2>
            </div>
            <ContactForm />
          </Reveal>

          <Reveal direction="right" className={styles.aside}>
            <h2 className={styles.asideTitle}>その他のお問い合わせ</h2>
            <p className={styles.asideLead}>
              お急ぎの場合や、フォーム以外でのご連絡をご希望の場合は、
              下記の連絡先までお問い合わせください。
            </p>
            <dl className={styles.channels}>
              {contactChannels.map((channel) => (
                <div key={channel.label} className={styles.channel}>
                  <dt>{channel.label}</dt>
                  <dd>
                    {channel.href ? (
                      <a href={channel.href}>{channel.value}</a>
                    ) : (
                      channel.value
                    )}
                    {channel.note && <span className={styles.channelNote}>{channel.note}</span>}
                  </dd>
                </div>
              ))}
            </dl>
            <p className={styles.asidePrivacy}>
              ご記入いただいた個人情報は、お問い合わせへの対応の目的にのみ利用し、
              適切に管理いたします。
            </p>
          </Reveal>
        </div>
      </section>
    </>
  );
}
