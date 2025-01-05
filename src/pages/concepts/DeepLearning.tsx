import React from 'react';
import { motion } from 'framer-motion';
import { Brain, Network, Cpu } from 'lucide-react';
import GlassCard from '../../components/ui/GlassCard';

const DeepLearning = () => {
  return (
    <div className="min-h-screen bg-[#0A0014] pt-20">
      <div className="container mx-auto px-4 py-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center max-w-4xl mx-auto mb-16"
        >
          <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-purple-400 via-[#FFD700] to-purple-400 text-transparent bg-clip-text font-orbitron">
            Deep Learning
          </h1>
          <p className="text-xl text-gray-300">
            Advanced neural networks inspired by the human brain
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8 mb-16">
          <GlassCard>
            <Brain className="w-12 h-12 text-[#FFD700] mb-6" />
            <h2 className="text-2xl font-bold text-white mb-4 font-orbitron">Neural Networks</h2>
            <p className="text-gray-300">
              Layered networks of artificial neurons process complex patterns and relationships.
            </p>
          </GlassCard>

          <GlassCard>
            <Network className="w-12 h-12 text-[#FFD700] mb-6" />
            <h2 className="text-2xl font-bold text-white mb-4 font-orbitron">Architecture</h2>
            <p className="text-gray-300">
              Multiple layers enable the processing of increasingly abstract features.
            </p>
          </GlassCard>

          <GlassCard>
            <Cpu className="w-12 h-12 text-[#FFD700] mb-6" />
            <h2 className="text-2xl font-bold text-white mb-4 font-orbitron">Applications</h2>
            <p className="text-gray-300">
              Powers image recognition, natural language processing, and autonomous systems.
            </p>
          </GlassCard>
        </div>
      </div>
    </div>
  );
};

export default DeepLearning;