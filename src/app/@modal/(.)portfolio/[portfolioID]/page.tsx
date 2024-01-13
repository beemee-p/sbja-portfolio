import React from "react";
import styles from "@/styles/css/PortfolioModal.module.css";
import { getPortfolio } from "@/library/posts";
import { DeviceProvider } from "@/components/DeviceContext";
import { PortfolioProvider } from "@/components/portfolio/PortfolioContext";
import Modal from "@/components/common/Modal";
import Header from "@/components/Header";
import PortfolioInfo from "@/components/portfolio/PortfolioInfo";
import PortfolioMain from "@/components/portfolio/PortfolioMain";

const PortfolioModal = async ({
  params,
}: {
  params: { portfolioID: string };
}) => {
  const { portfolioID } = params;
  const portfolio = await getPortfolio(portfolioID);

  return (
    <DeviceProvider>
      <PortfolioProvider>
        <Modal disableBodyScroll>
          <div className={styles.modal_content_wrap}>
            <PortfolioMain portfolio={portfolio} />
            <PortfolioInfo contents={portfolio.contentHtml} />
          </div>
        </Modal>
      </PortfolioProvider>
    </DeviceProvider>
  );
};

export default PortfolioModal;
