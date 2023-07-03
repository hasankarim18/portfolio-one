import './SkillBar.css'

const TalkShape = ({children, className}) => {
    return (
      <div className={`talk ${className}`}>
        {" "}
        <div className="talkbubble">{children}</div>
      </div>
    );
};

export default TalkShape;