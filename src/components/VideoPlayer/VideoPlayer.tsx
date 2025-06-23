import { useContext, useEffect } from "react";
import "./VideoPlayer.css";

import ReactPlayer from "react-player";
import { AppContext, learningVideos } from "../../constants";

const VideoPlayer = () => {
  const context = useContext(AppContext);

  useEffect(() => {
    const videoElement = document.getElementById("video-player");
    const navBar = document.getElementById("nav");

    if (!videoElement || !navBar) return;

    let observer: IntersectionObserver | null;

    const handleResize = () => {
      if (observer) {
        observer.disconnect();
        observer = null;
      }

      if (window.innerWidth < 850) {
        observer = new IntersectionObserver(
          (entries) => {
            const entry = entries[0];
            if (entry.intersectionRatio === 0) {
              videoElement.style.position = "fixed";
              videoElement.style.top = "0px";
              videoElement.style.left = "0px";
            } else {
              videoElement.style.position = "static";
            }
          },
          {
            threshold: 0
          }
        );
        observer.observe(navBar);
      } else {
        videoElement.style.position = "static";
      }
    };

    handleResize();

    window.addEventListener("resize", handleResize);

    return () => {
      if (observer) {
        observer.disconnect();
      }
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  if (!context) return null;

  const { videoIndex, setVideoIndex } = context;

  if (videoIndex === learningVideos.length)
    return (
      <h2>
        Congratulations 🥳🥳 you have finished Course Videos
        <p>Now you can go to the exam</p>
      </h2>
    );

  return (
    <div id="video-player" className="video-player">
      <ReactPlayer
        className="react-player"
        playing={true}
        controls={true}
        width="100%"
        height="100%"
        url={learningVideos[videoIndex]}
        onEnded={() => setVideoIndex((index) => index + 1)}
      />
    </div>
  );
};

export default VideoPlayer;
