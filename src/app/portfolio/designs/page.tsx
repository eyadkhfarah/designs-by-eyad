import ProCard from "@/Components/Portfolio/ProCard";
import { allProtoDesigns } from "contentlayer/generated";
import Script from "next/script";
import type { Metadata } from "next/types";

const meta = {
  title: "Graphic Design",
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
      alt: "Designs By Eyad",
    },
  },
};

const getPro = async () => {
  const doc = allProtoDesigns;
  return doc;
};

export default async function Designs() {
  const doc = await getPro();

  const siteUrl =
    process.env.NEXT_PUBLIC_DOMAIN_URL ||
    "https://designs-by-eyad.vercel.app";

  return (
    <>
      <section>
        <h1>
          Designs
        </h1>

        <div className="grid lg:grid-cols-2 gap-6">
          {doc.sort((a, b) =>
            new Date(b.Date).getTime() - new Date(a.Date).getTime()
          ).map((design) => (
            <ProCard key={design._id} data={{ ...design, Protype: design.Protype ?? '' }} />
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
              "itemListElement": doc.map((design, index) => ({
                "@type": "ListItem",
                "position": index + 1,
                "url": `${siteUrl + design.slug}`,
                "name": design.title,
              })),
            },
          }),
        }}
      />
    </>
  );
}
