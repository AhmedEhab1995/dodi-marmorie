'use client';

import { useState, useEffect } from 'react';

interface Counter {
  label: string;
  value: number;
}

export default function TimeCounters() {
  const [counters, setCounters] = useState<Counter[]>([
    { label: 'Months Together', value: 0 },
    { label: 'Months Engaged', value: 0 },
    { label: 'Happiness Level', value: 0 },
  ]);

  useEffect(() => {
    const targets = [10, 7, 100];
    const duration = 2000;
    const startTime = Date.now();

    const interval = setInterval(() => {
      const elapsed = Date.now() - startTime;
      const progress = Math.min(elapsed / duration, 1);

      setCounters(counters.map((counter, i) => ({
        ...counter,
        value: Math.floor(targets[i] * progress),
      })));

      if (progress === 1) clearInterval(interval);
    }, 16);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="py-20 px-4 md:px-8 bg-white">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {counters.map((counter, i) => (
            <div
              key={i}
              className="text-center animate-fade-in-up"
              style={{ animationDelay: `${i * 150}ms` }}
            >
              <div
                className="text-5xl md:text-6xl font-bold mb-4"
                style={{ color: 'var(--color-gold)', fontFamily: 'var(--font-heading)' }}
              >
                {counter.value}{counter.label === 'Happiness Level' ? '%' : ''}
              </div>
              <p className="text-lg" style={{ color: 'var(--color-text-light)' }}>
                {counter.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
