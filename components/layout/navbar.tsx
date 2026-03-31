'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, ShoppingBag } from 'lucide-react';
import { clsx } from 'clsx';
import { useCart } from '@/lib/cart-context';

export interface NavLink {
  label: string;
  href: string;
}

export interface NavbarProps {
  links?: NavLink[];
}

const defaultLinks: NavLink[] = [
  { label: 'Menu',      href: '/menu' },
  { label: 'Meal Plan', href: '/meal-plan' },
  { label: 'Nutrition', href: '/nutrition' },
  { label: 'About',     href: '/about' },
  { label: 'Contact',   href: '/contact' },
];

export function Navbar({ links = defaultLinks }: NavbarProps) {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { totalItems, setIsCartOpen } = useCart();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const toggleMobileMenu = () => setIsMobileMenuOpen((v) => !v);
  const closeMobileMenu  = () => setIsMobileMenuOpen(false);

  const leftLinks = links.slice(0, Math.ceil(links.length / 2));
  const rightLinks = links.slice(Math.ceil(links.length / 2));

  return (
    <nav
      className={clsx(
        'sticky top-0 z-50 transition-all duration-500',
        scrolled
          ? 'bg-white/95 backdrop-blur-md shadow-[0_1px_0_rgba(0,0,0,0.06)]'
          : 'bg-white'
      )}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">

          {/* Desktop left links */}
          <div className="hidden lg:flex items-center gap-8 flex-1">
            {leftLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-[13px] uppercase tracking-widest text-brown-500 hover:text-orange-600 transition-colors duration-300"
              >
                {link.label}
              </Link>
            ))}
          </div>

          {/* Centered brand with logo */}
          <Link
            href="/"
            className="flex items-center gap-3 group focus:outline-none focus:ring-2 focus:ring-orange-500 focus:ring-offset-2 rounded-lg px-3 py-1"
            aria-label="SOOEATS Home"
          >
            <div className="relative w-10 h-10 rounded-full overflow-hidden shrink-0 ring-2 ring-brown-100 group-hover:ring-orange-300 transition-all duration-300">
              <Image
                src="/logo.jpeg"
                alt="SOOEATS"
                fill
                className="object-cover"
              />
            </div>
            <div className="flex flex-col">
              <span className="font-display font-bold text-2xl tracking-tight leading-none">
                <span className="text-brown-900">SOO</span><span className="text-orange-500">EATS</span>
              </span>
              <span className="text-[9px] uppercase tracking-[0.3em] text-brown-400 mt-0.5 hidden sm:block">
                Healthy Has Never Tasted This Good
              </span>
            </div>
          </Link>

          {/* Desktop right links + cart */}
          <div className="hidden lg:flex items-center gap-8 flex-1 justify-end">
            {rightLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-[13px] uppercase tracking-widest text-brown-500 hover:text-orange-600 transition-colors duration-300"
              >
                {link.label}
              </Link>
            ))}
            <button
              onClick={() => setIsCartOpen(true)}
              className="relative ml-2 p-2 text-brown-700 hover:text-orange-600 transition-colors"
              aria-label="Open cart"
            >
              <ShoppingBag className="w-5 h-5" />
              {totalItems > 0 && (
                <span className="absolute -top-1 -right-1 w-5 h-5 bg-orange-500 text-white text-[10px] font-bold rounded-full flex items-center justify-center">
                  {totalItems}
                </span>
              )}
            </button>
            <Link
              href="/menu"
              className="ml-2 px-6 py-2.5 text-[13px] uppercase tracking-widest text-white bg-brown-900 hover:bg-orange-600 transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:ring-offset-2"
            >
              Order Now
            </Link>
          </div>

          {/* Mobile: cart + toggle */}
          <div className="flex lg:hidden items-center gap-2">
            <button
              onClick={() => setIsCartOpen(true)}
              className="relative p-2 text-brown-700 hover:text-orange-600 transition-colors"
              aria-label="Open cart"
            >
              <ShoppingBag className="w-5 h-5" />
              {totalItems > 0 && (
                <span className="absolute -top-1 -right-1 w-5 h-5 bg-orange-500 text-white text-[10px] font-bold rounded-full flex items-center justify-center">
                  {totalItems}
                </span>
              )}
            </button>
            <button
              onClick={toggleMobileMenu}
              className="p-2 text-brown-700 hover:text-orange-600 transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:ring-offset-2 rounded"
              aria-label={isMobileMenuOpen ? 'Close menu' : 'Open menu'}
              aria-expanded={isMobileMenuOpen}
            >
              {isMobileMenuOpen
                ? <X className="h-6 w-6" aria-hidden="true" />
                : <Menu className="h-6 w-6" aria-hidden="true" />
              }
            </button>
          </div>
        </div>
      </div>

      {/* Mobile drawer */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3, ease: 'easeInOut' }}
            className="lg:hidden bg-white border-t border-brown-100"
          >
            <div className="px-6 py-8 space-y-1">
              {links.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={closeMobileMenu}
                  className="block px-4 py-3 text-sm uppercase tracking-widest text-brown-600 hover:text-orange-600 transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-orange-500"
                >
                  {link.label}
                </Link>
              ))}
              <Link
                href="/menu"
                onClick={closeMobileMenu}
                className="block mt-6 px-4 py-3 text-center bg-brown-900 text-white text-sm uppercase tracking-widest hover:bg-orange-600 transition-colors"
              >
                Order Now
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
