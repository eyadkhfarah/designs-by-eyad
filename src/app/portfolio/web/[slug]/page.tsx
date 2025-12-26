import { notFound } from "next/navigation";
import { allProtoWebs } from "contentlayer/generated";
import Image from "next/image";
import type { Metadata } from "next";
import PrimaryBtn from "@/Components/Buttons/PrimaryBtn";
import { marked } from "marked";
import Script from "next/script";

type Params = Promise<{ slug: string }>

async function getPost(slug: string) {
  const doc = allProtoWebs.find(
    (doc) => doc.slugAsParams.replace("web/", "") === slug
  );
  if (!doc) notFound();
  return doc;
}

export async function generateMetadata({ params }: { params: Params }): Promise<Metadata> {
  const slug = (await params).slug;
  const doc = allProtoWebs.find(
    (doc) => doc.slugAsParams.replace("web/", "") === slug
  );

  if (!doc) return {};

  return {
    title: `${doc.title} | Web Design`,
    description: doc.description,
    alternates: { canonical: `/${doc.slug.replace(/^\//, '')}` },
    openGraph: {
      title: doc.title,
      description: doc.description,
      type: "article",
      url: `/${doc.slug.replace(/^\//, '')}`,
      images: [{ url: doc.thumbnail, width: 1200, height: 630, alt: doc.title }],
    },
  };
}

const ProtoDetails = async ({ params }: { params: Params }) => {
  const props = await getPost((await params).slug);
  const siteUrl = process.env.NEXT_PUBLIC_DOMAIN_URL || "https://designs-by-eyad.vercel.app";

  return (
    <main className="min-h-screen pt-32 pb-20">
      <article className="max-w-7xl mx-auto px-6">
        {/* --- Header Section --- */}
        <header className="flex flex-col gap-8 mb-16 border-b border-white/5 pb-12">
          <div className="flex flex-wrap items-center gap-4">
            <span className="px-4 py-2 bg-primary text-black text-[10px] font-black uppercase tracking-widest rounded-full">
              {props.Protype}
            </span>
            <span className="text-neutral-500 font-mono text-sm uppercase tracking-tighter">
              {new Date(props.Date ?? "").toLocaleDateString("en-US", {
                month: "long",
                year: "numeric",
              })}
            </span>
          </div>
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-black uppercase tracking-tighter leading-[0.9]">
            {props.title}<span className="text-primary">.</span>
          </h1>
        </header>

        {/* --- Hero & Overview Section --- */}
        <section className="grid lg:grid-cols-12 gap-12 mb-20">
          <div className="lg:col-span-5 relative aspect-square rounded-[2.5rem] overflow-hidden border border-white/10 bg-neutral-900">
            <Image
              src={props.thumbnail}
              fill
              className="object-cover"
              alt={props.title}
              priority
            />
          </div>

          <div className="lg:col-span-7 flex flex-col justify-center gap-10">
            <div className="space-y-6">
              <h2 className="text-xs font-black uppercase tracking-[0.3em] text-primary">Overview</h2>
              <p className="text-xl md:text-2xl text-neutral-400 font-medium leading-relaxed">
                {props.description}
              </p>
            </div>

            <div className="space-y-6">
              <h2 className="text-xs font-black uppercase tracking-[0.3em] text-neutral-500">Tech Stack</h2>
              <ul className="flex flex-wrap gap-3">
                {props.stack?.map((skill) => (
                  <li
                    key={skill}
                    className="px-6 py-3 rounded-full text-xs font-bold uppercase border border-white/10 bg-white/5 hover:border-primary/50 transition-colors"
                  >
                    {skill}
                  </li>
                ))}
              </ul>
            </div>

            <div className="pt-4">
              <PrimaryBtn
                target={true}
                link={`${props.website}`}
                text={"Launch Live Site"}
              />
            </div>
          </div>
        </section>

        {/* --- Project Case Study / Content --- */}
        <section className="relative">
          <div 
            className="prose prose-invert prose-lg max-w-none 
              prose-headings:uppercase prose-headings:tracking-tighter prose-headings:font-black
              prose-p:text-neutral-400 prose-p:leading-loose
              prose-strong:text-white prose-a:text-primary prose-a:no-underline hover:prose-a:underline
              bg-neutral-900/30 overflow-hidden rounded-[3rem] border border-white/5"
            dangerouslySetInnerHTML={{ __html: marked(props.body.raw) }} 
          />
        </section>
      </article>

      {/* --- SEO & Structured Data --- */}
      <Script
        id="project-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "WebPage",
            "name": props.title,
            "url": siteUrl + props.slug,
            "mainEntity": {
              "@type": "CreativeWork",
              "name": props.title,
              "description": props.description,
              "image": siteUrl + props.thumbnail,
              "creator": { "@type": "Person", "name": "Eyad Farah" },
              "dateCreated": props.Date
            }
          }),
        }}
      />
    </main>
  );
};

export default ProtoDetails;
