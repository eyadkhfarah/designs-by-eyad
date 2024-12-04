import Share from '@/Components/Blog/Share'
import { fetchPostBlocks, fetchPostSlug, notionBlog } from '@/lib/notion'
import { NotionPage, NotionProps } from '@/types/notionType'
import bookmarkPlugin from '@notion-render/bookmark-plugin'
import { NotionRenderer } from '@notion-render/client'
import hljsPlugin from '@notion-render/hljs-plugin'
import { Metadata } from 'next'
import Image from 'next/image'
import { notFound } from 'next/navigation'
import React from 'react'

interface PageProps {
    params: {
        slug: string;
    };
}

export async function generateMetadata({
    params,
}: PageProps): Promise<Metadata> {
    const slug = params.slug;
    const post = (await fetchPostSlug(params.slug)) as unknown as NotionPage;

    return {
        title: post.properties.Name.title[0].plain_text,
        description: post.properties.Subtitle.rich_text[0].plain_text,
        alternates: {
            canonical: `/blog/${post.properties.Slug.rich_text[0].plain_text}0}`,
        },
        openGraph: {
            title: post.properties.Name.title[0].plain_text,
            description: post.properties.Subtitle.rich_text[0].plain_text,
            type: "article",
            url: `/blog/${post.properties.Slug.rich_text[0].plain_text}0}`,
            siteName: "/",
            images: [
                {
                    url: post.properties.Thumbnail.files[0].name,
                    width: 1200,
                    height: 630,
                    alt: post.properties.Name.title[0].plain_text,
                },
            ],
        },
    };
}

export default async function PostPage({ params }: { params: { slug: string } }) {

    const post = (await fetchPostSlug(params.slug)) as unknown as NotionPage;

    if (!post) return notFound

    const content = await fetchPostBlocks(post.id)

    //     // console.log(post.properties)

    const render = new NotionRenderer({
        client: notionBlog
    });

    const html = await render.render(...content)

    render.use(hljsPlugin({}))
    render.use(bookmarkPlugin(undefined))


    // <p className='prose prose-lg prose-invert'>{post.properties.Subtitle.rich_text[0].plain_text}</p>
    // <div className='prose prose-lg prose-invert' dangerouslySetInnerHTML={{ __html: html }}></div>

    // <Share id={post.id} post={post} />
    return (
        <>
            <article className="lg:px-28 p-10 grid gap-8">
                <div className="flex items-center gap-12">
                    <p>{post.properties.Publication.date.start}</p>
                    •
                    <p>{post.properties.Category.select.name}</p>
                </div>
                <h1 className="lg:text-[4rem] text-[2rem] w-fit">
                    {post.properties.Name.title[0].plain_text}
                </h1>
                <Image className='rounded-2xl' alt={post.properties.Name.title[0].plain_text} src={`${post.properties.Thumbnail.files[0].name}`} width={1200} height={850} />

            </article>
        </>
    )
}
