'use client';

import { motion } from 'framer-motion';
import { ReactNode } from 'react';

interface CardProps {
  children: ReactNode;
  className?: string;
  hover?: boolean; // Enable hover animation
}

export function Card({ children, className = '', hover = false }: CardProps) {
  const baseStyles = 'bg-white rounded-[var(--radius-card)] overflow-hidden';
  const shadowStyles = '[box-shadow:var(--shadow-soft)]';
  const combinedStyles = `${baseStyles} ${shadowStyles} ${className}`;

  if (hover) {
    return (
      <motion.div
        className={combinedStyles}
        initial={{ opacity: 1, scale: 1 }}
        whileHover={{ scale: 1.02 }}
        transition={{ duration: 0.2, ease: 'easeInOut' }}
      >
        {children}
      </motion.div>
    );
  }

  return <div className={combinedStyles}>{children}</div>;
}
