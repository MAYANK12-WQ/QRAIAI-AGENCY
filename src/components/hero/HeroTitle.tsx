import React from 'react';
import { motion } from 'framer-motion';

const HeroTitle = () => {
  return (
    <motion.h1 
      className="font-joystix text-6xl md:text-7xl lg:text-8xl tracking-wider leading-tight mt-20 relative z-10"
    >
      <motion.div
        initial={{ y: 30, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8 }}
        className="relative inline-block mb-4"
      >
        <span className="relative bg-gradient-to-r from-neon-pink via-neon-cyan to-neon-gold bg-clip-text text-transparent animate-text-shimmer">
          QUANTUM
        </span>
      </motion.div>
      <br />
      <motion.div
        initial={{ y: 30, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        className="relative inline-block"
      >
        <span className="relative bg-gradient-to-r from-neon-purple via-neon-cyan to-neon-gold bg-clip-text text-transparent animate-text-shimmer">
          RENAISSANCE
        </span>
      </motion.div>
    </motion.h1>
  );
};

export default HeroTitle;