import { headingVariants } from '@/components/page-header';
import { siteConfig } from '@/configs/site';
import { cn } from '@/lib/utils';
import React, { HTMLAttributes } from 'react';

interface AboutPropse extends HTMLAttributes<HTMLElement> {}
export default function About({ ...props }: AboutPropse) {
    return (
        <section
            id="about"
            aria-labelledby="about-heading"
            className={cn(
                props.className,
                'p-12 space-y-12 bg-secondary rounded-lg'
            )}
        >
            <h3 className={cn(headingVariants({}))}>About {siteConfig.name}</h3>
            <div className="space-y-6">
                <p>
                    Pro Cleaning Brisbane is a leading provider of comprehensive
                    cleaning solutions for residential and commercial properties
                    in the Brisbane metropolitan area. Founded by a team of
                    industry veterans with a passion for cleanliness and
                    customer service, our company is dedicated to delivering
                    exceptional cleaning services that exceed our clients&apos;
                    expectations.
                </p>
                <p>
                    At Pro Cleaning Brisbane, we understand that a clean and
                    well-maintained environment is essential for promoting
                    health, productivity, and overall well-being. That&apos;s
                    why we employ a team of highly trained and experienced
                    cleaning professionals who are committed to delivering
                    top-notch results with every service.
                </p>
                <p>
                    Our residential cleaning services are tailored to meet the
                    unique needs of each home, ensuring that every nook and
                    cranny is thoroughly cleaned and sanitized. From routine
                    housekeeping to deep cleaning and specialized services like
                    carpet cleaning and window washing, we have the expertise
                    and equipment to handle it all.
                </p>
            </div>
        </section>
    );
}
