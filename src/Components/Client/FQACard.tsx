"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import faqData from '@/lib/faqData';
import { RiArrowDownLine } from "react-icons/ri";
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
    <div className="flex flex-col gap-4 w-full max-w-4xl mx-auto">
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
            className={cn(
              "rounded-[2rem] overflow-hidden transition-all duration-500 border",
              isOpen 
                ? "bg-neutral-900 border-primary/30 shadow-[0_0_30px_-10px_rgba(229,254,0,0.1)]" 
                : "bg-neutral-900/40 border-white/5 hover:border-white/10"
            )}
          >
            <button
              onClick={() => toggleAnswer(index)}
              className="w-full flex justify-between items-center px-8 py-6 text-left group focus:outline-none"
              aria-expanded={isOpen}
              aria-controls={`answer-${index}`}
            >
              <span className={cn(
                "text-lg md:text-xl font-bold transition-colors duration-300",
                isOpen ? "text-primary" : "text-white group-hover:text-primary/80"
              )}>
                {item.question}
              </span>
              
              <div className={cn(
                "flex-shrink-0 ml-4 p-2 rounded-full border transition-all duration-500",
                isOpen 
                  ? "bg-primary border-primary rotate-180" 
                  : "bg-white/5 border-white/10"
              )}>
                <RiArrowDownLine className={cn(
                  "w-5 h-5 transition-colors duration-500",
                  isOpen ? "text-black" : "text-primary"
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
                  <div className="px-8 pb-8">
                    <div className="h-px w-full bg-white/5 mb-6" />
                    <div 
                      className="text-neutral-400 leading-relaxed text-lg prose-p:mb-4 last:prose-p:mb-0"
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