import React from 'react';
import { motion } from 'framer-motion';
import { Brain, Network, Cpu, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import GlassCard from '../../components/ui/GlassCard';

const CoreConcepts = () => {
  const concepts = [
    {
      title: "Understanding Neural Networks",
      excerpt: "Explore how artificial neural networks mimic the human brain's structure to process information and learn from data.",
      image: "https://images.unsplash.com/photo-1677442136019-21780ecad995",
      readTime: "8 min read",
      icon: Brain
    },
    {
      title: "The Evolution of Machine Learning",
      excerpt: "Discover the journey from traditional programming to modern machine learning approaches.",
      image: "https://images.unsplash.com/photo-1620712943543-bcc4688e7485",
      readTime: "10 min read",
      icon: Network
    },
    {
      title: "Deep Learning Architecture",
      excerpt: "Learn about the layered structure of deep learning models and how they process complex patterns.",
      image: "https://images.unsplash.com/photo-1555949963-ff9fe0c870eb",
      readTime: "12 min read",
      icon: Cpu
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
            Core AI Concepts
          </h1>
          <p className="text-xl text-gray-300">
            Deep dive into the fundamental concepts that power artificial intelligence
          </p>
        </motion.div>

        <div className="space-y-12">
          {concepts.map((concept, index) => (
            <motion.div
              key={concept.title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2 }}
            >
              <GlassCard className="overflow-hidden">
                <div className="grid md:grid-cols-2 gap-8">
                  <div className="relative h-64 md:h-auto">
                    <img
                      src={concept.image}
                      alt={concept.title}
                      className="absolute inset-0 w-full h-full object-cover rounded-lg"
                    />
                    <div className="absolute inset-0 bg-gradient-to-r from-purple-900/50 to-transparent rounded-lg" />
                  </div>
                  <div className="flex flex-col justify-center">
                    <concept.icon className="w-12 h-12 text-[#FFD700] mb-4" />
                    <h2 className="text-2xl font-bold text-white mb-4 font-orbitron">
                      {concept.title}
                    </h2>
                    <p className="text-gray-300 mb-6">{concept.excerpt}</p>
                    <div className="flex items-center justify-between">
                      <span className="text-purple-300">{concept.readTime}</span>
                      <Link
                        to="#"
                        className="flex items-center text-[#FFD700] hover:text-white transition-colors"
                      >
                        Read More <ArrowRight className="w-4 h-4 ml-2" />
                      </Link>
                    </div>
                  </div>
                </div>
              </GlassCard>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CoreConcepts;