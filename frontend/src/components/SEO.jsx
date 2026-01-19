import React from 'react';
import { Helmet } from 'react-helmet-async';

const SEO = ({ title, description, keywords, image, url, type = 'website' }) => {
    const siteTitle = 'ZynoxBit - Top Software Agency in Bangladesh';
    const siteDescription = 'ZynoxBit is a leading software agency in Bangladesh offering MERN stack development, web design, and digital marketing services. Get your website in 24 hours.';
    const siteUrl = 'https://zynoxbit.com';
    const siteImage = '/zynoxbit-web.png'; // Assuming in public or assets served from root

    const fullTitle = title ? `${title} | ZynoxBit` : siteTitle;
    const metaDescription = description || siteDescription;
    const metaImage = image ? `${siteUrl}${image}` : `${siteUrl}${siteImage}`;
    const metaUrl = url ? `${siteUrl}${url}` : siteUrl;

    const schemaData = {
        "@context": "https://schema.org",
        "@type": "Organization",
        "name": "ZynoxBit",
        "url": siteUrl,
        "logo": `${siteUrl}${siteImage}`,
        "description": siteDescription,
        "address": {
            "@type": "PostalAddress",
            "addressLocality": "Seri Kembangan",
            "addressRegion": "Selangor",
            "addressCountry": "MY"
        },
        "contactPoint": [
            {
                "@type": "ContactPoint",
                "WhatsApp": "+60-11-2140-4200",
                "contactType": "customer service",
                "areaServed": ["MY", "BD", "Global"]
            }
        ],
        "sameAs": [
            "https://www.facebook.com/zynoxbit",
            "https://twitter.com/zynoxbit",
            "https://www.linkedin.com/company/zynoxbit"
        ]
    };

    return (
        <Helmet>
            {/* Standard Meta Tags */}
            <title>{fullTitle}</title>
            <meta name="description" content={metaDescription} />
            <meta name="keywords" content={keywords || "software agency Malaysia, web development Bangladesh, MERN stack, seo services, digital marketing, client success stories, zynoxbit, website design, mobile apps, custom software"} />
            <link rel="canonical" href={metaUrl} />

            {/* Open Graph / Facebook */}
            <meta property="og:type" content={type} />
            <meta property="og:title" content={fullTitle} />
            <meta property="og:description" content={metaDescription} />
            <meta property="og:image" content={metaImage} />
            <meta property="og:url" content={metaUrl} />
            <meta property="og:site_name" content="ZynoxBit" />

            {/* Twitter */}
            <meta name="twitter:card" content="summary_large_image" />
            <meta name="twitter:title" content={title} />
            <meta name="twitter:description" content={metaDescription} />
            <meta name="twitter:image" content={metaImage} />

            {/* Structured Data */}
            <script type="application/ld+json">
                {JSON.stringify(schemaData)}
            </script>
        </Helmet>
    );
};

export default SEO;
