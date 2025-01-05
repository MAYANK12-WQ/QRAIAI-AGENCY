import React from 'react';
import { motion } from 'framer-motion';
import ContactForm from '../../components/contact/ContactForm';
import ContactInfo from '../../components/contact/ContactInfo';
import ContactMap from '../../components/contact/ContactMap';
import ParticleField from '../../components/ui/ParticleField';

const ContactPage = () => {
  return (
    <div className="min-h-screen bg-[#0A0014] pt-20 relative overflow-hidden">
      <ParticleField />
      
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="container mx-auto px-4 py-20 relative z-10"
      >
        <div className="text-center mb-20">
          <motion.h1
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-purple-400 via-[#FFD700] to-purple-400 text-transparent bg-clip-text"
          >
            Let's Create Something Amazing
          </motion.h1>
          <motion.p
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="text-xl text-gray-300 max-w-2xl mx-auto"
          >
            Ready to transform your ideas into reality? We're here to help bring your vision to life.
          </motion.p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          <ContactForm />
          <ContactInfo />
        </div>
      </motion.div>

      <ContactMap />
    </div>
  );
};

export default ContactPage;