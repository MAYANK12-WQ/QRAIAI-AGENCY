import React from 'react';
import { motion } from 'framer-motion';
import { MapPin, Phone, Mail, Clock } from 'lucide-react';

const ContactInfo = () => {
  const contactDetails = [
    {
      icon: MapPin,
      title: 'Location',
      content: 'Shiv-Bhawan Lane, O/P: Ashashree Gardens, Morabadi, Ranchi'
    },
    {
      icon: Phone,
      title: 'Phone',
      content: '+91 (123) 456-7890'
    },
    {
      icon: Mail,
      title: 'Email',
      content: 'quantumrenessiance@gmail.com'
    },
    {
      icon: Clock,
      title: 'Working Hours',
      content: 'Mon - Fri: 9:00 AM - 6:00 PM'
    }
  ];

  return (
    <motion.div
      initial={{ opacity: 0, x: 20 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ delay: 0.3 }}
      className="bg-gradient-to-br from-purple-900/10 to-purple-900/20 rounded-2xl p-8 border border-purple-500/20"
    >
      <h2 className="text-2xl font-bold text-white mb-8">Get in Touch</h2>
      <div className="space-y-8">
        {contactDetails.map((detail, index) => (
          <motion.div
            key={detail.title}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 + index * 0.1 }}
            className="flex items-start space-x-4"
          >
            <div className="w-12 h-12 bg-purple-900/30 rounded-xl flex items-center justify-center">
              <detail.icon className="w-6 h-6 text-[#FFD700]" />
            </div>
            <div>
              <h3 className="text-white font-semibold mb-1">{detail.title}</h3>
              <p className="text-gray-300">{detail.content}</p>
            </div>
          </motion.div>
        ))}
      </div>

      <div className="mt-12 pt-8 border-t border-purple-500/20">
        <h3 className="text-white font-semibold mb-4">Follow Us</h3>
        <div className="flex space-x-4">
          {['Twitter', 'GitHub', 'LinkedIn'].map((platform) => (
            <motion.a
              key={platform}
              whileHover={{ scale: 1.1 }}
              className="w-10 h-10 bg-purple-900/30 rounded-full flex items-center justify-center hover:bg-purple-900/50 transition-colors"
              href="#"
            >
              <span className="text-[#FFD700]">{platform[0]}</span>
            </motion.a>
          ))}
        </div>
      </div>
    </motion.div>
  );
};

export default ContactInfo;