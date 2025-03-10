"use client"
import { useTranslations } from 'next-intl';

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
import H2 from '../TranslationTags/H2';

export default function ToolsTabs() {
  const [toggle, setToggle] = useState(1);

  const updateToggle = (id: React.SetStateAction<number>) => {
    setToggle(id);
  };

  const t = useTranslations();

  return (
    <section>
      <H2>H2.ToolsIUse</H2>

      <div className="w-full grid place-items-center">
        <div className="bg-dark flex lg:w-fit w-full justify-center items-center p-1 rounded-full">
          <button
            onClick={() => updateToggle(1)}
            className={toggle === 1 ? "bg-primary text-black tabs" : "tabs"}
          >
            <TbVectorBezier className="text-2xl" />
            <span className="lg:block hidden">{t("Span.Design")}</span>
          </button>
          <button
            onClick={() => updateToggle(2)}
            className={toggle === 2 ? "bg-primary text-black tabs" : "tabs"}
          >
            <RiCodeLine className="text-2xl" />
            <span className="lg:block hidden">{t("Span.Development")}</span>
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
    </section>
  );
}
