"use client";
import React, { useRef } from "react";
import { Button } from "@/components/ui/button";
import { motion, useScroll, useTransform, Variants } from "framer-motion";
import { Badge } from "@/components/ui/badge";
import { PointerHighlight } from "@/components/ui/pointer-highlight";
import { cn } from "@/lib/utils";
import { motionVariants, Direction } from '@/components/animations';


const fade = (direction: Direction, i?: number) => motionVariants.fadeDirection(direction, i);

const containerVariants: Variants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.2,
    },
  },
};

export function AboutSection() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "center center"],
  });

  const imageX = useTransform(scrollYProgress, [0, 1], ["-50px", "0px"]);
  const imageOpacity = useTransform(scrollYProgress, [0, 1], [0, 1]);

  return (
    <section
      id="about"
      className="min-h-screen relative flex flex-col md:flex-row py-20 items-center"
      ref={ref}
    >
      {/* Left Image */}
      <motion.div
        style={{ x: imageX, opacity: imageOpacity }}
        transition={{ type: "spring", stiffness: 60, damping: 20 }}
        className="shadow-lg w-full md:w-1/2 space-y-6 z-10"
      >
        <img
          src="https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/622b5849-6d13-4cbe-b25e-da227f012bdd.png"
          alt="Team"
          className="w-full h-full object-cover md:rounded-l-3xl"
        />
      </motion.div>

      {/* Right Content com animação de surgimento */}
      <motion.div
        className="relative w-full md:w-1/2 mt-10 md:mt-0"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.4 }}
      >
        <div
        className={cn(
          "overflow-hidden p-2",
          "[background-size:40px_40px]",
          "[background-image:linear-gradient(to_right,#e4e4e7_1px,transparent_1px),linear-gradient(to_bottom,#e4e4e7_1px,transparent_1px)]",
          "dark:[background-image:linear-gradient(to_right,#262626_1px,transparent_1px),linear-gradient(to_bottom,#262626_1px,transparent_1px)]",
        )}
        >
          <div className="ml-10">
             <Badge variant={"secondary"} className="mb-4 text-background">
              Sobre nós
            </Badge>

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
               A MINDWARE
              </motion.span>
            </PointerHighlight>

            <motion.p
              initial="hidden"
              whileInView="visible"
              viewport={{ once: false, amount: 0.5 }}
              variants={fade("down", 0.1)}
              className="text-muted-foreground mt-4"
            >
              É uma startup angolana que cria softwares sob medida e presta serviços de design estratégico. Unimos tecnologia e criatividade para construir experiências digitais que resolvem, encantam e duram.
            </motion.p>
            <motion.p
              initial="hidden"
              whileInView="visible"
              viewport={{ once: false, amount: 0.5 }}
              variants={fade("downRight", 0.2)}
              className="text-muted-foreground mt-4"
            >
              Do código ao conceito visual, pensamos em soluções que traduzem identidade em interface e ideias em impacto. Atuamos no cruzamento entre engenharia, branding e usabilidade, sempre com foco na simplicidade funcional e na estética que comunica.
            </motion.p>
            <motion.p
              initial="hidden"
              whileInView="visible"
              viewport={{ once: false, amount: 0.5 }}
              variants={fade("upLeft", 0.3)}
              className="text-muted-foreground mt-4"
            >
              Mais do que entregar produtos, entregamos valor com personalidade, design com propósito e tecnologia com raiz.
            </motion.p>
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: false, amount: 0.5 }}
              variants={fade("down", 8)}
              whileHover="hover"
              whileTap="tap"
              >
              <Button className="mt-4">Saiba Mais →</Button>
            </motion.div>
  
          </div>
        </div>
      </motion.div>
    </section>
  );
}
