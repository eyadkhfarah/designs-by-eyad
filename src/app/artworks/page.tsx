import Image from "next/image";
import { Metadata } from "next";
import { fetchArtworks } from "@/lib/notion";
import {
  QueryDatabaseResponse,
  PageObjectResponse,
} from "@notionhq/client/build/src/api-endpoints";
import { ArtworkProperties } from "@/types/notionType";
import Script from "next/script";
import H1 from "@/Components/TranslationTags/H1";
import ArtworkPrice from "@/Components/Pricing/ArtworkPrice";

// Combine Notion's PageObjectResponse with our custom properties
type ArtworkPage = PageObjectResponse & { properties: ArtworkProperties };

// Define the expected shape of the artworks response
interface ArtworksResponse extends QueryDatabaseResponse {
  results: ArtworkPage[];
}

const meta = {
  title: "Artworks",
  description:
    "Explore a captivating collection of unique artwork collages blending creativity and storytelling. Discover handmade designs crafted with intricate details, vibrant colors, and inspiring themes that elevate your space. Perfect for art lovers and collectors alike!",
  url: "/artworks",
};

const siteUrl =
  process.env.NEXT_PUBLIC_DOMAIN_URL || "https://designs-by-eyad.vercel.app";

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
  const artworks = (await fetchArtworks()) as ArtworksResponse;

  return (
    <>
      <section className="relative">
        <H1>ArtworksPage.title</H1>

        <div className="columns-1 sm:columns-2 lg:columns-3 gap-4 relative z-10">
          {artworks.results.slice(0, 6).map((artwork: ArtworkPage) => {
            const name =
              artwork.properties.Name.title[0]?.plain_text || "Untitled";
            const imageUrl = artwork.properties.Image.files[0].external?.url;
            if (!imageUrl) return null;

            return (
              <div key={artwork.id} className="mb-4 break-inside-avoid">
                <Image
                  className="rounded-3xl object-cover"
                  alt={name}
                  src={imageUrl}
                  width={500}
                  height={250}
                />
              </div>
            );
          })}
        </div>

        {/* Gradient layer under the artworks */}
        <div className="absolute bottom-0 left-0 right-0 w-full h-1/2 md:from-30% from-10% bg-gradient-to-t from-neutral-950 to-transparent z-50 pointer-events-none" />
      </section>

      <section>
        <ArtworkPrice />
      </section>
      <Script type="application/ld+json">
        {JSON.stringify(
          artworks.results
            .map((artwork: ArtworkPage) => {
              const name =
                artwork.properties.Name.title[0]?.plain_text || "Untitled";
              const imageUrl = artwork.properties.Image.files[0].external?.url;
              if (!imageUrl) return null;
              return {
                "@context": "https://schema.org/",
                "@type": "ImageObject",
                contentUrl: imageUrl,
                license: `${siteUrl}/terms`,
                acquireLicensePage: `${siteUrl}/how-to-use-my-images`,
                creditText: name,
                creator: {
                  "@type": "Person",
                  name: "Eyad Farah",
                },
                copyrightNotice: "Designs By Eyad",
              };
            })
            .filter(Boolean)
        )}
      </Script>
    </>
  );
}
