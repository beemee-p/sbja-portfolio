import React from "react";
import Modal from "@/components/common/Modal";
import { getFormattedDate } from "@/library/getFormattedDate";
import { getPostData } from "@/library/posts";
import styles from "@/styles/css/PortfolioModal.module.css";
import VideoPlayer from "@/components/common/VideoPlayer";

const PortfolioModal = async ({
  params,
}: {
  params: { portfolioID: string };
}) => {
  const { portfolioID } = params;
  const {
    title,
    date,
    contentHtml,
    portfolio,
    summary,
    features,
    skills,
    period,
    images,
    videos,
  } = await getPostData(portfolioID);

  const pubDate = await getFormattedDate(date);

  return (
    <Modal disableBodyScroll>
      <div className={styles.modal_content}>
        <div className={styles.modal_title_wrap}>
          <h2 className={styles.modal_title}>{title}</h2>
        </div>

        {/* <section dangerouslySetInnerHTML={{ __html: contentHtml }} /> */}
        <VideoPlayer src={portfolio} />
      </div>
    </Modal>
  );
};

export default PortfolioModal;
