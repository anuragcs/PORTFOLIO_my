import "./hero.scss";
import { motion } from "framer-motion";

const textVariants = {
  initial: {
    x: -500,
    opacity: 0,
  },
  animate: {
    x: 0,
    opacity: 1,
    transition: {
      duration: 1,
      staggerChildren: 0.1,
    },
  },
  scrollButton: {
    opacity: 0,
    y: 10,
    transition: {
      duration: 2,
      repeat: Infinity,
    },
  },
};
const sliderVariants = {
  initial: {
    x: 0,
  },
  animate: {
    x: "-220%",
    transition: {
      repeat: Infinity,
      repeatType:"mirror",
      duration: 20,
    },
  },
};

const Hero = () => {
  return (
    <div className="hero">
      <div className="wrapper">
        <motion.div
          className="textContainer"
          variants={textVariants}
          initial="initial"
          animate="animate"
        >
          <div className="mainContainer">
          <motion.h2 variants={textVariants}>Anurag Gupta</motion.h2>
          </div>
          <motion.h1 variants={textVariants}>
           Developer & Coder 🧑‍💻
          </motion.h1>
          <motion.div variants={textVariants} className="buttons">
          <motion.button variants={textVariants}>
              Developer
            </motion.button>
            <motion.button variants={textVariants}>Coder</motion.button>
            <motion.button variants={textVariants}>
              ML Enthusiast
            </motion.button>
          </motion.div>
          <motion.img
            variants={textVariants}
            animate="scrollButton"
            src="/scroll.png"
            alt=""
          />
        </motion.div>
      </div>
      <motion.div
        className="slidingTextContainer"
        variants={sliderVariants}
        initial="initial"
        animate="animate"
      >
        Undergraduate
      </motion.div>
     
    </div>
  );
};

export default Hero;
