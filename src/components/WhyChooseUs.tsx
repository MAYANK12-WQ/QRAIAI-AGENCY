import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Brain, Layers, HeartHandshake } from 'lucide-react';
import { motion } from 'framer-motion';

const FeatureCard = ({ icon: Icon, title, description, link }: { icon: any, title: string, description: string, link: string }) => {
  const navigate = useNavigate();
  
  return (
    <motion.div 
      onClick={() => navigate(link)}
      whileHover={{ scale: 1.05 }}
      className="bg-[#0A0014]/40 backdrop-blur-sm p-8 rounded-2xl border border-[#4B0082]/20 hover:border-[#FFD700]/20 transition-all duration-300 cursor-pointer"
    >
      <div className="w-14 h-14 bg-gradient-to-br from-[#4B0082] to-[#4169E1] rounded-xl flex items-center justify-center mb-6">
        <Icon className="w-8 h-8 text-[#FFD700]" />
      </div>
      <h3 className="text-xl font-orbitron text-white mb-4">{title}</h3>
      <p className="text-gray-400">{description}</p>
    </motion.div>
  );
};

const WhyChooseUs = () => {
  const features = [
    {
      icon: Brain,
      title: 'What is AI?',
      description: 'Discover the fundamentals of Artificial Intelligence and its transformative potential.',
      link: '/concepts/what-is-ai'
    },
    {
      icon: Layers,
      title: 'Machine Learning',
      description: 'Explore how machines learn from data to make intelligent decisions.',
      link: '/concepts/machine-learning'
    },
    {
      icon: HeartHandshake,
      title: 'Deep Learning',
      description: 'Understand advanced neural networks and their applications.',
      link: '/concepts/deep-learning'
    }
  ];

  return (
    <section className="py-20 bg-[#0A0014]">
      <div className="container mx-auto px-4">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-4xl font-orbitron text-center text-white mb-16"
        >
          Explore AI <span className="text-[#FFD700]">Concepts</span>
        </motion.h2>
        <div className="grid md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
            >
              <FeatureCard {...feature} />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;