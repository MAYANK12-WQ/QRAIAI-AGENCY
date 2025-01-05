import React from 'react';
import { motion } from 'framer-motion';
import { Book, Users, Award } from 'lucide-react';
import GlassCard from '../../../components/ui/GlassCard';

const LearningModules = () => {
  const modules = [
    {
      icon: Book,
      title: 'Comprehensive Courses',
      description: 'Learn AI fundamentals through advanced topics'
    },
    {
      icon: Users,
      title: 'Corporate Training',
      description: 'Tailored programs for businesses and teams'
    },
    {
      icon: Award,
      title: 'Certifications',
      description: 'Industry-recognized credentials'
    }
  ];

  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-3 gap-8">
          {modules.map((module, index) => (
            <motion.div
              key={module.title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2 }}
            >
              <GlassCard>
                <module.icon className="w-12 h-12 text-[#FFD700] mb-4" />
                <h3 className="text-xl font-bold text-white mb-2">{module.title}</h3>
                <p className="text-gray-300">{module.description}</p>
              </GlassCard>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default LearningModules;