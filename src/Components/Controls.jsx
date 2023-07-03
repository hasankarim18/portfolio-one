/* eslint-disable react/prop-types */


const Controls = ({ currentPage, handleMenuClick }) => {
  return (
    <div className="slider-menu flex flex-col justify-top bg-black bg-opacity-60 p-4 h-screen">
      <div
        className={`cursor-pointer menu-item ${
          currentPage === "home" ? "active" : ""
        }`}
        onClick={() => handleMenuClick("home")}
      >
        <a href="#home">Home</a>
      </div>
      {/* about */}
      <div
        className={` cursor-pointer menu-item ${
          currentPage === "about" ? "active" : ""
        }`}
        onClick={() => handleMenuClick("about")}
      >
        <a href="#about">About Me</a>
      </div>
      <div
        className={` cursor-pointer menu-item ${
          currentPage === "resume" ? "active" : ""
        }`}
        onClick={() => handleMenuClick("resume")}
      >
        <a href="#resume"> Resume</a>
      </div>
    </div>
  );
};

export default Controls;