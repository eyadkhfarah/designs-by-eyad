"use client";

import Image from "next/image";
import React from "react";
import PrimaryBtn from "../Buttons/PrimaryBtn";
import { motion } from "framer-motion";

export default function ProtImages() {
  return (
    <>
      <div className="grid place-items-center w-full md:gap-8 gap-28">
        <div className="lg:flex gird gap-28 items-center group">
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
            className="grid gap-8"
          >
            <div className="gird">
              <h2 className="text-primary text-4xl mb-4">Colorful Web</h2>
              <p className="md:w-80">
                Stunning websites that pack a punch with vibrant colors and modern
                typography.
              </p>
            </div>

            <PrimaryBtn
              target={false}
              link={"/portfolio/web"}
              text={"Check My Websites"}
            />
          </motion.div>
        </div>

        <div className="lg:flex flex-row-reverse gird gap-28 items-center group">
          <div className="rounded-[3rem] w-fit aspect-square overflow-hidden mb-12">
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
            className="grid gap-8"
          >
            <div className="gird">
              <h2 className="text-primary text-4xl mb-4 w-7">
                Branding Brilliance
              </h2>
              <p className="md:w-80">
                Minimalist design shines bright in our sublime branding packages.
              </p>
            </div>
            <PrimaryBtn
              target={false}
              link={"/portfolio/designs"}
              text={"Check My Designs"}
            />
          </motion.div>
        </div>
      </div>
    </>
  );
}
