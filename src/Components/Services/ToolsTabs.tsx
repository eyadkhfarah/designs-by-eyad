"use client";

import React, { useState } from "react";
import { useTranslations } from "next-intl";
import {
  TbBrandFigma,
  TbBrandFramer,
  TbBrandFlutter,
  TbBrandNextjs,
  TbBrandReact,
  TbBrandReactNative,
  TbBrandSvelte,
  TbVectorBezier,
} from "react-icons/tb";
import { RiCodeLine } from "react-icons/ri";
import H2 from "../TranslationTags/H2";

const designTools = [
  { icon: <TbBrandFigma className="text-2xl" />, label: "Figma" },
  { icon: <TbBrandFramer className="text-2xl" />, label: "Framer" },
  { label: "Canva" },
  { label: "Adobe Photoshop" },
  { label: "Adobe Illustrator" },
];

const devTools = [
  { icon: <TbBrandNextjs className="text-2xl" />, label: "Next.js" },
  { icon: <TbBrandReact className="text-2xl" />, label: "React.js" },
  { icon: <TbBrandSvelte className="text-2xl" />, label: "SvelteKit" },
  { icon: <TbBrandReactNative className="text-2xl" />, label: "React Native" },
  { icon: <TbBrandFlutter className="text-2xl" />, label: "Flutter" },
];

export default function ToolsTabs() {
  const [toggle, setToggle] = useState<1 | 2>(1);
  const t = useTranslations();

  const tabButtonClass = (active: boolean) =>
    `${active ? "bg-primary text-black" : ""} tabs`;

  return (
    <section>
      <H2>H2.ToolsIUse</H2>

      <div className="w-full grid place-items-center">
        <div className="bg-dark flex lg:w-fit w-full font-bold justify-center items-center p-1 rounded-full">
          <button
            onClick={() => setToggle(1)}
            className={tabButtonClass(toggle === 1)}
            aria-pressed={toggle === 1}
          >
            <TbVectorBezier className="text-2xl" />
            <span className="lg:block hidden font-bold">
              {t("Span.Design")}
            </span>
          </button>
          <button
            onClick={() => setToggle(2)}
            className={tabButtonClass(toggle === 2)}
            aria-pressed={toggle === 2}
          >
            <RiCodeLine className="text-2xl" />
            <span className="lg:block hidden font-bold">
              {t("Span.Development")}
            </span>
          </button>
        </div>

        {toggle === 1 && (
          <ul className="lg:flex justify-center w-full my-12 gap-6">
            {designTools.map((tool, index) => (
              <li key={index} className="skills">
                {tool.icon} {tool.label}
              </li>
            ))}
          </ul>
        )}

        {toggle === 2 && (
          <ul className="lg:flex justify-center w-full my-12 gap-6">
            {devTools.map((tool, index) => (
              <li key={index} className="skills">
                {tool.icon} {tool.label}
              </li>
            ))}
          </ul>
        )}
      </div>
    </section>
  );
}
