import type { Metadata } from "next";
import { Noto_Sans_KR } from "next/font/google";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const notoSansKr = Noto_Sans_KR({
  subsets: ["latin"],
  weight: ["400", "500", "700"],
});

export const metadata: Metadata = {
  title: "SBJA's Portfolio",
  description: "Next.js, FrontEnd-Developer",
};

export default function ModalLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className={notoSansKr.className}>
      <Header isModal />
      {children}
      <Footer />
    </div>
  );
}
