"use client";

import { useEffect, useState } from "react";
import { HeroSection } from "@/sections/hero";
import { Intro } from "@/components/intro";
import { AboutSection } from "@/sections/about";
import { ServicesSection } from "@/sections/services";
import { TestimonialsSection } from "@/sections/testimonials";
import { FaqsSection } from "@/sections/faqs";



export default function Home() {
  const [hasIntroFinished, setHasIntroFinished] = useState(false);
  const [shouldShowIntro, setShouldShowIntro] = useState<boolean | null>(null); 
  useEffect(() => {
    const seen = localStorage.getItem("hasSeenIntro") === "true";
    setShouldShowIntro(!seen);
    if (seen) {
      setHasIntroFinished(true);
    }
  }, []);

  if (shouldShowIntro === null) return null;

  return (
    <div className="bg-background">
      {shouldShowIntro && !hasIntroFinished && (
        <Intro onComplete={() => setHasIntroFinished(true)} />
      )}
      {hasIntroFinished && (
        <>
          
          <HeroSection />
          <AboutSection />
          <ServicesSection />
          <TestimonialsSection />
          <FaqsSection />
        </>
      )}
    </div>
  );
}
