"use client";

import { motion } from "framer-motion";

import Image from "next/image";

export default function H1Hero() {
  return (
    <div
      className="relative cursor-help"
      title="Hieroglyphic word means WOW!"
      aria-label="Hieroglyphic word means WOW!"
    >
      <motion.h1
        initial={{ translateY: 20, opacity: 0 }}
        animate={{ translateY: 0, opacity: 1 }}
        transition={{ duration: 0.3, delay: 0.5 }}
        className="p-0 lg:text-[7rem] md:text-[5rem] text-[3.7rem] whitespace-nowrap uppercase text-center"
      >
        Bi aty!
      </motion.h1>
      <motion.div
        initial={{ translateY: 20, opacity: 0 }}
        animate={{ translateY: 0, opacity: 0.1 }}
        transition={{ duration: 0.3 }}
        className="absolute opacity-10 lg:bottom-10"
      >
        <Image src={"/bi-aty.svg"} alt="Bi Aty" width={550} height={50} />
      </motion.div>
    </div>
  );
}
