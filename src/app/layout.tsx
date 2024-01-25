import type { Metadata } from "next";
import { Noto_Sans_KR } from "next/font/google";
import "./globals.css";

const notoSansKr = Noto_Sans_KR({
  subsets: ["latin"],
  weight: ["400", "500", "700"],
});

export const metadata: Metadata = {
  title: "SBJA's Portfolio",
  description: "Welcome to SBJA's iPortfolio",
};

export default function RootLayout({
  children,
  modal,
}: {
  children: React.ReactNode;
  modal: React.ReactNode;
}) {
  return (
    <html lang="en" className={notoSansKr.className}>
      <body className="scroll_default">
        {children}
        {modal}
      </body>
    </html>
  );
}
