"use client";

import { NavContacts } from "@/lib/NavContact";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import React from "react";
import {
  RiFacebookCircleFill,
} from "react-icons/ri";
import { TbForms, TbMessage2, TbMoneybag, TbPhone, TbUserDollar } from "react-icons/tb";

export default function ContactList() {
  const router = usePathname();

  return (
    <ul className="lg:col-span-1 h-fit w-full p-6 rounded-2xl bg-dark">
      {NavContacts.map((list) => (
        <li
          key={`${list.id}`}
          className={`${
            router === `/contact${list.link}` ? "bg-primary text-black" : ""
          } w-full hover:bg-primary my-3 hover:text-black transition-all ease-in-out duration-300 font-bold rounded-2xl p-3`}
        >
          <Link
            className="flex items-center gap-4"
            aria-label={`${list.name}`}
            href={`/contact${list.link}`}
          >
            {list.name === "Form" ? (
              <TbForms className="text-xl" />
            ) : null || list.name === "Social" ? (
              <RiFacebookCircleFill className="text-xl" />
            ) : null || list.name === "Email" ? (
              <TbMessage2 className="text-xl" />
            ) : null || list.name === "Phone" ? (
              <TbPhone className="text-xl" />
            ) : null || list.name === "Purchasing" ? (
              <TbUserDollar className="text-xl" />
            ) : null}
            {list.name}
          </Link>
        </li>
      ))}
    </ul>
  );
}
