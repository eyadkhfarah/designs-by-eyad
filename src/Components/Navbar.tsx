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
      <nav className="">
        <Link href={"/"} aria-label="Designs By Eyad" className="flex items-end gap-3 group">
          <Image
            alt="Designs By Eyad Logo"
            priority={true}
            src={"/logo.svg"}
            width={20}
            height={20}
          />
          <span className="font-bold uppercase text-base/1 h-fit">Desgins<br /><span className="text-xl group-hover:text-primary transition ease-in-out duration-300">By Eyad</span></span>
        </Link>


        <div className="items-center gap-11 lg:flex hidden">
          <NavMenu />
          <PrimaryBtn target={false} link={"/contact"} text={"Contact Me"} />
        </div>

        <button className="text-white text-3xl lg:hidden block" aria-label="open menu" onClick={() => setOepn(!open)}>
          <RiMenu3Line />
        </button>

      </nav>
      <NavMobile open={open} setOpen={setOepn} />
    </>
  );
}
