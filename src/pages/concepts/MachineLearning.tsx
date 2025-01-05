import React from 'react';
import { motion } from 'framer-motion';
import { Network, Database, LineChart } from 'lucide-react';
import GlassCard from '../../components/ui/GlassCard';

const MachineLearning = () => {
  return (
    <div className="min-h-screen bg-[#0A0014] pt-20">
      <div className="container mx-auto px-4 py-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center max-w-4xl mx-auto mb-16"
        >
          <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-purple-400 via-[#FFD700] to-purple-400 text-transparent bg-clip-text font-orbitron">
            Machine Learning
          </h1>
          <p className="text-xl text-gray-300">
            Empowering systems to learn and improve from experience
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8 mb-16">
          <GlassCard>
            <Database className="w-12 h-12 text-[#FFD700] mb-6" />
            <h2 className="text-2xl font-bold text-white mb-4 font-orbitron">Data Processing</h2>
            <p className="text-gray-300">
              ML systems analyze vast amounts of data to identify patterns and make predictions.
            </p>
          </GlassCard>

          <GlassCard>
            <Network className="w-12 h-12 text-[#FFD700] mb-6" />
            <h2 className="text-2xl font-bold text-white mb-4 font-orbitron">Algorithm Types</h2>
            <p className="text-gray-300">
              From supervised to unsupervised learning, different approaches solve various challenges.
            </p>
          </GlassCard>

          <GlassCard>
            <LineChart className="w-12 h-12 text-[#FFD700] mb-6" />
            <h2 className="text-2xl font-bold text-white mb-4 font-orbitron">Applications</h2>
            <p className="text-gray-300">
              ML powers recommendation systems, fraud detection, and predictive maintenance.
            </p>
          </GlassCard>
        </div>
      </div>
    </div>
  );
};

export default MachineLearning;