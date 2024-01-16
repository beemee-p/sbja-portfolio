"use client";
import React, {
  MouseEventHandler,
  useCallback,
  useEffect,
  useMemo,
  useState,
} from "react";
import { GoInfo } from "react-icons/go";
import { Portfolio } from "@/app/types";
import Image from "next/image";
import { useDeviceContext } from "@/components/DeviceContext";
import { usePortfolioContext } from "@/components/portfolio/PortfolioContext";
import Badge from "@/components/common/Badge";
import Button from "@/components/common/Button";
import VideoPlayer from "@/components/common/VideoPlayer";
import { HEADER_HEIGHT } from "@/utils/Constants";
import styles from "@/styles/css/portfolio/PortfolioMain.module.css";
import headerStyles from "@/styles/css/Header.module.css";

interface CursorPosition {
  x: number;
  y: number;
}

interface PortfolioMainProps {
  portfolio: Portfolio;
  isPage?: boolean;
}

const PortfolioMain = ({ isPage = false, ...props }: PortfolioMainProps) => {
  const context = usePortfolioContext();
  const { isMobile, isTablet } = useDeviceContext();
  const [imgIndex, setImgIndex] = useState<number>(-1);
  const [cursorPosition, setCursorPosition] = useState<CursorPosition>({
    x: 0,
    y: 0,
  });

  useEffect(() => {
    const header = document.querySelector("header");
    if (header) {
      if (!isPage) {
        header.classList.add(headerStyles.modal_header);
      }
    }

    return () => {
      if (header) {
        if (!isPage) {
          header.classList.remove(headerStyles.modal_header);
        }
      }
    };
  }, [isPage]);

  const handleMouseMove: MouseEventHandler<HTMLDivElement> = useCallback(
    (e) => {
      if (isTablet || isMobile) {
        return;
      }

      const scrollTop = document.querySelector(".modal-outer")?.scrollTop || 0;

      setCursorPosition({
        x: e.clientX,
        y: e.clientY + scrollTop,
      });
    },
    [isTablet, isMobile]
  );

  const mouseCursor = useMemo(() => {
    if (imgIndex >= 0) {
      return (
        <div
          className={styles.cursor_tooltip}
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
    <section
      id="portfolio-main"
      className={`${styles.main_content} ${isPage ? styles.page : ""} ${
        context.showInfo ? styles.open_info : styles.close_info
      }`}
      onMouseMove={handleMouseMove}
    >
      <article className={styles.main_head_wrap}>
        <div className={styles.main_head}>
          <h2 className={styles.main_title}>{props.portfolio.title}</h2>

          <div className={styles.main_badge_wrap}>
            {props.portfolio.skills?.map((skill, index) => (
              <Badge key={index} className={`${skill} badge`}>
                {skill}
              </Badge>
            ))}
          </div>
        </div>

        <Button
          className={styles.main_info_icon}
          onClick={() => context.setShowInfo(!context.showInfo)}
        >
          <GoInfo size={isMobile ? "18" : "24"} color="#7c8484" />
        </Button>
      </article>

      <article className={styles.main_video}>
        {props.portfolio.videos?.map((videoSrc, index) => (
          <VideoPlayer key={index} src={videoSrc} index={index} />
        ))}
      </article>

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
              quality={100}
              width={1000}
              height={1000}
            />
          </li>
        ))}
      </ul>

      {mouseCursor}
    </section>
  );
};

export default PortfolioMain;
