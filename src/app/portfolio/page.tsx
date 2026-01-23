import ProtImages from "@/Components/Portfolio/ProtImages";
import { Metadata } from "next";
import React from "react";
import { motion } from "framer-motion";

const meta = {
  title: "Portfolio | Designs by Eyad",
  description: "Browse my portfolio to see successful brand identity and social media design projects for businesses across Egypt. See how my designs drive engagement and growth.",
  url: "/portfolio",
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
    type: "website",
  },
};

export default function Portfolio() {
  return (
    <main className="min-h-screen pt-20">
      {/* --- Portfolio Hero Section --- */}
      <section className="max-w-7xl mx-auto px-6 py-16 md:py-24 border-b border-white/5">
        <div className="flex flex-col gap-6">
          <span className="text-primary font-mono tracking-[0.3em] uppercase text-sm">
            Showcase
          </span>
          <h1 className="text-6xl md:text-8xl font-bold text-white tracking-tighter">
            Selected <br />
            <span className="text-primary">Works.</span>
          </h1>
          <p className="text-neutral-400 text-lg md:text-xl max-w-2xl leading-relaxed mt-4">
            A curated collection of digital experiences and visual identities 
            crafted to help brands stand out in a crowded market.
          </p>
        </div>
      </section>

      {/* --- Projects Grid Section --- */}
      <section className="max-w-7xl mx-auto px-6 py-20 md:py-32">
        <ProtImages />
      </section>

      {/* --- Bottom Call to Action (Optional) --- */}
      <section className="max-w-7xl mx-auto px-6 py-20 text-center border-t border-white/5">
        <h2 className="text-3xl font-bold text-white mb-6">Have a project in mind?</h2>
        <p className="text-neutral-400 mb-10">Let’s collaborate to build something extraordinary together.</p>
        {/* You can reuse your PrimaryBtn here if needed */}
      </section>
    </main>
  );
}