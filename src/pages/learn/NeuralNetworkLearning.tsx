import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Brain, Book, Code, Play, Award } from 'lucide-react';
import InteractiveNeuralNetwork from '../../components/interactive/InteractiveNeuralNetwork';
import NeuralNetworkPlayground from '../../components/interactive/NeuralNetworkPlayground';
import LearningAssistant from '../../components/learning/LearningAssistant';

const NeuralNetworkLearning = () => {
  const [showAssistant, setShowAssistant] = useState(false);
  const [activeSection, setActiveSection] = useState('visualization');

  const sections = [
    {
      id: 'visualization',
      title: 'Interactive Visualization',
      icon: Brain,
      component: InteractiveNeuralNetwork
    },
    {
      id: 'playground',
      title: 'Neural Network Playground',
      icon: Play,
      component: NeuralNetworkPlayground
    }
  ];

  const concepts = [
    {
      title: 'Neurons & Synapses',
      description: 'Understanding the basic building blocks of neural networks',
      progress: 0
    },
    {
      title: 'Forward Propagation',
      description: 'How information flows through the network',
      progress: 0
    },
    {
      title: 'Backpropagation',
      description: 'Learning from errors and adjusting weights',
      progress: 0
    }
  ];

  return (
    <div className="min-h-screen bg-[#0A0014] pt-20">
      <div className="container mx-auto px-4 py-20">
        {/* Hero Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center max-w-4xl mx-auto mb-16"
        >
          <Brain className="w-16 h-16 text-[#FFD700] mx-auto mb-6" />
          <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-purple-400 via-[#FFD700] to-purple-400 text-transparent bg-clip-text font-orbitron">
            Neural Networks Explained
          </h1>
          <p className="text-xl text-gray-300">
            Dive deep into neural networks with interactive visualizations and hands-on learning
          </p>
        </motion.div>

        {/* Interactive Sections */}
        <div className="grid lg:grid-cols-3 gap-8 mb-16">
          <div className="lg:col-span-2">
            <div className="bg-gradient-to-br from-purple-900/10 to-purple-900/20 rounded-2xl p-6 border border-purple-500/20">
              {/* Section Tabs */}
              <div className="flex space-x-4 mb-6">
                {sections.map((section) => (
                  <button
                    key={section.id}
                    onClick={() => setActiveSection(section.id)}
                    className={`flex items-center space-x-2 px-4 py-2 rounded-lg transition-all duration-300 ${
                      activeSection === section.id
                        ? 'bg-purple-600 text-white'
                        : 'text-gray-400 hover:text-white'
                    }`}
                  >
                    <section.icon className="w-5 h-5" />
                    <span>{section.title}</span>
                  </button>
                ))}
              </div>

              {/* Active Section Content */}
              {sections.map((section) => (
                activeSection === section.id && (
                  <section.component key={section.id} />
                )
              ))}
            </div>
          </div>

          {/* Learning Progress */}
          <div className="space-y-6">
            {concepts.map((concept, index) => (
              <motion.div
                key={concept.title}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.1 }}
                className="bg-gradient-to-br from-purple-900/10 to-purple-900/20 rounded-xl p-6 border border-purple-500/20"
              >
                <h3 className="text-xl font-bold text-white mb-2">{concept.title}</h3>
                <p className="text-gray-400 mb-4">{concept.description}</p>
                <div className="w-full h-2 bg-purple-900/20 rounded-full overflow-hidden">
                  <motion.div
                    className="h-full bg-[#FFD700]"
                    initial={{ width: 0 }}
                    animate={{ width: `${concept.progress}%` }}
                    transition={{ duration: 1, delay: index * 0.2 }}
                  />
                </div>
              </motion.div>
            ))}

            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setShowAssistant(true)}
              className="w-full bg-gradient-to-r from-purple-600 to-purple-800 text-white py-4 rounded-xl hover:shadow-lg transition-all duration-300"
            >
              Get Help from AI Assistant
            </motion.button>
          </div>
        </div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mt-16"
        >
          <h2 className="text-3xl font-bold text-white mb-6">Ready to Test Your Knowledge?</h2>
          <div className="flex justify-center space-x-4">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-[#FFD700] text-[#0A0014] px-8 py-4 rounded-full hover:shadow-lg transition-all duration-300"
            >
              Take Quiz
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-purple-600 text-white px-8 py-4 rounded-full hover:shadow-lg transition-all duration-300"
            >
              Next Lesson
            </motion.button>
          </div>
        </motion.div>

        {/* AI Learning Assistant */}
        <LearningAssistant isOpen={showAssistant} onClose={() => setShowAssistant(false)} />
      </div>
    </div>
  );
};

export default NeuralNetworkLearning;