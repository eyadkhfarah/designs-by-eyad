import Link from "next/link";
import React from "react";

export default function ProCard({data}) {
  return (
    <Link href={'protfolio/' + data.slug}>
    <div className="pro-card">
      <div className="w-40 h-40 bg-gray-800 rounded-2xl"></div>
      <div className="">
        <h2 className="text-yellow-500 text-4xl mb-6">{data.meta.content.title}</h2>
        <p>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Deserunt
          dolor nesciunt atque, itaque vero iusto, ratione repellat aliquam
          natus fuga eos fugit eaque laborum! Cum aliquid deserunt quas totam
          eum.
        </p>
      </div>
    </div>
    </Link>
  );
}
