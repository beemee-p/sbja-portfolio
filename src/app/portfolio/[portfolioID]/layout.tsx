import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { PAGE_TYPE } from "@/utils/Constants";

export const metadata: Metadata = {
  title: "SBJA's Portfolio",
  description: "Welcome to SBJA's iPortfolio",
};

export default function PortfolioDetailLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <Header pageType={PAGE_TYPE.DETAIL} />
      {children}
      <Footer pageType={PAGE_TYPE.DETAIL} />
    </>
  );
}
