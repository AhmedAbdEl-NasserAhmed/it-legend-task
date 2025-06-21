import "./CourseOverview.css";

import VideoPlayer from "../../components/VideoPlayer/VideoPlayer";
import MainIcons from "../../components/MainIcons/MainIcons";
import CourseMaterials from "../CourseMaterials/CourseMaterials";

const CourseOverview = () => {
  return (
    <div className="course-overview">
      <VideoPlayer />
      <MainIcons />
      <CourseMaterials />
    </div>
  );
};

export default CourseOverview;
