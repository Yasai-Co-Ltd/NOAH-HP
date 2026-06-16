"use client";

import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { asset } from "@/lib/asset";
import styles from "./Header.module.css";

interface MegaMenuItem {
  href: string;
  label: string;
}

interface MegaMenuGroup {
  heading?: string;
  items: MegaMenuItem[];
}

interface MegaMenuFeature {
  image?: string;
  title: string;
  description?: string;
  href: string;
}

interface MegaMenuConfig {
  description?: string;
  groups: MegaMenuGroup[];
  feature?: MegaMenuFeature;
}

interface NavLink {
  href: string;
  label: string;
  mega?: MegaMenuConfig;
}

const NAV_LINKS: NavLink[] = [
  {
    href: "/about",
    label: "企業情報",
    mega: {
      description: "企業情報",
      groups: [
        {
          heading: "私たちの考え",
          items: [
            { href: "/about/message", label: "トップメッセージ" },
            { href: "/about/vision", label: "企業理念・ビジョン" },
            { href: "/about/standard", label: "行動基準" },
          ],
        },
        {
          heading: "会社の輪郭",
          items: [
            { href: "/about/outline", label: "会社概要" },
            { href: "/about/organization", label: "グループ・組織図" },
            { href: "/about/network", label: "国内外拠点" },
            { href: "/about/history", label: "沿革" },
            { href: "/about/safety-health", label: "健康経営" },
          ],
        },
      ],
      feature: {
        image: "/assets/about/hero-noah-brand-ai.png",
        title: "会社のすがた、これまでの歩み。",
        description: "企業情報トップを見る",
        href: "/about",
      },
    },
  },
  {
    href: "/business",
    label: "事業紹介",
    mega: {
      description: "事業紹介",
      groups: [
        {
          heading: "電力・蓄電",
          items: [
            { href: "/business/batteryenergystorage", label: "蓄電池事業" },
            { href: "/business/windpower", label: "風力発電事業" },
            { href: "/business/biomasspower", label: "バイオマス事業" },
          ],
        },
        {
          heading: "次世代インフラ",
          items: [
            { href: "/business/hydrogen-mobility", label: "水素モビリティ事業" },
            { href: "/business/ai-data-center", label: "AIデータセンター事業" },
            { href: "/business/hopper", label: "走行式集塵ホッパー事業" },
          ],
        },
      ],
      feature: {
        image: "/assets/strengths-bg-integrated-energy.png",
        title: "6 つの事業領域、ひとつの構想。",
        description: "事業紹介トップを見る",
        href: "/business",
      },
    },
  },
  {
    href: "/sustainability",
    label: "サステナビリティ",
    mega: {
      description: "サステナビリティ",
      groups: [
        {
          items: [
            { href: "/sustainability/community-relations", label: "地域共生" },
            { href: "/sustainability/environment", label: "環境保全" },
            { href: "/sustainability/carbon-neutrality", label: "カーボンニュートラル" },
          ],
        },
      ],
      feature: {
        image: "/assets/sustainability/carbon-neutrality-v3.png",
        title: "3 つの視点でとらえる、サステナビリティ。",
        description: "サステナビリティトップを見る",
        href: "/sustainability",
      },
    },
  },
  { href: "/news", label: "ニュース" },
  { href: "/recruit", label: "採用情報" },
];

const CLOSE_DELAY_MS = 180;

