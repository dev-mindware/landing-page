"use client";

import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import SplitType from "split-type";
import clsx from "clsx";

gsap.registerPlugin(ScrollTrigger);

interface SplitTextProps {
  textOne: string;
  textTwo?: string;
  className?: string;
  by?: "chars" | "words";
  delay?: number;
  duration?: number;
}

export const SplitText: React.FC<SplitTextProps> = ({
  textOne,
  textTwo,
  className,
  by = "chars",
  delay = 0,
  duration = 0.05,
}) => {
  const textRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!textRef.current) return;

    const split = new SplitType(textRef.current, {
      types: [by],
    });

    const targets = by === "chars" ? split.chars : split.words;

    const ctx = gsap.context(() => {
      gsap.set(targets, { opacity: 0, y: 10 });

      gsap.to(targets, {
        opacity: 1,
        y: 0,
        ease: "power2.out",
        duration: 0.4,
        stagger: duration,
        delay,
        scrollTrigger: {
          trigger: textRef.current,
          start: "top 90%",
          toggleActions: "play reset play reset",
        },
      });
    }, textRef);

    return () => ctx.revert();
  }, [by, delay, duration]);

  return (
    <div
      ref={textRef}
      className={clsx("inline-block whitespace-pre-wrap", className)}
      data-splittype
    >
      <span>{textOne}</span>
      {textTwo && (
        <>
          <br />
          <span>{textTwo}</span>
        </>
      )}
    </div>
  );
};
