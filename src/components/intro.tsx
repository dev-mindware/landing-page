'use client'

import { useEffect, useRef, useState } from 'react'
import { gsap } from 'gsap'
import { motion, AnimatePresence } from 'framer-motion'

export function MindwareIntro() {
  const containerRef = useRef<HTMLDivElement>(null)
  const letterRefs = useRef<HTMLDivElement[]>([])
  const overlayRef = useRef<HTMLDivElement>(null)
  const backgroundRef = useRef<HTMLDivElement>(null)
  const [visible, setVisible] = useState(true)

  useEffect(() => {
    letterRefs.current = letterRefs.current.slice(0, 8)
    const tl = gsap.timeline({ defaults: { ease: 'power4.out' } })

    letterRefs.current.forEach((ref, i) => {
      tl.fromTo(
        ref,
        { opacity: 0, y: 50 },
        { opacity: 1, y: 0, duration: 0.5 },
        i * 0.15
      )
    })

    tl.to(letterRefs.current, {
      color: '#8B5CF6',
      duration: 0.7,
      stagger: 0.1,
      ease: 'power2.out',
    })

    tl.to(
      letterRefs.current,
      {
        scale: 1.2,
        duration: 0.3,
        yoyo: true,
        repeat: 3,
        ease: 'power1.inOut',
      },
      '+=0.2'
    )

    const mid = Math.floor(letterRefs.current.length / 2)
    const left = letterRefs.current.slice(0, mid)
    const right = letterRefs.current.slice(mid)

    tl.to(
      left,
      {
        x: '-100%',
        opacity: 0,
        duration: 0.8,
        ease: 'power2.in',
      },
      '+=0.3'
    )

    tl.to(
      right,
      {
        x: '100%',
        opacity: 0,
        duration: 0.8,
        ease: 'power2.in',
      },
      '<'
    )

    tl.fromTo(
      overlayRef.current,
      { opacity: 0 },
      {
        opacity: 1,
        duration: 0.6,
        ease: 'power1.out',
      },
      '-=0.5'
    )

    tl.to(
      backgroundRef.current,
      {
        opacity: 0,
        duration: 0.6,
        ease: 'power1.inOut',
      },
      '-=0.5'
    )

    tl.to(containerRef.current, {
      opacity: 0,
      duration: 0.6,
      delay: 0.1,
      onComplete: () => setVisible(false),
    })
  }, [])

  if (!visible) return null

  const letters = 'MINDWARE'.split('')

  return (
    <AnimatePresence>
      <motion.div
        ref={containerRef}
        className="fixed inset-0 z-50 flex items-center justify-center overflow-hidden"
        initial={{ opacity: 1 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
      >
        <div
          ref={backgroundRef}
          className="absolute inset-0 bg-black/80 backdrop-blur-md z-0"
        ></div>

        <div className="flex z-10 text-white text-6xl font-bold tracking-wider">
          {letters.map((char, index) => (
            <div
              key={index}
              ref={(el) => {
                if (el) letterRefs.current[index] = el
              }}
              className="inline-block"
            >
              {char}
            </div>
          ))}
        </div>

        <div
          ref={overlayRef}
          className="absolute inset-0 z-20 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-black via-violet-800 to-transparent opacity-0 pointer-events-none"
        ></div>
      </motion.div>
    </AnimatePresence>
  )
}
