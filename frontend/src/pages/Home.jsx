import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { ArrowRight, Code, Palette, Zap, Globe, TrendingUp, Award } from 'lucide-react';
import { Link } from 'react-router-dom';
import { SERVICE_PACKAGES } from '../data/services';
import { CLIENTS } from '../data/clients';
import { TESTIMONIALS } from '../data/testimonials';
import { GENERAL_FAQS } from '../data/faqs';
import { PORTFOLIO_ITEMS } from '../data/portfolio';
import TestimonialCarousel from '../components/TestimonialCarousel';
import Accordion from '../components/Accordion';
import SEO from '../components/SEO';

const Home = () => {
    const targetRef = useRef(null);
    const { scrollYProgress } = useScroll({
        target: targetRef,
        offset: ["start end", "end start"]
    });

    const opacity = useTransform(scrollYProgress, [0, 0.5], [0, 1]);
    const y = useTransform(scrollYProgress, [0, 0.5], [100, 0]);

    const featuredWork = PORTFOLIO_ITEMS.slice(0, 3);

    const serviceHighlights = [
        {
            icon: <Globe className="w-8 h-8" />,
            title: "Web Development",
            description: "Modern, responsive websites built with cutting-edge technology"
        },
        {
            icon: <TrendingUp className="w-8 h-8" />,
            title: "Digital Marketing",
            description: "Data-driven strategies that drive real business growth"
        },
        {
            icon: <Palette className="w-8 h-8" />,
            title: "Brand Design",
            description: "Stunning visual identities that make you stand out"
        }
    ];

    return (
        <div className="relative overflow-hidden">
            <SEO
                title="Home"
                description="ZynoxBit - #1 Software Agency in Bangladesh. We build MERN stack websites, ecommerce platforms, and business portfolios. Delivery in 24 hours."
            />
            {/* 1. Hero Section - Premium 3D Design */}
            <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
                {/* Animated Gradient Background */}
                <div className="absolute inset-0 bg-gradient-to-br from-background via-purple-950/20 to-background">
                    <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(139,92,246,0.1),transparent_50%)]" />
                    <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,rgba(168,85,247,0.15),transparent_50%)]" />
                    <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_80%,rgba(147,51,234,0.1),transparent_50%)]" />
                </div>

                {/* Floating Orbs */}
                <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/30 rounded-full blur-[120px] animate-pulse" />
                <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-600/30 rounded-full blur-[120px] animate-pulse" style={{ animationDelay: '2s' }} />
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gradient-to-r from-primary/20 to-purple-600/20 rounded-full blur-[150px]" />

                {/* Grid Pattern Overlay */}
                <div className="absolute inset-0 bg-[linear-gradient(rgba(139,92,246,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(139,92,246,0.03)_1px,transparent_1px)] bg-[size:100px_100px] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_50%,black,transparent)]" />

                <div className="relative z-10 max-w-7xl mx-auto px-4 py-24">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                        {/* Text Content */}
                        <div className="text-center lg:text-left space-y-8">
                            {/* Badge */}
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.6 }}
                                className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 backdrop-blur-sm mx-auto lg:mx-0"
                            >
                                <Zap className="w-4 h-4 text-primary" />
                                <span className="text-sm font-medium text-primary">Powered by Innovation</span>
                            </motion.div>

                            {/* Main Heading */}
                            <motion.h1
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.8, delay: 0.1 }}
                                className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight"
                            >
                                <span className="block bg-clip-text text-transparent bg-gradient-to-r from-foreground via-foreground to-foreground/80 mb-2">
                                    Digital Reality,
                                </span>
                                <span className="block bg-clip-text text-transparent bg-gradient-to-r from-primary via-purple-500 to-primary bg-[length:200%_auto] animate-gradient">
                                    Elevated
                                </span>
                            </motion.h1>

                            {/* Description */}
                            <motion.p
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.8, delay: 0.2 }}
                                className="text-xl md:text-2xl text-muted-foreground leading-relaxed max-w-2xl mx-auto lg:mx-0"
                            >
                                We craft <span className="text-primary font-semibold">immersive digital experiences</span> that transcend the ordinary. Your vision, our innovation, limitless possibilities.
                            </motion.p>

                            {/* CTA Buttons */}
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.8, delay: 0.3 }}
                                className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start"
                            >
                                <Link
                                    to="/contact"
                                    className="group relative inline-flex items-center justify-center px-8 py-4 rounded-full bg-gradient-to-r from-primary to-purple-600 text-white font-semibold overflow-hidden transition-all hover:scale-105 hover:shadow-2xl hover:shadow-primary/50"
                                >
                                    <span className="absolute inset-0 bg-gradient-to-r from-purple-600 to-primary opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                                    <span className="relative z-10 flex items-center gap-2">
                                        Start Your Journey
                                        <ArrowRight className="group-hover:translate-x-1 transition-transform" size={20} />
                                    </span>
                                </Link>
                                <Link
                                    to="/portfolio"
                                    className="group inline-flex items-center justify-center px-8 py-4 rounded-full border-2 border-primary/50 text-foreground font-semibold hover:bg-primary/10 hover:border-primary transition-all backdrop-blur-sm"
                                >
                                    <span className="flex items-center gap-2">
                                        View Our Work
                                        <Code className="group-hover:rotate-12 transition-transform" size={20} />
                                    </span>
                                </Link>
                            </motion.div>

                            {/* Stats */}
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.8, delay: 0.4 }}
                                className="grid grid-cols-3 gap-8 pt-8 border-t border-border/50"
                            >
                                <div className="text-center lg:text-left">
                                    <div className="text-3xl md:text-4xl font-bold text-primary">50+</div>
                                    <div className="text-sm text-muted-foreground">Projects Delivered</div>
                                </div>
                                <div className="text-center lg:text-left">
                                    <div className="text-3xl md:text-4xl font-bold text-primary">98%</div>
                                    <div className="text-sm text-muted-foreground">Client Satisfaction</div>
                                </div>
                                <div className="text-center lg:text-left">
                                    <div className="text-3xl md:text-4xl font-bold text-primary">24/7</div>
                                    <div className="text-sm text-muted-foreground">Support Available</div>
                                </div>
                            </motion.div>
                        </div>

                        {/* 3D Mockup Image */}
                        <motion.div
                            initial={{ opacity: 0, scale: 0.8, rotateY: -20 }}
                            animate={{ opacity: 1, scale: 1, rotateY: 0 }}
                            transition={{ duration: 1.2, delay: 0.3, type: "spring" }}
                            className="relative flex justify-center lg:justify-end"
                            style={{ perspective: '2000px' }}
                        >
                            <motion.div
                                whileHover={{
                                    rotateY: 8,
                                    rotateX: -3,
                                    scale: 1.02,
                                    transition: { type: 'spring', stiffness: 300, damping: 20 }
                                }}
                                className="relative w-full max-w-[600px] group"
                                style={{ transformStyle: 'preserve-3d' }}
                            >
                                {/* Glow Effects */}
                                <div className="absolute -inset-4 bg-gradient-to-r from-primary/40 via-purple-600/40 to-primary/40 rounded-3xl blur-3xl opacity-60 group-hover:opacity-100 transition-opacity duration-500 animate-pulse" />
                                <div className="absolute -inset-2 bg-gradient-to-br from-purple-600/30 to-primary/30 rounded-3xl blur-2xl opacity-40 group-hover:opacity-70 transition-opacity duration-500" />

                                {/* Main Image Container */}
                                <div className="relative rounded-3xl overflow-hidden border border-primary/30 shadow-2xl backdrop-blur-sm bg-gradient-to-br from-background/50 to-background/30 group-hover:border-primary/50 transition-all duration-500">
                                    <img
                                        src="/hero-mockup.png"
                                        alt="3D Digital Experience Mockup"
                                        className="w-full h-auto relative z-10"
                                    />

                                    {/* Overlay Gradient */}
                                    <div className="absolute inset-0 bg-gradient-to-tr from-primary/10 via-transparent to-purple-600/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                                    {/* Floating Particles */}
                                    <motion.div
                                        animate={{
                                            y: [0, -15, 0],
                                            rotate: [0, 5, 0],
                                            scale: [1, 1.05, 1]
                                        }}
                                        transition={{
                                            duration: 5,
                                            repeat: Infinity,
                                            ease: "easeInOut"
                                        }}
                                        className="absolute top-8 right-8 w-20 h-20 bg-primary/20 backdrop-blur-md rounded-2xl border border-primary/40 shadow-lg"
                                        style={{ transform: 'translateZ(40px)' }}
                                    >
                                        <div className="absolute inset-0 flex items-center justify-center">
                                            <Palette className="w-8 h-8 text-primary" />
                                        </div>
                                    </motion.div>

                                    <motion.div
                                        animate={{
                                            y: [0, 15, 0],
                                            rotate: [0, -5, 0],
                                            scale: [1, 1.05, 1]
                                        }}
                                        transition={{
                                            duration: 6,
                                            repeat: Infinity,
                                            ease: "easeInOut",
                                            delay: 1
                                        }}
                                        className="absolute bottom-8 left-8 w-24 h-24 bg-purple-600/20 backdrop-blur-md rounded-2xl border border-purple-600/40 shadow-lg"
                                        style={{ transform: 'translateZ(30px)' }}
                                    >
                                        <div className="absolute inset-0 flex items-center justify-center">
                                            <Code className="w-10 h-10 text-purple-400" />
                                        </div>
                                    </motion.div>

                                    <motion.div
                                        animate={{
                                            y: [0, -10, 0],
                                            x: [0, 5, 0],
                                            rotate: [0, 3, 0]
                                        }}
                                        transition={{
                                            duration: 4,
                                            repeat: Infinity,
                                            ease: "easeInOut",
                                            delay: 2
                                        }}
                                        className="absolute top-1/2 right-4 w-16 h-16 bg-gradient-to-br from-primary/30 to-purple-600/30 backdrop-blur-md rounded-xl border border-primary/30 shadow-lg"
                                        style={{ transform: 'translateZ(25px)' }}
                                    >
                                        <div className="absolute inset-0 flex items-center justify-center">
                                            <Zap className="w-6 h-6 text-primary" />
                                        </div>
                                    </motion.div>
                                </div>

                                {/* 3D Shadow Layers */}
                                <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-purple-600/20 rounded-3xl transform rotate-3 -z-10 blur-xl opacity-50" style={{ transform: 'translateZ(-60px) rotate(3deg)' }} />
                                <div className="absolute inset-0 bg-gradient-to-br from-purple-600/15 to-primary/15 rounded-3xl transform -rotate-3 -z-20 blur-2xl opacity-30" style={{ transform: 'translateZ(-80px) rotate(-3deg)' }} />
                            </motion.div>
                        </motion.div>
                    </div>
                </div>

                {/* Scroll Indicator */}
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 1, duration: 1 }}
                    className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
                >
                    <span className="text-sm text-muted-foreground">Scroll to explore</span>
                    <motion.div
                        animate={{ y: [0, 8, 0] }}
                        transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
                        className="w-6 h-10 rounded-full border-2 border-primary/50 flex items-start justify-center p-2"
                    >
                        <div className="w-1.5 h-1.5 rounded-full bg-primary" />
                    </motion.div>
                </motion.div>
            </section>

            {/* 2. Trusted By Section */}
            <section className="py-16 border-y border-border bg-muted/30">
                <div className="max-w-7xl mx-auto px-4">
                    <p className="text-center text-sm uppercase tracking-wider text-muted-foreground mb-8">Trusted By Industry Leaders</p>
                    <div className="relative overflow-hidden">
                        <div className="flex space-x-12 animate-marquee">
                            {[...CLIENTS, ...CLIENTS].map((client, index) => (
                                <div
                                    key={`${client.id}-${index}`}
                                    className="flex-shrink-0 w-32 h-16 flex items-center justify-center grayscale hover:grayscale-0 transition-all opacity-60 hover:opacity-100"
                                >
                                    <span className="text-xl font-bold text-foreground/60">{client.name}</span>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* 3. The Agency Story - Scrollytelling */}
            <section ref={targetRef} className="py-32 px-4 relative">
                <div className="max-w-4xl mx-auto space-y-32">
                    <motion.div style={{ opacity, y }} className="glass-card p-8 md:p-12 rounded-2xl border border-border">
                        <h2 className="text-3xl md:text-4xl font-bold mb-6">Our Mission</h2>
                        <p className="text-lg md:text-xl text-muted-foreground leading-relaxed">
                            At ZynoxBit, we believe the digital world should be as beautiful as it is functional.
                            We're not just building websites—we're crafting digital realities that elevate brands
                            and transform businesses.
                        </p>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8 }}
                        viewport={{ once: true }}
                        className="glass-card p-8 md:p-12 rounded-2xl border border-border"
                    >
                        <h2 className="text-3xl md:text-4xl font-bold mb-6">Our Philosophy</h2>
                        <p className="text-lg md:text-xl text-muted-foreground leading-relaxed">
                            Through our signature glassmorphism design and cutting-edge technology, we create
                            experiences that are transparent, layered, and deeply engaging. Every pixel serves
                            a purpose, every interaction tells a story.
                        </p>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8 }}
                        viewport={{ once: true }}
                        className="glass-card p-8 md:p-12 rounded-2xl border border-border"
                    >
                        <h2 className="text-3xl md:text-4xl font-bold mb-6">Our Promise</h2>
                        <p className="text-lg md:text-xl text-muted-foreground leading-relaxed">
                            We promise to deliver digital solutions that don't just meet expectations—they
                            exceed them. Your success is our success, and we're committed to making your
                            digital presence unforgettable.
                        </p>
                    </motion.div>
                </div>
            </section>

            {/* 4. Service Highlights */}
            <section className="py-24 px-4 bg-muted/30">
                <div className="max-w-7xl mx-auto">
                    <div className="text-center mb-16">
                        <h2 className="text-4xl md:text-5xl font-bold mb-4">What We Do Best</h2>
                        <p className="text-xl text-muted-foreground">Comprehensive solutions for your digital needs</p>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {serviceHighlights.map((service, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ delay: index * 0.1 }}
                                viewport={{ once: true }}
                                className="glass-card rounded-2xl border border-border hover:border-primary/50 transition-all group overflow-hidden"
                            >
                                {/* Service Image */}
                                <div className="aspect-video relative overflow-hidden">
                                    <img
                                        src={
                                            index === 0
                                                ? "https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=800&h=600&fit=crop&q=80"
                                                : index === 1
                                                    ? "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=600&fit=crop&q=80"
                                                    : "https://images.unsplash.com/photo-1561070791-2526d30994b5?w=800&h=600&fit=crop&q=80"
                                        }
                                        alt={service.title}
                                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-background via-background/50 to-transparent opacity-60" />
                                    <div className="absolute top-4 right-4 text-primary bg-primary/10 backdrop-blur-sm p-3 rounded-xl border border-primary/20">
                                        {service.icon}
                                    </div>
                                </div>

                                {/* Service Content */}
                                <div className="p-8">
                                    <h3 className="text-2xl font-bold mb-3">{service.title}</h3>
                                    <p className="text-muted-foreground">{service.description}</p>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* 5. Featured Work */}
            <section className="py-24 px-4">
                <div className="max-w-7xl mx-auto">
                    <div className="text-center mb-16">
                        <h2 className="text-4xl md:text-5xl font-bold mb-4">Featured Projects</h2>
                        <p className="text-xl text-muted-foreground">Real results for real businesses</p>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {featuredWork.map((project, index) => (
                            <motion.div
                                key={project.id}
                                initial={{ opacity: 0, scale: 0.9 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                transition={{ delay: index * 0.1 }}
                                viewport={{ once: true }}
                                className="group relative overflow-hidden rounded-2xl border border-border bg-card hover:border-primary/50 transition-all"
                            >
                                {/* Project Image */}
                                <div className="aspect-video relative overflow-hidden bg-gradient-to-br from-primary/20 to-purple-600/20">
                                    <img
                                        src={
                                            project.category === "E-commerce"
                                                ? "https://images.unsplash.com/photo-1557821552-17105176677c?w=800&h=600&fit=crop&q=80"
                                                : project.category === "Web Application"
                                                    ? "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=600&fit=crop&q=80"
                                                    : "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=800&h=600&fit=crop&q=80"
                                        }
                                        alt={project.title}
                                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                                    <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                        <Award className="w-12 h-12 text-primary drop-shadow-lg" />
                                    </div>
                                </div>

                                {/* Project Content */}
                                <div className="p-6">
                                    <div className="text-sm text-primary font-medium mb-2">{project.category}</div>
                                    <h3 className="text-xl font-bold mb-2 group-hover:text-primary transition-colors">{project.title}</h3>
                                    <p className="text-muted-foreground text-sm mb-4">{project.description}</p>
                                    <Link
                                        to="/portfolio"
                                        className="text-primary font-medium hover:underline inline-flex items-center gap-1 group/link"
                                    >
                                        View Case Study <ArrowRight size={16} className="group-hover/link:translate-x-1 transition-transform" />
                                    </Link>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* 6. Pricing Preview */}
            <section className="py-24 px-4 bg-muted/30">
                <div className="max-w-7xl mx-auto">
                    <div className="text-center mb-16">
                        <h2 className="text-4xl md:text-5xl font-bold mb-4">Simple, Transparent Pricing</h2>
                        <p className="text-xl text-muted-foreground">Choose the perfect plan for your business</p>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
                        {SERVICE_PACKAGES.map((pkg, index) => (
                            <motion.div
                                key={pkg.id}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ delay: index * 0.1 }}
                                viewport={{ once: true }}
                                className={`relative p-8 rounded-2xl border ${pkg.isHighlighted
                                    ? 'border-primary bg-primary/5 shadow-lg shadow-primary/10 scale-105'
                                    : 'border-border bg-card/50'
                                    }`}
                            >
                                {pkg.isHighlighted && (
                                    <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-primary text-primary-foreground px-4 py-1 rounded-full text-sm font-medium">
                                        Most Popular
                                    </div>
                                )}
                                <h3 className="text-2xl font-bold mb-2">{pkg.tierName}</h3>
                                <div className="text-4xl font-bold mb-6">
                                    {typeof pkg.priceMonthly === 'number'
                                        ? `৳${pkg.priceMonthly.toLocaleString()}`
                                        : pkg.priceMonthly}
                                    {typeof pkg.priceMonthly === 'number' && <span className="text-base font-normal text-muted-foreground">/package</span>}
                                </div>
                                <ul className="space-y-3 mb-8">
                                    {pkg.features.slice(0, 3).map((feature, i) => (
                                        <li key={i} className="flex items-center gap-2 text-muted-foreground">
                                            <div className="w-1.5 h-1.5 rounded-full bg-primary" />
                                            {feature}
                                        </li>
                                    ))}
                                </ul>
                                <Link
                                    to={`/services/${pkg.id}`}
                                    className={`block w-full py-3 rounded-lg font-semibold text-center transition-colors ${pkg.isHighlighted
                                        ? 'bg-primary text-primary-foreground hover:opacity-90'
                                        : 'bg-secondary text-secondary-foreground hover:bg-secondary/80'
                                        }`}
                                >
                                    View Details
                                </Link>
                            </motion.div>
                        ))}
                    </div>
                    <div className="text-center">
                        <Link
                            to="/services"
                            className="text-primary font-medium hover:underline inline-flex items-center gap-2"
                        >
                            View Full Pricing Details <ArrowRight size={16} />
                        </Link>
                    </div>
                </div>
            </section>

            {/* 7. Testimonials */}
            <section className="py-24 px-4">
                <div className="max-w-7xl mx-auto">
                    <div className="text-center mb-16">
                        <h2 className="text-4xl md:text-5xl font-bold mb-4">What Our Clients Say</h2>
                        <p className="text-xl text-muted-foreground">Don't just take our word for it</p>
                    </div>
                    <TestimonialCarousel testimonials={TESTIMONIALS} />
                </div>
            </section>

            {/* 8. FAQ */}
            <section className="py-24 px-4 bg-muted/30">
                <div className="max-w-4xl mx-auto">
                    <div className="text-center mb-16">
                        <h2 className="text-4xl md:text-5xl font-bold mb-4">Frequently Asked Questions</h2>
                        <p className="text-xl text-muted-foreground">Everything you need to know</p>
                    </div>
                    <Accordion items={GENERAL_FAQS} />
                </div>
            </section>

            {/* 9. Final CTA */}
            <section className="py-32 px-4 relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-r from-primary/10 to-purple-600/10" />
                <div className="relative z-10 max-w-4xl mx-auto text-center">
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-4xl md:text-6xl font-bold mb-6"
                    >
                        Ready to Elevate Your Digital Presence?
                    </motion.h2>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.1 }}
                        viewport={{ once: true }}
                        className="text-xl text-muted-foreground mb-8"
                    >
                        Let's create something extraordinary together. Your journey to digital excellence starts here.
                    </motion.p>
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2 }}
                        viewport={{ once: true }}
                    >
                        <Link
                            to="/contact"
                            className="group relative inline-flex items-center justify-center px-12 py-5 rounded-full bg-gradient-to-r from-primary to-purple-600 text-white text-lg font-bold overflow-hidden transition-all hover:scale-105 hover:shadow-2xl hover:shadow-primary/50"
                        >
                            <span className="relative z-10 flex items-center gap-2">
                                Start Your Project <ArrowRight className="group-hover:translate-x-2 transition-transform" size={24} />
                            </span>
                            <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-primary opacity-0 group-hover:opacity-100 transition-opacity" />
                        </Link>
                    </motion.div>
                </div>
            </section>

            {/* Tech Stack Ticker */}
            <section className="py-12 border-y border-border overflow-hidden">
                <div className="flex space-x-12 animate-marquee whitespace-nowrap">
                    {[...Array(2)].map((_, i) => (
                        <div key={i} className="flex space-x-12 items-center">
                            <span className="text-2xl font-bold text-muted-foreground flex items-center gap-2"><Code />React</span>
                            <span className="text-2xl font-bold text-muted-foreground flex items-center gap-2"><Palette />Tailwind CSS</span>
                            <span className="text-2xl font-bold text-muted-foreground flex items-center gap-2"><Zap />Vite</span>
                            <span className="text-2xl font-bold text-muted-foreground">Framer Motion</span>
                            <span className="text-2xl font-bold text-muted-foreground">Next.js</span>
                            <span className="text-2xl font-bold text-muted-foreground">Node.js</span>
                        </div>
                    ))}
                </div>
            </section>
        </div>
    );
};

export default Home;
