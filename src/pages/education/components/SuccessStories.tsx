import React from 'react';
import { motion } from 'framer-motion';
import { Star } from 'lucide-react';
import GlassCard from '../../../components/ui/GlassCard';

const SuccessStories = () => {
  const stories = [
    {
      name: "Sarah Chen",
      role: "Data Scientist",
      company: "Tech Innovators Inc.",
      quote: "The AI curriculum transformed my career trajectory completely."
    },
    {
      name: "James Wilson",
      role: "AI Developer",
      company: "Future Systems",
      quote: "Hands-on projects and real-world applications made learning engaging."
    },
    {
      name: "Maria Garcia",
      role: "Product Manager",
      company: "Innovation Labs",
      quote: "The AI certification helped me lead AI initiatives in my organization."
    }
  ];

  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center text-white mb-12">
          Success Stories
        </h2>
        <div className="grid md:grid-cols-3 gap-8">
          {stories.map((story, index) => (
            <motion.div
              key={story.name}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2 }}
            >
              <GlassCard>
                <Star className="w-8 h-8 text-[#FFD700] mb-4" />
                <p className="text-gray-300 italic mb-4">"{story.quote}"</p>
                <div className="text-white font-bold">{story.name}</div>
                <div className="text-gray-400">{story.role}</div>
                <div className="text-gray-400">{story.company}</div>
              </GlassCard>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SuccessStories;