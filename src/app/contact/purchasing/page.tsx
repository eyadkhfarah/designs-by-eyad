import type { Metadata } from "next";
import React from "react";
import Image from "next/image";

const meta = {
  title: "Purchasing",
  description: "Explore my graphic design services and packages tailored to Egyptian businesses. Invest in professional brand identity and social media design to elevate your brand.",
  url: "/contact/purchasing",
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

export default function page() {
  return (
    <>
      <h2 className="uppercase text-xl">Purchasing Methods</h2>
      <div className="grid lg:grid-cols-2 lg:gap-6 gap-3 my-10">
        <a
          href="tel:+201555715783"
          target="_blank"
          rel="noopener noreferrer" className="w-full grid p-8 bg-dark font-bold rounded-3xl uppercase gap-6">

          <h3>NBE Phone Cash</h3>
          <Image
            alt="Instapay QR Code"
            src={"/Imgs/Purchasing/nbe-cash.png"}
            width={400}
            height={400}
            className="rounded-3xl"
          />
        </a>
        <a
          href="https://ipn.eg/S/eyadfarah/instapay/35P7cS"
          target="_blank"
          rel="noopener noreferrer" className="w-full lg:grid hidden p-8 bg-dark font-bold rounded-3xl uppercase gap-6">
          <h3>InstaPAy</h3>
          <Image
            alt="Instapay QR Code"
            src={"/Imgs/Purchasing/instapay-qr-code.png"}
            width={400}
            height={400}
            className="rounded-3xl"
          />
        </a>
        <a
          href="ipn://S/eyadfarah/instapay/35P7cS"
          target="_blank"
          rel="noopener noreferrer" className="w-full p-8 lg:hidden bg-dark font-bold rounded-3xl uppercase grid gap-6">
          <h3>InstaPAy</h3>
          <Image
            alt="Instapay QR Code"
            src={"/Imgs/Purchasing/instapay-qr-code.png"}
            width={400}
            height={400}
            className="rounded-3xl"
          />
        </a>
      </div>
    </>
  );
}
