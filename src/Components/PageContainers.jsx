
import AboutMe from './pages/AboutMe';
import Home from './pages/Home';
import Resume from './pages/Resume';

const PageContainers = ({ currentPage }) => {
  return (
    <div className="slider-pages-container relative">
        {/* home */}
      <div
        id="home"
        className={`pt-page ${
          currentPage === "home" && "page-active"
        } bg-green-200 min-h-screen`}
      >
        <Home />
      </div>
      {/* about me */}
      <div
        id="about"
        className={`pt-page ${
          currentPage === "about" && "page-active"
        }  bg-yellow-200 min-h-screen`}
      >
        <AboutMe />
      </div>
      {/* resume */}
      <div
        id="resume"
        className={`pt-page ${
          currentPage === "resume" && "page-active"
        }  bg-red-200 min-h-screen`}
      >
        <Resume />
      </div>
    </div>
  );
};

export default PageContainers;