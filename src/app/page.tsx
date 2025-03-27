"use client";

import { About } from "@/components/About";
import { BackgroundEffects } from "@/components/BackgroundEffects";
import { FAQ } from "@/components/FAQ";
import { Features } from "@/components/Features";
import { Footer } from "@/components/Footer";
import { Hero } from "@/components/Hero";
import { Navigation } from "@/components/Navigation";
import { Survey } from "@/components/Survey";
import { Team } from "@/components/Team";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-b from-gray-900 via-blue-900 to-gray-900 text-white">
      <BackgroundEffects />
      <Navigation />
      <Hero />
      <Features />
      <About />
      <Team />
      <FAQ />
      <Survey />
      <Footer />
    </div>
  );
}
