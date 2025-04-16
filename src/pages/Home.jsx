import React from "react";
import { motion } from "framer-motion";
import { IoLogoLinkedin, IoLogoTwitter } from "react-icons/io5";
import { BiLogoGmail } from "react-icons/bi";
import { BsGithub, BsWhatsapp } from "react-icons/bs";
import { TypeAnimation } from "react-type-animation";

export default function Home() {
  return (
    <div className="mt-20" id="home">
      <div className="flex flex-col-reverse lg:flex-row justify-between items-center px-5 sm:px-10 lg:px-28 py-10 gap-10">

        {/* Left Content */}
        <motion.div
          className="w-full lg:w-[50%]"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, ease: "easeInOut" }}
        >
          <motion.div
            className="text-2xl sm:text-3xl lg:text-5xl flex flex-col gap-2 sm:gap-3 lg:gap-5 text-nowrap"
            initial="hidden"
            animate="visible"
            variants={{
              hidden: { opacity: 0, y: 20 },
              visible: {
                opacity: 1,
                y: 0,
                transition: { staggerChildren: 0.2, ease: "easeInOut" },
              },
            }}
          >
            <motion.h2 variants={{ hidden: { opacity: 0, y: 10 }, visible: { opacity: 1, y: 0 } }}>
              Hello,{" "}
              <TypeAnimation
                sequence={["I am Tharindu Ruwanpathirana", 1000]}
                speed={10}
                style={{ fontWeight: 600 }}
                repeat={Infinity}
              />
            </motion.h2>
            <motion.h2 variants={{ hidden: { opacity: 0, y: 10 }, visible: { opacity: 1, y: 0 } }}>
              <span className="font-extrabold">Software</span>{" "}
              <span
                className="text-white font-extrabold"
                style={{ WebkitTextStroke: "1px black" }}
              >
                Engineer
              </span>
            </motion.h2>
            <motion.h2 variants={{ hidden: { opacity: 0, y: 10 }, visible: { opacity: 1, y: 0 } }}>
              Based In <span className="font-extrabold">Sri Lanka.</span>
            </motion.h2>
          </motion.div>

          <motion.p
            className="text-[#71717A] text-sm sm:text-base mt-5"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 1 }}
          >
            Focused and highly motivated Software Engineer with industrial
            experience in Full stack software development. I’m capable of
            learning and adapting to new technologies quickly. Also, a good team
            player.
          </motion.p>

          <motion.div
            className="flex items-center flex-wrap gap-4 mt-8 sm:mt-10"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8, duration: 1 }}
          >
            {[
              { Icon: BiLogoGmail, link: "mailto:ruwanpathiranatc@gmail.com" },
              { Icon: IoLogoLinkedin, link: "https://www.linkedin.com/in/tharinduruwanpathirana" },
              { Icon: BsGithub, link: "https://github.com/tharindu432" },
              { Icon: BsWhatsapp, link: "https://wa.me/94764492334" },
              { Icon: IoLogoTwitter, link: "https://twitter.com/Chathuranga_RP" },
            ].map(({ Icon, link }, index) => (
              <motion.a
                key={index}
                href={link}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white p-2 sm:p-3 rounded border-2 border-black"
                whileHover={{ scale: 1.1, backgroundColor: "#000", color: "#fff" }}
                whileTap={{ scale: 0.9 }}
              >
                <Icon className="w-4 h-4 sm:w-5 sm:h-5" />
              </motion.a>
            ))}
          </motion.div>
        </motion.div>

        {/* Right Animation */}
        <motion.div
          className="w-full lg:w-[50%] relative flex items-center justify-center h-[300px] sm:h-[400px] lg:h-[500px]"
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
        >
          {/* Floating icons */}
          {[
            {
              src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg",
              alt: "Java",
              style: { top: "10%", left: "10%" },
              float: [0, -20, 0],
            },
            {
              src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg",
              alt: "JavaScript",
              style: { top: "15%", right: "15%" },
              float: [0, 15, 0],
            },
            {
              src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
              alt: "React",
              style: { bottom: "15%", left: "5%" },
              float: [0, 20, 0],
            },
            {
              src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg",
              alt: "Next.js",
              style: { top: "50%", left: "50%", transform: "translate(-50%, -50%)" },
              float: [0, -15, 0],
            },
            {
              src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg",
              alt: "Node.js",
              style: { bottom: "15%", right: "10%" },
              float: [0, 20, 0],
            },
            {
              src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/spring/spring-original.svg",
              alt: "Spring Boot",
              style: { top: "65%", left: "10%" },
              float: [0, -15, 0],
            },
            {
              src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg",
              alt: "Docker",
              style: { bottom: "10%", right: "5%" },
              float: [0, 15, 0],
            },
          ].map((icon, index) => (
            <motion.img
              key={index}
              src={icon.src}
              alt={icon.alt}
              className="w-10 h-10 sm:w-12 sm:h-12 grayscale contrast-200 drop-shadow-xl"
              style={{ position: "absolute", ...icon.style }}
              animate={{ y: icon.float }}
              transition={{ duration: 4 + index, repeat: Infinity, ease: "easeInOut" }}
            />
          ))}

          {/* Terminal Box */}
          <motion.div
            className="bg-black text-white border border-white shadow-xl p-3 sm:p-4 rounded-md w-64 sm:w-80 text-xs sm:text-sm font-mono z-10"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.5, duration: 1 }}
          >
            <div className="text-green-400 font-bold">_ Terminal</div>
            <p className="text-white">npm run dev</p>
            <p className="text-white">Starting development server...</p>
            <p className="text-gray-400">✔ Compiled successfully!</p>
          </motion.div>
        </motion.div>

      </div>
    </div>
  );
}
