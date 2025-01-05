import React from 'react';
import { motion } from 'framer-motion';

interface LogoProps {
  className?: string;
}

const Logo: React.FC<LogoProps> = ({ className = '' }) => {
  return (
    <motion.div 
      className={`flex items-center space-x-2 ${className}`}
      whileHover={{ scale: 1.05 }}
    >
      <div className="relative w-12 h-12">
        <img 
          src="/quantum-renaissance-logo.svg" 
          alt="Quantum Renaissance Logo"
          className="w-full h-full object-contain"
        />
        <div className="absolute inset-0 bg-gradient-to-br from-purple-600/20 to-[#FFD700]/20 rounded-full blur-xl" />
      </div>
      <span className="text-2xl font-orbitron text-white tracking-wider">
        Quantum<span className="text-[#FFD700]">Renaissance</span>
      </span>
    </motion.div>
  );
};

export default Logo;