import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Brain, Book, MessageSquare, Award } from 'lucide-react';
import AILearningAssistant from '../components/learning/AILearningAssistant';
import CourseContent from '../components/learning/CourseContent';
import LearningPath from '../components/learning/LearningPath';

const LearningPortal = () => {
  const [showAssistant, setShowAssistant] = useState(false);

  return (
    <div className="min-h-screen bg-[#0A0014] pt-20">
      <div className="container mx-auto px-4 py-20">
        {/* Hero Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center max-w-4xl mx-auto mb-16"
        >
          <Brain className="w-16 h-16 text-[#FFD700] mx-auto mb-6" />
          <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-purple-400 via-[#FFD700] to-purple-400 text-transparent bg-clip-text font-orbitron">
            Your AI Learning Journey
          </h1>
          <p className="text-xl text-gray-300">
            Master AI concepts with interactive lessons and personalized guidance
          </p>
        </motion.div>

        {/* Learning Path */}
        <LearningPath />

        {/* Course Content */}
        <CourseContent />

        {/* AI Learning Assistant Button */}
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={() => setShowAssistant(true)}
          className="fixed bottom-8 right-8 bg-gradient-to-r from-purple-600 to-purple-800 text-white p-4 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 flex items-center space-x-2"
        >
          <MessageSquare className="w-6 h-6" />
          <span>AI Assistant</span>
        </motion.button>

        {/* AI Learning Assistant Modal */}
        <AILearningAssistant 
          isOpen={showAssistant} 
          onClose={() => setShowAssistant(false)} 
        />
      </div>
    </div>
  );
};

export default LearningPortal;