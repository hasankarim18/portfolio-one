
import { useLocation } from 'react-router-dom';
import Transitions from './Transitions';


const Home = () => {
    const location = useLocation();
    return (
      <>
        <div
          key={location.pathname}         
        >
          Home page from pages
        </div>
        <Transitions />
      </>
    );
};

export default Home;