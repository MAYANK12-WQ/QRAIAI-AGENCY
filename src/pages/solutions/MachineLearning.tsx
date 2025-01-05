import React from 'react';
import { motion } from 'framer-motion';
import { Cpu, Database, LineChart } from 'lucide-react';
import GlassCard from '../../components/ui/GlassCard';
import MLAlgorithmVisualizer from '../../components/interactive/MLAlgorithmVisualizer';

const MachineLearning = () => {
  const algorithms = [
    {
      icon: Database,
      title: "Supervised Learning",
      description: "Learn from labeled data to make predictions"
    },
    {
      icon: LineChart,
      title: "Unsupervised Learning",
      description: "Discover patterns in unlabeled data"
    },
    {
      icon: Cpu,
      title: "Reinforcement Learning",
      description: "Learn optimal actions through trial and error"
    }
  ];

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
            Discover how machines learn from data
          </p>
        </motion.div>

        {/* Interactive ML Algorithm Visualization */}
        <GlassCard className="mb-16">
          <MLAlgorithmVisualizer />
        </GlassCard>

        {/* Algorithm Types */}
        <div className="grid md:grid-cols-3 gap-8">
          {algorithms.map((algo, index) => (
            <motion.div
              key={algo.title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2 }}
            >
              <GlassCard>
                <algo.icon className="w-12 h-12 text-[#FFD700] mb-6" />
                <h3 className="text-2xl font-bold text-white mb-4 font-orbitron">
                  {algo.title}
                </h3>
                <p className="text-gray-300">{algo.description}</p>
              </GlassCard>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default MachineLearning;