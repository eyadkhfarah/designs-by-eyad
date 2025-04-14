import faqData from "@/lib/faqData";
import { Metadata } from "next";
import removeMarkdown from 'remove-markdown';
import React from "react";
import FAQCard from "@/Components/Client/FQACard";
import Script from "next/script";

const meta = {
  title: "FQA",
  description:
    "Explore our comprehensive FAQ page to find answers to all your questions about our brand identity and web design services. Learn about our design process, project timelines, payment methods, and more. Get started with Designs By Eyad today!",
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
  },
};

export default function FqaPage() {
  return (
    <>
      <section>
        <div className="grid mb-8">
          <h1 className="text-center text-9xl leading-normal">FQA</h1>
          <p className="mx-auto lg:w-3xl text-center">
            Explore our comprehensive FAQ page to find answers to all your
            questions about our brand identity and web design services. Learn
            about our design process, project timelines, payment methods, and
            more.
          </p>
        </div>
        <div className="prose prose-lg prose-invert prose-li: mx-auto md:max-w-3xl space-y-4 prose-a:text-primary prose-a:no-underline prose-strong:font-bold">
          <FAQCard />
        </div>
      </section>

      <Script
        type="application/ld+json"
        id="json-ld-schema"
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
                // Removing markdown formatting might be beneficial if the text includes markdown syntax.
                text: removeMarkdown(entry.answer)
              },
            })),
          }),
        }}
      />
    </>
  );
}
