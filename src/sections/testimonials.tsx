import React from "react";
import { buttonVariants } from "@/components/ui/button"; // Assuming shadcn button import
import { cn } from "@/lib/utils"; // Utility for classNames (optional)
import { Badge } from "@/components/ui/badge";
import { BackgroundLines } from "@/components/ui/background-lines";

interface Leader {
  id: number;
  name: string;
  title?: string;
  imageUrl: string;
  altText: string;
}

const leaders: Leader[] = [
  {
    id: 1,
    name: "Leader 1",
    imageUrl: "https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/f357a17b-b4d7-40f8-a83a-6449707bf54e.png",
    altText:
      "Portrait of a serious man with black-rimmed glasses wearing a dark jacket in a modern office setting",
  },
  {
    id: 2,
    name: "Leader 2",
    imageUrl: "https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/9c16826c-7b08-417f-8fbd-f3fb4cf6a2fc.png",
    altText:
      "Smiling man wearing a dark shirt standing in a softly lit indoor space with warm tones",
  },
  {
    id: 3,
    name: "Leader 3",
    imageUrl: "https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/864fb502-9097-4f7e-8d37-536db8a3c63b.png",
    altText:
      "Professional man in glasses with a cityscape background visible through large windows",
  },
  {
    id: 4,
    name: "Leader 4",
    imageUrl: "https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/28bab1f0-6d77-41f7-9f39-a9b25f44a633.png",
    altText:
      "Confident young man with crossed arms wearing a casual blue shirt in a workspace",
  },
  {
    id: 5,
    name: "Leader 5",
    imageUrl: "https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/f082c52c-8669-4d4f-b133-74053794b3ed.png",
    altText:
      "Businessman in a suit smiling, standing indoors with blurred detailed background",
  },
  {
    id: 6,
    name: "Leader 6",
    imageUrl: "https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/aa3a0178-3030-4533-9c70-68ea1f1d9b22.png",
    altText:
      "Smiling woman working on a laptop with low depth of field and warm lights in background",
  },
  {
    id: 7,
    name: "Leader 7",
    imageUrl: "https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/893392e2-2c75-4583-959e-214a4582ee4e.png",
    altText:
      "Blonde businesswoman sitting at desk with large windows and office equipment in background",
  },
  {
    id: 8,
    name: "Leader 8",
    imageUrl: "https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/2c8bd2cf-7863-4605-aeee-d747f7cfa35e.png",
    altText: "Man with slight stubble smiling, in casual grey t-shirt in bright office",
  },
];

export function TestimonialsSection() {
  return (
    <section
      aria-label="Testimonials"
      className="relative py-20 min-h-screen"
      id="testimonials"
    > 
    <BackgroundLines />
      <div className="relative mx-auto pt-40 sm:pt-52 text-center">
        <div className="pointer-events-none select-none absolute inset-x-0 top-0 flex justify-center gap-x-6 md:gap-x-10 -translate-y-16 sm:-translate-y-24">
        {leaders.map((leader, index) => {
          const baseOffset = 0;
          const verticalOffsets = [
            12, 24, 6, 26, 0, 30, 16, 12, 24, 16, 8,
          ];
          const translateY = verticalOffsets[index] || baseOffset;
          const scale = index === 4 || index === 5 ? 1 : 0.9;
          const shadowIntensity = index === 4 || index === 5 ? "shadow-lg" : "shadow-md";
          const visibilityClass = index < 3 ? "block" : "hidden sm:block";

          return (
            <div
              key={leader.id}
              style={{ transform: `translateY(${translateY}px) scale(${scale})` }}
              className={cn(
                "rounded-xl border border-gray-200 overflow-hidden bg-white shadow transition-transform duration-300 hover:scale-105 hover:shadow-xl w-full h-50",
                "aspect-[6/7] relative",
                shadowIntensity,
                visibilityClass
              )}
              aria-hidden="true"
            >
              <img
                src={leader.imageUrl}
                alt={leader.altText}
                loading="lazy"
                decoding="async"
                className="h-full w-full object-cover object-center"
                onError={e => {
                  e.currentTarget.src = "https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/4d637101-8897-4074-b8b4-db0d506d65c9.png";
                }}
              />
            </div>
          );
        })}
      </div>
        <Badge variant={"secondary"} className="mt-4 md:mt-0">
          Testemunhas
        </Badge>
        <h2 className="text-4xl sm:text-5xl font-extrabold leading-tight tracking-tight text-foreground">
          Confiados por Líderes{" "}
          <span className="block text-primary font-light mt-1">de várias companhias</span>
        </h2>
        <p className="mt-4 text-lg text-muted-foreground font-light max-w-xl mx-auto">
          Saiba porquê profissionais confiam em nossas soluções para completar suas jornadas.
        </p>

        <div className="mt-8">
          <button
            type="button"
            className={buttonVariants({
              variant: "default",
              className: "px-6 py-3 text-sm font-semibold rounded-full",
            })}
            aria-label="Read Success Stories"
          >
            Ler Histórias de Sucesso &rarr;
          </button>
        </div>
      </div>
    </section>
  );
};

