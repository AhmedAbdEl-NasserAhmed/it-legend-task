import { useContext } from "react";
import "./VideoPlayer.css";

import ReactPlayer from "react-player";
import { AppContext, learningVideos } from "../../constants";

const VideoPlayer = () => {
  const context = useContext(AppContext);

  if (!context) return null;

  const { videoIndex, setVideoIndex } = context;

  if (videoIndex === learningVideos.length)
    return <h2>Congratulations 🥳🥳 you have finished Course Videos</h2>;

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
