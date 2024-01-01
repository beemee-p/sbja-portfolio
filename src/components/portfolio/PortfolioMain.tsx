"use client";
import React, {
  MouseEventHandler,
  useCallback,
  useMemo,
  useState,
} from "react";
import Image from "next/image";
import VideoPlayer from "@/components/common/VideoPlayer";
import styles from "@/styles/css/portfolio/PortfolioMain.module.css";
import Button from "../common/Button";
import { Portfolio } from "@/app/types";
import { GoInfo } from "react-icons/go";
import { usePortfolioContext } from "./PortfolioContext";

interface CursorPosition {
  x: number;
  y: number;
}

interface PortfolioMainProps {
  portfolio: Portfolio;
}

const PortfolioMain = (props: PortfolioMainProps) => {
  const context = usePortfolioContext();
  const [imgIndex, setImgIndex] = useState<number>(-1);
  const [cursorPosition, setCursorPosition] = useState<CursorPosition>({
    x: 0,
    y: 0,
  });

  const handleMouseMove: MouseEventHandler<HTMLDivElement> = useCallback(
    (e) => {
      const scrollTop = document.querySelector(".modal-outer")?.scrollTop || 0;
      setCursorPosition({
        x: e.clientX,
        y: e.clientY + scrollTop,
      });
    },
    []
  );

  const mouseCursor = useMemo(() => {
    if (imgIndex >= 0) {
      return (
        <div
          className={styles.cursor}
          style={{
            left: `${cursorPosition.x}px`,
            top: `${cursorPosition.y}px`,
          }}
        >
          {props.portfolio.images?.[imgIndex || 0].title}
        </div>
      );
    } else {
      return null;
    }
  }, [imgIndex, cursorPosition, props.portfolio.images]);

  return (
    <div
      id="portfolio-main"
      className={styles.main_content}
      onMouseMove={handleMouseMove}
    >
      <div className={styles.main_head}>
        <h2 className={styles.main_title}>{props.portfolio.title}</h2>

        <Button
          className={styles.main_info_icon}
          onClick={() => context.setShowInfo(!context.showInfo)}
        >
          <GoInfo size={"24"} color="#7c8484" />
        </Button>
      </div>

      <div className={styles.main_video}>
        {props.portfolio.videos?.map((videoSrc, index) => (
          <VideoPlayer key={index} src={videoSrc} />
        ))}
      </div>

      <ul className={styles.main_image_wrap}>
        {props.portfolio.images?.map((image, index) => (
          <li
            className={styles.main_image}
            key={index}
            onMouseEnter={() => setImgIndex(index)}
            onMouseLeave={() => setImgIndex(-1)}
          >
            <Image
              alt="main_img"
              src={image.img}
              style={{
                width: "100%",
                height: "auto",
              }}
              width={500}
              height={300}
            />
          </li>
        ))}
      </ul>

      {mouseCursor}
    </div>
  );
};

export default PortfolioMain;
