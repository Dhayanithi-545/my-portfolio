import React, { useState, useRef } from 'react';
import { motion } from 'framer-motion';

const GlowingCard = ({ children, className = "", glowColor = "cyan" }) => {
  const [isHovered, setIsHovered] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const cardRef = useRef(null);

  const handleMouseMove = (e) => {
    if (!cardRef.current) return;
    
    const rect = cardRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    
    setMousePosition({ x, y });
  };

  const glowColors = {
    cyan: 'rgba(0, 245, 255, 0.3)',
    purple: 'rgba(168, 85, 247, 0.3)',
    blue: 'rgba(59, 130, 246, 0.3)',
    emerald: 'rgba(16, 185, 129, 0.3)'
  };

  return (
    <motion.div
      ref={cardRef}
      className={`relative group ${className}`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onMouseMove={handleMouseMove}
      whileHover={{ scale: 1.02 }}
      transition={{ duration: 0.3 }}
    >
      {/* Glow Effect */}
      <div
        className="absolute inset-0 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur-xl"
        style={{
          background: `radial-gradient(circle at ${mousePosition.x}px ${mousePosition.y}px, ${glowColors[glowColor]}, transparent 50%)`,
        }}
      />
      
      {/* Card Background */}
      <div className="relative bg-slate-800/50 backdrop-blur-sm border border-slate-700 rounded-lg overflow-hidden">
        {/* Animated Border */}
        <div className="absolute inset-0 rounded-lg">
          <div className="absolute inset-0 rounded-lg bg-gradient-to-r from-cyan-400/20 via-purple-500/20 to-cyan-400/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
        </div>
        
        {/* Holographic Overlay */}
        <div
          className="absolute inset-0 opacity-0 group-hover:opacity-20 transition-opacity duration-300"
          style={{
            background: `radial-gradient(circle at ${mousePosition.x}px ${mousePosition.y}px, rgba(255,255,255,0.1), transparent 50%)`,
          }}
        />
        
        {/* Content */}
        <div className="relative z-10 p-6">
          {children}
        </div>
        
        {/* Animated Particles */}
        {isHovered && (
          <div className="absolute inset-0 pointer-events-none">
            {[...Array(5)].map((_, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, scale: 0 }}
                animate={{ 
                  opacity: [0, 1, 0],
                  scale: [0, 1, 0],
                  x: [0, Math.random() * 100 - 50],
                  y: [0, Math.random() * 100 - 50]
                }}
                transition={{
                  duration: 2,
                  delay: i * 0.1,
                  repeat: Infinity
                }}
                className="absolute w-1 h-1 bg-cyan-400 rounded-full"
                style={{
                  left: mousePosition.x,
                  top: mousePosition.y
                }}
              />
            ))}
          </div>
        )}
      </div>
    </motion.div>
  );
};

export default GlowingCard;