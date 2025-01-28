import ProtImages from "@/Components/Portfolio/ProtImages";
import { Metadata } from "next";
import React from "react";

const meta = {
  title: "Protfolio",
  description: "Browse my portfolio to see successful brand identity and social media design projects for businesses across Egypt. See how my designs drive engagement and growth.",
  url: "/protfolio",
}

export const metadata: Metadata = {
  title: meta.title,
  description: meta.description,
  alternates: {
    canonical: meta.url,
  },
  openGraph: {
    title: meta.title,
    description: meta.description,
    url: meta.url,
  },
};

export default function Protfolio() {
  return (
    <>
      <section>
        <h1 className="lg:text-[8rem] md:text-[5rem] text-[2rem] w-fit">
          Profolio
        </h1>
        <ProtImages />
      </section>

    </>
  );
}
