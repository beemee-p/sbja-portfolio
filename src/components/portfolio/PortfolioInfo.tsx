"use client";
import React, { ReactElement } from "react";
import { IoCloseOutline } from "react-icons/io5";
import Button from "../common/Button";
import styles from "@/styles/css/portfolio/PortfolioInfo.module.css";
import { usePortfolioContext } from "./PortfolioContext";

interface PortfolioInfoProps {
  contents: string;
}

const PortfolioInfo = (props: PortfolioInfoProps): ReactElement => {
  const context = usePortfolioContext();
  // TODO: 등장 퇴장시 애니메이션 추가

  return context.showInfo ? (
    <div className={styles.info_wrap}>
      <section
        className={styles.info_content}
        dangerouslySetInnerHTML={{ __html: props.contents }}
      />

      <Button
        className={styles.info_close_btn}
        onClick={() => context.setShowInfo(false)}
      >
        <IoCloseOutline size={"24"} color="#7C8484" />
      </Button>
    </div>
  ) : (
    <></>
  );
};

export default PortfolioInfo;
