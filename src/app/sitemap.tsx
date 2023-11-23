import { allProtoDesigns, allProtoWebs } from "contentlayer/generated";
import { NavContacts } from "@/lib/NavContact";

const GetWeb = async () => {
  const doc = allProtoWebs;
  return doc;
};

const GetDesign = async () => {
  const doc = allProtoDesigns;
  return doc;
};

export default async function sitemap() {
  const siteUrl = process.env.NEXT_PUBLIC_DOMAIN_URL;
  const web = await GetWeb();
  const designs = await GetDesign();

  const allWeb =
    web?.map((web) => {
      return {
        url: `${siteUrl}/${web.slug}`,
        lastModified: new Date(),
        changeFrequency: "monthly",
        priority: 0.8,
      };
    }) || [];

  const allDesing =
    designs?.map((design) => {
      return {
        url: `${siteUrl}/${design.slug}`,
        lastModified: new Date(),
        changeFrequency: "monthly",
        priority: 0.8,
      };
    }) || [];

  const contacts =
    NavContacts?.map((design) => {
      return {
        url: `${siteUrl}/contact/${design.link}`,
        lastModified: new Date(),
        changeFrequency: "monthly",
        priority: 0.8,
      };
    }) || [];

  return [
    {
      url: siteUrl,
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
    ...allWeb,
    ...allDesing,
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
    ...contacts,
  ];
}