import { notFound } from "next/navigation";
import { allProtoWebs } from "contentlayer/generated";
import Image from "next/image";
import type { Metadata } from "next";
import PrimaryBtn from "@/Components/Buttons/PrimaryBtn";

interface PageProps {
  params: {
    slug: string;
  };
}

async function getPost(slug: string) {
  const markdown = allProtoWebs.find(
    (doc) => doc.slugAsParams.replace("web/", "") === slug
  );

  if (!markdown) notFound();

  return markdown;
}

export async function generateMetadata({
  params,
}: PageProps): Promise<Metadata> {
  const slug = params.slug;
  const markdown = allProtoWebs.find(
    (doc) => doc.slugAsParams.replace("web/", "") === slug
  );

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
      <h1 className="lg:text-[4rem] md:text-[3rem] text-[2rem] w-fit">
        {props?.title}
      </h1>
      <div className="grid lg:grid-cols-2 gap-8">
        <div className="lg:flex grid gap-4">
          <Image
            src={props?.thumnail}
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
              <div className="p-5 rounded-full uppercase font-bold bg-gray-900 w-fit">
                {props.Protype}
              </div>
            </div>
            <div className="grid gap-5">
              <h2 className="uppercase">Skills</h2>
              <ul className="flex items-center gap-5">
                {props.stack?.map((skill) => (
                  <li
                    key={skill}
                    className="p-5 rounded-full text-sm uppercase font-bold bg-gray-900 w-fit"
                  >
                    {skill}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        <div className="h-full rounded-2xl bg-gray-900"></div>
      </div>
    </article>
  );
};

export default ProtoDetials;
