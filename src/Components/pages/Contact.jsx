
import { FaEnvelope } from 'react-icons/fa';
import { useLocation } from 'react-router-dom';


const Contact = () => {
    const location = useLocation();
    return (
      <div key={location.pathname} className="min-h-screen bg-black">
        <div className="p-8">
          <div
            style={{
              borderBottom: "1px dotted #00A3E1",
            }}
            className="flex justify-between items-center "
          >
            <h2 className="text-3xl text-paste font-bold">Contact</h2>
            <div className="text-paste text-2xl">
              <FaEnvelope />
            </div>
          </div>
          {/* body */}
          
        </div>
      </div>
    );
};

export default Contact;