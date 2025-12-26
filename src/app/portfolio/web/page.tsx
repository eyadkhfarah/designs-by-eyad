import ProCard from "@/Components/Portfolio/ProCard";
import React from "react";
import { allProtoWebs } from "contentlayer/generated";
import type { Metadata } from "next/types";
import Script from "next/script";

const meta = {
  title: "Web Design Portfolio",
  description: "Explore my web design collection showcasing high-performance websites and user interfaces designed to elevate brand identity.",
  url: "/portfolio/web",
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
    images: {
      url: "/main-og.png",
      width: 1800,
      height: 1600,
      alt: "Web Designs By Eyad",
    },
  },
};

export default async function Web() {
  // Sort by date: Newest first
  const doc = [...allProtoWebs].sort((a, b) =>
    new Date(b.Date ?? '').getTime() - new Date(a.Date ?? '').getTime()
  );

  const siteUrl = process.env.NEXT_PUBLIC_DOMAIN_URL || "https://designs-by-eyad.vercel.app";

  return (
    <main className="min-h-screen pt-32 pb-20">
      {/* --- Page Header --- */}
      <section className="max-w-7xl mx-auto px-6 mb-16 border-b border-white/5 pb-12">
        <div className="flex flex-col gap-4">
          <span className="text-primary font-mono tracking-[0.3em] uppercase text-sm">
            Digital Interfaces
          </span>
          <h1 className="lg:text-[10rem] md:text-[7rem] text-[4rem] font-black leading-[0.8] tracking-tighter uppercase">
            Web<span className="text-primary">.</span>
          </h1>
        </div>
      </section>

      {/* --- Portfolio Grid --- */}
      <section className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {doc.map((website, index) => (
            <div 
              key={website._id} 
              // First project takes up full width for visual impact
              className={index === 0 ? "md:col-span-2" : "col-span-1"}
            >
              <ProCard 
                data={{ 
                  ...website, 
                  Protype: website.Protype ?? '', 
                  Date: website.Date ?? '' 
                }} 
              />
            </div>
          ))}
        </div>
      </section>

      {/* --- Structured Data --- */}
      <Script
        id="web-portfolio-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "CollectionPage",
            "name": "Web Portfolio - Designs By Eyad",
            "description": meta.description,
            "url": `${siteUrl}${meta.url}`,
            "mainEntity": {
              "@type": "ItemList",
              "itemListElement": doc.map((web, index) => ({
                "@type": "ListItem",
                "position": index + 1,
                "url": `${siteUrl}${web.slug}`,
                "name": web.title,
              })),
            },
          }),
        }}
      />
    </main>
  );
}
      alt: "Designs By Eyad",
    },
  },
};

const getPro = async () => {
  const doc = allProtoWebs;
  return doc;
};

export default async function Web() {
  const doc = await getPro();

  const siteUrl =
    process.env.NEXT_PUBLIC_DOMAIN_URL ||
    "https://designs-by-eyad.vercel.app";

  return (
    <>
      <section>
        <h1 className="lg:text-[8rem] md:text-[5rem] text-[3rem] w-fit">Web</h1>

        <div className="grid lg:grid-cols-2 gap-6">
          {doc.sort((a, b) =>
            new Date(b.Date ?? '').getTime() - new Date(a.Date ?? '').getTime()
          ).map((website) => (
            <>
              <ProCard key={website._id} data={{ ...website, Protype: website.Protype ?? '', Date: website.Date ?? '' }} />
            </>
          ))}
        </div>
      </section>

      <Script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "CollectionPage",
            "name": "Web",
            "mainEntity": {
              "@type": "ItemList",
              "itemListElement": doc.map((web, index) => ({
                "@type": "ListItem",
                "position": index + 1,
                "url": `${siteUrl + web.slug}`,
                "name": web.title,
              })),
            },
          }),
        }}
      />
    </>
  );
}
