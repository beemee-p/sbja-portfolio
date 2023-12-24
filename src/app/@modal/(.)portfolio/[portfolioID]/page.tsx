import React from "react";
import Modal from "@/components/common/Modal";
import { getFormattedDate } from "@/library/getFormattedDate";
import { getPostData, getSortedPostsData } from "@/library/posts";
import styles from "@/styles/css/PortfolioModal.module.css";

const PortfolioModal = async ({
  params,
}: {
  params: { portfolioID: string };
}) => {
  const { portfolioID } = params;
  const { title, date, thumbnail, contentHtml } = await getPostData(
    portfolioID
  );

  const pubDate = await getFormattedDate(date);

  return (
    <Modal disableBodyScroll>
      <div className={styles.modal_content}>
        <h2>{title}</h2>
        <div>{pubDate}</div>
        <section dangerouslySetInnerHTML={{ __html: contentHtml }} />
      </div>
    </Modal>
  );
};

export default PortfolioModal;
