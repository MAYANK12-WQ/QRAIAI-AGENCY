import React from 'react';
import { motion } from 'framer-motion';
import { LineChart, TrendingUp, BarChart3 } from 'lucide-react';
import GlassCard from '../../components/ui/GlassCard';

const PredictiveAnalytics = () => {
  return (
    <div className="min-h-screen bg-[#0A0014] pt-20">
      <div className="container mx-auto px-4 py-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center max-w-4xl mx-auto mb-16"
        >
          <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-purple-400 via-[#FFD700] to-purple-400 text-transparent bg-clip-text font-orbitron">
            Predictive Analytics
          </h1>
          <p className="text-xl text-gray-300">
            Transform data into actionable insights with advanced analytics
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8 mb-16">
          <GlassCard>
            <LineChart className="w-12 h-12 text-[#FFD700] mb-6" />
            <h2 className="text-2xl font-bold text-white mb-4 font-orbitron">Pattern Recognition</h2>
            <p className="text-gray-300">
              Identify hidden patterns and trends in your business data.
            </p>
          </GlassCard>

          <GlassCard>
            <TrendingUp className="w-12 h-12 text-[#FFD700] mb-6" />
            <h2 className="text-2xl font-bold text-white mb-4 font-orbitron">Trend Analysis</h2>
            <p className="text-gray-300">
              Forecast future trends with advanced statistical models.
            </p>
          </GlassCard>

          <GlassCard>
            <BarChart3 className="w-12 h-12 text-[#FFD700] mb-6" />
            <h2 className="text-2xl font-bold text-white mb-4 font-orbitron">Risk Assessment</h2>
            <p className="text-gray-300">
              Evaluate and mitigate risks with data-driven insights.
            </p>
          </GlassCard>
        </div>
      </div>
    </div>
  );
};

export default PredictiveAnalytics;