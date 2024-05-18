import { Icons } from '@/components/icons';
import type { FooterItem, MainNavItem } from '@/types';

export type SiteConfig = typeof siteConfig;

const links = {
    facebook: 'https://www.facebook.com/',
    linkin: 'https://www.linkedin.com/company/',
    pinterest: 'https://pinterest.com.au/',

    googlemap: '',
};

export const siteConfig = {
    logo: 'End Of Lease Cleaning Adelaide',
    name: 'End Of Lease Cleaning Adelaide',
    title: 'End Of Lease Cleaning Adelaide',
    description: '',
    url: 'https://endofleasecleaningadelaide.net.au',
    ogImage: 'https://endofleasecleaningadelaide.net.au/opengraph-image.png',
    domain: 'endofleasecleaningadelaide.net.au',
    mainNav: [
        {
            title: 'Services',
            items: [
                {
                    title: 'Spring Cleaning',
                    href: '/spring-cleaning-adelaide',
                },
                {
                    title: 'Bond Cleaning',
                    href: '/bond-cleaning-adelaide',
                },
                {
                    title: 'Office Cleaning',
                    href: '/office-cleaning-adelaide',
                },
                {
                    title: 'Oven Cleaning',
                    href: '/oven-cleaning-adelaide',
                },
                {
                    title: 'Carpet Cleaning',
                    href: '/carpet-cleaning-adelaide',
                },
            ],
        },
        {
            title: 'Pricing',
            href: '/end-of-lease-cleaning-pricing-adelaide',
        },
    ] satisfies MainNavItem[],
    links,
    footerNav: [
        {
            title: 'Services',
            items: [
                {
                    title: 'Spring Cleaning Adelaide',
                    href: '/spring-cleaning-adelaide',
                },
                {
                    title: 'Bond Cleaning Adelaide',
                    href: '/bond-cleaning-adelaide',
                },
                {
                    title: 'Office Cleaning Adelaide',
                    href: '/office-cleaning-adelaide',
                },
                {
                    title: 'Oven Cleaning Adelaide',
                    href: '/oven-cleaning-adelaide',
                },
                {
                    title: 'Carpet Cleaning Adelaide',
                    href: '/carpet-cleaning-adelaide',
                },
                {
                    title: 'Bond Cleaning Service Adelaide',
                    href: '/',
                },
            ],
        },
        {
            title: 'Useful Links',
            items: [
                { title: 'Contact Us', href: '/contact' },
                { title: 'Blog', href: '/blog' },
                {
                    title: 'Pricing',
                    href: '/end-of-lease-cleaning-pricing-adelaide',
                },
                {
                    title: 'Products',
                    href: '/products',
                },
                { title: 'FAQs', href: '/frequently-asked-questions' },
                { title: 'Privacy Policy', href: '/privacy' },
                { title: 'Terms And Conditions', href: '/terms' },
            ],
        },
        {
            title: 'Company',
            items: [{ title: 'About Us', href: '/about' }],
        },
    ] satisfies FooterItem[],
    business: {
        email: 'contact@endofleasecleaningadelaide.net.au',
        phone: '+61 414076980',
        address: '17 Gladstone St, Adelaide SA 5000',
        openingHour: 'Mon – Sun: 9:00 AM – 5:00 PM',
    },
    rating: {
        ratingValue: '4.9',
        ratingCount: 1027,
    },
};

export const siteServices: {
    title: string;
    slug: string;
    icon?: keyof typeof Icons;
}[] = [];
