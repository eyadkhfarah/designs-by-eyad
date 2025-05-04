"use client";
import { useTranslations } from 'next-intl';

import React from 'react'

export default function P({ children, className }: { children: React.ReactNode; className?: string }) {
    const t = useTranslations();

    return (
        <p className={className}>{t(children)}</p>
    )
}
