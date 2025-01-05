import React from 'react';
import { motion } from 'framer-motion';
import { Brain, ArrowRight } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import Breadcrumb from '../components/Breadcrumb';
import PortfolioGrid from '../components/portfolio/PortfolioGrid';
import GlassCard from '../components/ui/GlassCard';
import ScrollReveal from '../components/ui/ScrollReveal';

const Portfolio = () => {
  const navigate = useNavigate();

  return (
    <div className="pt-20 min-h-screen bg-[#0A0014]">
      <Breadcrumb pageName="Portfolio" />
      
      {/* Hero Section */}
      <div className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-purple-900/20 to-purple-600/20" />
        <div className="container mx-auto px-4 py-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center max-w-4xl mx-auto"
          >
            <Brain className="w-16 h-16 text-[#FFD700] mx-auto mb-6 animate-float" />
            <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-purple-400 via-[#FFD700] to-purple-400 text-transparent bg-clip-text">
              Our AI Solutions Portfolio
            </h1>
            <p className="text-xl text-gray-300">
              Explore our innovative AI projects that are transforming industries and creating new possibilities
            </p>
          </motion.div>
        </div>
      </div>

      {/* Portfolio Grid */}
      <div className="container mx-auto px-4 py-20">
        <ScrollReveal>
          <PortfolioGrid />
        </ScrollReveal>
      </div>

      {/* Featured Case Studies */}
      <div className="container mx-auto px-4 py-20">
        <ScrollReveal>
          <h2 className="text-3xl font-bold text-white mb-12 text-center">Featured Case Studies</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <GlassCard>
              <div className="relative h-64 mb-6 rounded-lg overflow-hidden">
                <img 
                  src="https://images.unsplash.com/photo-1677442136019-21780ecad995" 
                  alt="AI Agents"
                  className="absolute inset-0 w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0A0014] to-transparent" />
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">AI Agents Suite</h3>
              <p className="text-gray-300 mb-6">
                Revolutionizing task automation with intelligent AI agents that learn and adapt to specific industry needs.
              </p>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => navigate('/portfolio/ai-agents')}
                className="flex items-center space-x-2 text-[#FFD700]"
              >
                <span>View Case Study</span>
                <ArrowRight className="w-4 h-4" />
              </motion.button>
            </GlassCard>

            <GlassCard>
              <div className="relative h-64 mb-6 rounded-lg overflow-hidden">
                <img 
                  src="https://images.unsplash.com/photo-1573164713714-d95e436ab8d6" 
                  alt="Gen Z Therapist"
                  className="absolute inset-0 w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0A0014] to-transparent" />
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">Gen Z Therapist</h3>
              <p className="text-gray-300 mb-6">
                Transforming mental health support with AI-powered therapy tailored for the next generation.
              </p>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => navigate('/portfolio/gen-z-therapist')}
                className="flex items-center space-x-2 text-[#FFD700]"
              >
                <span>View Case Study</span>
                <ArrowRight className="w-4 h-4" />
              </motion.button>
            </GlassCard>
          </div>
        </ScrollReveal>
      </div>

      {/* Success Metrics */}
      <div className="container mx-auto px-4 py-20">
        <ScrollReveal>
          <div className="grid md:grid-cols-4 gap-8">
            {[
              { value: "50+", label: "AI Projects Delivered" },
              { value: "95%", label: "Client Satisfaction" },
              { value: "30+", label: "Industries Served" },
              { value: "24/7", label: "Support Available" }
            ].map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="bg-gradient-to-br from-purple-900/10 to-purple-900/20 rounded-xl p-6 text-center"
              >
                <h3 className="text-3xl font-bold text-[#FFD700] mb-2">{stat.value}</h3>
                <p className="text-gray-300">{stat.label}</p>
              </motion.div>
            ))}
          </div>
        </ScrollReveal>
      </div>

      {/* CTA Section */}
      <div className="container mx-auto px-4 pb-20">
        <ScrollReveal>
          <GlassCard className="text-center">
            <h2 className="text-3xl font-bold text-white mb-6">
              Ready to Build Something Amazing?
            </h2>
            <p className="text-gray-300 mb-8 max-w-2xl mx-auto">
              Let's discuss how our AI solutions can transform your business
            </p>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => navigate('/start-project')}
              className="group inline-flex items-center space-x-3 bg-gradient-to-r from-purple-600 to-purple-800 text-white px-8 py-4 rounded-full hover:shadow-lg hover:shadow-purple-500/25 transition-all duration-300"
            >
              <Brain className="w-5 h-5" />
              <span>Start a Project</span>
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </motion.button>
          </GlassCard>
        </ScrollReveal>
      </div>
    </div>
  );
};

export default Portfolio;