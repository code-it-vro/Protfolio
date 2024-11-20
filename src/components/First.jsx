import React from "react";
import { motion, useInView } from "framer-motion";
import { FaGithub, FaLinkedin, FaDiscord } from "react-icons/fa";
import { BsMouse } from "react-icons/bs";
import { SiLeetcode } from "react-icons/si";

const First = () => {
  const ref = React.useRef(null);
  const isInView = useInView(ref, {
    margin: "0px 0px -200px 0px",
    once: false,
    amount: 0.3,
  });

  const contentVariants = {
    hidden: {
      y: 100,
      opacity: 0,
    },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.8,
        ease: "easeOut",
      },
    },
  };

  const scrollPromptVariants = {
    initial: { y: 0 },
    animate: {
      y: [0, 10, 0],
      transition: {
        duration: 1.5,
        repeat: Infinity,
        ease: "easeInOut",
      },
    },
  };

  const socialVariants = {
    hidden: { x: 50, opacity: 0 },
    visible: {
      x: 0,
      opacity: 1,
      transition: {
        duration: 0.5,
        staggerChildren: 0.1,
      },
    },
  };

  return (
    <section
      ref={ref}
      className="relative min-h-screen bg-gray-50 flex items-center justify-center"
    >
      {/* Social Media Icons - Vertical */}
      <motion.div
        className="hidden md:flex flex-col fixed right-8 top-1/3 -translate-y-1/2 space-y-6 z-10"
        variants={socialVariants}
        initial="hidden"
        animate="visible"
      >
        <motion.a
          href="https://github.com/code-it-vro"
          target="_blank"
          rel="noopener noreferrer"
          className="text-2xl text-gray-700 hover:text-gray-900 transition-colors"
          variants={socialVariants}
        >
          <FaGithub />
        </motion.a>
        <motion.a
          href="https://www.linkedin.com/in/ashutoshshukla10/"
          target="_blank"
          rel="noopener noreferrer"
          className="text-2xl text-gray-700 hover:text-gray-900 transition-colors"
          variants={socialVariants}
        >
          <FaLinkedin />
        </motion.a>
        <motion.a
          href="https://leetcode.com/u/Ashutosh_061205/"
          target="_blank"
          rel="noopener noreferrer"
          className="text-2xl text-gray-700 hover:text-gray-900 transition-colors"
          variants={socialVariants}
        >
          <SiLeetcode />
        </motion.a>
        <motion.a
          href="https://discord.gg/MbNWztKV"
          target="_blank"
          rel="noopener noreferrer"
          className="text-2xl text-gray-700 hover:text-gray-900 transition-colors"
          variants={socialVariants}
        >
          <FaDiscord />
        </motion.a>
      </motion.div>

      {/* Vertical Line */}
      <div className="hidden lg:block absolute h-2/3 w-1 bg-gray-400 left-16 top-1/2 -translate-y-1/2"></div>

      {/* Main Content */}
      <motion.div
        className="text-center px-4 max-w-4xl"
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
        variants={contentVariants}
      >
        <h1 className="text-6xl md:text-8xl font-bold text-black mb-6 pb-8 pt-12 tracking-tight">
          ASHUTOSH SHUKLA
        </h1>
        <h2 className="text-2xl md:text-4xl font-semibold text-gray-700 mb-6">
          Full Stack Developer and into DevOps
        </h2>
        <p className="text-lg md:text-xl text-gray-600 mb-2 leading-relaxed">
          Passionate Full stack developer with{" "}
          <span className="font-semibold text-purple-600">1+ years</span> of
          experience crafting seamless web experiences. Experienced in building
          robust applications with{" "}
          <span className="text-blue-600">React.js</span>,{" "}
          <span className="text-green-600">Node.js</span>, and{" "}
          <span className="text-purple-600">Next.js</span>, and implementing{" "}
          <span className="font-semibold">DevOps practices</span> using{" "}
          <span className="text-green-600">CI/CD pipelines</span> and{" "}
          <span className="text-purple-600">Docker</span>. Committed to creating
          innovative solutions and with exceptional user experience.
        </p>

        {/* Scroll Prompt */}
        <motion.div
          className=" md:block absolute bottom-8 right-20"
          variants={scrollPromptVariants}
          initial="initial"
          animate="animate"
        >
          <div className="flex flex-col items-center text-gray-600">
            <BsMouse className="text-3xl mb-2" />
            <span className="text-sm font-medium">Scroll Down</span>
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default First;
