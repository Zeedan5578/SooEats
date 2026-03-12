'use client';

import { useState, useEffect, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import Image from 'next/image';
import { FoodItem } from '@/lib/data/menu';

interface CarouselProps {
  items: FoodItem[];
  autoplayInterval?: number;
}

export function Carousel({ items, autoplayInterval = 3000 }: CarouselProps) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoplayPaused, setIsAutoplayPaused] = useState(false);
  const [touchStart, setTouchStart] = useState<number | null>(null);
  const [touchEnd, setTouchEnd] = useState<number | null>(null);

  // Minimum swipe distance (in px)
  const minSwipeDistance = 50;

  const goToNext = useCallback(() => {
    setCurrentIndex((prev) => (prev + 1) % items.length);
  }, [items.length]);

  const goToPrevious = useCallback(() => {
    setCurrentIndex((prev) => (prev - 1 + items.length) % items.length);
  }, [items.length]);

  const goToSlide = useCallback((index: number) => {
    setCurrentIndex(index);
    setIsAutoplayPaused(true);
  }, []);

  // Autoplay functionality
  useEffect(() => {
    if (isAutoplayPaused || items.length <= 1) return;

    const timer = setInterval(() => {
      goToNext();
    }, autoplayInterval);

    return () => clearInterval(timer);
  }, [currentIndex, isAutoplayPaused, items.length, autoplayInterval, goToNext]);

  // Touch event handlers for mobile swipe
  const onTouchStart = (e: React.TouchEvent) => {
    setTouchEnd(null);
    setTouchStart(e.targetTouches[0].clientX);
  };

  const onTouchMove = (e: React.TouchEvent) => {
    setTouchEnd(e.targetTouches[0].clientX);
  };

  const onTouchEnd = () => {
    if (!touchStart || !touchEnd) return;

    const distance = touchStart - touchEnd;
    const isLeftSwipe = distance > minSwipeDistance;
    const isRightSwipe = distance < -minSwipeDistance;

    if (isLeftSwipe) {
      goToNext();
      setIsAutoplayPaused(true);
    }
    if (isRightSwipe) {
      goToPrevious();
      setIsAutoplayPaused(true);
    }
  };

  // Handle manual navigation
  const handlePrevious = () => {
    goToPrevious();
    setIsAutoplayPaused(true);
  };

  const handleNext = () => {
    goToNext();
    setIsAutoplayPaused(true);
  };

  if (items.length === 0) {
    return (
      <div className="text-center py-12 text-cafe-brown-600">
        No items to display
      </div>
    );
  }

  const currentItem = items[currentIndex];

  return (
    <div
      className="relative w-full max-w-4xl mx-auto"
      onMouseEnter={() => setIsAutoplayPaused(true)}
      onMouseLeave={() => setIsAutoplayPaused(false)}
      onTouchStart={onTouchStart}
      onTouchMove={onTouchMove}
      onTouchEnd={onTouchEnd}
    >
      {/* Main carousel content */}
      <div className="relative aspect-[4/3] overflow-hidden rounded-[var(--radius-card)] [box-shadow:var(--shadow-soft)]">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentIndex}
            initial={{ opacity: 0, x: 100 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -100 }}
            transition={{ duration: 0.5, ease: 'easeInOut' }}
            className="absolute inset-0"
          >
            {/* Image */}
            <div className="relative w-full h-2/3">
              <Image
                src={currentItem.image}
                alt={currentItem.name}
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 80vw, 1024px"
                priority={currentIndex === 0}
              />
            </div>

            {/* Content */}
            <div className="absolute bottom-0 left-0 right-0 bg-white p-6 h-1/3">
              <div className="flex justify-between items-start mb-2">
                <h3 className="text-2xl font-semibold text-cafe-brown-800">
                  {currentItem.name}
                </h3>
                <span className="text-xl font-bold text-cafe-orange">
                  ${currentItem.price.toFixed(2)}
                </span>
              </div>
              <p className="text-cafe-brown-600 leading-relaxed">
                {currentItem.description}
              </p>
            </div>
          </motion.div>
        </AnimatePresence>

        {/* Navigation arrows */}
        <button
          onClick={handlePrevious}
          className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/90 hover:bg-white text-cafe-brown-800 rounded-full p-2 transition-all duration-200 [box-shadow:var(--shadow-soft)] hover:scale-110 focus:outline-none focus:ring-2 focus:ring-cafe-orange focus:ring-offset-2"
          aria-label="Previous item"
        >
          <ChevronLeft className="w-6 h-6" />
        </button>

        <button
          onClick={handleNext}
          className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/90 hover:bg-white text-cafe-brown-800 rounded-full p-2 transition-all duration-200 [box-shadow:var(--shadow-soft)] hover:scale-110 focus:outline-none focus:ring-2 focus:ring-cafe-orange focus:ring-offset-2"
          aria-label="Next item"
        >
          <ChevronRight className="w-6 h-6" />
        </button>
      </div>

      {/* Dots indicator */}
      <div className="flex justify-center gap-2 mt-4">
        {items.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`w-2 h-2 rounded-full transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-cafe-orange focus:ring-offset-2 ${
              index === currentIndex
                ? 'bg-cafe-orange w-8'
                : 'bg-cafe-brown-300 hover:bg-cafe-brown-400'
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
}
