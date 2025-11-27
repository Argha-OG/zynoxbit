/**
 * Case studies with detailed information
 * @type {Array<Object>}
 */
export const CASE_STUDIES = [
    {
        id: "case_01",
        title: "TechStart Bangladesh Platform",
        category: "Web Application",
        client: "TechStart Bangladesh",
        image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=1200&h=800&fit=crop",
        thumbnail: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&h=400&fit=crop",
        challenge: "TechStart needed a modern platform to showcase their startup ecosystem and connect entrepreneurs with investors. Their old website was outdated and lacked the interactive features needed for community engagement.",
        solution: "We built a dynamic web application with React and Node.js, featuring real-time chat, investor matching algorithms, and a comprehensive startup directory. The glassmorphic design created a futuristic feel that resonated with their tech-forward audience.",
        results: [
            { metric: "User Engagement", value: "+250%", description: "Increase in daily active users" },
            { metric: "Connections Made", value: "500+", description: "Startup-investor connections in first 3 months" },
            { metric: "Page Load Time", value: "1.2s", description: "Average load time across all pages" }
        ],
        technologies: ["React", "Node.js", "MongoDB", "Socket.io", "Tailwind CSS"],
        duration: "12 weeks",
        link: "#"
    },
    {
        id: "case_02",
        title: "EcoSolutions E-commerce",
        category: "E-commerce",
        client: "EcoSolutions BD",
        image: "https://images.unsplash.com/photo-1472851294608-062f824d29cc?w=1200&h=800&fit=crop",
        thumbnail: "https://images.unsplash.com/photo-1472851294608-062f824d29cc?w=600&h=400&fit=crop",
        challenge: "EcoSolutions wanted to launch an e-commerce platform for sustainable products but needed to differentiate themselves in a crowded market while maintaining fast performance.",
        solution: "We developed a headless e-commerce solution using Next.js and Shopify, with custom carbon footprint tracking for each product. The design emphasized their eco-friendly mission through natural colors and organic shapes.",
        results: [
            { metric: "Sales Growth", value: "+180%", description: "Increase in first quarter" },
            { metric: "Conversion Rate", value: "4.2%", description: "Above industry average of 2.5%" },
            { metric: "Mobile Sales", value: "65%", description: "Of total transactions" }
        ],
        technologies: ["Next.js", "Shopify", "Stripe", "Tailwind CSS"],
        duration: "10 weeks",
        link: "#"
    },
    {
        id: "case_03",
        title: "FinTech Pro Dashboard",
        category: "Web Application",
        client: "FinTech Pro",
        image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=1200&h=800&fit=crop&q=80",
        thumbnail: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&h=400&fit=crop&q=80",
        challenge: "FinTech Pro required a secure, real-time dashboard for their financial analytics platform that could handle large datasets while remaining intuitive for non-technical users.",
        solution: "We created a sophisticated dashboard using React and D3.js for data visualization, with real-time updates via WebSockets. Security was paramount, so we implemented multi-factor authentication and end-to-end encryption.",
        results: [
            { metric: "Data Processing", value: "10M+", description: "Records processed daily" },
            { metric: "User Satisfaction", value: "96%", description: "Positive feedback rating" },
            { metric: "Security Score", value: "A+", description: "SSL Labs rating" }
        ],
        technologies: ["React", "D3.js", "WebSocket", "PostgreSQL", "AWS"],
        duration: "16 weeks",
        link: "#"
    },
    {
        id: "case_04",
        title: "FoodHub Delivery App",
        category: "Mobile Web",
        client: "FoodHub",
        image: "https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=1200&h=800&fit=crop",
        thumbnail: "https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=600&h=400&fit=crop",
        challenge: "FoodHub needed a progressive web app that worked seamlessly on mobile devices, with real-time order tracking and offline capabilities for areas with poor connectivity.",
        solution: "We built a PWA using React and service workers, enabling offline functionality and push notifications. The interface was optimized for one-handed mobile use with large touch targets and intuitive gestures.",
        results: [
            { metric: "Order Volume", value: "+320%", description: "Increase in monthly orders" },
            { metric: "App Install Rate", value: "45%", description: "Users who installed PWA" },
            { metric: "Offline Usage", value: "30%", description: "Orders placed offline" }
        ],
        technologies: ["React", "PWA", "Service Workers", "Firebase", "Google Maps API"],
        duration: "8 weeks",
        link: "#"
    }
];
