"use client";

import { NavContacts } from "@/lib/NavContact";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import React from "react";
import {
  RiFacebookCircleFill,
} from "react-icons/ri";
import { TbForms, TbMessage2, TbPhone } from "react-icons/tb";

export default function ContactList() {
  const router = usePathname();

  console.log(router)

  return (
    <ul className="lg:col-span-1 h-fit w-full p-6 rounded-2xl bg-gray-900">
      {NavContacts.map((list) => (
        <li
          key={`${list.id}`}
          className={`${
            router === `/contact${list.link}` ? "bg-yellow-600 text-black" : ""
          } w-full hover:bg-yellow-600 my-3 hover:text-black transition-all ease-in-out duration-300 font-bold rounded-2xl p-3`}
        >
          <Link
            className="flex items-center gap-4"
            aria-label={`${list.name}`}
            href={`/contact${list.link}`}
          >
            {list.name === "Form" ? (
              <TbForms className="text-xl" />
            ) : null || list.name === "Soical" ? (
              <RiFacebookCircleFill className="text-xl" />
            ) : null || list.name === "Email" ? (
              <TbMessage2 className="text-xl" />
            ) : null || list.name === "Phone" ? (
              <TbPhone className="text-xl" />
            ) : null}
            {list.name}
          </Link>
        </li>
      ))}
    </ul>
  );
}
