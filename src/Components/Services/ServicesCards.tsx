"use client";
import { useTranslations } from 'next-intl';
import { Categories } from "@/lib/ServicesList";
import React from "react";
import {
  TbBrandAdobe,
  TbDeviceMobileCheck,
  TbMessage2Heart,
  TbPencilBolt,
  TbVectorBezier,
  TbWorldCode,
} from "react-icons/tb";
import { motion } from "framer-motion";

export default function ServicesCards() {
  const t = useTranslations();

  // Helper function to cleaner Icon logic
  const getIcon = (name: string) => {
    const translatedName = t(name);
    
    // Using includes or simpler checks for robustness
    if (translatedName === "Web Development") return <TbWorldCode />;
    if (translatedName === "Social Media Design" || translatedName === "تصميم منشورات وسائل التواصل الاجتماعي") return <TbMessage2Heart />;
    if (translatedName === "Graphic Design") return <TbVectorBezier />;
    if (translatedName === "UI/UX Design" || translatedName === "تصميم واجهة المستخدم وتجربة المستخدم") return <TbDeviceMobileCheck />;
    if (translatedName === "Photoshop") return <TbBrandAdobe />;
    if (["Logo Design", "Brand Identity", "تصميم الشعار", "هوية العلامة التجارية"].includes(translatedName)) return <TbPencilBolt />;
    
    return <TbVectorBezier />; // Default fallback
  };

  return (
    <div className="grid md:grid-cols-2 gap-6 mt-8">
      {Categories.map((category, i) => (
        <motion.div
          key={category.id}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.5, delay: i * 0.1, ease: "easeOut" }}
          className="group relative bg-neutral-900 border border-white/10 rounded-[2rem] p-8 hover:border-primary/50 transition-colors duration-300"
        >
          {/* Hover Gradient Effect */}
          <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-[2rem]" />

          <div className="relative z-10 flex flex-col items-start gap-6">
            {/* Icon Container */}
            <div className="h-16 w-16 rounded-2xl bg-neutral-800 border border-white/5 flex items-center justify-center  text-3xl text-primary group-hover:bg-primary group-hover:text-neutral-900 transition-all duration-300 shadow-lg group-hover:shadow-primary/25 group-hover:scale-110">
              {getIcon(category.name)}
            </div>

            <div className="space-y-3">
              <h3 className="text-2xl font-bold text-white group-hover:text-primary transition-colors">
                {t(category.name)}
              </h3>
              <p className="text-neutral-400 leading-relaxed group-hover:text-neutral-300 transition-colors">
                {t(category.desc)}
              </p>
            </div>
          </div>
        </motion.div>
      ))}
    </div>
  );
}