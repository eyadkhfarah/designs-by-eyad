"use client";

import { useState } from "react";
import faqData from '@/lib/faqData';
import { motion, AnimatePresence } from "framer-motion";
import { RiArrowDownLine, RiArrowUpLine } from "react-icons/ri";
import { marked } from "marked";
import { cn } from "@/lib/utils";

const FAQCard: React.FC = ({}) => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleAnswer = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
      <>
        {faqData.map((item, index) => (
          <div
            key={index}
            className="bg-dark group w-full hover:text-dark hover:bg-primary rounded-3xl transition-all ease-in-out duration-300"
          >
            {/* Question Button */}
            <button
              onClick={() => toggleAnswer(index)}
              className={cn("w-full flex justify-between text-white hover:text-dark rounded-3xl md:max-w-4xl transition-all ease-in-out duration-300 cursor-pointer items-center px-6 py-4 text-left text-lg font-bold focus:outline-none", openIndex === index && "bg-primary text-dark")}
            >
              {item.question}

              <RiArrowDownLine className={cn("w-5 h-5 text-primary group-hover:text-dark transition-all ease-in-out duration-300", openIndex === index && "rotate-180 text-dark")} />
            </button>

            {/* Answer with Animation */}
            <AnimatePresence initial={false}>
              {openIndex === index && (
                <motion.div
                  key="answer"
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: "auto", opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.3, ease: "easeInOut" }}
                  className="overflow-hidden md:max-w-4xl w-full rounded-b-3xl px-6 py-4 text-white bg-dark"
                >
                  <p className="w-full" dangerouslySetInnerHTML={{ __html: marked(item.answer) }}></p>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        ))}
      </>
  );
};

export default FAQCard;
