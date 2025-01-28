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
        <h1 className="lg:text-[8rem] md:text-[5rem] text-[3rem] w-fit">
          Designs
        </h1>

        <div className="grid lg:grid-cols-2 gap-6">
          {doc.map((website) => (
            <ProCard key={website._id} data={{ ...website, Protype: website.Protype ?? '' }} />
          ))}
        </div>
      </section>
    </>
  );
}
