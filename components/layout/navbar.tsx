'use client';

import { useState } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';
import { clsx } from 'clsx';

export interface NavLink {
  label: string;
  href: string;
}

export interface NavbarProps {
  links?: NavLink[];
}

const defaultLinks: NavLink[] = [
  { label: 'Home', href: '/' },
  { label: 'Menu', href: '/menu' },
  { label: 'Catering', href: '/catering' },
  { label: 'Meal Plan', href: '/meal-plan' },
  { label: 'SooEats', href: '/soo-eats' },
  { label: 'Nutrition', href: '/nutrition' },
  { label: 'About', href: '/about' },
  { label: 'Contact', href: '/contact' },
];

export function Navbar({ links = defaultLinks }: NavbarProps) {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

  return (
    <nav className="sticky top-0 z-50 bg-cafe-cream border-b border-cafe-brown-200 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link
            href="/"
            className="flex items-center space-x-2 text-cafe-brown-800 font-bold text-xl focus:outline-none focus:ring-2 focus:ring-cafe-orange focus:ring-offset-2 rounded-md px-2 py-1"
            aria-label="Cafe4Good Home"
          >
            <span className="text-2xl">☕</span>
            <span>Cafe4Good</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-1">
            {links.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={clsx(
                  'px-3 py-2 rounded-md text-sm font-medium transition-colors duration-200',
                  'text-cafe-brown-700 hover:text-cafe-brown-900 hover:bg-cafe-brown-100',
                  'focus:outline-none focus:ring-2 focus:ring-cafe-orange focus:ring-offset-2'
                )}
              >
                {link.label}
              </Link>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={toggleMobileMenu}
            className="md:hidden inline-flex items-center justify-center p-2 rounded-md text-cafe-brown-700 hover:text-cafe-brown-900 hover:bg-cafe-brown-100 focus:outline-none focus:ring-2 focus:ring-cafe-orange focus:ring-offset-2 transition-colors duration-200"
            aria-label={isMobileMenuOpen ? 'Close menu' : 'Open menu'}
            aria-expanded={isMobileMenuOpen}
          >
            {isMobileMenuOpen ? (
              <X className="h-6 w-6" aria-hidden="true" />
            ) : (
              <Menu className="h-6 w-6" aria-hidden="true" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.2, ease: 'easeInOut' }}
            className="md:hidden bg-cafe-cream border-t border-cafe-brown-200"
          >
            <div className="px-2 pt-2 pb-3 space-y-1">
              {links.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={closeMobileMenu}
                  className={clsx(
                    'block px-3 py-2 rounded-md text-base font-medium transition-colors duration-200',
                    'text-cafe-brown-700 hover:text-cafe-brown-900 hover:bg-cafe-brown-100',
                    'focus:outline-none focus:ring-2 focus:ring-cafe-orange focus:ring-offset-2'
                  )}
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
