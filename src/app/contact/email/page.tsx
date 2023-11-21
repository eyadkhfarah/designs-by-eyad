import type { Metadata } from "next";
import React from "react";

const desc = "Contact me vai email address";

export const metadata: Metadata = {
  title: "Email",
  description: desc,
  openGraph: {
    title: "Email",
    description: desc,
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
          eyadkhfarah@gmail.com
        </a>
        <a
          href="mail:eyadkhfarah@outlook.com"
          target="_blank"
          rel="noopener noreferrer"
          className="w-full h-12 gap-5 bg-gray-900 font-bold rounded-full uppercase flex items-center justify-center"
        >
          eyadkhfarah@outlook.com
        </a>
      </div>
    </>
  );
}

export default Email;
