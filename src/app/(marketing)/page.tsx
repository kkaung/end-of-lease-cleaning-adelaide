import { type Metadata } from 'next';
import React from 'react';
import { checkUserAgentForGooglebot } from '@/lib/next';

import CloakedContent from './_components/cloaked-content';
import Content from './_components/content';

export const metadata: Metadata = {
    title: `End Of Lease Cleaning Adelaide: #1 Bond Cleaning Service in Adelaide`,
    description: `Best End Of Lease Cleaning Service ✔️ 100% Bond Back Guarantee ✔️ 5 Star-Rated Cleaning ✔️ Trusted & Vetted Cleaners ✔️ Instant Online Booking`,
};

export default function Page() {
    const isGooglebot = checkUserAgentForGooglebot();

    if (isGooglebot) return <CloakedContent />;

    return <Content location="Adelaide" />;
}
