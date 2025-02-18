import { allProtoDesigns, allProtoWebs } from "contentlayer/generated";
import { NavContacts } from "@/lib/NavContact";
import { MetadataRoute } from "next";
import { fetchPosts } from "@/lib/notion";

const GetWeb = () => {
  const doc = allProtoWebs;
  return doc;
};

const GetDesign = () => {
  const doc = allProtoDesigns;
  return doc;
};

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const siteUrl =
    process.env.NEXT_PUBLIC_DOMAIN_URL || "https://designs-by-eyad.vercel.app";

  const web = GetWeb();
  const designs = GetDesign();
  const post = await fetchPosts();

  const links: MetadataRoute.Sitemap = [
    {
      url: siteUrl,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 1,
    },
    {
      url: siteUrl,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 1,
    },

    {
      url: siteUrl + "/portfolio",
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 0.8,
    },
    {
      url: siteUrl + "/blog",
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 0.8,
    },
    {
      url: siteUrl + "/about",
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 0.8,
    },
    {
      url: siteUrl + "/artworks",
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 0.8,
    },
    {
      url: siteUrl + "/fqa",
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 0.8,
    },
  ];

    NavContacts.filter((val) => !val.name.includes("Form")).forEach((contact) => {
      links.push({
        url: `${siteUrl}/contact${contact.link}`,
        lastModified: new Date(),
        changeFrequency: "monthly",
        priority: 0.6,
      });
    });

    web.forEach((web) => {
      links.push({
        url: `${siteUrl}${web.slug}`,
        lastModified: new Date(),
        changeFrequency: "hourly",
        priority: 0.6,
      });
    });

    designs.forEach((web) => {
      links.push({
        url: `${siteUrl}${web.slug}`,
        lastModified: new Date(),
        changeFrequency: "hourly",
        priority: 0.6,
      });
    });

    post.results.forEach((post: any) => {
      links.push({
        url: `${siteUrl}/blog/${post.properties.Slug.rich_text[0].plain_text}`,
        lastModified: new Date(),
        changeFrequency: "hourly",
        priority: 0.6,
      });
    });

  return links;
}
