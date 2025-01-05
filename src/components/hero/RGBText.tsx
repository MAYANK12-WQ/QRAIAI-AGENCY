import React from 'react';
import { motion } from 'framer-motion';

interface RGBTextProps {
  children: React.ReactNode;
  className?: string;
}

const RGBText: React.FC<RGBTextProps> = ({ children, className = '' }) => {
  return (
    <motion.span
      className={`relative inline-block ${className}`}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <span className="relative z-10 bg-gradient-to-r from-neon-pink via-neon-cyan to-neon-gold bg-[length:200%_auto] animate-text-shimmer bg-clip-text text-transparent">
        {children}
      </span>
      <span className="absolute inset-0 blur-md bg-gradient-to-r from-neon-pink via-neon-cyan to-neon-gold opacity-50 animate-pulse" />
    </motion.span>
  );
};

export default RGBText;