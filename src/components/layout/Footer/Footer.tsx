import Link from "next/link";
import styles from "./Footer.module.css";

interface FooterLink {
  href: string;
  label: string;
}

interface FooterGroup {
  heading: string;
  headingHref: string;
  links: FooterLink[];
}

const GROUPS: FooterGroup[] = [
  {
    heading: "企業情報",
    headingHref: "/about",
    links: [
      { href: "/about/message", label: "トップメッセージ" },
      { href: "/about/vision", label: "企業理念・ビジョン" },
      { href: "/about/outline", label: "会社概要" },
      { href: "/about/history", label: "沿革" },
      { href: "/about/network", label: "国内外拠点" },
    ],
  },
  {
    heading: "事業紹介",
    headingHref: "/business",
    links: [
      { href: "/business/batteryenergystorage", label: "蓄電池事業" },
      { href: "/business/windpower", label: "風力発電事業" },
      { href: "/business/biomasspower", label: "バイオマス" },
      { href: "/business/hopper", label: "走行式集塵ホッパー事業" },
      { href: "/business/hydrogen-mobility", label: "水素モビリティ事業" },
      { href: "/business/ai-data-center", label: "AIデータセンター事業" },
    ],
  },
  {
    heading: "サステナビリティ",
    headingHref: "/sustainability",
    links: [
      { href: "/sustainability/community-relations", label: "地域共生" },
      { href: "/sustainability/environment", label: "環境保全" },
      { href: "/sustainability/carbon-neutrality", label: "カーボンニュートラル" },
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
                <h3>
                  <Link href={group.headingHref}>{group.heading}</Link>
                </h3>
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
              <h3>その他</h3>
              <Link href="/contact" className={styles.contactLink}>
                お問い合わせ
              </Link>
              <Link href="/news" className={styles.link}>
                ニュース
              </Link>
              <Link href="/recruit" className={styles.link}>
                採用情報
              </Link>
              <Link href="/privacy" className={styles.link}>
                プライバシーポリシー
              </Link>
              <Link href="/sitemap" className={styles.link}>
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
