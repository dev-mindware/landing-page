"use client";

import { useEffect, useState } from "react";
import { Intro } from "@/components/intro";
import {
  FaqsSection,
  HeroSection,
  AboutSection,
  ServicesSection,
  TestimonialsSection
} from "@/sections";

export default function Home() {
  const [hasIntroFinished, setHasIntroFinished] = useState(false);
  const [shouldShowIntro, setShouldShowIntro] = useState(false);

  useEffect(() => {
    // Garante execução apenas no client
    if (typeof window === "undefined") return;

    const seenData = localStorage.getItem("hasSeenIntro");

    if (seenData) {
      try {
        const parsed = JSON.parse(seenData);
        const lastSeen = parsed?.timestamp || 0;
        const now = Date.now();
        const weekInMs = 7 * 24 * 60 * 60 * 1000;

        if (now - lastSeen < weekInMs) {
          setHasIntroFinished(true);
          setShouldShowIntro(false);
          return;
        }
      } catch (err) {
        // Se deu erro ao fazer parse, ignora e mostra intro
        console.error("Erro ao interpretar hasSeenIntro:", err);
      }
    }

    setShouldShowIntro(true);
  }, []);

  return (
    <div className="bg-background">
      {shouldShowIntro && !hasIntroFinished && (
        <Intro onComplete={() => setHasIntroFinished(true)} />
      )}
      {(!shouldShowIntro || hasIntroFinished) && (
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
