import { createContext } from "react";

import {
  Clock,
  FileText,
  Globe,
  GraduationCap,
  Library,
  MailQuestionMark,
  MessageCircleMore,
  User
} from "lucide-react";

export const learningVideos = [
  "https://www.youtube.com/watch?v=5MgBikgcWnY", // JavaScript Tutorial for Beginners
  "https://www.youtube.com/watch?v=2Ji-clqUYnA", // Node.js Tutorial
  "https://www.youtube.com/watch?v=PkZNo7MFNFg", // Git and GitHub Tutorial
  "https://www.youtube.com/watch?v=fBNz5xF-Kx4" // MongoDB Tutorial
];

export const learningWeeksProgess = [
  {
    id: 1,
    header: "Week 1-4",
    description:
      "Advanced story telling techniques for writers: Personas, Characters & Plots",
    content: [
      { id: 1, title: "Introduction" },
      {
        id: 2,
        title: "Course Overview (0 Question • 10 Minutes)",
        pdfLink:
          "https://raw.githubusercontent.com/pcottle/learnGitBranching/master/book/learnGitBranching.pdf"
      },
      { id: 3, title: "Course Exercise / Reference Files" },
      { id: 4, title: "Code Editor Installation (Optional if you have one)" },
      { id: 5, title: "Embedding PHP in HTML" }
    ]
  },
  {
    id: 2,
    header: "Week 5-8",
    description:
      "Advanced story telling techniques for writers: Personas, Characters & Plots",
    content: [
      { id: 1, title: "Defining Functions" },
      { id: 2, title: "Function Parameters" },
      {
        id: 3,
        title: "Return Values From Functions (2 Question • 15 Minutes)"
      },
      { id: 4, title: "Global Variable and Scope" },
      { id: 5, title: "Newer Way of creating a Constant" },
      { id: 6, title: "Constants" }
    ]
  },
  {
    id: 3,
    header: "Week 8-12",
    description:
      "Advanced story telling techniques for writers: Personas, Characters & Plots",
    content: [
      { id: 1, title: "Understanding Function Declarations" },
      { id: 2, title: "Working with Function Arguments" },
      {
        id: 3,
        title: "Exploring Return Statements (2 Questions • 15 Minutes)"
      },
      { id: 4, title: "Scope & Global Variables Explained" },
      { id: 5, title: "Modern Practices for Declaring Constants" },
      { id: 6, title: "Exam" }
    ]
  }
];

export const courseMaterials = [
  { id: 1, info: "Duration", title: "3 weeks", icon: <Clock /> },
  { id: 2, info: "Lessons", title: "8", icon: <Library /> },
  { id: 3, info: "Enrolled", title: "65 students", icon: <User /> },
  { id: 4, info: "Language", title: "English", icon: <Globe /> }
];

export type AppContextType = {
  videoIndex: number;
  setVideoIndex: React.Dispatch<React.SetStateAction<number>>;
  setProgressBarPercentage: React.Dispatch<React.SetStateAction<number>>;
  progressBarPercentage: number;
  setComments: React.Dispatch<
    React.SetStateAction<
      {
        id: string;
        img: string;
        name: string;
        date: string;
        description: string;
      }[]
    >
  >;
  comments: {
    id: string;
    img: string;
    name: string;
    date: string;
    description: string;
  }[];
};

export type ModalContextType = {
  open: boolean;
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
};

export const AppContext = createContext<AppContextType | null>(null);

export const ModalContext = createContext<ModalContextType | null>(null);

export const mainIcons = [
  {
    icon: <GraduationCap />,
    onClick: () => {},
    label: "Graduation"
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
