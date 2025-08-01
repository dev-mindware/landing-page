"use client";

import { useState } from "react";
import { HeroSection } from "@/sections/hero";
import { Intro } from "@/components/intro";

export default function Home() {
  const [hasIntroFinished, setHasIntroFinished] = useState(false);

  return (
    <div className="bg-background">
      {!hasIntroFinished && <Intro onComplete={() => setHasIntroFinished(true)} />}
      {hasIntroFinished && <HeroSection />}
    </div>
  );
}
