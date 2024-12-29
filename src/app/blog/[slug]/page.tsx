import Share from "@/Components/Blog/Share";
import { fetchPostBlocks, fetchPostSlug, notionBlog } from "@/lib/notion";
import { NotionPage, NotionProps } from "@/types/notionType";
import bookmarkPlugin from "@notion-render/bookmark-plugin";
import { NotionRenderer } from "@notion-render/client";
import hljsPlugin from "@notion-render/hljs-plugin";
import { Metadata } from "next";
import Image from "next/image";
import { notFound } from "next/navigation";
import React from "react";

type Params = Promise<{ slug: string }>

export async function generateMetadata({ params }: { params: Params }): Promise<Metadata> {
  const { slug } = await params
  const post = (await fetchPostSlug(slug)) as unknown as NotionPage;

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

export default async function PostPage({ params }: { params: Params }) {
  const post = (await fetchPostSlug((await params).slug)) as unknown as NotionPage;

  if (!post) return notFound;

  const content = await fetchPostBlocks(post.id);

  const render = new NotionRenderer({
    client: notionBlog,
  });

  const html = await render.render(...content);

  render.use(hljsPlugin({}));
  render.use(bookmarkPlugin(undefined));

  return (
    <>
      <div className="lg:px-28 p-10 grid lg:grid-cols-3 gap-8">
        <article className="grid gap-8 col-span-2">
          <div className="flex items-center gap-12">
            <p>{post.properties.Publication.date.start}</p>•
            <p>{post.properties.Category.select.name}</p>
          </div>
          <h1 className="lg:text-[4rem] text-[2rem] w-fit">
            {post.properties.Name.title[0].plain_text}
          </h1>
          <Image
            className="rounded-2xl"
            alt={post.properties.Name.title[0].plain_text}
            src={`${post.properties.Thumbnail.files[0].name}`}
            width={1200}
            height={850}
          />
          <p className="prose prose-lg prose-invert">
            {post.properties.Subtitle.rich_text[0].plain_text}
          </p>
          <div
            className="prose prose-lg prose-invert"
            dangerouslySetInnerHTML={{ __html: html }}
          ></div>

          <div className="bg-gray-900 p-5 rounded-3xl grid gap-6">
            <h2>Share this article if you like it ❤️</h2>
            <Share post={post} />
          </div>
        </article>

        <aside className="bg-gray-900 p-5 rounded-3xl grid gap-6 h-fit">
          <h2>Tags</h2>
          <div className="flex items-center gap-4 flex-wrap">
            {post.properties.Tags.multi_select.map((tag) => (
              <span key={Math.floor(Math.random() * 70) + 1} className="bg-gray-950 px-6 p-3 rounded-full whitespace-nowrap">
                {tag.name}
              </span>
            ))}
          </div>
        </aside>
      </div>
    </>
  );
}
