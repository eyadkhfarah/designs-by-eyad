"use client";

import type { Metadata } from "next";
import React from "react";
import { motion } from "framer-motion";
import {
  RiFacebookCircleFill,
  RiGithubFill,
  RiInstagramLine,
  RiLinkedinBoxFill,
  RiPinterestFill,
  RiTiktokFill,
  RiTwitterXLine,
  RiWhatsappLine,
} from "react-icons/ri";

const SOCIAL_LINKS = [
  { name: "Facebook", href: "https://www.facebook.com/eyad.kh.farah", icon: RiFacebookCircleFill },
  { name: "Instagram", href: "https://www.instagram.com/eyad.kh.farah/", icon: RiInstagramLine },
  { name: "Whatsapp", href: "https://api.whatsapp.com/send?phone=+201555715783", icon: RiWhatsappLine },
  { name: "LinkedIn", href: "https://www.linkedin.com/in/eyadkhfarah", icon: RiLinkedinBoxFill },
  { name: "Pinterest", href: "https://www.pinterest.com/eyadkhfarah/", icon: RiPinterestFill },
  { name: "Twitter", href: "https://x.com/eyadkhfarahh", icon: RiTwitterXLine },
  { name: "GitHub", href: "https://github.com/eyadkhfarah/", icon: RiGithubFill },
  { name: "TikTok", href: "https://www.tiktok.com/@eyadkhfarah", icon: RiTiktokFill },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.05 }
  }
};

const itemVariants = {
  hidden: { opacity: 0, scale: 0.95 },
  visible: { opacity: 1, scale: 1 }
};

export default function Social() {
  return (
    <div className="flex flex-col gap-6">
      <header className="flex flex-col gap-2">
        <h2 className="text-2xl font-black uppercase tracking-tighter">
          Connect with me<span className="text-primary">.</span>
        </h2>
        <p className="text-neutral-500 text-sm">Follow the orbit on social media.</p>
      </header>

      <motion.div 
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="grid grid-cols-1 md:grid-cols-2 gap-4"
      >
        {SOCIAL_LINKS.map((social) => (
          <motion.a
            key={social.name}
            variants={itemVariants}
            href={social.href}
            target="_blank"
            rel="noopener noreferrer"
            className="group relative flex items-center justify-center gap-4 w-full h-16 bg-neutral-900 border border-white/5 rounded-full text-sm font-black uppercase tracking-widest transition-all duration-300 hover:bg-primary hover:text-black hover:border-primary hover:shadow-[0_0_30px_-5px_rgba(229,254,0,0.3)]"
          >
            <social.icon className="text-2xl transition-transform duration-300 group-hover:scale-110" />
            {social.name}
          </motion.a>
        ))}
      </motion.div>
    </div>
  );
}