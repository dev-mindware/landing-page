"use client";

import { useEffect, useState } from "react";
import { Intro } from "@/components/intro";
import { FaqsSection, HeroSection, AboutSection, ServicesSection, TestimonialsSection } from "@/sections";



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
