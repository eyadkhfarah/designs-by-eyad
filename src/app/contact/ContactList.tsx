"use client";

import { NavContacts } from "@/lib/NavContact";
import { useTranslations } from "next-intl";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";
import { RiFacebookCircleFill } from "react-icons/ri";
import { 
  TbForms, 
  TbMessage2, 
  TbPhone, 
  TbUserDollar 
} from "react-icons/tb";
import { cn } from "@/lib/utils";

export default function ContactList() {
  const pathname = usePathname();
  const t = useTranslations();

  const getIcon = (name: string) => {
    // Ensure name is a primitive string for logic checks
    const n = name.toString().toLowerCase();
    if (n.includes("form") || n.includes("نموذج")) return <TbForms className="text-xl" />;
    if (n.includes("social") || n.includes("التواصل")) return <RiFacebookCircleFill className="text-xl" />;
    if (n.includes("email") || n.includes("البريد")) return <TbMessage2 className="text-xl" />;
    if (n.includes("phone") || n.includes("الهاتف")) return <TbPhone className="text-xl" />;
    if (n.includes("purchasing") || n.includes("الدفع")) return <TbUserDollar className="text-xl" />;
    return null;
  };

  return (
    <div className="w-full">
      <ul className="flex flex-col gap-2 p-2 rounded-[2rem] bg-neutral-900/50 border border-white/5 backdrop-blur-md">
        <li className="px-6 py-4 text-[10px] font-black uppercase tracking-[0.3em] text-neutral-500">
          Reach Out
        </li>
        {NavContacts.map((list, i) => {
          const fullLink = `/contact${list.link}`;
          const isActive = pathname === fullLink;
          
          // FIX: Convert the possibly object-wrapped string to a primitive
          const displayName = list.name.toString();

          return (
            <li key={i} className="relative">
              <Link
                href={fullLink}
                // FIX: aria-label now receives a primitive string
                aria-label={displayName}
                className={cn(
                  "flex items-center gap-4 px-6 py-4 rounded-2xl font-bold transition-all duration-300 group",
                  isActive 
                    ? "bg-primary text-black shadow-[0_0_20px_rgba(229,254,0,0.2)]" 
                    : "text-white hover:bg-white/5"
                )}
              >
                <span className={cn(
                  "transition-colors duration-300",
                  isActive ? "text-black" : "text-primary group-hover:text-white"
                )}>
                  {getIcon(displayName)}
                </span>
                
                <span className="text-sm md:text-base">
                  {displayName}
                </span>

                {isActive && (
                  <div className="absolute right-4 w-1.5 h-1.5 rounded-full bg-black/40" />
                )}
              </Link>
            </li>
          );
        })}
      </ul>
    </div>
  );
}