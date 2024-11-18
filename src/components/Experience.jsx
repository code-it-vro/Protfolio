import React from "react";
import { motion } from "framer-motion";
import {
  FaGithub,
  FaNodeJs,
  FaReact,
  FaDocker,
  FaJenkins,
  FaHtml5,
} from "react-icons/fa";
import { SiExpress, SiAnsible } from "react-icons/si";
import { SiTcs } from "react-icons/si";

const Experience = () => {
  const fadeInUp = {
    initial: { opacity: 0, y: 20 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true },
    transition: { duration: 0.6 },
  };

  const slideInLeft = {
    initial: { opacity: 0, x: -100 },
    whileInView: { opacity: 1, x: 0 },
    viewport: { once: true },
    transition: { duration: 0.8, type: "spring", bounce: 0.4 },
  };

  const slideInRight = {
    initial: { opacity: 0, x: 100 },
    whileInView: { opacity: 1, x: 0 },
    viewport: { once: true },
    transition: { duration: 0.8, type: "spring", bounce: 0.4 },
  };

  const technologies = {
    devOps: [
      { name: "Git/GitHub", icon: FaGithub },
      { name: "Jenkins", icon: FaJenkins },
      { name: "Ansible", icon: SiAnsible },
      { name: "Docker", icon: FaDocker },
    ],
    backend: [
      { name: "Node.js", icon: FaNodeJs },
      { name: "Express.js", icon: SiExpress },
    ],
    frontend: [
      { name: "React", icon: FaReact },
      { name: "Git/GitHub", icon: FaGithub },
      { name: "HTML", icon: FaHtml5 },
    ],
  };

  return (
    <section id="experience" className="py-20 bg-white">
      <div className="max-w-5xl mx-auto px-4">
        <div className="space-y-12">
          {/* Title */}
          <motion.h2
            {...fadeInUp}
            className="text-4xl md:text-5xl font-bold text-center mb-16"
          >
            Experience & Education
          </motion.h2>

          {/* Company Header */}
          <motion.div {...fadeInUp} className="text-center mb-16">
            <div className="flex flex-col items-center gap-4">
              <h3 className="text-2xl md:text-3xl font-bold">
                Tata Consultancy Services
              </h3>
              <SiTcs className="text-6xl text-gray-800" />
            </div>
            <p className="text-gray-600 mt-2">December 2023 – Present</p>
          </motion.div>

          {/* Timeline */}
          <div className="relative">
            {/* Timeline line */}
            <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 w-0.5 h-full bg-black"></div>

            {/* DevOps Role - Left */}
            <motion.div {...slideInLeft} className="relative mb-16 md:mb-24">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="md:text-right md:pr-16">
                  <h4 className="text-xl font-bold mb-2">DevOps</h4>
                  <p className="text-gray-600 mb-4">January - May</p>
                  <div className="bg-gray-50 p-6 rounded-lg shadow-md">
                    <ul className="space-y-3 text-gray-700 md:text-right">
                      <li>Worked with tools like:</li>
                      <li className="flex flex-wrap gap-2 md:justify-end">
                        {technologies.devOps.map((tech) => (
                          <span
                            key={tech.name}
                            className="inline-flex items-center px-3 py-1 bg-black text-white rounded-full text-sm"
                          >
                            <tech.icon className="mr-1" />
                            {tech.name}
                          </span>
                        ))}
                      </li>
                      <li>
                        Contributed to automation pipelines, version control
                        workflows, and infrastructure management.
                      </li>
                      <li>
                        Gained expertise in CI/CD processes and containerization
                        strategies.
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="hidden md:block"></div>
              </div>
            </motion.div>

            {/* Backend Role - Right */}
            <motion.div {...slideInRight} className="relative mb-16 md:mb-24">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="hidden md:block"></div>
                <div className="md:pl-16">
                  <h4 className="text-xl font-bold mb-2">Backend</h4>
                  <p className="text-gray-600 mb-4">May - July</p>
                  <div className="bg-gray-50 p-6 rounded-lg shadow-md">
                    <ul className="space-y-3 text-gray-700">
                      <li>Developed RESTful APIs using:</li>
                      <li className="flex flex-wrap gap-2">
                        {technologies.backend.map((tech) => (
                          <span
                            key={tech.name}
                            className="inline-flex items-center px-3 py-1 bg-black text-white rounded-full text-sm"
                          >
                            <tech.icon className="mr-1" />
                            {tech.name}
                          </span>
                        ))}
                      </li>
                      <li>
                        Focused on designing scalable server-side logic,
                        maintaining API's and optimizing application
                        architecture to streamline efficiency
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Frontend Role - Left */}
            <motion.div {...slideInLeft} className="relative">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="md:text-right md:pr-16">
                  <h4 className="text-xl font-bold mb-2">Frontend</h4>
                  <p className="text-gray-600 mb-4">July - Present</p>
                  <div className="bg-gray-50 p-6 rounded-lg shadow-md">
                    <ul className="space-y-3 text-gray-700 md:text-right">
                      <li>Focus on managing state and logic using:</li>
                      <li className="flex flex-wrap gap-2 md:justify-end">
                        {technologies.frontend.map((tech) => (
                          <span
                            key={tech.name}
                            className="inline-flex items-center px-3 py-1 bg-black text-white rounded-full text-sm"
                          >
                            <tech.icon className="mr-1" />
                            {tech.name}
                          </span>
                        ))}
                      </li>
                      <li>
                        Developed strong collaboration skills while working with
                        cross-functional teams to enhance application
                        performance and ensure seamless user experiences.
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="hidden md:block"></div>
              </div>
            </motion.div>

            {/* Education Section - Right */}
            <motion.div
              {...slideInRight}
              className="relative mb-16 md:mb-24 mt-16"
            >
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="hidden md:block"></div>
                <div className="md:pl-16">
                  <h4 className="text-xl font-bold mb-2">Education</h4>
                  <p className="text-gray-600 mb-4">
                    August 2019 – September 2023
                  </p>
                  <div className="bg-gray-50 p-6 rounded-lg shadow-md">
                    <ul className="space-y-3 text-gray-700">
                      <li>
                        <strong>
                          Graduated with a Bachelor's in Technology (B.Tech)
                        </strong>
                      </li>
                      <li>
                        College: Shri Ramswaroop College of Engineering and
                        Management, Lucknow
                      </li>
                      <li>
                        Affiliated with: AKTU (Dr. A.P.J. Abdul Kalam Technical
                        University)
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
