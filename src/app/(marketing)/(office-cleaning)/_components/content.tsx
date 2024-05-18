import React from 'react';
import { Shell } from '@/components/shell';
import { Breadcrumbs } from '@/components/pagers/breadcrumbs';
import Commitment from '@/components/commitment';
import About from '@/components/about';

import Hero from './hero';
import FAQs from './faqs';
import Features from './features';
import Reviews from './reviews';
import LatestBlog from '../../_components/latest-blog';

import { ProductJsonLd } from 'next-seo';
import { siteConfig } from '@/configs/site';

interface ContentProps {
    city: string;
    suburb?: string;
    segments: { title: string; href: string }[];
}

export default function Content({ city, suburb, segments }: ContentProps) {
    return (
        <>
            <Shell>
                <Hero location={city} />
                <Reviews location={city} />
                <Features location={city} />
                <FAQs />
                <About />
                <LatestBlog />
                <Commitment />
                <Breadcrumbs segments={segments} dottable={false} />
            </Shell>
            <ProductJsonLd
                productName={`Office Cleaning`}
                images={[]}
                description="Get a sparkling clean office with our professional office cleaners. Gold Coast's trusted commercial office cleaning service. Book online in 60 seconds!"
                brand={`${siteConfig.name}`}
                reviews={[
                    {
                        author: 'Jim',
                        datePublished: '2017-01-06T03:37:40Z',
                        reviewBody:
                            'This is my favorite product yet! Thanks Nate for the example products and reviews.',
                        name: 'So awesome!!!',
                        reviewRating: {
                            bestRating: '5',
                            ratingValue: '5',
                            worstRating: '1',
                        },
                        publisher: {
                            type: 'Organization',
                            name: 'TwoVit',
                        },
                    },
                ]}
                aggregateRating={{
                    ratingValue: siteConfig.rating.ratingValue,
                    reviewCount: siteConfig.rating.ratingCount,
                    worstRating: 1,
                    bestRating: 5,
                }}
            />
        </>
    );
}
