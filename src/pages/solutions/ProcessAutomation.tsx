import React from 'react';
import { motion } from 'framer-motion';
import { Zap, Workflow, Cog, CheckCircle } from 'lucide-react';
import GlassCard from '../../components/ui/GlassCard';

const ProcessAutomation = () => {
  return (
    <div className="min-h-screen bg-[#0A0014] pt-20">
      <div className="container mx-auto px-4 py-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center max-w-4xl mx-auto mb-16"
        >
          <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-purple-400 via-[#FFD700] to-purple-400 text-transparent bg-clip-text font-orbitron">
            Process Automation
          </h1>
          <p className="text-xl text-gray-300">
            Streamline your operations with intelligent automation solutions
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8 mb-16">
          <GlassCard>
            <Workflow className="w-12 h-12 text-[#FFD700] mb-6" />
            <h2 className="text-2xl font-bold text-white mb-4 font-orbitron">Workflow Optimization</h2>
            <p className="text-gray-300">
              Automate complex business processes and eliminate manual bottlenecks.
            </p>
          </GlassCard>

          <GlassCard>
            <Cog className="w-12 h-12 text-[#FFD700] mb-6" />
            <h2 className="text-2xl font-bold text-white mb-4 font-orbitron">Task Automation</h2>
            <p className="text-gray-300">
              Reduce manual effort with intelligent task automation systems.
            </p>
          </GlassCard>

          <GlassCard>
            <CheckCircle className="w-12 h-12 text-[#FFD700] mb-6" />
            <h2 className="text-2xl font-bold text-white mb-4 font-orbitron">Quality Control</h2>
            <p className="text-gray-300">
              Maintain consistent quality with automated monitoring and control.
            </p>
          </GlassCard>
        </div>
      </div>
    </div>
  );
};

export default ProcessAutomation;