import Link from "next/link";
import React from "react";
import { RiBehanceFill } from "react-icons/ri";

type Button = {
  link: String;
  text: String;
  target: Boolean;
  className?: String;
};

export default function SecondaryBtn({ link, text, target, className }: Button) {
  return (
    <Link
      href={`${link}`}
      target={target === true ? "_blank" : "_self"}
      rel="noreferrer"
      className={"p-5 bg-dark flex justify-center uppercase items-center gap-3 w-full h-fit text-primary font-bold rounded-xl hover:scale-90 transition-all ease-in-out duration-300" + className}
    >
      {text === "Go to Behance" ? <RiBehanceFill className="text-2xl"/>: null}
      {text}
    </Link>
  );
}
