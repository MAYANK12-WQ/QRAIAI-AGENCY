import React from 'react';
import { motion } from 'framer-motion';
import { Brain, Target, GamepadIcon } from 'lucide-react';
import GlassCard from '../../../components/ui/GlassCard';

const InteractiveFeatures = () => {
  const features = [
    {
      icon: Brain,
      title: 'Adaptive Learning',
      description: 'AI-powered personalized learning paths'
    },
    {
      icon: Target,
      title: 'Skill Assessment',
      description: 'Real-time progress tracking'
    },
    {
      icon: GamepadIcon,
      title: 'Gamified Learning',
      description: 'Engaging exercises and challenges'
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-purple-900/20 to-purple-600/20">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center text-white mb-12">
          Interactive Learning Experience
        </h2>
        <div className="grid md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2 }}
            >
              <GlassCard>
                <feature.icon className="w-12 h-12 text-[#FFD700] mb-4" />
                <h3 className="text-xl font-bold text-white mb-2">{feature.title}</h3>
                <p className="text-gray-300">{feature.description}</p>
              </GlassCard>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default InteractiveFeatures;