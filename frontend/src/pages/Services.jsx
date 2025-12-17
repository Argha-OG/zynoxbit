import React from 'react';
import { SERVICE_PACKAGES, A_LA_CARTE_SERVICES, PROCESS_STEPS } from '../data/services';
import { SERVICE_FAQS } from '../data/faqs';
import { Check, Star, Compass, Target, Code as CodeIcon, TrendingUp, Palette, Search, FileText, Image, Zap, Mail, X } from 'lucide-react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import Accordion from '../components/Accordion';
import SEO from '../components/SEO';

import TechStack from '../components/TechStack';

// Icon mapping for a la carte services
const iconMap = {
    Palette,
    Search,
    FileText,
    Image,
    Zap,
    Mail
};

// Icon mapping for process steps
const processIconMap = {
    Compass,
    Target,
    Code: CodeIcon,
    TrendingUp
};

const Services = () => {
    return (
        <div className="py-24 px-4">
            <SEO
                title="Services"
                description="Explore our MERN Stack development packages. From Ready Websites in 24 hours to Full Custom Ecommerce Solutions. Best pricing in Bangladesh."
            />
            {/* 1. Page Header */}
            <div className="max-w-7xl mx-auto text-center mb-20">
                <motion.h1
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="text-5xl md:text-6xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-primary to-purple-600"
                >
                    Choose Your Growth Path
                </motion.h1>
                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.1 }}
                    className="text-xl text-muted-foreground max-w-3xl mx-auto"
                >
                    Flexible packages designed to scale with your business. From startups to enterprises,
                    we have the perfect solution for your digital transformation.
                </motion.p>
            </div>

            {/* 2. MERN Stack Packages */}
            <div className="max-w-7xl mx-auto mb-20">
                <div className="text-center mb-12">
                    <h2 className="text-3xl md:text-4xl font-bold mb-4">MERN Stack Solutions</h2>
                    <p className="text-xl text-muted-foreground">High-performance web applications built with MongoDB, Express, React, and Node</p>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {SERVICE_PACKAGES.filter(p => p.category === 'MERN Stack').map((pkg, index) => (
                        <motion.div
                            key={pkg.id}
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: index * 0.1 }}
                            className={`group flex flex-col relative rounded-2xl border transition-all duration-300 overflow-hidden ${pkg.isHighlighted
                                ? 'border-primary bg-primary/5 shadow-xl shadow-primary/10 scale-105 z-10'
                                : 'border-border/50 bg-card/50 hover:border-primary/50 hover:bg-card hover:shadow-lg'
                                } dark:border-white/10 border-gray-200`}
                        >
                            {/* Feature Image */}
                            <div className="h-48 overflow-hidden relative flex-shrink-0">
                                <div className="absolute inset-0 bg-gradient-to-t from-background to-transparent z-10" />
                                <img
                                    src={pkg.image}
                                    alt={pkg.tierName}
                                    className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
                                />
                                {pkg.isHighlighted && (
                                    <div className="absolute top-4 right-4 z-20 bg-primary text-primary-foreground px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider shadow-lg flex items-center gap-1">
                                        <Star size={12} fill="currentColor" /> Best Seller
                                    </div>
                                )}
                            </div>

                            <div className="p-8 flex flex-col flex-grow">
                                <h3 className="text-2xl font-bold mb-2">{pkg.tierName}</h3>
                                <div className="text-4xl font-bold mb-6 text-primary">
                                    {typeof pkg.priceMonthly === 'number'
                                        ? `৳${pkg.priceMonthly.toLocaleString()}`
                                        : pkg.priceMonthly}
                                    {typeof pkg.priceMonthly === 'number' && <span className="text-base font-normal text-muted-foreground">/package</span>}
                                </div>
                                <ul className="space-y-4 mb-8 flex-grow">
                                    {pkg.features.map((feature, i) => (
                                        <li key={i} className="flex items-center gap-3">
                                            <div className="p-1 rounded-full bg-primary/10 text-primary">
                                                <Check size={14} className="stroke-[3px]" />
                                            </div>
                                            <span className="text-foreground/90 font-medium">{feature}</span>
                                        </li>
                                    ))}
                                    {pkg.unavailableFeatures && pkg.unavailableFeatures.map((feature, i) => (
                                        <li key={`un-${i}`} className="flex items-center gap-3 opacity-50">
                                            <div className="p-1 rounded-full bg-red-500/10 text-red-500">
                                                <X size={14} className="stroke-[3px]" />
                                            </div>
                                            <span className="text-muted-foreground line-through decoration-red-500/50 decoration-2">{feature}</span>
                                        </li>
                                    ))}
                                </ul>
                                <Link
                                    to={`/services/${pkg.id}`}
                                    className={`block w-full mt-auto py-4 rounded-xl font-bold text-center transition-all duration-300 transform group-hover:translate-y-[-2px] ${pkg.isHighlighted
                                        ? 'bg-gradient-to-r from-primary to-purple-600 text-white shadow-lg shadow-primary/25 hover:shadow-primary/40'
                                        : 'bg-secondary text-secondary-foreground hover:bg-secondary/80'
                                        }`}
                                >
                                    {pkg.ctaText}
                                </Link>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>

            {/* 3. WordPress Packages */}
            <div className="max-w-7xl mx-auto mb-32">
                <div className="text-center mb-12">
                    <h2 className="text-3xl md:text-4xl font-bold mb-4">WordPress Solutions</h2>
                    <p className="text-xl text-muted-foreground">Rapid deployment and easy content management</p>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 justify-center">
                    {SERVICE_PACKAGES.filter(p => p.category === 'WordPress').map((pkg, index) => (
                        <motion.div
                            key={pkg.id}
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: index * 0.1 }}
                            className="group flex flex-col relative rounded-2xl border border-border/50 bg-card/50 hover:border-primary/50 hover:bg-card hover:shadow-lg transition-all duration-300 dark:border-white/10 border-gray-200 overflow-hidden"
                        >
                            {/* Feature Image */}
                            <div className="h-48 overflow-hidden relative flex-shrink-0">
                                <div className="absolute inset-0 bg-gradient-to-t from-background to-transparent z-10" />
                                <img
                                    src={pkg.image}
                                    alt={pkg.tierName}
                                    className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
                                />
                            </div>

                            <div className="p-8 flex flex-col flex-grow">
                                <h3 className="text-2xl font-bold mb-2">{pkg.tierName}</h3>
                                <div className="text-4xl font-bold mb-6 text-primary">
                                    {typeof pkg.priceMonthly === 'number'
                                        ? `৳${pkg.priceMonthly.toLocaleString()}`
                                        : pkg.priceMonthly}
                                </div>
                                <ul className="space-y-4 mb-8 flex-grow">
                                    {pkg.features.map((feature, i) => (
                                        <li key={i} className="flex items-center gap-3">
                                            <div className="p-1 rounded-full bg-primary/10 text-primary">
                                                <Check size={14} className="stroke-[3px]" />
                                            </div>
                                            <span className="text-foreground/90 font-medium">{feature}</span>
                                        </li>
                                    ))}
                                </ul>
                                <Link
                                    to={`/services/${pkg.id}`}
                                    className="block w-full mt-auto py-4 rounded-xl font-bold text-center bg-secondary text-secondary-foreground hover:bg-secondary/80 transition-all duration-300"
                                >
                                    {pkg.ctaText}
                                </Link>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>

            {/* 3. Tech Stack */}
            <div className="mb-32">
                <TechStack />
            </div>

            {/* 4. Compare Features Table */}
            <div className="max-w-7xl mx-auto mb-32">
                <h2 className="text-4xl font-bold text-center mb-12">Compare All Features</h2>
                <div className="overflow-x-auto glass-card rounded-2xl border border-border">
                    <table className="w-full">
                        <thead>
                            <tr className="border-b border-border">
                                <th className="py-4 px-6 text-left font-semibold">Feature</th>
                                {SERVICE_PACKAGES.map(pkg => (
                                    <th key={pkg.id} className="py-4 px-6 text-center font-semibold">{pkg.tierName}</th>
                                ))}
                            </tr>
                        </thead>
                        <tbody>
                            <tr className="border-b border-border/50">
                                <td className="py-4 px-6">Support Duration</td>
                                <td className="py-4 px-6 text-center">1 Month</td>
                                <td className="py-4 px-6 text-center font-semibold text-primary">3 Months</td>
                                <td className="py-4 px-6 text-center">12 Months</td>
                            </tr>
                            <tr className="border-b border-border/50">
                                <td className="py-4 px-6">SEO Package</td>
                                <td className="py-4 px-6 text-center">Basic</td>
                                <td className="py-4 px-6 text-center font-semibold text-primary">Advanced</td>
                                <td className="py-4 px-6 text-center">Premium</td>
                            </tr>
                            <tr className="border-b border-border/50">
                                <td className="py-4 px-6">Design System</td>
                                <td className="py-4 px-6 text-center">Standard</td>
                                <td className="py-4 px-6 text-center font-semibold text-primary">Enhanced</td>
                                <td className="py-4 px-6 text-center">Custom Premium</td>
                            </tr>
                            <tr className="border-b border-border/50">
                                <td className="py-4 px-6">CMS Integration</td>
                                <td className="py-4 px-6 text-center">—</td>
                                <td className="py-4 px-6 text-center font-semibold text-primary">✓</td>
                                <td className="py-4 px-6 text-center">✓</td>
                            </tr>
                            <tr className="border-b border-border/50">
                                <td className="py-4 px-6">E-commerce</td>
                                <td className="py-4 px-6 text-center">—</td>
                                <td className="py-4 px-6 text-center">—</td>
                                <td className="py-4 px-6 text-center">✓</td>
                            </tr>
                            <tr>
                                <td className="py-4 px-6">Dedicated Manager</td>
                                <td className="py-4 px-6 text-center">—</td>
                                <td className="py-4 px-6 text-center">—</td>
                                <td className="py-4 px-6 text-center">✓</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>

            {/* 4. A La Carte Services */}
            <div className="max-w-7xl mx-auto mb-32">
                <div className="text-center mb-12">
                    <h2 className="text-4xl font-bold mb-4">A La Carte Services</h2>
                    <p className="text-xl text-muted-foreground">Need something specific? Choose individual services</p>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {A_LA_CARTE_SERVICES.map((service, index) => {
                        const Icon = iconMap[service.icon];
                        return (
                            <motion.div
                                key={service.id}
                                initial={{ opacity: 0, scale: 0.9 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                transition={{ delay: index * 0.05 }}
                                viewport={{ once: true }}
                                className="glass-card p-6 rounded-xl border border-border hover:border-primary/50 transition-all group"
                            >
                                <div className="flex items-start justify-between mb-4">
                                    <div className="p-3 rounded-lg bg-primary/10 text-primary group-hover:scale-110 transition-transform">
                                        {Icon && <Icon size={24} />}
                                    </div>
                                    <div className="text-right">
                                        <div className="text-2xl font-bold">৳{service.price.toLocaleString()}</div>
                                        <div className="text-xs text-muted-foreground">{service.deliveryTime}</div>
                                    </div>
                                </div>
                                <h3 className="text-lg font-bold mb-2">{service.name}</h3>
                                <p className="text-sm text-muted-foreground mb-4">{service.description}</p>
                                <Link
                                    to={`/contact?service=${service.name.toLowerCase().replace(/\s+/g, '-')}`}
                                    className="text-primary text-sm font-medium hover:underline"
                                >
                                    Get Started →
                                </Link>
                            </motion.div>
                        );
                    })}
                </div>
            </div>

            {/* 5. Our Process */}
            <div className="max-w-7xl mx-auto mb-32 bg-muted/30 rounded-3xl p-8 md:p-12">
                <div className="text-center mb-12">
                    <h2 className="text-4xl font-bold mb-4">Our Process</h2>
                    <p className="text-xl text-muted-foreground">From concept to launch and beyond</p>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {PROCESS_STEPS.map((step, index) => {
                        const Icon = processIconMap[step.icon];
                        return (
                            <motion.div
                                key={step.id}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ delay: index * 0.1 }}
                                viewport={{ once: true }}
                                className="relative"
                            >
                                <div className="glass-card p-6 rounded-xl border border-border h-full">
                                    <div className="absolute -top-4 -left-4 w-12 h-12 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-bold text-xl">
                                        {index + 1}
                                    </div>
                                    <div className="text-primary mb-4 mt-4">
                                        {Icon && <Icon size={32} />}
                                    </div>
                                    <h3 className="text-xl font-bold mb-2">{step.title}</h3>
                                    <p className="text-sm text-muted-foreground mb-3">{step.description}</p>
                                    <div className="text-xs text-primary font-medium">{step.duration}</div>
                                </div>
                                {index < PROCESS_STEPS.length - 1 && (
                                    <div className="hidden lg:block absolute top-1/2 -right-4 w-8 h-0.5 bg-gradient-to-r from-primary to-transparent" />
                                )}
                            </motion.div>
                        );
                    })}
                </div>
            </div>

            {/* 6. Service FAQ */}
            <div className="max-w-4xl mx-auto mb-32">
                <div className="text-center mb-12">
                    <h2 className="text-4xl font-bold mb-4">Service FAQs</h2>
                    <p className="text-xl text-muted-foreground">Common questions about our packages</p>
                </div>
                <Accordion items={SERVICE_FAQS} />
            </div>

            {/* 7. CTA Section */}
            <div className="max-w-4xl mx-auto text-center glass-card p-12 rounded-3xl border border-primary/30 bg-gradient-to-br from-primary/5 to-purple-600/5">
                <h2 className="text-4xl font-bold mb-4">Ready to Get Started?</h2>
                <p className="text-xl text-muted-foreground mb-8">
                    Let's discuss which package is right for your business
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                    <Link
                        to="/contact"
                        className="px-8 py-4 rounded-full bg-primary text-primary-foreground font-semibold hover:opacity-90 transition-opacity"
                    >
                        Contact Us
                    </Link>
                    <Link
                        to="/portfolio"
                        className="px-8 py-4 rounded-full border-2 border-primary text-primary font-semibold hover:bg-primary/10 transition-colors"
                    >
                        View Our Work
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default Services;
