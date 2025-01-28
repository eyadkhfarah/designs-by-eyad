"use client";

import { motion } from "framer-motion";

interface AnimatedH2Props {
  text: string;
  className?: string;
}

export const AnimatedH2: React.FC<AnimatedH2Props> = ({ text, className = "" }) => {
  // Split the text into words
  const words = text.split(" ");

  // Animation variants
  const container = {
    hidden: {},
    visible: (i = 1) => ({
      transition: { staggerChildren: 0.15, delayChildren: 0.3 * i },
    }),
  };

  const child = {
    hidden: { y: "100%" }, // Start completely off the screen
    visible: { y: "0%", transition: { duration: 0.5, ease: "easeOut" } }, // Slide into place
  };

  return (
    <motion.div
      className={`overflow-hidden flex flex-wrap ${className}`}
      variants={container}
      initial="hidden"
      animate="visible"
    >
      {words.map((word, index) => (
        <motion.h2
          key={index}
          variants={child}
          className="mr-2 overflow-hidden inline-block"
        >
          {word}
        </motion.h2>
      ))}
    </motion.div>
  );
};
