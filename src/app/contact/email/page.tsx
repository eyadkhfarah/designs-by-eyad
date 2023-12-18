import type { Metadata } from "next";
import React from "react";
import { RiMicrosoftFill, RiMicrosoftLine } from "react-icons/ri";
import { TbBrandGmail } from "react-icons/tb";

const desc = "Contact me vai email address";

export const metadata: Metadata = {
  title: "Email",
  description: desc,
  alternates: {
    canonical: "/contact/email",
  },
  openGraph: {
    title: "Email",
    description: desc,
    url: "/contact/email",
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
          className="w-full h-12 gap-5 bg-gray-900 font-bold rounded-full uppercase flex items-center justify-center"
        >
          <TbBrandGmail className="text-2xl" />
          Gmail
        </a>
        <a
          href="mail:eyadkhfarah@outlook.com"
          target="_blank"
          rel="noopener noreferrer"
          className="w-full h-12 gap-5 bg-gray-900 font-bold rounded-full uppercase flex items-center justify-center"
        >
          <RiMicrosoftFill className="text-2xl" />
          Outlook
        </a>
      </div>
    </>
  );
}

export default Email;
