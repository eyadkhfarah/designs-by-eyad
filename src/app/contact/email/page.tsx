import type { Metadata } from "next";
import React from "react";
import { RiMicrosoftFill, RiMicrosoftLine } from "react-icons/ri";
import { TbBrandGmail } from "react-icons/tb";

const meta = {
  title: "Email",
  description: "each out via email for inquiries about graphic design services, including brand identity and social media design. Based in Aswan, Egypt, I’m ready to bring your vision to life.",
  url: "/contact/email",
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

function Email() {
  return (
    <>
      <h2 className="uppercase text-xl">My Email Addresses</h2>
      <div className="grid gap-6 my-10">
        <a
          href="mail:eyadkhfarah@gmail.com"
          target="_blank"
          rel="noopener noreferrer"
          className="w-full h-12 gap-5 bg-dark font-bold rounded-full uppercase flex items-center justify-center"
        >
          <TbBrandGmail className="text-2xl" />
          Gmail
        </a>
        <a
          href="mail:eyadkhfarah@outlook.com"
          target="_blank"
          rel="noopener noreferrer"
          className="w-full h-12 gap-5 bg-dark font-bold rounded-full uppercase flex items-center justify-center"
        >
          <RiMicrosoftFill className="text-2xl" />
          Outlook
        </a>
      </div>
    </>
  );
}

export default Email;
