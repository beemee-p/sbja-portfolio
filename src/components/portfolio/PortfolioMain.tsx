"use client";
import React, {
  MouseEventHandler,
  useCallback,
  useMemo,
  useState,
} from "react";
import { GoInfo } from "react-icons/go";
import { Portfolio } from "@/app/types";
import { useDeviceContext } from "@/components/DeviceContext";
import { usePortfolioContext } from "@/components/portfolio/PortfolioContext";
import Image from "next/image";
import Badge from "@/components/common/Badge";
import Button from "@/components/common/Button";
import VideoPlayer from "@/components/common/VideoPlayer";
import styles from "@/styles/css/portfolio/PortfolioMain.module.css";
import Tooltip from "../common/Tooltip";
import { useThrottle } from "@/hooks/useThrottle";

const SECOND_PER_FRAME = 16.6;

interface PortfolioMainProps {
  portfolio: Portfolio;
  isPage?: boolean;
}

const PortfolioMain = ({ isPage = false, ...props }: PortfolioMainProps) => {
  const context = usePortfolioContext();
  const { isMobile, isTablet } = useDeviceContext();
  const [isHover, setIsHover] = useState(false);
  const [imgIndex, setImgIndex] = useState<number>(-1);

  const handleMouseMove: MouseEventHandler<HTMLUListElement> = useCallback(
    (e) => {
      if (isTablet || isMobile) {
        return;
      }

      const container = isPage ? ".portfolio-content" : ".modal-outer";
      const scrollTop = document.querySelector(container)?.scrollTop || 0;
      const tooltip = document.querySelector(".tooltip") as HTMLElement;
      if (tooltip) {
        tooltip.style.left = `${e.clientX}px`;
        tooltip.style.top = `${e.clientY + scrollTop}px`;
      }
    },
    [isTablet, isMobile, isPage]
  );

  const throttleMouseMove = useThrottle(handleMouseMove, SECOND_PER_FRAME);

  return (
    <section
      id="portfolio-main"
      className={`${styles.main_content} ${isPage ? styles.page : ""} ${
        context.showInfo ? styles.open_info : styles.close_info
      }`}
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

      <ul
        className={styles.main_image_wrap}
        onMouseMove={throttleMouseMove}
        onMouseEnter={() => setIsHover(true)}
        onMouseLeave={() => setIsHover(false)}
      >
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

      {isHover && imgIndex >= 0 && (
        <Tooltip>{props.portfolio.images?.[imgIndex || 0].title}</Tooltip>
      )}
    </section>
  );
};

export default PortfolioMain;
