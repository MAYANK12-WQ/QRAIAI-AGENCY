import React from 'react';
import { motion } from 'framer-motion';
import { Brain } from 'lucide-react';

interface ChatMessageProps {
  content: string;
  isUser: boolean;
}

const ChatMessage: React.FC<ChatMessageProps> = ({ content, isUser }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      className={`flex ${isUser ? 'justify-end' : 'justify-start'}`}
    >
      <div
        className={`max-w-[80%] rounded-2xl px-5 py-3 ${
          isUser
            ? 'bg-purple-600 text-white'
            : 'bg-purple-900/95 border border-purple-500/20 text-gray-200'
        }`}
      >
        <div className="flex items-start space-x-3">
          {!isUser && <Brain className="w-4 h-4 text-[#FFD700] mt-1" />}
          <p className="leading-relaxed">{content}</p>
        </div>
      </div>
    </motion.div>
  );
};

export default ChatMessage;