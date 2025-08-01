"use client"
import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';
import { motion } from 'framer-motion';
import { motionVariants, Direction } from '@/components/animations';
import { Button, Avatar, AvatarImage, AvatarFallback } from '@/components';
import 'swiper/css';
import Image from 'next/image';
import { PointerHighlight } from "@/components/ui/pointer-highlight";
import { AuroraBackground } from "@/components/ui/aurora-background";
import { SplitText } from '@/components/ui/split-txt';

const imagesLeft = [
  "https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/53971fdf-6a1f-4cb0-a29c-c5445d47d64f.png",
  "https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/9f44c6ae-7489-481c-81dc-48084f08ba0d.png",
  "https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/5283d2b6-db86-4f90-96c6-a385c99f0d36.png",
  "https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/53971fdf-6a1f-4cb0-a29c-c5445d47d64f.png",
  "https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/9f44c6ae-7489-481c-81dc-48084f08ba0d.png",
  "https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/5283d2b6-db86-4f90-96c6-a385c99f0d36.png",
];
const fade = (direction: Direction, i?: number) => motionVariants.fadeDirection(direction, i);


const imagesRight = [
  "https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/95ebb7b1-ff96-4d27-9626-88a3f8a27693.png",
  "https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/7057568c-21af-4929-9e61-f87016595ef4.png",
  "https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/95ebb7b1-ff96-4d27-9626-88a3f8a27693.png",
  "https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/7057568c-21af-4929-9e61-f87016595ef4.png",
];

function ImageColumn({ images, from }: { images: string[]; from: "top" | "bottom" }) {
  return (
    <motion.div 
      className="relative flex flex-col gap-6 max-w-xs"
      variants={fade("left")}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: false, amount: 0.5 }}
    >
      <div className="pointer-events-none absolute top-0 left-0 w-full h-14 bg-gradient-to-b from-background via-background/80 to-transparent z-10" />
      <div className="pointer-events-none absolute bottom-0 left-0 w-full h-14 bg-gradient-to-t from-background via-background/80 to-transparent z-10" />

      <Swiper
        direction="vertical"
        slidesPerView={3}
        spaceBetween={24}
        loop={true}
        allowTouchMove={false}
        speed={5000}
        autoplay={{
          delay: 0,
          disableOnInteraction: false,
          reverseDirection: from === "bottom",
        }}
        modules={[Autoplay]}
        className="h-[624px] overflow-hidden"
      >
        {images.map((src, idx) => (
          <SwiperSlide key={idx}>
            <motion.div 
              className="rounded-xl w-full h-48 overflow-hidden shadow-xl"
              variants={motionVariants.fadeDirection("up", 0)}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: false, amount: 0.3 }}
            >
              <Image
                src={src}
                alt={`Imagem de exemplo ${idx + 1}`}
                width={400}
                height={300}
                className="object-cover"
                loading="lazy"
              />
            </motion.div>
          </SwiperSlide>
        ))}
      </Swiper>
    </motion.div>
  );
}

export function HeroSection() {
  return (
    <AuroraBackground className="relative w-full" >
      <div className="max-w-7xl mx-auto px-6 sm:px-10 py-20 flex flex-col-reverse lg:flex-row items-center gap-12 lg:gap-24 overflow-hidden" id='hero'>
        <div 
          className="flex flex-col justify-center flex-1 max-w-xl z-10 text-center lg:text-left"
          
        >
          <motion.h1 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false, amount: 0.5 }}
            className="text-4xl font-extrabold leading-tight text-foreground"
            variants={motionVariants.fadeDirection("up", 0)}
          >
          <SplitText
            textOne='Transforme as Suas Ideias em '
            textTwo='Visuais Deslumbrantes com a'
            by='chars'
            className="text-3xl font-bold"
            duration={0.05}
          />
            <PointerHighlight>
              <motion.span 
                className="text-primary"
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
                MINDWARE
              </motion.span>
            </PointerHighlight>
          </motion.h1>

          <motion.p 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false, amount: 0.5 }}
            className="mt-6 text-base text-muted-foreground font-light max-w-md mx-auto lg:mx-0"
            variants={fade("left")}
          >
            Criamos soluções digitais sob medida com excelência em design e engenharia de software.
          </motion.p>

          <div 
            className="mt-10 flex flex-col sm:flex-row gap-4 justify-center lg:justify-start"
          >
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: false, amount: 0.5 }}
              variants={fade("down", 8)}
              whileHover="hover"
              whileTap="tap"
            >
              <Button variant="default">Começar</Button>
            </motion.div>
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: false, amount: 0.5 }}
              variants={fade("up", 10)}
              whileHover="hover"
              whileTap="tap"
            >
              <Button variant="outline">Portfólio</Button>
            </motion.div>
          </div>

          <motion.div 
            className="mt-12 flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4"
            variants={fade("up")}
          >
            <div className="flex -space-x-3">
              {["U1", "U2", "U3", "U4"].map((u, i) => (
                <motion.div
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: false, amount: 0.5 }}
                  key={i}
                  variants={fade("right")}
                  custom={i}
                  whileHover="hover"
                >
                  <Avatar>
                    <AvatarImage
                      src={`https://i.pravatar.cc/40?u=user${i}`}
                      alt={`Utilizador ${i}`}
                      onError={(e) => {
                        (e.target as HTMLImageElement).style.display = 'none';
                      }}
                    />
                    <AvatarFallback>{u}</AvatarFallback>
                  </Avatar>
                </motion.div>
              ))}
            </div>
            <motion.p 
              className="text-sm text-muted-foreground font-light"
              variants={fade("left")}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: false, amount: 0.5 }}
            >
              Junte-se a <span className="font-semibold text-secondary">+ de 100 Utilizadores</span> e comece a facilitar o seu negócio.
            </motion.p>
          </motion.div>
        </div>

        <div 
          className="flex flex-1 gap-4 p-2 justify-center lg:justify-end z-0 rounded-md bg-[radial-gradient(circle_at_center,transparent_0%,transparent_30%,theme(colors.background)_50%,theme(colors.background)_100%)]"
        >
          <motion.div 
            className="hidden sm:block"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false, amount: 0.5 }}
            variants={fade("right", 6)}
          >
            <ImageColumn images={imagesLeft} from="top" />
          </motion.div>
          <motion.div 
          variants={fade("left", 4)}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.5 }}
          className="hidden md:block">
            <ImageColumn images={imagesRight} from="bottom" />
          </motion.div>
        </div>
      </div>
    </AuroraBackground>
  );
}
