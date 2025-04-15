import React from "react";
import { motion } from "framer-motion";

export default function About() {
  return (
    <div
      className="px-5 lg:px-28 flex justify-between flex-col lg:flex-row"
      id="about"
    >
      <motion.div
        className="lg:w-1/2"
        initial={{ opacity: 0, x: -50 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ type: "spring", stiffness: 80, damping: 10 }}
        viewport={{ once: true }}
      >
        <img
            className="mx-auto w-52 sm:w-64 md:w-72 lg:w-[80%] h-auto max-h-[500px]"
            src="/assets/hero-vector.svg"
            alt="Hero Vector"
          />
      </motion.div>
      <motion.div
        className="lg:w-1/2"
        initial={{ opacity: 0, x: 50 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ type: "spring", stiffness: 80, damping: 10, delay: 0.2 }}
        viewport={{ once: true }}
      >
        <h2 className="lg:text-4xl text-2xl mt-4 lg:mt-0">
          About <span className="font-extrabold">Me</span>
        </h2>
        <p className="text-[#71717A] text-sm/6 lg:text-base mt-5 lg:mt-10">
          I'm a passionate Software Engineer specializing in <b>React.js, Node.js
          & Springboot</b>. Feel free to follow me on **Linkedin** or check out my
          projects on **GitHub**. 
        </p>

        
        <motion.div
  className="bg-gray-100 p-4 rounded-lg mt-5 lg:mt-10"
  initial={{ opacity: 0, y: 20 }}
  whileInView={{ opacity: 1, y: 0 }}
  transition={{ type: "spring", stiffness: 80, damping: 10, delay: 0.3 }}
  viewport={{ once: true }}
>
  <div className="flex items-center gap-4">
    <img
      src="/assets/university-logo.png"
      alt="University Logo"
      className="w-12 h-12 lg:w-16 lg:h-16"
    />
    <div>
      <h3 className="text-lg lg:text-xl font-semibold text-black">
        BSc (Hons) in Information Technology
      </h3>
      <p className="text-sm lg:text-base text-[#71717A]">
        University of Moratuwa, Sri Lanka
      </p>
    </div>
  </div>
</motion.div>

        

        <div className="bg-gray-100 p-4 rounded-lg mt-5 lg:mt-10">
          <pre className="text-sm lg:text-base text-[#71717A] overflow-x-auto">
            <code>
              {`const tharindu = {
  education: "Bsc (Hons) in Information Technology - University of Moratuwa, Sri Lanka",
  experience: "Ex-Software Engineer Intern at WSO2",
  profession: "Software Engineer | Full Stack Developer",
  technologies: ["Javascript", "Java", "React Js", "Node Js", "Spring Boot", "Docker", "AWS"],
  research: "Digital Image Processing | AI & ML | Computer Vision",
  interests: ["Tech Innovation", "Problem Solving", "Building Scalable Systems"],
  funFact: "I write better code with coffee ☕"
};`}
            </code>
          </pre>
        </div> 

       
      </motion.div>
    </div>
    
  );
}
