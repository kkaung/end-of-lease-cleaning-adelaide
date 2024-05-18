import { type Metadata } from 'next';
import { Shell } from '@/components/shell';
import { siteConfig } from '@/configs/site';
import React from 'react';
import { Breadcrumbs } from '@/components/pagers/breadcrumbs';
import {
    PageHeader,
    PageHeaderDescription,
    PageHeaderHeading,
} from '@/components/page-header';

export const metadata: Metadata = {
    title: `About Us - ${siteConfig.name}`,
    description: `Join us on our journey to revolutionize the cleaning industry! Get acquainted with our dedicated field and office staff members, and learn about the inception of ${siteConfig.name}.`,
    alternates: {
        canonical: '/about-us',
    },
};

export default function page() {
    return (
        <Shell>
            <Breadcrumbs
                segments={[
                    { title: 'Home', href: '/' },
                    { title: 'About Us', href: '/about-us' },
                ]}
                dottable={false}
            />
            <PageHeader className="mx-auto">
                <PageHeaderHeading>{siteConfig.name} Story</PageHeaderHeading>
                <PageHeaderDescription className="mx-auto">
                    Turning houses into homes.
                </PageHeaderDescription>
            </PageHeader>
            <div className="mx-auto prose prose-quoteless prose-neutral dark:prose-invert">
                <p></p>
                <p></p>
            </div>
        </Shell>
    );
}
