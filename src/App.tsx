import "./App.css";
import CourseInfo from "./ui/CourseInfo/CourseInfo";
import CourseOverview from "./ui/CourseOverview/CourseOverview";

import NavBar from "./ui/NavBar/NavBar";

function App() {
  return (
    <>
      <NavBar />
      <div className="container">
        <main className="main-content">
          <CourseOverview />
          <CourseInfo />
        </main>
      </div>
    </>
  );
}

export default App;
