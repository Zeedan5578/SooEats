'use client';

import { motion } from 'framer-motion';
import { ReactNode } from 'react';
import { clsx } from 'clsx';

interface CardProps {
  children: ReactNode;
  className?: string;
  hover?: boolean;
}

export function Card({ children, className = '', hover = false }: CardProps) {
  const base = clsx(
    'bg-white rounded-[var(--radius-card)] overflow-hidden',
    '[box-shadow:var(--shadow-soft)]',
    className
  );

  if (hover) {
    return (
      <motion.div
        className={base}
        whileHover={{ y: -4, boxShadow: 'var(--shadow-strong)' }}
        transition={{ duration: 0.25, ease: 'easeOut' }}
      >
        {children}
      </motion.div>
    );
  }

  return <div className={base}>{children}</div>;
}
