import { useContext, useEffect } from "react";
import { AppContext, learningVideos } from "../../constants";
import "./ProgressBar.css";
import { ChevronDown } from "lucide-react";

const ProgressBar = () => {
  const context = useContext(AppContext);

  const { videoIndex, progressBarPercentage, setProgressBarPercentage } =
    context!;

  useEffect(() => {
    setProgressBarPercentage((videoIndex / learningVideos.length) * 100);
  }, [videoIndex, setProgressBarPercentage]);

  return (
    <div className="progress-wrapper">
      <span
        style={{ width: progressBarPercentage + "%" }}
        className="progress-bar"
      >
        <span className="progress-bar__tooltip">
          <span className="progress-bar__tooltip-pointer">
            You
            <span>
              <ChevronDown className="chevron-down" />
            </span>
          </span>
          <p>{progressBarPercentage}%</p>
        </span>
      </span>
    </div>
  );
};

export default ProgressBar;
