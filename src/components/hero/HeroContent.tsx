import React from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import HeroTitle from './HeroTitle';
import HeroQuotes from './HeroQuotes';
import HeroDescription from './HeroDescription';
import HeroButton from './HeroButton';

const HeroContent = () => {
  const navigate = useNavigate();

  return (
    <div className="container mx-auto px-4 relative z-10 min-h-[80vh] flex flex-col items-center justify-center">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="text-center space-y-8 max-w-6xl mx-auto"
      >
        <HeroTitle />
        <HeroQuotes />
        <HeroDescription />
        <HeroButton onClick={() => navigate('/start-project')} />
      </motion.div>
    </div>
  );
};

export default HeroContent;