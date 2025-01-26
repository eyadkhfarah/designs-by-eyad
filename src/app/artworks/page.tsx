import React from "react";
import Image from "next/image";
import { Metadata } from "next";
import ToolsTabs from "@/Components/Services/ToolsTabs";
import { RiGithubFill } from "react-icons/ri";
import PrimaryBtn from "@/Components/Buttons/PrimaryBtn";

export const metadata: Metadata = {
    title: "Artworks",
    description: "Explore a captivating collection of unique artwork collages blending creativity and storytelling. Discover handmade designs crafted with intricate details, vibrant colors, and inspiring themes that elevate your space. Perfect for art lovers and collectors alike!",
    alternates: {
        canonical: "/artworks",
    },
    openGraph: {
        title: "Artworks",
        description: "Explore a captivating collection of unique artwork collages blending creativity and storytelling. Discover handmade designs crafted with intricate details, vibrant colors, and inspiring themes that elevate your space. Perfect for art lovers and collectors alike!",
        url: "/artworks",
    },
};
const Artwork: React.FC = () => {
    return (
        <div>
            <h1>Artwork</h1>
            <p>This is the Artwork component.</p>
        </div>
    );
};

export default Artwork;