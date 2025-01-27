import type { Metadata } from "next";
import React from "react";

const desc = "Contact me vai phone number or Whatsapp";

export const metadata: Metadata = {
  title: "Phone",
  description: desc,
  alternates: {
    canonical: "/contact/phone",
  },
  openGraph: {
    title: "Phone",
    description: desc,
    url: "/contact/phone",
  },
};

function Phone() {
  return (
    <>
      <h2 className="uppercase text-xl">My Phone Number</h2>
      <div className="grid lg:grid-cols-2 lg:gap-6 gap-3 my-10">
        <a
          href="tel:+201555715783"
          target="_blank"
          rel="noopener noreferrer"
          className="w-full h-12 gap-5 bg-dark font-bold rounded-full uppercase flex items-center justify-center"
        >
          01555715783
        </a>
        <a
          href="tel:+201158804189"
          target="_blank"
          rel="noopener noreferrer"
          className="w-full h-12 gap-5 bg-dark font-bold rounded-full uppercase flex items-center justify-center"
        >
          01158804189
        </a>
      </div>
    </>
  );
}

export default Phone;
