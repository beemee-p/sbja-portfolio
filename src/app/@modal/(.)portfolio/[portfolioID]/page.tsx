import React from "react";
import styles from "@/styles/css/PortfolioModal.module.css";
import Modal from "@/components/common/Modal";
import PortfolioInfo from "@/components/portfolio/PortfolioInfo";
import { getFormattedDate } from "@/library/getFormattedDate";
import { getPostData } from "@/library/posts";
import PortfolioMain from "@/components/portfolio/PortfolioMain";

const PortfolioModal = async ({
  params,
}: {
  params: { portfolioID: string };
}) => {
  const { portfolioID } = params;
  const portfolio = await getPostData(portfolioID);

  return (
    <Modal disableBodyScroll>
      <div className={styles.modal_content_wrap}>
        <PortfolioMain portfolio={portfolio} />
        <PortfolioInfo contents={portfolio.contentHtml} />
      </div>
    </Modal>
  );
};

export default PortfolioModal;
