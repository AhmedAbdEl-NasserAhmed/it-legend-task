import { useState } from "react";
import "./App.css";
import CourseInfo from "./ui/CourseInfo/CourseInfo";
import CourseOverview from "./ui/CourseOverview/CourseOverview";
import NavBar from "./ui/NavBar/NavBar";
import { AppContext, type AppContextType } from "./constants";

function App() {
  const [videoIndex, setVideoIndex] = useState<number>(0);

  const [progressBarPercentage, setProgressBarPercentage] = useState<number>(0);

  const contextValue: AppContextType = {
    videoIndex,
    setVideoIndex,
    progressBarPercentage,
    setProgressBarPercentage
  };

  return (
    <>
      <AppContext.Provider value={contextValue}>
        <NavBar />
        <div className="container">
          <main className="main-content">
            <CourseOverview />
            <CourseInfo />
          </main>
        </div>
      </AppContext.Provider>
    </>
  );
}

export default App;
