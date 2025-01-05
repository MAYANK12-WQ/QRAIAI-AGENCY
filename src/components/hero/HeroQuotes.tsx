import React from 'react';
import { motion } from 'framer-motion';

const HeroQuotes = () => {
  return (
    <motion.h2
      initial={{ y: 30, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, delay: 0.4 }}
      className="font-jedar text-2xl md:text-3xl tracking-widest relative mt-8"
    >
      <span className="bg-gradient-to-r from-neon-pink via-neon-cyan to-neon-gold bg-clip-text text-transparent animate-text-shimmer">
        WHERE INNOVATION MEETS INFINITY
      </span>
    </motion.h2>
  );
};

export default HeroQuotes;