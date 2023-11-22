import ProCard from "@/Components/Portfolio/ProCard";
import { allProtoDesigns } from "contentlayer/generated";
import type { Metadata } from "next/types";
import React from "react";

export const metadata: Metadata = {
  title: "Graphic Design",
  description: "Checkout to my design projects either on social media design or brand identity projects",
  openGraph: {
    title: "Graphic Design",
    description: "Checkout to my design projects either on social media design or brand identity projects",
  }
};

const getPro = async () => {
  const doc = allProtoDesigns;
  return doc;
}

export default async function Designs() {
  const doc = await getPro();
  return (
    <>
      <section className="lg:px-28 p-10 grid gap-8">
        <h1 className="lg:text-[8rem] md:text-[5rem] text-[3rem] w-fit">
          Designs
        </h1>

        <div className="grid lg:grid-cols-2 gap-6">
          {doc.map((website) => (
            <>
              <ProCard key={website._id} data={website} />
            </>
          ))}
        </div>
      </section>
    </>
  );
}
