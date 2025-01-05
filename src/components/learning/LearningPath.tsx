import React from 'react';
import { motion } from 'framer-motion';
import { Brain, Network, Cpu, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const modules = [
  {
    icon: Brain,
    title: 'Neural Networks Fundamentals',
    description: 'Learn the basics of neural networks and their architecture',
    duration: '2 hours',
    link: '/learn/neural-networks'
  },
  {
    icon: Network,
    title: 'Deep Learning Concepts',
    description: 'Explore advanced deep learning techniques and applications',
    duration: '3 hours',
    link: '/learn/deep-learning'
  },
  {
    icon: Cpu,
    title: 'AI Applications',
    description: 'Discover real-world applications of AI technologies',
    duration: '2.5 hours',
    link: '/learn/ai-applications'
  }
];

const LearningPath = () => {
  return (
    <div className="mb-20">
      <h2 className="text-3xl font-bold text-white mb-8 font-orbitron">Learning Path</h2>
      <div className="grid md:grid-cols-3 gap-8">
        {modules.map((module, index) => (
          <Link key={module.title} to={module.link}>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2 }}
              className="bg-gradient-to-br from-purple-900/10 to-purple-900/20 rounded-2xl p-6 border border-purple-500/20 hover:border-[#FFD700]/30 transition-all duration-300 group"
            >
              <module.icon className="w-12 h-12 text-[#FFD700] mb-4 group-hover:scale-110 transition-transform duration-300" />
              <h3 className="text-xl font-bold text-white mb-2">{module.title}</h3>
              <p className="text-gray-300 mb-4">{module.description}</p>
              <div className="flex items-center justify-between text-sm">
                <span className="text-purple-300">{module.duration}</span>
                <span className="text-[#FFD700] group-hover:translate-x-2 transition-transform duration-300 flex items-center">
                  Start Learning <ArrowRight className="w-4 h-4 ml-1" />
                </span>
              </div>
            </motion.div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default LearningPath;