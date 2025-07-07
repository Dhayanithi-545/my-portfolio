import React, { useState } from 'react';
import { motion } from 'framer-motion';

export const MagneticHover = ({ children, strength = 0.3, className = "" }) => {
  const [position, setPosition] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = (e.clientX - rect.left - rect.width / 2) * strength;
    const y = (e.clientY - rect.top - rect.height / 2) * strength;
    setPosition({ x, y });
  };

  const handleMouseLeave = () => {
    setPosition({ x: 0, y: 0 });
  };

  return (
    <motion.div
      className={className}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      animate={{ x: position.x, y: position.y }}
      transition={{ type: "spring", stiffness: 300, damping: 30 }}
    >
      {children}
    </motion.div>
  );
};

export const NeonButton = ({ children, onClick, className = "" }) => {
  return (
    <motion.button
      className={`relative px-6 py-3 text-cyan-400 font-semibold rounded-lg border border-cyan-400 bg-transparent overflow-hidden group ${className}`}
      onClick={onClick}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
    >
      {/* Neon glow effect */}
      <div className="absolute inset-0 bg-cyan-400/20 blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      
      {/* Animated border */}
      <div className="absolute inset-0 rounded-lg">
        <div className="absolute inset-0 rounded-lg bg-gradient-to-r from-cyan-400 via-purple-500 to-cyan-400 opacity-0 group-hover:opacity-100 transition-opacity duration-300" 
             style={{ padding: '1px' }}>
          <div className="w-full h-full bg-slate-900 rounded-lg" />
        </div>
      </div>
      
      {/* Button content */}
      <span className="relative z-10">{children}</span>
      
      {/* Scan line effect */}
      <motion.div
        className="absolute inset-0 bg-gradient-to-r from-transparent via-cyan-400/30 to-transparent opacity-0 group-hover:opacity-100"
        initial={{ x: '-100%' }}
        whileHover={{ x: '100%' }}
        transition={{ duration: 0.6 }}
      />
    </motion.button>
  );
};

export const GlitchText = ({ children, className = "" }) => {
  return (
    <div className={`relative inline-block ${className}`}>
      <motion.span
        className="relative z-10"
        animate={{
          textShadow: [
            "0 0 0 transparent",
            "2px 0 0 #ff0000, -2px 0 0 #00ffff",
            "0 0 0 transparent"
          ]
        }}
        transition={{
          duration: 0.1,
          repeat: Infinity,
          repeatDelay: 3
        }}
      >
        {children}
      </motion.span>
    </div>
  );
};

export const LiquidButton = ({ children, onClick, className = "" }) => {
  return (
    <motion.button
      className={`relative px-8 py-4 text-white font-semibold rounded-full overflow-hidden group ${className}`}
      onClick={onClick}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
    >
      {/* Liquid background */}
      <div className="absolute inset-0 bg-gradient-to-r from-cyan-400 to-purple-500" />
      
      {/* Animated liquid effect */}
      <motion.div
        className="absolute inset-0 bg-gradient-to-r from-purple-500 to-cyan-400"
        initial={{ x: '-100%' }}
        whileHover={{ x: '0%' }}
        transition={{ duration: 0.3 }}
      />
      
      {/* Button content */}
      <span className="relative z-10">{children}</span>
    </motion.button>
  );
};

export const HolographicCard = ({ children, className = "" }) => {
  const [rotateX, setRotateX] = useState(0);
  const [rotateY, setRotateY] = useState(0);

  const handleMouseMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;
    
    const rotateX = (y - centerY) / 10;
    const rotateY = (centerX - x) / 10;
    
    setRotateX(rotateX);
    setRotateY(rotateY);
  };

  const handleMouseLeave = () => {
    setRotateX(0);
    setRotateY(0);
  };

  return (
    <motion.div
      className={`relative perspective-1000 ${className}`}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{
        transformStyle: 'preserve-3d',
      }}
      animate={{
        rotateX,
        rotateY,
      }}
      transition={{ type: "spring", stiffness: 300, damping: 30 }}
    >
      {/* Holographic overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-cyan-400/10 via-purple-500/10 to-cyan-400/10 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      
      {children}
    </motion.div>
  );
};

const HoverEffects = {
  MagneticHover,
  NeonButton,
  GlitchText,
  LiquidButton,
  HolographicCard
};

export default HoverEffects;