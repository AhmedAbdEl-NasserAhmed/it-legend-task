import "./CourseInfo.css";

import ProgressBar from "../../components/ProgressBar/ProgressBar";

const CourseInfo = () => {
  return (
    <div className="course-info">
      <h2 className="course-info__heading">Topics for This Course</h2>
      <ProgressBar />
    </div>
  );
};

export default CourseInfo;
