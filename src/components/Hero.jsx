import React from "react";
import { motion, useInView } from "framer-motion";
import ashu4 from "../assets/ashu4.jpg";

const Hero = () => {
  const ref = React.useRef(null);
  const isInView = useInView(ref, {
    margin: "0px 0px -200px 0px",
    once: false,
    amount: 0.3,
  });

  const leftContentVariants = {
    hidden: {
      x: -100,
      opacity: 0,
    },
    visible: {
      x: 0,
      opacity: 1,
      transition: {
        duration: 0.8,
        ease: "easeOut",
      },
    },
  };

  const rightContentVariants = {
    hidden: {
      x: 100,
      opacity: 0,
    },
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
      ref={ref}
      id="about"
      className="pt-24 pb-16 min-h-screen bg-gray-50 flex items-center"
    >
      <div className="container mx-auto flex flex-col-reverse items-center px-4 lg:flex-row lg:items-center lg:gap-8 lg:px-20 lg:ml-24">
        {/* Left Section */}
        <motion.div
          className="lg:w-1/2 text-center lg:text-left"
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          variants={leftContentVariants}
        >
          <h1 className="text-4xl font-bold text-black sm:text-5xl lg:text-6xl">
            About Me
          </h1>
          <div className="mt-6 text-lg text-gray-700 sm:text-xl lg:mt-8">
            <ul className="list-disc list-inside mt-4 space-y-2">
              <li>
                Developing scalable and responsive web applications using{" "}
                <span className="font-semibold">React.js</span>,{" "}
                <span className="font-semibold">Node.js</span>, and{" "}
                <span className="font-semibold">Next.js</span>.
              </li>
              <li>
                Implementing{" "}
                <span className="font-semibold">DevOps practices</span>,
                including managing{" "}
                <span className="font-semibold">CI/CD pipelines</span> and
                containerizing applications with{" "}
                <span className="font-semibold">Docker</span> for seamless
                deployment and scaling.
              </li>
            </ul>
          </div>

          <div className="mt-8 space-y-4">
            <a
              href="https://drive.google.com/file/d/1Q2HU1sPJLxBhUTwjRNJWXy22_srFIq8K/view?usp=sharing"
              target="_blank"
              rel="noopener noreferrer"
              className="block text-blue-600 hover:text-blue-800 transition-colors cursor-pointer"
            >
              🏆 AWS Cloud Certified
            </a>
            <a
              href="https://drive.google.com/file/d/1QIKeaEtJyFqDuG4FBQz3qnmUdzH7MbGT/view?usp=sharing"
              target="_blank"
              rel="noopener noreferrer"
              className="block text-blue-600 hover:text-blue-800 transition-colors cursor-pointer"
            >
              🎓 Web Development Bootcamp
            </a>
            <a
              href="https://drive.google.com/file/d/1vUHnB2DDEkbord05sfr4mOHcxAhE5czE/view?usp=sharing"
              target="_blank"
              rel="noopener noreferrer"
              className="block text-blue-600 hover:text-blue-800 transition-colors cursor-pointer"
            >
              🔒 Computer Security Systems - IIT Kanpur
            </a>
          </div>
        </motion.div>

        {/* Right Section */}
        <motion.div
          className="mb-8 lg:mb-0 lg:w-1/2 flex justify-center"
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          variants={rightContentVariants}
        >
          <img
            src={ashu4}
            alt="Ashutosh Shukla"
            className="max-w-[300px] max-h-[400px] lg:max-w-[600px] lg:max-h-[600px] shadow-lg object-contain rounded-[7rem]"
          />
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
