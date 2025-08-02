"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { CometCard } from "./ui/comet-card";

gsap.registerPlugin(ScrollTrigger);

const cardData = [
  {
    id: "15.000,00 Kz",
    title: "Criação de Logomarca",
    img: "https://images.unsplash.com/photo-1505506874110-6a7a69069a08?q=80&w=1287&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: "25.000,00 Kz",
    title: "Consultoria de Identidade Visual",
    img: "https://images.unsplash.com/photo-1518770660439-4636190af475?q=80&w=1287",
  },
  {
    id: "35.000,00 Kz",
    title: "Edição de Vídeo Corporativo",
    img: "https://images.unsplash.com/photo-1612837017391-5ac591d1e812?q=80&w=1287",
  },
];

export function ServicesCards() {
  const cardsRef = useRef<HTMLDivElement[]>([]);

  useEffect(() => {
    cardsRef.current.forEach((card, index) => {
      const fromVars =
        index === 0
          ? { opacity: 0, x: -100 }
          : index === 1
          ? { opacity: 0, y: 100 }
          : { opacity: 0, x: 100 };

      gsap.fromTo(
        card,
        fromVars,
        {
          opacity: 1,
          x: 0,
          y: 0,
          duration: 1,
          ease: "power2.out",
          scrollTrigger: {
            trigger: card,
            start: "top 85%",
            toggleActions: "play none none reset",
            once: false,
          },
        }
      );
    });
  }, []);

  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
      {cardData.map((card, idx) => (
        <CometCard key={card.id}>
          <div
            ref={(el) => {
              if (el) cardsRef.current[idx] = el;
            }}
            className="my-6 flex w-full max-w-sm mx-auto cursor-pointer flex-col items-stretch rounded-[16px] border-0 bg-accent p-3 md:p-4 saturate-0"
            style={{ transformStyle: "preserve-3d", transform: "none", opacity: 0 }}
          >
            <div className="flex-1">
              <div className="relative aspect-[3/4] w-full">
                <img
                  loading="lazy"
                  className="absolute inset-0 h-full w-full rounded-[16px] bg-[#000000] object-cover contrast-75"
                  alt={card.title}
                  src={card.img}
                  style={{
                    boxShadow: "rgba(0, 0, 0, 0.05) 0px 5px 6px 0px",
                  }}
                />
              </div>
            </div>
            <div className="mt-3 flex flex-shrink-0 items-center justify-between px-3 pb-3 font-mono text-white">
              <div className="text-xs">{card.title}</div>
              <div className="text-xs text-gray-300 opacity-50">#{card.id}</div>
            </div>
          </div>
        </CometCard>
      ))}
    </div>
  );
}
