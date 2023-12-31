"use client";
import { ReactElement } from "react";
import { SlArrowDown } from "react-icons/sl";
import styles from "@/styles/css/Banner.module.css";

const Banner = (): ReactElement => {
  function handleMoveScroll() {
    const list = document.querySelector(".list-wrap") as HTMLDivElement | null;
    list?.scrollIntoView({ behavior: "smooth" });

    const offset: number | undefined = (list?.offsetTop as number) - 93;
    window.scrollTo({ top: offset, behavior: "smooth" });
  }

  return (
    <section className={styles.banner}>
      <video
        id="background-video"
        className={styles.video}
        autoPlay
        loop
        muted
        poster="https://assets.codepen.io/6093409/river.jpg"
      >
        <source
          src="https://assets.codepen.io/6093409/river.mp4"
          type="video/mp4"
        />
      </video>

      <h1 className={styles.title}>
        Calm, Focus,
        <br />
        and more Inspiration
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
