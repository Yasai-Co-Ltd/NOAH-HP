/**
 * Asset path resolver for static export under a basePath.
 *
 * GitHub Pages serves this site at `https://yasai-co-ltd.github.io/NOAH-HP/`,
 * so raw <img src="/assets/..."> tags need to be prefixed with `/NOAH-HP`.
 *
 * `next/image` and `next/link` auto-prepend the basePath, so use them when possible.
 * Use `asset()` only for raw `<img>` tags or other manual paths to `public/`.
 *
 * The prefix is read from `process.env.NEXT_PUBLIC_BASE_PATH` at build time
 * (set by next.config.ts and exposed to client bundles).
 */
export const BASE_PATH = process.env.NEXT_PUBLIC_BASE_PATH ?? "";

export function asset(path: string): string {
  if (/^https?:\/\//.test(path) || path.startsWith("data:")) return path;
  const normalized = path.startsWith("/") ? path : `/${path}`;
  return `${BASE_PATH}${normalized}`;
}
