'use client';

import { useState, useEffect } from 'react';
import { PageHeader } from '@/components/ui/page-header';
import { SectionContainer } from '@/components/ui/section-container';
import { ChatBubble } from '@/components/chat/chat-bubble';
import { Button } from '@/components/ui/button';

interface Message {
  id: string;
  text: string;
  sender: 'system' | 'user';
  timestamp: string;
}

export default function CateringPage() {
  const [messages, setMessages] = useState<Message[]>([]);
  const [inputValue, setInputValue] = useState('');

  useEffect(() => {
    // Display automated greeting on page load
    const greeting: Message = {
      id: '1',
      text: 'Hello! Thank you for your interest in our catering services. Our catering packages start at $25 per person. We can customize packages depending on your event size and food preferences. Please send us your requirements.',
      sender: 'system',
      timestamp: new Date().toLocaleTimeString('en-US', {
        hour: 'numeric',
        minute: '2-digit',
      }),
    };
    setMessages([greeting]);
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!inputValue.trim()) return;

    const newMessage: Message = {
      id: Date.now().toString(),
      text: inputValue,
      sender: 'user',
      timestamp: new Date().toLocaleTimeString('en-US', {
        hour: 'numeric',
        minute: '2-digit',
      }),
    };

    setMessages((prev) => [...prev, newMessage]);
    setInputValue('');

    // Simulate system response
    setTimeout(() => {
      const response: Message = {
        id: (Date.now() + 1).toString(),
        text: 'Thank you for your message! Our team will review your requirements and get back to you shortly with a custom quote.',
        sender: 'system',
        timestamp: new Date().toLocaleTimeString('en-US', {
          hour: 'numeric',
          minute: '2-digit',
        }),
      };
      setMessages((prev) => [...prev, response]);
    }, 1000);
  };

  return (
    <main>
      <SectionContainer>
        <PageHeader
          title="Catering Services"
          subtitle="Let us cater your next event with our delicious offerings"
        />

        {/* Chat Interface */}
        <div className="max-w-3xl mx-auto">
          <div className="bg-white rounded-card shadow-soft p-6 min-h-[500px] flex flex-col">
            {/* Messages Container */}
            <div className="flex-1 overflow-y-auto mb-4 space-y-2">
              {messages.map((message) => (
                <ChatBubble
                  key={message.id}
                  message={message.text}
                  sender={message.sender}
                  timestamp={message.timestamp}
                />
              ))}
            </div>

            {/* Input Form */}
            <form onSubmit={handleSubmit} className="flex gap-2">
              <input
                type="text"
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                placeholder="Type your message..."
                className="flex-1 px-4 py-3 border border-cafe-brown-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-cafe-orange"
                aria-label="Message input"
              />
              <Button type="submit" variant="primary">
                Send
              </Button>
            </form>
          </div>
        </div>
      </SectionContainer>
    </main>
  );
}
