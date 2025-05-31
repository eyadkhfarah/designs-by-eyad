import { notFound } from "next/navigation";
import { allProtoWebs } from "contentlayer/generated";
import Image from "next/image";
import type { Metadata } from "next";
import PrimaryBtn from "@/Components/Buttons/PrimaryBtn";
import { marked } from "marked";
import Script from "next/script";

type Params = Promise<{ slug: string }>

async function getPost(slug: string) {
  const markdown = allProtoWebs.find(
    (doc) => doc.slugAsParams.replace("web/", "") === slug
  );

  if (!markdown) notFound();

  return markdown;
}

export async function generateMetadata({ params }: { params: Params }): Promise<Metadata> {
  const slug = (await params).slug;
  const markdown = allProtoWebs.find(
    (doc) => doc.slugAsParams.replace("web/", "") === slug
  );

  return {
    title: markdown?.title,
    description: markdown?.description,
    alternates: {
      canonical: `/${markdown?.slug.slice(1)}`
    },
    openGraph: {
      title: markdown?.title,
      description: markdown?.description,
      type: "article",
      url: `/${markdown?.slug.slice(1)}`,
      siteName: "/",
      images: [
        {
          url: `/${markdown?.thumbnail.slice(1)}`,
          width: 1200,
          height: 630,
          alt: markdown?.title,
        },
      ],
    },
    twitter: {
      card: "summary"
    }
  };
}

const ProtoDetails = async ({ params }: { params: Params }) => {
  const props = await getPost((await params).slug);

  const siteUrl =
    process.env.NEXT_PUBLIC_DOMAIN_URL ||
    "https://designs-by-eyad.vercel.app";

  return (
    <>
      <article>
        <div className="grid gap-8">
          <div className="lg:flex items-center grid gap-5">
            <div className="p-4 bg-dark rounded-2xl w-fit h-fit text-white">
              {new Date(props?.Date ?? "").toLocaleDateString("En-US", {
                day: "2-digit",
                year: "numeric",
                month: "long",
                formatMatcher: "best fit",
              })}
            </div>
          </div>
          <h1>
            {props?.title}
          </h1>
        </div>
        <div className="grid gap-8 w-full">
          <div className="">
            <div className="lg:flex items-start h-fit grid gap-8">
              <Image
                src={props?.thumbnail}
                width={250}
                height={250}
                className="rounded-4xl h-fit lg:w-fit w-full"
                alt={props?.title}
                priority
              />
              <div className="flex flex-col justify-end gap-5 w-fit">
                <p>{props.description}</p>
                <div className="flex flex-wrap items-center gap-6">
                  <PrimaryBtn
                    target={true}
                    link={`${props.website}`}
                    text={"Go to the website"}
                  />
                  <div className="p-5 rounded-full uppercase font-bold bg-dark w-fit">
                    {props.Protype}
                  </div>
                </div>
                <div className="grid gap-5">
                  <h2 className="uppercase">Skills</h2>
                  <ul className="flex flex-wrap items-center gap-5">
                    {props.stack?.map((skill) => (
                      <li
                        key={skill}
                        className="p-5 rounded-full text-sm leading-0 uppercase font-bold bg-dark w-fit"
                      >
                        {skill}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>

          <div className={`overflow-hidden mx-auto md:max-w-7xl prose-li:text-white prose-sm md:prose-ul:mx-36 prose-ul:mx-10 rounded-4xl prose-headings:text-white prose-headings:mx-8 prose prose-lg md:prose-headings:mx-28 prose-p:text-white md:prose-p:mx-28 prose-p:mx-8 prose-img:m-0 w-full bg-dark`} dangerouslySetInnerHTML={{ __html: marked(props.body.raw) }}></div>
        </div>
      </article>

      <Script
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
              "creator": {
                "@type": "Person",
                "name": "Eyad Farah"
              },
              "dateCreated": props.Date
            }
          }),
        }}
      />
    </>
  );
};

export default ProtoDetails;