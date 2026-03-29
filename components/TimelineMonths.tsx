'use client';

import { useState } from 'react';
import Image from 'next/image';

export default function TimelineMonths() {
  const [hoveredMonth, setHoveredMonth] = useState<number | null>(null);

  const months = [
    { month: 1, monthName: 'June', caption: 'Our Beginning, sushi date', imagePath: '/assets/images/timeline/month-1.jpeg' },
    { month: 2, monthName: 'July', caption: 'Getting Closer, Confessing love', imagePath: '/assets/images/timeline/month-2.jpeg' },
    { month: 3, monthName: 'August', caption: 'Falling Deeper, Getting Engaged', imagePath: '/assets/images/timeline/month-3.jpeg' },
    { month: 4, monthName: 'September', caption: 'Those curls ❤️', imagePath: '/assets/images/timeline/month-4.jpeg' },
    { month: 5, monthName: 'October', caption: 'No tasamom date 😂', imagePath: '/assets/images/timeline/month-5.jpeg' },
    { month: 6, monthName: 'Novemeber', caption: 'Six Months Celebration', imagePath: '/assets/images/timeline/month-6.jpeg' },
    { month: 8, monthName: 'December', caption: 'Back from Kuwait', imagePath: '/assets/images/timeline/month-8.jpeg' },
    { month: 9, monthName: 'January', caption: 'Valentine\'s day', imagePath: '/assets/images/timeline/month-9.jpeg' },
    { month: 10, monthName: 'February', caption: 'Planning Forever', imagePath: '/assets/images/timeline/month-10.jpeg' },
  ];

  return (
    <section className="py-20 px-4 md:px-8" style={{ backgroundColor: 'var(--color-pink)' }}>
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl mb-4" style={{ fontFamily: 'var(--font-heading)', color: 'var(--color-text-dark)' }}>
            Our 10 Month Journey
          </h2>
          <div className="section-divider mx-auto" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {months.map((m) => (
            <div
              key={m.month}
              onMouseEnter={() => setHoveredMonth(m.month)}
              onMouseLeave={() => setHoveredMonth(null)}
              className="relative overflow-hidden rounded-lg cursor-pointer group"
              style={{ height: '300px' }}
            >
              <img
                src={m.imagePath}
                alt={m.caption}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-black/40 group-hover:bg-black/60 transition-colors duration-300" />
              <div className="absolute inset-0 flex flex-col items-center justify-center text-white text-center">
                <h3 className="text-3xl font-bold mb-2" style={{ fontFamily: 'var(--font-heading)' }}>
                  Month {m.month}
                </h3>
                <p className="text-lg">{m.monthName}</p>
                {hoveredMonth === m.month && (
                  <p className="text-sm mt-4 animate-fade-in-up">{m.caption}</p>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
