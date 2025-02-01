import ProCard from "@/Components/Portfolio/ProCard";
import { allProtoDesigns } from "contentlayer/generated";
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

  return (
    <>
      <section>
        <h1>
          Designs
        </h1>

        <div className="grid lg:grid-cols-2 gap-6">
          {doc.sort((a, b) =>
            new Date(a.Date).getTime() - new Date(b.Date).getTime()
          ).map((website) => (
            <ProCard key={website._id} data={{ ...website, Protype: website.Protype ?? '' }} />
          ))}
        </div>
      </section>
    </>
  );
}
