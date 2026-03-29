'use client';

import HeroSection from '@/components/HeroSection';
import HerThroughMyEyes from '@/components/HerThroughMyEyes';
import TimelineMonths from '@/components/TimelineMonths';
import EngagementSection from '@/components/EngagementSection';
import MemoriesGallery from '@/components/MemoriesGallery';
import TimeCounters from '@/components/TimeCounters';
import TimeCounter from '@/components/TimeCounter';
import WhyYou from '@/components/WhyYou';
import OurSong from '@/components/OurSong';

export default function Home() {
  return (
    <main className="app-main">
      <HeroSection />
            <TimeCounter />

      {/* <HerThroughMyEyes /> */}
      <TimelineMonths />
      <EngagementSection />
      <MemoriesGallery />
      <TimeCounters />
      <WhyYou />
      <OurSong />
    </main>
  );
}
