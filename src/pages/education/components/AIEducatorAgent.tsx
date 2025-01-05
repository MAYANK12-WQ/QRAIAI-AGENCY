import React from 'react';
import { motion } from 'framer-motion';
import { Brain } from 'lucide-react';
import AIMentorChat from './AIMentorChat';

const AIEducatorAgent = () => {
  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
          >
            <div className="relative">
              <Brain className="w-48 h-48 text-[#FFD700] mx-auto animate-float" />
              <div className="absolute inset-0 bg-gradient-to-br from-purple-600/20 to-[#FFD700]/20 rounded-full blur-3xl" />
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            className="space-y-6"
          >
            <h2 className="text-4xl font-bold text-white">Meet Your AI Mentor</h2>
            <p className="text-xl text-gray-300">
              Get personalized guidance, instant feedback, and 24/7 support from our
              advanced AI Teaching Assistant. Perfect for Gen Z learners!
            </p>
            <div className="flex items-center space-x-4">
              <AIMentorChat />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AIEducatorAgent;