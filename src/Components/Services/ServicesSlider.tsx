"use client";

import {
  TbBrandAdobe,
  TbDeviceMobileCheck,
  TbMessage2Heart,
  TbPencilBolt,
  TbVectorBezier,
  TbWorldCode,
} from "react-icons/tb";

import { motion } from "framer-motion";
import React, { useRef, useState, useEffect } from "react";

import { Categories } from "@/lib/ServicesList";

interface Categories {
  name: String;
  desc: String;
  id: Number;
}

export default function ServicesSlider() {
  const [width, setWidth] = useState(0);
  const silder = React.useRef<HTMLDivElement>(null);

  // useEffect(()=> {
  //     // console.log(silder.current?.scrollHeight, silder.current?.scrollWidth)
  //     setWidth(silder.current?.scrollWidth - silder.current?.scrollHeight)
  // }, [])

  return (
    <motion.div ref={silder} className="cursor-grab mt-8 overflow-hidden">
      <motion.div
        drag="x"
        dragConstraints={{ right: 100, left: -300 }}
        className="translate-x-24 flex gap-9"
      >
        {Categories.map((category) => (
          <div
            key={category.id}
            className="services-card flex flex-col justify-center items-center w-72 h-64 pointer-events-none"
          >
            {(() => {
              switch (category.name) {
                case "Web Development":
                  return <TbWorldCode className="text-6xl text-primary" />;
                case "Social Media Design":
                  return <TbMessage2Heart className="text-6xl text-primary" />;
                case "Graphic Design":
                  return <TbVectorBezier className="text-6xl text-primary" />;
                case "UI/UX Design":
                  return <TbDeviceMobileCheck className="text-6xl text-primary" />;
                case "Photoshop":
                  return <TbBrandAdobe className="text-6xl text-primary" />;
                case "Logo Design":
                  return <TbPencilBolt className="text-6xl text-primary" />;
                default:
                  return null;
              }
            })()}
            <h3 className="text-xl text-center">{category.name}</h3>
          </div>
        ))}
      </motion.div>
    </motion.div>
  );
}
