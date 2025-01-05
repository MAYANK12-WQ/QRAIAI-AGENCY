import React from 'react';
import { motion } from 'framer-motion';
import { Network, Workflow, Zap } from 'lucide-react';
import GlassCard from '../../components/ui/GlassCard';
import IntegrationFlow from '../../components/interactive/IntegrationFlow';

const AIIntegration = () => {
  const features = [
    {
      icon: Network,
      title: "API Integration",
      description: "Seamless connection with existing systems"
    },
    {
      icon: Workflow,
      title: "System Automation",
      description: "Automated workflows and processes"
    },
    {
      icon: Zap,
      title: "Real-time Processing",
      description: "Instant data processing and analysis"
    }
  ];

  return (
    <div className="min-h-screen bg-[#0A0014] pt-20">
      <div className="container mx-auto px-4 py-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center max-w-4xl mx-auto mb-16"
        >
          <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-purple-400 via-[#FFD700] to-purple-400 text-transparent bg-clip-text font-orbitron">
            AI Integration
          </h1>
          <p className="text-xl text-gray-300">
            Seamlessly integrate AI into your existing systems
          </p>
        </motion.div>

        {/* Interactive Integration Flow Diagram */}
        <GlassCard className="mb-16">
          <IntegrationFlow />
        </GlassCard>

        {/* Features */}
        <div className="grid md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2 }}
            >
              <GlassCard>
                <feature.icon className="w-12 h-12 text-[#FFD700] mb-6" />
                <h3 className="text-2xl font-bold text-white mb-4 font-orbitron">
                  {feature.title}
                </h3>
                <p className="text-gray-300">{feature.description}</p>
              </GlassCard>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AIIntegration;