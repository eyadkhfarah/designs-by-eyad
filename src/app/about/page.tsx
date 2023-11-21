import React from "react";
import Image from "next/image";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "About",
  description: "Read about me and why I made this projects",
};

export default function About() {
  return (
    <section className="lg:px-28 p-10 grid gap-8 ">
      <h1 className="lg:text-[8rem] md:text-[5rem] text-[3rem] w-fit">
        WHO I AM?
      </h1>
      <div className="lg:grid-cols-2 grid gap-8">
        <div className="relative w-fit">
          <Image
            alt="Eyad Farah"
            title="Thats me 🙂"
            src={"/me.png"}
            width={400}
            height={400}
            className="rounded-full"
          />

          <div
            className="w-0 h-0 
  border-l-[50px] border-l-transparent
  border-b-[75px] border-b-yellow-500
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
          <h2 className="uppercase">My Name is Eyad and nice to meet you 🙂</h2>
          <p>
            I always thought my dream was to be a artist for a little indie
            publishing company, chill out in to the club and take a table and
            draw. I gravitated toward proofreading and quality control positions
            and even started my own artwork business. But I kind of just felt
            meh. I yearned to learn more, yearned to learn something different.
          </p>
          <p>
            I started Photoshop since I want to make a social media design for
            my business profile and I learned the fundamental of design and I
            was so enthusiastic about it, it was my lovely moment when I export
            my first Photoshop design and I was so good not wow because this is
            my first design and the I had improve my design skills until I
            learned a lot like logo design, vector art, manipulating photos and
            drawing in Photoshop.
          </p>
        </div>
      </div>
    </section>
  );
}
