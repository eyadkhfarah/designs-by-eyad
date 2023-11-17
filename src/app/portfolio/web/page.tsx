import ProCard from "@/Components/Portfolio/ProCard";
import React from "react";
import { allProtos } from "contentlayer/generated";
import Link from "next/link";

const getPro = async () => {
  const doc = allProtos;
  return doc;
};

export default async function Web() {
  const doc = await getPro();

  return (
    <>
      <section className="lg:px-28 p-10 grid gap-8">
        <h1 className="lg:text-[8rem] md:text-[5rem] text-[3rem] w-fit">Web</h1>

        <div className="grid lg:grid-cols-2 gap-6">
          {doc.map((website) => (
            <>
              <ProCard key={website._id} data={website} />
            </>
          ))}
        </div>
      </section>
    </>
  );
}
