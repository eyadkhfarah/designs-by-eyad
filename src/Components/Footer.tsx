import Link from "next/link";
import React from "react";
import { RiFacebookCircleFill, RiInstagramLine } from "react-icons/ri";
import PrimaryBtn from "./Buttons/PrimaryBtn";

export default function Footer() {
  return (
    <>
      <div className="grid place-items-center mx-6 mt-40 gap-8 text-center">
        <h2 className="text-5xl">Let&apos;s Orbit</h2>
        <div className="">
          <p>Ready to blast off into the design stratosphere together?</p>
          <p>
            Contact me and let&apos;s start orbiting around your creative
            vision!
          </p>
        </div>
        <PrimaryBtn target={false} link={"/contact"} text={"Contact Me"} />
      </div>
      <footer
        className="py-12 lg:mx-28 mx-12 text-center border-t-2 lg:flex grid gap-8 justify-between items-center border-t-gray-500 mt-28"
        id="contact"
      >
        <p className="lg:text-base text-sm lg:block hidden">
          © {new Date().getFullYear()} <span className="text-yellow-500">Designs by Eyad</span>. All rights reserved.
        </p>
        <div className="flex gap-6 justify-center items-center">
          <Link
            href={"https://www.facebook.com/designs.by.eyad"}
            target="_blank"
            title="Follow Me On Facebook"
          >
            <RiFacebookCircleFill className="text-4xl text-yellow-500" />
          </Link>
          <Link
            href={"https://www.instagram.com/designs.by.eyad"}
            target="_blank"
            title="Follow Me On Instagram"
          >
            <RiInstagramLine className="text-4xl text-yellow-500" />
          </Link>
        </div>
        <p className="lg:text-base text-sm lg:hidden">
          © {new Date().getFullYear()} <span className="text-yellow-500">Designs by Eyad</span>. All rights reserved.
        </p>
      </footer>
    </>
  );
}
