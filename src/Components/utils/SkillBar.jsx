
import './SkillBar.css'
import TalkShape from './TalkShape';

const SKILLS = [
  { type: "HTML", level: 99 },
  { type: "CSS", level: 98 },
  { type: "JavaScript", level: 70 },
  { type: "Tailwind", level: 98 },
  { type: "BootStrap", level: 90 },
  { type: "React.js", level: 70 },
  { type: "Wordpress", level: 50 },
  { type: "PHP", level: 50 },
];

const SkillBar = ({ animateSkill }) => {
  

    return (
      <div className="bar">
        <ul className="skills">
          {SKILLS.map((skill) => {
           
            let animateClass;
            if (animateSkill) {
              animateClass = `w-[${skill.level}%]`;
            } else {
              animateClass = `w-0`;
            }

            return (
              <li className="mb-8" key={skill.type}>
                <span className="text-paste">{skill.type}</span>
                <div className="w-full bg-white h-4 relative flex">
                  <div
                    // style={{width:`${skill.level}%`}}
                    className={`bg-paste transition-all delay-1000 duration-1000  relative  ${animateClass}`}
                  >
                    <TalkShape className="absolute -top-8 right-0 text-white">
                      {skill.level}%
                    
                    </TalkShape>
                  </div>
                  <div></div>
                </div>
              </li>
            );
          })}
        </ul>
      </div>
    );
};

export default SkillBar;