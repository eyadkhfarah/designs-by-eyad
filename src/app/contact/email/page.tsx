"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { RiMicrosoftFill } from "react-icons/ri";
import { TbBrandGmail, TbCopy, TbCheck, TbMailForward } from "react-icons/tb";
import { cn } from "@/lib/utils";

const EMAIL_ACCOUNTS = [
  { 
    provider: "Gmail", 
    address: "eyadkhfarah@gmail.com", 
    icon: TbBrandGmail,
    color: "group-hover:text-[#EA4335]" 
  },
  { 
    provider: "Outlook", 
    address: "eyadkhfarah@outlook.com", 
    icon: RiMicrosoftFill,
    color: "group-hover:text-[#0078D4]" 
  },
];

export default function Email() {
  const [copiedIndex, setCopiedIndex] = useState<number | null>(null);

  const copyToClipboard = (text: string, index: number) => {
    navigator.clipboard.writeText(text);
    setCopiedIndex(index);
    setTimeout(() => setCopiedIndex(null), 2000);
  };

  return (
    <div className="flex flex-col gap-6">
      <header className="flex flex-col gap-2">
        <h2 className="text-2xl font-black uppercase tracking-tighter">
          Electronic Mail<span className="text-primary">.</span>
        </h2>
        <p className="text-neutral-500 text-sm">For formal inquiries and project briefs.</p>
      </header>

      <div className="grid grid-cols-1 gap-4 my-6">
        {EMAIL_ACCOUNTS.map((email, index) => (
          <div key={email.address} className="relative group">
            {/* Main Email Link */}
            <a
              href={`mailto:${email.address}`}
              className="flex items-center gap-6 w-full p-6 bg-neutral-900 border border-white/5 rounded-[2rem] transition-all duration-300 hover:border-primary/50 hover:bg-neutral-900/80"
            >
              <div className="p-4 rounded-2xl bg-white/5 group-hover:bg-primary/10 transition-colors">
                <email.icon className={cn("text-3xl transition-colors duration-300", email.color)} />
              </div>
              
              <div className="flex flex-col items-start">
                <span className="text-[10px] font-bold text-neutral-500 uppercase tracking-[0.2em]">
                  {email.provider}
                </span>
                <span className="text-lg font-bold text-white break-all">
                  {email.address}
                </span>
              </div>

              <TbMailForward className="ml-auto text-xl text-neutral-600 group-hover:text-primary transition-colors hidden md:block" />
            </a>

            {/* Quick Copy Action */}
            <button
              onClick={() => copyToClipboard(email.address, index)}
              className="absolute right-6 top-1/2 -translate-y-1/2 p-3 rounded-xl bg-white/5 border border-white/10 text-neutral-400 hover:text-white hover:bg-white/10 transition-all backdrop-blur-md"
              title="Copy Email Address"
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

      <div className="p-6 bg-primary/5 border border-primary/10 rounded-2xl">
        <p className="text-xs text-neutral-400 leading-relaxed text-center">
          <strong>Pro-tip:</strong> When sending a brief, please include your project timeline and budget so I can give you a more accurate quote.
        </p>
      </div>
    </div>
  );
}