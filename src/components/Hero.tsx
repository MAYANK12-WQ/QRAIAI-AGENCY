import React from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import NebulaEffect from './background/NebulaEffect';
import AtomicParticles from './background/AtomicParticles';
import FloatingDots from './background/FloatingDots';

const Hero = () => {
  const navigate = useNavigate();

  return (
    <div className="relative min-h-screen flex items-center justify-center overflow-hidden bg-[#0A0014]">
      {/* Background Effects */}
      <NebulaEffect />
      <AtomicParticles />
      <FloatingDots />
      
      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="text-center space-y-8 max-w-6xl mx-auto"
        >
          {/* Main Title */}
          <motion.h1 
            className="font-aerospace text-7xl md:text-8xl lg:text-9xl tracking-wider leading-tight"
          >
            <motion.div
              initial={{ y: 30, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.8 }}
              className="relative inline-block mb-4"
            >
              <span className="relative bg-gradient-to-r from-neon-pink via-neon-cyan to-neon-gold bg-clip-text text-transparent animate-text-shimmer">
                QUANTUM
              </span>
            </motion.div>
            <br />
            <motion.div
              initial={{ y: 30, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative inline-block"
            >
              <span className="relative bg-gradient-to-r from-neon-purple via-neon-cyan to-neon-gold bg-clip-text text-transparent animate-text-shimmer">
                RENAISSANCE
              </span>
            </motion.div>
          </motion.h1>

          {/* Description */}
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.8 }}
            className="relative"
          >
            <div className="absolute inset-0 bg-[#0A0014]/40 backdrop-blur-sm rounded-xl" />
            <p className="relative text-xl md:text-2xl mt-8 mb-16 max-w-3xl mx-auto leading-relaxed tracking-wide font-aerospace">
              <span className="bg-gradient-to-r from-neon-pink via-neon-cyan to-neon-gold bg-clip-text text-transparent animate-text-shimmer">
                STEP INTO A REALM WHERE QUANTUM COMPUTING
                MEETS ARTIFICIAL INTELLIGENCE, CREATING
                UNPRECEDENTED POSSIBILITIES FOR THE FUTURE
                OF TECHNOLOGY.
              </span>
            </p>
          </motion.div>

          {/* CTA Button */}
          <motion.button
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 1 }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => navigate('/start-project')}
            className="group relative px-10 py-5 bg-gradient-to-r from-neon-pink to-neon-cyan rounded-full overflow-hidden"
          >
            <span className="relative z-10 flex items-center text-white font-aerospace text-xl tracking-widest">
              EXPLORE OUR UNIVERSE
              <ArrowRight className="ml-2 w-6 h-6 group-hover:translate-x-1 transition-transform" />
            </span>
            <div className="absolute inset-0 bg-gradient-to-r from-neon-cyan to-neon-pink opacity-0 group-hover:opacity-50 transition-opacity duration-300" />
            <div className="absolute inset-0 opacity-50 group-hover:opacity-75 transition-opacity duration-300 blur-xl bg-gradient-to-r from-neon-pink to-neon-cyan" />
          </motion.button>
        </motion.div>
      </div>
    </div>
  );
};

export default Hero;