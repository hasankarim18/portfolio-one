import { useState } from "react";
import { FaLaptopCode } from "react-icons/fa";
import { useLocation } from "react-router-dom";
import BasicModal from "../utils/BasicModal";
import PortFolioDetails from "../utils/PortFolioDetails";

const portFolioList = [
  {
    id: 1,
    title: "Linguacampa",
    theme: "Foreign language learning platform",
    points: [
      "A Language Training web app where students can buy their courses and instructor can sell their courses online",
      "A firebase based authentication system, students and instructors can sign up using manually or social media. And an admin can make any one instructor or admin",
      "Data are fetched using TanStack Query and update in the UI in real time without reloading.",
    ],
    technologies: [
      "HTML",
      "CSS",
      "JavaScript",
      "React",
      "MongoDb",
      "Express",
      "Node",
    ],
    image: "/images/site-1.png",
    live: "https://linguacampa.web.app/",
  },
  {
    id: 2,
    title: "Action Pals",
    theme: "An ecommerce web app for toys.",
    points: [
      "This e-commerce web app allows sellers to sell their toys, and visitors can seamlessly browse and can have easy purchasing experience.",
      "A user-friendly registration system with firebase for both sellers and customers, which will enable them to easily create accounts.",
      "Visually engaging product displays, and secure payment gateways, with striperesulting in enhanced user engagement and increased sales.",
    ],
    technologies: [
      "HTML",
      "CSS",
      "JavaScript",
      "React",
      "MongoDb",
      "Express",
      "Node",
    ],
    image: "/images/site-2.png",
    live: "https://actionpals-aa2f0.web.app/",
  },
  {
    id: 3,
    title: "SpiceNirvana",
    theme: "Explore a world of delectable recipes of expert chefs.",
    points: [
      "A web app which offers diverse collection of Indian recipes of famous chefs",
      "A user-friendly registration system with firebase. A lifetime membership plan is available with stripe payment for premium recipes.",
      "A community-driven blog section is available, where users can submit their own recipes, engage in discussions, with other premium member.",
    ],
    technologies: [
      "HTML",
      "CSS",
      "JavaScript",
      "React",
      "MongoDb",
      "Express",
      "Node",
    ],
    image: "/images/site-3.png",
    live: "https://spicenirvana-f6fb2.web.app/",
  },
];

const Portfolio = () => {

  const [open, setOpen] = useState(false)

  const location = useLocation();

  const handleOpen = ()=> {
    setOpen(true)
  }
  const handleClose = ()=> {
    setOpen(false)
  }

  return (
    <div key={location.pathname} className="h-screen bg-white">
      <div className="p-8">
        <div
          style={{
            borderBottom: "1px dotted #00A3E1",
          }}
          className="flex justify-between items-center "
        >
          <h2 className="text-3xl text-paste font-bold">Portfolio</h2>
          <div className="text-paste text-2xl">
            <FaLaptopCode />
          </div>
        </div>
        {/* body */}
        <div className="mt-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {portFolioList.map((item) => {
              return (
                <div
                  key={item.id}
                  className="card card-compact w-full bg-base-100 shadow-xl"
                >
                  <div
                    style={{
                      backgroundImage: `url(${item.image})`,
                    }}
                    className="h-60 relative overflow-hidden cursor-pointer portfolio_image"
                  >
                    {/* <img
                      className="absolute top-0 left-0  w-full hover:bottom-0 transition-all duration-1000"
                      src={item.image}
                      alt="Shoes"
                    /> */}
                  </div>

                  <div className="card-body">
                    <h2 className="card-title">{item.title}</h2>
                    <p>{item.theme}</p>
                    <div className="card-actions justify-between">
                      <a
                        rel="noreferrer"
                        target="_blank"
                        href={item.live}
                        className="bg-red-400 text-white py-2 px-4 rounded-xl border-red-400 border-2 hover:bg-transparent hover:text-red-400 transition-all duration-500"
                      >
                        Live Link
                      </a>
                      <button 
                       onClick={handleOpen}
                       className="bg-paste text-white py-2 px-4 rounded-xl border-paste border-2 hover:bg-transparent hover:text-paste transition-all duration-500">
                        View Details
                      </button>
                      {/* modal body */}
                      <BasicModal open={open} handleClose={handleClose}  > 
                          <PortFolioDetails item={item} />
                      </BasicModal>
                      {/* modal body */}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
