import BlogSqr from "@/Components/Blog/BlogSqr";
import { fetchPosts } from "@/lib/notion";
import { Metadata } from "next";
import { PageObjectResponse, QueryDatabaseResponse } from "@notionhq/client/build/src/api-endpoints";
import Script from "next/script";

const siteUrl = process.env.PUBLIC_DOMAIN_URL || "https://designs-by-eyad.vercel.app";

const meta = {
  title: "Blog",
  description:
    "Discover expert tips, creative insights, and design trends on the Designs By Eyad blog. Explore articles on brand identity, social media strategies, web design, and more to elevate your creative journey.",
  url: `${siteUrl}/blog`,
};

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

// Revalidate this page every 1 second
export const revalidate = 1;

// Define a type for the posts response
interface PostsResponse extends QueryDatabaseResponse {
  results: PageObjectResponse[];
}

export default async function BlogsPage() {
  const posts = await fetchPosts();

  return (
    <>
      <section>
        <h1>Blog</h1>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {posts.results.map((post: any) => (
            <BlogSqr key={post.id} post={post} />
          ))}
        </div>
      </section>


      <Script
        type="application/ld+json"
        id="json-ld-schema"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "CollectionPage",
            "name": "Blog",
            "mainEntity": {
              "@type": "ItemList",
              "itemListElement": posts.results.map((post: any, index: number) => ({
                "@type": "ListItem",
                "position": index + 1,
                "url": `${siteUrl}/blog/${post.properties.Slug.rich_text[0].plain_text}`,
                "name": post.properties.Name.title[0].plain_text
              }))
            }
          }),
        }}
      />

    </>
  );
}
