import { flip, offset, shift, useFloating } from "@floating-ui/react";
import "./MainIcons.css";

import {
  FileText,
  GraduationCap,
  MailQuestionMark,
  MessageCircleMore
} from "lucide-react";
import { useState } from "react";

const mainIcons = [
  {
    icon: <GraduationCap />,
    onClick: () => {},
    label: "Gradiation"
  },
  {
    icon: <MailQuestionMark />,
    onClick: () => {},
    label: "Ask a question"
  },
  {
    icon: <MessageCircleMore />,
    onClick: () => {
      const comments = document.getElementById("comments");
      comments?.scrollIntoView({ behavior: "smooth" });
    },
    label: "Comments"
  },
  {
    icon: <FileText />,
    onClick: () => {
      const curriculm = document.getElementById("curriculm");
      curriculm?.scrollIntoView({ behavior: "smooth" });
    },
    label: "Curriculum"
  }
];

const MainIcons = () => {
  const [activeIndex, setActiveIndex] = useState<number | null>();

  const { x, y, reference, floating, strategy } = useFloating({
    placement: "top",
    middleware: [offset(8), flip(), shift({ padding: 8 })]
  });

  return (
    <div className="main-icons">
      {mainIcons.map((icon, index) => {
        const isOpen = activeIndex === index;

        return (
          <button
            key={index}
            type="button"
            ref={reference}
            onClick={icon.onClick}
            onMouseEnter={() => setActiveIndex(index)}
            onMouseLeave={() => setActiveIndex(null)}
            style={{ position: "relative" }}
          >
            {icon.icon}

            {isOpen && (
              <span
                ref={floating}
                style={{
                  position: strategy,
                  top: y ?? 0,
                  left: x ?? 0,
                  background: "white",
                  boxShadow: "0 2px 10px rgba(0,0,0,0.2)",
                  padding: "6px 10px",
                  borderRadius: "4px",
                  fontSize: "0.75rem",
                  zIndex: 9999,
                  whiteSpace: "nowrap"
                }}
              >
                {icon.label || "Tooltip"}
              </span>
            )}
          </button>
        );
      })}
    </div>
  );
};

export default MainIcons;
