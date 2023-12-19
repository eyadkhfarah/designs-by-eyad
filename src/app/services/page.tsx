import ServicesCards from "@/Components/Services/ServicesCards";
import ToolsTabs from "@/Components/Services/ToolsTabs";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Services",
  description: "Look in what I offer from various services I do it",
  alternates: {
    canonical: "/services",
  },
  openGraph: {
    title: "Services",
    description: "Look in what I offer from various services I do it",
    url: "/services",
  },
};

export default function ServicesPage() {
  return (
    <>
      <section className="lg:px-28 p-10 grid gap-8">
        <h1 className="lg:text-[8rem] md:text-[5rem] text-[2rem] w-fit">
          Services
        </h1>

        <ServicesCards />
      </section>
      <section className="lg:px-28 p-10">
        <h2 className="uppercase text-4xl text-center my-12">
          Tools I Used In
        </h2>

        <ToolsTabs />
      </section>
    </>
  );
}
