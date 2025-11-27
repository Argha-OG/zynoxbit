/**
 * Array containing all service packages.
 * @type {Array<Object>}
 */
export const SERVICE_PACKAGES = [
    {
        id: "pkg_01",
        tierName: "Starter",
        priceMonthly: 25000,
        features: [
            "Single Page Application",
            "Mobile Responsive",
            "Basic SEO",
            "Contact Form",
            "1 Month Support"
        ],
        isHighlighted: false,
        ctaText: "Get Started"
    },
    {
        id: "pkg_02",
        tierName: "Growth",
        priceMonthly: 50000,
        features: [
            "Multi-page Application",
            "Advanced Animations",
            "CMS Integration",
            "Advanced SEO",
            "3 Months Support",
            "Performance Optimization"
        ],
        isHighlighted: true,
        ctaText: "Best Value"
    },
    {
        id: "pkg_03",
        tierName: "Enterprise",
        priceMonthly: 100000,
        features: [
            "Custom Web Application",
            "Full Backend Integration",
            "E-commerce Functionality",
            "Premium Design System",
            "12 Months Support",
            "Dedicated Project Manager"
        ],
        isHighlighted: false,
        ctaText: "Contact Sales"
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
