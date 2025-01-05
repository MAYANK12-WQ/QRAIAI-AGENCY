import React from 'react';
import { motion } from 'framer-motion';

const ContactMap = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.6 }}
      className="w-full h-[400px] relative overflow-hidden"
    >
      <div className="absolute inset-0 bg-gradient-to-b from-[#0A0014] to-transparent z-10 pointer-events-none" />
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3662.912537694584!2d85.32241827537772!3d23.36425447894866!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39f4e1f0a34f6edf%3A0x9086e2e57a3a30e6!2sMorabadi%2C%20Ranchi%2C%20Jharkhand!5e0!3m2!1sen!2sin!4v1709667547943!5m2!1sen!2sin"
        width="100%"
        height="100%"
        style={{ border: 0 }}
        allowFullScreen
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
        className="grayscale opacity-70 hover:opacity-100 transition-opacity duration-300"
      />
    </motion.div>
  );
};

export default ContactMap;