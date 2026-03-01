"use client"
import React from 'react';
import { useTranslations } from 'next-intl';

export default function H1({ children }: { children: string }) {
    const t = useTranslations();

    return (
        <h1 className='my-5'>{t(children)}</h1>
    )
}
