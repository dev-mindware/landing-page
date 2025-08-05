"use client";
import React, { useState, useEffect } from "react";
import { gsap, CSSPlugin, Expo } from "gsap";
import Logo from "@/assets/midware_logo_oficial.png";
import Image from "next/image";
gsap.registerPlugin(CSSPlugin);

interface IntroProps {
  onComplete?: () => void;
}

const ONE_WEEK = 7 * 24 * 60 * 60 * 1000; // 7 dias em ms
const LOCAL_KEY = "hasSeenIntro";
const SESSION_KEY = "introSessionShown";

export function Intro({ onComplete }: IntroProps) {
  const [counter, setCounter] = useState<number>(0);
  const [isComplete, setIsComplete] = useState<boolean>(false);

  const reveal = React.useCallback(() => {
    const t1 = gsap.timeline({
      onComplete: () => {
        // Salvar timestamp no localStorage e marcar sessão atual
        localStorage.setItem(LOCAL_KEY, Date.now().toString());
        sessionStorage.setItem(SESSION_KEY, "true");

        setTimeout(() => {
          setIsComplete(true);
          onComplete?.();
        }, 200);
      },
    });

    t1.to(".follow", {
      width: "100%",
      ease: Expo.easeInOut,
      duration: 0.6,
      delay: 0.2,
    })
      .to(".hide", { opacity: 0, duration: 0.2 })
      .to(".hide", { display: "none", duration: 0.1 })
      .to(".follow", {
        height: "100%",
        ease: Expo.easeInOut,
        duration: 0.5,
      })
      .set(".mindware-letter", { opacity: 0, y: 20 })
      .set(".mindware-logo", { opacity: 0, y: 20 })
      .to(
        ".mindware-letter",
        {
          opacity: 1,
          y: 0,
          ease: Expo.easeOut,
          duration: 0.4,
          stagger: 0.05,
        },
        "-=0.2"
      )
      .to(
        ".mindware-logo",
        {
          opacity: 1,
          y: 0,
          ease: Expo.easeOut,
          duration: 0.5,
        },
        "+=0.2"
      )
      .to(".follow", {
        y: "-100%",
        ease: Expo.easeInOut,
        duration: 0.7,
        delay: 1.0,
      })
      .to(".intro-container", {
        opacity: 0,
        duration: 0.3,
        ease: Expo.easeInOut,
      });
  }, [onComplete]);

  useEffect(() => {
    const sessionSeen = sessionStorage.getItem(SESSION_KEY);
    const storedTime = localStorage.getItem(LOCAL_KEY);
    const now = Date.now();

    const timeDiffOk =
      !storedTime || now - parseInt(storedTime) > ONE_WEEK;

    if (!timeDiffOk || sessionSeen === "true") {
      setIsComplete(true);
      onComplete?.();
      return;
    }

    const totalDuration = 1400;
    const step = 100 / (totalDuration / 20);

    const count = setInterval(() => {
      setCounter((prev) => {
        if (prev < 100) {
          return Math.min(prev + step, 100);
        } else {
          clearInterval(count);
          setCounter(100);
          reveal();
          return 100;
        }
      });
    }, 20);

    return () => clearInterval(count);
  }, [onComplete, reveal]);

  if (isComplete) return null;

  return (
    <div className="intro-container fixed inset-0 w-screen h-screen z-[9999]">
      <div className="h-full w-full bg-background flex justify-center items-center absolute top-0">
        <div
          className="follow absolute bg-secondary h-0.5 w-0 left-0 z-20 flex flex-col items-center justify-center gap-4"
          style={{ backgroundColor: "#d39644" }}
        >
          <Image
            src={Logo}
            alt="Mindware"
            className="mindware-logo opacity-0"
            width={150}
            height={150}
          />
          <span className="mindware-text flex gap-1 text-primary text-6xl font-bold">
            {"MINDWARE".split("").map((char, idx) => (
              <span key={idx} className="mindware-letter opacity-0">
                {char}
              </span>
            ))}
          </span>
        </div>

        <div
          className="hide absolute left-0 bg-foreground h-0.5 transition-all duration-400 ease-out"
          id="progress-bar"
          style={{ width: `${counter}%` }}
        />
        <p
          id="count"
          className="hide absolute md:text-3xl text-foreground font-medium m-0"
          style={{ transform: "translateY(-15px)" }}
        >
          {Math.floor(counter)}%
        </p>
      </div>
    </div>
  );
}
