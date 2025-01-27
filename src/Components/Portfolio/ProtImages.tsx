"use client";

import Image from "next/image";
import React from "react";
import PrimaryBtn from "../Buttons/PrimaryBtn";
import { motion } from "framer-motion";

export default function ProtImages() {
  return (
    <section className="lg:px-44 md:px-30 px-10 my-10">
      <div className="grid w-full gap-16">
        <div className="lg:flex gird justify-between items-center w-full group">
          <div className="rounded-[3rem] w-fit aspect-square overflow-hidden mb-12">
            <Image
              alt="coding"
              src={"/coding.webp"}
              width={544}
              height={544}
              sizes="(max-width: 600px) 480px, (max-width: 1200px) 1024px, 1920px"
              className="group-hover:scale-110 transition-all ease-in-out duration-300 aspect-square object-cover saturate-0"
            />
          </div>

          <motion.div
            initial={{ opacity: 0, translateY: 50 }}
            whileInView={{ opacity: 1, translateY: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.5 }}
            className=""
          >
            <h2 className="text-primary text-4xl mb-6">Colorful Web</h2>
            <p className="md:w-80 mb-8">
              Stunning websites that pack a punch with vibrant colors and modern
              typography.
            </p>
            <PrimaryBtn
              target={false}
              link={"/portfolio/web"}
              text={"Check My Websites"}
            />
          </motion.div>
        </div>

        <div className="lg:flex grid justify-between w-full items-center group">
          <div className="lg:hidden rounded-[3rem] w-fit overflow-hidden mb-12">
            <Image
              alt="desgins"
              src={"/desgin.webp"}
              width={544}
              height={544}
              sizes="(max-width: 600px) 480px, (max-width: 1200px) 1024px, 1920px"
              className="group-hover:scale-110 transition-all ease-in-out duration-300 aspect-square object-cover"
            />
          </div>
          <motion.div
            initial={{ opacity: 0, translateY: 50 }}
            whileInView={{ opacity: 1, translateY: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.5 }}
          >
            <h2 className="text-primary text-4xl mb-6">
              Branding Brilliance
            </h2>
            <p className="md:w-80 mb-14">
              Minimalist design shines bright in our sublime branding packages.
            </p>
            <PrimaryBtn
              target={false}
              link={"/portfolio/designs"}
              text={"Check My Designs"}
            />
          </motion.div>
          <div className="rounded-[3rem] overflow-hidden mb-12">
            <Image
              alt="desgins"
              src={"/desgin.webp"}
              width={544}
              height={544}
              className="group-hover:scale-110 lg:block hidden transition-all ease-in-out duration-300 aspect-square object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
