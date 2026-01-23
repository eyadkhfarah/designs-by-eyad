"use client";

import { useTranslations } from "next-intl";
import Link from "next/link";
import React, { useState, useEffect } from "react";
import { RiFacebookCircleFill, RiInstagramLine, RiLinkedinFill, RiYoutubeFill } from "react-icons/ri";
import PrimaryBtn from "./Buttons/PrimaryBtn";
import { nonindesxList } from "@/lib/nonindexList";
import dynamic from "next/dynamic";
import { motion } from "framer-motion";

const LanguageSwitcher = dynamic(() => import("./Client/LanguageSwitcher"), { ssr: false });

export default function Footer() {
  const t = useTranslations();
  const [year, setYear] = useState<number | null>(null);

  useEffect(() => {
    setYear(new Date().getFullYear());
  }, []);

  const socialLinks = [
    { href: "https://www.facebook.com/designs.by.eyad", icon: <RiFacebookCircleFill />, label: "Facebook" },
    { href: "https://www.instagram.com/designs.by.eyad", icon: <RiInstagramLine />, label: "Instagram" },
    { href: "https://www.linkedin.com/company/designsbyeyad", icon: <RiLinkedinFill />, label: "LinkedIn" },
    { href: "https://www.youtube.com/@designsbyeyad", icon: <RiYoutubeFill />, label: "YouTube" },
  ];

  return (
<<<<<<< HEAD
    <div className="my-20 border-t border-white/5">
=======
    <div className="mt-20 border-t border-white/5">
>>>>>>> 310484f2ddd5a175a32da59877aa81ca0b370bc4
      {/* --- Pre-Footer CTA Section --- */}
      <section className="relative overflow-hidden py-24 px-6 rounded-[3rem] bg-neutral-900 my-10 max-w-7xl mx-auto text-center border border-white/10">
        {/* Abstract Background Glow */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-primary/5 blur-[120px] rounded-full pointer-events-none" />
        
        <div className="relative z-10 flex flex-col items-center gap-8">
          <motion.h3 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-6xl font-bold text-white max-w-3xl leading-tight"
          >
            {t("Footer.Header.title")}
          </motion.h3>
          <p className="text-neutral-400 text-lg md:text-xl max-w-xl">
            {t("Footer.Header.subtitle")}
          </p>
          <div className="mt-4 scale-110">
            <PrimaryBtn target={false} link={"/contact"} text={t("Footer.Header.contact")} />
          </div>
        </div>
      </section>

      {/* --- Main Footer --- */}
      <footer id="contact" className="py-12 px-6 max-w-7xl mx-auto flex flex-col items-center gap-10">
        
        {/* Social Media Grid */}
        <div className="flex gap-4">
          {socialLinks.map((social, i) => (
            <Link 
              key={i}
              href={social.href} 
              target="_blank" 
              className="h-12 w-12 flex items-center justify-center rounded-2xl bg-neutral-900 border border-white/10 text-2xl text-white/50 hover:text-primary hover:border-primary/50 transition-all duration-300 hover:-translate-y-1"
              title={social.label}
            >
              {social.icon}
            </Link>
          ))}
        </div>

        {/* Links & Switcher Row */}
        <div className="w-full flex flex-col md:flex-row justify-between items-center pt-8 border-t border-white/5 gap-8">
          
          {/* Copyright */}
          <p className="text-neutral-500 text-sm order-3 md:order-1">
            © {year || "2025"} <span className="text-white font-semibold">Designs by Eyad</span>. {t("Footer.copyright")}.
          </p>

          {/* Secondary Links */}
          <ul className="flex flex-wrap justify-center gap-x-6 gap-y-2 order-1 md:order-2">
            {nonindesxList.map((link, index) => (
              <li key={index} className="flex items-center gap-6">
                <Link className="text-sm text-neutral-400 hover:text-primary transition-colors" href={link.link}>
                  {t(link.name)}
                </Link>
                {index < nonindesxList.length - 1 && <span className="text-white/10 text-xs hidden md:block">•</span>}
              </li>
            ))}
          </ul>

          {/* Language Switcher Placeholder */}
          <div className="order-2 md:order-3">
             <LanguageSwitcher />
          </div>

        </div>
      </footer>
    </div>
  );
}