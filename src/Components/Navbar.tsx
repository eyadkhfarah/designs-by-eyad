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
      <nav
        className="fixed top-6 left-1/2 -translate-x-1/2 w-[90%] max-w-6xl z-50 
           bg-black/60 backdrop-blur-xl border border-white/10 rounded-full px-8 py-4 
           flex justify-between items-center"
      >
        <Link
          href={"/"}
          aria-label="Designs By Eyad"
          className="flex items-end gap-3 group"
        >
          <Image
            alt="Designs By Eyad Logo"
            priority={true}
            src={"/logo.svg"}
            width={20}
            height={20}
          />
          <span className="font-bold uppercase text-base/1 h-fit">
            Desgins
            <br />
            <span className="text-xl group-hover:text-primary transition ease-in-out duration-300">
              By Eyad
            </span>
          </span>
        </Link>

        <div className="items-center gap-11 lg:flex hidden">
          <NavMenu />
        </div>

        <button
          className="text-white text-3xl lg:hidden block"
          aria-label="open menu"
          onClick={() => setOepn(!open)}
        >
          <RiMenu3Line />
        </button>
      </nav>
      <NavMobile open={open} setOpen={setOepn} />
    </>
  );
}
