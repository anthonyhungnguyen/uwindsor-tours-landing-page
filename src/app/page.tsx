'use client';

import { BackgroundEffects } from '@/components/BackgroundEffects';
import { Navigation } from '@/components/Navigation';
import { Hero } from '@/components/Hero';
import { Team } from '@/components/Team';
import { Footer } from '@/components/Footer';

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-b from-gray-900 via-blue-900 to-gray-900 text-white">
      <BackgroundEffects />
      <Navigation />
      <Hero />
      <Team />
      <Footer />
    </div>
  );
}
