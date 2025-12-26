import ProCard from "@/Components/Portfolio/ProCard";
import { allProtoDesigns } from "contentlayer/generated";
import Script from "next/script";
import type { Metadata } from "next/types";

const meta = {
  title: "Graphic Design Portfolio",
  description: "Discover my portfolio of brand identity and social media design projects. See how I help Egyptian businesses create compelling online presences.",
  url: "/portfolio/designs",
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
      alt: "Graphic Designs By Eyad",
    },
  },
};

export default async function Designs() {
  // Sort by date: Newest first
  const doc = [...allProtoDesigns].sort((a, b) =>
    new Date(b.Date ?? '').getTime() - new Date(a.Date ?? '').getTime()
  );

  const siteUrl = process.env.NEXT_PUBLIC_DOMAIN_URL || "https://designs-by-eyad.vercel.app";

  return (
    <main className="min-h-screen pt-32 pb-20">
      {/* --- Page Header --- */}
      <section className="max-w-7xl mx-auto px-6 mb-16 border-b border-white/5 pb-12">
        <div className="flex flex-col gap-4">
          <span className="text-primary font-mono tracking-[0.3em] uppercase text-sm">
            Visual Identities
          </span>
          <h1 className="lg:text-[10rem] md:text-[7rem] text-[4rem] font-black leading-[0.8] tracking-tighter uppercase">
            Designs<span className="text-primary">.</span>
          </h1>
        </div>
      </section>

      {/* --- Portfolio Grid --- */}
      <section className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {doc.map((design, index) => (
            <div 
              key={design._id} 
              // Featured item logic: The latest design spans two columns
              className={index === 0 ? "md:col-span-2" : "col-span-1"}
            >
              <ProCard 
                data={{ 
                  ...design, 
                  Protype: design.Protype ?? '', 
                  Date: design.Date ?? '' 
                }} 
              />
            </div>
          ))}
        </div>
      </section>

      {/* --- SEO Structured Data --- */}
      <Script
        id="design-portfolio-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "CollectionPage",
            "name": "Graphic Design Portfolio - Designs By Eyad",
            "description": meta.description,
            "url": `${siteUrl}${meta.url}`,
            "mainEntity": {
              "@type": "ItemList",
              "itemListElement": doc.map((design, index) => ({
                "@type": "ListItem",
                "position": index + 1,
                "url": `${siteUrl}${design.slug}`,
                "name": design.title,
              })),
            },
          }),
        }}
      />
    </main>
  );
}
