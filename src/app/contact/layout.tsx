import type { Metadata } from "next";
import React from "react";
import ContactList from "./ContactList";

const desc = "Contact me and let's start orbiting around your creative vision!";

export const metadata: Metadata = {
  title: {
    default: "Contact",
    template: "%s — Designs By Eyad",
  },
  description: desc,
  openGraph: {
    title: {
      default: "Contact",
      template: "%s — Designs By Eyad",
    },
    description: desc,
  },
};

interface layoutProps {}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <section className="lg:px-28 p-10 grid gap-8">
      <h1 className="lg:text-[8rem] md:text-[5rem] text-[3rem] w-fit">
        Contact
      </h1>
      <div className="grid w-full lg:grid-cols-4 gap-8">
        <ContactList />
        <div className="lg:col-span-3">{children}</div>
      </div>
    </section>
  );
}
