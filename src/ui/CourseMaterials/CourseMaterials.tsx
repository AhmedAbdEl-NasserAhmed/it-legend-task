import { courseMaterials } from "../../constants";
import "./CourseMaterials.css";

const CourseMaterials = () => {
  return (
    <div className="course-materials__container">
      <h1>Course Materials</h1>
      <div className="course-materials">
        {courseMaterials.map((material, index) => {
          return (
            <div key={material.id} className="course-materials__info">
              <div>
                <div className="course-materials__info-container">
                  <div>{material.icon}</div>
                  <div>{material.info}</div>
                </div>
                <p>{material.title}</p>
              </div>

              {index !== courseMaterials.length - 1 && (
                <span className="seperator"></span>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default CourseMaterials;
