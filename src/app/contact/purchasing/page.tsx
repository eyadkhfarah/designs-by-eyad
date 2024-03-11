import type { Metadata } from "next";
import React from "react";
import Image from "next/image";

const desc = "Here where you can find out how to pay me to work with you";

export const metadata: Metadata = {
  title: "Purchasing",
  description: desc,
  alternates: {
    canonical: "/contact/purchasing",
  },
  openGraph: {
    title: "Purchasing",
    description: desc,
    url: "/contact/purchasing",
  },
};

export default function page() {
  return (
    <>
      <h2 className="uppercase text-xl">Purchasing Methods</h2>
      <div className="grid lg:grid-cols-2 lg:gap-6 gap-3 my-10">
        {/* <a
          href="tel:+201555715783"
          target="_blank"
          rel="noopener noreferrer"
          className="w-full p-8 bg-gray-900 font-bold rounded-3xl uppercase grid gap-6"
        >
          <div>
            <h3>Phone Cash</h3>
          </div>
        </a> */}
        <div className="w-full p-8 bg-gray-900 font-bold rounded-3xl uppercase grid gap-6">
          <h3>InstaPAy</h3>
          <Image
            alt="Instapay QR Code"
            src={"/instapay-qr-code.svg"}
            width={400}
            height={400}
            className="rounded-3xl"
          />
        </div>
      </div>
    </>
  );
}
