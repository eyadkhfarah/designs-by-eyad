"use client";

import Image from "next/image";
import Link from "next/link";
import NavMenu from "./Navbar/NavMenu";
import { RiMenu3Line } from "react-icons/ri";
import NavMobile from "./Navbar/NavMobile";
import { useState } from "react";
import PrimaryBtn from "./Buttons/PrimaryBtn";

export default function Navbar() {
  const [open, setOepn] = useState(true);

  return (
    <>
      <nav className="flex lg:mx-28 mx-12 font-semibold lg:mt-28 mt-12 justify-between items-center py-6 border-y-2">
        <div className="flex items-center gap-14">
          <Link href={"/"} aria-label="Designs By Eyad">
            <Image
              alt="Designs By Eyad Logo"
              priority={true}
              src={"/logo.svg"}
              width={25}
              height={25}
            />
          </Link>

          <NavMenu />
        </div>
        <button onClick={() => setOepn(!open)}>
          <RiMenu3Line className="text-white text-3xl lg:hidden block" />
        </button>
        <div className="lg:block hidden">
          <PrimaryBtn target={false} link={"/contact"} text={"Contact Me"} />
        </div>
      </nav>
      <NavMobile open={open} setOpen={setOepn} />
    </>
  );
}
