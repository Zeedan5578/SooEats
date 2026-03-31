'use client';

import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { ArrowLeft } from 'lucide-react';

const fadeUp = {
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.7, ease: 'easeOut' as const },
};

const timeline = [
  {
    year: '2020',
    title: 'The Seed',
    desc: 'What started as a small pop-up kitchen became a community of food lovers who believed that healthy eating could be delicious.',
    images: [
      'https://picsum.photos/seed/story-2020a/600/400',
      'https://picsum.photos/seed/story-2020b/600/400',
    ],
  },
  {
    year: '2022',
    title: 'Finding Our Space',
    desc: 'We found an old space and transformed it into a warm, inviting cafe where people could gather and enjoy nourishing meals.',
    images: [
      'https://picsum.photos/seed/story-2022a/600/400',
      'https://picsum.photos/seed/story-2022b/600/400',
    ],
  },
  {
    year: '2024',
    title: 'Growing Community',
    desc: 'With catering, partnerships, and a loyal community, SOOEATS expanded its reach and continued its mission.',
    images: [
      'https://picsum.photos/seed/story-2024a/600/400',
      'https://picsum.photos/seed/story-2024b/600/400',
    ],
  },
];

export default function StoryPage() {
  return (
    <main>
      {/* Hero */}
      <section className="relative h-[45vh] min-h-[350px] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="https://picsum.photos/seed/story-cafe/1600/800"
            alt="Our story"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-brown-900/50" />
        </div>
        <div className="relative z-10 text-center text-white px-4">
          <p className="text-[11px] uppercase tracking-[0.35em] text-white/70 mb-4">About Us</p>
          <h1 className="font-display font-bold text-4xl sm:text-5xl md:text-6xl">Our Story</h1>
        </div>
      </section>

      {/* Timeline content */}
      <section className="py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div {...fadeUp} className="mb-12">
            <Link href="/about" className="inline-flex items-center gap-2 text-sm uppercase tracking-widest text-brown-500 hover:text-orange-600 transition-colors">
              <ArrowLeft className="w-4 h-4" /> Back to About
            </Link>
          </motion.div>

          <motion.div {...fadeUp} className="max-w-3xl mb-24">
            <p className="text-[11px] uppercase tracking-[0.35em] text-orange-500 mb-6">How it started</p>
            <h2 className="font-display font-bold text-3xl sm:text-4xl text-brown-900 leading-tight mb-8">
              From a simple idea to a growing community
            </h2>
            <div className="section-divider mb-8" />
            <p className="text-brown-500 text-lg leading-relaxed">
              Every great story starts with a simple idea. Ours was a belief that food should nourish both body and soul, and that healthy eating doesn&apos;t have to mean compromising on flavour.
            </p>
          </motion.div>

          {/* Timeline - alternating sections */}
          <div className="space-y-32">
            {timeline.map((entry, i) => (
              <motion.div
                key={entry.year}
                {...fadeUp}
                className={`grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center`}
              >
                {/* Images */}
                <div className={`space-y-6 ${i % 2 === 1 ? 'lg:order-2' : ''}`}>
                  {entry.images.map((img, j) => (
                    <div key={j} className="relative aspect-[3/2] w-full overflow-hidden">
                      <Image
                        src={img}
                        alt={`${entry.title} - ${j + 1}`}
                        fill
                        className="object-cover"
                      />
                    </div>
                  ))}
                </div>

                {/* Text */}
                <div className={i % 2 === 1 ? 'lg:order-1' : ''}>
                  <div className="inline-block px-4 py-2 border border-orange-500 text-orange-500 text-sm font-display font-bold mb-6">
                    {entry.year}
                  </div>
                  <h3 className="font-display font-bold text-2xl sm:text-3xl text-brown-900 mb-4">
                    {entry.title}
                  </h3>
                  <div className="section-divider mb-6" />
                  <p className="text-brown-500 text-lg leading-relaxed">
                    {entry.desc}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
