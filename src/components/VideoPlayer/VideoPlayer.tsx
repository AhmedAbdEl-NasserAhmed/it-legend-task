import { useState } from "react";
import "./VideoPlayer.css";

import ReactPlayer from "react-player";
import { learningVideos } from "../../constants";

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
