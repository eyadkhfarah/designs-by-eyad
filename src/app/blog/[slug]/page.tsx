import { PostNavigation } from "@/Components/Blog/PostNavigation";
import Share from "@/Components/Blog/Share";
import SecondaryBtn from "@/Components/Buttons/SecondaryBtn";
import {
  fetchPostBlocks,
  fetchPostSlug,
  fetchPosts,
  notionBlog,
} from "@/lib/notion";
import { NotionPage } from "@/types/notionType";
import bookmarkPlugin from "@notion-render/bookmark-plugin";
import { NotionRenderer } from "@notion-render/client";
import hljsPlugin from "@notion-render/hljs-plugin";
import { Metadata } from "next";
import Image from "next/image";
import { notFound } from "next/navigation";
import Script from "next/script";
import React from "react";

type Params = Promise<{ slug: string }>;

// Ensure this matches your Notion database structure exactly
export interface Post {
  properties: {
    Name: { title: Array<{ plain_text: string }> };
    Slug: { rich_text: Array<{ plain_text: string }> };
  };
}

interface PostNavigationProps {
  // We use "any" or the specific Notion type here to allow casting
  prevPost: any | null;
  nextPost: any | null;
}

export async function generateMetadata({
  params,
}: {
  params: Params;
}): Promise<Metadata> {
  const { slug } = await params;
  const post = (await fetchPostSlug(slug)) as unknown as NotionPage;

  if (!post) return notFound();

  const title = post.properties.Name.title[0].plain_text;
  const description = post.properties.Subtitle.rich_text[0].plain_text;
  const image =
    post.properties.Thumbnail.files[0]?.file?.url ||
    post.properties.Thumbnail.files[0]?.name;

  return {
    title: `${title} | Designs by Eyad`,
    description: description,
    alternates: { canonical: `/blog/${slug}` },
    openGraph: {
      title,
      description,
      type: "article",
      url: `/blog/${slug}`,
      images: [{ url: image, width: 1200, height: 630 }],
    },
  };
}

