/**
 * Per-page visibility map.
 *
 * Set to `true` to publish (render normally), `false` to hide (404).
 * Used by:
 *   - Header / Footer navigation (filter to enabled paths only)
 *   - Each page.tsx's notFound() guard (so disabled pages 404 cleanly on static export)
 */
export const PAGES = {
  "/": true,

  // 企業情報
  "/about": true,
  "/about/message": true,
  "/about/vision": true,
  "/about/outline": false,
  "/about/organization": true,
  "/about/history": true,

  // 事業紹介
  "/business": true,
  "/business/batteryenergystorage": true,
  "/business/windpower": true,
  "/business/biomasspower": true,
  "/business/hopper": false,
  "/business/hydrogen-mobility": false,
  "/business/ai-data-center": false,

  // サステナビリティ
  "/sustainability": true,
  "/sustainability/community-relations": true,
  "/sustainability/environment": true,
  "/sustainability/carbon-neutrality": true,

  // その他
  "/news": true,
  "/recruit": true,
  "/contact": true,
  "/privacy": false,
  "/sitemap": false,
} as const satisfies Record<string, boolean>;

export type PagePath = keyof typeof PAGES;

/**
 * Visibility enforcement only kicks in when NEXT_PUBLIC_ENFORCE_VISIBILITY=1.
 * That env var is set by .github/workflows/deploy.yml in production builds.
 * Local dev / local `yarn build` therefore see every page as enabled.
 */
const ENFORCE_VISIBILITY = process.env.NEXT_PUBLIC_ENFORCE_VISIBILITY === "1";

export function isPageEnabled(path: string): boolean {
  if (!ENFORCE_VISIBILITY) return true;
  if (path in PAGES) {
    return PAGES[path as PagePath];
  }
  return false;
}

/** Useful for filtering navigation lists. */
export function filterEnabledLinks<T extends { href: string }>(links: readonly T[]): T[] {
  return links.filter((link) => isPageEnabled(link.href));
}
