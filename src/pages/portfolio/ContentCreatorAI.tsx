import React from 'react';
import { motion } from 'framer-motion';
import { Sparkles, Image, MessageSquare, Zap, ArrowRight } from 'lucide-react';
import Breadcrumb from '../../components/Breadcrumb';
import GlassCard from '../../components/ui/GlassCard';

const features = [
  {
    icon: Image,
    title: 'Visual Content Generation',
    description: 'Create stunning visuals and graphics with AI assistance'
  },
  {
    icon: MessageSquare,
    title: 'Smart Copywriting',
    description: 'Generate engaging content that resonates with your audience'
  },
  {
    icon: Zap,
    title: 'Rapid Creation',
    description: 'Produce high-quality content in minutes, not hours'
  }
];

const ContentCreatorAI = () => {
  return (
    <div className="pt-20 min-h-screen bg-[#0A0014]">
      <Breadcrumb pageName="Content Creator AI" />
      
      {/* Hero Section */}
      <div className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-purple-900/20 to-purple-600/20" />
        <div className="container mx-auto px-4 py-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="max-w-4xl mx-auto text-center"
          >
            <Sparkles className="w-16 h-16 text-[#FFD700] mx-auto mb-6" />
            <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-purple-400 via-[#FFD700] to-purple-400 text-transparent bg-clip-text">
              AI-Powered Content Creation
            </h1>
            <p className="text-xl text-gray-300">
              Transform your content strategy with our advanced AI content creation platform
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
            >
              <GlassCard>
                <feature.icon className="w-12 h-12 text-[#FFD700] mb-6" />
                <h3 className="text-2xl font-bold text-white mb-4">{feature.title}</h3>
                <p className="text-gray-300">{feature.description}</p>
              </GlassCard>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Case Study */}
      <div className="container mx-auto px-4 py-20">
        <GlassCard>
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h2 className="text-3xl font-bold text-white mb-6">Success Story</h2>
              <p className="text-gray-300 mb-6">
                Leading digital marketing agency increased content production by 300% while maintaining 
                high quality standards using our AI Content Creator.
              </p>
              <ul className="space-y-4 text-gray-300">
                <li className="flex items-center space-x-2">
                  <span className="w-2 h-2 bg-[#FFD700] rounded-full" />
                  <span>Reduced content creation time by 75%</span>
                </li>
                <li className="flex items-center space-x-2">
                  <span className="w-2 h-2 bg-[#FFD700] rounded-full" />
                  <span>Increased engagement rates by 50%</span>
                </li>
                <li className="flex items-center space-x-2">
                  <span className="w-2 h-2 bg-[#FFD700] rounded-full" />
                  <span>Consistent brand voice across all channels</span>
                </li>
              </ul>
            </div>
            <div className="relative h-64 md:h-auto rounded-xl overflow-hidden">
              <img 
                src="https://images.unsplash.com/photo-1611162616475-46b635cb6868"
                alt="Content Creation"
                className="absolute inset-0 w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0A0014] to-transparent" />
            </div>
          </div>
        </GlassCard>
      </div>

      {/* CTA Section */}
      <div className="container mx-auto px-4 pb-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="bg-gradient-to-br from-purple-900/20 to-purple-900/10 rounded-2xl p-8 text-center"
        >
          <h2 className="text-3xl font-bold text-white mb-6">
            Ready to Transform Your Content Creation?
          </h2>
          <p className="text-gray-300 mb-8 max-w-2xl mx-auto">
            Book a demo to see how our AI Content Creator can revolutionize your content strategy
          </p>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="inline-flex items-center space-x-2 px-8 py-4 bg-gradient-to-r from-purple-600 to-purple-800 text-white rounded-full hover:shadow-lg transition-all duration-300"
          >
            <span>Book a Meeting</span>
            <ArrowRight className="w-5 h-5" />
          </motion.button>
        </motion.div>
      </div>
    </div>
  );
};

export default ContentCreatorAI;