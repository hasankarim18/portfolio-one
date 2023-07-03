
import { useLocation } from "react-router-dom";
import TextSpan from "../utils/TextSpan";
import ParticlesEl from "../utils/ParticlesEl";
import { Typewriter } from "react-simple-typewriter";


const Home = () => {
  const location = useLocation();

  const myName = "Hasan Mahbub-ul Karim".split("");

  const words = ['Web Developer', 'Mern Stack Developer', 'WordPress Developer']
  

  return (
    <>
      {/* <AnimatedCursor /> */}

      <div
        className="text-white bg-black min-h-screen relative"
        key={location.pathname}
      >
        <div className="absolute z-10">
          <ParticlesEl className="" />
        </div>
        <div className="flex justify-center items-center min-h-screen relative z-20">
          <div>
            <h1 className="text-center text-5xl text-white md:text-4xl mb-8">
              {myName.map((letter, i) => {
                return (
                  <TextSpan
                    className="inline-block hover:text-paste cursor-pointer tracking-widest text-2xl md:text-5xl"
                    key={i}
                  >
                    {letter}
                  </TextSpan>
                );
              })}
            </h1>
            <p className="text-center text-2xl">
              I am{" "}
              <span className="text-paste">
                <Typewriter cursor={true} loop words={words} />
              </span>
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
