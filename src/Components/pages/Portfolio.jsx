
import { FaLaptopCode } from "react-icons/fa";
import { useLocation } from "react-router-dom";

const Portfolio = () => {
    const location = useLocation();
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
          
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
