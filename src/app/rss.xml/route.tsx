import { fetchPosts } from "../../lib/notion";
import RSS from "rss";

const siteUrl =
  process.env.NEXT_PUBLIC_DOMAIN_URL || "https://designs-by-eyad.vercel.apps";

const feed = new RSS({
  title: "Designs By Eyad — Creative Branding & Web Design Portfolio",
  description: "A cool website that everyone should check out!",
  site_url: siteUrl,
  feed_url: siteUrl + "/rss.xml",
  copyright: `${new Date().getFullYear()} Designs By Eyad`,
  language: "en",
  pubDate: new Date(),
});


export async function GET() {
  const posts = await fetchPosts();
  
  posts.results.map((post: any) => {
    feed.item({
      title: post.properties.Name.title[0].plain_text,
      guid: siteUrl + `/blog/${post.properties.Slug.rich_text[0].plain_text}`,
      url: siteUrl + `/blog/${post.properties.Slug.rich_text[0].plain_text}`,
      date: post.properties.Publication.date.start,
      description: post.properties.Subtitle.rich_text[0].plain_text,
      author: "Eyad Farah",
    });
  });

  return new Response(feed.xml({ indent: true }), {
    headers: {
      "Content-Type": "application/atom+xml; charset=utf-8",
    },
  });
}
