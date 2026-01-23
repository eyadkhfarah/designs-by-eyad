'use client';

import { useTranslations } from 'next-intl';
import { NavListLang } from "@/lib/NavList";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";
import PrimaryBtn from '../Buttons/PrimaryBtn';
import { motion } from "framer-motion";

export default function NavMenu() {
  const pathname = usePathname();
  const t = useTranslations();

  // Filter out contact to show it as a standalone PrimaryBtn
  const filteredNavListLang = NavListLang.filter(nav => nav.link !== "/contact");

  return (
    <ul className="lg:flex items-center hidden gap-10">
      {filteredNavListLang.map((nav) => {
        const isActive = pathname === nav.link.toLowerCase();
        
        return (
          <li key={nav.id} className="relative group">
            <Link
              className={`text-sm uppercase tracking-widest font-medium transition-colors duration-300 ${
                isActive ? "text-primary" : "text-white/70 group-hover:text-white"
              }`}
              href={nav.link}
            >
              {t(nav.translationKey)}
            </Link>

            {/* Animated Active Indicator */}
            {isActive && (
              <motion.div
                layoutId="nav-underline"
                className="absolute -bottom-1 left-0 right-0 h-[2px] bg-primary rounded-full"
                transition={{ type: "spring", stiffness: 380, damping: 30 }}
              />
            )}
            
            {/* Hover Indicator (Visual subtle cue) */}
            {!isActive && (
              <div className="absolute -bottom-1 left-0 w-0 h-[2px] bg-primary/40 transition-all duration-300 group-hover:w-full rounded-full" />
            )}
          </li>
        );
      })}

      {/* Contact Button */}
      <div className="ml-4">
        <PrimaryBtn 
          target={false} 
          link={"/contact"} 
          text={t("MenuList.contact")} 
        />
      </div>
    </ul>
  );
}