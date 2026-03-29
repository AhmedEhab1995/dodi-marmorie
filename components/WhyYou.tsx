'use client';

export default function WhyYou() {
  const reasons = [
    'Your smile makes my world brighter',
    'Your laugh is my favorite sound',
    'The way you care about me inspires me',
    'You make me want to be a better person',
    'With you, I feel completely at home',
    'Your creativity amazes me every day',
    'You\'re my best friend and my love',
    'The way you love me is everything',
    'You understand me like no one else',
    'Forever with you is not enough',
  ];

  return (
    <section className="py-20 px-4 md:px-8" style={{ backgroundColor: 'var(--color-pink)' }}>
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl mb-4" style={{ fontFamily: 'var(--font-heading)', color: 'var(--color-text-dark)' }}>
            Why You
          </h2>
          <div className="section-divider mx-auto" />
          <p className="text-lg mt-6" style={{ color: 'var(--color-text-light)' }}>
            A thousand reasons why I love you, here are just a few
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {reasons.map((reason, i) => (
            <div
              key={i}
              className="flex items-start gap-4 animate-fade-in-up"
              style={{ animationDelay: `${i * 100}ms` }}
            >
              <span
                className="text-2xl font-bold flex-shrink-0"
                style={{ color: 'var(--color-gold)', fontFamily: 'var(--font-heading)' }}
              >
                {String(i + 1).padStart(2, '0')}
              </span>
              <p className="text-lg" style={{ color: 'var(--color-text-dark)' }}>
                {reason}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
