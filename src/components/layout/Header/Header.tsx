"use client";

import Link from "next/link";
import { useState } from "react";
import styles from "./Header.module.css";

interface NavLink {
  href: string;
  label: string;
}

const NAV_LINKS: NavLink[] = [
  { href: "/about", label: "企業情報" },
  { href: "/business", label: "事業紹介" },
  { href: "/sustainability", label: "サステナビリティ" },
  { href: "/news", label: "ニュース" },
  { href: "/recruit", label: "採用情報" },
];

export function Header() {
  const [open, setOpen] = useState(false);

  const headerClasses = [styles.header, open ? styles.navOpen : null]
    .filter(Boolean)
    .join(" ");

  const closeMenu = () => setOpen(false);

  return (
    <header className={headerClasses}>
      <Link
        href="/"
        className={styles.brand}
        aria-label="諾亜建設株式会社 ホーム"
        onClick={closeMenu}
      >
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src="/assets/noah_logo.png" alt="NOAH CONSTRUCTION CO.,LTD. 諾亜建設株式会社" />
      </Link>
      <button
        type="button"
        className={styles.toggle}
        aria-label={open ? "メニューを閉じる" : "メニューを開く"}
        aria-expanded={open}
        onClick={() => setOpen((value) => !value)}
      >
        <span className={styles.toggleBar} />
        <span className={styles.toggleBar} />
        <span className={styles.toggleBar} />
      </button>
      <nav className={styles.nav} aria-label="グローバルナビゲーション">
        {NAV_LINKS.map((link) => (
          <Link key={link.href} href={link.href} className={styles.navItem} onClick={closeMenu}>
            {link.label}
          </Link>
        ))}
      </nav>
      <Link href="/contact" className={styles.contact} onClick={closeMenu}>
        <svg aria-hidden="true" viewBox="0 0 24 24" className={styles.contactIcon}>
          <path d="M4 6h16v12H4z" />
          <path d="m4 7 8 6 8-6" />
        </svg>
        お問い合わせ
      </Link>
    </header>
  );
}
