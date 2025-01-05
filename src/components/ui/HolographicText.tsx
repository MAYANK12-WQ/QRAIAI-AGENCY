import React from 'react';
import { motion } from 'framer-motion';

interface HolographicTextProps {
  text: string;
  className?: string;
}

const HolographicText: React.FC<HolographicTextProps> = ({ text, className = '' }) => {
  return (
    <motion.div
      className={`relative ${className}`}
      whileHover={{ scale: 1.02 }}
    >
      <span className="absolute inset-0 blur-xl bg-gradient-to-r from-purple-500/50 via-[#FFD700]/50 to-purple-500/50 opacity-75 animate-pulse" />
      <span className="relative block bg-gradient-to-r from-white via-[#FFD700] to-white text-transparent bg-clip-text bg-[200%_auto] animate-gradient">
        {text}
      </span>
    </motion.div>
  );
};

export default HolographicText;