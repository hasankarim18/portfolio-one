
import { useLocation } from "react-router-dom";


const AboutMe = () => {
    const location = useLocation()
  
  return (
    
    <div
      key={location.pathname}
      className="h-screen bg-purple-200"
    >
      About me From pages
      
    </div>
   
    
  );
};

export default AboutMe;
