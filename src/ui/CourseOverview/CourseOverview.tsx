import "./CourseOverview.css";

import VideoPlayer from "../../components/VideoPlayer/VideoPlayer";
import MainIcons from "../../components/MainIcons/MainIcons";
import CourseMaterials from "../CourseMaterials/CourseMaterials";
import CommentsSection from "../CommentsSection/CommentsSection";

const CourseOverview = () => {
  return (
    <div className="course-overview">
      <VideoPlayer />
      <MainIcons />
      <CourseMaterials />
      <CommentsSection className="comments-section-screen" />
    </div>
  );
};

export default CourseOverview;
