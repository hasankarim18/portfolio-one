
import { FaEnvelope, FaPhone } from 'react-icons/fa';
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
          <div>
            <div className="bg-gray-100 min-h-screen py-8">
              <div className="max-w-2xl mx-auto px-4">
                <h1 className="text-3xl font-bold text-center mb-8">
                  Contact Us
                </h1>

                <div className="bg-white p-6 rounded-lg shadow-md mb-8">
                  <h2 className="text-xl font-semibold mb-4">
                    Contact Information
                  </h2>
                  <div className="flex mb-4">
                    <div className="w-8 h-8 mr-4">
                     <FaEnvelope className="text-3xl" />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold">Email</h3>
                      <p>hasankarim884@gmail.com</p>
                    </div>
                  </div>
                  <div className="flex mb-4">
                    <div className="w-8 h-8 mr-4">
                      <FaPhone className="text-3xl" />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold">Phone</h3>
                      <p>(+88) 01712697467</p>
                    </div>
                  </div>
                  <div className="flex">
                    <div className="w-8 h-8 mr-4">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8"
                        />
                      </svg>
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold">Address</h3>
                      <p>Dhaka, Bangladesh</p>
                    </div>
                  </div>
                </div>

                <div className="bg-white p-6 rounded-lg shadow-md">
                  <h2 className="text-xl font-semibold mb-4">
                    Send us a message
                  </h2>
                  <form>
                    <div className="mb-4">
                      <label
                        className="block text-gray-700 text-sm font-bold mb-2"
                        htmlFor="name"
                      >
                        Name
                      </label>
                      <input
                        className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        id="name"
                        type="text"
                        placeholder="Enter your name"
                      />
                    </div>
                    <div className="mb-4">
                      <label
                        className="block text-gray-700 text-sm font-bold mb-2"
                        htmlFor="email"
                      >
                        Email
                      </label>
                      <input
                        className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        id="email"
                        type="email"
                        placeholder="Enter your email"
                      />
                    </div>
                    <div className="mb-4">
                      <label
                        className="block text-gray-700 text-sm font-bold mb-2"
                        htmlFor="message"
                      >
                        Message
                      </label>
                      <textarea
                        className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        id="message"
                        rows="4"
                        placeholder="Enter your message"
                      ></textarea>
                    </div>
                    <div className="flex justify-end">
                      <button
                        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                        type="submit"
                      >
                        Send
                      </button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
};

export default Contact;