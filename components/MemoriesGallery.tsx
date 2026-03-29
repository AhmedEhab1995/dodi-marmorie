'use client';

import { useState } from 'react';

export default function MemoriesGallery() {
  const [hoveredId, setHoveredId] = useState<number | null>(null);

  const gallery = [
    { id: 1, imagePath: '/assets/images/gallery/photo-1.jpeg', caption: 'Studying together' },
    { id: 2, imagePath: '/assets/images/gallery/photo-2.jpeg', caption: 'Your Beautiful Soul' },
    { id: 3, imagePath: '/assets/images/gallery/photo-3.jpeg', caption: 'Cinema day' },
    { id: 4, imagePath: '/assets/images/gallery/photo-4.jpeg', caption: 'First wedding party together' },
    { id: 5, imagePath: '/assets/images/gallery/photo-5.jpeg', caption: 'Nile trip' },
    { id: 6, imagePath: '/assets/images/gallery/photo-6.jpeg', caption: 'First concert' },
  ];

  return (
    <section className="py-20 px-4 md:px-8" style={{ backgroundColor: 'var(--color-beige)' }}>
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl mb-4" style={{ fontFamily: 'var(--font-heading)', color: 'var(--color-text-dark)' }}>
            Our Memories
          </h2>
          <div className="section-divider mx-auto" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {gallery.map((photo) => (
            <div
              key={photo.id}
              onMouseEnter={() => setHoveredId(photo.id)}
              onMouseLeave={() => setHoveredId(null)}
              className="relative overflow-hidden rounded-lg cursor-pointer group"
              style={{ height: '300px' }}
            >
              <img
                src={photo.imagePath}
                alt={photo.caption}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent" />
              {hoveredId === photo.id && (
                <div className="absolute inset-0 flex items-end justify-center pb-6 animate-fade-in-up">
                  <p className="text-white text-lg font-semibold">{photo.caption}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
