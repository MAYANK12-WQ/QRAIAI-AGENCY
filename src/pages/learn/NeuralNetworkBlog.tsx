import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Brain, Network, Zap, Code, Book, LineChart } from 'lucide-react';
import GlassCard from '../../components/ui/GlassCard';
import NeuralNetworkVisualization from '../../components/interactive/NeuralNetworkVisualization';
import NeuralNetworkControls from '../../components/interactive/NeuralNetworkControls';

const sections = [
  {
    id: 'basics',
    title: 'Neural Network Basics',
    icon: Brain,
    content: {
      intro: `Neural networks are computational models inspired by the human brain's biological neural networks. They form the foundation of modern artificial intelligence and deep learning systems.`,
      details: [
        {
          title: 'What is a Neuron?',
          text: 'Artificial neurons are the basic units that receive, process, and transmit information. Each neuron takes multiple inputs, applies weights and an activation function, and produces an output.'
        },
        {
          title: 'Activation Functions',
          text: 'These mathematical functions determine the output of a neuron. Common functions include ReLU, Sigmoid, and Tanh, each serving different purposes in the network.'
        },
        {
          title: 'Weights and Biases',
          text: 'Connections between neurons have weights that are adjusted during training. Biases are additional parameters that help the network learn complex patterns.'
        }
      ]
    },
    visualization: 'basic'
  },
  {
    id: 'architecture',
    title: 'Network Architecture',
    icon: Network,
    content: {
      intro: `Neural networks are organized in layers, with each layer containing multiple neurons. The architecture determines how information flows through the network.`,
      details: [
        {
          title: 'Input Layer',
          text: 'Receives raw data and distributes it to the next layer. The number of input neurons matches the data dimensions.'
        },
        {
          title: 'Hidden Layers',
          text: 'Process information through multiple transformations. Deep networks have many hidden layers, enabling them to learn complex patterns.'
        },
        {
          title: 'Output Layer',
          text: 'Produces the final network output. Its structure depends on the task (e.g., classification, regression).'
        }
      ]
    },
    visualization: 'architecture'
  },
  {
    id: 'training',
    title: 'Training Process',
    icon: Zap,
    content: {
      intro: `Neural networks learn through an iterative process called training, where they adjust their parameters to minimize prediction errors.`,
      details: [
        {
          title: 'Forward Propagation',
          text: 'Data flows through the network from input to output, generating predictions based on current weights.'
        },
        {
          title: 'Backpropagation',
          text: 'The network calculates error gradients and propagates them backward to update weights and improve accuracy.'
        },
        {
          title: 'Optimization',
          text: 'Algorithms like gradient descent help find optimal weights by iteratively minimizing the loss function.'
        }
      ]
    },
    visualization: 'training'
  }
];

const NeuralNetworkBlog = () => {
  const [activeSection, setActiveSection] = useState(0);
  const [isPlaying, setIsPlaying] = useState(true);

  const handlePlayPause = () => {
    setIsPlaying(!isPlaying);
  };

  const handleReset = () => {
    setIsPlaying(true);
  };

  return (
    <div className="min-h-screen bg-[#0A0014] pt-20">
      <div className="container mx-auto px-4 py-20">
        {/* Navigation */}
        <div className="flex flex-wrap gap-4 mb-12">
          {sections.map((section, index) => (
            <button
              key={section.id}
              onClick={() => setActiveSection(index)}
              className={`flex items-center space-x-2 px-6 py-3 rounded-full transition-all duration-300 ${
                activeSection === index
                  ? 'bg-purple-600 text-white'
                  : 'bg-purple-900/20 text-gray-400 hover:text-white'
              }`}
            >
              <section.icon className="w-5 h-5" />
              <span>{section.title}</span>
            </button>
          ))}
        </div>

        {/* Content */}
        <GlassCard className="mb-8">
          <div className="flex items-center space-x-3 mb-6">
            {React.createElement(sections[activeSection].icon, {
              className: "w-8 h-8 text-[#FFD700]"
            })}
            <h2 className="text-3xl font-bold text-white">
              {sections[activeSection].title}
            </h2>
          </div>
          
          <div className="space-y-8">
            <p className="text-gray-300 text-lg leading-relaxed">
              {sections[activeSection].content.intro}
            </p>
            
            <div className="grid md:grid-cols-3 gap-6">
              {sections[activeSection].content.details.map((detail, index) => (
                <div key={index} className="bg-purple-900/20 rounded-xl p-6">
                  <h3 className="text-[#FFD700] font-bold mb-3">{detail.title}</h3>
                  <p className="text-gray-300">{detail.text}</p>
                </div>
              ))}
            </div>
          </div>
        </GlassCard>

        {/* Visualization */}
        <GlassCard>
          <div className="mb-6 flex justify-between items-center">
            <h3 className="text-xl font-bold text-white">Interactive Visualization</h3>
            <NeuralNetworkControls
              isPlaying={isPlaying}
              onPlayPause={handlePlayPause}
              onReset={handleReset}
            />
          </div>
          <NeuralNetworkVisualization
            type={sections[activeSection].visualization}
            isPlaying={isPlaying}
          />
          <div className="mt-4 text-gray-400 text-sm">
            Hover over neurons to see activation values and connection strengths
          </div>
        </GlassCard>

        {/* Additional Resources */}
        <div className="mt-12 grid md:grid-cols-3 gap-6">
          <GlassCard>
            <Book className="w-8 h-8 text-[#FFD700] mb-4" />
            <h3 className="text-white font-bold mb-2">Further Reading</h3>
            <p className="text-gray-300">Explore detailed documentation and academic papers</p>
          </GlassCard>
          
          <GlassCard>
            <Code className="w-8 h-8 text-[#FFD700] mb-4" />
            <h3 className="text-white font-bold mb-2">Code Examples</h3>
            <p className="text-gray-300">Practice with hands-on coding exercises</p>
          </GlassCard>
          
          <GlassCard>
            <LineChart className="w-8 h-8 text-[#FFD700] mb-4" />
            <h3 className="text-white font-bold mb-2">Interactive Labs</h3>
            <p className="text-gray-300">Experiment with live neural network models</p>
          </GlassCard>
        </div>
      </div>
    </div>
  );
};

export default NeuralNetworkBlog;