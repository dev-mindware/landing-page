"use client";
import React from "react";
import { ContainerScroll } from "./ui/container-scroll-animation";
import { Button } from "./ui";
import { PointerHighlight } from "./ui/pointer-highlight";
import { motion } from "framer-motion";
import Image from "next/image";
import Soft1 from "@/assets/screenshot2.png"

export function SoftwareShowcase() {
  return (
    <div>
      <ContainerScroll
        titleComponent={
          <>
            <div className="text-4xl flex flex-col items-center font-semibold text-foreground">
              <h1>
                Software de <span className="text-secondary">Gestão</span> e <span className="text-primary">Faturação</span>
            </h1><br />
              <PointerHighlight>
              <motion.span 
                className="text-primary text-4xl sm:text-5xl font-bold tracking-tight"
                animate={{
                  textShadow: [
                    "0px 0px 0px rgba(59, 130, 246, 0)",
                    "0px 0px 20px rgba(59, 130, 246, 0.5)",
                    "0px 0px 0px rgba(59, 130, 246, 0)"
                  ]
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  repeatType: "reverse"
                }}
              >
               MINDGEST
              </motion.span>
            </PointerHighlight>
            <p className="text-muted-foreground font-light text-base">Mindgest é um software de gestão e faturação certificado pela AGT, criado para simplificar processos comerciais, controlar inventário, emitir faturas legais e garantir conformidade fiscal com agilidade e precisão. Ideal para empresas que valorizam clareza, eficiência e transparência nas operações.</p>
            </div>
          </>
        }
      >
        <Image
          src={Soft1.src}
          alt="hero"
          height={720}
          width={1400}
          className="mx-auto rounded-2xl object-cover h-full object-left-top"
          draggable={false}
        />
      </ContainerScroll>
    </div>
  );
}
