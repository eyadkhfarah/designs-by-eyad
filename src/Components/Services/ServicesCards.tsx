import { Categories } from "@/lib/ServicesList";
import React from "react";
import {
  TbBrandAdobe,
  TbDeviceMobileCheck,
  TbMessage2Heart,
  TbPencilBolt,
  TbVectorBezier,
  TbWorldCode,
} from "react-icons/tb";

export default function ServicesCards() {
  return (
    <div className="grid md:grid-cols-2 gap-9 mt-8">
      {Categories.map((category) => (
        <div key={category.id} className="services-card hover:scale-110">
          {category.name === "Web Development" ? (
            <TbWorldCode className="text-4xl text-yellow-500 " />
          ) : null || category.name === "Social Media Design" ? (
            <TbMessage2Heart className="text-4xl text-yellow-500" />
          ) : null || category.name === "Graphic Design" ? (
            <TbVectorBezier className="text-4xl text-yellow-500" />
          ) : null || category.name === "UI/UX Design" ? (
            <TbDeviceMobileCheck className="text-4xl text-yellow-500" />
          ) : null || category.name === "Photoshop" ? (
            <TbBrandAdobe className="text-4xl text-yellow-500" />
          ) : null || category.name === "Logo Design" ? (
            <TbPencilBolt className="text-4xl text-yellow-500" />
          ) : null}
          <div className="grid gap-3">
            <h3 className="text-xl">{category.name}</h3>
            <p>{category.desc}</p>
          </div>
        </div>
      ))}
    </div>
  );
}
