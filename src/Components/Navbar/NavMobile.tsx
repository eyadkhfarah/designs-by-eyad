"use client";

import { NavList } from "@/lib/NavList";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";
import { RiCloseLine } from "react-icons/ri";

type Mobile = {
  open: Boolean;
  setOpen: Function;
};

export default function NavMobile({ open, setOpen }: Mobile) {
  const router = usePathname();

  return (
    <div className={`lg:hidden ${open === true ? "" : "w-full"} w-0 origin-left ease-in-out transition-all duration-700 fixed top-0 mt-10 overflow-hidden bg-black z-40 h-screen`}>
      <div className="my-7 flex justify-end">
        <button className="p-4" onClick={() => setOpen(!open)}>
          <RiCloseLine className="text-4xl text-white" />
        </button>
      </div>
      <ul className={`${open === true ? "-ml-20" : ""} grid gap-9 ease-in-out transition-all duration-700 list-none mx-10 w-full`}>
        {NavList.map((nav) => (
          <Link
            aria-label={`${nav.name}`}
            className={`hover:text-yellow-500 ${
              router === nav.link.toLowerCase()
                ? "text-yellow-500"
                : "text-white"
            } transition-all ease-in-out font-bold text-2xl duration-300`}
            key={`${nav.id}`}
            href={`${nav.link}`}
            onClick={() => setOpen(!open)}
          >
            <li>{nav.name}</li>
          </Link>
        ))}
      </ul>
    </div>
  );
}
