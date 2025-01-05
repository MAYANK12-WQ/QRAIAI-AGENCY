import React from 'react';
import { Mail, MapPin, Calendar } from 'lucide-react';

const Contact = () => {
  return (
    <section id="contact" className="py-20 bg-[#0A0014]">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-playfair text-center text-white mb-16">
          Get in <span className="text-[#FFD700]">Touch</span>
        </h2>
        <div className="grid md:grid-cols-2 gap-12">
          <div className="space-y-8">
            <div className="flex items-start space-x-4">
              <Mail className="w-6 h-6 text-[#FFD700] mt-1" />
              <div>
                <h3 className="text-white font-semibold mb-2">Email Us</h3>
                <p className="text-gray-400">quantumrenessiance@gmail.com</p>
              </div>
            </div>
            <div className="flex items-start space-x-4">
              <MapPin className="w-6 h-6 text-[#FFD700] mt-1" />
              <div>
                <h3 className="text-white font-semibold mb-2">Visit Us</h3>
                <p className="text-gray-400">Shiv-Bhawan Lane, O/P: Ashashree Gardens, Morabadi, Ranchi</p>
              </div>
            </div>
            <button className="flex items-center space-x-2 bg-[#4B0082] hover:bg-[#4B0082]/80 text-white px-6 py-3 rounded-full transition-all duration-200">
              <Calendar className="w-5 h-5" />
              <span>Schedule a Call</span>
            </button>
          </div>
          <form className="space-y-6">
            <div>
              <input
                type="text"
                placeholder="Your Name"
                className="w-full bg-[#1A1A1A] border border-[#4B0082]/20 rounded-lg px-4 py-3 text-white focus:border-[#FFD700]/50 focus:outline-none"
              />
            </div>
            <div>
              <input
                type="email"
                placeholder="Your Email"
                className="w-full bg-[#1A1A1A] border border-[#4B0082]/20 rounded-lg px-4 py-3 text-white focus:border-[#FFD700]/50 focus:outline-none"
              />
            </div>
            <div>
              <textarea
                placeholder="Your Message"
                rows={4}
                className="w-full bg-[#1A1A1A] border border-[#4B0082]/20 rounded-lg px-4 py-3 text-white focus:border-[#FFD700]/50 focus:outline-none"
              ></textarea>
            </div>
            <button className="w-full bg-[#FFD700] hover:bg-[#FFD700]/90 text-[#0A0014] px-6 py-3 rounded-full font-semibold transition-all duration-200">
              Send Message
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;