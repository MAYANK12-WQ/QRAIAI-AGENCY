import React from 'react';
import { motion } from 'framer-motion';
import { Play, Pause, RefreshCw } from 'lucide-react';

interface NeuralNetworkControlsProps {
  isPlaying: boolean;
  onPlayPause: () => void;
  onReset: () => void;
}

const NeuralNetworkControls: React.FC<NeuralNetworkControlsProps> = ({
  isPlaying,
  onPlayPause,
  onReset
}) => {
  return (
    <div className="flex items-center space-x-4">
      <motion.button
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        onClick={onPlayPause}
        className="p-2 rounded-lg bg-purple-600 text-white hover:bg-purple-700 transition-colors"
      >
        {isPlaying ? <Pause className="w-5 h-5" /> : <Play className="w-5 h-5" />}
      </motion.button>
      <motion.button
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        onClick={onReset}
        className="p-2 rounded-lg bg-purple-600 text-white hover:bg-purple-700 transition-colors"
      >
        <RefreshCw className="w-5 h-5" />
      </motion.button>
    </div>
  );
};

export default NeuralNetworkControls;