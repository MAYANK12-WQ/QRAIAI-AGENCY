import React from 'react';

interface GradientBorderProps {
  children: React.ReactNode;
  className?: string;
}

const GradientBorder: React.FC<GradientBorderProps> = ({ children, className = '' }) => {
  return (
    <div className={`relative group ${className}`}>
      <div className="absolute -inset-0.5 bg-gradient-to-r from-[#4b0082] via-[#FFD700] to-[#191970] rounded-lg blur opacity-30 group-hover:opacity-100 transition duration-1000 group-hover:duration-200"></div>
      <div className="relative bg-[#0A0014] rounded-lg p-4">
        {children}
      </div>
    </div>
  );
};

export default GradientBorder;