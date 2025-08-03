import React from "react";
import { cn } from "@/lib/utils";
import { BackgroundLines, Badge, buttonVariants } from "@/components";
import Image from "next/image";
import { motion } from "framer-motion";
import { motionVariants, Direction } from "@/components/animations";
import { leaders } from "./data";

const fade = (direction: Direction, i?: number) => motionVariants.fadeDirection(direction, i);

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
            const verticalOffsets = [12, 24, 6, 26, 0, 30, 16, 12, 24, 16, 8];
            const translateY = verticalOffsets[index] || baseOffset;
            const scale = index === 4 || index === 5 ? 1 : 0.9;
            const shadowIntensity = index === 4 || index === 5 ? "shadow-lg" : "shadow-md";
            const visibilityClass = index < 3 ? "block" : "hidden sm:block";

            return (
              <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.5, delay: index * 0.3 }}
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
                <Image
                  src={leader.imageUrl}
                  alt={leader.altText}
                  loading="lazy"
                  decoding="async"
                  className="h-full w-full object-cover object-center"
                  fill
                  onError={e => {
                    e.currentTarget.src =
                      "https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/4d637101-8897-4074-b8b4-db0d506d65c9.png";
                  }}
                />
              </motion.div>
            );
          })}
        </div>

        <Badge variant={"secondary"} className="mt-4 md:mt-0">
          Testemunhas
        </Badge>
        <motion.h2
          variants={fade("downLeft")}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.5 }}
          className="text-4xl sm:text-5xl font-extrabold leading-tight tracking-tight text-foreground"
        >
          Confiados por Líderes{" "}
          <span className="block text-primary font-light mt-1">de várias companhias</span>
        </motion.h2>
        <motion.p
          variants={fade("upRight")}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.5 }}
          className="mt-4 text-lg text-muted-foreground font-light max-w-xl mx-auto"
        >
          Saiba porquê profissionais confiam em nossas soluções para completar suas jornadas.
        </motion.p>

        <motion.div
          variants={fade("up")}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.5 }}
          className="mt-8"
        >
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
        </motion.div>
      </div>
    </section>
  );
}
