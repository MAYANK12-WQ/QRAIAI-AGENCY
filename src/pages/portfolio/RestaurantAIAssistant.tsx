import React from 'react';
import { motion } from 'framer-motion';
import { MessageSquare, Clock, BarChart2, Settings, ArrowRight } from 'lucide-react';
import Breadcrumb from '../../components/Breadcrumb';
import GlassCard from '../../components/ui/GlassCard';

const features = [
  {
    icon: Clock,
    title: 'Real-time Operations',
    description: 'Instant order processing and kitchen management'
  },
  {
    icon: BarChart2,
    title: 'Smart Analytics',
    description: 'Data-driven insights for menu optimization'
  },
  {
    icon: Settings,
    title: 'Automated Systems',
    description: 'Streamlined workflow and resource management'
  }
];

const RestaurantAIAssistant = () => {
  return (
    <div className="pt-20 min-h-screen bg-[#0A0014]">
      <Breadcrumb pageName="Restaurant AI Assistant" />
      
      {/* Hero Section */}
      <div className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-purple-900/20 to-purple-600/20" />
        <div className="container mx-auto px-4 py-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="max-w-4xl mx-auto text-center"
          >
            <MessageSquare className="w-16 h-16 text-[#FFD700] mx-auto mb-6" />
            <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-purple-400 via-[#FFD700] to-purple-400 text-transparent bg-clip-text">
              AI-Powered Restaurant Assistant
            </h1>
            <p className="text-xl text-gray-300">
              Revolutionize your restaurant operations with intelligent automation
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
                Leading restaurant chain improved operational efficiency by 40% and customer 
                satisfaction by 60% using our AI Assistant.
              </p>
              <ul className="space-y-4 text-gray-300">
                <li className="flex items-center space-x-2">
                  <span className="w-2 h-2 bg-[#FFD700] rounded-full" />
                  <span>Reduced wait times by 45%</span>
                </li>
                <li className="flex items-center space-x-2">
                  <span className="w-2 h-2 bg-[#FFD700] rounded-full" />
                  <span>Increased order accuracy to 99.9%</span>
                </li>
                <li className="flex items-center space-x-2">
                  <span className="w-2 h-2 bg-[#FFD700] rounded-full" />
                  <span>Optimized inventory management</span>
                </li>
              </ul>
            </div>
            <div className="relative h-64 md:h-auto rounded-xl overflow-hidden">
              <img 
                src="https://images.unsplash.com/photo-1517248135467-4c7edcad34c4"
                alt="Restaurant Operations"
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
            Ready to Transform Your Restaurant Operations?
          </h2>
          <p className="text-gray-300 mb-8 max-w-2xl mx-auto">
            Schedule a demo to see how our AI Assistant can revolutionize your restaurant
          </p>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="inline-flex items-center space-x-2 px-8 py-4 bg-gradient-to-r from-purple-600 to-purple-800 text-white rounded-full hover:shadow-lg transition-all duration-300"
          >
            <span>Book a Demo</span>
            <ArrowRight className="w-5 h-5" />
          </motion.button>
        </motion.div>
      </div>
    </div>
  );
};

export default RestaurantAIAssistant;