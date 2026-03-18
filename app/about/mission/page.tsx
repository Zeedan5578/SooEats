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

export default function MissionPage() {
  return (
    <main>
      {/* Hero */}
      <section className="relative h-[45vh] min-h-[350px] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="https://picsum.photos/seed/mission-food/1600/800"
            alt="Our mission"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-brown-900/50" />
        </div>
        <div className="relative z-10 text-center text-white px-4">
          <p className="text-[11px] uppercase tracking-[0.35em] text-white/70 mb-4">About Us</p>
          <h1 className="font-display font-bold text-4xl sm:text-5xl md:text-6xl">Our Mission</h1>
        </div>
      </section>

      {/* Content - alternating layout */}
      <section className="py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div {...fadeUp} className="mb-12">
            <Link href="/about" className="inline-flex items-center gap-2 text-sm uppercase tracking-widest text-brown-500 hover:text-orange-600 transition-colors">
              <ArrowLeft className="w-4 h-4" /> Back to About
            </Link>
          </motion.div>

          {/* Text left, image right */}
          <motion.div {...fadeUp} className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center mb-28">
            <div>
              <p className="text-[11px] uppercase tracking-[0.35em] text-orange-500 mb-6">What drives us</p>
              <h2 className="font-display font-bold text-3xl sm:text-4xl text-brown-900 leading-tight mb-8">
                Making healthy eating delicious and accessible
              </h2>
              <div className="section-divider mb-8" />
              <p className="text-brown-500 text-lg leading-relaxed mb-6">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
              </p>
              <p className="text-brown-400 leading-relaxed">
                Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
              </p>
            </div>
            <div className="relative aspect-[4/5] w-full overflow-hidden">
              <Image
                src="https://picsum.photos/seed/mission-detail/800/1000"
                alt="Our mission in action"
                fill
                className="object-cover"
              />
            </div>
          </motion.div>

          {/* Image left, text right */}
          <motion.div {...fadeUp} className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
            <div className="relative aspect-[4/3] w-full overflow-hidden">
              <Image
                src="https://picsum.photos/seed/mission-team/800/600"
                alt="Our team"
                fill
                className="object-cover"
              />
            </div>
            <div>
              <p className="text-brown-500 text-lg leading-relaxed mb-6">
                Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.
              </p>
              <p className="text-brown-400 leading-relaxed">
                Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt.
              </p>
            </div>
          </motion.div>
        </div>
      </section>
    </main>
  );
}
