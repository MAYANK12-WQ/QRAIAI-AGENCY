import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Calendar, Clock, Users, Brain } from 'lucide-react';
import GlassCard from '../../components/ui/GlassCard';

const timeSlots = [
  '9:00 AM', '10:00 AM', '11:00 AM',
  '1:00 PM', '2:00 PM', '3:00 PM', '4:00 PM'
];

const ScheduleCallPage = () => {
  const [selectedDate, setSelectedDate] = useState('');
  const [selectedTime, setSelectedTime] = useState('');
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [company, setCompany] = useState('');
  const [topic, setTopic] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log({ selectedDate, selectedTime, name, email, company, topic });
  };

  return (
    <div className="min-h-screen bg-[#0A0014] pt-20">
      <div className="container mx-auto px-4 py-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center max-w-4xl mx-auto mb-16"
        >
          <Brain className="w-16 h-16 text-[#FFD700] mx-auto mb-6" />
          <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-purple-400 via-[#FFD700] to-purple-400 text-transparent bg-clip-text">
            Schedule a Consultation
          </h1>
          <p className="text-xl text-gray-300">
            Book a call with our AI experts to discuss your project and explore possibilities
          </p>
        </motion.div>

        <GlassCard className="max-w-2xl mx-auto">
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <label className="block text-white mb-2">Name</label>
                <input
                  type="text"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="w-full bg-purple-900/50 border border-purple-500/20 rounded-xl px-4 py-3 text-white focus:border-[#FFD700]/50 focus:outline-none"
                  required
                />
              </div>
              <div>
                <label className="block text-white mb-2">Email</label>
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full bg-purple-900/50 border border-purple-500/20 rounded-xl px-4 py-3 text-white focus:border-[#FFD700]/50 focus:outline-none"
                  required
                />
              </div>
            </div>

            <div>
              <label className="block text-white mb-2">Company</label>
              <input
                type="text"
                value={company}
                onChange={(e) => setCompany(e.target.value)}
                className="w-full bg-purple-900/50 border border-purple-500/20 rounded-xl px-4 py-3 text-white focus:border-[#FFD700]/50 focus:outline-none"
              />
            </div>

            <div>
              <label className="block text-white mb-2">Discussion Topic</label>
              <textarea
                value={topic}
                onChange={(e) => setTopic(e.target.value)}
                className="w-full bg-purple-900/50 border border-purple-500/20 rounded-xl px-4 py-3 text-white focus:border-[#FFD700]/50 focus:outline-none h-32"
                required
              />
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <label className="block text-white mb-2">
                  <Calendar className="w-4 h-4 inline-block mr-2" />
                  Preferred Date
                </label>
                <input
                  type="date"
                  value={selectedDate}
                  onChange={(e) => setSelectedDate(e.target.value)}
                  className="w-full bg-purple-900/50 border border-purple-500/20 rounded-xl px-4 py-3 text-white focus:border-[#FFD700]/50 focus:outline-none"
                  required
                />
              </div>
              <div>
                <label className="block text-white mb-2">
                  <Clock className="w-4 h-4 inline-block mr-2" />
                  Preferred Time
                </label>
                <select
                  value={selectedTime}
                  onChange={(e) => setSelectedTime(e.target.value)}
                  className="w-full bg-purple-900/50 border border-purple-500/20 rounded-xl px-4 py-3 text-white focus:border-[#FFD700]/50 focus:outline-none"
                  required
                >
                  <option value="">Select a time</option>
                  {timeSlots.map(slot => (
                    <option key={slot} value={slot}>{slot}</option>
                  ))}
                </select>
              </div>
            </div>

            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              type="submit"
              className="w-full bg-gradient-to-r from-purple-600 to-purple-800 text-white py-4 rounded-xl hover:shadow-lg transition-all duration-300"
            >
              Schedule Call
            </motion.button>
          </form>
        </GlassCard>
      </div>
    </div>
  );
};

export default ScheduleCallPage;