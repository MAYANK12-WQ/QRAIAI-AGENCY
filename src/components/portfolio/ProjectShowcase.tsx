import React from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { Brain, ArrowRight } from 'lucide-react';
import ProjectCard from './ProjectCard';

const ProjectShowcase = () => {
  const navigate = useNavigate();

  // ... existing projects array and code ...

  return (
    <div>
      {/* ... existing grid code ... */}

      {/* CTA Section */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-center mt-20"
      >
        <h2 className="text-3xl font-bold text-white mb-6">
          Ready to Build Something Amazing?
        </h2>
        <p className="text-gray-300 mb-8 max-w-2xl mx-auto">
          Let's discuss how our AI solutions can transform your business
        </p>
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={() => navigate('/start-project')}
          className="group inline-flex items-center space-x-3 bg-gradient-to-r from-purple-600 to-purple-800 text-white px-8 py-4 rounded-full hover:shadow-lg hover:shadow-purple-500/25 transition-all duration-300"
        >
          <Brain className="w-5 h-5" />
          <span>Start a Project</span>
          <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
        </motion.button>
      </motion.div>
    </div>
  );
};

export default ProjectShowcase;