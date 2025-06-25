import { useState } from "react";
import "./App.css";
import { AppContext, type AppContextType } from "./constants";
import CourseInfo from "./ui/CourseInfo/CourseInfo";
import CourseOverview from "./ui/CourseOverview/CourseOverview";
import NavBar from "./ui/NavBar/NavBar";
import Modal from "./components/Modal/Modal";

function App() {
  const [videoIndex, setVideoIndex] = useState<number>(0);

  const [progressBarPercentage, setProgressBarPercentage] = useState<number>(0);

  const [comments, setComments] = useState(() => {
    const stored = sessionStorage.getItem("comments");
    return stored ? JSON.parse(stored) : [];
  });

  const contextValue: AppContextType = {
    videoIndex,
    setVideoIndex,
    progressBarPercentage,
    setProgressBarPercentage,
    comments,
    setComments
  };

  return (
    <>
      <AppContext.Provider value={contextValue}>
        <Modal>
          <NavBar />
          <div className="container">
            <main className="main-content">
              <CourseOverview />
              <CourseInfo />
            </main>
          </div>
        </Modal>
      </AppContext.Provider>
    </>
  );
}

export default App;
