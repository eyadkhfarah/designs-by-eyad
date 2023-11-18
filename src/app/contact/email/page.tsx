import type { Metadata } from "next";
import React from "react";

const desc = "Contact me vai email address"

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
    </>
  );
}

export default Email;
