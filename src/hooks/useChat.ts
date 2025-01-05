import { useState } from 'react';

interface Message {
  content: string;
  isUser: boolean;
}

const INITIAL_MESSAGE = {
  content: "Hi! I'm your AI assistant. How can I help you with your AI learning journey?",
  isUser: false,
};

const API_KEY = 'AIzaSyBLc-pzAyI3D6cCp-Evn4wH8-ggItTIVLA';
const API_URL = 'https://generativelanguage.googleapis.com/v1beta/models/gemini-pro:generateContent';

export const useChat = () => {
  const [messages, setMessages] = useState<Message[]>([INITIAL_MESSAGE]);
  const [isLoading, setIsLoading] = useState(false);

  const sendMessage = async (content: string) => {
    try {
      // Add user message immediately
      setMessages(prev => [...prev, { content, isUser: true }]);
      setIsLoading(true);

      const response = await fetch(`${API_URL}?key=${API_KEY}`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          contents: [{
            parts: [{
              text: content
            }]
          }]
        })
      });

      if (!response.ok) {
        throw new Error('Failed to get response from AI');
      }

      const data = await response.json();
      const aiResponse = data.candidates[0].content.parts[0].text;

      setMessages(prev => [...prev, { content: aiResponse, isUser: false }]);

    } catch (error) {
      console.error('Chat error:', error);
      setMessages(prev => [...prev, {
        content: "I apologize, but I'm having trouble connecting right now. Please try again or contact our support team for immediate assistance.",
        isUser: false,
      }]);
    } finally {
      setIsLoading(false);
    }
  };

  const clearChat = () => {
    setMessages([INITIAL_MESSAGE]);
  };

  return {
    messages,
    isLoading,
    sendMessage,
    clearChat,
  };
};