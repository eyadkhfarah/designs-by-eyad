import { NavLink, NavLinkExpr } from "@/types/navLink";

export const NavListLang: NavLinkExpr[] = [
    { translationKey: "MenuList.portfolio", link: "/portfolio", id: 1 },
    { translationKey: "MenuList.artworks", link: "/artworks", id: 2 },
    { translationKey: "MenuList.services", link: "/services", id: 3 },
    { translationKey: "MenuList.blog", link: "/blog", id: 4 },
    { translationKey: "MenuList.about", link: "/about", id: 5 },
    { translationKey: "MenuList.faq", link: "/fqa", id: 6 },
    { translationKey: "MenuList.contact", link: "/contact", id: 6 },
];
export const NavList: NavLink[] = [
    { name: "Portfolio", link: "/portfolio", id: 1 },
    { name: "Artworks", link: "/artworks", id: 2 },
    { name: "Services", link: "/services", id: 3 },
    { name: "Blog", link: "/blog", id: 4 },
    { name: "About", link: "/about", id: 5 },
    { name: "FQA", link: "/fqa", id: 6 },
];