import Link from "next/link";
import React from "react";

type Button = {
  link: String,
  text: String
}

export default function PrimaryBtn({link, text}: Button) {
  return (
    <Link
      href={`${link}`}
      className="p-4 bg-yellow-600 w-fit text-black font-bold rounded-2xl hover:scale-90 transition-all ease-in-out duration-300"
    >
      {text}
    </Link>
  );
}
