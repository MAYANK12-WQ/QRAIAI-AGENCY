import React from 'react';
import { motion } from 'framer-motion';
import { Book, Video, Code, Award } from 'lucide-react';

const resources = [
  {
    icon: Book,
    title: 'Interactive Tutorials',
    items: [
      'Neural Network Basics',
      'Deep Learning Fundamentals',
      'AI Applications'
    ]
  },
  {
    icon: Video,
    title: 'Video Lessons',
    items: [
      'Understanding AI Concepts',
      'Practical Implementation',
      'Case Studies'
    ]
  },
  {
    icon: Code,
    title: 'Hands-on Projects',
    items: [
      'Build a Neural Network',
      'Image Recognition System',
      'Natural Language Processing'
    ]
  },
  {
    icon: Award,
    title: 'Certifications',
    items: [
      'AI Fundamentals',
      'Deep Learning Specialist',
      'AI Applications Expert'
    ]
  }
];

const CourseContent = () => {
  return (
    <div>
      <h2 className="text-3xl font-bold text-white mb-8 font-orbitron">Course Content</h2>
      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
        {resources.map((resource, index) => (
          <motion.div
            key={resource.title}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.2 }}
            className="bg-gradient-to-br from-purple-900/10 to-purple-900/20 rounded-2xl p-6 border border-purple-500/20"
          >
            <resource.icon className="w-10 h-10 text-[#FFD700] mb-4" />
            <h3 className="text-xl font-bold text-white mb-4">{resource.title}</h3>
            <ul className="space-y-2">
              {resource.items.map((item) => (
                <li key={item} className="flex items-center text-gray-300 hover:text-white transition-colors">
                  <span className="w-1.5 h-1.5 bg-[#FFD700] rounded-full mr-2" />
                  {item}
                </li>
              ))}
            </ul>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default CourseContent;