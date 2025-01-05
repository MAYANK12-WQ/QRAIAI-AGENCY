import React from 'react';
import { motion } from 'framer-motion';
import { Cpu, Car, HeartPulse, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import GlassCard from '../../components/ui/GlassCard';

const Applications = () => {
  const applications = [
    {
      title: "AI in Healthcare",
      excerpt: "How artificial intelligence is revolutionizing medical diagnosis, drug discovery, and patient care.",
      image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d",
      readTime: "10 min read",
      icon: HeartPulse
    },
    {
      title: "Autonomous Vehicles",
      excerpt: "Exploring the role of AI in developing self-driving cars and the future of transportation.",
      image: "https://images.unsplash.com/photo-1549317661-bd32c8ce0db2",
      readTime: "12 min read",
      icon: Car
    },
    {
      title: "AI in Manufacturing",
      excerpt: "The integration of AI in manufacturing and its impact on industry automation.",
      image: "https://images.unsplash.com/photo-1485827404703-89b55fcc595e",
      readTime: "8 min read",
      icon: Cpu
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
            AI Applications
          </h1>
          <p className="text-xl text-gray-300">
            Discover how AI is transforming industries and shaping our future
          </p>
        </motion.div>

        <div className="space-y-12">
          {applications.map((app, index) => (
            <motion.div
              key={app.title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2 }}
            >
              <GlassCard className="overflow-hidden">
                <div className="grid md:grid-cols-2 gap-8">
                  <div className="relative h-64 md:h-auto">
                    <img
                      src={app.image}
                      alt={app.title}
                      className="absolute inset-0 w-full h-full object-cover rounded-lg"
                    />
                    <div className="absolute inset-0 bg-gradient-to-r from-purple-900/50 to-transparent rounded-lg" />
                  </div>
                  <div className="flex flex-col justify-center">
                    <app.icon className="w-12 h-12 text-[#FFD700] mb-4" />
                    <h2 className="text-2xl font-bold text-white mb-4 font-orbitron">
                      {app.title}
                    </h2>
                    <p className="text-gray-300 mb-6">{app.excerpt}</p>
                    <div className="flex items-center justify-between">
                      <span className="text-purple-300">{app.readTime}</span>
                      <Link
                        to="#"
                        className="flex items-center text-[#FFD700] hover:text-white transition-colors"
                      >
                        Read More <ArrowRight className="w-4 h-4 ml-2" />
                      </Link>
                    </div>
                  </div>
                </div>
              </GlassCard>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Applications;