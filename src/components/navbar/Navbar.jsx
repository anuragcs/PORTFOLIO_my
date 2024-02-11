import Sidebar from "../sidebar/Sidebar";
import "./navbar.scss";
import { motion } from "framer-motion";

const Navbar = () => {
  return (
    <div className="navbar">
      {/* Sidebar */}
      <Sidebar/>
      <div className="wrapper">
        <motion.span
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
        >
          Get. Set. Code.
        </motion.span>
        <div className="social">
          <a href="https://www.linkedin.com/in/anurag-gupta-686391167/" target="blank">
            <img src="/linkedin.jpg" alt="" />
          </a>
          <a href="https://leetcode.com/anurag_chaos/" target="blank">
            <img src="/leetocde.png" alt="" />
          </a>
          <a href="https://www.instagram.com/anuraggstrange/" target="blank">
            <img src="/instagram.png" alt="" />
          </a>
          
        </div>
      </div>
    </div>
  );
};

export default Navbar;
