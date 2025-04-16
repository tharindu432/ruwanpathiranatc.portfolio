import React from "react";
import { motion } from "framer-motion";
import { IoLogoLinkedin, IoLogoTwitter } from "react-icons/io5";
import { BiLogoGmail } from "react-icons/bi";
import { BsGithub, BsWhatsapp } from "react-icons/bs";
import { TypeAnimation } from "react-type-animation";

export default function Home() {
  return (
    <div className="mt-10 md:mt-20 px-4 sm:px-6 lg:px-28" id="home">
      <div className="flex flex-col-reverse lg:flex-row items-center justify-between gap-10 py-10">

        {/* Text Content */}
        <motion.div
          className="w-full lg:w-1/2"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, ease: "easeInOut" }}
        >
          <motion.div
            className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl flex flex-col gap-3 lg:gap-5 break-words"
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
              Hello,&nbsp;
              <TypeAnimation
                sequence={["I am Tharindu Ruwanpathirana", 2000]}
                speed={20}
                repeat={Infinity}
                style={{ fontWeight: 600 }}
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
            className="text-[#71717A] text-sm sm:text-base mt-5 leading-relaxed"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 1 }}
          >
            Focused and highly motivated Software Engineer with industrial
            experience in Full stack software development. I’m capable of
            learning and adapting to new technologies quickly. Also, a good team
            player.
          </motion.p>

          {/* Social Icons */}
          <motion.div
            className="flex flex-wrap items-center gap-4 mt-8 lg:mt-10"
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
                className="bg-white p-2 rounded-full border-2 border-black hover:bg-black hover:text-white transition-all"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
              >
                <Icon className="w-5 h-5" />
              </motion.a>
            ))}
          </motion.div>
        </motion.div>

        {/* Image */}
        <motion.div
          className="w-full lg:w-1/2 flex justify-center"
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, ease: "easeInOut" }}
        >
          <img
            className="w-48 sm:w-60 md:w-72 lg:w-4/5 h-auto max-h-[450px] lg:max-h-[550px] object-contain"
            src="/assets/hero-vector.svg"
            alt="Hero Vector"
          />
        </motion.div>
      </div>
    </div>
  );
}
