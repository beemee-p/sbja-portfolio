"use client";
import React, { ReactElement, useEffect, useState } from "react";
import styles from "@/styles/css/common/VideoPlayer.module.css";
import Button from "./Button";
import { FaPlay, FaPause } from "react-icons/fa6";

const MOBILE_FILE_NAME = "-m.";

interface VideoPlayerProps {
  src?: string;
  index?: number;
}

const VideoPlayer = (props: VideoPlayerProps): ReactElement => {
  const isMobileVideo = props.src?.includes(MOBILE_FILE_NAME);
  const [isHover, setIsHover] = useState<boolean>(false);
  const [isPlaying, setIsPlaying] = useState<boolean>(
    props.index === 0 ? true : false
  );

  function togglePlay() {
    const video = document.querySelector(
      `.portfolio-video-${props.index}`
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
        className={`portfolio-video-${props.index} ${styles.video_content}`}
        autoPlay={isPlaying}
        playsInline
        preload="metadata"
        style={{
          display: "block",
          pointerEvents: "none",
          width: isMobileVideo ? "30%" : "100%",
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
