import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Send } from 'lucide-react';

const ContactForm = () => {
  const [formState, setFormState] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log('Form submitted:', formState);
  };

  return (
    <motion.div
      initial={{ opacity: 0, x: -20 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ delay: 0.3 }}
      className="bg-gradient-to-br from-purple-900/10 to-purple-900/20 rounded-2xl p-8 border border-purple-500/20"
    >
      <form onSubmit={handleSubmit} className="space-y-6">
        <div className="grid md:grid-cols-2 gap-6">
          <div>
            <label className="block text-white mb-2">Name</label>
            <input
              type="text"
              value={formState.name}
              onChange={(e) => setFormState({ ...formState, name: e.target.value })}
              className="w-full bg-[#1A1A1A] border border-purple-500/20 rounded-xl px-4 py-3 text-white focus:border-[#FFD700]/50 focus:outline-none transition-colors"
              required
            />
          </div>
          <div>
            <label className="block text-white mb-2">Email</label>
            <input
              type="email"
              value={formState.email}
              onChange={(e) => setFormState({ ...formState, email: e.target.value })}
              className="w-full bg-[#1A1A1A] border border-purple-500/20 rounded-xl px-4 py-3 text-white focus:border-[#FFD700]/50 focus:outline-none transition-colors"
              required
            />
          </div>
        </div>
        <div>
          <label className="block text-white mb-2">Subject</label>
          <input
            type="text"
            value={formState.subject}
            onChange={(e) => setFormState({ ...formState, subject: e.target.value })}
            className="w-full bg-[#1A1A1A] border border-purple-500/20 rounded-xl px-4 py-3 text-white focus:border-[#FFD700]/50 focus:outline-none transition-colors"
            required
          />
        </div>
        <div>
          <label className="block text-white mb-2">Message</label>
          <textarea
            value={formState.message}
            onChange={(e) => setFormState({ ...formState, message: e.target.value })}
            rows={6}
            className="w-full bg-[#1A1A1A] border border-purple-500/20 rounded-xl px-4 py-3 text-white focus:border-[#FFD700]/50 focus:outline-none transition-colors resize-none"
            required
          />
        </div>
        <motion.button
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          className="w-full bg-gradient-to-r from-purple-600 to-purple-800 text-white py-4 rounded-xl hover:shadow-lg transition-all duration-300 flex items-center justify-center space-x-2 group"
        >
          <span>Send Message</span>
          <Send className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
        </motion.button>
      </form>
    </motion.div>
  );
};

export default ContactForm;