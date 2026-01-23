import { notFound } from "next/navigation";
import { allProtoDesigns } from "contentlayer/generated";
import Image from "next/image";
import type { Metadata } from "next";
import PrimaryBtn from "@/Components/Buttons/PrimaryBtn";
import { marked } from "marked";
import Script from "next/script";

type Params = Promise<{ slug: string }>

async function getPost(slug: string) {
  const doc = allProtoDesigns.find(
    (doc) => doc.slugAsParams.replace("designs/", "") === slug
  );
  if (!doc) notFound();
  return doc;
}

export async function generateMetadata({ params }: { params: Params }): Promise<Metadata> {
  const { slug } = await params;
  const doc = allProtoDesigns.find(
    (doc) => doc.slugAsParams.replace("designs/", "") === slug
  );

  if (!doc) return {};

  return {
    title: `${doc.title} | Graphic Design`,
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
    <main className="min-h-screen pt-32 pb-20 bg-black">
      <article className="max-w-7xl mx-auto px-6">
        
        {/* --- Unified Bento Header --- */}
        <div className="group relative overflow-hidden rounded-[3rem] border border-white/10 bg-neutral-900/20 mb-4">
          <div className="grid lg:grid-cols-12">
            
            {/* Left: Sticky Image Container - NOW ROUNDED */}
            <div className="lg:col-span-5 p-4 md:p-6 lg:p-8 border-b lg:border-b-0 lg:border-r border-white/10">
               {/* We create an inner container for the image to give it distinct rounded corners and padding from the main grid borders */}
              <div className="relative w-full aspect-square rounded-[2.5rem] overflow-hidden border border-white/10 bg-black/50">
                <Image
                  src={props.thumbnail}
                  fill
                  className="object-cover"
                  alt={props.title}
                  priority
                />
              </div>
            </div>

            {/* Right: Project Details Info */}
            <div className="lg:col-span-7 p-8 md:p-12 flex flex-col justify-between gap-12">
              <div className="space-y-8">
                <div className="flex flex-wrap items-center gap-3">
                  <span className="px-4 py-1.5 bg-primary text-black text-[10px] font-black uppercase tracking-widest rounded-full">
                    {props.Protype}
                  </span>
                  {props.Unofficial && (
                    <span className="px-4 py-1.5 border border-primary/50 text-primary text-[10px] font-black uppercase tracking-widest rounded-full">
                      Unofficial
                    </span>
                  )}
                  <span className="text-neutral-500 font-mono text-xs uppercase ml-auto">
                    {new Date(props.Date).getFullYear()}
                  </span>
                </div>
                
                <h1 className="text-5xl md:text-7xl lg:text-8xl font-black uppercase tracking-tighter leading-[0.85] mb-8">
                  {props.title}<span className="text-primary">.</span>
                </h1>
                
                <div className="space-y-4">
                  <h2 className="text-[10px] font-black uppercase tracking-[0.3em] text-primary">Overview</h2>
                  <p className="text-xl text-neutral-400 leading-relaxed max-w-xl">
                    {props.description}
                  </p>
                </div>
              </div>

              <div className="pt-8 border-t border-white/10 flex items-center justify-between">
                <span className="text-neutral-500 font-mono text-xs uppercase tracking-widest">
                  {new Date(props.Date).toLocaleDateString('en-US', { month: 'long', day: 'numeric'})}
                </span>
                <PrimaryBtn target={true} link={`${props.website}`} text={"View on Behance"} />
              </div>
            </div>
          </div>
        </div>

        {/* --- Seamless Case Study Container --- */}
        <section className="overflow-hidden rounded-[3rem] border border-white/10 bg-neutral-900/40">
           <div 
            className="prose prose-invert prose-lg max-w-none 
              prose-headings:uppercase prose-headings:tracking-tighter prose-headings:font-black
              prose-p:text-neutral-400 prose-p:leading-loose
              prose-img:m-0 prose-img:w-full"
            dangerouslySetInnerHTML={{ __html: marked(props.body.raw) }} 
          />
        </section>

      </article>

      <Script
        id="design-item-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "CreativeWork",
            "name": props.title,
            "url": siteUrl + props.slug,
            "description": props.description,
            "image": siteUrl + props.thumbnail,
            "creator": { "@type": "Person", "name": "Eyad Farah" },
            "dateCreated": props.Date
          }),
        }}
      />
    </main>
  );
};

export default ProtoDetails;