import "./CourseInfo.css";

import ProgressBar from "../../components/ProgressBar/ProgressBar";
import { learningWeeksProgess } from "../../constants";
import Card from "../../components/Card/Card";

const CourseInfo = () => {
  return (
    <div className="course-info">
      <h2 className="course-info__heading">Topics for This Course</h2>
      <ProgressBar />
      {learningWeeksProgess.map((week) => {
        return (
          <Card
            key={week.id}
            header={week.header}
            description={week.description}
            content={week.content}
          />
        );
      })}
    </div>
  );
};

export default CourseInfo;
