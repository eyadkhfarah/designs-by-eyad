"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import faqData from '@/lib/faqData';
import { RiArrowDownLine, RiArrowUpLine } from "react-icons/ri";
import { marked } from "marked";
import { cn } from "@/lib/utils";

const faqItemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
  exit: { opacity: 0, y: -20 }
};

const chevronVariants = {
  open: { rotate: 180 },
  closed: { rotate: 0 }
};

const FAQSection: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleAnswer = (index: number) => {
    setOpenIndex(prev => prev === index ? null : index);
  };

  return (
    <>
      
      <div className="space-y-4">
        {faqData.map((item, index) => (
          <motion.div
            key={index}
            layout
            variants={faqItemVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
            transition={{ duration: 0.3, delay: index * 0.1 }}
            className="rounded-3xl shadow-sm overflow-hidden bg-dark"
          >
            <motion.button
              layout
              onClick={() => toggleAnswer(index)}
              className={cn("md:w-4xl w-full flex justify-between text-white hover:text-dark rounded-3xl md:max-w-4xl transition-all ease-in-out duration-300 cursor-pointer items-center hover:bg-primary group px-6 py-4 text-left text-lg font-bold focus:outline-none", openIndex === index && "bg-primary text-dark")}
              aria-expanded={openIndex === index}
              aria-controls={`answer-${index}`}
              whileTap={{ scale: 0.98 }}
            >
              <span className="pr-4">{item.question}</span>
              <motion.span
                variants={chevronVariants}
                animate={openIndex === index ? "open" : "closed"}
                transition={{ duration: 0.2 }}
              >
                <RiArrowDownLine className={cn("w-5 h-5 text-primary group-hover:text-dark transition-all ease-in-out duration-300", openIndex === index && "text-dark")} />
              </motion.span>
            </motion.button>

            <AnimatePresence initial={false}>
              {openIndex === index && (
                <motion.div
                  layout
                  id={`answer-${index}`}
                  initial={{ opacity: 0, height: 0 }}
                  animate={{
                    opacity: 1,
                    height: "auto",
                    transition: { type: "spring", mass: 0.3, stiffness: 50 }
                  }}
                  exit={{
                    opacity: 0,
                    height: 0,
                    transition: { duration: 0.2 }
                  }}
                  className="px-6 py-4 text-white bg-dark"
                >
                  <p  dangerouslySetInnerHTML={{ __html: marked(item.answer) }} className="leading-relaxed"></p>
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>
        ))}
      </div>
    </>
  );
};

export default FAQSection;

