"use client";
import React, { ReactElement, useState } from "react";

interface VideoPlayerProps {
  src?: string;
}

const VideoPlayer = (props: VideoPlayerProps): ReactElement => {
  const [isPlaying, setIsPlaying] = useState<boolean>(false);

  function togglePlay() {
    const video = document.querySelector(
      ".portfolio-video"
    ) as HTMLVideoElement;

    if (video.paused || video.ended) {
      video.play();
    } else {
      video.pause();
    }

    setIsPlaying(!isPlaying);
  }

  return (
    <div onClick={togglePlay}>
      <video
        className="portfolio-video"
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
      <div>{isPlaying ? "play" : "stop"}</div>
    </div>
  );
};

export default VideoPlayer;
