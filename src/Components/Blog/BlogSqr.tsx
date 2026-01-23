"use client";

import { NotionProps } from '@/types/notionType';
import Image from 'next/image';
import Link from 'next/link';
import { TbCalendarTime } from 'react-icons/tb';
import { motion } from 'framer-motion';

// Added isFeatured prop to handle the larger layout on the index page
interface BlogSqrProps extends NotionProps {
  isFeatured?: boolean;
}

export default function BlogSqr({ post, isFeatured = false }: BlogSqrProps) {
    const title = post.properties.Name.title[0]?.plain_text || "Untitled Post";
    const slug = post.properties.Slug.rich_text[0]?.plain_text;
    const subtitle = post.properties.Subtitle.rich_text[0]?.plain_text;
    const category = post.properties.Category.select?.name;
    const date = post.properties.Publication.date?.start;
    const imageUrl = post.properties.Thumbnail.files[0]?.file?.url || post.properties.Thumbnail.files[0]?.name;

    return (
        <motion.div
            whileHover={{ y: -8 }}
            transition={{ type: "spring", stiffness: 300, damping: 20 }}
            className="h-full"
        >
            <Link 
                className={`flex flex-col h-full bg-neutral-900/40 border border-white/5 rounded-[2.5rem] overflow-hidden hover:border-primary/40 transition-colors duration-500 group ${
                    isFeatured ? "md:flex-row md:items-stretch" : ""
                }`} 
                href={`/blog/${slug}`}
            >
                {/* --- Thumbnail Container --- */}
                <div className={`relative overflow-hidden ${isFeatured ? "md:w-1/2 min-h-[300px]" : "aspect-[16/10]"}`}>
                    <Image 
                        className="object-cover transition-transform duration-700 group-hover:scale-105" 
                        alt={title} 
                        src={imageUrl || "/placeholder.jpg"} 
                        fill={isFeatured} // Uses fill for the featured layout
                        width={isFeatured ? undefined : 1200} 
                        height={isFeatured ? undefined : 800} 
                    />
                    
                    {/* Category Badge */}
                    <div className="absolute left-6 top-6 bg-primary text-black font-black px-3 py-1 text-[10px] uppercase tracking-widest rounded-full z-10 shadow-xl">
                        {category}
                    </div>
                    
                    {/* Dark gradient overlay for better text contrast if needed */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                </div>

                {/* --- Content Container --- */}
                <div className={`flex flex-col p-8 ${isFeatured ? "md:w-1/2 justify-center" : "flex-grow"}`}>
                    <div className="flex items-center gap-2 text-neutral-500 text-xs font-medium mb-4">
                        <TbCalendarTime className="text-primary text-lg" />
                        {date}
                    </div>

                    <h2 className={`font-bold uppercase tracking-tight mb-4 group-hover:text-primary transition-colors duration-300 ${
                        isFeatured ? "text-3xl md:text-4xl" : "text-xl line-clamp-2"
                    }`}>
                        {title}
                    </h2>

                    <p className="text-neutral-400 text-sm leading-relaxed line-clamp-3 mb-6">
                        {subtitle}
                    </p>

                    <div className="mt-auto">
                        <span className="text-xs font-black uppercase tracking-[0.2em] text-white/40 group-hover:text-primary transition-colors duration-300">
                            Read Entry —
                        </span>
                    </div>
                </div>
            </Link>
        </motion.div>
    );
}