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
import { plans } from "@/lib/Prices";

type ArtworkPage = PageObjectResponse & { properties: ArtworkProperties };

interface ArtworksResponse extends QueryDatabaseResponse {
    results: ArtworkPage[];
}

const meta = {
    title: "Artworks | Exclusive Collage Collection",
    description: "Explore a captivating collection of unique artwork collages blending creativity and storytelling. Discover handmade designs crafted with intricate details by Eyad Farah.",
    url: "/artworks",
};

const siteUrl = process.env.NEXT_PUBLIC_DOMAIN_URL || "https://designs-by-eyad.vercel.app";

export const metadata: Metadata = {
    title: meta.title,
    description: meta.description,
    alternates: { canonical: meta.url },
    openGraph: {
        title: meta.title,
        description: meta.description,
        url: meta.url,
        type: "website",
    },
};

export const revalidate = 1;

export default async function Artwork() {
    const artworks = (await fetchArtworks()) as ArtworksResponse;

    return (
        <main className="min-h-screen">
            {/* --- Hero Section with Masonry Preview --- */}
            <section className="relative pt-24 pb-12 overflow-hidden">
                <div className="max-w-7xl mx-auto px-6 mb-16">
                    <H1>ArtworksPage.title</H1>
                </div>

                <div className="max-w-7xl mx-auto px-6">
                    <div className="columns-1 sm:columns-2 lg:columns-3 gap-6 relative z-10">
                        {artworks.results.slice(0, 6).map((artwork: ArtworkPage) => {
                            const name = artwork.properties.Name.title[0]?.plain_text || "Untitled";
                            const imageUrl = artwork.properties.Image.files[0].external?.url || artwork.properties.Image.files[0].file?.url;
                            
                            if (!imageUrl) return null;

                            return (
                                <div 
                                    key={artwork.id} 
                                    className="mb-6 break-inside-avoid group cursor-pointer relative overflow-hidden rounded-[2rem] border border-white/5 bg-neutral-900"
                                >
                                    <Image
                                        className="w-full h-auto transition-transform duration-700 ease-out group-hover:scale-110"
                                        alt={name}
                                        src={imageUrl}
                                        width={600}
                                        height={800}
                                        priority
                                    />
                                    {/* Subtle Overlay on Hover */}
                                    <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-end p-8">
                                        <p className="text-white font-bold text-xl translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                                            {name}
                                        </p>
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                </div>

                {/* The "Fade Out" effect at the bottom of the artwork grid */}
                <div className="absolute bottom-0 left-0 right-0 h-64 bg-gradient-to-t from-background to-transparent z-20 pointer-events-none" />
            </section>

            {/* --- Pricing Section --- */}
            <section className="py-20 bg-background relative z-30">
                <div className="max-w-7xl mx-auto px-6">
                   <ArtworkPrice />
                </div>
            </section>

            {/* --- Structured Data (SEO) --- */}
            <Script id="artwork-schema" type="application/ld+json">
                {JSON.stringify(
                    artworks.results.map((artwork: ArtworkPage) => {
                        const name = artwork.properties.Name.title[0]?.plain_text || "Untitled";
                        const imageUrl = artwork.properties.Image.files[0].external?.url || artwork.properties.Image.files[0].file?.url;
                        if (!imageUrl) return null;
                        return {
                            "@context": "https://schema.org/",
                            "@type": "VisualArtwork",
                            "name": name,
                            "image": imageUrl,
                            "creator": {
                                "@type": "Person",
                                "name": "Eyad Farah"
                            },
                            "publisher": {
                                "@type": "Organization",
                                "name": "Designs By Eyad"
                            }
                        };
                    }).filter(Boolean)
                )}
            </Script>
        </main>
    );
}