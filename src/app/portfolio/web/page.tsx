import ProCard from "@/Components/Portfolio/ProCard";
import React from "react";
import fs from "fs";
import path from "path";
import matter from "gray-matter";

export default function Web() {
  const proDir = "src/protfolio/web";
  const files = fs.readdirSync(path.join(proDir));

  const proto = files.map((file) => {
    const fileContent = fs.readFileSync(path.join(proDir, file), "utf-8");
    const data = matter(fileContent);

    return {
      meta: data,
      slug: file.replace(".mdx", ""),
    };
  });

  console.log(proto);

  return (
    <>
      <section className="lg:px-28 p-10 grid gap-8">
        <h1 className="lg:text-[8rem] md:text-[5rem] text-[3rem] w-fit">Web</h1>

        <div className="grid lg:grid-cols-2 gap-6">
          {proto.map((website) => (
            <ProCard key={website.slug} data={website} />
          ))}
        </div>
      </section>
    </>
  );
}
