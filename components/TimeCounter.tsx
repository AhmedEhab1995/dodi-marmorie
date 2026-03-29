'use client';

import { useState, useEffect } from 'react';

interface TimeUnit {
  label: string;
  value: number;
}

function getTimeLeft() {
  const wedding = new Date('2027-01-08T00:00:00');
  const now = new Date();
  const diff = wedding.getTime() - now.getTime();

  if (diff <= 0) return null;

  const totalSeconds = Math.floor(diff / 1000);
  const totalMinutes = Math.floor(totalSeconds / 60);
  const totalHours = Math.floor(totalMinutes / 60);
  const totalDays = Math.floor(totalHours / 24);
  const totalMonths = Math.floor(totalDays / 30.4375);

  const months = totalMonths;
  const days = totalDays % 30;
  const hours = totalHours % 24;
  const minutes = totalMinutes % 60;
  const seconds = totalSeconds % 60;

  return { months, days, hours, minutes, seconds };
}

export default function TimeCounters() {
  const [timeLeft, setTimeLeft] = useState<ReturnType<typeof getTimeLeft>>(null);

  useEffect(() => {
    setTimeLeft(getTimeLeft());
    const interval = setInterval(() => {
      setTimeLeft(getTimeLeft());
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  const units: TimeUnit[] = timeLeft
    ? [
        { label: 'Months', value: timeLeft.months },
        { label: 'Days', value: timeLeft.days },
        { label: 'Hours', value: timeLeft.hours },
        { label: 'Minutes', value: timeLeft.minutes },
        { label: 'Seconds', value: timeLeft.seconds },
      ]
    : [];

  return (
    <section className="py-20 px-4 md:px-8 bg-white">
      <div className="max-w-6xl mx-auto text-center">

        <h2
          className="text-4xl md:text-5xl mb-4"
          style={{ fontFamily: 'var(--font-heading)', color: 'var(--color-text-dark)' }}
        >
          Until We Say "I Do"
        </h2>
        <div className="section-divider mx-auto mb-12" />

        {timeLeft === null ? (
          <p className="text-2xl" style={{ color: 'var(--color-gold)', fontFamily: 'var(--font-heading)' }}>
            Today is our wedding day! 💍
          </p>
        ) : (
          <div className="grid grid-cols-2 md:grid-cols-5 gap-8">
            {units.map((unit, i) => (
              <div
                key={unit.label}
                className="flex flex-col items-center animate-fade-in-up"
                style={{ animationDelay: `${i * 100}ms` }}
              >
                <div
                  className="text-5xl md:text-6xl font-bold mb-2 tabular-nums"
                  style={{ color: 'var(--color-gold)', fontFamily: 'var(--font-heading)' }}
                >
                  {String(unit.value).padStart(2, '0')}
                </div>
                <p className="text-lg uppercase tracking-widest" style={{ color: 'var(--color-text-light)' }}>
                  {unit.label}
                </p>
              </div>
            ))}
          </div>
        )}

     

      </div>
    </section>
  );
}