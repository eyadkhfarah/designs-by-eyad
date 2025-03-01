import BrandFields from "@/Components/Client/BrandFields";
import ServicesCards from "@/Components/Services/ServicesCards";
import ToolsTabs from "@/Components/Services/ToolsTabs";
import H1 from "@/Components/TranslationTags/H1";
import H2 from "@/Components/TranslationTags/H2";
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
        <H1>ServicesPage.title</H1>

        <ServicesCards />
      </section>

      <section>
        <BrandFields />
      </section>

      <ToolsTabs />
    </>
  );
}
