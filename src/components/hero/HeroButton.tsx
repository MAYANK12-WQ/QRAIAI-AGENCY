import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

interface HeroButtonProps {
  onClick: () => void;
}

const HeroButton = ({ onClick }: HeroButtonProps) => {
  return (
    <motion.button
      initial={{ y: 20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ delay: 1 }}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      onClick={onClick}
      className="group relative px-10 py-5 bg-gradient-to-r from-neon-pink to-neon-cyan rounded-full overflow-hidden"
    >
      <span className="relative z-10 flex items-center text-white font-jedar text-xl tracking-widest">
        EXPLORE OUR UNIVERSE
        <ArrowRight className="ml-2 w-6 h-6 group-hover:translate-x-1 transition-transform" />
      </span>
      <div className="absolute inset-0 bg-gradient-to-r from-neon-cyan to-neon-pink opacity-0 group-hover:opacity-50 transition-opacity duration-300" />
      <div className="absolute inset-0 opacity-50 group-hover:opacity-75 transition-opacity duration-300 blur-xl bg-gradient-to-r from-neon-pink to-neon-cyan" />
    </motion.button>
  );
};

export default HeroButton;