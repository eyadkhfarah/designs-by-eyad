"use client";
import { cn } from '@/lib/utils';
import { useTranslations } from 'next-intl';

import React, { ReactNode } from 'react'

export default function H2({ children, className }: { children: ReactNode, className?: string }) {
    const t = useTranslations();

    return (
        <h2 className={cn("uppercase text-5xl text-center my-12", className)}>
            {t(children)}
        </h2>
    )
}
