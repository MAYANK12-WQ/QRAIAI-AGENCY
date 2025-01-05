import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { GraduationCap, Brain, X, MessageSquare } from 'lucide-react';
import GlowingButton from '../../../components/ui/GlowingButton';
import { useChat } from '../../../hooks/useChat';
import ChatMessage from '../../../components/chat/ChatMessage';
import ChatInput from '../../../components/chat/ChatInput';

const HeroSection = () => {
  const [isChatOpen, setIsChatOpen] = useState(false);
  const { messages, isLoading, sendMessage, clearChat } = useChat();
  const messagesEndRef = React.useRef<HTMLDivElement>(null);

  React.useEffect(() => {
    if (messagesEndRef.current) {
      messagesEndRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  }, [messages]);

  return (
    <div className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-purple-900/20 to-purple-600/20" />
      
      {/* Animated Background */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml,...')] opacity-10 animate-pulse" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center max-w-4xl mx-auto"
        >
          <GraduationCap className="w-20 h-20 text-[#FFD700] mx-auto mb-8" />
          <h1 className="text-6xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-purple-400 via-[#FFD700] to-purple-400 text-transparent bg-clip-text">
            Empower Your Future with AI Education
          </h1>
          <p className="text-xl text-gray-300 mb-12">
            World-Class AI Learning for Individuals, Teams, and Organizations
          </p>
          <GlowingButton 
            className="mx-auto"
            onClick={() => setIsChatOpen(true)}
          >
            <MessageSquare className="w-5 h-5 mr-2" />
            Start Your AI Journey
          </GlowingButton>
        </motion.div>
      </div>

      {/* Chat Interface */}
      <AnimatePresence>
        {isChatOpen && (
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            className="fixed inset-0 bg-black/50 flex items-center justify-center p-4 z-50"
          >
            <motion.div
              initial={{ y: 50 }}
              animate={{ y: 0 }}
              exit={{ y: 50 }}
              className="bg-[#1a0033] w-full max-w-2xl rounded-2xl shadow-2xl border border-purple-500/20"
            >
              {/* Chat Header */}
              <div className="flex items-center justify-between px-6 py-4 border-b border-purple-500/20 bg-purple-900/95 rounded-t-2xl">
                <div className="flex items-center space-x-3">
                  <Brain className="w-6 h-6 text-[#FFD700]" />
                  <h3 className="text-lg font-bold text-white">AI Learning Assistant</h3>
                </div>
                <button
                  onClick={() => setIsChatOpen(false)}
                  className="text-gray-400 hover:text-white transition-colors p-2"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              {/* Chat Messages */}
              <div className="h-[60vh] overflow-y-auto p-6 space-y-6">
                {messages.map((message, index) => (
                  <ChatMessage key={index} {...message} />
                ))}
                <div ref={messagesEndRef} />
              </div>

              {/* Chat Input */}
              <ChatInput onSend={sendMessage} isLoading={isLoading} />

              {/* Chat Footer */}
              <div className="px-6 py-4 border-t border-purple-500/20 bg-purple-900/95 rounded-b-2xl">
                <button
                  onClick={clearChat}
                  className="text-sm text-purple-300 hover:text-white transition-colors px-3 py-1"
                >
                  Clear Chat
                </button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default HeroSection;