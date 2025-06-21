import { useState } from "react";
import "./VideoPlayer.css";

import ReactPlayer from "react-player";

const learningVideos = [
  "https://www.youtube.com/watch?v=5MgBikgcWnY", // JavaScript Tutorial for Beginners
  "https://www.youtube.com/watch?v=2Ji-clqUYnA", // Node.js Tutorial
  "https://www.youtube.com/watch?v=PkZNo7MFNFg", // Git and GitHub Tutorial
  "https://www.youtube.com/watch?v=fBNz5xF-Kx4" // MongoDB Tutorial
];

const VideoPlayer = () => {
  const [videoIndex, setVideoIndex] = useState<number>(0);

  return (
    <div className="video-player">
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
