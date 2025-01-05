import React from 'react';
import { motion } from 'framer-motion';
import { Users, MessageSquare, Globe, Share2 } from 'lucide-react';
import GlowingButton from '../../../components/ui/GlowingButton';
import GlassCard from '../../../components/ui/GlassCard';

const Community = () => {
  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center text-white mb-12">
          Join Our Community
        </h2>
        <div className="grid md:grid-cols-2 gap-12">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
          >
            <GlassCard>
              <h3 className="text-2xl font-bold text-white mb-6">
                Connect & Collaborate
              </h3>
              <div className="space-y-4">
                <div className="flex items-center space-x-4">
                  <Users className="w-6 h-6 text-[#FFD700]" />
                  <span className="text-gray-300">Join a thriving community of learners</span>
                </div>
                <div className="flex items-center space-x-4">
                  <MessageSquare className="w-6 h-6 text-[#FFD700]" />
                  <span className="text-gray-300">Participate in discussions</span>
                </div>
                <div className="flex items-center space-x-4">
                  <Globe className="w-6 h-6 text-[#FFD700]" />
                  <span className="text-gray-300">Access global networking opportunities</span>
                </div>
                <div className="flex items-center space-x-4">
                  <Share2 className="w-6 h-6 text-[#FFD700]" />
                  <span className="text-gray-300">Share your projects and get feedback</span>
                </div>
              </div>
            </GlassCard>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            className="flex items-center justify-center"
          >
            <GlowingButton>
              Join Community
            </GlowingButton>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Community;