import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Settings, Play, Pause, RefreshCw } from 'lucide-react';
import InteractiveNeuralNetwork from './InteractiveNeuralNetwork';

const NeuralNetworkPlayground = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [learningRate, setLearningRate] = useState(0.1);
  const [layers, setLayers] = useState([4, 6, 6, 3]);

  return (
    <div className="space-y-6">
      {/* Controls */}
      <div className="flex items-center justify-between">
        <div className="flex items-center space-x-4">
          <button
            onClick={() => setIsPlaying(!isPlaying)}
            className="p-2 rounded-lg bg-purple-600 text-white hover:bg-purple-700 transition-colors"
          >
            {isPlaying ? <Pause className="w-5 h-5" /> : <Play className="w-5 h-5" />}
          </button>
          <button
            onClick={() => {/* Reset network */}}
            className="p-2 rounded-lg bg-purple-600 text-white hover:bg-purple-700 transition-colors"
          >
            <RefreshCw className="w-5 h-5" />
          </button>
        </div>

        <button
          className="flex items-center space-x-2 px-4 py-2 rounded-lg bg-purple-600 text-white hover:bg-purple-700 transition-colors"
        >
          <Settings className="w-5 h-5" />
          <span>Settings</span>
        </button>
      </div>

      {/* Network Visualization */}
      <div className="bg-[#0A0014] rounded-xl p-6">
        <InteractiveNeuralNetwork />
      </div>

      {/* Parameters */}
      <div className="grid grid-cols-2 gap-4">
        <div>
          <label className="block text-sm text-gray-400 mb-2">Learning Rate</label>
          <input
            type="range"
            min="0.01"
            max="1"
            step="0.01"
            value={learningRate}
            onChange={(e) => setLearningRate(parseFloat(e.target.value))}
            className="w-full"
          />
          <div className="text-white text-center">{learningRate}</div>
        </div>

        <div>
          <label className="block text-sm text-gray-400 mb-2">Network Architecture</label>
          <div className="flex items-center space-x-2">
            {layers.map((neurons, i) => (
              <React.Fragment key={i}>
                <input
                  type="number"
                  value={neurons}
                  onChange={(e) => {
                    const newLayers = [...layers];
                    newLayers[i] = parseInt(e.target.value);
                    setLayers(newLayers);
                  }}
                  className="w-16 bg-purple-900/50 border border-purple-500/20 rounded-lg px-2 py-1 text-white text-center"
                />
                {i < layers.length - 1 && (
                  <span className="text-gray-400">→</span>
                )}
              </React.Fragment>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default NeuralNetworkPlayground;