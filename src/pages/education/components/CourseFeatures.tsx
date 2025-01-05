import React from 'react';
import { motion } from 'framer-motion';
import { Clock, Book, Users, Award } from 'lucide-react';
import GlassCard from '../../../components/ui/GlassCard';

const CourseFeatures = () => {
  const features = [
    {
      icon: Clock,
      title: 'Flexible Learning',
      description: 'Learn at your own pace with 24/7 access'
    },
    {
      icon: Book,
      title: 'Rich Content',
      description: 'Video lectures, interactive exercises, and projects'
    },
    {
      icon: Users,
      title: 'Expert Support',
      description: 'Get help from AI experts and mentors'
    },
    {
      icon: Award,
      title: 'Certification',
      description: 'Earn industry-recognized credentials'
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-purple-900/20 to-purple-600/20">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center text-white mb-12">
          Course Features
        </h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
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

export default CourseFeatures;