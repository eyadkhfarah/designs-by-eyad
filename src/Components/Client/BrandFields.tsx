"use client";

import { useTranslations, useLocale } from 'next-intl';
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

const fields = [
  "mobileApp", "clinic", "newsAndPublication", "government", "travel",
  "marketingAgencies", "tech", "beverages", "restaurants", "coffeeShops",
  "foodRetailers", "furniture", "realEstate", "education", "universities",
  "beauty", "fashion", "magazines", "eCommerce", "influencers",
  "youtubers", "podcast", "cosmetics", "perfumes", "automobile"
];

export default function BrandFields() {
  const container = useRef<HTMLDivElement>(null);
  const t = useTranslations();
  const locale = useLocale();
  const isArabic = locale === 'ar';

  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start end", "end start"]
  });

  // Smoother scroll values for a more refined feel
  const x = useTransform(
    scrollYProgress,
    [0, 1],
    isArabic ? [100, -1500] : [-100, 1500]
  );
  
  const xReverse = useTransform(
    scrollYProgress,
    [0, 1],
    isArabic ? [-100, 1500] : [100, -1500]
  );

  return (
    <section 
      ref={container} 
      className="relative py-20 overflow-hidden"
    >
      {/* Container with a slight rotation (skew) 
        This is a common high-end design trend that breaks the grid nicely.
      */}
      <div className="-rotate-2 flex flex-col gap-4">
        
        {/* Row 1 - Reversed */}
        <div className="bg-primary py-4 w-[110%] -left-[5%] relative overflow-hidden flex items-center shadow-2xl">
          <motion.ul 
            style={{ x: xReverse }} 
            className="flex items-center whitespace-nowrap"
          >
            {fields.map((field, index) => (
              <li 
                key={index} 
                className="text-dark text-2xl md:text-4xl font-black uppercase mx-8 md:mx-12 flex items-center gap-8"
              >
                <span>{t(`fields.${field}`)}</span>
                {/* Decorative dot separator */}
                <span className="w-2 h-2 rounded-full bg-dark/30" />
              </li>
            ))}
          </motion.ul>
        </div>

        {/* Row 2 - Standard direction */}
        <div className="bg-neutral-900 border-y border-white/10 py-4 w-[110%] -left-[5%] relative overflow-hidden flex items-center">
          <motion.ul 
            style={{ x }} 
            className="flex items-center whitespace-nowrap"
          >
            {[...fields].reverse().map((field, index) => (
              <li 
                key={index} 
                className="text-white/20 text-2xl md:text-4xl font-black uppercase mx-8 md:mx-12 flex items-center gap-8"
              >
                <span>{t(`fields.${field}`)}</span>
                <span className="w-2 h-2 rounded-full bg-white/10" />
              </li>
            ))}
          </motion.ul>
        </div>

      </div>

      {/* Side Masks: Fades the text out at the screen edges for a premium look */}
      <div className="pointer-events-none absolute inset-0 z-10 before:absolute before:left-0 before:top-0 before:h-full before:w-40 before:bg-gradient-to-r before:from-background before:to-transparent after:absolute after:right-0 after:top-0 after:h-full after:w-40 after:bg-gradient-to-l after:after:from-background after:to-transparent" />
    </section>
  );
}