import "./CourseInfo.css";

import ProgressBar from "../../components/ProgressBar/ProgressBar";
import Card from "../../components/Card/Card";
import { learningWeeksProgess } from "../../constants";
import CommentsSection from "../CommentsSection/CommentsSection";

const CourseInfo = () => {
  return (
    <div className="course-info">
      <h2 className="course-info__heading">Topics for This Course</h2>
      <ProgressBar />
      <div id="curriculm" className="cards-container">
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
      <CommentsSection className="comments-section-mob" />
    </div>
  );
};

export default CourseInfo;
