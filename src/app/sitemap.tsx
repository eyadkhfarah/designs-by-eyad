import { allProtoDesigns, allProtoWebs } from "contentlayer/generated";
import { NavContacts } from "@/lib/NavContact";
import { MetadataRoute } from "next";

type sitemap = {
  url: String,
  lastModified: Date,
  changefreq: String,
  priority: Number
}

const GetWeb = () => {
  const doc = allProtoWebs;
  return doc;
};

const GetDesign = () => {
  const doc = allProtoDesigns;
  return doc;
};

export default function sitemap(): MetadataRoute.Sitemap {
  const siteUrl = process.env.NEXT_PUBLIC_DOMAIN_URL || 'http://localhost:3000';
  const web = GetWeb();
  const designs = GetDesign();

  const allWeb =
    web?.map((web) => {
      return {
        url: `${siteUrl}${web.slug}`,
        lastModified: new Date(),
        changeFrequency: "weekly",
        priority: 0.8,
      };
    }) || [];

  const allDesing =
    designs?.map((design) => {
      return {
        url: `${siteUrl}${design.slug}`,
        lastModified: new Date(),
        changeFrequency: "weekly",
        priority: 0.8,
      };
    }) || [];

  const contacts =
    NavContacts?.filter((val) => {
      if (
        !val.name.includes("Form") 
      ) {
        return val;
      }
    }).map((design) => {
      return {
        url: `${siteUrl}/contact${design.link}`,
        lastModified: new Date(),
        changeFrequency: "weekly",
        priority: 0.8,
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
    // ...allWeb,
    // ...allDesing,
    ...contacts,
  ];
}