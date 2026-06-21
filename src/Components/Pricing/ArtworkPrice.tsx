import { RiCheckLine } from "@remixicon/react";
import PrimaryBtn from "../Buttons/PrimaryBtn";
import { plans } from "../../lib/Prices";
import { motion } from "framer-motion";
import { useTranslations } from "@/utils/i18n";

interface Props {
  locale?: string | undefined;
}

export default function ArtworkPrice({ locale }: Props) {
  const t = useTranslations(locale);

  return (
    <section className="py-32 relative border-t border-white/10">
      
      <div className="container mx-auto">
        {/* Header */}
        <header className="mb-24 flex flex-col md:flex-row justify-between items-end gap-12 border-b border-white/10 pb-12">
          <div className="flex flex-col gap-4">
            <span className="font-mono text-[11px] tracking-[0.25em] uppercase text-white/30">
              Pricing Structure
            </span>
            <h2 className="font-['Bebas_Neue',sans-serif] uppercase text-[clamp(48px,8vw,100px)] leading-[0.85] tracking-[-0.01em] text-white">
              {t("ArtworkPrice.title")}
            </h2>
          </div>
          <p className="text-white/40 text-[15px] max-w-sm leading-relaxed">
            {t("ArtworkPrice.subtitle")}
          </p>
        </header>

        {/* Pricing Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 rounded-3xl overflow-hidden border-l border-t border-white/10">
          {plans.map((plan, index) => {
            const isHighlighted = index === 1;

            return (
              <motion.div
                key={index}
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className={`group relative flex flex-col p-10 border-r border-b border-white/10 transition-colors duration-500 ${
                  isHighlighted ? "bg-white/5" : "bg-neutral-900/30"
                }`}
              >
                {isHighlighted && (
                  <div className="absolute top-0 right-0 px-4 py-1 bg-primary text-black font-mono text-[10px] uppercase tracking-widest">
                    Best Value
                  </div>
                )}

                <div className="mb-12">
                  <h3 className="font-['Bebas_Neue',sans-serif] uppercase text-3xl text-white mb-2">
                    {t(plan.title)}
                  </h3>
                  <p className="text-white/30 text-[13px] leading-relaxed">
                    {t(plan.description)}
                  </p>
                </div>

                <div className="mb-12">
                  <span className="text-5xl font-bold text-white tracking-tighter">
                    {plan.price}
                  </span>
                </div>

                <div className="grow mb-12">
                  <ul className="space-y-4">
                    {plan.features.map((feature, i) => (
                      <li key={i} className="flex items-center gap-4">
                        <RiCheckLine size={16} className={isHighlighted ? "text-primary" : "text-white/20"} />
                        <span className="text-white/60 text-[14px] uppercase font-mono tracking-tight">
                          {t(feature)}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>

                <PrimaryBtn
                  
                  target={false}
                  link="/contact"
                  text={t("ArtworkPrice.CTA")}
                />
              </motion.div>
            );
          })}
        </div>

        <footer className="mt-16 text-center">
          <p className="font-mono text-[11px] uppercase tracking-[0.2em] text-white/30 italic">
            {t("ArtworkPrice.Note")}
          </p>
        </footer>
      </div>
    </section>
  );
}