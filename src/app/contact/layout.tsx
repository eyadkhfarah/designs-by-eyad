import type { Metadata } from "next";
import React from "react";
import ContactList from "./ContactList";

const desc =
  "Contact me and let's start orbiting around your creative vision and also contact me through social networks and my emails and phone numbers";

export const metadata: Metadata = {
  title: {
    default: "Contact",
    template: "%s — Designs By Eyad",
  },
  description: desc,
  alternates: {
    canonical: "/contact",
  },
  openGraph: {
    title: {
      default: "Contact",
      template: "%s — Designs By Eyad",
    },
    description: desc,
    url: "/contact",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {

  return (
    <>
      <section className="lg:px-28 p-10 grid gap-8">
        <h1 className="lg:text-[8rem] md:text-[5rem] leading-none text-[2.7rem] w-fit">
          Contact
        </h1>
        <p className="lg:w-1/2 mb-8">
          Contact me and let&apos;s start orbiting around your creative vision
          and also contact me through social networks and my emails and phone
          numbers
        </p>
        <div className="grid w-full lg:grid-cols-4 gap-8">
          <ContactList />
          <div className="lg:col-span-3">{children}</div>
        </div>
      </section>
    </>
  );
}
