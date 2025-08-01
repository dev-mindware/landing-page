export const heroVariants = {
  container: {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.1,
        when: "beforeChildren"
      }
    }
  },

  content: {
    hidden: { y: 60, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 15
      }
    }
  },

  title: {
    hidden: { y: 40, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 120,
        damping: 20,
        delay: 0.1
      }
    }
  },

  button: {
    hidden: { scale: 0.8, opacity: 0 },
    visible: {
      scale: 1,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 200,
        damping: 20
      }
    },
    hover: {
      scale: 1.05,
      transition: {
        type: "spring",
        stiffness: 400,
        damping: 10
      }
    },
    tap: { scale: 0.95 }
  },

  avatar: {
    hidden: { scale: 0, rotate: -180 },
    visible: (index: number) => ({
      scale: 1,
      rotate: 0,
      transition: {
        type: "spring" as const,
        stiffness: 200,
        damping: 15,
        delay: index * 0.08
      }
    }),
    hover: {
      scale: 1.2,
      rotate: 10,
      transition: {
        type: "spring" as const,
        stiffness: 300,
        damping: 10
      }
    }
  },

  imageColumn: {
    hidden: (direction: string) => ({
      y: direction === "top" ? -100 : 100,
      opacity: 0,
      scale: 0.9
    }),
    visible: () => ({
      y: 0,
      opacity: 1,
      scale: 1,
      transition: {
        type: "spring" as const,
        stiffness: 80,
        damping: 20,
        duration: 1.5
      }
    })
  },

  imageContainer: {
    hidden: { opacity: 0, x: 100 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        type: "spring" as const,
        stiffness: 60,
        damping: 20,
        delay: 0.3,
        staggerChildren: 0.2,
        when: "beforeChildren"
      }
    }
  },

  slideImage: {
    rest: { scale: 1, rotateY: 0 },
    hover: {
      scale: 1.02,
      rotateY: 5,
      transition: {
        duration: 0.3,
        ease: "easeOut"
      }
    }
  }
} as const;
