import React from 'react';
import { motion } from 'framer-motion';
import { Shield, AlertTriangle, Lock } from 'lucide-react';
import GlassCard from '../../components/ui/GlassCard';

const AISecurity = () => {
  return (
    <div className="min-h-screen bg-[#0A0014] pt-20">
      <div className="container mx-auto px-4 py-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center max-w-4xl mx-auto mb-16"
        >
          <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-purple-400 via-[#FFD700] to-purple-400 text-transparent bg-clip-text font-orbitron">
            AI Security
          </h1>
          <p className="text-xl text-gray-300">
            Protect your digital assets with intelligent security solutions
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8 mb-16">
          <GlassCard>
            <AlertTriangle className="w-12 h-12 text-[#FFD700] mb-6" />
            <h2 className="text-2xl font-bold text-white mb-4 font-orbitron">Threat Detection</h2>
            <p className="text-gray-300">
              Identify and respond to security threats in real-time.
            </p>
          </GlassCard>

          <GlassCard>
            <Shield className="w-12 h-12 text-[#FFD700] mb-6" />
            <h2 className="text-2xl font-bold text-white mb-4 font-orbitron">Fraud Prevention</h2>
            <p className="text-gray-300">
              Prevent fraudulent activities with AI-powered monitoring.
            </p>
          </GlassCard>

          <GlassCard>
            <Lock className="w-12 h-12 text-[#FFD700] mb-6" />
            <h2 className="text-2xl font-bold text-white mb-4 font-orbitron">Security Automation</h2>
            <p className="text-gray-300">
              Automate security protocols and incident response.
            </p>
          </GlassCard>
        </div>
      </div>
    </div>
  );
};

export default AISecurity;