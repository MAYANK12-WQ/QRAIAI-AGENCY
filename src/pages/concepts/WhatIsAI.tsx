import React from 'react';
import { motion } from 'framer-motion';
import { Brain, Cpu, Network } from 'lucide-react';
import GlassCard from '../../components/ui/GlassCard';

const WhatIsAI = () => {
  return (
    <div className="min-h-screen bg-[#0A0014] pt-20">
      <div className="container mx-auto px-4 py-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center max-w-4xl mx-auto mb-16"
        >
          <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-purple-400 via-[#FFD700] to-purple-400 text-transparent bg-clip-text font-orbitron">
            What is Artificial Intelligence?
          </h1>
          <p className="text-xl text-gray-300">
            Understanding the technology that's reshaping our world
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8 mb-16">
          <GlassCard>
            <Brain className="w-12 h-12 text-[#FFD700] mb-6" />
            <h2 className="text-2xl font-bold text-white mb-4 font-orbitron">Core Concepts</h2>
            <p className="text-gray-300">
              AI systems are designed to mimic human intelligence through various approaches including
              machine learning, neural networks, and expert systems.
            </p>
          </GlassCard>

          <GlassCard>
            <Network className="w-12 h-12 text-[#FFD700] mb-6" />
            <h2 className="text-2xl font-bold text-white mb-4 font-orbitron">Applications</h2>
            <p className="text-gray-300">
              From virtual assistants to autonomous vehicles, AI is transforming industries and creating
              new possibilities across sectors.
            </p>
          </GlassCard>
        </div>

        <GlassCard className="mb-16">
          <h2 className="text-2xl font-bold text-white mb-6 font-orbitron">How AI Works</h2>
          <div className="space-y-4 text-gray-300">
            <p>
              AI systems process data through sophisticated algorithms, learning from patterns and
              experiences to make intelligent decisions.
            </p>
            <ul className="list-disc list-inside space-y-2">
              <li>Pattern Recognition</li>
              <li>Decision Making</li>
              <li>Natural Language Processing</li>
              <li>Computer Vision</li>
            </ul>
          </div>
        </GlassCard>
      </div>
    </div>
  );
};

export default WhatIsAI;