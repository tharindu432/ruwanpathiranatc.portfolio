import React from 'react';
import { TbExternalLink } from "react-icons/tb";
import { motion } from 'framer-motion';

const projects = [
  {
    id: 1,
    title: "Finance MIS Dashboard - Internship Project",
    description: "Developed and maintained a Finance MIS application for WSO2 LLC, enhancing UI with React.js, Redux, and Material UI. Optimized backend performance with MySQL and Ballerina, and migrated GraphQL services to REST APIs.",
    image: "/assets/finance.webp",
  },
  {
    id: 2,
    title: "Advanced Employee Management System - Individual Project",
    description: "Created an advanced employee management system with features like employee onboarding, performance tracking, Attendence Tracking and role-based access control. Built with MERN Stack and deployed on AWS.",
    image: "/assets/ems.png", 
    link: "https://github.com/tharindu432/EMS", 
  },
  {
    id: 3,
    title: "Banking Application - Individual Project",
    description: "Developed a secure banking application using Spring Boot, React.js, and AWS. Features include account management, transaction tracking, and role-based access control.",
    image: "/assets/banking.png", 
    link: "https://github.com/tharindu432/LKBank", 
  },
  {
    id: 4,
    title: "Twitter Clone - Individual Project",
    description: "Developed a full-stack Twitter Clone with features like user authentication, post creation, commenting, liking, and profile management. Integrated React Query for efficient data fetching and state management.Built with MERN Stack.",
    image: "/assets/twitter-clone.png", 
    link: "https://github.com/tharindu432/twitter-clone", 
  },
  {
    id: 5,
    title: "E-Commerce Microservices Application - Individual Project",
    description: "Designed an event-driven microservices architecture using Spring Boot and Apache Kafka. Implemented Kafka producers and consumers for scalable and reliable inter-service communication.",
    image: "/assets/microservice.svg", 
    link: "https://github.com/tharindu432/E-Commerce-with-Microservice", 
  },
  {
    id: 6,
    title: "Supermarket Management System",
    description: "Built a Spring Boot application with modules for user management, product handling, cart management, and order processing. Implemented JWT authentication and designed RESTful APIs for efficient data handling.",
    image: "/assets/supermarket.svg", 
    link: "https://github.com/tharindu432/SuperMarketApp", 
  },
 
];

export default function Projects() {
  return (
    <div className="bg-black px-5 lg:px-28 py-8 my-8 lg:py-16 lg:my-16" id="projects">
      <h2 className="text-2xl lg:text-4xl text-center text-white">
        My <span className="font-extrabold">Projects</span>
      </h2>

      <div className="lg:mt-16 mt-8 lg:space-y-16 space-y-8 lg:pb-6 pb-3">
        {projects.map((project, index) => (
          <motion.div
            key={project.id}
            className={`flex justify-between items-center flex-col ${index % 2 === 0 ? "lg:flex-row" : "lg:flex-row-reverse"}`}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ type: "spring", stiffness: 80, damping: 10, delay: index * 0.2 }}
            viewport={{ once: true }}
          >
            <div className="lg:w-[500px] w-full rounded-2xl overflow-hidden">
              <img
                className="w-full h-full hover:scale-105 transition-all duration-500 cursor-pointer object-cover"
                src={project.image}
                alt={project.title}
              />
            </div>

            <div className="lg:w-1/2 lg:space-y-6 space-y-4">
              <h2 className="font-extrabold text-white mt-5 lg:mt-0 text-3xl lg:text-5xl">
                {String(project.id).padStart(2, "0")}
              </h2>
              <p className="font-bold text-white text-xl lg:text-3xl">{project.title}</p>

              <p className="font-light text-sm/6 lg:text-base text-[#71717A]">
                {project.description}
              </p>
              <a href={project.link} className="text-white mt-3 block" target="_blank" rel="noopener noreferrer">
                <TbExternalLink size={23} />
              </a>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
