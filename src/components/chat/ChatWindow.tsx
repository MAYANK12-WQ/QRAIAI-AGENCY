import React, { useState, useRef, useEffect } from 'react';
import { Send, X, Loader2, MessageSquare, Brain } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import ChatMessage from './ChatMessage';
import ChatInput from './ChatInput';
import { useChat } from '../../hooks/useChat';
import GlowingButton from '../ui/GlowingButton';

const ChatWindow = () => {
  const [isOpen, setIsOpen] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const { messages, isLoading, sendMessage, clearChat } = useChat();

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  return (
    <>
      {/* Chat Toggle Button */}
      <motion.button
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        onClick={() => setIsOpen(true)}
        className="fixed bottom-8 right-8 bg-gradient-to-r from-purple-600 to-purple-800 text-white p-4 rounded-full shadow-lg hover:shadow-xl transition-all duration-300"
      >
        <span className="sr-only">Open Chat</span>
        <div className="relative">
          <MessageSquare className="w-6 h-6 text-white" />
          <div className="absolute -top-1 -right-1 w-3 h-3 bg-[#FFD700] rounded-full animate-pulse" />
        </div>
      </motion.button>

      {/* Chat Window */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 100 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 100 }}
            className="fixed bottom-8 right-8 w-96 bg-[#1a0033] rounded-2xl shadow-2xl border border-purple-500/20"
          >
            {/* Header */}
            <div className="flex items-center justify-between px-6 py-4 border-b border-purple-500/20 bg-purple-900/95 rounded-t-2xl">
              <div className="flex items-center space-x-3">
                <Brain className="w-6 h-6 text-[#FFD700]" />
                <h3 className="text-lg font-bold text-white">AI Assistant</h3>
              </div>
              <button
                onClick={() => setIsOpen(false)}
                className="text-gray-400 hover:text-white transition-colors p-2"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Messages */}
            <div className="h-96 overflow-y-auto p-6 space-y-6 bg-[#1a0033]">
              {messages.map((message, index) => (
                <ChatMessage key={index} {...message} />
              ))}
              {isLoading && (
                <div className="flex items-center space-x-3 text-purple-300 p-2">
                  <Loader2 className="w-4 h-4 animate-spin" />
                  <span>AI is thinking...</span>
                </div>
              )}
              <div ref={messagesEndRef} />
            </div>

            {/* Input */}
            <ChatInput onSend={sendMessage} isLoading={isLoading} />

            {/* Footer */}
            <div className="px-6 py-4 border-t border-purple-500/20 bg-purple-900/95 rounded-b-2xl flex justify-between items-center">
              <button
                onClick={clearChat}
                className="text-sm text-purple-300 hover:text-white transition-colors px-3 py-1"
              >
                Clear Chat
              </button>
              <GlowingButton
                onClick={() => window.location.href = '#contact'}
                className="text-sm px-4 py-2"
              >
                Contact Support
              </GlowingButton>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default ChatWindow;