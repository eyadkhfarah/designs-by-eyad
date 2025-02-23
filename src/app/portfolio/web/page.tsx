import ProCard from "@/Components/Portfolio/ProCard";
import React from "react";
import { allProtoWebs } from "contentlayer/generated";
import type { Metadata } from "next/types";
import Script from "next/script";

const meta = {
  title: "Web Designs",
  description: "Explore my web portfolio showcasing graphic design projects, including brand identity and social media designs that resonate with Egyptian audiences.",
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
      <section className="mx-auto lg:max-w-7xl md:max-w-2xl max-w-xs p-10 grid gap-8">
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

      <Script type="application/ld+json">
        {`
          {
            "@context": "https://schema.org",
            "@type": "CollectionPage",
            "name": "Web",
            "mainEntity": {
              "@type": "ItemList",
              "itemListElement": [
              ${doc.map((web, index) => (
                `
                {
                  "@type": "ListItem",
                  "position": ${index + 1},
                  "url": "${siteUrl + web.slug}",
                  "name": "${web.title}"
                },
                `
              )).join(','
              )}
              ]
            }
          }
        `}
      </Script>
    </>
  );
}
