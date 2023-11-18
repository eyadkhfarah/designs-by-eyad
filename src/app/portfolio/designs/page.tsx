import type { Metadata } from "next/types";
import React from "react";

export const metadata: Metadata = {
  title: "Graphic Design",
  description: "Checkout to my design projects either on social media design or brand identity projects",
};

export default function Designs() {
  return (
    <>
      <section className="lg:px-28 p-10 grid gap-8">
        <h1 className="lg:text-[8rem] md:text-[5rem] text-[3rem] w-fit">
          Designs
        </h1>

        <div className="grid lg:grid-cols-2 gap-6">
          
        </div>
      </section>
    </>
  );
}
