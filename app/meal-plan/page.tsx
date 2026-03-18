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

const plans = [
  {
    title: 'Balanced Essentials',
    desc: 'A well-rounded mix of proteins, carbs, and healthy fats for everyday wellness.',
    image: 'https://picsum.photos/seed/balanced-plan/600/800',
  },
  {
    title: 'High Protein',
    desc: 'Lean proteins and nutrient-dense sides designed for active lifestyles.',
    image: 'https://picsum.photos/seed/protein-plan/600/800',
  },
  {
    title: 'Plant-Based',
    desc: 'Vibrant, satisfying plant-forward meals packed with flavour.',
    image: 'https://picsum.photos/seed/plant-plan/600/800',
  },
  {
    title: 'Custom Plan',
    desc: 'Tell us your goals and dietary needs. We will build a plan just for you.',
    image: 'https://picsum.photos/seed/custom-plan/600/800',
  },
];

export default function MealPlanPage() {
  return (
    <main>
      {/* Hero */}
      <section className="relative h-[50vh] min-h-[400px] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="https://picsum.photos/seed/meal-plan-hero/1600/800"
            alt="Meal plans"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-brown-900/50" />
        </div>
        <div className="relative z-10 text-center text-white px-4">
          <p className="text-[11px] uppercase tracking-[0.35em] text-green-400 mb-4">
            Coming Soon
          </p>
          <h1 className="font-display font-bold text-4xl sm:text-5xl md:text-6xl">
            Meal Plans
          </h1>
          <p className="text-white/60 text-lg mt-4 max-w-lg mx-auto">
            Personalised weekly plans designed around your nutrition goals.
          </p>
        </div>
      </section>

      {/* Plans grid */}
      <section className="py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div {...fadeUp} className="text-center mb-20">
            <p className="text-[11px] uppercase tracking-[0.35em] text-orange-500 mb-4">
              What&apos;s coming
            </p>
            <h2 className="font-display font-bold text-3xl sm:text-4xl text-brown-900 mb-6">
              Plans for every lifestyle
            </h2>
            <div className="section-divider mx-auto" />
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {plans.map((plan, i) => (
              <motion.div
                key={plan.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: i * 0.1 }}
                className="group"
              >
                <div className="relative aspect-[3/4] w-full overflow-hidden mb-5">
                  <Image
                    src={plan.image}
                    alt={plan.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                  {/* Coming soon overlay */}
                  <div className="absolute inset-0 bg-brown-900/30 flex items-center justify-center">
                    <span className="px-4 py-2 bg-white/90 text-brown-900 text-xs uppercase tracking-widest font-semibold">
                      Coming Soon
                    </span>
                  </div>
                </div>
                <h3 className="font-display font-bold text-lg text-brown-900 mb-1">{plan.title}</h3>
                <p className="text-brown-400 text-sm leading-relaxed">{plan.desc}</p>
              </motion.div>
            ))}
          </div>

          <motion.div {...fadeUp} className="text-center mt-16">
            <p className="text-brown-400 text-sm">
              Be the first to know &mdash;{' '}
              <Link href="/contact" className="text-orange-500 hover:text-orange-600 font-medium transition-colors">
                join our waitlist
              </Link>
            </p>
          </motion.div>
        </div>
      </section>
    </main>
  );
}
