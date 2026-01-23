import faqData from "@/lib/faqData";
import { Metadata } from "next";
import removeMarkdown from "remove-markdown";
import React from "react";
import FAQCard from "@/Components/Client/FQACard";
import Script from "next/script";

const meta = {
  title: "FAQ | Common Questions - Designs By Eyad",
  description:
    "Find answers to common questions about brand identity, design process, project timelines, and web services in Egypt. Get clarity on how we work together.",
  url: "/fqa",
};

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

export default function FqaPage() {
  return (
    <main className="min-h-screen pt-24 pb-20 relative overflow-hidden">
      {/* Background Grid Decoration */}
      <div
        className="absolute inset-0 z-0 opacity-[0.03] pointer-events-none"
        style={{
          backgroundImage:
            "linear-gradient(#fff 1px, transparent 1px), linear-gradient(90deg, #fff 1px, transparent 1px)",
          backgroundSize: "60px 60px",
        }}
      />

      <section className="relative z-10 max-w-7xl mx-auto px-6">
        <header className="flex flex-col items-center text-center mb-20">
          <span className="text-primary font-mono tracking-[0.4em] uppercase text-xs mb-4">
            Assistance
          </span>
          <h1 className="text-7xl md:text-[10rem] font-black leading-none tracking-tighter uppercase mb-8">
            FAQ<span className="text-primary">.</span>
          </h1>
          <p className="max-w-2xl text-neutral-400 text-lg md:text-xl leading-relaxed">
            Explore our comprehensive guide to brand identity, web design
            processes, and project logistics. Everything you need to know before
            we start creating.
          </p>
        </header>

        <div className="max-w-4xl mx-auto">
          {/* Main FAQ Content Container */}
          <div className="bg-neutral-900/40 border border-white/5 rounded-[3rem] p-6 md:p-12 backdrop-blur-sm">
            <div
              className="prose prose-lg prose-invert max-w-none 
                            prose-a:text-primary prose-a:no-underline hover:prose-a:underline
                            prose-strong:text-white prose-strong:font-bold"
            >
              <FAQCard />
            </div>
          </div>

          {/* Bottom Call to Action */}
          <div className="mt-16 text-center bg-primary/5 border border-primary/10 rounded-[2rem] p-10">
            <h2 className="text-2xl font-bold mb-4 uppercase tracking-tight">
              Still have questions?
            </h2>
            <p className="text-neutral-400 mb-8">
              If your question isn't listed here, feel free to reach out
              directly.
            </p>
            <a
              href="/contact"
              className="inline-block bg-primary text-black font-black uppercase tracking-widest px-10 py-4 rounded-xl hover:scale-105 transition-transform"
            >
              Ask me anything
            </a>
          </div>
        </div>
      </section>

      {/* --- Structured Data for SEO --- */}
      <Script
        type="application/ld+json"
        id="faq-schema"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            mainEntity: faqData.map((entry) => ({
              "@type": "Question",
              name: entry.question,
              acceptedAnswer: {
                "@type": "Answer",
                text: removeMarkdown(entry.answer),
              },
            })),
          }),
        }}
      />
    </main>
  );
}
