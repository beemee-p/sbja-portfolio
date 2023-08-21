import { ReactElement } from "react";
import styles from "@/styles/css/Banner.module.css";

const Banner = (): ReactElement => {
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
    </section>
  );
};

export default Banner;
