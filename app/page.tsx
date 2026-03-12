'use client';

import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';

export default function Home() {
  const sections = [
    {
      title: 'Menu',
      description: 'Explore our delicious selection of fresh, healthy meals',
      href: '/menu',
      icon: '🍽️',
    },
    {
      title: 'Catering',
      description: 'Custom catering packages for your special events',
      href: '/catering',
      icon: '🎉',
    },
    {
      title: 'Meal Plan',
      description: 'Convenient meal plans tailored to your lifestyle',
      href: '/meal-plan',
      icon: '📅',
    },
    {
      title: 'Nutrition',
      description: 'Detailed nutritional information for all our dishes',
      href: '/nutrition',
      icon: '🥗',
    },
    {
      title: 'SooEats Collaboration',
      description: 'Discover our exclusive partnership products',
      href: '/soo-eats',
      icon: '🤝',
    },
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-[600px] flex items-center justify-center overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <Image
            src="/logo.jpeg"
            alt="Cafe background"
            fill
            className="object-cover brightness-50"
            priority
          />
        </div>

        {/* Hero Content */}
        <motion.div
          className="relative z-10 text-center text-white px-4"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            Welcome to Cafe4Good
          </h1>
          <p className="text-xl md:text-2xl mb-8 max-w-2xl mx-auto">
            Fresh, healthy, and delicious meals crafted with care
          </p>
          <Link href="/menu">
            <Button size="lg" variant="primary">
              View Our Menu
            </Button>
          </Link>
        </motion.div>
      </section>

      {/* Navigation Sections */}
      <section className="max-w-7xl mx-auto px-4 py-16">
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          {sections.map((section, index) => (
            <motion.div
              key={section.href}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 * index }}
            >
              <Link href={section.href}>
                <Card hover className="h-full cursor-pointer">
                  <div className="p-6">
                    <div className="text-4xl mb-4">{section.icon}</div>
                    <h2 className="text-2xl font-semibold text-cafe-brown-800 mb-3">
                      {section.title}
                    </h2>
                    <p className="text-cafe-brown-600">{section.description}</p>
                  </div>
                </Card>
              </Link>
            </motion.div>
          ))}
        </motion.div>
      </section>
    </div>
  );
}
