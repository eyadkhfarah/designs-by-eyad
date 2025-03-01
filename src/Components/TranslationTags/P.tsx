"use client";
import { useTranslations } from 'next-intl';

import React from 'react'

export default function P({ children }: { children: React.ReactNode }) {
    const t = useTranslations();

    return (
        <p>{t(children)}</p>
    )
}
