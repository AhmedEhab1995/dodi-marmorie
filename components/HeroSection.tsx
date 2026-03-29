'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';

export default function HeroSection() {
  const [scrollIndicatorVisible, setScrollIndicatorVisible] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setScrollIndicatorVisible(false);
    }, 3000);
    return () => clearTimeout(timer);
  }, []);

  const scrollToNext = () => {
    window.scrollBy({
      top: window.innerHeight,
      behavior: 'smooth',
    });
  };

  return (
  <section 
    className="relative h-screen w-full left-0 flex items-center justify-center overflow-hidden"
    style={{ backgroundImage: 'url(/assets/images/hero.jpeg)', backgroundSize: 'cover', backgroundPosition: 'center' }}
  >
      <div className="absolute inset-0 bg-black/30" />
      
      <div className="relative z-10 text-center text-white px-4">
        <h1 className="text-6xl md:text-7xl font-bold mb-6 animate-fade-in-up" style={{ fontFamily: 'var(--font-heading)' }}>
          Maramiro & Dodiii
        </h1>
        <p className="text-2xl md:text-3xl mb-4 animate-fade-in-up" style={{ animationDelay: '200ms', fontFamily: 'var(--font-heading)' }}>
          Our Love Story
        </p>
        <p className="text-lg md:text-xl text-gray-200 animate-fade-in-up" style={{ animationDelay: '400ms' }}>
          Ten months of joy, love, and unforgettable memories
        </p>
      </div>

      {scrollIndicatorVisible && (
        <button
          onClick={scrollToNext}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce z-20"
          aria-label="Scroll to next section"
        >
          <svg className="w-8 h-8 text-white" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
            <path d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </button>
      )}
    </section>
  );
}
