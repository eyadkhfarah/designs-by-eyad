import ProtImages from "@/Components/Portfolio/ProtImages";
import React from "react";

export const metadata = {
    title: "Protfolio"
}

export default function Protfolio() {
  return (
    <>
      <section className="lg:px-28 p-10 grid gap-8">
        <h1 className="lg:text-[8rem] md:text-[5rem] text-[3rem] w-fit">
          Profolio
        </h1>
      </section>

      <ProtImages />
    </>
  );
}
