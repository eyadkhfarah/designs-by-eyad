import type { Metadata } from "next";
import React from "react";

const desc = "Contact me vai phone number or Whatsapp"

export const metadata: Metadata = {
  title: "Phone",
  description: desc,
  openGraph: {
    title: "Phone",
    description: desc,
  },
};

function Phone() {
  return (
    <>
      <h2 className="uppercase text-xl">My Phone Number</h2>
    </>
  );
}

export default Phone;
