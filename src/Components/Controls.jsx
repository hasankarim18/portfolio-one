/* eslint-disable react/prop-types */
import {
  FaHome,
  FaUserAlt,
  FaRegListAlt,
  FaLaptopCode,
  FaEnvelope,
  FaFacebookSquare,
  FaTwitterSquare,
  FaGithub,
} from "react-icons/fa";


const Controls = ({ currentPage, handleMenuClick }) => {
  return (
    <div className="slider-menu flex flex-col justify-top bg-matBlack  h-screen">
      <div>
        <div className="relative">
          <img src="/images/hasankarim.png" alt="" />
          <h2 className="text-xl bg-paste tracking-widest font-bold text-white  text-center w-full absolute bottom-0 left-0 p-2 bg-opacity-50">
            Hasan Mahbub
          </h2>
        </div>
        <ul className="p-2  control-menu  ">
          <li
            className={`cursor-pointer menu-item control_menu_item ${
              currentPage === "home" ? "active" : ""
            }`}
          >
            <a
              onClick={() => handleMenuClick("home")}
              className=""
              href="#home"
            >
              <span>
                <FaHome />
              </span>
              Home
            </a>
          </li>
          {/* about */}
          <li
            className={` cursor-pointer menu-item control_menu_item ${
              currentPage === "about" ? "active" : ""
            }`}
          >
            <a
              onClick={() => handleMenuClick("about")}
              className=""
              href="#about"
            >
              <span>
                <FaUserAlt />
              </span>{" "}
              About Me
            </a>
          </li>
          {/* resume */}
          <li
            className={` cursor-pointer menu-item control_menu_item ${
              currentPage === "resume" ? "active" : ""
            }`}
          >
            <a
              onClick={() => handleMenuClick("resume")}
              className=""
              href="#resume"
            >
              <span>
                <FaRegListAlt />
              </span>
              Resume
            </a>
          </li>
          {/* portfolio */}
          <li
            className={` cursor-pointer menu-item control_menu_item ${
              currentPage === "portfolio" ? "active" : ""
            }`}
          >
            <a
              onClick={() => handleMenuClick("portfolio")}
              className=""
              href="#portfolio"
            >
              <span>
                <FaLaptopCode />
              </span>
              Portfolio
            </a>
          </li>
          {/* contact */}
          <li
            className={` cursor-pointer menu-item control_menu_item ${
              currentPage === "contact" ? "active" : ""
            }`}
          >
            <a
              onClick={() => handleMenuClick("contact")}
              className=""
              href="#contact"
            >
              <span>
                <FaEnvelope />
              </span>
              Contact
            </a>
          </li>
        </ul>
        <div className="mt-8 ml-4">
          <a
            rel="noreferrer"
            target="_blank"
            href="https://drive.google.com/uc?export=download&id=1CmjLQtNfxobjpTb5eFShzByYKHXwhkiM"
            className="py-2 px-4 duration-500 hover:bg-paste hover:text-white transition-all border-2 text-paste border-paste "
          >
            Download Resume
          </a>
        </div>
        <ul className="ml-4 mt-8 flex gap-2 social">
          <li>
            <a
              rel="noreferrer"
              target="_blank"
              href="https://web.facebook.com/hasan.m.ulkarim/"
              className="text-white hover:text-paste"
            >
              <FaFacebookSquare />
            </a>
          </li>
          <li>
            <a
              rel="noreferrer"
              target="_blank"
              href="https://twitter.com/hallysust_hasan"
              className="text-white"
            >
              <FaTwitterSquare className="text-white hover:text-paste" />
            </a>
          </li>
          <li>
            <a
              rel="noreferrer"
              target="_blank"
              href="https://github.com/hasankarim18"
              className="text-white"
            >
              <FaGithub className="text-white hover:text-paste" />
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Controls;