import React from 'react';
import { motion } from 'framer-motion';
import RGBText from './RGBText';

const HeroDescription = () => {
  return (
    <motion.div
      initial={{ y: 20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ delay: 0.8 }}
      className="relative z-10"
    >
      <div className="absolute inset-0 bg-[#0A0014]/40 backdrop-blur-sm rounded-xl" />
      <p className="relative text-xl md:text-2xl mt-8 mb-16 max-w-3xl mx-auto leading-relaxed tracking-wide font-joystix">
        <RGBText>
          STEP INTO A REALM WHERE QUANTUM COMPUTING
          MEETS ARTIFICIAL INTELLIGENCE, CREATING
          UNPRECEDENTED POSSIBILITIES FOR THE FUTURE
          OF TECHNOLOGY.
        </RGBText>
      </p>
    </motion.div>
  );
};

export default HeroDescription;