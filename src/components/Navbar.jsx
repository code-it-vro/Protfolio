import React, { useState } from "react";
import { motion } from "framer-motion";

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const handleNavClick = (e, targetId) => {
    e.preventDefault();
    const element = document.getElementById(targetId);
    if (element) {
      const navbarHeight = 80; // Approximate navbar height
      const elementPosition = element.offsetTop - navbarHeight;
      window.scrollTo({
        top: elementPosition,
        behavior: "smooth",
      });
    }
    setIsMobileMenuOpen(false);
  };

  const navbarVariants = {
    hidden: {
      y: -100,
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

  return (
    <motion.nav
      className="fixed inset-x-0 top-4 z-50"
      initial="hidden"
      animate="visible"
      variants={navbarVariants}
    >
      {/* Desktop Navbar */}
      <div className="hidden lg:flex items-center justify-between px-8 py-4 bg-slate-950 rounded-full shadow-md max-w-5xl mx-auto text-white">
        <div className="font-bold text-2xl">
          <span className="relative font-sans">
            A <span className="text-blue-300">S</span>
            <span className="absolute -bottom-1 left-0 w-full h-0.5 bg-gradient-to-r from-blue-500 to-purple-500"></span>
          </span>
        </div>
        <ul className="flex space-x-6 text-lg font-medium">
          <li>
            <a
              href="#about"
              onClick={(e) => handleNavClick(e, "about")}
              className="hover:text-gray-400"
            >
              About
            </a>
          </li>
          <li>
            <a
              href="#skills"
              onClick={(e) => handleNavClick(e, "skills")}
              className="hover:text-gray-400"
            >
              Skills
            </a>
          </li>
          <li>
            <a
              href="#experience"
              onClick={(e) => handleNavClick(e, "experience")}
              className="hover:text-gray-400"
            >
              Experience
            </a>
          </li>
          <li>
            <a
              href="#projects"
              onClick={(e) => handleNavClick(e, "projects")}
              className="hover:text-gray-400"
            >
              Projects
            </a>
          </li>
          <li>
            <a
              href="#contact"
              onClick={(e) => handleNavClick(e, "contact")}
              className="hover:text-gray-400"
            >
              Contact
            </a>
          </li>
        </ul>
      </div>

      {/* Mobile Navbar */}
      <div className="flex items-center justify-between px-6 py-3 bg-slate-950 rounded-full shadow-md lg:hidden text-white mx-4">
        <div className="font-bold text-2xl">
          <span className="relative font-sans" >
            A <span className="text-blue-300">S</span>
            <span className="absolute -bottom-1 left-0 w-full h-0.5 bg-gradient-to-r from-blue-500 to-purple-500"></span>
          </span>
        </div>
        <button
          onClick={toggleMobileMenu}
          className="text-2xl z-50 relative focus:outline-none"
        >
          {isMobileMenuOpen ? "×" : "☰"}
        </button>
      </div>

      {/* Mobile Menu Overlay */}
      {isMobileMenuOpen && (
        <motion.div
          className="fixed inset-0 z-40 flex items-center justify-center bg-black/80 backdrop-blur-md"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3 }}
        >
          <button
            onClick={toggleMobileMenu}
            className="absolute top-8 right-8 text-3xl text-white focus:outline-none z-50"
          >
            ×
          </button>
          <ul className="flex flex-col items-center space-y-6 text-white text-2xl font-semibold">
            <li>
              <a
                href="#about"
                onClick={(e) => handleNavClick(e, "about")}
                className="hover:underline"
              >
                About
              </a>
            </li>
            <li>
              <a
                href="#skills"
                onClick={(e) => handleNavClick(e, "skills")}
                className="hover:underline"
              >
                Skills
              </a>
            </li>
            <li>
              <a
                href="#experience"
                onClick={(e) => handleNavClick(e, "experience")}
                className="hover:underline"
              >
                Experience
              </a>
            </li>
            <li>
              <a
                href="#projects"
                onClick={(e) => handleNavClick(e, "projects")}
                className="hover:underline"
              >
                Projects
              </a>
            </li>
            <li>
              <a
                href="#contact"
                onClick={(e) => handleNavClick(e, "contact")}
                className="hover:underline"
              >
                Contact
              </a>
            </li>
          </ul>
        </motion.div>
      )}
    </motion.nav>
  );
};

export default Navbar;
