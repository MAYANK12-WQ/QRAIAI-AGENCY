import React from 'react';
import { motion } from 'framer-motion';
import { Brain, Cpu, Network, Zap, LineChart, Shield } from 'lucide-react';
import { Link } from 'react-router-dom';
import GlassCard from '../components/ui/GlassCard';
import ScrollReveal from '../components/ui/ScrollReveal';

const AISolutionsOverview = () => {
  const aiConcepts = [
    {
      icon: Brain,
      title: "What is AI?",
      description: "Artificial Intelligence is the simulation of human intelligence by machines, enabling them to learn, reason, and solve complex problems autonomously.",
      link: "/concepts/what-is-ai"
    },
    {
      icon: Network,
      title: "Machine Learning",
      description: "Systems that can learn and improve from experience without being explicitly programmed, identifying patterns in data to make intelligent decisions.",
      link: "/concepts/machine-learning"
    },
    {
      icon: Cpu,
      title: "Deep Learning",
      description: "Advanced AI systems modeled after the human brain's neural networks, capable of processing complex patterns and natural language.",
      link: "/concepts/deep-learning"
    }
  ];

  const solutions = [
    {
      icon: Zap,
      title: "Process Automation",
      description: "Streamline operations with intelligent automation that adapts to your business needs.",
      features: ["Workflow Optimization", "Task Automation", "Quality Control"],
      link: "/solutions/process-automation"
    },
    {
      icon: LineChart,
      title: "Predictive Analytics",
      description: "Harness the power of data with advanced analytics and forecasting capabilities.",
      features: ["Pattern Recognition", "Trend Analysis", "Risk Assessment"],
      link: "/solutions/predictive-analytics"
    },
    {
      icon: Shield,
      title: "AI Security",
      description: "Protect your assets with AI-powered security systems and threat detection.",
      features: ["Threat Detection", "Fraud Prevention", "Security Automation"],
      link: "/solutions/ai-security"
    }
  ];

  return (
    <div className="min-h-screen bg-[#0A0014] pt-20">
      {/* Hero Section */}
      <div className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-purple-900/20 to-purple-600/20" />
        <div className="container mx-auto px-4 py-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center max-w-4xl mx-auto"
          >
            <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-purple-400 via-[#FFD700] to-purple-400 text-transparent bg-clip-text font-orbitron">
              Understanding AI Solutions
            </h1>
            <p className="text-xl text-gray-300 font-orbitron">
              Discover how AI can transform your business and drive innovation
            </p>
          </motion.div>
        </div>
      </div>

      {/* AI Concepts Section */}
      <div className="container mx-auto px-4 py-20">
        <h2 className="text-3xl font-bold text-white mb-12 text-center font-orbitron">
          Core AI Concepts
        </h2>
        <div className="grid md:grid-cols-3 gap-8">
          {aiConcepts.map((concept) => (
            <Link key={concept.title} to={concept.link}>
              <ScrollReveal>
                <GlassCard className="h-full hover:scale-105 transition-transform duration-300">
                  <concept.icon className="w-12 h-12 text-[#FFD700] mb-6" />
                  <h3 className="text-2xl font-bold text-white mb-4 font-orbitron">{concept.title}</h3>
                  <p className="text-gray-300">{concept.description}</p>
                </GlassCard>
              </ScrollReveal>
            </Link>
          ))}
        </div>
      </div>

      {/* Solutions Section */}
      <div className="container mx-auto px-4 py-20">
        <h2 className="text-3xl font-bold text-white mb-12 text-center font-orbitron">
          Our AI Solutions
        </h2>
        <div className="grid md:grid-cols-3 gap-8">
          {solutions.map((solution) => (
            <Link key={solution.title} to={solution.link}>
              <ScrollReveal>
                <GlassCard className="h-full hover:transform hover:scale-105 transition-transform duration-300">
                  <solution.icon className="w-12 h-12 text-[#FFD700] mb-6" />
                  <h3 className="text-2xl font-bold text-white mb-4 font-orbitron">{solution.title}</h3>
                  <p className="text-gray-300 mb-6">{solution.description}</p>
                  <ul className="space-y-2">
                    {solution.features.map((feature) => (
                      <li key={feature} className="flex items-center text-purple-300">
                        <span className="w-1.5 h-1.5 bg-[#FFD700] rounded-full mr-2" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </GlassCard>
              </ScrollReveal>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AISolutionsOverview;