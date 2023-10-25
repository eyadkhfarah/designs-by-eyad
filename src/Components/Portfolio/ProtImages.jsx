import Image from "next/image";
import React from "react";
import PrimaryBtn from "../Buttons/PrimaryBtn";

export default function ProtImages() {
  return (
    <section className="lg:px-60 md:px-30 px-10 my-10">
      <div className="grid md:grid-cols-2 justify-between gap-8">
        <div className="grid gap-6 group">
          <div className="rounded-[3rem] overflow-hidden mb-10">
            <Image
              src={"/coding.webp"}
              width={720}
              height={720}
              className="group-hover:scale-110 transition-all ease-in-out duration-300 aspect-square object-cover saturate-0"
            />
          </div>

          <h2 className="text-yellow-500 text-4xl">Colorful Web</h2>
          <p className="md:w-80">
            Stunning websites that pack a punch with vibrant colors and modern
            typography.
          </p>
          <PrimaryBtn link={"/portfolio/web"} text={"Check My Websites"}/>
        </div>
        <div className="grid gap-6 group">
          <div className="rounded-[3rem] overflow-hidden mb-10">
            <Image
              src={"/desgin.webp"}
              width={720}
              height={820}
              className="group-hover:scale-110 transition-all ease-in-out duration-300 aspect-square object-cover"
            />
          </div>
          <h2 className="text-yellow-500 text-4xl">Branding Brilliance</h2>
          <p className="md:w-80">
            Minimalist design shines bright in our sublime branding packages.
          </p>
          <PrimaryBtn link={"/portfolio/designs"} text={"Check My Designs"}/>
        </div>
      </div>
    </section>
  );
}
