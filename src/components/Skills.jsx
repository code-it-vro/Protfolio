import React from "react";
import { motion } from "framer-motion";
import { SiGnubash } from "react-icons/si";
import {
  FaHtml5,
  FaCss3Alt,
  FaSass,
  FaBootstrap,
  FaReact,
  FaGitAlt,
  FaGithub,
  FaDocker,
  FaFigma,
  FaAws,
  FaJenkins,
} from "react-icons/fa";
import {
  SiJavascript,
  SiNextdotjs,
  SiTypescript,
  SiCplusplus,
  SiRedux,
  SiVite,
  SiExpress,
  SiMongodb,
  SiFirebase,
  SiAppwrite,
  SiVisualstudiocode,
  SiPostman,
  SiNetlify,
  SiVercel,
  SiRender,
  SiTailwindcss,
} from "react-icons/si";

const Skills = () => {
  // Define skills data with categories
  const skillsData = {
    "Languages & Core Skills": [
      { name: "HTML", icon: FaHtml5 },
      { name: "CSS", icon: FaCss3Alt },
      { name: "JavaScript", icon: SiJavascript },
      { name: "TypeScript", icon: SiTypescript },
      { name: "C++", icon: SiCplusplus },
      { name: "Bash", icon: SiGnubash },
    ],
    "Frameworks & Libraries": [
      { name: "React.js", icon: FaReact },
      { name: "Next.js", icon: SiNextdotjs },
      { name: "Redux", icon: SiRedux },
      { name: "Tailwind CSS", icon: SiTailwindcss },
      { name: "Bootstrap", icon: FaBootstrap },
      { name: "SASS", icon: FaSass },
      { name: "Vite", icon: SiVite },
      { name: "Express.js", icon: SiExpress },
    ],
    "Tools & Services": [
      { name: "MongoDB", icon: SiMongodb },
      { name: "Firebase", icon: SiFirebase },
      { name: "Appwrite", icon: SiAppwrite },
      { name: "VS Code", icon: SiVisualstudiocode },
      { name: "Git", icon: FaGitAlt },
      { name: "GitHub", icon: FaGithub },
      { name: "Figma", icon: FaFigma },
      { name: "Postman", icon: SiPostman },
      { name: "Docker", icon: FaDocker },
      { name: "AWS", icon: FaAws },
      { name: "Netlify", icon: SiNetlify },
      { name: "Vercel", icon: SiVercel },
      { name: "Render", icon: SiRender },
      { name: "Jenkins", icon: FaJenkins },
    ],
  };

  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: (index) => ({
      x: index % 2 === 0 ? -50 : 50,
      opacity: 0,
    }),
    visible: {
      x: 0,
      opacity: 1,
      transition: {
        duration: 0.5,
        ease: "easeOut",
      },
    },
  };

  return (
    <section className="py-20 bg-white min-h-screen" id="skills">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-16">
          Skills & Tools
        </h2>

        {Object.entries(skillsData).map(([category, skills]) => (
          <div key={category} className="mb-16">
            <h3 className="text-2xl font-semibold mb-8 text-center">
              {category}
            </h3>
            <motion.div
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: false, amount: 0.2 }}
              className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 md:gap-4 justify-items-center max-w-[90%] lg:max-w-[80%] mx-auto"
            >
              {skills.map((skill, index) => (
                <motion.div
                  key={skill.name}
                  custom={index}
                  variants={itemVariants}
                  className="flex items-center w-full max-w-[180px] p-3 bg-gray-50 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300"
                >
                  <skill.icon className="w-6 h-6 mr-3" />
                  <span className="font-medium">{skill.name}</span>
                </motion.div>
              ))}
            </motion.div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;
