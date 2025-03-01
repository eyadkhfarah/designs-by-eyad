"use client"
import { useTranslations } from 'next-intl';

import { ReactNode } from 'react';

export default function H1({ children }: { children: ReactNode }) {
    const t = useTranslations();

    return (
        <h1>{t(children)}</h1>
    )
}
