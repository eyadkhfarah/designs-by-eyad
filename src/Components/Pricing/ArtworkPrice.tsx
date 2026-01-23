"use client";

import { useTranslations } from "next-intl";
import { RiCheckLine } from "react-icons/ri";
import PrimaryBtn from "../Buttons/PrimaryBtn";
import P from "../TranslationTags/P";
import H2 from "../TranslationTags/H2";
import { plans } from "../../lib/Prices";
import { motion } from "framer-motion";

export default function ArtworkPrice() {
  const t = useTranslations();

  return (
    <section className="py-20 relative">
      {/* Background decoration to draw focus */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full bg-primary/5 blur-[120px] rounded-full pointer-events-none" />

      <div className="relative z-10 container mx-auto px-6">
        <header className="mb-16 text-center">
          <H2 className="text-5xl md:text-6xl font-black mb-6 tracking-tighter uppercase">
            {t("ArtworkPrice.title")}
          </H2>
          <P className="text-lg md:text-xl text-neutral-400 max-w-2xl mx-auto leading-relaxed">
            {t("ArtworkPrice.subtitle")}
          </P>
        </header>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {plans.map((plan, index) => {
            // Logic to highlight the "T-Shirt" or "Middle" plan as the popular one
            const isHighlighted = index === 1; 

            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className={`relative group w-full flex flex-col p-8 rounded-[2.5rem] border transition-all duration-500 ${
                  isHighlighted 
                  ? "bg-neutral-900 border-primary shadow-[0_0_40px_-10px_rgba(229,254,0,0.2)] scale-105 z-10" 
                  : "bg-neutral-900/50 border-white/10 hover:border-white/20"
                }`}
              >
                {isHighlighted && (
                  <span className="absolute -top-4 left-1/2 -translate-x-1/2 bg-primary text-black text-xs font-bold uppercase tracking-widest px-4 py-1.5 rounded-full">
                    Most Popular
                  </span>
                )}

                <div className="mb-8">
                  <h3 className={`text-2xl font-bold uppercase mb-2 ${isHighlighted ? "text-primary" : "text-white"}`}>
                    {t(plan.title)}
                  </h3>
                  <p className="text-neutral-500 text-sm leading-relaxed">
                    {t(plan.description)}
                  </p>
                </div>

                <div className="mb-10 flex items-baseline gap-1">
                  <span className="text-4xl md:text-6xl font-black tracking-tighter">
                    {plan.price}
                  </span>
                  {/* If you have a currency or period tag in your JSON, add it here */}
                </div>

                <div className="flex-grow">
                  <p className="text-sm font-bold uppercase tracking-wider text-neutral-400 mb-6">
                    {t("ArtworkPrice.include")}:
                  </p>
                  <ul className="space-y-4 mb-10">
                    {plan.features.map((feature, i) => (
                      <li key={i} className="flex items-start gap-3 group/item">
                        <span className={`text-xl transition-colors ${isHighlighted ? "text-primary" : "text-neutral-600 group-hover/item:text-primary"}`}>
                          <RiCheckLine />
                        </span>
                        <span className="text-neutral-300 text-sm md:text-base">
                          {t(feature)}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>

                <PrimaryBtn
                  className="w-full mt-auto py-5 text-lg"
                  target={false}
                  link="/contact"
                  text={t("ArtworkPrice.CTA")}
                />
              </motion.div>
            );
          })}
        </div>

        <footer className="mt-16 text-center">
          <P className="text-neutral-500 text-sm italic max-w-xl mx-auto">
            {t("ArtworkPrice.Note")}
          </P>
        </footer>
      </div>
    </section>
  );
}