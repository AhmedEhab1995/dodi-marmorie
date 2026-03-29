'use client';

export default function HerThroughMyEyes() {
  const paragraphs = [
    'She lights up every room with her radiant smile and infectious laugh that makes my heart skip a beat.',
    "Her kindness runs deeper than the ocean. She cares about people with a genuine warmth that's rare and beautiful.",
    'She\'s ambitious and driven, pursuing her dreams with determination and grace that inspires me daily.',
    'Her creativity knows no bounds. The way she sees beauty in everything makes the world more colorful.',
    "She's my safe place, my comfort, my home. With her, I'm completely myself, flaws and all.",
  ];

  return (
    <section className="py-20 px-4 md:px-8 bg-white">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl mb-4" style={{ fontFamily: 'var(--font-heading)', color: 'var(--color-text-dark)' }}>
            Her Through My Eyes
          </h2>
          <div className="section-divider mx-auto" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {paragraphs.map((para, i) => (
            <p
              key={i}
              className="text-lg leading-relaxed animate-fade-in-up"
              style={{
                color: 'var(--color-text-dark)',
                animationDelay: `${i * 100}ms`,
              }}
            >
              {para}
            </p>
          ))}
        </div>
      </div>
    </section>
  );
}
