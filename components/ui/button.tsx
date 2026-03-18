import React from 'react';
import { clsx } from 'clsx';

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'ghost' | 'green';
  size?: 'sm' | 'md' | 'lg';
  children: React.ReactNode;
}

export function Button({
  variant = 'primary',
  size = 'md',
  className,
  children,
  ...props
}: ButtonProps) {
  return (
    <button
      className={clsx(
        // Base
        'inline-flex items-center justify-center font-semibold rounded-full',
        'transition-all duration-200 cursor-pointer',
        'focus:outline-none focus:ring-2 focus:ring-orange-500 focus:ring-offset-2',
        'disabled:opacity-50 disabled:cursor-not-allowed disabled:pointer-events-none',

        // Variants
        variant === 'primary' && [
          'gradient-orange text-white shadow-md',
          'hover:shadow-lg hover:scale-[1.03] active:scale-[0.98]',
        ],
        variant === 'secondary' && [
          'bg-white text-brown-800 border-2 border-brown-200',
          'hover:border-orange-400 hover:text-orange-600 hover:bg-orange-50',
          'active:scale-[0.98]',
        ],
        variant === 'ghost' && [
          'bg-transparent text-brown-700',
          'hover:bg-brown-100 hover:text-brown-900',
          'active:scale-[0.98]',
        ],
        variant === 'green' && [
          'gradient-green text-white shadow-md',
          'hover:shadow-lg hover:scale-[1.03] active:scale-[0.98]',
        ],

        // Sizes
        size === 'sm' && 'px-4 py-1.5 text-sm',
        size === 'md' && 'px-6 py-2.5 text-base',
        size === 'lg' && 'px-8 py-3.5 text-lg',

        className
      )}
      {...props}
    >
      {children}
    </button>
  );
}
