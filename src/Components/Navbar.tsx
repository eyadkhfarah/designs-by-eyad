"use client"

import Image from "next/image";
import Link from "next/link";
import NavMenu from "./Navbar/NavMenu";
import { RiMenu3Line } from "react-icons/ri";
import NavMobile from "./Navbar/NavMobile";
import { useState } from "react";

export default function Navbar() {
  const [open, setOepn] = useState(true)

  return (
    <>
      <nav className="flex lg:mx-28 mx-10 font-semibold lg:mt-28 mt-10 justify-between items-center py-5 border-y-2">
        <Link
          href={"/"}
          aria-label="Designs By Eyad"
          className="flex items-center gap-5"
        >
          <Image
            alt="Designs By Eyad Logo"
            priority={true}
            src={"/logo.svg"}
            width={25}
            height={25}
          />
          <span>Designs By eyad</span>
        </Link>
        <button onClick={() => setOepn(!open)}>
          <RiMenu3Line className="text-white text-3xl lg:hidden block" />
        </button>
        <NavMenu />
      </nav>
      <NavMobile open={open} setOpen={setOepn}/>
    </>
  );
}
