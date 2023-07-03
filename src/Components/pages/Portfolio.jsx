import { motion } from "framer-motion";
import { useLocation } from "react-router-dom";

const Portfolio = () => {
    const location = useLocation();
  return (
    <motion.div
      key={location.pathname}
      transition={{ duration: 0.75 }}
      initial={{ opacity: 0, y: "100vh" }}
      animate={{ opacity: 1, y: "0" }}
      exit={{ opacity: 0, y: "-100vh" }}
      className="h-screen bg-red-200"
    >
      Portfolio
    </motion.div>
  );
};

export default Portfolio;
