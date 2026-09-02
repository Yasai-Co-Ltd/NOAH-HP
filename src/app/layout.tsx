import type { Metadata } from "next";
import type { ReactNode } from "react";
import { AssetBackgroundStyles } from "@/components/AssetBackgroundStyles";
import { Footer } from "@/components/layout/Footer/Footer";
import { Header } from "@/components/layout/Header/Header";
import { asset } from "@/lib/asset";
import "@/styles/global.css";

export const metadata: Metadata = {
  title: "諾亜建設株式会社 | 地球と自然に寄り添い、持続可能な未来へ",
  description:
    "発電・蓄電池・風力・水素・新エネルギー自動車・AIデータセンター事業を通じ、持続可能な未来を支える諾亜建設株式会社のコーポレートサイトです。",
  icons: {
    icon: asset("/assets/noah_logo-mark.png"),
  },
};

interface RootLayoutProps {
  children: ReactNode;
}

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="ja">
      <body>
        <AssetBackgroundStyles />
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
