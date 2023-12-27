import React from "react";
import { getFormattedDate } from "@/library/getFormattedDate";
import { getPostData } from "@/library/posts";
import Modal from "@/components/common/Modal";
import VideoPlayer from "@/components/common/VideoPlayer";
import styles from "@/styles/css/PortfolioModal.module.css";
import PortfolioInfo from "@/components/portfolio/PortfolioInfo";

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
      <div className={styles.modal_content_wrap}>
        <div className={styles.modal_content}>
          <div className={styles.modal_title_wrap}>
            <h2 className={styles.modal_title}>{title}</h2>
          </div>

          <VideoPlayer src={portfolio} />
        </div>

        <PortfolioInfo contents={contentHtml} />
      </div>
    </Modal>
  );
};

export default PortfolioModal;
