"use client";

import Link from "next/link";
import React from "react";
import { RiBehanceFill } from "react-icons/ri";
import { motion } from "framer-motion";

type ButtonProps = {
  link: string;
  text: string;
  target?: boolean;
  className?: string;
  icon?: React.ReactNode;
};

export default function PrimaryBtn({ 
  link, 
  text, 
  target = false, 
  className = "", 
  icon 
}: ButtonProps) {
  
  // Logic to automatically show Behance icon if the text matches (keeping your original logic but making it cleaner)
  const renderIcon = icon || (text.toLowerCase().includes("behance") ? <RiBehanceFill className="text-2xl" /> : null);

  return (
    <motion.div
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      className="w-fit"
    >
      <Link
        href={link}
        target={target ? "_blank" : "_self"}
        rel="noreferrer"
        className={`
          relative overflow-hidden
          px-8 py-4 
          bg-primary text-black 
          flex justify-center items-center gap-3 
          w-fit h-fit 
          font-bold uppercase tracking-widest text-sm
          rounded-2xl 
          shadow-[0_10px_20px_-10px_rgba(229,254,0,0.3)]
          hover:shadow-[0_15px_30px_-10px_rgba(229,254,0,0.5)]
          transition-all duration-300 
          ${className}
        `}
      >
        {renderIcon}
        <span className="relative z-10">{text}</span>
        
        {/* Subtle Shine Effect on Hover */}
        <div className="absolute inset-0 w-full h-full bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full hover:animate-[shimmer_1.5s_infinite] pointer-events-none" />
      </Link>
    </motion.div>
  );
}