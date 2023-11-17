import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { MDXRemote } from "next-mdx-remote/rsc";
import { FC } from "react";
import { notFound } from "next/navigation";
import { allProtos } from "contentlayer/generated";
import Image from "next/image";

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

const ProtoDetials = async ({ params }: PageProps) => {
  const props = await getPost(params.slug);

  return (
    <article className="lg:px-28 p-10 grid gap-8">
      <div className="flex gap-4">
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

          <span className="p-6 rounded-full uppercase font-bold bg-gray-900 w-fit">{props.Protype}</span>
        </div>
      </div>
    </article>
  );
};

export default ProtoDetials;
