import React from 'react';
import { motion } from 'framer-motion';

const FloatingElements = () => {
  const elements = [
    { shape: 'circle', size: 'w-4 h-4', color: 'bg-cyan-400/20', position: { top: '10%', left: '80%' } },
    { shape: 'square', size: 'w-6 h-6', color: 'bg-purple-500/20', position: { top: '20%', left: '10%' } },
    { shape: 'triangle', size: 'w-8 h-8', color: 'bg-cyan-400/20', position: { top: '60%', left: '85%' } },
    { shape: 'circle', size: 'w-3 h-3', color: 'bg-purple-500/30', position: { top: '80%', left: '20%' } },
    { shape: 'square', size: 'w-5 h-5', color: 'bg-cyan-400/15', position: { top: '40%', left: '90%' } },
    { shape: 'circle', size: 'w-7 h-7', color: 'bg-purple-500/15', position: { top: '70%', left: '5%' } },
  ];

  return (
    <div className="fixed inset-0 pointer-events-none z-0">
      {elements.map((element, index) => (
        <motion.div
          key={index}
          className={`absolute ${element.size} ${element.color} ${
            element.shape === 'circle' ? 'rounded-full' : 
            element.shape === 'square' ? 'rounded-sm rotate-45' : 'triangle'
          }`}
          style={{
            top: element.position.top,
            left: element.position.left,
          }}
          animate={{
            y: [0, -20, 0],
            x: [0, 10, 0],
            rotate: element.shape === 'square' ? [45, 225, 45] : [0, 360, 0],
            scale: [1, 1.2, 1],
          }}
          transition={{
            duration: 8 + index * 2,
            repeat: Infinity,
            ease: "easeInOut",
            delay: index * 0.5
          }}
        />
      ))}
      
      {/* Floating Code Symbols */}
      {['</', '{}', '[]', '()'].map((symbol, index) => (
        <motion.div
          key={symbol}
          className="absolute text-cyan-400/20 font-mono text-xl select-none"
          style={{
            top: `${15 + index * 20}%`,
            left: `${20 + index * 15}%`,
          }}
          animate={{
            y: [0, -30, 0],
            opacity: [0.2, 0.5, 0.2],
          }}
          transition={{
            duration: 6 + index,
            repeat: Infinity,
            ease: "easeInOut",
            delay: index * 0.8
          }}
        >
          {symbol}
        </motion.div>
      ))}
    </div>
  );
};

export default FloatingElements;