import "./App.css";
import VideoPlayer from "./components/VideoPlayer";

import NavBar from "./ui/NavBar";

function App() {
  return (
    <>
      <NavBar />
      <div className="container">
        <main className="main-content">
          <VideoPlayer />
          <div>2</div>
        </main>
      </div>
    </>
  );
}

export default App;
