import { NavList } from "@/lib/NavList";
import Link from "next/link";


export default function Navbar() {
    return (
        <nav className="flex px-24 justify-between p-5">
            <span>Navbar</span>
            <li>
                {NavList.map((nav) => (
                    <Link href={nav.link}><ul key={nav.id}>{nav.name}</ul></Link>
                ))}
            </li>
        </nav>
    )
}
