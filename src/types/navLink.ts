export interface NavLinkExpr {
    translationKey: string;
    link: string;
    id: number;
}

export interface NavLink {
    name: string;
    link: string;
    id: number;
}

export type NavContactLang = {
    translationKey: String,
    link: String,
    id: Number
};

export type NavContact = {
    name: String,
    link: String,
    id: Number
};