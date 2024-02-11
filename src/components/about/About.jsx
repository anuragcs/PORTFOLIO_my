import { useRef } from "react";
import "./about.scss";
import { motion, useInView } from "framer-motion";

const variants = {
  initial: {
    x: -500,
    y: 100,
    opacity: 0,
  },
  animate: {
    x: 0,
    opacity: 1,
    y: 0,
    transition: {
      duration: 1,
      staggerChildren: 0.1,
    },
  },
};

const About = () => {
  const ref = useRef();

  const isInView = useInView(ref, { margin: "-100px" });

  return (
    <motion.div
      className="about"
      variants={variants}
      initial="initial"
      // animate="animate"
      // whileInView="animate"
      ref={ref}
      animate={"animate"}
    >
      <motion.div className="textContainer" variants={variants}>
       
      </motion.div>
      <motion.div className="titleContainer" variants={variants}>
        <div className="title">
         
        </div>
        <div className="title">
          <h1>
            <motion.b whileHover={{color: "orange"}}>ABOUT</motion.b> myself.
          </h1>
          <button>"KNOW ME MORE!"</button>
        </div>
      </motion.div>
      <motion.div className="listContainer" variants={variants}>
        <motion.div
          className="box"
          whileHover={{ background: "orange", color: "black" }}
        >
          <h2>Intro...</h2>
          <p><b>
          I am pre-final year undergraduate pursuing my bachelor's degree in Information Technology. I am proficient in data structures and algorithm, also well versed in backend and frontend development. I am constantly leveling up my skills by solving and competing on Leetcode and Codeforces. One of my major interests is in the field of Machine learning.
          </b></p>
          {/* <button>Go</button> */}
        </motion.div>
        <motion.div
          className="box"
          whileHover={{ background: "orange", color: "black" }}
        >
          <h2>Programming Languages</h2>
          <p>
            C++</p><p> Java </p> <p> Python</p> <p> Javascript
          </p>
          
        </motion.div>
        <motion.div
          className="box"
          whileHover={{ background: "orange", color: "black" }}
        >
          <h2>Experience</h2>
          <p>
          2021-2022 =
IEEE BPIT Technical Member  </p><p>
2022 =
Volunteer in #include-code</p><p>
2023 =
Reached till last round of Vihaan 6.0 DTU hacakathon
</p>
         
          
        </motion.div>
        <motion.div
          className="box"
          whileHover={{ background: "orange", color: "black" }}
        >
          <h2>Development</h2>
          <p>
            Frontend - ReactJs </p>
            <p>
            Backend - NodeJs using Express</p>
            <p>
            Database - MongoDB    
          </p>
        
        </motion.div>
        <motion.div
          className="box"
          whileHover={{ background: "orange", color: "black" }}
        >
          <h2>Education</h2>
          <p>
          <b>2021-2025</b> = Btech in <u>INFORMATION TECHNOLOGY</u> from
Bhagan Parshuram Insitute of Technology *<b>CGPA - 8.4*</b> </p><p>
<b>2021</b> = 89% in Class 12 Boards</p>
<p>
2019 = 95.4% in Class 10 Boards
          </p>
         
        </motion.div>
      </motion.div>
    </motion.div>
  );
};

export default About;
