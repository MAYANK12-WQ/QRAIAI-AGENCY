import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Brain, Twitter, Github, Linkedin } from 'lucide-react';

const Footer = () => {
  const quickLinks = [
    { name: 'Home', path: '/' },
    { name: 'AI Solutions', path: '/ai-solutions' },
    { name: 'Portfolio', path: '/portfolio' },
    { name: 'Contact', path: '/contact' }
  ];

  const serviceLinks = [
    { name: 'AI Solutions', path: '/ai-solutions' },
    { name: 'AI Automation', path: '/ai-automation' },
    { name: 'AI Education', path: '/ai-education' }
  ];

  const socialLinks = [
    {
      icon: Twitter,
      href: 'https://x.com/MayankS94142871',
      label: 'Twitter'
    },
    {
      icon: Github,
      href: 'https://github.com/MAYANK12-WQ',
      label: 'GitHub'
    },
    {
      icon: Linkedin,
      href: 'https://www.linkedin.com/in/mayank-shekhar-57805a14b',
      label: 'LinkedIn'
    }
  ];

  return (
    <footer className="relative bg-[#0A0014] border-t border-[#4B0082]/20">
      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-[#4B0082]/10 to-transparent pointer-events-none" />

      <div className="container mx-auto px-4 py-16 relative">
        <div className="grid md:grid-cols-4 gap-12">
          {/* Brand Section */}
          <div>
            <Link to="/" className="flex items-center space-x-2 mb-6 group">
              <div className="relative w-10 h-10">
                <Brain className="w-10 h-10 text-[#FFD700] absolute animate-float" />
                <div className="w-10 h-10 bg-[#4b0082] rounded-full absolute -z-10 blur-sm group-hover:bg-[#FFD700]/50 transition-colors duration-300" />
              </div>
              <span className="text-2xl font-orbitron text-white">
                Quantum<span className="text-[#FFD700]">Renaissance</span>
              </span>
            </Link>
            <p className="text-gray-400 mb-6">
              Redefining possibilities at the intersection of humanity and technology.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white font-orbitron font-semibold mb-6">Quick Links</h3>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <Link 
                    to={link.path}
                    className="text-gray-400 hover:text-[#FFD700] transition-colors duration-300 flex items-center space-x-2"
                  >
                    <span className="w-1.5 h-1.5 bg-[#FFD700] rounded-full" />
                    <span>{link.name}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-white font-orbitron font-semibold mb-6">Services</h3>
            <ul className="space-y-3">
              {serviceLinks.map((link) => (
                <li key={link.name}>
                  <Link 
                    to={link.path}
                    className="text-gray-400 hover:text-[#FFD700] transition-colors duration-300 flex items-center space-x-2"
                  >
                    <span className="w-1.5 h-1.5 bg-[#FFD700] rounded-full" />
                    <span>{link.name}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Connect */}
          <div>
            <h3 className="text-white font-orbitron font-semibold mb-6">Connect</h3>
            <div className="flex space-x-4">
              {socialLinks.map((link) => (
                <motion.a
                  key={link.label}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.1 }}
                  className="w-10 h-10 rounded-full bg-[#1A1A1A] flex items-center justify-center hover:bg-[#4B0082] transition-colors duration-300"
                >
                  <link.icon className="w-5 h-5 text-[#FFD700]" />
                </motion.a>
              ))}
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-12 pt-8 border-t border-[#4B0082]/20">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm">
              &copy; {new Date().getFullYear()} Quantum Renaissance. All rights reserved.
            </p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <Link to="/privacy" className="text-gray-400 hover:text-[#FFD700] text-sm transition-colors">
                Privacy Policy
              </Link>
              <Link to="/terms" className="text-gray-400 hover:text-[#FFD700] text-sm transition-colors">
                Terms of Service
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;