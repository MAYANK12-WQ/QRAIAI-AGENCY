import React from 'react';
import { motion } from 'framer-motion';
import { Brain, Cpu, LineChart, Zap, Shield, Cloud } from 'lucide-react';
import Breadcrumb from '../components/Breadcrumb';
import GlassCard from '../components/ui/GlassCard';
import ScrollReveal from '../components/ui/ScrollReveal';

const solutions = [
  {
    icon: Brain,
    title: "Natural Language Processing",
    description: "Advanced language understanding and generation capabilities powered by state-of-the-art transformer models.",
    features: ["Sentiment Analysis", "Text Classification", "Language Translation"]
  },
  {
    icon: Cpu,
    title: "Computer Vision",
    description: "Cutting-edge visual recognition systems for real-time object detection and image analysis.",
    features: ["Object Detection", "Face Recognition", "Scene Understanding"]
  },
  {
    icon: LineChart,
    title: "Predictive Analytics",
    description: "Data-driven insights and forecasting using advanced machine learning algorithms.",
    features: ["Time Series Analysis", "Pattern Recognition", "Risk Assessment"]
  },
  {
    icon: Zap,
    title: "Process Automation",
    description: "Intelligent automation solutions that streamline operations and reduce manual effort.",
    features: ["Workflow Optimization", "Task Automation", "Quality Control"]
  },
  {
    icon: Shield,
    title: "AI Security",
    description: "Robust security systems enhanced by artificial intelligence and machine learning.",
    features: ["Threat Detection", "Anomaly Detection", "Fraud Prevention"]
  },
  {
    icon: Cloud,
    title: "Cloud AI Solutions",
    description: "Scalable cloud-based AI services for enterprise-level applications.",
    features: ["Distributed Computing", "API Integration", "Real-time Processing"]
  }
];

const Solutions = () => {
  return (
    <div className="pt-20 min-h-screen bg-[#0A0014]">
      <Breadcrumb pageName="Solutions" />
      
      {/* Hero Section */}
      <div className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-purple-900/20 to-purple-600/20" />
        <div className="container mx-auto px-4 py-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center max-w-4xl mx-auto"
          >
            <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-purple-400 via-[#FFD700] to-purple-400 text-transparent bg-clip-text">
              AI Solutions for Tomorrow
            </h1>
            <p className="text-xl text-gray-300">
              Transforming businesses through innovative AI technologies and solutions
            </p>
          </motion.div>
        </div>
      </div>

      {/* Solutions Grid */}
      <div className="container mx-auto px-4 py-20">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {solutions.map((solution, index) => (
            <ScrollReveal key={solution.title}>
              <GlassCard className="h-full hover:transform hover:scale-105 transition-transform duration-300">
                <solution.icon className="w-12 h-12 text-[#FFD700] mb-6" />
                <h3 className="text-2xl font-bold text-white mb-4">{solution.title}</h3>
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
          ))}
        </div>
      </div>

      {/* CTA Section */}
      <div className="container mx-auto px-4 py-20">
        <ScrollReveal>
          <GlassCard className="text-center">
            <h2 className="text-3xl font-bold text-white mb-6">
              Ready to Transform Your Business?
            </h2>
            <p className="text-gray-300 mb-8">
              Let's discuss how our AI solutions can help you achieve your goals
            </p>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-gradient-to-r from-purple-600 to-purple-800 text-white px-8 py-3 rounded-full hover:shadow-lg transition-all duration-300"
            >
              Schedule a Consultation
            </motion.button>
          </GlassCard>
        </ScrollReveal>
      </div>
    </div>
  );
};

export default Solutions;