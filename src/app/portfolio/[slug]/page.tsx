import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { MDXRemote } from "next-mdx-remote/rsc";

export async function generateStaticParams() {
  const files = fs.readdirSync(path.join("src/protfolio/web"));
  const paths = files.map((filename) => ({
    slug: filename.replace(".mdx", ""),
  }));

  return paths;
}

function getPost({ slug }) {
  const markdown = fs.readFileSync(
    path.join("src/protfolio/web", slug + ".mdx"),
    "utf-8"
  );

  const { data: front, content } = matter(markdown);

  return {
    front,
    slug,
    content,
  };
}

export default function ProtoDetials({ params }) {
  const props = getPost(params);
  console.log(props)

  return (
    <article>
      <MDXRemote source={props.content} />
    </article>
  );
}
