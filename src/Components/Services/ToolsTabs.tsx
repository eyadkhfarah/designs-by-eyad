"use client";

import Image from "next/image";
import React, { useState } from "react";
import { RiCodeLine } from "react-icons/ri";
import {
  TbBrandFigma,
  TbBrandFlutter,
  TbBrandFramer,
  TbBrandNextjs,
  TbBrandReact,
  TbBrandReactNative,
  TbBrandSvelte,
  TbVectorBezier,
} from "react-icons/tb";

export default function ToolsTabs() {
  const [toggle, setToggle] = useState(1);

  const updateToggle = (id: React.SetStateAction<number>) => {
    setToggle(id);
  };

  return (
    <div className="w-full grid place-items-center">
      <div className="bg-gray-900 flex lg:w-fit w-full justify-center items-center p-1 rounded-full">
        <button
          onClick={() => updateToggle(1)}
          className={toggle === 1 ? "bg-yellow-500 text-black tabs" : "tabs"}
        >
          <TbVectorBezier className="text-2xl" />
          <span className="lg:block hidden">Design</span>
        </button>
        <button
          onClick={() => updateToggle(2)}
          className={toggle === 2 ? "bg-yellow-500 text-black tabs" : "tabs"}
        >
          <RiCodeLine className="text-2xl" />
          <span className="lg:block hidden">Development</span>
        </button>
      </div>

      <ul
        className={
          toggle === 1 ? "lg:flex justify-center w-full my-12 gap-6" : "hidden"
        }
      >
        <li className="skills">
          <TbBrandFigma className="text-2xl" /> Figma
        </li>
        <li className="skills">
          <TbBrandFramer className="text-2xl" /> Framer
        </li>
        <li className="skills">Canva</li>
        <li className="skills">Adobe Photoshop</li>
        <li className="skills">Adobe Illustrator</li>
      </ul>

      <ul
        className={
          toggle === 2 ? "lg:flex justify-center w-full my-12 gap-6" : "hidden"
        }
      >
        <li className="skills">
          <TbBrandNextjs className="text-2xl" />
          Next.js
        </li>
        <li className="skills">
          <TbBrandReact className="text-2xl" /> React.js
        </li>
        <li className="skills">
          <TbBrandSvelte className="text-2xl" /> SvelteKit
        </li>
        <li className="skills">
          <TbBrandReactNative className="text-2xl" /> React Native
        </li>
        <li className="skills">
          <TbBrandFlutter className="text-2xl" /> Flutter
        </li>
      </ul>
    </div>
  );
}
