import React from 'react'
import { RiArrowLeftSLine, RiArrowRightSLine } from 'react-icons/ri'

import Link from 'next/link';

export interface Post {
    properties: {
        Name: {
          title: Array<{
            plain_text: string;
          }>;
        };
        Slug: {
          rich_text: Array<{
            plain_text: string;
          }>;
        };
    }
}

interface PostNavigationProps {
    prevPost: Post | null;
    nextPost: Post | null;
}

export const PostNavigation: React.FC<PostNavigationProps> = ({ prevPost, nextPost }) => {
    return (
        <nav aria-label="Post navigation" className="bg-transparent md:flex grid gap-16 justify-between items-center">

            {nextPost ? (
                <Link className="flex group items-center w-fit md:gap-4 gap-2 cursor-pointer" href={`/blog/${nextPost.properties.Slug.rich_text[0].plain_text}`} aria-label={nextPost.properties.Name.title[0].plain_text}>
                    <span className="md:p-3 p-1 rounded-full bg-dark transition-colors duration-300 group-hover:bg-primary">
                        <RiArrowLeftSLine className="text-4xl text-primary transition-colors group-hover:text-dark duration-300" />
                    </span>
                    <div className="grid">
                        <p className="font-bold uppercase text-lg">Previous</p>
                        <p className="line-clamp-1 md:w-xs w-60 text-neutral-500">{nextPost.properties.Name.title[0].plain_text}</p>
                    </div>
                </Link>
            ) : (
                <p>You are up-to-date</p>
            )}

            {prevPost ? (
                <Link className="flex group items-center w-fit flex-row-reverse md:gap-4 gap-2 cursor-pointer" href={`/blog/${prevPost.properties.Slug.rich_text[0].plain_text}`} aria-label={prevPost.properties.Name.title[0].plain_text}>
                    <span className="md:p-3 p-1 rounded-full bg-dark transition-colors duration-300 group-hover:bg-primary">
                        <RiArrowRightSLine className="text-4xl text-primary transition-colors group-hover:text-dark duration-300" />
                    </span>
                    <div className="grid place-items-end">
                        <p className="font-bold uppercase text-lg">Next</p>
                        <p className="line-clamp-1 whitespace-nowrap md:w-xs w-60 text-neutral-500">{prevPost.properties.Name.title[0].plain_text}</p>
                    </div>
                </Link>
            ) : (
                <p>You just finish all blogs</p>
            )}
        </nav>
    )
}
