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

export default function VisionPage() {
  return (
    <main>
      {/* Hero */}
      <section className="relative h-[45vh] min-h-[350px] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="https://picsum.photos/seed/vision-cafe/1600/800"
            alt="Our vision"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-brown-900/50" />
        </div>
        <div className="relative z-10 text-center text-white px-4">
          <p className="text-[11px] uppercase tracking-[0.35em] text-white/70 mb-4">About Us</p>
          <h1 className="font-display font-bold text-4xl sm:text-5xl md:text-6xl">Our Vision</h1>
        </div>
      </section>

      {/* Content */}
      <section className="py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div {...fadeUp} className="mb-12">
            <Link href="/about" className="inline-flex items-center gap-2 text-sm uppercase tracking-widest text-brown-500 hover:text-orange-600 transition-colors">
              <ArrowLeft className="w-4 h-4" /> Back to About
            </Link>
          </motion.div>

          {/* Full-width intro text */}
          <motion.div {...fadeUp} className="max-w-3xl mb-24">
            <p className="text-[11px] uppercase tracking-[0.35em] text-green-600 mb-6">Where we&apos;re headed</p>
            <h2 className="font-display font-bold text-3xl sm:text-4xl text-brown-900 leading-tight mb-8">
              Building a future where healthy eating is the norm, not the exception
            </h2>
            <div className="section-divider mb-8" />
            <p className="text-brown-500 text-lg leading-relaxed">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
            </p>
          </motion.div>

          {/* Two images side by side */}
          <motion.div {...fadeUp} className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-24">
            <div className="relative aspect-[4/3] w-full overflow-hidden">
              <Image
                src="https://picsum.photos/seed/vision-future1/800/600"
                alt="Our vision for the future"
                fill
                className="object-cover"
              />
            </div>
            <div className="relative aspect-[4/3] w-full overflow-hidden">
              <Image
                src="https://picsum.photos/seed/vision-future2/800/600"
                alt="Growing community"
                fill
                className="object-cover"
              />
            </div>
          </motion.div>

          {/* Text block */}
          <motion.div {...fadeUp} className="max-w-3xl mx-auto text-center">
            <p className="text-brown-500 text-lg leading-relaxed mb-6">
              Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
            </p>
            <p className="text-brown-400 leading-relaxed">
              Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.
            </p>
          </motion.div>
        </div>
      </section>
    </main>
  );
}
