import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import ScrollToTop from "./components/ScrollToTop";
import First from "./components/First";
import Experience from "./components/Experience";

// Animated background particle component
const FloatingParticle = ({ index }) => {
  const randomDelay = Math.random() * 5;
  return (
    <motion.div
      className="absolute w-1 h-1 bg-gray-700/10"
      initial={{ opacity: 0, scale: 0 }}
      animate={{
        opacity: [0, 1, 0],
        scale: [0, 1, 0],
        y: [0, -100],
        x: Math.sin(index) * 20,
      }}
      transition={{
        duration: 5,
        delay: randomDelay,
        repeat: Infinity,
        ease: "easeInOut",
      }}
    />
  );
};

const NoiseOverlay = () => (
  <motion.div
    className="pointer-events-none fixed inset-0 z-50 opacity-20"
    initial={{ opacity: 0 }}
    animate={{ opacity: 0.2 }}
    style={{
      backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 400 400' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.8' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`,
    }}
  />
);

const PageTransition = ({ children }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    exit={{ opacity: 0, y: -20 }}
    transition={{ duration: 0.6, ease: "easeOut" }}
  >
    {children}
  </motion.div>
);

export default function App() {
  const [cursorPosition, setCursorPosition] = useState({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    const handleMouseMove = (e) => {
      setCursorPosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <>
      {/* Custom Cursor */}
      <motion.div
        className="fixed w-4 h-4 rounded-full bg-black/20 pointer-events-none z-50 mix-blend-difference"
        animate={{
          x: cursorPosition.x - 8,
          y: cursorPosition.y - 8,
          scale: isHovered ? 1.5 : 1,
        }}
        transition={{ type: "spring", stiffness: 500, damping: 28 }}
      />
      <motion.div
        className="fixed w-8 h-8 rounded-full border border-black/20 pointer-events-none z-50 mix-blend-difference"
        animate={{
          x: cursorPosition.x - 16,
          y: cursorPosition.y - 16,
          scale: isHovered ? 1.5 : 1,
        }}
        transition={{ type: "spring", stiffness: 400, damping: 28 }}
      />

      {/* Background Effects */}
      <div className="fixed inset-0 overflow-hidden">
        {Array.from({ length: 20 }).map((_, i) => (
          <FloatingParticle key={i} index={i} />
        ))}
      </div>

      {/* Noise Overlay */}
      <NoiseOverlay />

      {/* Main Content */}
      <div
        className="relative"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <AnimatePresence mode="wait">
          <PageTransition>
            <Navbar />
            <First />
            <Hero />
            <Skills />
            <Experience />
            <Projects />
            <Contact />
            <Footer />
            <ScrollToTop />
          </PageTransition>
        </AnimatePresence>
      </div>
    </>
  );
}
