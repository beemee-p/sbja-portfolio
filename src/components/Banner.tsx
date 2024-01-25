"use client";
import { ReactElement, useEffect, useMemo, useState } from "react";
import { SlArrowDown } from "react-icons/sl";
import Image, { StaticImageData } from "next/image";
import { getRandomInt } from "@/utils/number";
import { HEADER_HEIGHT } from "@/utils/Constants";
import { useDeviceContext } from "@/components/DeviceContext";
import styles from "@/styles/css/Banner.module.css";
import banner1 from "public/videos/list/main-banner-1.gif";
import banner2 from "public//videos/list/main-banner-2.gif";
import banner3 from "public//videos/list/main-banner-3.gif";

const Banner = (): ReactElement => {
  const { isMobile, isTablet } = useDeviceContext();
  const [headerHeight, setHeaderHeight] = useState(HEADER_HEIGHT.PC);
  const [randomImg, setRandomImg] = useState<string | StaticImageData>();

  const imgs = useMemo(() => {
    return [banner1, banner2, banner3];
  }, []);

  useEffect(() => {
    const randomNum = getRandomInt(0, 3);
    setRandomImg(imgs[randomNum]);
  }, [imgs]);

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
        <Image
          className={styles.img}
          alt="banner"
          fill={true}
          quality={60}
          src={randomImg}
          priority
        />
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
