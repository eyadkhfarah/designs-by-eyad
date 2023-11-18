import type { Metadata } from "next";
import React from "react";

const desc = "Follow me in my social media accounts";

export const metadata: Metadata = {
  title: "Soical",
  description: desc,

  openGraph: {
    title: "Soical",
    description: desc,
  },
};

function Soical() {
  return (
    <>
      <h2 className="uppercase text-xl">My Soical Media Accounts</h2>
    </>
  );
}

export default Soical;
