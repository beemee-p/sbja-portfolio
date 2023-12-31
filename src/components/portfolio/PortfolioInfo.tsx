"use client";
import React, { ReactElement, useState } from "react";
import { IoCloseOutline } from "react-icons/io5";
import Button from "../common/Button";
import styles from "@/styles/css/portfolio/PortfolioInfo.module.css";

interface PortfolioInfoProps {
  contents: string;
}

const PortfolioInfo = (props: PortfolioInfoProps): ReactElement => {
  const [showInfo, setShowInfo] = useState(true);
  // TODO: 등장 퇴장시 애니메이션 추가

  return showInfo ? (
    <div className={styles.info_wrap}>
      <section
        className={styles.info_content}
        dangerouslySetInnerHTML={{ __html: props.contents }}
      />

      <Button
        className={styles.info_close_btn}
        onClick={() => setShowInfo(false)}
      >
        <IoCloseOutline size={"24"} color="#7C8484" />
      </Button>
    </div>
  ) : (
    <></>
  );
};

export default PortfolioInfo;
