import { FaRegListAlt } from "react-icons/fa";
import SkillBar from "../utils/SkillBar";
import { useLocation } from "react-router-dom";
import { useEffect, useState } from "react";


const Resume = () => {
  const [animateSkill, setAnimateSkill] = useState(false)
   const location = useLocation();

   const hash =location.hash
  

   useEffect(() => {  

     if(hash === '#resume'){
       setAnimateSkill(true);
     }else {
       setAnimateSkill(false);
     }
   
   }, [hash])
   


  return (
    <div key={location.pathname} className="min-h-screen bg-black">
      <div className="p-8">
        <div
          style={{
            borderBottom: "1px dotted #00A3E1",
          }}
          className="flex justify-between items-center "
        >
          <h2 className="text-3xl text-paste font-bold">Resume</h2>
          <div className="text-paste text-2xl">
            <FaRegListAlt />
          </div>
        </div>
        {/* body */}
        <div className="mt-8">
          <div className="grid grid-cols-1 md:grid-cols-[_3fr,_2fr]">
            <div>
              <h3 className="text-2xl font-semibold text-white">
                CAREER OBJECTIVES
              </h3>
              <p className="text-gray-300 mt-4">
                As a Front-end web developer, my aim is to create engaging and
                user-friendly web applications that will contribute to achieving
                business objectives. I thrive on expanding my skills, exploring
                new technologies, and transforming innovative ideas into
                reality.
              </p>

              <div className="mt-8">
                <SkillBar animateSkill={animateSkill} />
              </div>
            </div>
            <div className="text-gray-300">
              <div className="pl-4">
                <h3 className="text-2xl text-white font-semibold mb-4">
                  Personal Infromation
                </h3>
                <p className="mb-4">
                  <strong className="">
                    <span className="border-2 border-b-paste  border-transparent">
                      Name
                    </span>
                  </strong>
                  : Md. Hasan Mahbub-ul Karim
                </p>

                <p className="mb-4">
                  <strong className="">
                    <span className="border-2 border-b-paste  border-transparent">
                      Residence
                    </span>
                  </strong>
                  : Dhaka Bangladesh
                </p>
                <p className="mb-4">
                  <strong className="">
                    <span className="border-2 border-b-paste  border-transparent">
                      Email
                    </span>
                  </strong>
                  : hasankarim884@gmail.com
                </p>
                <p className="mb-4">
                  <strong className="">
                    <span className="border-2 border-b-paste  border-transparent">
                      Phone
                    </span>
                  </strong>
                  : +88 01712697467
                </p>
                <p className="mb-4">
                  <strong className="">
                    <span className="border-2 border-b-paste  border-transparent">
                      Freelance
                    </span>
                  </strong>
                  : Available
                </p>
                <div className="mt-8 flex justify-start items-center gap-4">
                  <a
                    rel="noreferrer"
                    target="_blank"
                    href="https://drive.google.com/file/d/1CmjLQtNfxobjpTb5eFShzByYKHXwhkiM/view?usp=sharing"
                    className="py-2 px-4 duration-500 hover:bg-paste hover:text-white transition-all border-2 text-paste border-paste "
                  >
                    View Resume
                  </a>
                  <a
                    rel="noreferrer"
                    target="_blank"
                    href="https://drive.google.com/uc?export=download&id=1CmjLQtNfxobjpTb5eFShzByYKHXwhkiM"
                    className="py-2 px-4 duration-500 hover:bg-paste hover:text-white transition-all border-2 text-paste border-paste "
                  >
                    Download Resume
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Resume;
