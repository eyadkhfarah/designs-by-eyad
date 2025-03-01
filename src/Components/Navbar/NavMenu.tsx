'use client';
import { useTranslations } from 'next-intl';

import { NavList, NavListLang } from "@/lib/NavList";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";
import PrimaryBtn from '../Buttons/PrimaryBtn';

export default function NavMenu() {
  const router = usePathname();
  const t = useTranslations();

  const filteredNavListLang = NavListLang.filter(nav => nav.link !== "/contact");

  return (
    <ul className="lg:flex items-center hidden gap-11">
      {filteredNavListLang.map((nav) => (
        <li key={`${nav.id}`}>
          <Link
            className={`hover:text-primary ${
              router === nav.link.toLowerCase()
                ? "text-primary"
                : "text-white"
            } transition-all ease-in-out duration-300`}
            href={`${nav.link}`}
          >
            {t(nav.translationKey)}
          </Link>
        </li>
      ))}
      <PrimaryBtn target={false} link={"/contact"} text={"Contact Me"} />
    </ul>
  );
}
