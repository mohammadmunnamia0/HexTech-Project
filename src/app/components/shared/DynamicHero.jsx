"use client";
import { motion } from "framer-motion";
import { FaReact, FaNodeJs, FaDatabase, FaGithub, FaDocker, FaAws, FaGitAlt } from "react-icons/fa";
import "@/styles/DynamicHero.css";

const titles = {
  'hire-us': "Transform Your Vision Into Digital Reality",
  'about': "Crafting Digital Excellence Since 2015",
  'career': "Join Our Team of Innovators",
  'blog': "Insights from the Digital Frontier"
};

const DynamicHero = ({ page }) => {
  return (
    <div className="relative min-h-screen bg-black overflow-hidden">
      {/* Animated Background Grid */}
      <div className="absolute inset-0 hero-grid opacity-10" />

      {/* Floating Elements */}
      <div className="absolute inset-0">
        {/* Large Floating Circles */}
        {[...Array(4)].map((_, i) => (
          <motion.div
            key={`large-${i}`}
            className="absolute"
            initial={{ opacity: 0 }}
            animate={{
              opacity: [0.1, 0.3, 0.1],
              scale: [1, 1.2, 1],
              x: [0, Math.random() * 300 - 150],
              y: [0, Math.random() * 300 - 150],
            }}
            transition={{
              duration: 18,
              repeat: Infinity,
              delay: i * 2,
            }}
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              width: `${Math.random() * 400 + 200}px`,
              height: `${Math.random() * 400 + 200}px`,
            }}
          >
            <div className="w-full h-full bg-gradient-to-r from-gray-500/10 to-white/10 rounded-full blur-3xl" />
          </motion.div>
        ))}

        {/* Small Floating Particles */}
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={`particle-${i}`}
            className="absolute w-2 h-2 bg-white/20 rounded-full"
            initial={{ opacity: 0 }}
            animate={{
              opacity: [0, 1, 0],
              scale: [0, 1, 0],
              x: [0, Math.random() * 100 - 50],
              y: [0, Math.random() * 100 - 50],
            }}
            transition={{
              duration: 10,
              repeat: Infinity,
              delay: i * 0.3,
            }}
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
          />
        ))}

        {/* Animated Lines */}
        {[...Array(6)].map((_, i) => (
          <motion.div
            key={`line-${i}`}
            className="absolute h-[1px] bg-gradient-to-r from-transparent via-white/20 to-transparent"
            initial={{ opacity: 0, width: "0%" }}
            animate={{
              opacity: [0, 1, 0],
              width: ["0%", "100%", "0%"],
              x: [-100, 0, 100],
            }}
            transition={{
              duration: 8,
              repeat: Infinity,
              delay: i * 2,
            }}
            style={{
              top: `${20 + i * 15}%`,
              left: "0",
            }}
          />
        ))}

        {/* Moving Icons (Software Development Related) */}
        {[FaReact, FaNodeJs, FaDatabase, FaGithub, FaDocker, FaAws, FaGitAlt].map((Icon, i) => (
          <motion.div
            key={`icon-${i}`}
            className="absolute"
            initial={{ opacity: 0 }}
            animate={{
              opacity: [0.3, 1, 0.3],
              scale: [1, 1.5, 1],
              x: [0, Math.random() * 800 - 400],
              y: [0, Math.random() * 800 - 400],
            }}
            transition={{
              duration: 20,
              repeat: Infinity,
              delay: i * 3,
            }}
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              fontSize: `${Math.random() * 60 + 30}px`,
            }}
          >
            <Icon className="text-white/50" />
          </motion.div>
        ))}
      </div>

      {/* Main Content */}
      <div className="relative z-10 container mx-auto px-4 h-screen flex items-center justify-center">
        <motion.h1
          className="text-6xl md:text-8xl font-bold text-center max-w-5xl"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            duration: 1,
            type: "spring",
            stiffness: 100,
          }}
        >
          <motion.span
            className="text-gradient inline-block"
            animate={{
              backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
            }}
            transition={{
              duration: 8,
              repeat: Infinity,
              ease: "linear",
            }}
          >
            {titles[page]}
          </motion.span>
        </motion.h1>
      </div>

      {/* Bottom Gradient */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-black to-transparent" />
    </div>
  );
};

export default DynamicHero;
