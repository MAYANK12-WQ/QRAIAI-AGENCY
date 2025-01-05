import React from 'react';
import { motion } from 'framer-motion';
import { Heart, MessageCircle, Shield, Sparkles } from 'lucide-react';
import Breadcrumb from '../../components/Breadcrumb';

const features = [
  {
    icon: MessageCircle,
    title: 'Real-time Support',
    description: 'Instant access to AI-powered emotional support and guidance'
  },
  {
    icon: Shield,
    title: 'Complete Privacy',
    description: 'Secure, confidential conversations with end-to-end encryption'
  },
  {
    icon: Sparkles,
    title: 'Personalized Care',
    description: 'Tailored therapy modules adapted to your unique needs'
  }
];

const GenZTherapist = () => {
  return (
    <div className="pt-20 min-h-screen bg-[#0A0014]">
      <Breadcrumb pageName="Gen Z Therapist" />
      
      {/* Hero Section */}
      <div className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-purple-900/20 to-purple-600/20" />
        <div className="container mx-auto px-4 py-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="max-w-4xl mx-auto text-center"
          >
            <Heart className="w-16 h-16 text-[#FFD700] mx-auto mb-6" />
            <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-purple-400 via-[#FFD700] to-purple-400 text-transparent bg-clip-text">
              Mental Health Redefined for Gen Z
            </h1>
            <p className="text-xl text-gray-300">
              Experience a new era of mental health support with our AI-powered therapist,
              designed specifically for the unique challenges faced by Gen Z.
            </p>
          </motion.div>
        </div>
      </div>

      {/* Features Grid */}
      <div className="container mx-auto px-4 py-20">
        <div className="grid md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2 }}
              className="bg-gradient-to-br from-purple-900/10 to-purple-900/20 rounded-2xl p-6 border border-purple-500/20"
            >
              <feature.icon className="w-12 h-12 text-[#FFD700] mb-4" />
              <h3 className="text-xl font-bold text-white mb-2">{feature.title}</h3>
              <p className="text-gray-300">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </div>

      {/* CTA Section */}
      <div className="container mx-auto px-4 pb-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="bg-gradient-to-br from-purple-900/20 to-purple-900/10 rounded-2xl p-8 text-center"
        >
          <h2 className="text-3xl font-bold text-white mb-6">
            Ready to Start Your Mental Health Journey?
          </h2>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-8 py-4 bg-gradient-to-r from-purple-600 to-purple-800 text-white rounded-full hover:shadow-lg transition-all duration-300"
          >
            Try Free Session
          </motion.button>
        </motion.div>
      </div>
    </div>
  );
};

export default GenZTherapist;