"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { TbPhone, TbCopy, TbCheck, TbBrandWhatsapp } from "react-icons/tb";
import { cn } from "@/lib/utils";

const PHONE_NUMBERS = [
  { label: "Primary / WhatsApp", display: "015 5571 5783", value: "+201555715783", isWhatsApp: true },
  { label: "Secondary", display: "011 5880 4189", value: "+201158804189", isWhatsApp: false },
];

export default function Phone() {
  const [copiedIndex, setCopiedIndex] = useState<number | null>(null);

  const copyToClipboard = (text: string, index: number) => {
    navigator.clipboard.writeText(text);
    setCopiedIndex(index);
    setTimeout(() => setCopiedIndex(null), 2000);
  };

  return (
    <div className="flex flex-col gap-6">
      <header className="flex flex-col gap-2">
        <div className="flex items-center gap-3">
          <h2 className="text-2xl font-black uppercase tracking-tighter">
            Direct Line<span className="text-primary">.</span>
          </h2>
          {/* Availability Pulse */}
          <span className="flex h-3 w-3 relative">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-3 w-3 bg-green-500"></span>
          </span>
        </div>
        <p className="text-neutral-500 text-sm">Available for calls and inquiries from Aswan.</p>
      </header>

      <div className="grid lg:grid-cols-2 gap-4 my-6">
        {PHONE_NUMBERS.map((phone, index) => (
          <div key={phone.value} className="group relative">
            {/* Main Calling Button */}
            <a
              href={`tel:${phone.value}`}
              className="flex flex-col justify-center items-start w-full h-24 px-8 bg-neutral-900 border border-white/5 rounded-3xl transition-all duration-300 hover:border-primary/50 hover:bg-neutral-900/80 group"
            >
              <span className="text-[10px] font-bold text-neutral-500 uppercase tracking-widest mb-1 group-hover:text-primary transition-colors">
                {phone.label}
              </span>
              <div className="flex items-center gap-3 text-white font-black text-xl tracking-tight">
                {phone.isWhatsApp ? <TbBrandWhatsapp className="text-green-500" /> : <TbPhone className="text-primary" />}
                {phone.display}
              </div>
            </a>

            {/* Quick Copy Button */}
            <button
              onClick={() => copyToClipboard(phone.value, index)}
              className="absolute right-4 top-1/2 -translate-y-1/2 p-3 rounded-xl bg-white/5 border border-white/10 text-neutral-400 hover:text-white hover:bg-white/10 transition-all"
              title="Copy Number"
            >
              <AnimatePresence mode="wait">
                {copiedIndex === index ? (
                  <motion.div
                    key="check"
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    exit={{ scale: 0 }}
                  >
                    <TbCheck className="text-green-500" />
                  </motion.div>
                ) : (
                  <motion.div
                    key="copy"
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    exit={{ scale: 0 }}
                  >
                    <TbCopy />
                  </motion.div>
                )}
              </AnimatePresence>
            </button>
          </div>
        ))}
      </div>

      <p className="text-neutral-600 text-[10px] uppercase tracking-widest text-center">
        Business Hours: 10:00 AM — 08:00 PM (GMT+2)
      </p>
    </div>
  );
}