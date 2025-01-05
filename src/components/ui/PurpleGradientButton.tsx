import React from 'react';
import { motion } from 'framer-motion';

interface PurpleGradientButtonProps {
  children: React.ReactNode;
  onClick?: () => void;
  className?: string;
}

const PurpleGradientButton: React.FC<PurpleGradientButtonProps> = ({ children, onClick, className = '' }) => {
  return (
    <motion.button
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      className={`relative group overflow-hidden px-6 py-3 rounded-full ${className}`}
      onClick={onClick}
    >
      <div className="absolute inset-0 bg-gradient-to-r from-purple-600 via-purple-500 to-purple-700 transition-all duration-300 group-hover:scale-110" />
      <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      <div className="relative text-white flex items-center justify-center gap-2">
        {children}
      </div>
    </motion.button>
  );
};

export default PurpleGradientButton;