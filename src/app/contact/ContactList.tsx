"use client";

import { NavContacts } from "@/lib/NavContact";
import { useTranslations } from "next-intl";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import React from "react";
import {
  RiFacebookCircleFill,
} from "react-icons/ri";
import { TbForms, TbMessage2, TbMoneybag, TbPhone, TbUserDollar } from "react-icons/tb";

export default function ContactList() {
  const router = usePathname();
  const t = useTranslations();


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
            {(list.name === "Form" || list.name === "نموذج الاتصال") ? (
              <TbForms className="text-xl" />
            ) : (list.name === "Social" || list.name === "وسائل التواصل الاجتماعي") ? (
              <RiFacebookCircleFill className="text-xl" />
            ) : (list.name === "Email" || list.name === "البريد الإلكتروني") ? (
              <TbMessage2 className="text-xl" />
            ) : (list.name === "Phone" || list.name === "الهاتف") ? (
              <TbPhone className="text-xl" />
            ) : (list.name === "Purchasing" || list.name === "أدوات الدقع") ? (
              <TbUserDollar className="text-xl" />
            ) : null}
            {/* {t(list.name)} */}
            {list.name}
          </Link>
        </li>
      ))}
    </ul>
  );
}
