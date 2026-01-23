"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { TbQrcode, TbExternalLink, TbCopy } from "react-icons/tb";

const METHODS = [
  {
    name: "NBE Phone Cash",
    subtitle: "National Bank of Egypt",
    href: "tel:+201555715783",
    img: "/Imgs/Purchasing/nbe-cash.png",
    color: "group-hover:border-green-600/50"
  },
  {
    name: "InstaPay",
    subtitle: "Instant Payment Network",
    // Smart link: uses deep link for mobile, web link for desktop
    href: "https://ipn.eg/S/eyadfarah/instapay/35P7cS",
    mobileHref: "ipn://S/eyadfarah/instapay/35P7cS",
    img: "/Imgs/Purchasing/instapay-qr-code.png",
    color: "group-hover:border-primary/50"
  }
];

export default function Purchasing() {
  return (
    <div className="flex flex-col gap-6">
      <header className="flex flex-col gap-2">
        <h2 className="text-2xl font-black uppercase tracking-tighter">
          Purchasing Methods<span className="text-primary">.</span>
        </h2>
        <p className="text-neutral-500 text-sm">Secure payment options for Egyptian clients.</p>
      </header>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 my-6">
        {METHODS.map((method, index) => (
          <motion.div
            key={method.name}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
            className="group relative bg-neutral-900/50 border border-white/5 rounded-[2.5rem] p-8 hover:bg-neutral-900 transition-all duration-500 overflow-hidden"
          >
            {/* Visual Decor */}
            <div className="absolute -top-10 -right-10 w-32 h-32 bg-primary/5 blur-3xl rounded-full group-hover:bg-primary/10 transition-colors" />
            
            <div className="relative z-10 flex flex-col gap-6">
              <div className="flex justify-between items-start">
                <div>
                  <h3 className="text-xl font-black text-white">{method.name}</h3>
                  <p className="text-[10px] font-bold text-neutral-500 uppercase tracking-widest mt-1">
                    {method.subtitle}
                  </p>
                </div>
                <TbQrcode className="text-2xl text-primary" />
              </div>

              <div className="relative aspect-square w-full overflow-hidden rounded-2xl border border-white/10 bg-black/20 p-4">
                <Image
                  alt={`${method.name} QR Code`}
                  src={method.img}
                  fill
                  className="object-contain p-2 grayscale group-hover:grayscale-0 transition-all duration-700"
                />
              </div>

              <a
                href={method.name === "InstaPay" ? method.href : method.href}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-3 w-full py-4 bg-white/5 border border-white/10 rounded-2xl text-xs font-black uppercase tracking-widest hover:bg-primary hover:text-black hover:border-primary transition-all duration-300"
              >
                Open in App
                <TbExternalLink className="text-lg" />
              </a>
            </div>
          </motion.div>
        ))}
      </div>

      <p className="text-center text-neutral-600 text-[10px] uppercase tracking-[0.2em] mt-4">
        All transactions are secured via official banking channels
      </p>
    </div>
  );
}