import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Brain, Rocket, FileText, MessageSquare, Book } from 'lucide-react';
import GlassCard from '../components/ui/GlassCard';
import { Link } from 'react-router-dom';

const learningPaths = [
  {
    id: 'neural-networks',
    title: 'Neural Networks',
    description: 'Deep dive into neural network architecture and applications',
    icon: Brain,
    link: '/learn/neural-networks-blog'
  },
  {
    id: 'machine-learning',
    title: 'Machine Learning',
    description: 'Master machine learning algorithms and techniques',
    icon: Rocket,
    link: '/solutions/machine-learning'
  },
  {
    id: 'ai-integration',
    title: 'AI Integration',
    description: 'Learn to integrate AI into existing systems',
    icon: FileText,
    link: '/solutions/ai-integration'
  }
];

const StartProject = () => {
  const [selectedPath, setSelectedPath] = useState('');

  return (
    <div className="min-h-screen bg-[#0A0014] pt-20">
      <div className="container mx-auto px-4 py-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center max-w-4xl mx-auto mb-16"
        >
          <Brain className="w-16 h-16 text-[#FFD700] mx-auto mb-6" />
          <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-purple-400 via-[#FFD700] to-purple-400 text-transparent bg-clip-text">
            Start Your AI Journey
          </h1>
          <p className="text-xl text-gray-300">
            Choose your learning path and master AI concepts through interactive lessons
          </p>
        </motion.div>

        {/* Learning Paths */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {learningPaths.map((path) => (
            <Link key={path.id} to={path.link}>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                whileHover={{ scale: 1.02 }}
                className="cursor-pointer h-full"
              >
                <GlassCard className={`h-full border-2 transition-colors ${
                  selectedPath === path.id ? 'border-[#FFD700]' : 'border-transparent'
                }`}>
                  <path.icon className="w-12 h-12 text-[#FFD700] mb-4" />
                  <h3 className="text-xl font-bold text-white mb-2">{path.title}</h3>
                  <p className="text-gray-300">{path.description}</p>
                  <div className="mt-6 flex items-center text-[#FFD700]">
                    <Book className="w-5 h-5 mr-2" />
                    <span>Start Learning</span>
                  </div>
                </GlassCard>
              </motion.div>
            </Link>
          ))}
        </div>

        {/* Additional Resources */}
        <GlassCard className="max-w-3xl mx-auto text-center">
          <h2 className="text-2xl font-bold text-white mb-6">
            Need Personalized Guidance?
          </h2>
          <p className="text-gray-300 mb-8">
            Connect with our AI experts for a customized learning plan
          </p>
          <motion.button
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="bg-gradient-to-r from-purple-600 to-purple-800 text-white px-8 py-4 rounded-xl hover:shadow-lg transition-all duration-300 flex items-center justify-center space-x-2 mx-auto"
          >
            <MessageSquare className="w-5 h-5" />
            <span>Schedule a Consultation</span>
          </motion.button>
        </GlassCard>
      </div>
    </div>
  );
};

export default StartProject;