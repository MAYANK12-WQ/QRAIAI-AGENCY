import React from 'react';
import { motion } from 'framer-motion';

const NeuralNetworkDiagram = () => {
  const layers = [
    { name: 'Input Layer', neurons: 4, color: '#FFD700', description: 'Receives raw input data' },
    { name: 'Hidden Layer 1', neurons: 6, color: '#9333EA', description: 'Processes low-level features' },
    { name: 'Hidden Layer 2', neurons: 6, color: '#9333EA', description: 'Processes high-level features' },
    { name: 'Output Layer', neurons: 3, color: '#48BB78', description: 'Produces final predictions' }
  ];

  return (
    <div className="relative bg-[#1a0033] rounded-xl p-8">
      <div className="flex justify-between items-center h-[300px]">
        {layers.map((layer, layerIndex) => (
          <motion.div
            key={layer.name}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: layerIndex * 0.2 }}
            className="flex flex-col items-center relative group"
          >
            <div className="text-white text-sm mb-4 font-semibold">{layer.name}</div>
            <div className="flex flex-col space-y-4">
              {Array.from({ length: layer.neurons }).map((_, neuronIndex) => (
                <motion.div
                  key={neuronIndex}
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ delay: layerIndex * 0.2 + neuronIndex * 0.1 }}
                  className="relative"
                >
                  <div 
                    className="w-8 h-8 rounded-full transition-transform duration-300 group-hover:scale-110"
                    style={{ backgroundColor: layer.color }}
                  />
                  <div 
                    className="absolute inset-0 rounded-full blur-sm transition-opacity duration-300 group-hover:opacity-75"
                    style={{ backgroundColor: layer.color, opacity: 0.5 }}
                  />
                </motion.div>
              ))}
            </div>
            
            {/* Layer description tooltip */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: layerIndex * 0.2 + 0.5 }}
              className="absolute top-full mt-4 bg-[#1a0033] border border-purple-500/20 rounded-lg p-4 w-48 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
            >
              <h4 className="text-[#FFD700] font-semibold mb-2">{layer.name}</h4>
              <p className="text-gray-300 text-sm">{layer.description}</p>
            </motion.div>
          </motion.div>
        ))}
      </div>

      {/* Connection lines */}
      <svg className="absolute inset-0 pointer-events-none" style={{ zIndex: -1 }}>
        {layers.slice(0, -1).map((_, layerIndex) => (
          <g key={layerIndex}>
            {Array.from({ length: layers[layerIndex].neurons }).map((_, fromIndex) => (
              Array.from({ length: layers[layerIndex + 1].neurons }).map((_, toIndex) => (
                <motion.line
                  key={`${fromIndex}-${toIndex}`}
                  initial={{ pathLength: 0, opacity: 0 }}
                  animate={{ pathLength: 1, opacity: 0.2 }}
                  transition={{ delay: layerIndex * 0.3 + Math.min(fromIndex, toIndex) * 0.1 }}
                  x1={`${25 + (layerIndex * 33)}%`}
                  y1={`${20 + (fromIndex * 60 / layers[layerIndex].neurons)}%`}
                  x2={`${25 + ((layerIndex + 1) * 33)}%`}
                  y2={`${20 + (toIndex * 60 / layers[layerIndex + 1].neurons)}%`}
                  stroke="url(#gradient)"
                  strokeWidth="1"
                />
              ))
            ))}
          </g>
        ))}
        <defs>
          <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#FFD700" stopOpacity="0.3" />
            <stop offset="100%" stopColor="#9333EA" stopOpacity="0.3" />
          </linearGradient>
        </defs>
      </svg>
    </div>
  );
};

export default NeuralNetworkDiagram;