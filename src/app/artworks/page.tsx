import React from "react";
import Image from "next/image";
import { Metadata } from "next";
import { fetchArtworks } from "@/lib/notion";

const meta = {
    title: "Artworks",
    description: "Explore a captivating collection of unique artwork collages blending creativity and storytelling. Discover handmade designs crafted with intricate details, vibrant colors, and inspiring themes that elevate your space. Perfect for art lovers and collectors alike!",
    url: "/artworks",
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
const Artwork: React.FC = async () => {
    const artworks = await fetchArtworks()

    console.log(artworks.results.map((artwork: any) => artwork.properties.Name.title[0].plain_text))

    return (
        <section>
            <h1 className="lg:text-[8rem] md:text-[5rem] text-[2rem] w-fit">
                Artworks
            </h1>
            <div className="grid lg:grid-cols-3">
                {/* {artworks.results.map((artwork: any) => (
                    <></>
                ))} */}
            </div>
            <p>This is the Artwork component.</p>
        </section>
    );
};

export default Artwork;