export default async function PostPage({ params }: { params: Params }) {
  const slug = (await params).slug;
  const post = (await fetchPostSlug(slug)) as unknown as NotionPage;

  if (!post) return notFound();

  const content = await fetchPostBlocks(post.id);
  const siteUrl =
    process.env.PUBLIC_DOMAIN_URL || "https://designs-by-eyad.vercel.app";

  // Fetch and sort posts for navigation
  const allPosts = await fetchPosts();
  const sortedPosts = allPosts.results.sort(
    (a: any, b: any) =>
      new Date(a.created_time).getTime() - new Date(b.created_time).getTime()
  );

  const currentIndex = sortedPosts.findIndex(
    (p: any) => p.properties.Slug.rich_text[0].plain_text === slug
  );
  // 3. Get raw navigation data
  const prevPostData = currentIndex > 0 ? sortedPosts[currentIndex - 1] : null;
  const nextPostData =
    currentIndex < sortedPosts.length - 1
      ? sortedPosts[currentIndex + 1]
      : null;

  /**
   * FIX: TYPE NARROWING
   * We verify if the Notion response is a 'Full Page' before passing it.
   * We also use type assertion 'as unknown as Post' to satisfy your component's interface.
   */

  function isFullPage(page: any): page is Post {
    return page && "properties" in page;
  }

  const prev = isFullPage(prevPostData)
    ? (prevPostData as unknown as Post)
    : null;
  const next = isFullPage(nextPostData)
    ? (nextPostData as unknown as Post)
    : null;

  // Setup Notion Renderer with plugins
  const render = new NotionRenderer({ client: notionBlog });
  render.use(hljsPlugin({}));
  render.use(bookmarkPlugin(undefined));
  const html = await render.render(...content);

  const datePublished = new Date(
    post.properties.Publication.date.start
  ).toISOString();
  const thumbnail =
    post.properties.Thumbnail.files[0]?.file?.url ||
    post.properties.Thumbnail.files[0]?.name;

  return (
    <main className="min-h-screen pt-24 md:pt-32">
      <section className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20">
        {/* --- Main Article --- */}
        <article className="lg:col-span-8 flex flex-col gap-10">
          {/* Metadata Row */}
          <header className="flex flex-col gap-6">
            <div className="flex items-center gap-4 text-sm font-bold tracking-widest text-primary uppercase">
              <span>{post.properties.Category.select.name}</span>
              <span className="text-white/20">•</span>
              <span className="text-white/60">
                {post.properties.Publication.date.start}
              </span>
            </div>

            <h1 className="text-4xl md:text-6xl lg:text-7xl font-black leading-[1.1] tracking-tighter">
              {post.properties.Name.title[0].plain_text}
            </h1>
          </header>

          <div className="relative aspect-video rounded-[2.5rem] overflow-hidden border border-white/10">
            <Image
              className="object-cover"
              alt={post.properties.Name.title[0].plain_text}
              src={thumbnail}
              fill
              priority
            />
          </div>

          {/* Subtitle / Intro */}
          <p className="text-xl md:text-2xl text-neutral-400 font-medium leading-relaxed border-l-4 border-primary pl-8 my-4">
            {post.properties.Subtitle.rich_text[0].plain_text}
          </p>

          {/* Notion Content Body */}
          <div
            className="prose prose-lg prose-invert max-w-none 
                       prose-headings:tracking-tighter prose-headings:font-black prose-headings:uppercase
                       prose-a:text-primary prose-a:no-underline
                       prose-img:rounded-[2rem] prose-img:border prose-img:border-white/10
                       prose-pre:bg-neutral-900 prose-pre:border prose-pre:border-white/5"
            dangerouslySetInnerHTML={{ __html: html }}
          />

          {/* Share Section */}
          <div className="mt-12 p-8 rounded-[2.5rem] bg-neutral-900 border border-white/5 flex flex-col md:flex-row items-center justify-between gap-8">
            <h2 className="text-2xl font-bold uppercase tracking-tight">
              Share this Insight
            </h2>
            <Share post={post} />
          </div>
        </article>

        {/* --- Sidebar --- */}
        <aside className="lg:col-span-4 flex flex-col gap-8">
          {/* Tags Widget */}
          <div className="p-8 rounded-[2rem] bg-neutral-900/50 border border-white/10 backdrop-blur-sm">
            <h3 className="text-xs font-black uppercase tracking-[0.2em] mb-6 text-white/40">
              Tagged Content
            </h3>
            <div className="flex flex-wrap gap-3">
              {post.properties.Tags.multi_select.map((tag, index) => (
                <span
                  key={index}
                  className="px-5 py-2.5 bg-neutral-800 text-xs font-bold rounded-full border border-white/5 hover:border-primary/50 transition-colors cursor-default"
                >
                  #{tag.name}
                </span>
              ))}
            </div>
          </div>

          {/* Sticky CTA Widget */}
          <div className="sticky top-32 p-10 rounded-[2.5rem] bg-primary group overflow-hidden">
            {/* Decorative Background Element */}
            <div className="absolute -right-8 -bottom-8 w-32 h-32 bg-black/10 rounded-full group-hover:scale-150 transition-transform duration-700" />

            <h3 className="text-2xl md:text-3xl font-black text-black uppercase leading-tight mb-8 relative z-10">
              Ready to ignite <br /> your brand?
            </h3>
            <div className="relative z-10">
              <SecondaryBtn
                link={"/contact"}
                text={"Contact Me"}
                target={false}
              />
            </div>
          </div>
        </aside>
      </section>

      {/* Navigation Footer */}
      <section className="max-w-7xl mx-auto px-6 py-20">
        <PostNavigation nextPost={next} prevPost={prev} />
      </section>

      {/* Structured Data */}
      <Script id="blog-post-schema" type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "BlogPosting",
          headline: post.properties.Name.title[0].plain_text,
          image: thumbnail,
          author: { "@type": "Person", name: "Eyad Farah", url: siteUrl },
          publisher: {
            "@type": "Organization",
            name: "Designs By Eyad",
            logo: { "@type": "ImageObject", url: `${siteUrl}/logo.png` },
          },
          datePublished: datePublished,
          description: post.properties.Subtitle.rich_text[0].plain_text,
        })}
      </Script>
    </main>
  );
}
