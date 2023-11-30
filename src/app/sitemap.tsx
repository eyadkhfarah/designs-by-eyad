import { allProtoDesigns, allProtoWebs } from "contentlayer/generated";
import { NavContacts } from "@/lib/NavContact";
import { MetadataRoute } from "next";

interface sitemap {
  url: String;
};

const GetWeb = () => {
  const doc = allProtoWebs;
  return doc;
};

const GetDesign = () => {
  const doc = allProtoDesigns;
  return doc;
};

export default async function sitemap() {
  const siteUrl = process.env.NEXT_PUBLIC_DOMAIN_URL || "http://localhost:3000";
  const web = await GetWeb();
  const designs = await GetDesign();

  const allWeb =
    web?.map((web) => {
      return {
        url: `${siteUrl}${web.slug}` || "" || undefined,
        lastModified: new Date() || undefined,
        changeFrequency: "weekly" || undefined,
        priority: 0.8 || undefined,
      };
    }) || [];

  const allDesing =
    designs?.map((design) => {
      return {
        url: `${siteUrl}${design.slug}` || undefined,
        lastModified: new Date() || undefined,
        changeFrequency: "weekly" || undefined,
        priority: 0.8 || undefined,
      };
    }) || [];

  const contacts =
    NavContacts?.filter((val) => {
      if (!val.name.includes("Form")) {
        return val;
      }
    }).map((design) => {
      return {
        url: `${siteUrl}/contact${design.link}` || undefined,
        lastModified: new Date() || "" || undefined,
        changeFrequency: "weekly" || undefined,
        priority: 0.8 || undefined,
      };
    }) || [];

  return [
    {
      url: `${siteUrl}`,
      lastModified: new Date(),
      changeFrequency: "yearly",
      priority: 1,
    },
    {
      url: siteUrl + "/portfolio",
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 0.8,
    },
    {
      url: siteUrl + "/about",
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 0.5,
    },
    {
      url: siteUrl + "/contact",
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 0.5,
    },
    ...allWeb,
    ...allDesing,
    ...contacts,
  ];
}
