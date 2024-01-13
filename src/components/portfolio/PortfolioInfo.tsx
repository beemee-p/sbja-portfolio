"use client";
import React, { ReactElement } from "react";
import { IoCloseOutline } from "react-icons/io5";
import Button from "../common/Button";
import styles from "@/styles/css/portfolio/PortfolioInfo.module.css";
import { usePortfolioContext } from "./PortfolioContext";

interface PortfolioInfoProps {
  contents: string;
  isPage?: boolean;
}

const PortfolioInfo = ({
  isPage = false,
  ...props
}: PortfolioInfoProps): ReactElement => {
  const context = usePortfolioContext();

  return (
    <section
      className={`${styles.info_wrap} ${isPage ? styles.page : ""} ${
        context.showInfo ? styles.open : styles.close
      } scroll_default `}
    >
      <article
        className={styles.info_content}
        dangerouslySetInnerHTML={{ __html: props.contents }}
      />

      <Button
        className={styles.info_close_btn}
        onClick={() => context.setShowInfo(false)}
      >
        <IoCloseOutline size={"24"} color="#7C8484" />
      </Button>
    </section>
  );
};

export default PortfolioInfo;
