import React from "react";
import { motion } from "framer-motion";
import { FaGithub, FaExternalLinkAlt, FaReact } from "react-icons/fa";
import {
  SiExpress,
  SiMongodb,
  SiTailwindcss,
  SiChakraui,
  SiChartdotjs,
  SiSass,
  SiRedux,
  SiReduxsaga,
  SiCss3,
} from "react-icons/si";
import pennywise from "../assets/project1image.png";
import cryptoCreek from "../assets/project2image.png";
import urbanCart from "../assets/project3image.png";

const Projects = () => {
  const projects = [
    {
      id: 1,
      name: "Pennywise",
      description:
        "PennyWise is an intuitive expense tracking application designed to help you take control of your finances. With a clean and user-friendly interface, PennyWise enables you to effortlessly log your expenses, track your income, and monitor your savings, this app provides a clear breakdown",
      image: pennywise,
      tools: [
        { name: "React", icon: FaReact },
        { name: "Node.js", icon: FaReact },
        { name: "Express", icon: SiExpress },
        { name: "MongoDB", icon: SiMongodb },
        { name: "Tailwind", icon: SiTailwindcss },
      ],
      liveLink: "https://pennywise-newfrontend.onrender.com/",
      githubLink: "https://github.com/code-it-vro/pennywise-frontend",
      direction: "left",
    },
    {
      id: 2,
      name: "Crypto Creek",
      description:
        "Crypto Creek is a platform for real-time coin insights, interactive price charts, and a curated selection of top crypto exchanges. Powered by React and Chakra UI, experience seamless navigation and visual analytics using Chart.js.",
      image: cryptoCreek,
      tools: [
        { name: "React", icon: FaReact },
        { name: "Chart.js", icon: SiChartdotjs },
        { name: "Chakra UI", icon: SiChakraui },
        { name: "SCSS", icon: SiSass },
      ],
      liveLink: "https://crypto-creek.netlify.app/",
      githubLink: "https://github.com/code-it-vro/Crypto-creek",
      direction: "right",
    },
    {
      id: 3,
      name: "Urban Cart",
      description:
        "Urban Cart is a single-page shopping demo designed to highlight the power of Redux Toolkit for state management. The app allows you to browse items, add them to your cart, adjust item quantities, and see real-time updates to the total item count and payable amount—all without reloading the page.",
      image: urbanCart,
      tools: [
        { name: "React", icon: FaReact },
        { name: "Redux", icon: SiRedux },
        { name: "Redux Toolkit", icon: SiReduxsaga },
        { name: "CSS", icon: SiCss3 },
      ],
      liveLink: "https://myurban-cart.netlify.app/",
      githubLink: "https://github.com/code-it-vro/Urban-Cart",
      direction: "left",
    },
  ];

  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.3,
      },
    },
  };

  const slideVariants = {
    hidden: (direction) => ({
      x: direction === "left" ? -100 : 100,
      opacity: 0,
    }),
    visible: {
      x: 0,
      opacity: 1,
      transition: {
        duration: 0.8,
        ease: "easeOut",
      },
    },
  };

return (
  <section
    id="projects"
    className="py-20 bg-gradient-to-b from-gray-100 to-white min-h-screen"
  >
    <div className="container mx-auto px-4">
      <h2 className="text-4xl md:text-5xl font-bold text-center mb-16">
        Featured Projects
      </h2>

      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: false, amount: 0.2 }}
        className="space-y-12"
      >
        {projects.map((project) => (
          <motion.div
            key={project.id}
            custom={project.direction}
            variants={slideVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false, amount: 0.3 }}
            className="mx-auto max-w-full lg:max-w-[90%] bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 overflow-hidden"
          >
            <div
              className={`flex flex-col ${
                project.direction === "right"
                  ? "md:flex-row-reverse"
                  : "md:flex-row"
              }`}
            >
             
              {/* Project Image Container with Frame */}
              <div className="md:w-1/2 h-[250px] md:h-auto relative flex items-center">
                <div className="absolute inset-0 bg-white"></div>
                <div className="relative h-full w-full">
                  <img
                    src={project.image}
                    alt={project.name}
                    className="w-full h-full object-cover filter grayscale transition-transform duration-300 hover:grayscale-0 p-3 rounded-xl"
                  />
                </div>
              </div>

              {/* Project Info */}
              <div className="md:w-1/2 p-6 md:p-8 bg-white">
                <h3 className="text-2xl font-bold mb-4 text-gray-800">
                  {project.name}
                </h3>

                <p className="text-gray-600 mb-6 leading-relaxed">
                  {project.description}
                </p>

                {/* Tools Used */}
                <div className="grid grid-cols-2 md:grid-cols-3 gap-3 mb-8">
                  {project.tools.map((tool, index) => (
                    <div
                      key={index}
                      className="flex items-center w-full p-3 bg-gray-50 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300"
                    >
                      <tool.icon className="w-6 h-6 mr-3" />
                      <span className="font-semibold text-gray-800">
                        {tool.name}
                      </span>
                    </div>
                  ))}
                </div>

                {/* Links */}
                <div className="flex space-x-4">
                  <a
                    href={project.liveLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center space-x-2 px-4 py-2 bg-black text-white rounded-lg hover:bg-gray-800 transition-all duration-300 hover:transform hover:scale-105 hover:shadow-lg"
                  >
                    <FaExternalLinkAlt className="text-sm" />
                    <span>Live Demo</span>
                  </a>
                  <a
                    href={project.githubLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center space-x-2 px-4 py-2 bg-gray-800 text-white rounded-lg hover:bg-gray-700 transition-all duration-300 hover:transform hover:scale-105 hover:shadow-lg"
                  >
                    <FaGithub className="text-lg" />
                    <span>GitHub</span>
                  </a>
                </div>
              </div>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </div>
  </section>
);
};

export default Projects;
