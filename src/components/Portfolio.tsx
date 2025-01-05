import React from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';

const Portfolio = () => {
  const navigate = useNavigate();
  
  return (
    <div>
      {/* ... existing code ... */}
      
      <motion.button
        onClick={() => navigate('/start-project')}
        className="bg-gradient-to-r from-purple-600 to-purple-800 text-white px-8 py-4 rounded-full hover:shadow-lg transition-all duration-300"
      >
        Start a Project
      </motion.button>
      
      {/* ... rest of the code ... */}
    </div>
  );
};