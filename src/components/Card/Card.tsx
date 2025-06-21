import { useContext, useState } from "react";
import "./Card.css";

import { FileText, LockKeyhole, Minus } from "lucide-react";
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
  const [heightCollapse, setHeightCollapse] = useState<boolean>(false);

  const context = useContext(AppContext);

  const { videoIndex } = context!;

  return (
    <div className="card">
      <div className="card-title">
        <div className="card-header">
          <h3>{header}</h3>
          <Minus
            onClick={() => setHeightCollapse((prev) => !prev)}
            className="card-header__collapse"
          />
        </div>
        <p>{description}</p>
      </div>
      <div
        className="card-container"
        style={{
          height: heightCollapse ? "0" : "auto",
          marginTop: heightCollapse ? "0" : "25px"
        }}
      >
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
    </div>
  );
};

export default Card;
