"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import faqData from '@/lib/faqData';
import { RiArrowDownLine } from "@remixicon/react";
import { marked } from "marked";
import { cn } from "@/lib/utils";

const faqItemVariants = {
  hidden: { opacity: 0, y: 10 },
  visible: { opacity: 1, y: 0 },
};

const FAQSection: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleAnswer = (index: number) => {
    setOpenIndex(prev => prev === index ? null : index);
  };

  return (
    <div className="flex flex-col w-full border-t border-white/5">
      {faqData.map((item, index) => {
        const isOpen = openIndex === index;

        return (
          <motion.div
            key={index}
            variants={faqItemVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: index * 0.05 }}
            className="border-b border-white/5"
          >
            <button
              onClick={() => toggleAnswer(index)}
              className="w-full cursor-pointer flex justify-between items-center py-8 text-left group focus:outline-none"
              aria-expanded={isOpen}
              aria-controls={`answer-${index}`}
            >
              <span className={cn(
                "font-['Bebas_Neue',sans-serif] uppercase leading-[1.1] tracking-[0.02em] transition-colors duration-300 pr-8",
                "text-2xl md:text-4xl",
                isOpen ? "text-primary" : "text-white/80 group-hover:text-white"
              )}>
                {item.question}
              </span>
              
              <div className={cn(
                "shrink-0 flex items-center justify-center w-10 h-10 md:w-12 md:h-12 rounded-full border transition-all duration-500",
                isOpen 
                  ? "bg-primary border-primary rotate-180" 
                  : "bg-transparent border-white/10 group-hover:border-primary/50"
              )}>
                <RiArrowDownLine className={cn(
                  "w-5 h-5 md:w-6 md:h-6 transition-colors duration-500",
                  isOpen ? "text-black" : "text-white/40 group-hover:text-primary"
                )} />
              </div>
            </button>

            <AnimatePresence initial={false}>
              {isOpen && (
                <motion.div
                  id={`answer-${index}`}
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ 
                    height: "auto", 
                    opacity: 1,
                    transition: { height: { duration: 0.4, ease: [0.04, 0.62, 0.23, 0.98] }, opacity: { duration: 0.25, delay: 0.1 } }
                  }}
                  exit={{ 
                    height: 0, 
                    opacity: 0,
                    transition: { height: { duration: 0.3 }, opacity: { duration: 0.2 } }
                  }}
                >
                  <div className="pb-8 pr-12 md:pr-24">
                    {/* The markdown wrapper retains a clean, sans-serif reading experience */}
                    <div 
                      className="text-white/45 leading-relaxed text-base md:text-lg font-sans prose-p:mb-4 last:prose-p:mb-0 prose-a:text-primary hover:prose-a:underline"
                      dangerouslySetInnerHTML={{ __html: marked(item.answer) }} 
                    />
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>
        );
      })}
    </div>
  );
};

export default FAQSection;