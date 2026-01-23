"use client";

import Image from "next/image";
import React from "react";
import PrimaryBtn from "../Buttons/PrimaryBtn";
import { motion } from "framer-motion";

export default function ProtImages() {
  return (
    <div className="flex flex-col w-full gap-32 md:gap-40 py-10">
      
      {/* --- Section 1: Web Development (Image Left, Text Right) --- */}
      <div className="flex flex-col lg:flex-row items-center justify-between gap-12 group">
        {/* Image Container with Custom Shadow/Glow */}
        <motion.div 
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="relative rounded-[3rem] overflow-hidden border border-white/10 bg-neutral-900 aspect-square lg:w-1/2 w-full"
        >
          <Image
            alt="coding"
            src={"/coding.webp"}
            width={600}
            height={600}
            className="group-hover:scale-105 transition-transform duration-700 ease-out aspect-square object-cover"
          />
          {/* Overlay Gradient for depth */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
        </motion.div>

        {/* Text Content */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="lg:w-1/2 flex flex-col gap-6 lg:pl-12"
        >
          <div className="space-y-4">
            <span className="text-primary text-sm font-mono tracking-widest uppercase">Digital Experience</span>
            <h2 className="text-white text-5xl md:text-6xl font-bold leading-tight">
              Colorful <span className="text-primary">Web</span>
            </h2>
            <p className="text-neutral-400 text-lg max-w-md leading-relaxed">
              Stunning websites that pack a punch with vibrant colors, seamless animations, and modern typography tailored for your brand.
            </p>
          </div>

          <div className="pt-4">
            <PrimaryBtn
              target={false}
              link={"/portfolio/web"}
              text={"Check My Websites"}
            />
          </div>
        </motion.div>
      </div>

      {/* --- Section 2: Branding (Image Right, Text Left) --- */}
      <div className="flex flex-col lg:flex-row-reverse items-center justify-between gap-12 group">
        {/* Image Container */}
        <motion.div 
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="relative rounded-[3rem] overflow-hidden border border-white/10 bg-neutral-900 aspect-square lg:w-1/2 w-full"
        >
          <Image
            alt="Designs"
            src={"/design.webp"}
            width={600}
            height={600}
            className="group-hover:scale-105 transition-transform duration-700 ease-out aspect-square object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
        </motion.div>

        {/* Text Content */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="lg:w-1/2 flex flex-col gap-6 lg:pr-12"
        >
          <div className="space-y-4">
             <span className="text-primary text-sm font-mono tracking-widest uppercase">Visual Identity</span>
            <h2 className="text-white text-5xl md:text-6xl font-bold leading-tight">
              Branding <span className="text-primary">Brilliance</span>
            </h2>
            <p className="text-neutral-400 text-lg max-w-md leading-relaxed">
              Minimalist design shines bright in our sublime branding packages, creating a timeless identity that resonates with your audience.
            </p>
          </div>

          <div className="pt-4">
            <PrimaryBtn
              target={false}
              link={"/portfolio/designs"}
              text={"Check My Designs"}
            />
          </div>
        </motion.div>
      </div>
    </div>
  );
}