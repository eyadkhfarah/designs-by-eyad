"use client";

import { NavList } from "@/lib/NavList";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

export default function NavMenu() {
  const router = usePathname();

  return (
    <ul className="lg:flex hidden gap-7">
      {NavList.map((nav) => (
        <li>
          <Link
            aria-label={`${nav.name}`}
            className={`hover:text-yellow-500 ${
              router === nav.link.toLowerCase()
                ? "text-yellow-500"
                : "text-white"
            } transition-all ease-in-out duration-300`}
            key={`${nav.id}`}
            href={`${nav.link}`}
          >
            {nav.name}
          </Link>
        </li>
      ))}
    </ul>
  );
}
