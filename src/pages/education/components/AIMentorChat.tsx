import React, { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Brain, X, Sparkles, MessageSquare } from 'lucide-react';
import { useChat } from '../../../hooks/useChat';
import GlowingButton from '../../../components/ui/GlowingButton';

interface Message {
  content: string;
  isUser: boolean;
  timestamp: Date;
}

const AIMentorChat = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [userName, setUserName] = useState('');
  const [isIntroComplete, setIsIntroComplete] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const { messages, isLoading, sendMessage } = useChat();
  const [dailyWisdom, setDailyWisdom] = useState('');

  useEffect(() => {
    if (messagesEndRef.current) {
      messagesEndRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  }, [messages]);

  const handleStartChat = (name: string) => {
    setUserName(name);
    setIsIntroComplete(true);
    sendMessage(`Hey ${name}! Let's level up your AI skills together! 🚀`);
  };

  const getRandomEmoji = () => {
    const emojis = ['🚀', '✨', '💡', '🎯', '🌟', '💪', '🎉'];
    return emojis[Math.floor(Math.random() * emojis.length)];
  };

  return (
    <div className="relative">
      <GlowingButton
        onClick={() => setIsOpen(true)}
        className="flex items-center space-x-2"
      >
        <MessageSquare className="w-5 h-5" />
        <span>Meet Your AI Mentor</span>
      </GlowingButton>

      <AnimatePresence>
        {isOpen && (
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
              <div className="flex items-center justify-between px-6 py-4 border-b border-purple-500/20 bg-gradient-to-r from-purple-900 to-purple-800 rounded-t-2xl">
                <div className="flex items-center space-x-3">
                  <div className="relative">
                    <Brain className="w-8 h-8 text-[#FFD700]" />
                    <Sparkles className="w-4 h-4 text-[#FFD700] absolute -top-1 -right-1 animate-pulse" />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-white">Your Gen Z AI Mentor</h3>
                    {userName && (
                      <p className="text-sm text-purple-200">Chatting with {userName}</p>
                    )}
                  </div>
                </div>
                <button
                  onClick={() => setIsOpen(false)}
                  className="text-gray-400 hover:text-white transition-colors p-2"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              {/* Welcome Screen or Chat Messages */}
              <div className="h-[60vh] overflow-y-auto p-6">
                {!isIntroComplete ? (
                  <div className="text-center">
                    <h4 className="text-2xl font-bold text-white mb-6">
                      Hey there! Let's get started! ✨
                    </h4>
                    <input
                      type="text"
                      placeholder="Enter your name"
                      className="w-full max-w-md bg-purple-900/50 border border-purple-500/30 rounded-xl px-5 py-3 text-white placeholder-purple-300 focus:outline-none focus:border-[#FFD700]/50 mb-4"
                      value={userName}
                      onChange={(e) => setUserName(e.target.value)}
                      onKeyPress={(e) => {
                        if (e.key === 'Enter' && userName.trim()) {
                          handleStartChat(userName);
                        }
                      }}
                    />
                    <GlowingButton
                      onClick={() => userName.trim() && handleStartChat(userName)}
                      className="mx-auto"
                    >
                      Start Your Journey
                    </GlowingButton>
                  </div>
                ) : (
                  <div className="space-y-4">
                    {messages.map((msg, index) => (
                      <div
                        key={index}
                        className={`flex ${msg.isUser ? 'justify-end' : 'justify-start'}`}
                      >
                        <div
                          className={`max-w-[80%] rounded-2xl px-5 py-3 ${
                            msg.isUser
                              ? 'bg-purple-600 text-white'
                              : 'bg-purple-900/50 border border-purple-500/20 text-gray-200'
                          }`}
                        >
                          <p>{msg.content} {msg.isUser ? '' : getRandomEmoji()}</p>
                        </div>
                      </div>
                    ))}
                    <div ref={messagesEndRef} />
                  </div>
                )}
              </div>

              {/* Chat Input */}
              {isIntroComplete && (
                <div className="px-6 py-4 border-t border-purple-500/20">
                  <div className="flex space-x-3">
                    <input
                      type="text"
                      placeholder="Ask your mentor anything..."
                      className="flex-1 bg-purple-900/50 border border-purple-500/30 rounded-xl px-5 py-3 text-white placeholder-purple-300 focus:outline-none focus:border-[#FFD700]/50"
                      onKeyPress={(e) => {
                        if (e.key === 'Enter' && (e.target as HTMLInputElement).value.trim()) {
                          sendMessage((e.target as HTMLInputElement).value);
                          (e.target as HTMLInputElement).value = '';
                        }
                      }}
                    />
                    <button
                      className="bg-gradient-to-r from-purple-600 to-purple-800 text-white px-6 py-3 rounded-xl hover:opacity-90 transition-opacity"
                      onClick={() => {/* Handle send */}}
                    >
                      Send
                    </button>
                  </div>
                </div>
              )}

              {/* Daily Wisdom */}
              {dailyWisdom && (
                <div className="px-6 py-3 bg-purple-900/30 border-t border-purple-500/20 text-sm text-purple-200">
                  <span className="font-semibold">Daily Wisdom:</span> {dailyWisdom}
                </div>
              )}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default AIMentorChat;