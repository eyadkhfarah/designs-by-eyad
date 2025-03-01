import React from "react";
import Image from "next/image";
import { Metadata } from "next";
import ToolsTabs from "@/Components/Services/ToolsTabs";
import { RiGithubFill } from "react-icons/ri";
import PrimaryBtn from "@/Components/Buttons/PrimaryBtn";
import { TestimonialSlider } from "@/Components/Services/TestimonialSlider";
import MissionVision from "@/Components/Client/MissionVision";
import H2 from "@/Components/TranslationTags/H2";
import P from "@/Components/TranslationTags/P";
import H1 from "@/Components/TranslationTags/H1";

const meta = {
  title: "About",
  description: "Discover my Aswan-based graphic design studio, specializing in brand identity and social media design. Serving businesses across Egypt with creative solutions that captivate and convert.",
  url: "/about",
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

export default function About() {

  return (
    <>
      <section>
        <H1>AboutPage.title</H1>
        <section className="lg:grid-cols-2 grid gap-8">
          <div className="relative w-fit">
            <Image
              alt="Eyad Farah"
              title="Thats me in Alex but I'm in Aswan 🙂"
              src={"/me.png"}
              width={400}
              height={400}
              sizes="(max-width: 600px) 480px, (max-width: 1200px) 1024px, 1920px"
              className="rounded-full"
            />

            <div
              className="w-0 h-0 
  border-l-[50px] border-l-transparent
  border-b-[75px] border-b-primary
  border-r-[50px] border-r-transparent absolute bottom-24"
            ></div>
            <div
              className="w-0 h-0 
  border-l-[50px] border-l-transparent
  border-t-[75px] border-t-red-500
  border-r-[50px] border-r-transparent rotate-12 absolute bottom-24 right-0"
            ></div>
          </div>

          <div className="grid gap-7">
            <H2 className="text-3xl text-start">H2.MyName</H2>
            <P>AboutPage.Paragraph1</P>
            <P>AboutPage.Paragraph2</P>
          </div>
        </section>
      </section>

      <section>
        <MissionVision />
      </section>

      <ToolsTabs />

      <section className="my-28">
        <H2 className="lg:text-5xl text-4xl text-center my-12">H2.MyClients</H2>
        <TestimonialSlider />
      </section>

      {/* <section className="lg:px-28 p-10 lg:flex grid place-items-center gap-8 lg:justify-center">
        <RiGithubFill size={170} />
        <div className="grid lg:place-items-start place-items-center gap-6">
          <div className="grid gap-4">

            <h2 className="uppercase lg:text-left text-center text-4xl">
              Did my site inspire you?
            </h2>
            <p className="mb-6 lg:text-left text-center">Feel free to dive deeper into the code and customize it to your liking. <br /> Clone the GitHub repository to start your own project or contribute to the community.</p>
          </div>

          <PrimaryBtn link={"https://github.com/eyadkhfarah/designs-by-eyad"} target={true} text={"Clone the GitHub repository"} />

        </div>

      </section> */}
    </>
  );
}
