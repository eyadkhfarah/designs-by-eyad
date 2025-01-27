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
    <div
      className={`lg:hidden ${
        open === true ? "" : "w-full"
      } w-0 origin-left ease-in-out transition-all duration-700 fixed flex flex-col justify-between top-0 pt-10 overflow-hidden bg-black z-40 h-screen`}
    >
      <div className="gird gap-6">
        <div className="my-7 flex justify-end">
          <button
            aria-label="close menu"
            className="p-4"
            onClick={() => setOpen(!open)}
          >
            <RiCloseLine className="text-4xl text-white" />
          </button>
        </div>
        <ul
          className={`${
            open === true ? "-ml-20" : ""
          } grid gap-9 ease-in-out transition-all duration-700 list-none mx-10 w-full`}
        >
          {NavList.map((nav) => (
            <li key={`${nav.id}`}>
              <Link
                aria-label={`${nav.name}`}
                className={`hover:text-primary ${
                  router === nav.link.toLowerCase()
                    ? "text-primary"
                    : "text-white"
                } transition-all ease-in-out uppercase font-bold text-2xl duration-300`}
                href={`${nav.link}`}
                onClick={() => setOpen(!open)}
              >
                {nav.name}
              </Link>
            </li>
          ))}
        </ul>
      </div>
      <div
        className={`${
          open === true ? "-ml-20" : ""
        } p-8 transition-all ease-in-out duration-300`}
      >
        <Link
          target="_self"
          href={"/contact"}
          onClick={() => setOpen(!open)}
          className={`py-4 px-8 bg-primary flex justify-center items-center gap-3 cursor-pointer uppercase text-black font-bold whitespace-nowrap rounded-2xl hover:scale-90 transition-all ease-in-out duration-300 mb-12`}
        >
          contact Me
        </Link>
      </div>
    </div>
  );
}
