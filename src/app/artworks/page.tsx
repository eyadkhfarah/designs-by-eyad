import Image from "next/image";
import { Metadata } from "next";
import { fetchArtworks } from "@/lib/notion";
import { QueryDatabaseResponse, PageObjectResponse } from "@notionhq/client/build/src/api-endpoints";

// Define the expected artwork properties from Notion
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

// Define a custom response type for our artworks query
interface ArtworksResponse extends QueryDatabaseResponse {
  results: (PageObjectResponse)[];
}

// Type guard to ensure a page is an ArtworkPage
function isArtworkPage(page: PageObjectResponse): page is ArtworkPage {
  const props = page.properties;
  return (
    "Name" in props &&
    "Image" in props &&
    Array.isArray((props as any).Name?.title) &&
    Array.isArray((props as any).Image?.files)
  );
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
  // Fetch the raw artworks response
  const rawResponse: ArtworksResponse = await fetchArtworks();

  // Filter out only the pages that match our ArtworkPage structure
  const artworks: ArtworkPage[] = rawResponse.results.filter(isArtworkPage);

  return (
    <section>
      <h1>Artworks</h1>
      {/* Mosaic grid layout using CSS columns */}
      <div className="columns-1 sm:columns-2 lg:columns-3 gap-4">
        {artworks.map((artwork) => {
          const name =
            artwork.properties.Name.title[0]?.plain_text || "Untitled";
          const imageUrl = artwork.properties.Image.files[0].external?.url;
          // Skip rendering if no image URL is found
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
    </section>
  );
}
