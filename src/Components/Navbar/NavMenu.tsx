"use client";

import { NavList } from "@/lib/NavList";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

export default function NavMenu() {
  const router = usePathname();

  return (
    <ul className="lg:flex hidden gap-11">
      {NavList.map((nav) => (
        <li key={`${nav.id}`}>
          <Link
            aria-label={`${nav.name}`}
            className={`hover:text-primary ${
              router === nav.link.toLowerCase()
                ? "text-primary"
                : "text-white"
            } transition-all ease-in-out duration-300`}
            href={`${nav.link}`}
          >
            {nav.name}
          </Link>
        </li>
      ))}
    </ul>
  );
}
