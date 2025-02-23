import Image from "next/image";
import { Metadata } from "next";
import { fetchArtworks } from "@/lib/notion";
import { QueryDatabaseResponse, PageObjectResponse } from "@notionhq/client/build/src/api-endpoints";

// Define interfaces for the artwork properties returned by Notion
interface ArtworkProperties {
  Name: {
    id: string;
    type: "title";
    title: Array<{
      type: "text";
      text: {
        content: string;
        link: string | null;
      };
      plain_text: string;
      href: string | null;
    }>;
  };
  Image: {
    id: string;
    type: "files";
    files: Array<{
      type: "external" | "file";
      name: string;
      external?: {
        url: string;
      };
      file?: {
        url: string;
        expiry_time: string;
      };
    }>;
  };
}

// Combine Notion's PageObjectResponse with our custom properties
type ArtworkPage = PageObjectResponse & { properties: ArtworkProperties };

// Define the expected shape of the artworks response from Notion
interface ArtworksResponse extends QueryDatabaseResponse {
  results: ArtworkPage[];
}

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
  const artworks: ArtworksResponse = await fetchArtworks();

  return (
    <section>
      <h1>Artworks</h1>
      <div className="grid lg:grid-cols-3 grid-cols-1 gap-8">
        {artworks.results.map((artwork: ArtworkPage) => {
          const name =
            artwork.properties.Name.title[0]?.plain_text || "Untitled";
          const imageUrl = artwork.properties.Image.files[0].external?.url;
          // If no image URL exists, we skip rendering this artwork
          if (!imageUrl) return null;
          return (
            <Image
              key={artwork.id}
              className="rounded-3xl"
              alt={name}
              src={imageUrl}
              width={500}
              height={250}
            />
          );
        })}
      </div>
    </section>
  );
}
