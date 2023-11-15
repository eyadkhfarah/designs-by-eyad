import ProCard from "@/Components/Portfolio/ProCard";
import React from "react";

export default function Web() {
  return (
    <>
      <section className="lg:px-28 p-10 grid gap-8">
        <h1 className="lg:text-[8rem] md:text-[5rem] text-[3rem] w-fit">Web</h1>

        <div className="grid lg:grid-cols-2 gap-6">
          <ProCard />
          <ProCard />
          <ProCard />
          <ProCard />
        </div>
      </section>
    </>
  );
}
