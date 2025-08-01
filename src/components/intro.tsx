"use client";
import React, { useState, useEffect } from "react";
import { gsap, CSSPlugin, Expo } from "gsap";

gsap.registerPlugin(CSSPlugin);

interface IntroProps {
  onComplete?: () => void;
}

export function Intro({ onComplete }: IntroProps) {
  const [counter, setCounter] = useState<number>(0);
  const [isComplete, setIsComplete] = useState<boolean>(false);

  const reveal = React.useCallback(() => {
    const t1 = gsap.timeline({
      onComplete: () => {
        // Marcar como visto no localStorage
        localStorage.setItem('hasSeenIntro', 'true');
        
        // Aguardar um pouco antes de remover o componente
        setTimeout(() => {
          setIsComplete(true);
          onComplete?.();
        }, 500);
      },
    });

    t1.to(".follow", {
      width: "100%",
      ease: Expo.easeInOut,
      duration: 1.2,
      delay: 0.7,
    })
      .to(".hide", { opacity: 0, duration: 0.3 })
      .to(".hide", { display: "none", duration: 0.3 })
      .to(".follow", {
        height: "100%",
        ease: Expo.easeInOut,
        duration: 0.7,
        delay: 0.5,
      })
      // Fazer o texto MINDWARE aparecer após o fundo laranja cobrir a tela
      .set(".mindware-letter", { opacity: 0, y: 20 })

      .to(".mindware-letter", {
      opacity: 1,
      y: 0,
      ease: Expo.easeOut,
      duration: 0.8,
      stagger: 0.15,
    }, "-=0.2")

      .to(".follow", {
        y: "-100%",
        ease: Expo.easeInOut,
        duration: 1,
        delay: 2,
      })
      .to(".intro-container", {
        opacity: 0,
        duration: 0.3,
        ease: Expo.easeInOut,
      });
  }, [onComplete]);

  useEffect(() => {
    // // Verificar se o intro já foi mostrado
    // const hasSeenIntro = localStorage.getItem('hasSeenIntro');
    
    // if (hasSeenIntro) {
    //   setIsComplete(true);
    //   onComplete?.();
    //   return;
    // }

    const count = setInterval(() => {
      setCounter((prevCounter) => {
        if (prevCounter < 100) {
          return prevCounter + 1;
        } else {
          clearInterval(count);
          setCounter(100);
          reveal();
          return 100;
        }
      });
    }, 25);

    return () => clearInterval(count);
  }, [onComplete, reveal]);

  // Se já foi mostrado, não renderizar nada
  if (isComplete) {
    return null;
  }

  return (
    <div className="intro-container fixed inset-0 w-screen h-screen z-[9999]">
      <div className="h-full w-full bg-background flex justify-center items-center absolute top-0">
        <div 
          className="follow absolute bg-secondary h-0.5 w-0 left-0 z-20 flex items-center justify-center"
          style={{ backgroundColor: '##d39644' }}
        >
          <span className="mindware-text flex gap-1 text-primary animate-pulse text-6xl font-bold">
          {"MINDWARE".split("").map((char, idx) => (
            <span key={idx} className="mindware-letter opacity-0">
              {char}
            </span>
          ))}
        </span>
        </div>
        <div
          className="hide absolute left-0 bg-foreground h-0.5 w-0 transition-all duration-400 ease-out"
          id="progress-bar"
          style={{ width: `${counter}%` }}
        />
        <p 
          id="count" 
          className="hide absolute md:text-3xl text-foreground font-medium m-0"
          style={{ transform: 'translateY(-15px)' }}
        >
          {counter}%
        </p>
      </div>
    </div>
  );
}