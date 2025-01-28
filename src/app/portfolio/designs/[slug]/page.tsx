import { notFound } from "next/navigation";
import { allProtoDesigns } from "contentlayer/generated";
import Image from "next/image";
import type { Metadata } from "next";
import PrimaryBtn from "@/Components/Buttons/PrimaryBtn";
import { getMDXComponent } from "next-contentlayer/hooks";
import { marked } from "marked";

type Params = Promise<{ slug: string }>

async function getPost(slug: string) {
  const markdown = allProtoDesigns.find(
    (doc) => doc.slugAsParams.replace("designs/", "") === slug
  );

  if (!markdown) notFound();

  return markdown;
}



export async function generateMetadata({ params }: { params: Params }): Promise<Metadata> {
  const { slug } = await params
  const markdown = allProtoDesigns.find(
    (doc) => doc.slugAsParams.replace("designs/", "") === slug
  );

  return {
    title: markdown?.title,
    description: markdown?.description,
    alternates: {
      canonical: `/${markdown?.slug.slice(1)}`,
    },
    openGraph: {
      title: markdown?.title,
      description: markdown?.description,
      type: "article",
      url: `/${markdown?.slug.slice(1)}`,
      siteName: "/",
      images: [
        {
          url: `/${markdown?.thumnail.slice(1)}`,
          width: 1200,
          height: 630,
          alt: markdown?.title,
        },
      ],
    },
  };
}

const ProtoDetials = async ({ params }: { params: Params }) => {
  const props = await getPost((await params).slug);

  const Bg = props.BGColor

  return (
    <article>
      <h1 className="lg:text-[4rem] md:text-[3rem] text-[2rem] w-fit">
        {props?.title}
      </h1>
      <div className="grid gap-8 w-full">
        <div className="">
          <div className="lg:flex items-start h-fit grid gap-8">
            <Image
              src={props?.thumnail}
              width={250}
              height={250}
              className="rounded-2xl h-fit lg:w-fit w-full"
              alt={props?.title}
            />

            <div className="flex flex-col justify-end gap-5 w-fit">
              <p>{props.description}</p>
              <div className="flex flex-wrap items-center gap-6">
                <PrimaryBtn
                  target={true}
                  link={`${props.website}`}
                  text={"Go to Behance"}
                />
                <div className="p-5 rounded-full uppercase font-bold bg-dark w-fit">
                  {props.Protype}
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className={`overflow-hidden mx-auto md:max-w-7xl rounded-2xl prose prose-lg prose-img:m-0 w-full bg-dark`} dangerouslySetInnerHTML={{ __html: marked(props.body.raw) }}></div>
      </div>
    </article>
  );
};

export default ProtoDetials;
