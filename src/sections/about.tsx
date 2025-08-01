"use client";
import React, { useRef } from "react";
import { Button } from "@/components/ui/button";
import { motion, useScroll, useTransform, Variants } from "framer-motion";

// Variants para surgimento dos textos
const containerVariants: Variants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.2,
    },
  },
};

const textVariants: Variants = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { type: "spring", damping: 18, stiffness: 80 },
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
          className="w-full h-full object-cover rounded-l-3xl"
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
        <div className="overflow-hidden shadow-xl bg-white rounded-r-3xl p-2">
          <div className="ml-10">
            <motion.span
              variants={textVariants}
              className="inline-flex items-center rounded-md bg-gradient-to-r from-orange-400 via-orange-500 to-orange-600 px-3 py-1 text-sm font-medium text-white shadow-sm"
            >
              About Company 🤗
            </motion.span>

            <motion.h2
              variants={textVariants}
              className="text-3xl sm:text-4xl font-extrabold text-gray-900 mt-4"
            >
              We believe in doing the right thing
            </motion.h2>

            <motion.p
              variants={textVariants}
              className="text-gray-600 text-base sm:text-lg mt-2"
            >
              Foster a supportive and inclusive environment where our team can thrive. We believe in doing the right thing, always.
            </motion.p>

            <motion.div
              variants={textVariants}
              className="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-4"
            >
              <div className="bg-white rounded-xl p-5 shadow-sm">
                <p className="text-2xl mb-2">👍</p>
                <h4 className="font-semibold text-lg text-gray-800">Growth</h4>
                <p className="text-sm text-gray-600">
                  Our mission’s to drive grow & improve progress.
                </p>
              </div>
              <div className="bg-white rounded-xl p-5 shadow-sm">
                <p className="text-2xl mb-2">🟢</p>
                <h4 className="font-semibold text-lg text-gray-800">Revenue</h4>
                <p className="text-sm text-gray-600">
                  Our mission’s to drive grow & improve progress.
                </p>
              </div>
            </motion.div>

            <motion.div variants={textVariants}>
              <Button className="mt-6 px-6 py-3 bg-black text-white rounded-lg hover:bg-gray-800 transition inline-flex items-center">
                Learn More →
              </Button>
            </motion.div>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
