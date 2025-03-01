"use client"

import { useTranslations, useLocale } from 'next-intl';
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

const fields = [
  "mobileApp",
  "clinic",
  "newsAndPublication",
  "government",
  "travel",
  "marketingAgencies",
  "tech",
  "beverages",
  "restaurants",
  "coffeeShops",
  "foodRetailers",
  "furniture",
  "realEstate",
  "education",
  "universities",
  "beauty",
  "fashion",
  "magazines",
  "eCommerce",
  "influencers",
  "youtubers",
  "podcast",
  "cosmetics",
  "perfumes",
  "automobile"
];

export default function BrandFields() {
  const container = useRef<HTMLDivElement>(null);
  const t = useTranslations();
  const locale = useLocale();
  const isArabic = locale === 'ar'; // Check if the current locale is Arabic

  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start end", "end start"]
  });

  // Conditionally set transforms based on the language direction.
  const x = useTransform(
    scrollYProgress,
    [0, 1],
    isArabic ? [350, -3050] : [-350, 3050]
  );
  const xReverse = useTransform(
    scrollYProgress,
    [0, 1],
    isArabic ? [-350, 3050] : [350, -3050]
  );

  return (
    <>
      <div
        ref={container}
        className="bg-primary p-2 rounded-4xl text-4xl w-full overflow-hidden text-dark font-arabicBold uppercase"
      >
        <motion.ul style={{ x: xReverse }} className="flex items-center relative">
          {fields.map((field, index) => (
            <li key={index} className="whitespace-nowrap mx-10">
              {t(`fields.${field}`)}
            </li>
          ))}
        </motion.ul>
      </div>
      <div className="bg-primary p-2 rounded-4xl text-4xl w-full overflow-hidden text-dark font-arabicBold uppercase">
        <motion.ul style={{ x }} className="flex justify-end items-center relative">
          {fields.map((field, index) => (
            <li key={index} className="whitespace-nowrap mx-10">
              {t(`fields.${field}`)}
            </li>
          ))}
        </motion.ul>
      </div>
    </>
  );
}