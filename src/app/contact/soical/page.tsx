import type { Metadata } from "next";
import React from "react";
import {
  RiFacebookCircleFill,
  RiGithubFill,
  RiInstagramLine,
  RiLinkedinBoxFill,
  RiTiktokFill,
  RiTiktokLine,
  RiTwitterXLine,
} from "react-icons/ri";

const desc = "Follow me in my social media accounts";

export const metadata: Metadata = {
  title: "Soical",
  description: desc,
  alternates: {
    canonical: "/contact/soical"
  },
  openGraph: {
    title: "Soical",
    description: desc,
    url: "/contact/soical"
  },
};

function Soical() {
  return (
    <>
      <h2 className="uppercase text-xl">My Soical Media Accounts</h2>
      <div className="grid lg:grid-cols-2 lg:gap-6 gap-3 my-10">
        <a
          href="https://www.facebook.com/eyad.kh.farah"
          target="_blank"
          rel="noopener noreferrer"
          className="w-full lg:h-12 h-16 gap-5 bg-gray-900 font-bold rounded-full uppercase flex items-center justify-center"
        >
          <RiFacebookCircleFill className="text-2xl" />
          Facebook
        </a>
        <a
          href="https://www.instagram.com/eyad.kh.farah/"
          target="_blank"
          rel="noopener noreferrer"
          className="w-full lg:h-12 h-16 gap-5 bg-gray-900 font-bold rounded-full uppercase flex items-center justify-center"
        >
          <RiInstagramLine className="text-2xl" />
          Instagram
        </a>
        <a
          href="https://www.linkedin.com/in/eyadkhfarah/"
          target="_blank"
          rel="noopener noreferrer"
          className="w-full lg:h-12 h-16 gap-5 bg-gray-900 font-bold rounded-full uppercase flex items-center justify-center"
        >
          <RiLinkedinBoxFill className="text-2xl" />
          LinkedIn
        </a>
        <a
          href="https://twitter.com/eyadkhfarah"
          target="_blank"
          rel="noopener noreferrer"
          className="w-full lg:h-12 h-16 gap-5 bg-gray-900 font-bold rounded-full uppercase flex items-center justify-center"
        >
          <RiTwitterXLine className="text-2xl" />
          Twitter
        </a>
        <a
          href="https://github.com/eyadkhfarah/"
          target="_blank"
          rel="noopener noreferrer"
          className="w-full lg:h-12 h-16 gap-5 bg-gray-900 font-bold rounded-full uppercase flex items-center justify-center">
            <RiGithubFill className="text-2xl" />
            GitHub
          </a>
          <a href="https://www.tiktok.com/@eyadkhfarah" target="_blank"
          rel="noopener noreferrer"
          className="w-full lg:h-12 h-16 gap-5 bg-gray-900 font-bold rounded-full uppercase flex items-center justify-center">
            <RiTiktokFill className="text-2xl" />
            TikTok
          </a>
      </div>
    </>
  );
}

export default Soical;
