"use client";

import { useEffect, useState } from "react";
import { HeroSection } from "@/sections/hero";
import { Intro } from "@/components/intro";
import { AboutSection } from "@/sections/about";
import { Navigation } from "@/components";
import { ServicesSection } from "@/sections/services";


const navigationItems = [
    { name: "Início", link: "/#hero" },
    { name: "Sobre", link: "/#about" },
    { name: "Serviços", link: "/#services" },
    { name: "Softwares", link: "/#softwares" },
    { name: "FAQs", link: "/#faqs" },
  ];
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
          <Navigation
              items={navigationItems}
              showCTA={true}
              ctaText="Login"
              ctaHref="/"
              ctaVariant="gradient"
              />
          <HeroSection />
          <AboutSection />
          <ServicesSection />
        </>
      )}
    </div>
  );
}
