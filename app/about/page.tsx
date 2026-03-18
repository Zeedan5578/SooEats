'use client';

import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

const fadeUp = {
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.7, ease: 'easeOut' as const },
};

const cards = [
  {
    title: 'Our Mission',
    description: 'Discover what drives us to serve fresh, healthy food every single day.',
    href: '/about/mission',
    image: 'https://picsum.photos/seed/mission-card/600/800',
  },
  {
    title: 'Our Vision',
    description: 'Learn about our goals for the future of healthy, accessible eating.',
    href: '/about/vision',
    image: 'https://picsum.photos/seed/vision-card/600/800',
  },
  {
    title: 'Our Story',
    description: "Find out how Cafe4Good came to be — and where we're headed.",
    href: '/about/story',
    image: 'https://picsum.photos/seed/story-card/600/800',
  },
];

export default function AboutPage() {
  return (
    <main>
      {/* Hero - Full-width image */}
      <section className="relative h-[60vh] min-h-[450px] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="https://picsum.photos/seed/cafe-team/1600/900"
            alt="Cafe4Good team"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-brown-900/50" />
        </div>
        <div className="relative z-10 text-center text-white px-4">
          <p className="text-[11px] uppercase tracking-[0.35em] text-white/70 mb-4">
            Who we are
          </p>
          <h1 className="font-display font-bold text-4xl sm:text-5xl md:text-6xl">
            About Cafe4Good
          </h1>
          <p className="text-white/60 text-lg mt-4 max-w-lg mx-auto">
            A team of food lovers on a mission to make healthy eating delicious and accessible.
          </p>
        </div>
      </section>

      {/* Intro text */}
      <section className="py-28">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 text-center">
          <motion.div {...fadeUp}>
            <p className="text-[11px] uppercase tracking-[0.35em] text-orange-500 mb-6">
              Our journey
            </p>
            <h2 className="font-display font-bold text-3xl sm:text-4xl text-brown-900 leading-tight mb-8">
              Come join us as our story continues to grow
            </h2>
            <div className="section-divider mx-auto mb-8" />
            <p className="text-brown-500 text-lg leading-relaxed">
              What started as a small passion project has grown into a community of food lovers who believe that what you eat matters. We create havens where people can meet, rest, and enjoy nourishing meals.
            </p>
          </motion.div>
        </div>
      </section>

      {/* About cards - three columns with tall images */}
      <section className="bg-brown-50 py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {cards.map((card, i) => (
              <motion.div
                key={card.href}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: i * 0.1 }}
              >
                <Link href={card.href} className="group block">
                  <div className="relative aspect-[3/4] w-full overflow-hidden mb-6">
                    <Image
                      src={card.image}
                      alt={card.title}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-700"
                    />
                    <div className="absolute inset-0 bg-brown-900/20 group-hover:bg-brown-900/10 transition-colors duration-500" />
                  </div>
                  <h3 className="font-display font-bold text-xl text-brown-900 mb-2 group-hover:text-orange-600 transition-colors">
                    {card.title}
                  </h3>
                  <p className="text-brown-400 text-sm leading-relaxed mb-4">
                    {card.description}
                  </p>
                  <span className="inline-flex items-center gap-2 text-sm uppercase tracking-widest text-brown-900 group-hover:text-orange-600 transition-colors font-medium">
                    Read More <ArrowRight className="w-4 h-4" />
                  </span>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
