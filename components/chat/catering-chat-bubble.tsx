'use client';

import { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { MessageCircle, X, Send } from 'lucide-react';
import { ChatBubble } from '@/components/chat/chat-bubble';

interface Message {
  id: string;
  text: string;
  sender: 'system' | 'user';
  timestamp: string;
}

const now = () =>
  new Date().toLocaleTimeString('en-US', { hour: 'numeric', minute: '2-digit' });

export function CateringChatBubble() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([]);
  const [inputValue, setInputValue] = useState('');
  const bottomRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (isOpen && messages.length === 0) {
      setMessages([{
        id: '1',
        text: 'Hello! Thank you for your interest in our catering services. Our catering packages start at $25 per person. We can customise packages depending on your event size and food preferences. Please send us your requirements.',
        sender: 'system',
        timestamp: now(),
      }]);
    }
  }, [isOpen, messages.length]);

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!inputValue.trim()) return;

    const userMsg: Message = {
      id: Date.now().toString(),
      text: inputValue,
      sender: 'user',
      timestamp: now(),
    };
    setMessages((p) => [...p, userMsg]);
    setInputValue('');

    setTimeout(() => {
      setMessages((p) => [...p, {
        id: (Date.now() + 1).toString(),
        text: 'Thank you for your message! Our team will review your requirements and get back to you shortly with a custom quote.',
        sender: 'system',
        timestamp: now(),
      }]);
    }, 1000);
  };

  return (
    <div className="fixed bottom-6 right-6 z-50">
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.95 }}
            transition={{ duration: 0.2 }}
            className="absolute bottom-16 right-0 w-[360px] bg-white border border-brown-100 shadow-2xl overflow-hidden"
          >
            {/* Chat header */}
            <div className="bg-brown-900 px-4 py-3 flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-full bg-orange-500 flex items-center justify-center text-white font-bold text-xs">
                  SE
                </div>
                <div>
                  <p className="text-white font-semibold text-sm">SOOEATS Catering</p>
                  <p className="text-white/50 text-xs flex items-center gap-1">
                    <span className="w-1.5 h-1.5 rounded-full bg-green-400 inline-block" />
                    Online
                  </p>
                </div>
              </div>
              <button
                onClick={() => setIsOpen(false)}
                className="text-white/60 hover:text-white transition-colors"
                aria-label="Close chat"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            {/* Messages */}
            <div className="p-4 h-[300px] overflow-y-auto space-y-1 bg-brown-50/30">
              {messages.map((msg) => (
                <ChatBubble key={msg.id} message={msg.text} sender={msg.sender} timestamp={msg.timestamp} />
              ))}
              <div ref={bottomRef} />
            </div>

            {/* Input */}
            <form onSubmit={handleSubmit} className="p-3 border-t border-brown-100 flex gap-2 bg-white">
              <input
                type="text"
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                placeholder="Type your message..."
                className="flex-1 px-3 py-2 border border-brown-200 text-sm text-brown-800 placeholder-brown-400 focus:outline-none focus:ring-2 focus:ring-orange-400 focus:border-transparent transition-all"
                aria-label="Message input"
              />
              <button
                type="submit"
                className="w-10 h-10 bg-brown-900 hover:bg-orange-600 flex items-center justify-center text-white transition-colors"
                aria-label="Send message"
              >
                <Send className="w-4 h-4" />
              </button>
            </form>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Floating trigger button */}
      <motion.button
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        onClick={() => setIsOpen(!isOpen)}
        className="w-14 h-14 rounded-full bg-brown-900 hover:bg-orange-600 text-white shadow-lg flex items-center justify-center transition-colors"
        aria-label={isOpen ? 'Close catering chat' : 'Open catering chat'}
      >
        {isOpen ? <X className="w-6 h-6" /> : <MessageCircle className="w-6 h-6" />}
      </motion.button>
    </div>
  );
}
