import BlogSqr from "@/Components/Blog/BlogSqr";
import { fetchPosts } from "@/lib/notion";
import { Metadata } from "next";
import { PageObjectResponse, QueryDatabaseResponse } from "@notionhq/client/build/src/api-endpoints";
import Script from "next/script";
import H1 from "@/Components/TranslationTags/H1";

const siteUrl = process.env.PUBLIC_DOMAIN_URL || "https://designs-by-eyad.vercel.app";

const meta = {
  title: "Blog | Design Insights & Creative Tips",
  description: "Discover expert tips, creative insights, and design trends on the Designs By Eyad blog. Explore articles on brand identity, social media strategies, and web design.",
  url: `${siteUrl}/blog`,
};

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

interface PostsResponse extends QueryDatabaseResponse {
  results: PageObjectResponse[];
}

// ... existing imports

export default async function BlogsPage() {
  const posts = await fetchPosts() as unknown as PostsResponse;

  // REVERSE THE ORDER: 
  // We use [...array] to avoid mutating the original response directly
  const orderedPosts = [...posts.results].reverse();

  return (
    <main className="min-h-screen pt-20">
      {/* --- Blog Header --- */}
      <section className="max-w-7xl mx-auto px-6 py-16 md:py-24 border-b border-white/5">
        <div className="flex flex-col gap-6">
          <span className="text-primary font-mono tracking-[0.3em] uppercase text-sm">
            Journal
          </span>
          <H1>BlogPage.title</H1>
          <p className="text-neutral-400 text-lg md:text-xl max-w-2xl leading-relaxed">
            Thoughts on design, branding, and the creative process in the digital age.
          </p>
        </div>
      </section>

      {/* --- Blog Grid --- */}
      <section className="max-w-7xl mx-auto px-6 py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {orderedPosts.map((post: any, index: number) => (
            <div 
              key={post.id} 
              // The first post in the reversed list becomes the large featured item
              className={`${index === 0 ? "md:col-span-2 lg:col-span-2" : "col-span-1"}`}
            >
              <BlogSqr 
                post={post} 
                isFeatured={index === 0} 
              />
            </div>
          ))}
        </div>
      </section>

      {/* --- SEO Structured Data --- */}
      <Script
        type="application/ld+json"
        id="json-ld-schema"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Blog",
            "name": "Designs By Eyad Blog",
            "description": meta.description,
            "url": meta.url,
            "publisher": {
              "@type": "Person",
              "name": "Eyad Farah"
            },
            // Update Schema to follow the same order
            "blogPosts": orderedPosts.map((post: any) => ({
              "@type": "BlogPosting",
              "headline": post.properties.Name.title[0]?.plain_text,
              "url": `${siteUrl}/blog/${post.properties.Slug?.rich_text[0]?.plain_text}`,
              "datePublished": post.created_time,
              "author": {
                "@type": "Person",
                "name": "Eyad Farah"
              }
            }))
          }),
        }}
      />
    </main>
  );
}