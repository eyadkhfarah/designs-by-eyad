"use client";

import React from 'react';
import { RiArrowLeftSLine, RiArrowRightSLine } from 'react-icons/ri';
import Link from 'next/link';

export interface Post {
  properties: {
    Name: { title: Array<{ plain_text: string }> };
    Slug: { rich_text: Array<{ plain_text: string }> };
  }
}

interface PostNavigationProps {
  prevPost: Post | null;
  nextPost: Post | null;
}

export const PostNavigation: React.FC<PostNavigationProps> = ({ prevPost, nextPost }) => {
  return (
    <div 
      aria-label="Post navigation" 
      className="grid grid-cols-1 md:grid-cols-2 gap-4 py-16 border-t border-white/5"
    >
      {/* --- Previous Post --- */}
      <div className="flex w-full">
        {prevPost?.properties?.Slug?.rich_text?.[0] ? (
          <Link 
            href={`/blog/${prevPost.properties.Slug.rich_text[0].plain_text}`}
            className="group relative flex items-center w-full p-6 rounded-[2rem] bg-neutral-900/40 border border-white/5 transition-all duration-500 hover:bg-neutral-900 hover:border-primary/30 hover:shadow-[0_20px_40px_-15px_rgba(0,0,0,0.5)] overflow-hidden"
          >
            {/* Background Accent */}
            <div className="absolute -left-4 -bottom-4 w-24 h-24 bg-primary/5 rounded-full blur-2xl group-hover:bg-primary/10 transition-colors" />
            
            <div className="relative z-10 flex items-center gap-5">
              <div className="flex items-center justify-center min-w-14 h-14 rounded-full border border-white/10 bg-black group-hover:bg-primary group-hover:border-primary transition-all duration-500 group-hover:scale-110">
                <RiArrowLeftSLine className="text-3xl text-primary group-hover:text-black transition-colors" />
              </div>
              <div className="flex flex-col">
                <span className="text-[10px] font-black uppercase tracking-[0.3em] text-neutral-500 mb-1 group-hover:text-primary transition-colors">
                  Previous Entry
                </span>
                <span className="text-white font-bold text-lg group-hover:text-white transition-colors line-clamp-1">
                  {prevPost.properties.Name.title[0].plain_text}
                </span>
              </div>
            </div>
          </Link>
        ) : (
          <div className="flex items-center gap-5 w-full p-6 rounded-[2rem] border border-dashed border-white/10 opacity-30 grayscale cursor-default">
            <div className="min-w-14 h-14 rounded-full border border-white/10 flex items-center justify-center">
              <RiArrowLeftSLine className="text-3xl" />
            </div>
            <span className="text-[10px] font-black uppercase tracking-[0.3em]">Origin Point</span>
          </div>
        )}
      </div>

      {/* --- Next Post --- */}
      <div className="flex w-full">
        {nextPost?.properties?.Slug?.rich_text?.[0] ? (
          <Link 
            href={`/blog/${nextPost.properties.Slug.rich_text[0].plain_text}`}
            className="group relative flex items-center justify-end w-full p-6 rounded-[2rem] bg-neutral-900/40 border border-white/5 text-right transition-all duration-500 hover:bg-neutral-900 hover:border-primary/30 hover:shadow-[0_20px_40px_-15px_rgba(0,0,0,0.5)] overflow-hidden"
          >
             {/* Background Accent */}
             <div className="absolute -right-4 -bottom-4 w-24 h-24 bg-primary/5 rounded-full blur-2xl group-hover:bg-primary/10 transition-colors" />

            <div className="relative z-10 flex flex-row-reverse items-center gap-5">
              <div className="flex items-center justify-center min-w-14 h-14 rounded-full border border-white/10 bg-black group-hover:bg-primary group-hover:border-primary transition-all duration-500 group-hover:scale-110">
                <RiArrowRightSLine className="text-3xl text-primary group-hover:text-black transition-colors" />
              </div>
              <div className="flex flex-col items-end">
                <span className="text-[10px] font-black uppercase tracking-[0.3em] text-neutral-500 mb-1 group-hover:text-primary transition-colors">
                  Up Next
                </span>
                <span className="text-white font-bold text-lg group-hover:text-white transition-colors line-clamp-1">
                  {nextPost.properties.Name.title[0].plain_text}
                </span>
              </div>
            </div>
          </Link>
        ) : (
          <div className="flex flex-row-reverse items-center gap-5 w-full p-6 rounded-[2rem] border border-dashed border-white/10 opacity-30 grayscale cursor-default">
            <div className="min-w-14 h-14 rounded-full border border-white/10 flex items-center justify-center">
              <RiArrowRightSLine className="text-3xl" />
            </div>
            <span className="text-[10px] font-black uppercase tracking-[0.3em]">Final Horizon</span>
          </div>
        )}
      </div>
    </div>
  );
};