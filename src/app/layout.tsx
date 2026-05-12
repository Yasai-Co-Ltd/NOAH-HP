import type { Metadata } from "next";
import type { ReactNode } from "react";
import { Footer } from "@/components/layout/Footer/Footer";
import { Header } from "@/components/layout/Header/Header";
import "@/styles/global.css";

export const metadata: Metadata = {
  title: "諾亜建設株式会社 | 再生可能エネルギーで未来のインフラをつくる",
  description: "諾亜建設株式会社の再生可能エネルギー事業コーポレートサイト",
  icons: {
    icon: "/assets/noah_logo-mark.png",
  },
};

interface RootLayoutProps {
  children: ReactNode;
}

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="ja">
      <body>
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
