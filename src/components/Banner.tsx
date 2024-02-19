"use client";
import { ReactElement, useEffect, useMemo, useState } from "react";
import { SlArrowDown } from "react-icons/sl";
import Image, { StaticImageData } from "next/image";
import { getRandomInt } from "@/utils/number";
import { HEADER_HEIGHT } from "@/utils/Constants";
import { useDeviceContext } from "@/components/DeviceContext";
import styles from "@/styles/css/Banner.module.css";

const imgs: StaticImageData[] | string[] = [
  "/videos/list/main-banner-1.webm",
  "/videos/list/main-banner-2.webm",
  "/videos/list/main-banner-3.webm",
];

const Banner = (): ReactElement => {
  const { isMobile, isTablet } = useDeviceContext();
  const [headerHeight, setHeaderHeight] = useState(HEADER_HEIGHT.PC);
  const [randomImg, setRandomImg] = useState<StaticImageData | string>();

  useEffect(() => {
    const randomNum = getRandomInt(0, 3);
    setRandomImg(imgs[randomNum]);
  }, []);

  useEffect(() => {
    if (isMobile) {
      setHeaderHeight(HEADER_HEIGHT.MOBILE);
    } else if (isTablet) {
      setHeaderHeight(HEADER_HEIGHT.TABLET);
    } else {
      setHeaderHeight(HEADER_HEIGHT.PC);
    }
  }, [isMobile, isTablet]);

  function handleMoveScroll() {
    const list = document.querySelector(".list-wrap") as HTMLDivElement | null;
    const offset: number | undefined =
      (list?.offsetTop as number) - headerHeight;
    window.scrollTo({ top: offset, behavior: "smooth" });
  }

  return (
    <section className={styles.banner}>
      {randomImg && (
        <video
          className={styles.video}
          muted
          autoPlay
          playsInline
          loop
          preload="metadata"
        >
          <source src={randomImg as string} type="video/webm" />
          Your browser does not support the video tag.
        </video>
      )}
      <h1 className={styles.title}>
        Take some
        <br />
        Portfolios Today
        <br />
      </h1>

      <button className={styles.icon_wrap} onClick={handleMoveScroll}>
        <SlArrowDown className={styles.icon} size={"30"} color={"#ffffff"} />
        <SlArrowDown className={styles.icon} size={"30"} color={"#ffffff"} />
      </button>
    </section>
  );
};

export default Banner;
