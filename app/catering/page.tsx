'use client';

import { useState, useEffect, useRef } from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { Send } from 'lucide-react';
import { ChatBubble } from '@/components/chat/chat-bubble';

interface Message {
  id: string;
  text: string;
  sender: 'system' | 'user';
  timestamp: string;
}

const now = () =>
  new Date().toLocaleTimeString('en-US', { hour: 'numeric', minute: '2-digit' });

const fadeUp = {
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.7, ease: 'easeOut' as const },
};

export default function CateringPage() {
  const [messages, setMessages] = useState<Message[]>([]);
  const [inputValue, setInputValue] = useState('');
  const bottomRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    setMessages([{
      id: '1',
      text: 'Hello! Thank you for your interest in our catering services. Our catering packages start at $25 per person. We can customise packages depending on your event size and food preferences. Please send us your requirements.',
      sender: 'system',
      timestamp: now(),
    }]);
  }, []);

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!inputValue.trim()) return;

    const userMsg: Message = { id: Date.now().toString(), text: inputValue, sender: 'user', timestamp: now() };
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
    <main>
      {/* Hero - Full-width image */}
      <section className="relative h-[50vh] min-h-[400px] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="https://picsum.photos/seed/catering-hero/1600/800"
            alt="Catering services"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-brown-900/50" />
        </div>
        <div className="relative z-10 text-center text-white px-4">
          <p className="text-[11px] uppercase tracking-[0.35em] text-white/70 mb-4">
            Events & Gatherings
          </p>
          <h1 className="font-display font-bold text-4xl sm:text-5xl md:text-6xl">
            Catering Services
          </h1>
          <p className="text-white/60 text-lg mt-4 max-w-lg mx-auto">
            Let us handle the food so you can focus on the moments that matter.
          </p>
        </div>
      </section>

      {/* Why choose us - alternating layout */}
      <section className="py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center mb-28">
            <motion.div {...fadeUp}>
              <p className="text-[11px] uppercase tracking-[0.35em] text-orange-500 mb-6">
                Why choose us
              </p>
              <h2 className="font-display font-bold text-3xl sm:text-4xl text-brown-900 leading-tight mb-8">
                Why choose Cafe4Good?
              </h2>
              <div className="section-divider mb-8" />

              <div className="space-y-8">
                {[
                  { title: 'Fresh Ingredients', desc: 'Every dish made fresh on the day of your event.' },
                  { title: 'Custom Menus', desc: 'Tailored to your dietary needs and preferences.' },
                  { title: 'Expert Team', desc: 'Experienced chefs and event coordinators.' },
                  { title: 'From $25/person', desc: 'Flexible packages for any budget.' },
                ].map((f) => (
                  <div key={f.title} className="border-l-2 border-orange-500 pl-6">
                    <h3 className="font-semibold text-brown-900 mb-1">{f.title}</h3>
                    <p className="text-brown-400 text-sm">{f.desc}</p>
                  </div>
                ))}
              </div>
            </motion.div>

            <motion.div {...fadeUp} transition={{ ...fadeUp.transition, delay: 0.1 }}>
              <div className="relative aspect-[4/5] w-full overflow-hidden">
                <Image
                  src="https://picsum.photos/seed/catering-spread/800/1000"
                  alt="Catering spread"
                  fill
                  className="object-cover"
                />
              </div>
            </motion.div>
          </div>

          {/* Chat section */}
          <motion.div {...fadeUp}>
            <div className="max-w-3xl mx-auto">
              <div className="text-center mb-12">
                <p className="text-[11px] uppercase tracking-[0.35em] text-orange-500 mb-4">
                  Get a quote
                </p>
                <h2 className="font-display font-bold text-3xl text-brown-900">
                  Tell us about your event
                </h2>
              </div>

              <div className="bg-white border border-brown-100 overflow-hidden">
                {/* Chat header */}
                <div className="bg-brown-900 px-6 py-4 flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-orange-500 flex items-center justify-center text-white font-bold text-sm">
                    C4
                  </div>
                  <div>
                    <p className="text-white font-semibold text-sm">Cafe4Good Catering</p>
                    <p className="text-white/50 text-xs flex items-center gap-1">
                      <span className="w-1.5 h-1.5 rounded-full bg-green-400 inline-block" />
                      Online
                    </p>
                  </div>
                </div>

                {/* Messages */}
                <div className="p-6 h-[380px] overflow-y-auto space-y-1 bg-brown-50/30">
                  {messages.map((msg) => (
                    <ChatBubble key={msg.id} message={msg.text} sender={msg.sender} timestamp={msg.timestamp} />
                  ))}
                  <div ref={bottomRef} />
                </div>

                {/* Input */}
                <form onSubmit={handleSubmit} className="p-4 border-t border-brown-100 flex gap-3 bg-white">
                  <input
                    type="text"
                    value={inputValue}
                    onChange={(e) => setInputValue(e.target.value)}
                    placeholder="Type your message..."
                    className="flex-1 px-4 py-3 border border-brown-200 text-sm text-brown-800 placeholder-brown-400 focus:outline-none focus:ring-2 focus:ring-orange-400 focus:border-transparent transition-all"
                    aria-label="Message input"
                  />
                  <button
                    type="submit"
                    className="w-11 h-11 bg-brown-900 hover:bg-orange-600 flex items-center justify-center text-white transition-colors focus:outline-none focus:ring-2 focus:ring-orange-500 focus:ring-offset-2"
                    aria-label="Send message"
                  >
                    <Send className="w-4 h-4" />
                  </button>
                </form>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </main>
  );
}
