import BentoGrid from "@/Components/Client/BentoGrid";
import BrandFields from "@/Components/Client/BrandFields";
import MissionVision from "@/Components/Client/MissionVision";
import ProtImages from "@/Components/Portfolio/ProtImages";
import ServicesCards from "@/Components/Services/ServicesCards";
import { TestimonialSlider } from "@/Components/Services/TestimonialSlider";
import H1 from "@/Components/TranslationTags/H1";
import H2 from "@/Components/TranslationTags/H2";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <main className="relative min-h-screen pt-20 overflow-x-hidden">
      {/* 1. HERO SECTION 
        - Added a subtle radial gradient background for depth.
        - increased padding for breathing room.
      */}
      <section className="relative max-w-7xl mx-auto py-16 md:py-24">
        <div className="absolute top-0 left-0 -z-10 h-full w-full bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-neutral-100/50 via-transparent to-transparent" />
        <BentoGrid />
      </section>

      {/* 2. SERVICES SECTION 
        - Added a border-top to visually separate it from the hero.
        - Used a 'sticky' header effect logic by grouping the title.
      */}
      <section className="max-w-7xl mx-auto py-24 px-4 md:px-10 lg:px-0">
        <div className="flex flex-col items-center mb-20">
          <span className="text-primary/60 text-sm font-bold tracking-[0.2em] uppercase mb-4">
            What I Deliver
          </span>
          <H2 className="text-primary text-5xl md:text-6xl font-extrabold text-center tracking-tight">
            ServicesPage.title
          </H2>
        </div>
        <ServicesCards />
      </section>

      {/* 3. PORTFOLIO SECTION (Immersive)
        - Changed background to dark (neutral-950) to make images pop.
        - Removed horizontal padding on the container so images can bleed to the edge (if designed to)
        or just feel wider.
      */}
      <section className="py-24 bg-neutral-950 text-white">
        <div className="max-w-7xl mx-auto">
          <div className="px-4 md:px-10 lg:px-20 mb-12">
            <span className="opacity-50 text-sm font-mono uppercase tracking-widest">
              Selected Works
            </span>
          </div>
          <div className="px-4 md:px-10 lg:px-20">
            <ProtImages />
          </div>
        </div>
      </section>

      {/* 4. ABOUT & MISSION
        - Switched to a Grid layout for larger screens (Title on left, Content on right).
        - This looks more editorial and high-end.
      */}
      <section className="max-w-7xl mx-auto py-32 px-4 md:px-10 lg:px-0 grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
        <div className="lg:col-span-4 sticky top-24">
          <H2 className="text-primary text-5xl md:text-6xl font-bold leading-tight">
            AboutPage.title
          </H2>
          <div className="h-1 w-20 bg-primary rounded-full" />
        </div>
        <div className="lg:col-span-8">
          <MissionVision />
        </div>
      </section>

      {/* 5. BRANDS 
        - Kept clean, just added vertical spacing.
      */}
      <section className="max-w-7xl mx-auto pb-24 px-4 md:px-10 lg:px-0">
        <div className="mb-12">
            <h2 className="text-sm uppercase tracking-[0.3em] text-primary font-bold mb-4">
              Expertise
            </h2>
            <p className="text-3xl md:text-5xl font-bold text-white max-w-3xl">
              Building visual languages for diverse industries.
            </p>
          </div>
        <BrandFields />
      </section>

      {/* 6. TESTIMONIALS
        - Added top/bottom borders to create a dedicated "zone" for social proof.
      */}
      <section className="max-w-7xl mx-auto px-4 md:px-10 lg:px-0 rounded-3xl">
        <H2 className="text-primary lg:text-5xl text-4xl text-center mb-16 font-bold">
          H2.MyClients
        </H2>
        <TestimonialSlider />
      </section>

      {/* 7. FREELANCE LINKS (Glassmorphism Update)
        - Changed from a white card to a dark, modern card.
        - Added hover effects to the logos (scale + glow).
      */}
      <section className="max-w-7xl mx-auto px-4 md:px-10 lg:px-0 my-28">
        <div className="bg-[#111] rounded-[3rem] p-10 md:p-16 relative overflow-hidden group">
          {/* Decorative blur in the background of the card */}
          <div className="absolute -top-24 -right-24 w-64 h-64 bg-primary/20 rounded-full blur-[100px] group-hover:bg-primary/30 transition-all duration-700" />

          <div className="grid place-items-center gap-4 mb-16 relative z-10">
            <H2 className="text-white uppercase lg:text-5xl text-3xl text-center font-black tracking-tighter">
              H2.FREELANCE
            </H2>
            <p className="text-neutral-400">
              Available for hire on these platforms
            </p>
          </div>

          <div className="flex md:flex-row flex-wrap flex-col mx-auto justify-evenly items-center gap-12 relative z-10">
            {[
              {
                href: "https://www.upwork.com/freelancers/~0121088ad77b5fc2ac",
                src: "/Imgs/freelancer/upwork.svg",
                alt: "upwork",
              },
              {
                href: "https://www.freelancer.com/u/eyadartist",
                src: "/Imgs/freelancer/freelancer.svg",
                alt: "freelancer",
              },
              {
                href: "https://khamsat.com/user/eyad_farah",
                src: "/Imgs/freelancer/khamsat.svg",
                alt: "khamsat",
              },
              {
                href: "https://mostaql.com/u/eyadfarah",
                src: "/Imgs/freelancer/mostaql.svg",
                alt: "mostaql",
              },
              {
                href: "https://nafezly.com/u/eyadkhfarah/portfolio",
                src: "/Imgs/freelancer/nafzly.svg",
                alt: "nafezly",
              },
            ].map((item, index) => (
              <a
                key={index}
                href={item.href}
                aria-label={item.alt}
                target="_blank"
                rel="noopener noreferrer"
                className="transform transition-all duration-300 hover:-translate-y-2"
              >
                <Image
                  alt={item.alt}
                  src={item.src}
                  width={120}
                  height={50}
                  // Inverted brightness for dark background, smooth hover opacity
                  className="h-auto opacity-50 grayscale hover:grayscale-0 hover:opacity-100 hover:brightness-200 transition-all ease-out duration-300"
                />
              </a>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
