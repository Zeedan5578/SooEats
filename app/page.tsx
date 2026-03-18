'use client';

import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { menuItems } from '@/lib/data/menu';

const fadeUp = {
  initial: { opacity: 0, y: 40 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.8, ease: 'easeOut' as const },
};

export default function Home() {
  return (
    <div className="min-h-screen">

      {/* HERO - Split: gradient + text left, image mosaic right */}
      <section className="relative min-h-[90vh] grid grid-cols-1 lg:grid-cols-2 overflow-hidden">

        {/* Left: Gradient background with text */}
        <div
          className="relative flex items-center py-24 lg:py-0 px-8 sm:px-12 lg:px-16 xl:px-20 order-2 lg:order-1"
          style={{ background: 'linear-gradient(135deg, #e8472a 0%, #f97316 25%, #d4a017 50%, #4ade80 75%, #0ea5e9 100%)' }}
        >
          <div className="max-w-xl">
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-[11px] uppercase tracking-[0.35em] text-white/70 mb-6"
            >
              Welcome to Cafe4Good
            </motion.p>

            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="font-display font-bold text-4xl sm:text-5xl lg:text-6xl leading-[1.1] text-white mb-6"
            >
              Leaving You Wanting More
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="text-white/85 text-lg sm:text-xl mb-10 leading-relaxed"
            >
              Fresh, High-Protein, Packed with Flavor.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.8 }}
            >
              <Link href="/menu">
                <Button size="lg" className="bg-white text-brown-900 hover:bg-brown-900 hover:text-white shadow-none rounded-none px-10 py-4 text-sm uppercase tracking-widest font-semibold transition-colors duration-300 border-0">
                  View Menu
                </Button>
              </Link>
            </motion.div>
          </div>
        </div>

        {/* Right: Food image mosaic grid */}
        <div className="relative order-1 lg:order-2 min-h-[50vh] lg:min-h-0">
          <div className="grid grid-cols-2 grid-rows-2 h-full min-h-[50vh] lg:min-h-0 lg:absolute lg:inset-0">
            {/* Top-left - tall */}
            <motion.div
              initial={{ opacity: 0, scale: 1.1 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1, delay: 0.1 }}
              className="relative row-span-2 overflow-hidden"
            >
              <Image
                src="https://picsum.photos/seed/avocado-toast/600/1200"
                alt="Avocado toast"
                fill
                className="object-cover"
                priority
              />
              <div className="absolute inset-0 bg-brown-900/10" />
            </motion.div>

            {/* Top-right */}
            <motion.div
              initial={{ opacity: 0, scale: 1.1 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1, delay: 0.3 }}
              className="relative overflow-hidden"
            >
              <Image
                src="https://picsum.photos/seed/acai-bowl/600/600"
                alt="Acai bowl"
                fill
                className="object-cover"
                priority
              />
              <div className="absolute inset-0 bg-brown-900/10" />
            </motion.div>

            {/* Bottom-right */}
            <motion.div
              initial={{ opacity: 0, scale: 1.1 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1, delay: 0.5 }}
              className="relative overflow-hidden"
            >
              <Image
                src="https://picsum.photos/seed/matcha-latte/600/600"
                alt="Matcha latte"
                fill
                className="object-cover"
                priority
              />
              <div className="absolute inset-0 bg-brown-900/10" />
            </motion.div>
          </div>
        </div>
      </section>

      {/* PHILOSOPHY - Split layout: text left, image right */}
      <section className="py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
            <motion.div {...fadeUp}>
              <p className="text-[11px] uppercase tracking-[0.35em] text-orange-500 mb-6">
                Our Philosophy
              </p>
              <h2 className="font-display font-bold text-3xl sm:text-4xl lg:text-5xl text-brown-900 leading-tight mb-8">
                Food that fuels your best self
              </h2>
              <div className="section-divider mb-8" />
              <p className="text-brown-500 text-lg leading-relaxed mb-6">
                Every dish at Cafe4Good starts with a simple question: what would genuinely nourish someone today? We source seasonal produce, work with local farmers, and cook everything fresh.
              </p>
              <p className="text-brown-400 leading-relaxed mb-10">
                Whether you're grabbing a quick lunch, planning a corporate event, or building a weekly meal plan, we've got you covered with flavours that make healthy eating feel like a treat.
              </p>
              <Link href="/about">
                <Button variant="secondary" className="rounded-none border-brown-900 text-brown-900 hover:bg-brown-900 hover:text-white px-8 py-3 text-sm uppercase tracking-widest transition-colors duration-300">
                  Our Story <ArrowRight className="w-4 h-4 ml-2" />
                </Button>
              </Link>
            </motion.div>

            <motion.div
              {...fadeUp}
              transition={{ ...fadeUp.transition, delay: 0.15 }}
              className="relative aspect-[4/5] w-full"
            >
              <Image
                src="https://picsum.photos/seed/cafe-food/800/1000"
                alt="Fresh food"
                fill
                className="object-cover"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* FEATURED FAVORITES - Horizontal scroll */}
      <section className="bg-brown-50 py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div {...fadeUp} className="text-center mb-16">
            <p className="text-[11px] uppercase tracking-[0.35em] text-orange-500 mb-4">
              Discover our menu
            </p>
            <h2 className="font-display font-bold text-3xl sm:text-4xl text-brown-900">
              Featured Favorites
            </h2>
          </motion.div>

          <div className="scroll-x flex gap-6 pb-4 -mx-4 px-4">
            {menuItems.slice(0, 6).map((item, i) => (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: i * 0.08 }}
                className="flex-shrink-0 w-[300px] group"
              >
                <div className="relative aspect-[3/4] w-full overflow-hidden mb-4">
                  <Image
                    src={item.image}
                    alt={item.name}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                </div>
                <div className="flex justify-between items-start">
                  <div>
                    <h3 className="font-display font-bold text-lg text-brown-900">{item.name}</h3>
                    <p className="text-brown-400 text-sm mt-1">{item.description}</p>
                  </div>
                  <span className="font-semibold text-orange-500 text-lg ml-4 shrink-0">
                    ${item.price.toFixed(2)}
                  </span>
                </div>
              </motion.div>
            ))}
          </div>

          <motion.div {...fadeUp} className="text-center mt-12">
            <Link href="/menu">
              <Button variant="secondary" className="rounded-none border-brown-900 text-brown-900 hover:bg-brown-900 hover:text-white px-10 py-3 text-sm uppercase tracking-widest transition-colors duration-300">
                View Full Menu <ArrowRight className="w-4 h-4 ml-2" />
              </Button>
            </Link>
          </motion.div>
        </div>
      </section>

      {/* SERVICES - Alternating image/text rows */}
      <section className="py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div {...fadeUp} className="text-center mb-20">
            <p className="text-[11px] uppercase tracking-[0.35em] text-orange-500 mb-4">
              Everything we offer
            </p>
            <h2 className="font-display font-bold text-3xl sm:text-4xl text-brown-900">
              Explore Cafe4Good
            </h2>
          </motion.div>

          {/* Catering - Image left, text right */}
          <motion.div {...fadeUp} className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center mb-28">
            <div className="relative aspect-[4/3] w-full overflow-hidden">
              <Image
                src="https://picsum.photos/seed/catering-event/800/600"
                alt="Catering services"
                fill
                className="object-cover"
              />
            </div>
            <div>
              <p className="text-[11px] uppercase tracking-[0.35em] text-orange-500 mb-4">Catering</p>
              <h3 className="font-display font-bold text-2xl sm:text-3xl text-brown-900 mb-4">
                Bespoke catering for every occasion
              </h3>
              <div className="section-divider mb-6" />
              <p className="text-brown-500 leading-relaxed mb-8">
                From intimate gatherings to corporate events, our catering packages are customised to your taste. Fresh ingredients, expert chefs, and seamless service.
              </p>
              <Link href="/catering">
                <span className="inline-flex items-center gap-2 text-sm uppercase tracking-widest text-brown-900 hover:text-orange-600 transition-colors font-medium">
                  Learn More <ArrowRight className="w-4 h-4" />
                </span>
              </Link>
            </div>
          </motion.div>

          {/* Meal Plans - Text left, image right */}
          <motion.div {...fadeUp} className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center mb-28">
            <div className="order-2 lg:order-1">
              <p className="text-[11px] uppercase tracking-[0.35em] text-green-600 mb-4">Coming Soon</p>
              <h3 className="font-display font-bold text-2xl sm:text-3xl text-brown-900 mb-4">
                Personalised meal plans
              </h3>
              <div className="section-divider mb-6" />
              <p className="text-brown-500 leading-relaxed mb-8">
                Curated weekly plans designed around your nutrition goals. Balanced, delicious, and delivered fresh to your door.
              </p>
              <Link href="/meal-plan">
                <span className="inline-flex items-center gap-2 text-sm uppercase tracking-widest text-brown-900 hover:text-orange-600 transition-colors font-medium">
                  Join Waitlist <ArrowRight className="w-4 h-4" />
                </span>
              </Link>
            </div>
            <div className="relative aspect-[4/3] w-full overflow-hidden order-1 lg:order-2">
              <Image
                src="https://picsum.photos/seed/meal-prep/800/600"
                alt="Meal plans"
                fill
                className="object-cover"
              />
            </div>
          </motion.div>

          {/* SooEats - Image left, text right */}
          <motion.div {...fadeUp} className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            <div className="relative aspect-[4/3] w-full overflow-hidden">
              <Image
                src="https://picsum.photos/seed/collab-products/800/600"
                alt="SooEats collaboration"
                fill
                className="object-cover"
              />
            </div>
            <div>
              <p className="text-[11px] uppercase tracking-[0.35em] text-orange-500 mb-4">Partnership</p>
              <h3 className="font-display font-bold text-2xl sm:text-3xl text-brown-900 mb-4">
                SooEats x Cafe4Good
              </h3>
              <div className="section-divider mb-6" />
              <p className="text-brown-500 leading-relaxed mb-8">
                Exclusive, high-quality products born from our partnership with SooEats. Fresh, healthy, and sustainable.
              </p>
              <Link href="/soo-eats">
                <span className="inline-flex items-center gap-2 text-sm uppercase tracking-widest text-brown-900 hover:text-orange-600 transition-colors font-medium">
                  Explore Products <ArrowRight className="w-4 h-4" />
                </span>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* CTA - Full-width image banner */}
      <section className="relative py-32 overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="https://picsum.photos/seed/cafe-interior/1600/800"
            alt="Cafe interior"
            fill
            className="object-cover"
          />
          <div className="absolute inset-0 bg-brown-900/60" />
        </div>

        <motion.div
          {...fadeUp}
          className="relative z-10 max-w-3xl mx-auto text-center px-4"
        >
          <h2 className="font-display font-bold text-3xl sm:text-4xl lg:text-5xl text-white mb-6 leading-tight">
            Ready to eat better?
          </h2>
          <p className="text-white/70 text-lg mb-10 leading-relaxed max-w-xl mx-auto">
            Browse our full menu, book a catering package, or start your personalised meal plan today.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/menu">
              <Button size="lg" className="bg-white text-brown-900 hover:bg-orange-500 hover:text-white shadow-none rounded-none px-10 py-4 text-sm uppercase tracking-widest font-semibold transition-colors duration-300">
                View Menu
              </Button>
            </Link>
            <Link href="/contact">
              <Button size="lg" className="bg-transparent border border-white text-white hover:bg-white hover:text-brown-900 shadow-none rounded-none px-10 py-4 text-sm uppercase tracking-widest font-semibold transition-colors duration-300">
                Contact Us
              </Button>
            </Link>
          </div>
        </motion.div>
      </section>

    </div>
  );
}
