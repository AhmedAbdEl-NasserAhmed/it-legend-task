import { useContext } from "react";
import "./Card.css";

import { FileText, LockKeyhole } from "lucide-react";
import { AppContext, learningVideos } from "../../constants";

const Card = ({
  header,
  description,
  content
}: {
  header: string;
  description: string;
  content: { id: number; title: string; pdfLink?: string }[];
}) => {
  const context = useContext(AppContext);

  const { videoIndex } = context!;

  return (
    <div className="card">
      <div className="card-title">
        <h3>{header}</h3>
        <p>{description}</p>
      </div>
      {content.map((item, index) => {
        return (
          <>
            <div key={item.id} className="card-content">
              <div className="card-content__title">
                <FileText />
                {item.pdfLink ? (
                  <a
                    type="button"
                    target="_blank"
                    href={item.pdfLink}
                    rel="noopener noreferrer"
                  >
                    {item.title}
                  </a>
                ) : (
                  <p>{item.title}</p>
                )}
              </div>
              {videoIndex !== learningVideos.length && !item.pdfLink && (
                <LockKeyhole />
              )}
            </div>
            {index !== content.length - 1 && (
              <span className="seperator"></span>
            )}
          </>
        );
      })}
    </div>
  );
};

export default Card;
