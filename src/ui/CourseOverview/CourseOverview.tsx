import "./CourseOverview.css";

import VideoPlayer from "../../components/VideoPlayer/VideoPlayer";
import MainIcons from "../../components/MainIcons/MainIcons";

const CourseOverview = () => {
  return (
    <div className="course-overview">
      <VideoPlayer />
      <MainIcons />
    </div>
  );
};

export default CourseOverview;
