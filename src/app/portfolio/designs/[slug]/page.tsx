import { notFound } from "next/navigation";
import { allProtoDesigns } from "contentlayer/generated";
import Image from "next/image";
import type { Metadata } from "next";
import PrimaryBtn from "@/Components/Buttons/PrimaryBtn";
import { getMDXComponent } from "next-contentlayer/hooks";

interface PageProps {
  params: {
    slug: string;
  };
}

async function getPost(slug: string) {
  const markdown = allProtoDesigns.find(
    (doc) => doc.slugAsParams.replace("designs/", "") === slug
  );

  if (!markdown) notFound();

  return markdown;
}

export async function generateMetadata({
  params,
}: PageProps): Promise<Metadata> {
  const slug = params.slug;
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

const ProtoDetials = async ({ params }: PageProps) => {
  const props = await getPost(params.slug);

  const MDX = getMDXComponent(props.body.code);

  return (
    <article className="lg:px-28 p-10 grid gap-8">
      <h1 className="lg:text-[4rem] md:text-[3rem] text-[2rem] w-fit">
        {props?.title}
      </h1>
      <div className="grid lg:grid-cols-2 gap-8">
        <div className="">
          <div className="lg:flex h-fit sticky top-24 grid gap-8">
            <Image
              src={props?.thumnail}
              width={250}
              height={250}
              sizes="(max-width: 600px) 480px, (max-width: 1200px) 1024px, 1920px"
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
                <div className="p-5 rounded-full uppercase font-bold bg-gray-900 w-fit">
                  {props.Protype}
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="h-full overflow-hidden rounded-2xl bg-gray-900">
          <MDX />
        </div>
      </div>
    </article>
  );
};

export default ProtoDetials;
