
import { FaUserAlt } from "react-icons/fa";
import { useLocation } from "react-router-dom";


const AboutMe = () => {
    const location = useLocation()
  
  return (
    <div key={location.pathname} className="h-screen bg-white">
      <div className="p-8">
        <div
          style={{
            borderBottom: "1px dotted #00A3E1",
          }}
          className="flex justify-between items-center "
        >
          <h2 className="text-3xl text-paste font-bold">About Me</h2>
          <div className="text-paste text-2xl">
            <FaUserAlt />
          </div>
        </div>
        {/* body */}
        <div className="mt-8">
          <div className="grid grid-cols-1 md:grid-cols-[_3fr,_2fr]">
            <div>
              <h3 className="text-2xl font-semibold">
                Full Stack Web Developer
              </h3>
              <p className="mt-4 leading-7">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Animi,
                laudantium itaque similique laborum nulla inventore accusantium
                laboriosam. Consectetur quo, dolor atque, eos nostrum eius in,
                architecto reiciendis corrupti expedita vero. <br /> <br />
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Molestiae sunt accusantium, facere expedita quo magni, eum omnis
                porro atque vero, eveniet cupiditate soluta exercitationem rem
                fugit ipsam? Voluptatibus, voluptate iste. Lorem ipsum dolor sit
                amet consectetur adipisicing elit. Ab, sint quod? Quibusdam
                facilis labore, quas, distinctio perferendis consequuntur omnis
                enim sapiente culpa dolorum minima odio voluptas pariatur,
                corporis ullam reprehenderit!
              </p>
            </div>
            <div>
              <div className="pl-4">
                <h3 className="text-2xl font-semibold text-matBlack mb-4">
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

export default AboutMe;
