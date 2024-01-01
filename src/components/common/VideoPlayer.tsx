"use client";
import React, { ReactElement, useState } from "react";
import styles from "@/styles/css/common/VideoPlayer.module.css";
import Button from "./Button";
import { FaPlay, FaPause } from "react-icons/fa6";

interface VideoPlayerProps {
  src?: string;
}

const VideoPlayer = (props: VideoPlayerProps): ReactElement => {
  const [isPlaying, setIsPlaying] = useState<boolean>(true);
  const [isHover, setIsHover] = useState<boolean>(false);

  function togglePlay() {
    const video = document.querySelector(
      ".portfolio-video"
    ) as HTMLVideoElement;

    if (video.paused || video.ended) {
      video.play();
      setIsHover(false);
      setIsPlaying(true);
    } else {
      video.pause();
      setIsPlaying(false);
    }
  }

  return (
    <div
      className={styles.video_wrap}
      onMouseEnter={() => setIsHover(true)}
      onMouseLeave={() => setIsHover(false)}
      onClick={togglePlay}
    >
      <video
        className={`portfolio-video ${styles.video_content}`}
        autoPlay
        playsInline
        preload="metadata"
        style={{
          display: "block",
          pointerEvents: "none",
          width: "100%",
          backgroundColor: "rgba(255, 255, 255, 0.03)",
        }}
      >
        <source src={props.src} type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      {isHover && (
        <div className={`${styles.video_bg_wrap}`}>
          <Button className={styles.video_btn}>
            {isPlaying ? (
              <FaPause size={"30"} color="#ffffff" />
            ) : (
              <FaPlay size={"30"} color="#ffffff" />
            )}
          </Button>
        </div>
      )}
    </div>
  );
};

export default VideoPlayer;
