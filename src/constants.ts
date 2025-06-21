import { createContext } from "react";

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
      { id: 2, title: "Course Overview" },
      { id: 3, title: "Course Overview (0 Question • 10 Minutes)" },
      { id: 4, title: "Course Exercise / Reference Files" },
      { id: 5, title: "Code Editor Installation (Optional if you have one)" },
      { id: 6, title: "Embedding PHP in HTML" }
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
  }
];

export type AppContextType = {
  videoIndex: number;
  setVideoIndex: React.Dispatch<React.SetStateAction<number>>;
  setProgressBarPercentage: React.Dispatch<React.SetStateAction<number>>;
  progressBarPercentage: number;
};

export const AppContext = createContext<AppContextType | null>(null);
