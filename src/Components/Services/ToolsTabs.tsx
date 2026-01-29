"use client";

import React, { useState } from "react";
import { useTranslations } from "next-intl";
import {
  TbBrandFigma,
  TbBrandFramer,
  TbBrandFlutter,
  TbBrandNextjs,
  TbBrandReact,
  TbBrandReactNative,
  TbBrandSvelte,
  TbVectorBezier,
} from "react-icons/tb";
import { RiCodeLine } from "react-icons/ri";
import { SiAdobephotoshop, SiAdobeillustrator, SiCanva } from "react-icons/si";
import H2 from "../TranslationTags/H2";
import { motion, AnimatePresence } from "framer-motion";

const designTools = [
  { icon: <TbBrandFigma />, label: "Figma" },
  { icon: <TbBrandFramer />, label: "Framer" },
  { icon: <SiCanva />, label: "Canva" },
  { icon: <SiAdobephotoshop />, label: "Photoshop" },
  { icon: <SiAdobeillustrator />, label: "Illustrator" },
];

const devTools = [
  { icon: <TbBrandNextjs />, label: "Next.js" },
  { icon: <TbBrandReact />, label: "React.js" },
  { icon: <TbBrandSvelte />, label: "SvelteKit" },
  { icon: <TbBrandReactNative />, label: "React Native" },
  { icon: <TbBrandFlutter />, label: "Flutter" },
];

export default function ToolsTabs() {
  const [toggle, setToggle] = useState<1 | 2>(1);
  const t = useTranslations();

  return (
    <section className="py-16">
      <div className="flex flex-col items-center gap-12">
        <div className="text-center mb-16 flex flex-col items-center">
          <span className="bg-white/5 px-4 py-1 rounded-full text-xs font-bold tracking-widest uppercase mb-4 text-white/60 border border-white/10">
            The Stack
          </span>
          <h2 className="text-3xl md:text-4xl font-bold uppercase tracking-tighter">
            Tools of the Trade
          </h2>
        </div>
        {/* --- Tab Switcher --- */}
        <div className="bg-neutral-900 border border-white/10 flex p-1.5 rounded-full relative">
          <button
            onClick={() => setToggle(1)}
            className={`relative z-10 flex items-center gap-2 px-6 py-2.5 rounded-full transition-colors duration-300 ${
              toggle === 1 ? "text-black" : "text-white/60 hover:text-white"
            }`}
          >
            <TbVectorBezier className="text-xl" />
            <span className="font-arabicBold text-sm uppercase tracking-wider">
              {t("Span.Design")}
            </span>
            {toggle === 1 && (
              <motion.div
                layoutId="active-tab"
                className="absolute inset-0 bg-primary rounded-full -z-10"
                transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
              />
            )}
          </button>

          <button
            onClick={() => setToggle(2)}
            className={`relative z-10 flex items-center gap-2 px-6 py-2.5 rounded-full transition-colors duration-300 ${
              toggle === 2 ? "text-black" : "text-white/60 hover:text-white"
            }`}
          >
            <RiCodeLine className="text-xl" />
            <span className="font-arabicBold text-sm uppercase tracking-wider">
              {t("Span.Development")}
            </span>
            {toggle === 2 && (
              <motion.div
                layoutId="active-tab"
                className="absolute inset-0 bg-primary rounded-full -z-10"
                transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
              />
            )}
          </button>
        </div>

        {/* --- Tools Grid --- */}
        <div className="w-full min-h-[100px]">
          <AnimatePresence mode="wait">
            <motion.ul
              key={toggle}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.3 }}
              className="flex flex-wrap justify-center gap-4 px-4"
            >
              {(toggle === 1 ? designTools : devTools).map((tool, index) => (
                <li
                  key={index}
                  className="flex items-center gap-3 px-6 py-3 bg-neutral-900 border border-white/5 rounded-2xl text-white/80 group hover:border-primary/50 hover:bg-neutral-800 transition-all duration-300"
                >
                  <span className="text-2xl group-hover:text-primary transition-colors duration-300">
                    {tool.icon}
                  </span>
                  <span className="font-medium">{tool.label}</span>
                </li>
              ))}
            </motion.ul>
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}
