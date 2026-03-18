'use client';

import { motion } from 'framer-motion';

export function ComingSoonCard() {
  return (
    <motion.div
      className="bg-white rounded-[var(--radius-card)] overflow-hidden [box-shadow:var(--shadow-soft)] cursor-pointer border border-brown-100"
      whileHover={{ y: -6, boxShadow: 'var(--shadow-strong)' }}
      transition={{ duration: 0.3, ease: 'easeOut' }}
    >
      <div className="aspect-square flex flex-col items-center justify-center p-10 relative overflow-hidden">
        {/* Background decoration */}
        <div className="absolute inset-0 gradient-warm opacity-60" />
        <div className="absolute top-4 right-4 w-16 h-16 rounded-full bg-orange-100 opacity-50" />
        <div className="absolute bottom-4 left-4 w-10 h-10 rounded-full bg-green-100 opacity-50" />

        {/* Icon */}
        <div className="relative w-20 h-20 rounded-full gradient-orange flex items-center justify-center mb-5 shadow-lg">
          <span className="text-4xl text-white font-bold">?</span>
        </div>

        {/* Text */}
        <h3 className="relative font-display font-bold text-2xl text-brown-900 mb-2">
          Coming Soon
        </h3>
        <p className="relative text-brown-400 text-sm text-center">
          Something delicious is on its way
        </p>
      </div>
    </motion.div>
  );
}
