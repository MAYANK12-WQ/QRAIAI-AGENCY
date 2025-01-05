import React from 'react';
import { motion } from 'framer-motion';
import { Brain, Network, Cpu, Database } from 'lucide-react';

const topics = [
  { Icon: Brain, label: 'Artificial Intelligence', color: '#FF1493' },
  { Icon: Network, label: 'Deep Learning', color: '#00FFFF' },
  { Icon: Cpu, label: 'Machine Learning', color: '#FFD700' },
  { Icon: Database, label: 'Neural Networks', color: '#9400D3' }
];

const RevolvingTopics = () => {
  return (
    <div className="absolute inset-0 pointer-events-none">
      {topics.map((topic, index) => (
        <motion.div
          key={topic.label}
          className="absolute"
          initial={{ opacity: 0, scale: 0 }}
          animate={{
            opacity: [0.4, 1, 0.4],
            scale: [0.8, 1, 0.8],
            x: `${Math.cos(index * (Math.PI / 2)) * 300}px`,
            y: `${Math.sin(index * (Math.PI / 2)) * 300}px`,
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            delay: index * 2,
          }}
          style={{
            left: '50%',
            top: '50%',
            transform: 'translate(-50%, -50%)',
          }}
        >
          <div className="flex flex-col items-center space-y-2">
            <topic.Icon 
              className="w-12 h-12"
              style={{ color: topic.color }}
            />
            <span 
              className="text-lg font-bold font-cyberpunk"
              style={{ 
                color: topic.color,
                textShadow: `0 0 10px ${topic.color}`,
              }}
            >
              {topic.label}
            </span>
          </div>
        </motion.div>
      ))}
    </div>
  );
};

export default RevolvingTopics;