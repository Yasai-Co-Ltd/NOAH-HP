import Link from "next/link";
import styles from "./Footer.module.css";

interface FooterLink {
  href: string;
  label: string;
}

interface FooterGroup {
  heading: string;
  links: FooterLink[];
}

const GROUPS: FooterGroup[] = [
  {
    heading: "私たちについて",
    links: [
      { href: "#about", label: "代表メッセージ" },
      { href: "#about", label: "会社概要" },
      { href: "#about", label: "沿革" },
      { href: "#about", label: "アクセス" },
    ],
  },
  {
    heading: "事業内容",
    links: [
      { href: "#business", label: "水素事業" },
      { href: "#business", label: "新エネルギー自動車" },
      { href: "#business", label: "発電事業" },
      { href: "#business", label: "蓄電池事業" },
      { href: "#business", label: "風力発電事業" },
    ],
  },
  {
    heading: "企業情報",
    links: [
      { href: "#projects", label: "導入事例" },
      { href: "#sustainability", label: "サステナビリティ" },
      { href: "#news", label: "お知らせ" },
    ],
  },
];

export function Footer() {
  return (
    <footer className={styles.footer} id="company">
      <div className="container">
        <div className={styles.grid}>
          <Link href="/" className={styles.logo}>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src="/assets/noah_logo.png" alt="諾亜建設株式会社" />
          </Link>
          <div className={styles.links}>
            {GROUPS.map((group) => (
              <div key={group.heading} className={styles.linkGroup}>
                <h3>{group.heading}</h3>
                {group.links.map((link) => (
                  <Link
                    key={`${group.heading}-${link.label}`}
                    href={link.href}
                    className={styles.link}
                  >
                    {link.label}
                  </Link>
                ))}
              </div>
            ))}
            <div className={styles.linkGroup}>
              <h3>お問い合わせ</h3>
              <Link href="#contact" className={styles.contactLink}>
                お問い合わせ
              </Link>
              <Link href="#" className={styles.link}>
                プライバシーポリシー
              </Link>
              <Link href="#" className={styles.link}>
                サイトマップ
              </Link>
            </div>
          </div>
        </div>
      </div>
      <p className={styles.copyright}>© NOAH CONSTRUCTION CO.,LTD. All Rights Reserved.</p>
    </footer>
  );
}