export function Header() {
  const [open, setOpen] = useState(false);
  const [activeMega, setActiveMega] = useState<string | null>(null);
  const closeTimer = useRef<ReturnType<typeof setTimeout> | null>(null);

  const headerClasses = [
    styles.header,
    open ? styles.navOpen : null,
    activeMega ? styles.megaActive : null,
  ]
    .filter(Boolean)
    .join(" ");

  const cancelClose = () => {
    if (closeTimer.current) {
      clearTimeout(closeTimer.current);
      closeTimer.current = null;
    }
  };

  const openMega = (href: string) => {
    cancelClose();
    setActiveMega(href);
  };

  const scheduleClose = () => {
    cancelClose();
    closeTimer.current = setTimeout(() => setActiveMega(null), CLOSE_DELAY_MS);
  };

  const closeAll = () => {
    cancelClose();
    setOpen(false);
    setActiveMega(null);
  };

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setActiveMega(null);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  useEffect(() => cancelClose, []);

  const activeConfig = NAV_LINKS.find((l) => l.href === activeMega)?.mega ?? null;

  return (
    <header className={headerClasses}>
      <Link
        href="/"
        className={styles.brand}
        aria-label="諾亜建設株式会社 ホーム"
        onClick={closeAll}
      >
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={asset("/assets/noah_logo.png")}
          alt="NOAH CONSTRUCTION CO.,LTD. 諾亜建設株式会社"
        />
      </Link>
      <button
        type="button"
        className={styles.toggle}
        aria-label={open ? "メニューを閉じる" : "メニューを開く"}
        aria-expanded={open}
        onClick={() => setOpen((v) => !v)}
      >
        <span className={styles.toggleBar} />
        <span className={styles.toggleBar} />
        <span className={styles.toggleBar} />
      </button>
      <nav className={styles.nav} aria-label="グローバルナビゲーション">
        {NAV_LINKS.map((link) => {
          const isActive = activeMega === link.href;
          const navItemClass = [styles.navItem, isActive ? styles.navItemActive : null]
            .filter(Boolean)
            .join(" ");
          return (
            <div
              key={link.href}
              className={styles.navItemWrap}
              onMouseEnter={() => (link.mega ? openMega(link.href) : setActiveMega(null))}
              onMouseLeave={() => link.mega && scheduleClose()}
              onFocus={() => (link.mega ? openMega(link.href) : setActiveMega(null))}
              onBlur={() => link.mega && scheduleClose()}
            >
              <Link
                href={link.href}
                className={navItemClass}
                onClick={closeAll}
                aria-haspopup={link.mega ? "true" : undefined}
                aria-expanded={link.mega ? isActive : undefined}
              >
                {link.label}
              </Link>
            </div>
          );
        })}
      </nav>
      <Link href="/contact" className={styles.contact} onClick={closeAll}>
        <svg aria-hidden="true" viewBox="0 0 24 24" className={styles.contactIcon}>
          <path d="M4 6h16v12H4z" />
          <path d="m4 7 8 6 8-6" />
        </svg>
        お問い合わせ
      </Link>

      <div
        className={[styles.mega, activeMega ? styles.megaOpen : null].filter(Boolean).join(" ")}
        onMouseEnter={cancelClose}
        onMouseLeave={scheduleClose}
        aria-hidden={!activeMega}
      >
        {activeConfig && (
          <div className={`container ${styles.megaInner}`}>
            <div className={styles.megaCopy}>
              {activeConfig.description && <p>{activeConfig.description}</p>}
            </div>
            <div className={styles.megaGroups}>
              {activeConfig.groups.map((group, gi) => (
                <div key={gi} className={styles.megaGroup}>
                  {group.heading && <h3>{group.heading}</h3>}
                  <ul>
                    {group.items.map((item) => (
                      <li key={item.href}>
                        <Link href={item.href} onClick={closeAll}>
                          {item.label}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
            {activeConfig.feature && (
              <Link
                href={activeConfig.feature.href}
                className={styles.megaFeature}
                onClick={closeAll}
              >
                {activeConfig.feature.image && (
                  <span className={styles.megaFeatureImage}>
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img src={asset(activeConfig.feature.image)} alt="" />
                  </span>
                )}
                <span className={styles.megaFeatureBody}>
                  <strong>{activeConfig.feature.title}</strong>
                  {activeConfig.feature.description && (
                    <em>
                      {activeConfig.feature.description}
                      <span aria-hidden="true"> →</span>
                    </em>
                  )}
                </span>
              </Link>
            )}
          </div>
        )}
      </div>
    </header>
  );
}
