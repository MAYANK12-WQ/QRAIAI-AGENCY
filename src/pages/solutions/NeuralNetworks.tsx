import React from 'react';
import { motion } from 'framer-motion';
import { Brain, Network, Zap } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import GlassCard from '../../components/ui/GlassCard';
import NeuralNetworkDiagram from '../../components/diagrams/NeuralNetworkDiagram';
import NeuralNetworkAnimation from '../../components/interactive/NeuralNetworkAnimation';

const NeuralNetworks = () => {
  const navigate = useNavigate();

  // ... rest of your existing code ...

  return (
    <div className="min-h-screen bg-[#0A0014] pt-20">
      {/* ... your existing code ... */}

      {/* Call to Action */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.8 }}
        className="text-center mt-16"
      >
        <h2 className="text-3xl font-bold text-white mb-6 font-orbitron">
          Ready to Dive Deeper?
        </h2>
        <p className="text-gray-300 mb-8">
          Explore our comprehensive resources and start building with neural networks
        </p>
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={() => navigate('/learn/neural-networks-blog')}
          className="bg-gradient-to-r from-purple-600 to-purple-800 text-white px-8 py-4 rounded-full hover:shadow-lg transition-all duration-300"
        >
          Start Learning
        </motion.button>
      </motion.div>
    </div>
  );
};

export default NeuralNetworks;