import Image from "next/image";
import Link from "next/link";
import NavMenu from "./Navbar/NavMenu";

export default function Navbar() {
  return (
    <nav className="flex lg:mx-28 mx-10 font-semibold lg:mt-28 mt-10 justify-between items-center py-5 border-y-2">
      <Link href={"/"} aria-label="Designs By Eyad" className="flex items-center gap-5">
        <Image alt="Designs By Eyad Logo" src={"/logo.svg"} width={25} height={25}/>
        <span>Designs By eyad</span>
      </Link>
     <NavMenu />
    </nav>
  );
}
