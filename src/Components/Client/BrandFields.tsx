"use client"

import {
  motion,
  useScroll,
  useTransform
} from "framer-motion";

import { useRef } from "react";

const Fields = [
  "Mobile App",
  "Clinic",
  "News and Publication",
  "Government",
  "Travel",
  "Marketing Agencies",
  "Tech",
  "Beverages",
  "Restaurants",
  "Coffee shops",
  "Food retailers",
  "Furniture",
  "Real estate",
  "Education",
  "Universities",
  "Beauty",
  "Fashion",
  "Magazines",
  "E-commerce",
  "Influencers",
  "Youtubers",
  "Podcast",
  "Cosmetics",
  "Beauty",
  "Perfumes",
  "Automobile"
];

export default function BrandFields() {
  // Initialize container ref to null and type it as an HTMLDivElement
  const container = useRef<HTMLDivElement>(null);
  
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start end", "end start"]
  });
  
  // Compute transform value (and then use it for animation)
  const x = useTransform(scrollYProgress, [0, 1], [-350, 3050]);
  const xReverse = useTransform(scrollYProgress, [0, 1], [350, -3050]);
  
  return (
    <>
      <div ref={container} className="bg-primary p-2 rounded-4xl text-4xl w-full overflow-hidden text-dark font-bold uppercase">
        <motion.ul style={{ x: xReverse }} className="flex items-center relative">
          {Fields.map((field, index) => (
            <li key={index} className="whitespace-nowrap mx-10">{field}</li>
          ))}
        </motion.ul>
      </div>
      <div className="bg-primary p-2 rounded-4xl text-4xl w-full overflow-hidden text-dark font-bold uppercase">
        <motion.ul style={{ x }} className="flex justify-end items-center relative">
          {Fields.map((field, index) => (
            <li key={index} className="whitespace-nowrap mx-10">{field}</li>
          ))}
        </motion.ul>
      </div>
    </>
  );
}
