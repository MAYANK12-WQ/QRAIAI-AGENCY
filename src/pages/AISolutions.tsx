import React from 'react';
import { motion } from 'framer-motion';
import { Brain, Cpu, Network } from 'lucide-react';
import { Link } from 'react-router-dom';
import GlassCard from '../components/ui/GlassCard';

const AISolutions = () => {
  const solutions = [
    {
      icon: Brain,
      title: "Neural Networks",
      description: "Advanced AI systems modeled after human brain function",
      features: ["Pattern Recognition", "Deep Learning", "Cognitive Computing"],
      link: "/solutions/neural-networks"
    },
    {
      icon: Cpu,
      title: "Machine Learning",
      description: "Systems that learn and improve from experience",
      features: ["Predictive Analytics", "Data Mining", "Automated Learning"],
      link: "/solutions/machine-learning"
    },
    {
      icon: Network,
      title: "AI Integration",
      description: "Seamless integration of AI into existing systems",
      features: ["API Integration", "System Automation", "Workflow Optimization"],
      link: "/solutions/ai-integration"
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
            AI Solutions for Tomorrow
          </h1>
          <p className="text-xl text-gray-300">
            Transform your business with our cutting-edge AI solutions
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {solutions.map((solution, index) => (
            <Link key={solution.title} to={solution.link}>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.2 }}
              >
                <GlassCard className="h-full hover:scale-105 transition-transform duration-300">
                  <solution.icon className="w-12 h-12 text-[#FFD700] mb-6" />
                  <h3 className="text-2xl font-bold text-white mb-4 font-orbitron">{solution.title}</h3>
                  <p className="text-gray-300 mb-6">{solution.description}</p>
                  <ul className="space-y-2">
                    {solution.features.map((feature) => (
                      <li key={feature} className="flex items-center text-purple-300">
                        <span className="w-1.5 h-1.5 bg-[#FFD700] rounded-full mr-2" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </GlassCard>
              </motion.div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AISolutions;