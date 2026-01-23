import BrandFields from "@/Components/Client/BrandFields";
import ServicesCards from "@/Components/Services/ServicesCards";
import ToolsTabs from "@/Components/Services/ToolsTabs";
import H1 from "@/Components/TranslationTags/H1";
import { Metadata } from "next";

const meta = {
  title: "Services | Brand Identity & Social Media Design",
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
    type: "website",
  },
};

export default function ServicesPage() {
  return (
    <main className="min-h-screen pt-20">
      {/* --- Services Introduction --- */}
      <section className="max-w-7xl mx-auto px-6 py-16 md:py-24">
        <div className="flex flex-col gap-8 mb-16">
          <H1>ServicesPage.title</H1>
          <div className="h-1 w-24 bg-primary rounded-full" />
        </div>
        
        <ServicesCards />
      </section>

      {/* --- Brand Ecosystem / Clients --- */}
      <section className="bg-neutral-900/30 border-y border-white/5 py-24">
        <div className="max-w-7xl mx-auto px-6">
          <div className="mb-12">
            <h2 className="text-sm uppercase tracking-[0.3em] text-primary font-bold mb-4">
              Expertise
            </h2>
            <p className="text-3xl md:text-5xl font-bold text-white max-w-3xl">
              Building visual languages for diverse industries.
            </p>
          </div>
          <BrandFields />
        </div>
      </section>

      {/* --- The Stack --- */}
      <div className="max-w-7xl mx-auto px-6 py-16 md:py-32">
        <ToolsTabs />
      </div>

      {/* --- Final CTA Section --- */}
      <section className="max-w-7xl mx-auto px-6 pb-24 text-center">
        <div className="bg-primary p-12 md:p-20 rounded-[3rem] flex flex-col items-center gap-8">
            <h2 className="text-4xl md:text-6xl font-black text-black uppercase tracking-tighter">
                Ready to start?
            </h2>
            <p className="text-black/70 font-medium max-w-xl text-lg">
                Let's turn your ideas into a visual reality. Get in touch today for a custom consultation.
            </p>
            {/* You can drop your PrimaryBtn here with className="bg-black text-white" */}
        </div>
      </section>
    </main>
  );
}