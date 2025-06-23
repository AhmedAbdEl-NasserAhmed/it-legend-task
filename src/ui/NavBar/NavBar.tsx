import { ChevronRight } from "lucide-react";
import "./NavBar.css";

const NavBar = () => {
  return (
    <nav id="nav" className="nav">
      <div>
        <p>
          Home{" "}
          <span className="chevron-right">
            <ChevronRight />
          </span>
        </p>
        <p>
          Courses{" "}
          <span className="chevron-right">
            <ChevronRight />
          </span>
        </p>
        <p>
          <strong>Course Details</strong>
        </p>
      </div>
      <h2 className="heading-web">Starting SEO as your Home</h2>
      <h2 className="heading-mobile">
        Starting SEO as your Home Based Business
      </h2>
    </nav>
  );
};

export default NavBar;
