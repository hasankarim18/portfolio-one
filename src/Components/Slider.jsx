import  { useState } from "react";
import "./Slider.css"
import Controls from "./Controls";
import PageContainers from "./PageContainers";


const Slider = () => {
  const [currentPage, setCurrentPage] = useState("home");

  const handleMenuClick = (page) => {
    setCurrentPage(page);
  };

  return (
    <div className="slider-container">
      <div className="drawer">
        <input id="my-drawer" type="checkbox" className="drawer-toggle" />
        <div className="drawer-content relative z-10">
          {/* Page content here */}
          <div className="text-right blcok md:hidden">
            <label
              htmlFor="my-drawer"
              className="btn btn-primary drawer-button"
            >
              Open drawer
            </label>
          </div>
          <div className="flex relative z-10">
            <div className="hidden md:block w-60 relative z-10  h-screen text-white  ">
              <Controls
                currentPage={currentPage}
                handleMenuClick={handleMenuClick}
              />
            </div>
            <div className="w-full relative z-0">
              <PageContainers currentPage={currentPage} />
            </div>
          </div>
        </div>
        {/*  */}
        <div className="drawer-side z-20">
          <label htmlFor="my-drawer" className="drawer-overlay bg-black text-white "></label>
          <ul className=" w-60 p-0 h-full text-inherit ">           
            <Controls
              currentPage={currentPage}
              handleMenuClick={handleMenuClick}
            />
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Slider;
