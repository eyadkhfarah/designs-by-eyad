import Image from "next/image";
import Link from "next/link";
import React from "react";

type Props = {
  data: {
    slug: string,
    title: string,
    description: string,
    Protype: string,
    thumbnail: string,
    Date: string,
  }
}

export default function ProCard({ data }: Props) {
  return (
    <Link href={data.slug} className="group block w-full">
      <div className="relative flex flex-col lg:flex-row gap-8 p-6 rounded-[2.5rem] bg-neutral-900/40 border border-white/5 transition-all duration-500 hover:bg-neutral-900 hover:border-primary/30 hover:shadow-[0_30px_60px_-15px_rgba(0,0,0,0.7)] overflow-hidden">
        
        {/* --- Animated Background Glow --- */}
        <div className="absolute -right-10 -bottom-10 w-40 h-40 bg-primary/5 rounded-full blur-3xl group-hover:bg-primary/10 transition-colors duration-700" />

        {/* --- Thumbnail Container --- */}
        <div className="relative shrink-0 w-full lg:w-48 aspect-square overflow-hidden rounded-3xl border border-white/10 bg-black">
          <Image 
            src={data.thumbnail} 
            alt={data.title}
            fill
            sizes="(max-width: 768px) 100vw, 200px"
            className="object-cover transition-transform duration-700 group-hover:scale-110"
          />
        </div>

        {/* --- Content Area --- */}
        <div className="flex flex-col justify-between flex-grow py-2">
          <div className="space-y-3">
            <h2 className="text-3xl md:text-4xl font-black uppercase tracking-tighter text-white group-hover:text-primary transition-colors duration-300 line-clamp-1">
              {data.title}
            </h2>
            <p className="text-neutral-400 font-medium leading-relaxed line-clamp-2 max-w-xl">
              {data.description}
            </p>
          </div>

          <div className="flex flex-wrap items-center justify-between gap-4 mt-8 pt-6 border-t border-white/5">
            <div className="px-5 py-2 rounded-full text-[10px] uppercase font-black tracking-widest bg-primary text-black transition-transform group-hover:-translate-y-1">
              {data.Protype}
            </div>

            <p className="text-[11px] font-bold uppercase tracking-[0.2em] text-neutral-600 group-hover:text-neutral-400 transition-colors">
              {new Date(data.Date).toLocaleDateString("en-US", {
                day: "2-digit",
                month: "short",
                year: "numeric",
              })}
            </p>
          </div>
        </div>
      </div>
    </Link>
  );
}
