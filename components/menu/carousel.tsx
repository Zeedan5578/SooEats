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

export function Carousel({ items, autoplayInterval = 4000 }: CarouselProps) {
  const [currentIndex, setCurrentIndex]       = useState(0);
  const [isAutoplayPaused, setIsAutoplayPaused] = useState(false);
  const [touchStart, setTouchStart]           = useState<number | null>(null);
  const [touchEnd, setTouchEnd]               = useState<number | null>(null);
  const [direction, setDirection]             = useState(1); // 1 = forward, -1 = back

  const minSwipeDistance = 50;

  const goToNext = useCallback(() => {
    setDirection(1);
    setCurrentIndex((p) => (p + 1) % items.length);
  }, [items.length]);

  const goToPrevious = useCallback(() => {
    setDirection(-1);
    setCurrentIndex((p) => (p - 1 + items.length) % items.length);
  }, [items.length]);

  const goToSlide = useCallback((index: number) => {
    setDirection(index > currentIndex ? 1 : -1);
    setCurrentIndex(index);
    setIsAutoplayPaused(true);
  }, [currentIndex]);

  useEffect(() => {
    if (isAutoplayPaused || items.length <= 1) return;
    const timer = setInterval(goToNext, autoplayInterval);
    return () => clearInterval(timer);
  }, [currentIndex, isAutoplayPaused, items.length, autoplayInterval, goToNext]);

  const onTouchStart = (e: React.TouchEvent) => {
    setTouchEnd(null);
    setTouchStart(e.targetTouches[0].clientX);
  };
  const onTouchMove  = (e: React.TouchEvent) => setTouchEnd(e.targetTouches[0].clientX);
  const onTouchEnd   = () => {
    if (!touchStart || !touchEnd) return;
    const dist = touchStart - touchEnd;
    if (dist > minSwipeDistance)  { goToNext();     setIsAutoplayPaused(true); }
    if (dist < -minSwipeDistance) { goToPrevious(); setIsAutoplayPaused(true); }
  };

  const handlePrev = () => { goToPrevious(); setIsAutoplayPaused(true); };
  const handleNext = () => { goToNext();     setIsAutoplayPaused(true); };

  if (items.length === 0) {
    return <div className="text-center py-12 text-brown-500">No items to display</div>;
  }

  const item = items[currentIndex];

  const variants = {
    enter:  (d: number) => ({ opacity: 0, x: d > 0 ? 80 : -80 }),
    center: { opacity: 1, x: 0 },
    exit:   (d: number) => ({ opacity: 0, x: d > 0 ? -80 : 80 }),
  };

  return (
    <div
      className="relative w-full"
      onMouseEnter={() => setIsAutoplayPaused(true)}
      onMouseLeave={() => setIsAutoplayPaused(false)}
      onTouchStart={onTouchStart}
      onTouchMove={onTouchMove}
      onTouchEnd={onTouchEnd}
    >
      {/* Main card */}
      <div className="relative overflow-hidden rounded-3xl shadow-[var(--shadow-strong)] bg-white">
        <AnimatePresence mode="wait" custom={direction}>
          <motion.div
            key={currentIndex}
            custom={direction}
            variants={variants}
            initial="enter"
            animate="center"
            exit="exit"
            transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
            className="grid grid-cols-1 lg:grid-cols-2"
          >
            {/* Image side */}
            <div className="relative h-72 lg:h-[520px]">
              <Image
                src={item.image}
                alt={item.name}
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
                priority={currentIndex === 0}
              />
              {/* Category badge */}
              {item.category && (
                <span className="absolute top-5 left-5 px-3 py-1 rounded-full bg-white/90 backdrop-blur-sm text-xs font-semibold text-brown-700 capitalize shadow-sm">
                  {item.category}
                </span>
              )}
            </div>

            {/* Content side */}
            <div className="flex flex-col justify-center p-8 lg:p-12">
              <span className="text-orange-500 text-sm font-semibold uppercase tracking-widest mb-3">
                Featured Item
              </span>
              <h2 className="font-display font-bold text-3xl lg:text-4xl text-brown-900 mb-4 leading-tight">
                {item.name}
              </h2>
              <p className="text-brown-500 leading-relaxed mb-6 text-base">
                {item.description}
              </p>

              {/* Macros mini-row */}
              <div className="flex gap-4 mb-8">
                {[
                  { label: 'Cal', value: `${item.macros.calories}` },
                  { label: 'Protein', value: `${item.macros.protein}g` },
                  { label: 'Carbs', value: `${item.macros.carbs}g` },
                  { label: 'Fats', value: `${item.macros.fats}g` },
                ].map((m) => (
                  <div key={m.label} className="text-center">
                    <p className="font-bold text-brown-900 text-sm">{m.value}</p>
                    <p className="text-brown-400 text-xs">{m.label}</p>
                  </div>
                ))}
              </div>

              {/* Price */}
              <div className="flex items-center justify-between">
                <span className="font-display font-bold text-3xl text-orange-500">
                  ${item.price.toFixed(2)}
                </span>
                <span className="px-4 py-2 rounded-full gradient-orange text-white text-sm font-semibold shadow-md">
                  Order Now
                </span>
              </div>
            </div>
          </motion.div>
        </AnimatePresence>

        {/* Nav arrows */}
        <button
          onClick={handlePrev}
          className="absolute left-4 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-white/90 backdrop-blur-sm shadow-md flex items-center justify-center text-brown-800 hover:bg-white hover:scale-110 transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-orange-500 z-10"
          aria-label="Previous item"
        >
          <ChevronLeft className="w-5 h-5" />
        </button>
        <button
          onClick={handleNext}
          className="absolute right-4 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-white/90 backdrop-blur-sm shadow-md flex items-center justify-center text-brown-800 hover:bg-white hover:scale-110 transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-orange-500 z-10"
          aria-label="Next item"
        >
          <ChevronRight className="w-5 h-5" />
        </button>
      </div>

      {/* Dots */}
      <div className="flex justify-center gap-2 mt-6">
        {items.map((_, i) => (
          <button
            key={i}
            onClick={() => goToSlide(i)}
            className={`h-2 rounded-full transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:ring-offset-2 ${
              i === currentIndex
                ? 'w-8 gradient-orange'
                : 'w-2 bg-brown-200 hover:bg-brown-300'
            }`}
            aria-label={`Go to slide ${i + 1}`}
          />
        ))}
      </div>
    </div>
  );
}
