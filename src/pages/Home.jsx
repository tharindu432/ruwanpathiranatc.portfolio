"use client";
import React from "react";
import { motion } from "framer-motion";
import { IoLogoLinkedin, IoLogoTwitter } from "react-icons/io5";
import { BiLogoGmail } from "react-icons/bi";
import { BsGithub, BsWhatsapp } from "react-icons/bs";
import { TypeAnimation } from "react-type-animation";

export default function Home() {
  return (
    <div className="min-h-screen" id="home">
      {/* Navigation Bar
      <header className="py-6 px-4 sm:px-10 lg:px-28 flex justify-between items-center">
        <div className="text-2xl font-bold">TR</div>
        <nav className="flex space-x-6">
          <a href="#about" className="hover:font-medium">About</a>
          <a href="#skills" className="hover:font-medium">Skills</a>
          <a href="#experience" className="hover:font-medium">Experience</a>
          <a href="#projects" className="hover:font-medium">Projects</a>
          <a href="#contact" className="hover:font-medium">Contact</a>
        </nav>
        <a 
          href="/resume" 
          className="border-2 border-black px-4 py-2 flex items-center space-x-2 hover:bg-black hover:text-white transition-colors"
        >
          Resume
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
            <path fillRule="evenodd" d="M3 17a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm3.293-7.707a1 1 0 011.414 0L9 10.586V3a1 1 0 112 0v7.586l1.293-1.293a1 1 0 111.414 1.414l-3 3a1 1 0 01-1.414 0l-3-3a1 1 0 010-1.414z" clipRule="evenodd" />
          </svg>
        </a>
      </header> */}

      <div className="flex flex-col-reverse lg:flex-row justify-between items-center px-5 sm:px-10 lg:px-28 py-10 gap-10 max-w-screen-xl mx-auto">
        {/* Left Side */}
        <motion.div
          className="w-full lg:w-[50%]"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
        >
          <div className="text-2xl sm:text-3xl lg:text-5xl flex flex-col gap-2 sm:gap-3 lg:gap-5">
            <motion.h2>
              <TypeAnimation
                sequence={[
                  "I am Tharindu\nRuwanpathirana", // Line break
                  2000,
                ]}
                wrapper="span"
                speed={50}
                repeat={Infinity}
                className="font-semibold whitespace-pre-line block"
              />
            </motion.h2>

            <motion.h2>
              <span className="font-extrabold">Software</span>{" "}
              <span
                className="text-white font-extrabold"
                style={{ WebkitTextStroke: "1px black" }}
              >
                Engineer
              </span>
            </motion.h2>

            <motion.h2>
              Based In <span className="font-extrabold">Sri Lanka.</span>
            </motion.h2>
          </div>

          <motion.p
            className="text-[#71717A] text-sm sm:text-base mt-5"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
          >
            Focused and highly motivated Software Engineer with industrial
            experience in Full stack software development. I'm capable of
            learning and adapting to new technologies quickly. Also, a good team
            player.
          </motion.p>

          <motion.div
            className="flex items-center flex-wrap gap-4 mt-8 sm:mt-10"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8 }}
          >
            {[
              { Icon: BiLogoGmail, link: "mailto:ruwanpathiranatc@gmail.com" },
              {
                Icon: IoLogoLinkedin,
                link: "https://www.linkedin.com/in/tharinduruwanpathirana",
              },
              { Icon: BsGithub, link: "https://github.com/tharindu432" },
              { Icon: BsWhatsapp, link: "https://wa.me/94764492334" },
              { Icon: IoLogoTwitter, link: "https://twitter.com/Chathuranga_RP" },
            ].map(({ Icon, link }, index) => (
              <motion.a
                key={index}
                href={link}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white p-2 sm:p-3 rounded-none border-2 border-black"
                whileHover={{ scale: 1.1, backgroundColor: "#000", color: "#fff" }}
                whileTap={{ scale: 0.9 }}
              >
                <Icon className="w-4 h-4 sm:w-5 sm:h-5" />
              </motion.a>
            ))}
          </motion.div>
        </motion.div>

        {/* Right Side - Tech Icons Animation */}
        <motion.div
          className="w-full lg:w-[50%] relative flex items-center justify-center h-[300px] sm:h-[400px] lg:h-[500px]"
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
        >
          {/* Terminal Box */}
          <motion.div
            className="bg-black text-white border border-white shadow-xl p-3 sm:p-4 rounded-md w-64 sm:w-80 text-xs sm:text-sm font-mono z-20 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.5, duration: 1 }}
          >
            <div className="text-green-400 font-bold">_ Terminal</div>
            <p className="text-white">npm run dev</p>
            <p className="text-white">Starting development server...</p>
            <p className="text-gray-400">✓ Compiled successfully!</p>
          </motion.div>

          {/* Tech Icons */}
          <motion.div 
            className="absolute top-0 right-0 opacity-70"
            animate={{ y: [0, -10, 0] }}
            transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
          >
            <div className="text-5xl font-bold">JS</div>
          </motion.div>

          <motion.img
            src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg"
            alt="Java"
            className="w-12 h-12 absolute top-10 left-10 grayscale"
            animate={{ y: [0, -15, 0] }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
          />

          <motion.img
            src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg"
            alt="React"
            className="w-16 h-16 absolute bottom-20 right-20 grayscale"
            animate={{ rotate: 360 }}
            transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
          />

          <motion.img
            src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg"
            alt="Node.js"
            className="w-14 h-14 absolute bottom-40 left-20 grayscale"
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
          />

          <motion.img
            src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg"
            alt="Docker"
            className="w-16 h-16 absolute bottom-10 right-10 grayscale"
            animate={{ y: [0, -10, 0] }}
            transition={{ duration: 3.5, repeat: Infinity, ease: "easeInOut" }}
          />

          <motion.svg 
            className="absolute bottom-10 left-40 w-10 h-10 grayscale"
            viewBox="0 0 24 24"
            animate={{ y: [0, 15, 0] }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
          >
            <path fill="currentColor" d="M12,1.85C11.73,1.85 11.45,1.92 11.22,2.05L3.78,6.35C3.3,6.63 3,7.15 3,7.71V16.29C3,16.85 3.3,17.37 3.78,17.65L5.73,18.77C6.68,19.23 7,19.24 7.44,19.24C8.84,19.24 9.65,18.39 9.65,16.91V8.44C9.65,8.32 9.55,8.22 9.43,8.22H8.5C8.37,8.22 8.27,8.32 8.27,8.44V16.91C8.27,17.57 7.59,18.22 6.5,17.67L4.45,16.5C4.38,16.45 4.34,16.37 4.34,16.29V7.71C4.34,7.62 4.38,7.54 4.45,7.5L11.89,3.21C11.95,3.17 12.05,3.17 12.11,3.21L19.55,7.5C19.62,7.54 19.66,7.62 19.66,7.71V16.29C19.66,16.37 19.62,16.45 19.55,16.5L12.11,20.79C12.05,20.83 11.95,20.83 11.88,20.79L10,19.65C9.92,19.62 9.84,19.61 9.79,19.64C9.26,19.94 9.16,20 8.67,20.15C8.55,20.19 8.36,20.26 8.74,20.47L11.22,21.94C11.46,22.08 11.72,22.15 12,22.15C12.28,22.15 12.54,22.08 12.78,21.94L20.22,17.65C20.7,17.37 21,16.85 21,16.29V7.71C21,7.15 20.7,6.63 20.22,6.35L12.78,2.05C12.55,1.92 12.28,1.85 12,1.85M14,8C11.88,8 10.61,8.89 10.61,10.39C10.61,12 11.87,12.47 13.91,12.67C16.34,12.91 16.53,13.27 16.53,13.75C16.53,14.58 15.86,14.93 14.3,14.93C12.32,14.93 11.9,14.44 11.75,13.46C11.73,13.36 11.64,13.28 11.53,13.28H10.57C10.45,13.28 10.36,13.37 10.36,13.5C10.36,14.74 11.04,16.24 14.3,16.24C16.65,16.24 18,15.31 18,13.69C18,12.08 16.92,11.66 14.63,11.35C12.32,11.05 12.09,10.89 12.09,10.35C12.09,9.9 12.29,9.3 14,9.3C15.5,9.3 16.09,9.63 16.32,10.66C16.34,10.76 16.43,10.83 16.53,10.83H17.5C17.55,10.83 17.61,10.81 17.65,10.76C17.69,10.72 17.72,10.66 17.7,10.6C17.56,8.82 16.38,8 14,8Z" />
          </motion.svg>

          <motion.img
            src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg"
            alt="MongoDB"
            className="w-12 h-12 absolute top-40 right-30 grayscale"
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 4.5, repeat: Infinity, ease: "easeInOut" }}
          />
          
          <motion.div
            animate={{ rotate: 360 }}
            transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
            className="absolute right-40 top-36 w-12 h-12 opacity-70"
          >
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
              <path d="M11.5,1L2,6V8H21V6M16,10V17H19V10M2,22H21V19H2M10,10V17H13V10M4,10V17H7V10H4Z" />
            </svg>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
}