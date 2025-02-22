import { allProtoDesigns, allProtoWebs } from "contentlayer/generated";
import { NavContacts } from "@/lib/NavContact";
import { MetadataRoute } from "next";
import { fetchPosts } from "@/lib/notion";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const siteUrl = process.env.NEXT_PUBLIC_DOMAIN_URL || "https://designs-by-eyad.vercel.app";
  const now = new Date();

  // Base sitemap links
  const baseLinks: MetadataRoute.Sitemap = [
    {
      url: siteUrl,
      lastModified: now,
      changeFrequency: "weekly",
      priority: 1,
    },
    {
      url: `${siteUrl}/portfolio`,
      lastModified: now,
      changeFrequency: "weekly",
      priority: 0.8,
    },
    {
      url: `${siteUrl}/blog`,
      lastModified: now,
      changeFrequency: "weekly",
      priority: 0.8,
    },
    {
      url: `${siteUrl}/about`,
      lastModified: now,
      changeFrequency: "weekly",
      priority: 0.8,
    },
    {
      url: `${siteUrl}/artworks`,
      lastModified: now,
      changeFrequency: "weekly",
      priority: 0.8,
    },
    {
      url: `${siteUrl}/fqa`,
      lastModified: now,
      changeFrequency: "weekly",
      priority: 0.8,
    },
  ];

  // Contact links (filtering out contacts with "Form" in the name)
  const contactLinks = NavContacts
    .filter(({ name }) => !name.includes("Form"))
    .map((contact) => ({
      url: `${siteUrl}/contact${contact.link}`,
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.6,
    }));

  // Web and design links
  const webLinks = allProtoWebs.map((web) => ({
    url: `${siteUrl}${web.slug}`,
    lastModified: now,
    changeFrequency: "hourly",
    priority: 0.6,
  }));

  const designLinks = allProtoDesigns.map((design) => ({
    url: `${siteUrl}${design.slug}`,
    lastModified: now,
    changeFrequency: "hourly",
    priority: 0.6,
  }));

  // Blog post links from Notion posts
  const postsData = await fetchPosts();
  const postLinks = postsData.results.map((post: any) => ({
    url: `${siteUrl}/blog/${post.properties.Slug.rich_text[0].plain_text}`,
    lastModified: now,
    changeFrequency: "hourly",
    priority: 0.6,
  }));

  // Combine all links into one sitemap array
  return [
    ...baseLinks,
    ...contactLinks,
    ...webLinks,
    ...designLinks,
    ...postLinks,
  ];
}
