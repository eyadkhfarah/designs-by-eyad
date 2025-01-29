import Link from "next/link";
import React from "react";
import { RiFacebookCircleFill, RiInstagramLine, RiLinkedinFill, RiYoutubeFill } from "react-icons/ri";
import PrimaryBtn from "./Buttons/PrimaryBtn";

export default function Footer() {
  return (
    <>
      <section className="grid place-items-center text-center">
        <h3 className="text-5xl">Let&apos;s Orbit</h3>
        <div className="">
          <p>Ready to blast off into the design stratosphere together?</p>
          <p>
            Contact me and let&apos;s start orbiting around your creative
            vision!
          </p>
        </div>
        <PrimaryBtn target={false} link={"/contact"} text={"Contact Me"} />
      </section>
      <footer
        id="contact"
      >
        <p className="md:text-base text-sm md:block hidden">
          © {new Date().getFullYear()} <span className="text-primary">Designs by Eyad</span>. All rights reserved.
        </p>
        <div className="flex gap-6 justify-center items-center">
          <Link
            href={"https://www.facebook.com/designs.by.eyad"}
            target="_blank"
            title="Follow Me On Facebook"
          >
            <RiFacebookCircleFill className="text-4xl text-primary" />
          </Link>
          <Link
            href={"https://www.instagram.com/designs.by.eyad"}
            target="_blank"
            title="Follow Me On Instagram"
          >
            <RiInstagramLine className="text-4xl text-primary" />
          </Link>
          <Link
            href={"https://www.linkedin.com/company/designsbyeyad"}
            target="_blank"
            title="Follow Me On LinkedIn"
          >
            <RiLinkedinFill className="text-4xl text-primary" />
          </Link>
          <Link
            href={"https://www.youtube.com/@designsbyeyad"}
            target="_blank"
            title="Subscribe MY Channel On YouTube"
          >
            <RiYoutubeFill className="text-4xl text-primary" />
          </Link>
        </div>
        <p className="md:text-base mt-8 text-xs text-center w-full md:hidden">
          © {new Date().getFullYear()} <span className="text-primary">Designs by Eyad</span>. All rights reserved.
        </p>
      </footer>
    </>
  );
}
