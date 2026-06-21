"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useTranslations } from "@/utils/i18n";

interface Props {
  locale?: string | undefined;
}

/* ─── Inline SVG icons ───────────────────────────────────────────────────── */

function IconDesign() {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
      <path d="M12 2L2 7l10 5 10-5-10-5z" />
      <path d="M2 17l10 5 10-5M2 12l10 5 10-5" />
    </svg>
  );
}

function IconCode() {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
      <path d="M16 18l6-6-6-6M8 6l-6 6 6 6" />
    </svg>
  );
}

function IconFigma() {
  return (
    <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
      <path d="M5 5.5A3.5 3.5 0 0 1 8.5 2H12v7H8.5A3.5 3.5 0 0 1 5 5.5z" />
      <path d="M12 2h3.5a3.5 3.5 0 1 1 0 7H12V2z" />
      <path d="M12 12.5a3.5 3.5 0 1 1 7 0 3.5 3.5 0 0 1-7 0z" />
      <path d="M5 19.5A3.5 3.5 0 0 1 8.5 16H12v3.5a3.5 3.5 0 0 1-7 0z" />
      <path d="M5 12.5A3.5 3.5 0 0 1 8.5 9H12v7H8.5A3.5 3.5 0 0 1 5 12.5z" />
    </svg>
  );
}

function IconFramer() {
  return (
    <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
      <path d="M5 4h14v7H5zM5 11l7 9 7-9" />
    </svg>
  );
}

function IconCanva() {
  return (
    <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
      <circle cx="12" cy="12" r="10" />
      <path d="M8 12h8M12 8v8" />
    </svg>
  );
}

function IconPhotoshop() {
  return (
    <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
      <rect x="2" y="2" width="20" height="20" rx="3" />
      <path d="M7 17V7h4a3 3 0 0 1 0 6H7" />
    </svg>
  );
}

function IconIllustrator() {
  return (
    <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
      <rect x="2" y="2" width="20" height="20" rx="3" />
      <path d="M9 17L12 7l3 10M10.5 13.5h3" />
    </svg>
  );
}

function IconNextjs() {
  return (
    <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
      <circle cx="12" cy="12" r="10" />
      <path d="M8 16.5V8l8 10.5V8" />
    </svg>
  );
}

function IconReact() {
  return (
    <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
      <circle cx="12" cy="12" r="2" />
      <ellipse cx="12" cy="12" rx="10" ry="4" />
      <ellipse cx="12" cy="12" rx="10" ry="4" transform="rotate(60 12 12)" />
      <ellipse cx="12" cy="12" rx="10" ry="4" transform="rotate(120 12 12)" />
    </svg>
  );
}

function IconSvelte() {
  return (
    <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
      <path d="M20 7c0-2.21-1.79-4-4-4H8C5.79 3 4 4.79 4 7v10c0 2.21 1.79 4 4 4h8c2.21 0 4-1.79 4-4V7z" />
      <path d="M8 12l4-4 4 4M8 16l4-4 4 4" />
    </svg>
  );
}

function IconMobile() {
  return (
    <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
      <rect x="5" y="2" width="14" height="20" rx="2" />
      <path d="M12 18h.01" />
    </svg>
  );
}

/* ─── Tool data ──────────────────────────────────────────────────────────── */

const designTools = [
  { icon: <IconFigma />, label: "Figma" },
  { icon: <IconFramer />, label: "Framer" },
  { icon: <IconCanva />, label: "Canva" },
  { icon: <IconPhotoshop />, label: "Photoshop" },
  { icon: <IconIllustrator />, label: "Illustrator" },
];

const devTools = [
  { icon: <IconNextjs />, label: "Next.js" },
  { icon: <IconReact />, label: "React.js" },
  { icon: <IconSvelte />, label: "SvelteKit" },
  { icon: <IconMobile />, label: "React Native" },
  { icon: <IconMobile />, label: "Flutter" },
];

/* ─── Component ─────────────────────────────────────────────────────────── */

export default function ToolsTabs({ locale }: Props) {
  const [active, setActive] = useState<1 | 2>(1);
  const t = useTranslations(locale);

  return (
    <section className="flex flex-col gap-12 py-16 w-full">
      
      {/* ── Header & Tabs System ────────────────────────────────────── */}
      <div className="flex flex-col lg:flex-row justify-between items-start lg:items-end gap-8 border-b border-white/10 pb-8">
        
        {/* Editorial Title */}
        <div className="flex flex-col gap-4">
          <span className="font-mono text-[11px] tracking-[0.25em] uppercase text-white/30">
            {t("Span.Design")} / {t("Span.Development")}
          </span>
          <h2 className="font-['Bebas_Neue',sans-serif] uppercase text-[clamp(48px,8vw,100px)] leading-[0.85] tracking-[-0.01em] text-white">
            Tools I <span className="text-primary">Use</span>
          </h2>
        </div>

        {/* Sharp Segmented Tabs */}
        <div className="flex w-full overflow-hidden rounded-4xl lg:w-auto border border-white/10 bg-dark">
          {(
            [
              { id: 1 as const, icon: <IconDesign />, key: "Span.Design" },
              { id: 2 as const, icon: <IconCode />, key: "Span.Development" },
            ] as const
          ).map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActive(tab.id)}
              className={`
                flex-1 lg:flex-none flex items-center justify-center gap-3 px-8 py-4 
                font-mono text-[12px] tracking-[0.15em] uppercase transition-colors duration-300
                border-r border-white/10 last:border-r-0
                ${active === tab.id 
                  ? "bg-primary text-black" 
                  : "bg-transparent text-white/40 hover:bg-white/5 hover:text-white"
                }
              `}
            >
              <span className={active === tab.id ? "text-black" : "text-white/40 transition-colors"}>
                {tab.icon}
              </span>
              {t(tab.key)}
            </button>
          ))}
        </div>
      </div>

      {/* ── Tools Wireframe Grid ──────────────────────────────────────── */}
      <div className="w-full relative min-h-62.5">
        <AnimatePresence mode="wait">
          <motion.div
            key={active}
            initial={{ opacity: 0, filter: "blur(4px)", y: 10 }}
            animate={{ opacity: 1, filter: "blur(0px)", y: 0 }}
            exit={{ opacity: 0, filter: "blur(4px)", y: -10 }}
            transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
            className="grid grid-cols-2 rounded-3xl overflow-hidden md:grid-cols-3 lg:grid-cols-5 border-l border-t border-white/10 w-full"
          >
            {(active === 1 ? designTools : devTools).map((tool, i) => (
              <div
                key={i}
                className="group flex flex-col items-center justify-center gap-6 p-10 border-r border-b border-white/10 bg-neutral-900/30 hover:bg-primary transition-colors duration-300 cursor-default"
              >
                <div className="text-white/30 group-hover:text-black transition-colors duration-300">
                  {tool.icon}
                </div>
                <span className="font-mono text-[12px] tracking-[0.15em] uppercase text-white group-hover:text-black transition-colors duration-300">
                  {tool.label}
                </span>
              </div>
            ))}
          </motion.div>
        </AnimatePresence>
      </div>

    </section>
  );
}