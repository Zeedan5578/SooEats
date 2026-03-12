'use client';

import { motion } from 'framer-motion';

export function ComingSoonCard() {
  return (
    <motion.div
      className="bg-white rounded-card shadow-soft overflow-hidden cursor-pointer"
      whileHover={{ scale: 1.05, boxShadow: '0 10px 30px -5px rgba(0, 0, 0, 0.15)' }}
      transition={{ duration: 0.3 }}
    >
      <div className="aspect-square flex flex-col items-center justify-center p-8">
        {/* Question Mark Icon */}
        <div className="w-24 h-24 rounded-full bg-cafe-brown-100 flex items-center justify-center mb-4">
          <span className="text-5xl text-cafe-brown-600">?</span>
        </div>

        {/* Coming Soon Text */}
        <h3 className="text-2xl font-semibold text-cafe-brown-800">
          Coming Soon
        </h3>
      </div>
    </motion.div>
  );
}
