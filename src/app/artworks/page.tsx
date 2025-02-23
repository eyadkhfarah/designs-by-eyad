import Image from "next/image";
import { Metadata } from "next";
import { fetchArtworks } from "@/lib/notion";

const meta = {
  title: "Artworks",
  description:
    "Explore a captivating collection of unique artwork collages blending creativity and storytelling. Discover handmade designs crafted with intricate details, vibrant colors, and inspiring themes that elevate your space. Perfect for art lovers and collectors alike!",
  url: "/artworks",
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

// Revalidate this page every 1 second
export const revalidate = 1;

export default async function Artwork() {
  const artworks = await fetchArtworks();

  return (
    <section>
      <h1>Artworks</h1>
      <div className="grid lg:grid-cols-3 grid-cols-1 gap-8">
        {artworks.results.map((artwork: any) => (
          <Image
            key={artwork.id || artwork.properties.Name.title[0].plain_text}
            className="rounded-3xl"
            alt={artwork.properties.Name.title[0].plain_text}
            src={artwork.properties.Image.files[0].external.url}
            width={500}
            height={250}
          />
        ))}
      </div>
    </section>
  );
}
