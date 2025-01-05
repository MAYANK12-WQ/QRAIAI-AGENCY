import React from 'react';
import { motion } from 'framer-motion';
import { TrendingUp, Clock, DollarSign, BarChart2 } from 'lucide-react';

const SuccessMetrics = () => {
  const metrics = [
    {
      icon: TrendingUp,
      value: 30,
      unit: '%',
      label: 'Efficiency Increase',
      color: '#FFD700'
    },
    {
      icon: Clock,
      value: 1500,
      unit: 'hrs',
      label: 'Time Saved Annually',
      color: '#9F7AEA'
    },
    {
      icon: DollarSign,
      value: 40,
      unit: '%',
      label: 'Cost Reduction',
      color: '#48BB78'
    },
    {
      icon: BarChart2,
      value: 95,
      unit: '%',
      label: 'Process Optimization',
      color: '#F56565'
    }
  ];

  return (
    <section className="py-16 bg-[#0A0014]">
      <div className="container mx-auto px-4">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-3xl font-bold text-center text-white mb-16"
        >
          Transforming Business Through AI
        </motion.h2>

        <div className="grid md:grid-cols-4 gap-8">
          {metrics.map((metric, index) => (
            <motion.div
              key={metric.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
              className="relative"
            >
              {/* Circular Progress */}
              <div className="relative w-48 h-48 mx-auto mb-6">
                <svg className="w-full h-full" viewBox="0 0 100 100">
                  <circle
                    cx="50"
                    cy="50"
                    r="45"
                    fill="none"
                    stroke="#1A1A1A"
                    strokeWidth="8"
                  />
                  <motion.circle
                    cx="50"
                    cy="50"
                    r="45"
                    fill="none"
                    stroke={metric.color}
                    strokeWidth="8"
                    strokeLinecap="round"
                    initial={{ pathLength: 0 }}
                    whileInView={{ pathLength: metric.value / 100 }}
                    viewport={{ once: true }}
                    transition={{ duration: 2, ease: "easeOut" }}
                    transform="rotate(-90 50 50)"
                    strokeDasharray="283"
                    strokeDashoffset="0"
                  />
                  <motion.g
                    initial={{ opacity: 0, scale: 0 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.5 }}
                  >
                    <metric.icon
                      className="w-8 h-8"
                      x="36"
                      y="36"
                      stroke={metric.color}
                    />
                  </motion.g>
                </svg>
                <motion.div
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 1 }}
                  className="absolute inset-0 flex items-center justify-center"
                >
                  <span className="text-3xl font-bold text-white">
                    {metric.value}{metric.unit}
                  </span>
                </motion.div>
              </div>
              
              <div className="text-center">
                <h3 className="text-xl font-semibold text-white mb-2">
                  {metric.label}
                </h3>
                <p className="text-gray-400 text-sm">
                  Year-over-Year Growth
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 1.2 }}
          className="mt-16 text-center"
        >
          <blockquote className="text-xl text-gray-300 italic max-w-3xl mx-auto">
            "Quantum Renaissance's AI solutions have revolutionized our operations, 
            delivering unprecedented efficiency gains and cost savings while maintaining 
            the highest standards of quality."
          </blockquote>
          <cite className="block mt-4 text-[#FFD700]">
            - CTO, Fortune 500 Technology Company
          </cite>
        </motion.div>
      </div>
    </section>
  );
};

export default SuccessMetrics;