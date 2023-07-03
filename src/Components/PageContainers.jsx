
import AboutMe from './pages/AboutMe';
import Contact from './pages/Contact';
import Home from './pages/Home';
import Portfolio from './pages/Portfolio';
import Resume from './pages/Resume';

const PageContainers = ({ currentPage }) => {
  return (
    <div className="slider-pages-container relative">
      {/* home */}
      <div
        id="home"
        className={`pt-page ${
          currentPage === "home" ?  "page-active": 'page-remove'
        } min-h-screen`}
      >
        <Home />
      </div>
      {/* about me */}
      <div
        id="about"
        className={`pt-page ${
          currentPage === "about" ?  "page-active": 'page-remove'
        }  min-h-screen`}
      >
        <AboutMe />
      </div>
      {/* resume */}
      <div
        id="resume"
        className={`pt-page ${
          currentPage === "resume" ?  "page-active": 'page-remove'
        } min-h-screen `}
      >
        <Resume />
      </div>
      {/* resume */}
      <div
        id="resume"
        className={`pt-page ${
          currentPage === "portfolio" ?  "page-active": 'page-remove'
        }  min-h-screen`}
      >
        <Portfolio />
      </div>
      {/* resume */}
      <div
        id="resume"
        className={`pt-page ${
          currentPage === "contact" ?  "page-active": 'page-remove'
        } min-h-screen `}
      >
        <Contact />
      </div>
    </div>
  );
};

export default PageContainers;