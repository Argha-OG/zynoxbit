/**
 * Array containing all service packages.
 * @type {Array<Object>}
 */
export const SERVICE_PACKAGES = [
    // MERN STACK PACKAGES
    {
        id: "mern_starter",
        tierName: "Ready Website",
        category: "MERN Stack",
        priceMonthly: 15000,
        image: "https://images.unsplash.com/photo-1547658719-da2b51169166?w=800&h=600&fit=crop&q=80",
        features: [
            "MERN Stack Frontend",
            "5-6 Pages Ready",
            "Best UI Design",
            "WhatsApp Integration",
            "Delivery in 24 Hours"
        ],
        unavailableFeatures: [
            "Backend Integration",
            "Admin Panel",
            "Payment Gateway",
            "SEO Setup"
        ],
        isHighlighted: false,
        ctaText: "Get It Now",
        details: "Get a professional 5-6 page MERN stack frontend website with beautiful UI and WhatsApp integration delivered in just 24 hours. Perfect for urgent portfolios or landing pages."
    },
    {
        id: "mern_portfolio",
        tierName: "Corporate Portfolio",
        category: "MERN Stack",
        priceMonthly: 45000,
        image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=600&fit=crop&q=80",
        features: [
            "Simple Backend Integration",
            "Lead Form & Mail",
            "Full SEO Setup",
            "Best UI/UX Design",
            "Delivery in 3 Days"
        ],
        unavailableFeatures: [
            "Admin Panel",
            "Payment Gateway",
            "User Dashboard"
        ],
        isHighlighted: true,
        ctaText: "Get It Now",
        details: "A complete corporate or business portfolio with backend support for lead forms, email notifications, and comprehensive SEO. Designed to impress and convert."
    },
    {
        id: "mern_semi_ecom",
        tierName: "Semi Ecommerce",
        category: "MERN Stack",
        priceMonthly: 90000,
        image: "https://images.unsplash.com/photo-1556742049-0cfed4f7a07d?w=800&h=600&fit=crop&q=80",
        features: [
            "MERN Stack Full",
            "Admin Panel Integration",
            "Payment Gateway",
            "SEO Optimized",
            "Delivery in 10 Days"
        ],
        unavailableFeatures: [
            "Advanced User Dashboard",
            "Multiple Payment Gateways"
        ],
        isHighlighted: false,
        ctaText: "Get It Now",
        details: "Ideal for businesses needing corporate features plus e-commerce capabilities. Includes admin panel, payment gateway, and advanced SEO."
    },
    {
        id: "mern_full_ecom",
        tierName: "Full Ecommerce",
        category: "MERN Stack",
        priceMonthly: 160000,
        image: "https://images.unsplash.com/photo-1557821552-17105176677c?w=800&h=600&fit=crop&q=80",
        features: [
            "Complete MERN Ecommerce",
            "Advanced Admin Panel",
            "Secure Payment Gateway",
            "User Dashboard",
            "Best UI/UX"
        ],
        unavailableFeatures: [],
        isHighlighted: false,
        ctaText: "Get It Now",
        details: "A fully-featured e-commerce solution with advanced admin controls, user dashboards, and secure payment processing. Scalable and robust."
    },
    {
        id: "mern_custom",
        tierName: "Full Custom",
        category: "MERN Stack",
        priceMonthly: "Custom",
        image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=600&fit=crop&q=80",
        features: [
            "Tailored MERN Solution",
            "Custom Requirements",
            "Scalable Architecture",
            "Dedicated Support",
            "Consultation Required"
        ],
        unavailableFeatures: [],
        isHighlighted: false,
        ctaText: "Contact Us",
        details: "Have unique requirements? We build fully custom MERN stack solutions tailored to your specific business needs."
    },
    // WORDPRESS PACKAGES
    {
        id: "wordpress_custom",
        tierName: "Wordpress Website",
        category: "WordPress",
        priceMonthly: "Custom",
        image: "https://images.unsplash.com/photo-1557804506-669a67965ba0?w=800&h=600&fit=crop&q=80",
        features: [
            "Custom Theme Development",
            "Plugin Integration",
            "Content Management",
            "SEO Friendly",
            "Easy to Manage"
        ],
        unavailableFeatures: [],
        isHighlighted: false,
        ctaText: "Get Quotation",
        details: "Professional WordPress development. Contact us for a quotation based on your specific needs and requirements."
    }
];

/**
 * A La Carte Services
 * @type {Array<Object>}
 */
export const A_LA_CARTE_SERVICES = [
    {
        id: "alc_01",
        name: "Logo Design",
        description: "Professional logo design with 3 concepts and unlimited revisions",
        price: 15000,
        icon: "Palette",
        deliveryTime: "5-7 days"
    },
    {
        id: "alc_02",
        name: "SEO Audit",
        description: "Comprehensive SEO analysis with actionable recommendations",
        price: 20000,
        icon: "Search",
        deliveryTime: "3-5 days"
    },
    {
        id: "alc_03",
        name: "Content Writing",
        description: "Professional copywriting for web pages (per page)",
        price: 5000,
        icon: "FileText",
        deliveryTime: "2-3 days"
    },
    {
        id: "alc_04",
        name: "Social Media Graphics",
        description: "Custom graphics package (10 posts)",
        price: 12000,
        icon: "Image",
        deliveryTime: "5-7 days"
    },
    {
        id: "alc_05",
        name: "Performance Optimization",
        description: "Speed optimization for existing websites",
        price: 18000,
        icon: "Zap",
        deliveryTime: "3-5 days"
    },
    {
        id: "alc_06",
        name: "Email Template Design",
        description: "Responsive email template with HTML/CSS",
        price: 8000,
        icon: "Mail",
        deliveryTime: "3-4 days"
    }
];

/**
 * Our Process Steps
 * @type {Array<Object>}
 */
export const PROCESS_STEPS = [
    {
        id: "step_01",
        title: "Discovery",
        description: "We dive deep into your business, goals, and target audience to understand what success looks like for you.",
        icon: "Compass",
        duration: "1 week"
    },
    {
        id: "step_02",
        title: "Strategy",
        description: "We develop a comprehensive strategy including sitemap, wireframes, and technical architecture.",
        icon: "Target",
        duration: "1-2 weeks"
    },
    {
        id: "step_03",
        title: "Execution",
        description: "Our team brings the vision to life with stunning design and robust development, with regular check-ins.",
        icon: "Code",
        duration: "4-12 weeks"
    },
    {
        id: "step_04",
        title: "Growth",
        description: "Post-launch, we monitor performance, gather insights, and continuously optimize for better results.",
        icon: "TrendingUp",
        duration: "Ongoing"
    }
];
