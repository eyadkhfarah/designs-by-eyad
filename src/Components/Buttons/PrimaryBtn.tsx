import Link from "next/link";
import React from "react";
import { RiBehanceFill } from "react-icons/ri";

type Button = {
  link: String;
  text: String;
  target: Boolean;
};

export default function PrimaryBtn({ link, text, target }: Button) {
  return (
    <Link
      href={`${link}`}
      target={target === true ? "_blank" : "_self"}
      className="p-4 bg-yellow-600 flex justify-center items-center gap-3 w-fit text-black font-bold rounded-2xl hover:scale-90 transition-all ease-in-out duration-300"
    >
      {text === "Go to Behance" ? <RiBehanceFill className="text-2xl"/>: null}
      {text}
    </Link>
  );
}
