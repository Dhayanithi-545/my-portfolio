import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { ChevronDown, Code, Zap } from 'lucide-react';
import { MagneticHover, NeonButton } from '../Animations/HoverEffects';
import FloatingElements from '../UI/FloatingElements';
import DhayanithiImg from '../../assets/Dhayanithi.png';

const Hero = () => {
  const [displayText, setDisplayText] = useState('');
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [showCursor, setShowCursor] = useState(true);
  
  const titles = [
    'Dhayanithi Anandan',
  ];

  // Typewriter effect for name
  useEffect(() => {
    const currentTitle = titles[currentIndex];
    let timeout;
      if (!isDeleting) {
        if (displayText.length < currentTitle.length) {
        timeout = setTimeout(() => {
          setDisplayText(currentTitle.slice(0, displayText.length + 1));
        }, 100);
        }
    }
    return () => clearTimeout(timeout);
  }, [displayText, currentIndex, isDeleting]);

  // Blinking cursor
  useEffect(() => {
    const cursorInterval = setInterval(() => {
      setShowCursor((prev) => !prev);
    }, 500);
    return () => clearInterval(cursorInterval);
  }, []);

  const scrollToSection = (sectionId) => {
    document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <FloatingElements />
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex flex-col-reverse md:flex-row items-center md:items-stretch justify-between gap-8 md:gap-16">
          {/* Left: Name and content */}
          <div className="flex-1 flex flex-col justify-center md:justify-start items-start text-left max-w-xl w-full">
          {/* Animated greeting */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
              className="mb-3 mt-6 md:mt-0"
          >
            <span className="text-cyan-400 text-lg font-medium">Hello, I'm</span>
          </motion.div>

            {/* Name with typewriter effect */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
              className="text-4xl sm:text-5xl md:text-6xl font-bold mb-6 text-cyan-400"
              style={{ minHeight: '3rem' }}
          >
              <span>{displayText}</span>
              <span className="text-cyan-400">{showCursor ? '|' : ' '}</span>
          </motion.h1>

            {/* Subtitle */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
              className="mb-4"
          >
              <h2 className="text-xl sm:text-2xl text-gray-300 font-light">
                Full Stack Developer | AI Enthusiast | MERN Stack Expert
            </h2>
          </motion.div>

          {/* Description */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
              className="text-base text-gray-400 mb-6 leading-relaxed"
          >
              Full-stack developer building scalable web apps with GPT-powered features. 
              Skilled in MERN stack, Java, Python, and cloud deployment.
          </motion.p>

          {/* Action buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
              className="flex flex-col sm:flex-row gap-4 mb-8"
          >
            <MagneticHover>
              <NeonButton onClick={() => scrollToSection('projects')}>
                <Code className="inline-block w-5 h-5 mr-2" />
                View My Work
              </NeonButton>
            </MagneticHover>
            <MagneticHover>
              <motion.button
                className="px-6 py-3 bg-gradient-to-r from-cyan-400 to-purple-500 text-white font-semibold rounded-lg group relative overflow-hidden"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => scrollToSection('contact')}
              >
                <span className="relative z-10 flex items-center">
                  <Zap className="inline-block w-5 h-5 mr-2" />
                  Let's Connect
                </span>
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-purple-500 to-cyan-400"
                  initial={{ x: '-100%' }}
                  whileHover={{ x: '0%' }}
                  transition={{ duration: 0.3 }}
                />
              </motion.button>
            </MagneticHover>
          </motion.div>
          </div>

          {/* Right: User Photo */}
          <div className="flex-1 flex justify-center md:justify-end items-center mb-6 md:mb-0">
            <motion.img
              src={DhayanithiImg}
              alt="Dhayanithi Anandan"
              className="w-32 h-32 sm:w-40 sm:h-40 md:w-48 md:h-48 lg:w-56 lg:h-56 rounded-full object-cover shadow-xl"
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0, y: [0, -12, 0, 12, 0] }}
              transition={{ duration: 1, delay: 0.3, y: { duration: 6, repeat: Infinity, ease: 'easeInOut' } }}
              style={{ border: 'none', background: 'none' }}
            />
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 1.2 }}
        className="absolute bottom-6 left-1/2 transform -translate-x-1/2 cursor-pointer"
        onClick={() => scrollToSection('about')}
      >
        <div className="flex flex-col items-center text-gray-400 hover:text-cyan-400 transition-colors">
          <span className="text-sm mb-2">Scroll to explore</span>
          <motion.div
            animate={{ y: [0, 6, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
          >
            <ChevronDown className="w-5 h-5" />
          </motion.div>
        </div>
      </motion.div>
      </div>

      {/* Decorative elements */}
      <div className="absolute top-16 right-16 w-24 h-24 bg-gradient-to-br from-cyan-400/10 to-purple-500/10 rounded-full blur-3xl animate-pulse" />
      <div className="absolute bottom-16 left-16 w-20 h-20 bg-gradient-to-br from-purple-500/10 to-cyan-400/10 rounded-full blur-3xl animate-pulse" />
    </section>
  );
};

export default Hero;