import { notFound } from "next/navigation";
import { allProtos } from "contentlayer/generated";
import Image from "next/image";
import type { Metadata } from "next";

interface PageProps {
  params: {
    slug: string;
  };
}

async function getPost(slug: string) {
  const markdown = allProtos.find((doc) => doc.slugAsParams === slug);

  if (!markdown) notFound();

  return markdown;
}

export async function generateMetadata({
  params,
}: PageProps): Promise<Metadata> {
  const slug = params.slug;
  const markdown = allProtos.find((doc) => doc.slugAsParams === slug);

  return {
    title: markdown?.title,
    description: markdown?.description,
    openGraph: {
      title: markdown?.title,
      description: markdown?.description,
      type: "article",
      url: `${process.env.NEXT_PUBLIC_SITE_URL}/${slug}`,
      siteName: process.env.NEXT_PUBLIC_SITE_NAME,
      images: [
        {
          url: `${process.env.NEXT_PUBLIC_SITE_URL}${markdown?.thumnail}`,
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

  return (
    <article className="lg:px-28 p-10 grid gap-8">
      <div className="lg:flex grid gap-4">
        <Image
          src={props?.thumnail}
          width={250}
          height={250}
          className="rounded-2xl"
          alt={props?.title}
        />
        <div className="grid gap-5 w-fit">
          <h1 className="lg:text-[5rem] md:text-[3rem] text-[3rem] w-fit">
            {props?.title}
          </h1>
          <p>{props.description}</p>

          <span className="p-6 rounded-full uppercase font-bold bg-gray-900 w-fit">
            {props.Protype}
          </span>
        </div>
      </div>
    </article>
  );
};

export default ProtoDetials;
