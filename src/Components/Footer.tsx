"use client";
import { useTranslations } from 'next-intl';

import Link from "next/link";
import React from "react";
import { RiFacebookCircleFill, RiInstagramLine, RiLinkedinFill, RiYoutubeFill } from "react-icons/ri";
import PrimaryBtn from "./Buttons/PrimaryBtn";
import { nonindesxList } from "@/lib/nonindexList";
import LanguageSwitcher from "./Client/LanguageSwitcher";

export default function Footer() {
  const t = useTranslations();

  return (
    <>
      <section className="grid place-items-center text-center">
        <h3 className="text-5xl">{t("Footer.Header.title")}</h3>
        <div className="">
          <p>{t("Footer.Header.subtitle")}</p>
        </div>
        <PrimaryBtn target={false} link={"/contact"} text={t("Footer.Header.contact")} />
      </section>
      <footer
        id="contact"
      >
        <p className="md:text-base text-sm md:block hidden">
          © {new Date().getFullYear()} <span className="text-primary">Designs by Eyad</span>. {t("Footer.copyright")}.
        </p>
        <div className="flex gap-6 justify-center items-center">
          <Link
            href={"https://www.facebook.com/designs.by.eyad"}
            target="_blank"
            title="Follow Me On Facebook"
          >
            <RiFacebookCircleFill className="text-4xl text-primary" />
          </Link>
          <Link
            href={"https://www.instagram.com/designs.by.eyad"}
            target="_blank"
            title="Follow Me On Instagram"
          >
            <RiInstagramLine className="text-4xl text-primary" />
          </Link>
          <Link
            href={"https://www.linkedin.com/company/designsbyeyad"}
            target="_blank"
            title="Follow Me On LinkedIn"
          >
            <RiLinkedinFill className="text-4xl text-primary" />
          </Link>
          <Link
            href={"https://www.youtube.com/@designsbyeyad"}
            target="_blank"
            title="Subscribe MY Channel On YouTube"
          >
            <RiYoutubeFill className="text-4xl text-primary" />
          </Link>
        </div>
        <p className="md:text-base mt-8 text-xs text-center w-full md:hidden">
          © {new Date().getFullYear()} <span className="text-primary">Designs by Eyad</span>. All rights reserved.
        </p>
      </footer>
      <div className="flex justify-between items-center mx-auto text-xs lg:max-w-6xl md:max-w-2x max-w-xs">
        <ul className="text-center md:flex gap-8 md:flex-row flex-col items-center my-8">
          <>
            {nonindesxList.map((link, index) => (
              <React.Fragment key={index}>
                <Link className="text-primary" href={link.link}>
                  {t(link.name)}
                </Link>
                {index < nonindesxList.length - 1 && ' • '}
              </React.Fragment>
            ))}
          </>
        </ul>
        {/* Testing only and not in production until now */}
        {/* <LanguageSwitcher /> */}
      </div>
    </>
  );
}
