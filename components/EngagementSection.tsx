'use client';

export default function EngagementSection() {
  return (
    <section className="py-20 px-4 md:px-8 bg-white">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="animate-fade-in-up">
            <img
              src="/assets/images/engagement.jpg"
              alt="Our Engagement"
              className="w-full rounded-lg shadow-xl"
            />
          </div>

          <div className="animate-fade-in-up" style={{ animationDelay: '200ms' }}>
            <h2 className="text-4xl md:text-5xl mb-6" style={{ fontFamily: 'var(--font-heading)', color: 'var(--color-text-dark)' }}>
              Our Engagement
            </h2>
            <div className="section-divider mb-6" />
            <p className="text-lg mb-6 leading-relaxed" style={{ color: 'var(--color-text-light)' }}>
29th of August marks a very important date in my life. It’s the day I got engaged to a very special person, so close to my heart and mind. Today I celebrate love with you—love now and always ❤️            </p>
            <p className="text-lg leading-relaxed" style={{ color: 'var(--color-text-light)' }}>
        I will always keep falling in love with your eyes ❤️❤️        
          </p>
          </div>
        </div>
      </div>
    </section>
  );
}
