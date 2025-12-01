'use client';

import { cn } from 'fumadocs-ui/utils/cn';
import { useParams } from 'next/navigation';
import { type ReactNode, useId } from 'react';

export function Body({
    children,
}: {
    children: ReactNode;
}): React.ReactElement {
    const mode = useMode();

    return (
        <body className={cn(mode, 'relative flex min-h-screen flex-col')}>
            {children}
        </body>
    );
}

export function useMode(): string | undefined {
    const { slug } = useParams();
    return Array.isArray(slug) && slug.length > 0 ? slug[0] : undefined;
}

export function LogoIcon(props: React.SVGProps<SVGSVGElement>) {
    return (
        <img src="https://ppekkungz.in.th/avatar.png" alt="PPekKunGz Logo" className="size-5 in-[.uwu]:hidden" />
    );
}