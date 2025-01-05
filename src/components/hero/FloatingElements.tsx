import React from 'react';
import { motion } from 'framer-motion';
import { Brain, Code, Cpu, LineChart } from 'lucide-react';

const FloatingElements = () => {
  const elements = [
    { Icon: Brain, color: '#FFD700', delay: 0 },
    { Icon: Code, color: '#4b0082', delay: 0.2 },
    { Icon: Cpu, color: '#FFD700', delay: 0.4 },
    { Icon: LineChart, color: '#4b0082', delay: 0.6 }
  ];

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {elements.map((Element, index) => (
        <motion.div
          key={index}
          className="absolute"
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{
            delay: Element.delay,
            duration: 0.5,
            repeat: Infinity,
            repeatType: "reverse",
            repeatDelay: 2
          }}
          style={{
            left: `${20 + (index * 25)}%`,
            top: `${20 + (index * 15)}%`,
            color: Element.color
          }}
        >
          <div className="relative">
            <Element.Icon className="w-12 h-12" />
            <div className="absolute inset-0 blur-lg" style={{ backgroundColor: Element.color, opacity: 0.2 }} />
          </div>
        </motion.div>
      ))}

      {/* Floating Gradient Orbs */}
      <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-purple-600/20 rounded-full blur-3xl animate-float" />
      <div className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-[#FFD700]/20 rounded-full blur-3xl animate-float-delay" />
    </div>
  );
};

export default FloatingElements;