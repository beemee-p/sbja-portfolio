import React from "react";
import styles from "@/styles/css/PortfolioModal.module.css";
import Modal from "@/components/common/Modal";
import PortfolioInfo from "@/components/portfolio/PortfolioInfo";
import { getPortfolio } from "@/library/posts";
import PortfolioMain from "@/components/portfolio/PortfolioMain";
import { PortfolioProvider } from "@/components/portfolio/PortfolioContext";

const PortfolioModal = async ({
  params,
}: {
  params: { portfolioID: string };
}) => {
  const { portfolioID } = params;
  const portfolio = await getPortfolio(portfolioID);

  return (
    <PortfolioProvider>
      <Modal disableBodyScroll>
        <div className={styles.modal_content_wrap}>
          <PortfolioMain portfolio={portfolio} />
          <PortfolioInfo contents={portfolio.contentHtml} />
        </div>
      </Modal>
    </PortfolioProvider>
  );
};

export default PortfolioModal;
