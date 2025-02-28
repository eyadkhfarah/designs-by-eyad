import BrandFields from "@/Components/Client/BrandFields";
import ServicesCards from "@/Components/Services/ServicesCards";
import ToolsTabs from "@/Components/Services/ToolsTabs";
import { Metadata } from "next";

const meta = {
  title: "Services",
  description: "Offering graphic design services in Aswan, Egypt, including brand identity and social media design. Let’s work together to transform your brand's visual communication.",
  url: "/services",
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

export default function ServicesPage() {
  return (
    <>
      <section>
        <h1>Services</h1>

        <ServicesCards />
      </section>

      <section>
        <BrandFields />
      </section>
      
      <section>
        <h2 className="uppercase text-5xl text-center my-12">
          Tools I Used In
        </h2>

        <ToolsTabs />
      </section>
    </>
  );
}
