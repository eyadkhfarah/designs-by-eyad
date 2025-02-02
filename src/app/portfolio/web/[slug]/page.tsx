import { notFound } from "next/navigation";
import { allProtoWebs } from "contentlayer/generated";
import Image from "next/image";
import type { Metadata } from "next";
import PrimaryBtn from "@/Components/Buttons/PrimaryBtn";
import { marked } from "marked";

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
  };
}

const ProtoDetails = async ({ params }: { params: Params }) => {
  const props = await getPost((await params).slug);

  return (
    <article>
      <div className="grid gap-8">
        <div className="p-4 bg-dark rounded-2xl w-fit h-fit text-white">
          <span>
            {new Date(props?.Date ?? "").toLocaleDateString("En-US", {
              day: "2-digit",
              year: "numeric",
              month: "long",
              formatMatcher: "best fit",
            })}
          </span>
        </div>
        <h1>
          {props?.title}
        </h1>
      </div>
      <div className="grid gap-8">
        <div className="lg:flex h-fit grid gap-8">
          <Image
            src={props?.thumbnail}
            width={250}
            height={250}
            className="rounded-2xl h-fit lg:w-fit w-full"
            alt={props?.title}
          />
          <div className="flex flex-col justify-end gap-5 w-fit">
            <p>{props.description}</p>
            <div className="flex items-center gap-6">
              <PrimaryBtn
                target={true}
                link={`${props.website}`}
                text={"Go to the website"}
              />
              <div className="p-5 rounded-full leading-0 uppercase font-bold bg-dark w-fit">
                {props.Protype}
              </div>
            </div>
            <div className="grid gap-5">
              <h2 className="uppercase">Skills</h2>
              <ul className="flex items-center gap-5">
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

        <div className={`overflow-hidden mx-auto md:max-w-7xl prose-li:text-white md:prose-ul:mx-36 prose-ul:mx-10 rounded-2xl prose-headings:text-white prose-headings:mx-8 prose prose-lg md:prose-headings:mx-28 prose-p:text-white md:prose-p:mx-28 prose-p:mx-8 prose-img:m-0 w-full bg-dark`} dangerouslySetInnerHTML={{ __html: marked(props.body.raw) }}></div>
      </div>
    </article>
  );
};

export default ProtoDetails;