import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Navbar from './components/Header/Navbar';
import Hero from './components/Sections/Hero';
import About from './components/Sections/About';
import Skills from './components/Sections/Skills';
import Projects from './components/Sections/Projects';
import Education from './components/Sections/Education';
import Contact from './components/Sections/Contact';
import AnimatedBackground from './components/UI/AnimatedBackground';
import ParticleSystem from './components/UI/ParticleSystem';
import { useScrollReveal } from './hooks/useScrollReveal';

function App() {
  const [isLoading, setIsLoading] = useState(true);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  
  useScrollReveal();

  useEffect(() => {
    const timer = setTimeout(() => setIsLoading(false), 1500); // Reduced from 2000ms
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    const updateMousePosition = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener('mousemove', updateMousePosition);
    return () => window.removeEventListener('mousemove', updateMousePosition);
  }, []);

  const LoadingScreen = () => (
    <motion.div
      initial={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
      className="fixed inset-0 bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 flex items-center justify-center z-50"
    >
      <div className="text-center">
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ duration: 1.5, repeat: Infinity, ease: "linear" }}
          className="w-14 h-14 border-4 border-cyan-400 border-t-transparent rounded-full mx-auto mb-3"
        />
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="text-xl font-bold text-cyan-400 tracking-wider"
        >
          LOADING PORTFOLIO
        </motion.h1>
        <motion.div
          initial={{ width: 0 }}
          animate={{ width: "100%" }}
          transition={{ duration: 1, delay: 0.3 }}
          className="h-1 bg-gradient-to-r from-cyan-400 to-purple-500 mt-3 rounded-full"
        />
      </div>
    </motion.div>
  );

  const CursorTrail = () => (
    <motion.div
      className="fixed pointer-events-none z-50 w-5 h-5 bg-cyan-400 rounded-full mix-blend-screen"
      style={{
        left: mousePosition.x - 10,
        top: mousePosition.y - 10,
      }}
      animate={{
        scale: [1, 1.2, 1],
        opacity: [0.7, 1, 0.7],
      }}
      transition={{
        duration: 1,
        repeat: Infinity,
        ease: "easeInOut",
      }}
    />
  );

  return (
    <div className="relative min-h-screen bg-slate-900 overflow-x-hidden">
      <AnimatePresence>
        {isLoading && <LoadingScreen />}
      </AnimatePresence>

      {!isLoading && (
        <>
          <CursorTrail />
          <AnimatedBackground />
          <ParticleSystem />
          
          <div className="relative z-10">
            <Navbar />
            <main>
              <Hero />
              <About />
              <Skills />
              <Projects />
              <Education />
              <Contact />
            </main>
          </div>

          {/* Scroll indicator */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8 }}
            className="fixed right-6 top-1/2 transform -translate-y-1/2 z-20"
          >
            <div className="flex flex-col space-y-2">
              {['Hero', 'About', 'Skills', 'Projects', 'Education', 'Contact'].map((section, index) => (
                <motion.div
                  key={section}
                  className="w-1.5 h-1.5 rounded-full bg-cyan-400 opacity-30 hover:opacity-100 transition-opacity cursor-pointer"
                  whileHover={{ scale: 1.5 }}
                  onClick={() => document.getElementById(section.toLowerCase())?.scrollIntoView({ behavior: 'smooth' })}
                />
              ))}
            </div>
          </motion.div>
        </>
      )}
    </div>
  );
}

export default App;