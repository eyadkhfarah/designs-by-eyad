import React from "react";
import Image from "next/image";
import { Metadata } from "next";
import ToolsTabs from "@/Components/Services/ToolsTabs";
import PrimaryBtn from "@/Components/Buttons/PrimaryBtn";
import { TestimonialSlider } from "@/Components/Services/TestimonialSlider";
import MissionVision from "@/Components/Client/MissionVision";
import H2 from "@/Components/TranslationTags/H2";
import P from "@/Components/TranslationTags/P";
import H1 from "@/Components/TranslationTags/H1";

const meta = {
  title: "About | Eyad Farah - Designer in Aswan",
  description: "Discover my Aswan-based graphic design studio, specializing in brand identity and social media design. Serving businesses across Egypt with creative solutions.",
  url: "/about",
}

export const metadata: Metadata = {
  title: meta.title,
  description: meta.description,
  alternates: { canonical: meta.url },
  openGraph: {
    title: meta.title,
    description: meta.description,
    url: meta.url,
    type: "profile",
  },
};

export default function About() {
  return (
    <main className="min-h-screen pt-24 pb-20">
      {/* --- Intro Section --- */}
      <section className="max-w-7xl mx-auto px-6">
        <div className="mb-12">
           <H1>AboutPage.title</H1>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          {/* Left: Image with Geometric Accents */}
          <div className="lg:col-span-5 relative flex justify-center lg:justify-start">
            <div className="relative z-10 h-fit p-2 border border-white/10 rounded-full bg-neutral-900/50 backdrop-blur-sm">
              <Image
                alt="Eyad Farah"
                title="That's me in Alex but I'm in Aswan 🙂"
                src="/me.png"
                width={450}
                height={450}
                priority
                className="rounded-full grayscale hover:grayscale-0 transition-all duration-700 ease-in-out object-cover"
              />
            </div>

            {/* Geometric Decorations */}
            <div className="absolute -bottom-6 -left-6 w-0 h-0 
              border-l-[40px] border-l-transparent
              border-b-[60px] border-b-primary
              border-r-[40px] border-r-transparent -rotate-12 z-0 opacity-80" 
            />
            <div className="absolute top-10 -right-4 w-0 h-0 
              border-l-[30px] border-l-transparent
              border-t-[50px] border-t-red-500
              border-r-[30px] border-r-transparent rotate-45 z-0 opacity-60" 
            />
          </div>

          {/* Right: Bio Text */}
          <div className="lg:col-span-7 flex flex-col gap-8">
            <div className="flex flex-col gap-4">
              <span className="text-primary font-mono tracking-widest text-sm uppercase">Creative Director</span>
              <H2 className="text-4xl md:text-5xl lg:text-6xl font-black tracking-tighter text-start">H2.MyName</H2>
            </div>
            
            <div className="space-y-6 text-neutral-400 text-lg md:text-xl leading-relaxed max-w-2xl">
              <P>AboutPage.Paragraph1</P>
              <P>AboutPage.Paragraph2</P>
            </div>

            <div className="pt-4">
               <PrimaryBtn link="/contact" text="Let's Work Together" />
            </div>
          </div>
        </div>
      </section>

      {/* --- Philosophy Section --- */}
      <section className="py-24 bg-neutral-900/20 border-y border-white/5 my-20">
        <div className="max-w-7xl mx-auto px-6">
          <MissionVision />
        </div>
      </section>

      {/* --- Skills & Tools --- */}
      <div className="max-w-7xl mx-auto px-6 py-20">
        <ToolsTabs />
      </div>

      {/* --- Testimonials --- */}
      <section className="max-w-7xl mx-auto px-6 py-20">
        <div className="bg-neutral-900 border border-white/5 p-10 md:p-20 rounded-[3.5rem] relative overflow-hidden">
          {/* Background Highlight */}
          <div className="absolute -top-24 -right-24 w-64 h-64 bg-primary/10 blur-[100px] rounded-full" />
          
          <header className="mb-16 text-center lg:text-left">
            <H2 className="lg:text-6xl text-4xl font-black uppercase tracking-tighter mb-4">H2.MyClients</H2>
            <div className="h-1.5 w-20 bg-primary rounded-full hidden lg:block" />
          </header>

          <TestimonialSlider />
        </div>
      </section>
    </main>
  );
}