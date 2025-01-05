import React from 'react';
import { motion } from 'framer-motion';
import { Tooltip } from './Tooltip';

interface SocialButtonProps {
  href: string;
  tooltip: string;
  icon: React.ElementType;
  className?: string;
}

const SocialButton: React.FC<SocialButtonProps> = ({ href, tooltip, icon: Icon, className = '' }) => {
  return (
    <Tooltip content={tooltip}>
      <motion.a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        whileHover={{ scale: 1.1 }}
        className={`
          w-10 h-10 rounded-full 
          bg-[#1A1A1A] 
          flex items-center justify-center 
          hover:bg-[#4B0082] 
          transition-all duration-300
          hover:shadow-[0_0_15px_rgba(255,215,0,0.3)]
          ${className}
        `}
      >
        <Icon className="w-5 h-5 text-[#FFD700] transition-colors duration-300 hover:text-white" />
      </motion.a>
    </Tooltip>
  );
};

export default SocialButton;