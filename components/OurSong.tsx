'use client';

import { useState, useRef } from 'react';

export default function OurSong() {
  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = useRef<HTMLAudioElement>(null);

  const togglePlay = () => {
    if (audioRef.current) {
      if (isPlaying) {
        audioRef.current.pause();
      } else {
        audioRef.current.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  return (
    <section className="py-20 px-4 md:px-8 bg-white">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-4xl md:text-5xl mb-4" style={{ fontFamily: 'var(--font-heading)', color: 'var(--color-text-dark)' }}>
          Our Song
        </h2>
        <div className="section-divider mx-auto mb-12" />

        <div
          className="rounded-lg p-12 flex flex-col items-center justify-center animate-fade-in-up"
          style={{ backgroundColor: 'var(--color-pink)' }}
        >
          <p className="text-lg mb-8" style={{ color: 'var(--color-text-light)' }}>
            The music that plays in our love story
          </p>

          <button
            onClick={togglePlay}
            className="w-16 h-16 rounded-full flex items-center justify-center transition-transform hover:scale-110 mb-6"
            style={{ backgroundColor: 'var(--color-gold)' }}
            aria-label={isPlaying ? 'Pause' : 'Play'}
          >
            {isPlaying ? (
              <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                <path d="M6 4h4v16H6V4zm8 0h4v16h-4V4z" />
              </svg>
            ) : (
              <svg className="w-6 h-6 text-white ml-1" fill="currentColor" viewBox="0 0 24 24">
                <path d="M8 5v14l11-7z" />
              </svg>
            )}
          </button>

          <audio
            ref={audioRef}
            onEnded={() => setIsPlaying(false)}
            className="hidden"
          >
            <source src="/assets/song.mp3" type="audio/mpeg" />
          </audio>

          <p className="text-sm" style={{ color: 'var(--color-text-light)' }}>
            {isPlaying ? 'Now playing...' : 'Click to play'}
          </p>
        </div>

        <p className="text-lg mt-12" style={{ color: 'var(--color-text-light)' }}>
          Every moment with you is like a song I never want to end.
        </p>
      </div>
    </section>
  );
}
