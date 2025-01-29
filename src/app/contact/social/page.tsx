import type { Metadata } from "next";
import React from "react";
import {
  RiFacebookCircleFill,
  RiGithubFill,
  RiInstagramLine,
  RiLinkedinBoxFill,
  RiPinterestFill,
  RiPinterestLine,
  RiTiktokFill,
  RiTiktokLine,
  RiTwitterXLine,
} from "react-icons/ri";

const meta = {
  title: "Soical",
  description: "Follow me on social media to stay updated on my latest graphic design projects, brand identity creations, and social media design tips tailored for the Egyptian market.",
  url: "/contact/soical",
}

export const metadata: Metadata = {
  title: meta.title,
  description: meta.description,
  alternates: {
    canonical: meta.url,
  },
  openGraph: {
    title: meta.title,
    description: meta.description,
    url: meta.url,
  },
};

function Soical() {
  return (
    <>
      <h2 className="uppercase text-xl">My Social Media Accounts</h2>
      <div className="grid lg:grid-cols-2 lg:gap-6 gap-3 my-10">
        <a
          href="https://www.facebook.com/eyad.kh.farah"
          target="_blank"
          rel="noopener noreferrer"
          className="w-full lg:h-12 h-16 gap-5 bg-dark font-bold rounded-full uppercase flex items-center justify-center"
        >
          <RiFacebookCircleFill className="text-2xl" />
          Facebook
        </a>
        <a
          href="https://www.instagram.com/eyad.kh.farah/"
          target="_blank"
          rel="noopener noreferrer"
          className="w-full lg:h-12 h-16 gap-5 bg-dark font-bold rounded-full uppercase flex items-center justify-center"
        >
          <RiInstagramLine className="text-2xl" />
          Instagram
        </a>
        <a
          href="https://www.linkedin.com/comm/mynetwork/discovery-see-all?usecase=PEOPLE_FOLLOWS&followMember=eyadkhfarah"
          target="_blank"
          rel="noopener noreferrer"
          className="w-full lg:h-12 h-16 gap-5 bg-dark font-bold rounded-full uppercase flex items-center justify-center"
        >
          <RiLinkedinBoxFill className="text-2xl" />
          LinkedIn
        </a>
        <a
          href="https://www.pinterest.com/eyadkhfarah/"
          target="_blank"
          rel="noopener noreferrer"
          className="w-full lg:h-12 h-16 gap-5 bg-dark font-bold rounded-full uppercase flex items-center justify-center"
        >
          <RiPinterestFill className="text-2xl" />
          Pinterest
        </a>
        <a
          href="https://x.com/eyadkhfarahh"
          target="_blank"
          rel="noopener noreferrer"
          className="w-full lg:h-12 h-16 gap-5 bg-dark font-bold rounded-full uppercase flex items-center justify-center"
        >
          <RiTwitterXLine className="text-2xl" />
          Twitter
        </a>
        <a
          href="https://github.com/eyadkhfarah/"
          target="_blank"
          rel="noopener noreferrer"
          className="w-full lg:h-12 h-16 gap-5 bg-dark font-bold rounded-full uppercase flex items-center justify-center">
            <RiGithubFill className="text-2xl" />
            GitHub
          </a>
          <a href="https://www.tiktok.com/@eyadkhfarah" target="_blank"
          rel="noopener noreferrer"
          className="w-full lg:h-12 h-16 gap-5 bg-dark font-bold rounded-full uppercase flex items-center justify-center">
            <RiTiktokFill className="text-2xl" />
            TikTok
          </a>
      </div>
    </>
  );
}

export default Soical;
