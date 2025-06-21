import "./Card.css";

import { FileText, LockKeyhole } from "lucide-react";

const Card = ({
  header,
  description,
  content
}: {
  header: string;
  description: string;
  content: { id: number; title: string }[];
}) => {
  return (
    <div className="card">
      <h1>{header}</h1>
      <p>{description}</p>
      {content.map((item) => {
        return (
          <div key={item.id}>
            <div>
              <FileText />
              <h2>{item.title}</h2>
            </div>
            <LockKeyhole />
          </div>
        );
      })}
    </div>
  );
};

export default Card;
