"use client";
import React from "react";
import Image from "next/image";
import VideoPlayer from "@/components/common/VideoPlayer";
import styles from "@/styles/css/portfolio/PortfolioMain.module.css";
import { Post } from "@/app/types";
import { BsInfoCircle } from "react-icons/bs";
import { TbInfoSquareRounded } from "react-icons/tb";
import { PiInfoBold } from "react-icons/pi";
import Button from "../common/Button";

interface PortfolioMainProps {
  portfolio: Post;
}

const PortfolioMain = (props: PortfolioMainProps) => {
  return (
    <div className={styles.main_content}>
      <div className={styles.main_head}>
        <h2 className={styles.main_title}>{props.portfolio.title}</h2>
        <Button className={styles.main_info_icon} onClick={}>
          <PiInfoBold size={"24"} color="#7C8484" />
        </Button>
      </div>

      <div className={styles.main_video}>
        {props.portfolio.videos?.map((videoSrc, index) => (
          <VideoPlayer key={index} src={videoSrc} />
        ))}
      </div>

      <div>
        {props.portfolio.images?.map((imageSrc, index) => (
          <Image
            key={index}
            alt="thumbnail"
            src={imageSrc}
            style={{
              width: "100%",
              height: "auto",
            }}
            width={500}
            height={300}
          />
        ))}
      </div>
    </div>
  );
};

export default PortfolioMain;
