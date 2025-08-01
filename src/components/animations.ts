import { Variants } from "framer-motion";

export type Direction = "up" | "down" | "left" | "right" | "upLeft" | "upRight" | "downLeft" | "downRight";

const getOffset = (direction: Direction, distance = 40) => {
  switch (direction) {
    case "up": return { x: 0, y: distance };
    case "down": return { x: 0, y: -distance };
    case "left": return { x: distance, y: 0 };
    case "right": return { x: -distance, y: 0 };
    case "upLeft": return { x: distance, y: distance };
    case "upRight": return { x: -distance, y: distance };
    case "downLeft": return { x: distance, y: -distance };
    case "downRight": return { x: -distance, y: -distance };
    default: return { x: 0, y: 0 };
  }
};

export const motionVariants = {
  container: {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.1,
        when: "beforeChildren",
      },
    },
  },

  fadeDirection: (direction: Direction = "up", i: number = 0): Variants => {
    const offset = getOffset(direction);
    return {
      hidden: {
        opacity: 0,
        x: offset.x,
        y: offset.y,
      },
      visible: {
        opacity: 1,
        x: 0,
        y: 0,
        transition: {
          type: "spring",
          stiffness: 80,
          damping: 20,
          delay: i * 0.1,
        },
      },
      exit: {
        opacity: 0,
        x: offset.x,
        y: offset.y,
        transition: {
          duration: 0.4,
          ease: "easeInOut",
        },
      },
    };
  },
} as const;
