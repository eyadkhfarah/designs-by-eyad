import Link from "next/link";
import React from "react";
import { RiFacebookCircleFill, RiInstagramLine } from "react-icons/ri";
import PrimaryBtn from "./Buttons/PrimaryBtn";

export default function Footer() {
  return (
    <>
      <div className="grid place-items-center mx-6 mt-40 gap-5 text-center">
        <h2 className="text-5xl">Let&apos;s Orbit</h2>
        <div className="">
          <p>Ready to blast off into the design stratosphere together?</p>
          <br />
          <p>
            Contact me and let&apos;s start orbiting around your creative vision!
          </p>
        </div>
        <PrimaryBtn link={"mailto:eyadkhfarah@gmail.com"} text={"Contact Me"} />
      </div>
      <footer className="pb-10 text-center" id="contact">
        <div className="grid gap-10 mt-40 ">
          <div className="flex gap-6 justify-center items-center">
            <Link
              href={"https://www.facebook.com/designs.by.eyad"}
              target="_blank"
            >
              <RiFacebookCircleFill className="text-4xl text-yellow-500" />
            </Link>
            <Link
              href={"https://www.instagram.com/designs.by.eyad"}
              target="_blank"
            >
              <RiInstagramLine className="text-4xl text-yellow-500" />
            </Link>
          </div>
          <p className="text-yellow-500 lg:text-base text-sm">
            © {new Date().getFullYear()} Designs by Eyad. All rights reserved.
          </p>
        </div>
      </footer>
    </>
  );
}
