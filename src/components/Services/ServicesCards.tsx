import { Categories } from "@/lib/ServicesList";
import {
  IconBrandAdobe,
  IconDeviceMobileCheck,
  IconMessage2Heart,
  IconPencilBolt,
  IconVectorBezier,
  IconWorldCode,
} from "@tabler/icons-react";
import { motion } from "framer-motion";

import { useTranslations } from "@/utils/i18n";

interface Props {
  locale?: string | undefined;
}

export default function ServicesCards({ locale }: Props) {
  const t = useTranslations(locale);

  // Helper function for cleaner Icon logic
  const getIcon = (name: string) => {
    const translatedName = t(name);

    // Using includes or simpler checks for robustness
    if (translatedName === "Web Development") return <IconWorldCode className="w-8 h-8" stroke={1.5} />;
    if (
      translatedName === "Social Media Design" ||
      translatedName === "تصميم منشورات وسائل التواصل الاجتماعي"
    )
      return <IconMessage2Heart className="w-8 h-8" stroke={1.5} />;
    if (translatedName === "Graphic Design") return <IconVectorBezier className="w-8 h-8" stroke={1.5} />;
    if (
      translatedName === "UI/UX Design" ||
      translatedName === "تصميم واجهة المستخدم وتجربة المستخدم"
    )
      return <IconDeviceMobileCheck className="w-8 h-8" stroke={1.5} />;
    if (translatedName === "Photoshop") return <IconBrandAdobe className="w-8 h-8" stroke={1.5} />;
    if (
      [
        "Logo Design",
        "Brand Identity",
        "تصميم الشعار",
        "هوية العلامة التجارية",
      ].includes(translatedName)
    )
      return <IconPencilBolt className="w-8 h-8" stroke={1.5} />;

    return <IconVectorBezier className="w-8 h-8" stroke={1.5} />; // Default fallback
  };

  return (
    <div className="grid md:grid-cols-2 gap-6 mt-12">
      {Categories.map((category, i) => (
        <motion.div
          key={category.id}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.6, delay: i * 0.1, ease: [0.16, 1, 0.3, 1] }}
          className="group relative bg-dark rounded-4xl overflow-hidden border border-white/10 p-8 md:p-12 transition-colors duration-300 hover:border-white/30 hover:bg-neutral-900/50"
        >
          {/* Subtle Layout Grid Overlay */}
          <div
            aria-hidden="true"
            className="absolute inset-0 opacity-[0.03] pointer-events-none z-0 transition-opacity duration-300 group-hover:opacity-[0.06]"
            style={{
              backgroundImage:
                "linear-gradient(rgba(255,255,255,1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,1) 1px, transparent 1px)",
              backgroundSize: "24px 24px",
            }}
          />

          <div className="relative z-10 flex flex-col h-full gap-16">
            {/* Top Section: Editorial Index & Icon */}
            <div className="flex justify-between items-start">
              <span className="font-mono text-[13px] tracking-[0.2em] text-white/30">
                {String(i + 1).padStart(2, "0")}
              </span>
              <div className="text-white/40 group-hover:text-primary transition-colors duration-300">
                {getIcon(category.name)}
              </div>
            </div>

            {/* Bottom Section: Typography */}
            <div className="flex flex-col gap-4">
              <h3 className="font-['Bebas_Neue',sans-serif] uppercase text-4xl md:text-5xl leading-[0.85] tracking-[-0.01em] text-white group-hover:text-primary transition-colors duration-300">
                {t(category.name)}
              </h3>
              <p className="text-white/40 text-[15px] leading-relaxed max-w-sm">
                {t(category.desc)}
              </p>
            </div>
          </div>
        </motion.div>
      ))}
    </div>
  );
}