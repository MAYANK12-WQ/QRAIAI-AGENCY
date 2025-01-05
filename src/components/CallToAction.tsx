import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Calendar, ArrowRight, Brain } from 'lucide-react';
import { motion } from 'framer-motion';

const CallToAction = () => {
  const navigate = useNavigate();

  return (
    <div className="py-16 bg-[#0A0014]/60">
      <div className="container mx-auto px-4 text-center">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="max-w-2xl mx-auto mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Ready to Build Something Amazing?
          </h2>
          <p className="text-gray-300 text-lg">
            Let's discuss how our AI solutions can transform your business
          </p>
        </motion.div>

        <div className="flex flex-col md:flex-row items-center justify-center space-y-4 md:space-y-0 md:space-x-6">
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => navigate('/start-project')}
            className="group bg-gradient-to-r from-purple-600 to-purple-800 text-white px-8 py-4 rounded-full font-semibold flex items-center space-x-2 transition-all duration-200 hover:shadow-lg hover:shadow-purple-500/25"
          >
            <Brain className="w-5 h-5" />
            <span>Start a Project</span>
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </motion.button>

          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => navigate('/schedule-call')}
            className="flex items-center space-x-2 bg-[#4B0082] hover:bg-[#4B0082]/80 text-white px-8 py-4 rounded-full transition-all duration-200 hover:shadow-lg"
          >
            <Calendar className="w-5 h-5" />
            <span>Schedule a Call</span>
          </motion.button>
        </div>
      </div>
    </div>
  );
};

export default CallToAction;