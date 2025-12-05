'use client';

import { usePathname } from 'next/navigation';
import { Navigation } from './Navigation';

export function ConditionalNavigation() {
    const pathname = usePathname();

    // Don't show navigation on the about/me page
    if (pathname === '/about/me') {
        return null;
    }

    return <Navigation />;
}
