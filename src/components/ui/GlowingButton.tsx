import React from 'react';
import { motion } from 'framer-motion';

interface GlowingButtonProps {
  children: React.ReactNode;
  onClick?: () => void;
  className?: string;
}

const GlowingButton: React.FC<GlowingButtonProps> = ({ children, onClick, className = '' }) => {
  return (
    <motion.button
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      onClick={onClick}
      className={`
        relative group overflow-hidden
        px-8 py-4 rounded-full
        bg-gradient-to-r from-purple-600 to-purple-800
        hover:from-purple-700 hover:to-purple-900
        transition-all duration-300
        ${className}
      `}
    >
      <div className="absolute inset-0 bg-gradient-to-r from-[#FFD700]/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      <div className="relative flex items-center justify-center gap-2 text-white">
        {children}
      </div>
      <div className="absolute inset-0 rounded-full blur opacity-30 bg-gradient-to-r from-[#FFD700] to-purple-600 group-hover:opacity-50 transition-opacity duration-300" />
    </motion.button>
  );
};

export default GlowingButton;