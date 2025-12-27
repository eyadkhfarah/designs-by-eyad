"use client";

import { NavListLang } from "@/lib/NavList";
import { useTranslations } from "next-intl";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";
import { RiCloseLine } from "react-icons/ri";

type Mobile = {
  open: boolean;
  setOpen: (open: boolean) => void;
};

export default function NavMobile({ open, setOpen }: Mobile) {
  const pathname = usePathname();
  const t = useTranslations();
  
  const filteredNavListLang = NavListLang.filter(nav => nav.link !== "/contact");                         

  return (
    <div
      className={`fixed inset-0 bg-black z-[100] lg:hidden transition-all duration-700 ease-[cubic-bezier(0.85,0,0.15,1)] overflow-hidden ${
        open ? "translate-x-0" : "translate-x-full"
      }`}
    >
      {/* Background Accent Glow */}
      <div className="absolute -top-[10%] -left-[10%] w-[50%] h-[50%] bg-primary/10 blur-[120px] rounded-full pointer-events-none" />

      <div className="relative h-full flex flex-col justify-between p-6">
        
        {/* Header Area */}
        <div className="flex justify-end pt-4">
          <button
            aria-label="close menu"
            className="p-4 bg-white/5 rounded-full border border-white/10"
            onClick={() => setOpen(false)}
          >
            <RiCloseLine className="text-3xl text-white" />
          </button>
        </div>

        {/* Navigation Links */}
        <nav className="flex flex-col gap-8 px-4">
          <span className="text-primary font-mono text-[10px] tracking-[0.4em] uppercase mb-4">
            Navigation
          </span>
          <ul className="flex flex-col gap-6">
            {filteredNavListLang.map((nav, index) => {
              const isActive = pathname === nav.link.toLowerCase();
              return (
                <li 
                  key={nav.id}
                  style={{ 
                    transitionDelay: open ? `${(index + 1) * 100}ms` : "0ms",
                    transform: open ? "translateX(0)" : "translateX(20px)",
                    opacity: open ? 1 : 0
                  }}
                  className="transition-all duration-500"
                >
                  <Link
                    className={`text-5xl font-black uppercase tracking-tighter transition-all duration-300 ${
                      isActive ? "text-primary" : "text-white hover:text-primary/70"
                    }`}
                    href={nav.link}
                    onClick={() => setOpen(false)}
                  >
                    {t(nav.translationKey)}
                    {isActive && <span className="text-primary ml-2">.</span>}
                  </Link>
                </li>
              );
            })}
          </ul>
        </nav>

        {/* Bottom Contact Section */}
        <div 
          className={`transition-all duration-700 delay-500 ${
            open ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
          }`}
        >
          <Link
            href="/contact"
            onClick={() => setOpen(false)}
            className="w-full py-6 bg-primary rounded-3xl flex justify-center items-center uppercase text-black font-black tracking-widest text-sm hover:scale-[0.98] active:scale-95 transition-all duration-300"
          >
            {t("MenuList.contact")}
          </Link>
          <div className="mt-8 flex justify-center gap-6 text-[10px] text-neutral-500 font-mono tracking-widest uppercase">
            <span>Cairo, EG</span>
            <span>© 2025</span>
          </div>
        </div>
      </div>
    </div>
  );
}
