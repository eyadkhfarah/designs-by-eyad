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

  return (
    <div className="grid md:grid-cols-2 gap-9 mt-8">
      {Categories.map((category, i) => (
        <motion.div
          initial={{ opacity: 0, translateY: 20 }}
          whileInView={{ opacity: 1, translateY: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.3, delay: i * 0.2 }}
          key={category.id}
          className="services-card hover:scale-110"
        >
          <div className="grid gap-6">
            {t(category.name) === "Web Development" ? (
              <TbWorldCode className="text-4xl text-primary " />
            ) : t(category.name) === "Social Media Design" || t(category.name) === "تصميم منشورات وسائل التواصل الاجتماعي" ? (
              <TbMessage2Heart className="text-4xl text-primary" />
            ) : t(category.name) === "Graphic Design" ? (
              <TbVectorBezier className="text-4xl text-primary" />
            ) : t(category.name) === "UI/UX Design" || t(category.name) === "تصميم واجهة المستخدم وتجربة المستخدم" ? (
              <TbDeviceMobileCheck className="text-4xl text-primary" />
            ) : t(category.name) === "Photoshop" ? (
              <TbBrandAdobe className="text-4xl text-primary" />
            ) : t(category.name) === "Logo Design" || t(category.name) === "Brand Identity" || t(category.name) === "تصميم الشعار" || t(category.name) === "هوية العلامة التجارية" ? (
              <TbPencilBolt className="text-4xl text-primary" />
            ) : null}
            <h3 className="text-xl">{t(category.name)}</h3>
          </div>
          <p>{t(category.desc)}</p>
        </motion.div>
      ))}
    </div>
  );
}
