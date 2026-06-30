import type { NextConfig } from "next";

// Deployed at https://yasai-co-ltd.github.io/NOAH-HP/
// Production build sets NEXT_PUBLIC_BASE_PATH=/NOAH-HP via GitHub Actions workflow.
// Local dev defaults to empty so URLs are clean (localhost:3100/).
const BASE_PATH = process.env.NEXT_PUBLIC_BASE_PATH ?? "";

const nextConfig: NextConfig = {
  reactStrictMode: true,
  // 開発時のみ表示される Next.js のインジケータ（左下の丸い「N」）を無効化。
  // 本番（output: export）には元々出ないが、ローカル確認時のコンテンツ重なりを防ぐ。
  devIndicators: false,
  output: "export",
  basePath: BASE_PATH,
  assetPrefix: BASE_PATH,
  trailingSlash: true,
  images: {
    unoptimized: true,
    formats: ["image/avif", "image/webp"],
  },
  env: {
    NEXT_PUBLIC_BASE_PATH: BASE_PATH,
  },
};

export default nextConfig;
