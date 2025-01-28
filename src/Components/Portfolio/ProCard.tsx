import Image from "next/image";
import Link from "next/link";
import React from "react";

type Props = {
  data: {
    slug: string,
    title: string,
    description: string,
    Protype: string,
    thumnail: string
  }
}

export default function ProCard(data: Props) {
  return (
    <Link href={`${data.data.slug}`}>
      <div className="pro-card">
        <Image src={data.data.thumnail} sizes="(max-width: 600px) 480px, (max-width: 1200px) 1024px, 1920px" width={160} height={160} className="lg:w-40 w-full lg:h-40 rounded-2xl" alt={data.data.title} />

        <div className="grid content-between">
          <div className="grid">
            <h2 className="text-primary text-4xl">{data.data.title}</h2>
            <p className="lg:text-base text-sm line-clamp-2">{data.data.description}</p>
          </div>

            <div className="p-3 mt-8 rounded-full leading-0 text-sm uppercase font-bold bg-primary text-dark w-fit">
              {data.data.Protype}
            </div>
        </div>
      </div>
    </Link>
  );
}
