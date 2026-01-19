import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { ArrowRight, Zap, TrendingUp, Shield, Activity, Users, Settings, Home as HomeIcon, Search, Globe, ChevronRight, Code, Palette, Award, ShoppingBag } from 'lucide-react';
import { Link } from 'react-router-dom';
import { SERVICE_PACKAGES } from '../data/services';
import { CLIENTS } from '../data/clients';
import { TESTIMONIALS } from '../data/testimonials';
import { GENERAL_FAQS } from '../data/faqs';
import { PORTFOLIO_ITEMS } from '../data/portfolio';
import TestimonialCarousel from '../components/TestimonialCarousel';
import TeamCarousel from '../components/TeamCarousel';
import Accordion from '../components/Accordion';
import SEO from '../components/SEO';
import SpotlightCard from '../components/SpotlightCard';
import ThreeDScrollSection from '../components/ThreeDScrollSection';
import ScaleOnScroll from '../components/ScaleOnScroll';

// Icon Mapping
const SERVICE_ICONS = {
    mern_starter: Zap,
    mern_portfolio: Globe,
    mern_semi_ecom: ShoppingBag,
    mern_full_ecom: ShoppingBag,
    mern_custom: Code,
    wordpress_custom: Palette
};

const Home = () => {
    // console.log("Home component rendering...");
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
                title="Best Software Agency in Malaysia & Bangladesh"
                description="ZynoxBit delivers top-tier web development and digital marketing services. Helping clients in Malaysia, Bangladesh, and globally build scalable software solutions."
                keywords="software agency Malaysia, web development Bangladesh, client success stories, custom software development, digital agency Kuala Lumpur, Dhaka tech company"
            />
            {/* 1. Hero Section - Dashboard Style */}
            <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
                {/* Background Enhancements */}
                <div className="absolute inset-0 bg-background">
                    <div className="absolute top-0 -left-4 w-96 h-96 bg-primary/20 rounded-full blur-[100px] opacity-30 animate-blob" />
                    <div className="absolute bottom-0 -right-4 w-96 h-96 bg-purple-600/20 rounded-full blur-[100px] opacity-30 animate-blob animation-delay-2000" />
                    <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:50px_50px]" />
                </div>

                <div className="container relative z-10 grid lg:grid-cols-2 gap-12 items-center px-6">
                    {/* Left: Text Content */}
                    <div className="space-y-8 text-center lg:text-left">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 border border-primary/20 text-primary text-sm font-medium mx-auto lg:mx-0"
                        >
                            <span className="flex h-2 w-2 rounded-full bg-primary animate-pulse" />
                            Accepting New Projects
                        </motion.div>

                        <motion.h1
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.1 }}
                            className="text-5xl md:text-7xl font-bold tracking-tight leading-tight"
                        >
                            Scale Your <br />
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-purple-500">
                                Digital Impact
                            </span>
                        </motion.h1>

                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.2 }}
                            className="text-xl text-muted-foreground max-w-2xl mx-auto lg:mx-0"
                        >
                            We build high-performance applications that drive growth.
                            From concept to launch, we are your partners in digital transformation.
                        </motion.p>

                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.3 }}
                            className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start"
                        >
                            <a
                                href="https://wa.me/8801999389199"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="px-8 py-4 rounded-xl bg-primary text-primary-foreground font-bold text-lg hover:opacity-90 transition-opacity flex items-center justify-center gap-2"
                            >
                                Start Project <ArrowRight size={20} />
                            </a>
                            <Link
                                to="/portfolio"
                                className="px-8 py-4 rounded-xl glass-card border-white/10 hover:bg-white/5 font-semibold text-lg transition-colors flex items-center justify-center"
                            >
                                View Portfolio
                            </Link>
                        </motion.div>

                        {/* Trust Indicators */}
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 0.5 }}
                            className="pt-8 flex items-center justify-center lg:justify-start gap-4 text-sm text-muted-foreground"
                        >
                            <div className="flex -space-x-3">
                                {[1, 2, 3, 4].map(i => (
                                    <div key={i} className="w-10 h-10 rounded-full border-2 border-background bg-muted flex items-center justify-center overflow-hidden">
                                        <img src={`https://i.pravatar.cc/100?img=${i + 10}`} alt="User" className="w-full h-full object-cover" />
                                    </div>
                                ))}
                                <div className="w-10 h-10 rounded-full border-2 border-background bg-primary/10 flex items-center justify-center text-xs font-bold text-primary">
                                    +2k
                                </div>
                            </div>
                            <div>Trusted by <span className="font-bold text-foreground">200+</span> businesses</div>
                        </motion.div>
                    </div>

                    {/* Right: Dashboard Mockup */}
                    <div className="relative hidden lg:block perspective-1000">
                        {/* Main Dashboard Card - High Class Bento Grid */}
                        <div className="w-full max-w-[580px] bg-[#030305]/90 backdrop-blur-3xl rounded-[32px] border border-white/10 shadow-2xl shadow-black/50 overflow-hidden flex relative z-10 group/dashboard">
                            {/* Ambient Glow */}
                            <div className="absolute top-0 right-0 w-[300px] h-[300px] bg-primary/20 blur-[120px] rounded-full pointer-events-none opacity-20 group-hover/dashboard:opacity-30 transition-opacity duration-700" />

                            {/* Sidebar */}
                            <div className="w-[70px] bg-white/[0.02] border-r border-white/5 flex flex-col items-center py-8 gap-8 z-20">
                                <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-primary to-primary/60 flex items-center justify-center text-white shadow-lg shadow-primary/20 ring-1 ring-white/20">
                                    <Zap size={20} fill="currentColor" />
                                </div>
                                <div className="flex flex-col gap-6 w-full px-3">
                                    <div className="h-10 w-full rounded-xl bg-white/10 flex items-center justify-center text-white relative group cursor-pointer hover:bg-white/20 transition-all duration-300">
                                        <div className="absolute left-0 top-1/2 -translate-y-1/2 w-1 h-5 bg-primary rounded-r-full shadow-[0_0_10px_rgba(124,58,237,0.5)]" />
                                        <HomeIcon size={20} className="drop-shadow-md" />
                                    </div>
                                    {/* Sidebar Icons with Tooltip-like glint */}
                                    {[TrendingUp, Globe, Users, Settings].map((Icon, i) => (
                                        <div key={i} className="h-10 w-full rounded-xl flex items-center justify-center text-gray-400 hover:text-white hover:bg-white/5 transition-all duration-300 cursor-pointer group relative">
                                            <Icon size={20} />
                                            <div className="absolute inset-0 rounded-xl bg-white/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
                                        </div>
                                    ))}
                                </div>
                                <div className="mt-auto">
                                    <div className="relative">
                                        <img src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?auto=format&fit=crop&w=100&h=100" alt="Profile" className="w-10 h-10 rounded-full border-2 border-white/10" />
                                        <div className="absolute bottom-0 right-0 w-3 h-3 bg-green-500 rounded-full border-2 border-[#030305]" />
                                    </div>
                                </div>
                            </div>

                            {/* Main Content Area (Grid) */}
                            <div className="flex-1 p-6 z-20 overflow-hidden">
                                {/* Header */}
                                <div className="flex items-center justify-between mb-8">
                                    <div>
                                        <h3 className="text-lg font-bold text-white tracking-tight">Overview</h3>
                                        <p className="text-[11px] font-medium text-gray-500 uppercase tracking-wider">Welcome back, Alex</p>
                                    </div>
                                    <div className="flex items-center gap-3">
                                        <div className="w-9 h-9 rounded-full bg-white/5 flex items-center justify-center text-gray-400 hover:text-white hover:bg-white/10 transition-colors cursor-pointer border border-white/5">
                                            <Search size={16} />
                                        </div>
                                        <div className="w-9 h-9 rounded-full bg-white/5 flex items-center justify-center text-gray-400 hover:text-white hover:bg-white/10 transition-colors cursor-pointer border border-white/5 relative">
                                            <div className="absolute top-2 right-2 w-1.5 h-1.5 bg-red-500 rounded-full" />
                                            <Activity size={16} />
                                        </div>
                                    </div>
                                </div>

                                {/* Bento Grid Layout */}
                                <div className="grid grid-cols-3 gap-4 h-[340px]">

                                    {/* Col 1: Main Stats (2 rows) */}
                                    <div className="col-span-2 flex flex-col gap-4">
                                        {/* Top: 2 Stat Cards */}
                                        <div className="grid grid-cols-2 gap-4 h-[120px]">
                                            <div className="bg-[#13131A] p-5 rounded-[24px] border border-white/5 relative overflow-hidden group hover:border-primary/20 transition-colors duration-300">
                                                <div className="absolute top-0 right-0 p-4 opacity-[0.08] group-hover:opacity-20 transition-opacity duration-300">
                                                    <Zap size={64} />
                                                </div>
                                                <div className="text-[11px] font-semibold text-gray-400 mb-1">Total Revenue</div>
                                                <div className="text-2xl font-bold text-white mb-2">$124.5k</div>
                                                <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-green-500/10 border border-green-500/20">
                                                    <TrendingUp size={10} className="text-green-400" />
                                                    <span className="text-[10px] font-bold text-green-400">+12.5%</span>
                                                </div>
                                            </div>
                                            <div className="bg-[#13131A] p-5 rounded-[24px] border border-white/5 relative overflow-hidden group hover:border-blue-500/20 transition-colors duration-300">
                                                <div className="absolute -right-4 -bottom-4 w-24 h-24 bg-blue-500/10 blur-[40px] rounded-full group-hover:bg-blue-500/20 transition-colors duration-300" />
                                                <div className="text-[11px] font-semibold text-gray-400 mb-1">Active Users</div>
                                                <div className="text-2xl font-bold text-white mb-3">45.2k</div>
                                                {/* Mini User Avatars */}
                                                <div className="flex -space-x-2">
                                                    {[1, 2, 3].map((_, i) => (
                                                        <div key={i} className="w-6 h-6 rounded-full bg-white/10 border-2 border-[#13131A] overflow-hidden">
                                                            <img src={`https://randomuser.me/api/portraits/men/${i + 20}.jpg`} alt="" className="w-full h-full object-cover" />
                                                        </div>
                                                    ))}
                                                    <div className="w-6 h-6 rounded-full bg-[#1A1A23] border-2 border-[#13131A] flex items-center justify-center text-[8px] font-bold text-gray-400">+4k</div>
                                                </div>
                                            </div>
                                        </div>

                                        {/* Bottom: Chart Area */}
                                        <div className="flex-1 bg-[#13131A] rounded-[24px] border border-white/5 relative overflow-hidden group">
                                            <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 mix-blend-overlay" />
                                            <div className="absolute top-5 left-5 right-5 flex justify-between items-center z-10">
                                                <span className="text-[11px] font-semibold text-gray-400">Analytics</span>
                                                <div className="flex gap-1">
                                                    {['D', 'W', 'M'].map((p, i) => (
                                                        <div key={i} className={`text-[9px] px-2 py-1 rounded-lg cursor-pointer transition-colors ${i === 1 ? 'bg-white/10 text-white font-medium' : 'text-gray-500 hover:text-gray-300'}`}>{p}</div>
                                                    ))}
                                                </div>
                                            </div>

                                            {/* Chart */}
                                            <div className="absolute bottom-0 left-0 right-0 h-[100px] w-full">
                                                <svg className="w-full h-full" preserveAspectRatio="none">
                                                    <defs>
                                                        <linearGradient id="chartGradient" x1="0" y1="0" x2="0" y2="1">
                                                            <stop offset="0%" stopColor="#7c3aed" stopOpacity="0.4" />
                                                            <stop offset="100%" stopColor="#7c3aed" stopOpacity="0" />
                                                        </linearGradient>
                                                    </defs>
                                                    <path d="M0,80 C50,70 100,50 150,60 C200,70 250,40 300,50 C350,60 400,30 450,40 L450,120 L0,120 Z" fill="url(#chartGradient)" />
                                                    <path d="M0,80 C50,70 100,50 150,60 C200,70 250,40 300,50 C350,60 400,30 450,40" fill="none" stroke="#7c3aed" strokeWidth="2" strokeLinecap="round" />
                                                </svg>
                                            </div>
                                        </div>
                                    </div>

                                    {/* Col 2: Right Panel (Notifications/Activity) */}
                                    <div className="col-span-1 bg-[#13131A]/50 rounded-[24px] border border-white/5 p-4 flex flex-col gap-4 relative overflow-hidden">
                                        <div className="flex items-center justify-between">
                                            <span className="text-[11px] font-semibold text-gray-400">Activity</span>
                                            <div className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse" />
                                        </div>

                                        <div className="flex flex-col gap-3 overflow-y-auto pr-1 custom-scrollbar-hide">
                                            {[
                                                { title: "New Sale", time: "2m", value: "+$49", icon: TrendingUp, color: "text-green-400", bg: "bg-green-500/10" },
                                                { title: "New User", time: "15m", value: "Alyx", icon: Users, color: "text-blue-400", bg: "bg-blue-500/10" },
                                                { title: "Server", time: "1h", value: "98%", icon: Activity, color: "text-purple-400", bg: "bg-purple-500/10" },
                                                { title: "Updates", time: "2h", value: "v2.0", icon: Code, color: "text-orange-400", bg: "bg-orange-500/10" },
                                            ].map((item, i) => (
                                                <div key={i} className="flex flex-col gap-1.5 p-2.5 rounded-xl bg-white/5 hover:bg-white/10 border border-white/5 hover:border-white/10 transition-all cursor-pointer group/item">
                                                    <div className="flex items-start justify-between">
                                                        <div className={`w-6 h-6 rounded-lg ${item.bg} flex items-center justify-center ${item.color}`}>
                                                            <item.icon size={12} />
                                                        </div>
                                                        <span className="text-[9px] text-gray-500">{item.time}</span>
                                                    </div>
                                                    <div>
                                                        <div className="text-[10px] font-medium text-white">{item.title}</div>
                                                        <div className="text-[9px] text-gray-400">{item.value}</div>
                                                    </div>
                                                </div>
                                            ))}
                                        </div>

                                        {/* Bottom Action */}
                                        <div className="mt-auto pt-3 border-t border-white/5">
                                            <button className="w-full py-2 rounded-lg bg-primary/10 hover:bg-primary/20 text-primary text-[10px] font-bold border border-primary/20 transition-all flex items-center justify-center gap-2">
                                                Full Report <ArrowRight size={10} />
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Integrated ROI Badge - Positioned relative to the main card for "connected" feel */}
                        <motion.div
                            animate={{ y: [0, 8, 0] }}
                            transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
                            className="absolute -right-6 top-12 z-30 pointer-events-none"
                        >
                            <div className="bg-[#1A1A23] border border-white/10 rounded-2xl shadow-2xl p-3 flex items-center gap-3 pr-5">
                                <div className="w-10 h-10 rounded-xl bg-green-500/10 border border-green-500/20 flex items-center justify-center text-green-500">
                                    <TrendingUp size={18} />
                                </div>
                                <div>
                                    <div className="text-[10px] font-semibold text-gray-400 uppercase tracking-wider">ROI Increase</div>
                                    <div className="text-lg font-bold text-white flex items-baseline gap-1">
                                        245% <span className="text-[9px] text-green-400 font-medium">+42%</span>
                                    </div>
                                </div>
                            </div>
                        </motion.div>

                        {/* Floating Active Clients - Bottom Left Overlap */}
                        <motion.div
                            animate={{ y: [0, -8, 0] }}
                            transition={{ duration: 7, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                            className="absolute -left-4 bottom-8 z-30 pointer-events-none"
                        >
                            <div className="bg-[#1A1A23] border border-white/10 rounded-2xl shadow-2xl p-3 flex items-center gap-3">
                                <div className="flex -space-x-2">
                                    {[1, 2].map((_, i) => (
                                        <div key={i} className="w-8 h-8 rounded-full bg-gray-700 border-2 border-[#1A1A23] overflow-hidden">
                                            <img src={`https://randomuser.me/api/portraits/women/${i + 30}.jpg`} alt="" className="w-full h-full object-cover" />
                                        </div>
                                    ))}
                                    <div className="w-8 h-8 rounded-full bg-[#1A1A23] border-2 border-[#1A1A23] flex items-center justify-center text-[9px] font-bold text-gray-400 ring-1 ring-white/10">+2k</div>
                                </div>
                                <div className="pr-2">
                                    <div className="text-[10px] font-semibold text-gray-400">Active Clients</div>
                                    <div className="text-sm font-bold text-white">Growth</div>
                                </div>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* 2. Trusted By Section - Infinite Marquee */}
            <ThreeDScrollSection className="py-24 border-y border-border bg-muted/30 overflow-hidden">
                <div className="max-w-7xl mx-auto px-4">
                    <p className="text-center text-sm uppercase tracking-wider text-muted-foreground mb-12">Trusted By Industry Leaders</p>

                    <div className="relative w-full mask-linear-fade">

                        {/* Marquee Container */}
                        <div className="flex whitespace-nowrap animate-marquee hover:pause gap-16">
                            {[...CLIENTS, ...CLIENTS, ...CLIENTS].map((client, index) => (
                                <div key={index} className="flex items-center gap-3 opacity-50 hover:opacity-100 transition-opacity cursor-pointer group">
                                    {/* Placeholder Logo Icon */}
                                    <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center text-primary group-hover:scale-110 transition-transform">
                                        <Globe size={20} />
                                    </div>
                                    <span className="text-xl font-bold text-foreground/80 group-hover:text-primary transition-colors">{client.name}</span>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </ThreeDScrollSection>

            {/* 3. Your Agency Story Section - Scrollytelling */}
            <ThreeDScrollSection className="py-32 relative overflow-hidden">
                <div className="absolute top-1/2 left-0 w-96 h-96 bg-primary/10 blur-[120px] rounded-full -translate-y-1/2" />
                <div className="max-w-7xl mx-auto px-4 relative z-10">
                    <div className="grid lg:grid-cols-2 gap-16 items-center">
                        <div>
                            <motion.div
                                initial={{ opacity: 0, x: -50 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                transition={{ duration: 0.8 }}
                            >
                                <span className="text-primary font-medium tracking-wider uppercase">Our Philosophy</span>
                                <h2 className="text-4xl md:text-5xl font-bold mt-4 mb-6 leading-tight">
                                    We Craft Digital <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-purple-400">Masterpieces</span>
                                </h2>
                                <p className="text-lg text-muted-foreground mb-8 text-justify">
                                    At ZynoxBit, we believe that every brand has a unique story waiting to be told. We
                                    don't just build websites; we create immersive digital ecosystems that captivate,
                                    convert, and leave a lasting impression.
                                </p>

                                <div className="grid grid-cols-1 gap-6">
                                    {[
                                        { title: "Strategic Vision", desc: "Data-driven strategies tailored to your goals.", icon: TrendingUp, image: "https://images.unsplash.com/photo-1552664730-d307ca884978?w=800&q=80" },
                                        { title: "Creative Excellence", desc: "Award-winning designs that stand out.", icon: Palette, image: "https://images.unsplash.com/photo-1561070791-2526d30994b5?w=800&q=80" },
                                        { title: "Technical Mastery", desc: "Clean, scalable, and high-performance code.", icon: Code, image: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=800&q=80" },
                                    ].map((item, i) => (
                                        <ScaleOnScroll key={i} className="relative flex items-center gap-4 p-4 rounded-xl bg-muted/20 border border-border hover:border-primary/50 transition-all group overflow-hidden">
                                            {/* Background Image */}
                                            <div className="absolute inset-0 z-0 pointer-events-none">
                                                <img
                                                    src={item.image}
                                                    alt={item.title}
                                                    className="w-full h-full object-cover opacity-0 group-hover:opacity-20 transition-opacity duration-500"
                                                />
                                                <div className="absolute inset-0 bg-background/80" />
                                            </div>

                                            <div className="relative z-10 flex items-center gap-4">
                                                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center text-primary group-hover:scale-110 transition-transform shrink-0">
                                                    <item.icon size={24} />
                                                </div>
                                                <div>
                                                    <h4 className="text-lg font-bold mb-1 group-hover:text-primary transition-colors">{item.title}</h4>
                                                    <p className="text-sm text-muted-foreground">{item.desc}</p>
                                                </div>
                                            </div>
                                        </ScaleOnScroll>
                                    ))}
                                </div>
                            </motion.div>
                        </div>

                        {/* Image/Visual Graphic */}
                        <div className="relative">
                            <ScaleOnScroll className="grid grid-cols-2 gap-4">
                                <SpotlightCard className="col-span-2 h-64 bg-muted/30 rounded-3xl border border-border overflow-hidden relative group">
                                    <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                                    <div className="absolute bottom-6 left-6 right-6">
                                        <div className="flex items-center gap-2 mb-2">
                                            <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
                                            <span className="text-xs uppercase tracking-widest text-white/70">Live Analytics</span>
                                        </div>
                                        <div className="h-24 flex items-end justify-between gap-1">
                                            {[40, 70, 50, 90, 60, 80, 50, 70, 60].map((h, i) => (
                                                <motion.div
                                                    key={i}
                                                    initial={{ height: 0 }}
                                                    whileInView={{ height: `${h}%` }}
                                                    transition={{ duration: 1, delay: i * 0.1 }}
                                                    className="w-full bg-primary/40 rounded-t-sm hover:bg-primary transition-colors"
                                                />
                                            ))}
                                        </div>
                                    </div>
                                </SpotlightCard>
                                <SpotlightCard className="h-48 bg-muted/30 rounded-3xl border border-border flex items-center justify-center relative overlow-hidden">
                                    <div className="absolute inset-0 flex items-center justify-center">
                                        <div className="w-20 h-20 rounded-full border-2 border-primary/30 flex items-center justify-center animate-[spin_10s_linear_infinite]">
                                            <div className="w-16 h-16 rounded-full border-2 border-primary/50 border-t-transparent" />
                                        </div>
                                        <Award size={32} className="text-primary absolute" />
                                    </div>
                                </SpotlightCard>
                                <SpotlightCard className="h-48 bg-primary rounded-3xl border border-primary flex flex-col justify-center p-6 text-white relative overflow-hidden group">
                                    <div className="absolute inset-0">
                                        <img
                                            src=""
                                            alt="Team"
                                            className="w-full h-full object-cover opacity-40 group-hover:opacity-20 transition-opacity duration-500"
                                        />
                                        <div className="absolute inset-0 bg-primary/80 mix-blend-multiply" />
                                    </div>
                                    <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full blur-2xl -translate-y-1/2 translate-x-1/2" />
                                    <div className="relative z-10">
                                        <div className="text-5xl font-bold mb-2">10+</div>
                                        <div className="text-white/80 font-medium">Years of Experience</div>
                                    </div>
                                </SpotlightCard>
                            </ScaleOnScroll>
                        </div>
                    </div>
                </div>
            </ThreeDScrollSection>

            {/* Team Section */}
            <section className="py-24 bg-muted/20 overflow-hidden">
                <TeamCarousel />
            </section>

            {/* 4. Services Section */}
            <ThreeDScrollSection className="py-32" id="services">
                <div className="max-w-7xl mx-auto px-4">
                    <div className="text-center mb-20">

                        <h2 className="text-4xl md:text-5xl font-bold mb-6">Our Core <span className="text-primary">Services</span></h2>
                        <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                            Comprehensive digital solutions designed to scale your business.
                        </p>
                    </div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {SERVICE_PACKAGES.map((service, index) => {
                            const ServiceIcon = SERVICE_ICONS[service.id] || Globe;
                            return (
                                <SpotlightCard key={index} className="h-full bg-muted/10 border border-white/5 rounded-3xl p-8 hover:border-primary/50 transition-colors group relative flex flex-col overflow-hidden">


                                    <div className="relative z-10 flex flex-col h-full">
                                        <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center text-primary mb-6 group-hover:scale-110 transition-transform">
                                            <ServiceIcon size={28} />
                                        </div>
                                        <h3 className="text-2xl font-bold mb-4">{service.tierName}</h3>
                                        <p className="text-muted-foreground mb-8 flex-1">{service.details ? service.details.substring(0, 100) + '...' : service.desc}</p>

                                        <ul className="space-y-3 mb-8">
                                            {service.features.slice(0, 4).map((feature, i) => (
                                                <li key={i} className="flex items-center gap-3 text-sm text-gray-400">
                                                    <div className="w-1.5 h-1.5 rounded-full bg-primary" />
                                                    {feature}
                                                </li>
                                            ))}
                                        </ul>

                                        <Link to={`/service/${service.id}`} className="w-full py-3 rounded-xl bg-primary/10 hover:bg-primary text-primary hover:text-white font-semibold flex items-center justify-center gap-2 transition-all mt-auto group/btn">
                                            Explore Service <ArrowRight size={16} className="group-hover/btn:translate-x-1 transition-transform" />
                                        </Link>
                                    </div>
                                </SpotlightCard>
                            );
                        })}
                    </div>
                </div>
            </ThreeDScrollSection>

            {/* 6. Portfolio Section */}
            <ThreeDScrollSection className="py-32 bg-muted/20" id="portfolio">
                <div className="max-w-7xl mx-auto px-4">
                    <div className="flex justify-between items-end mb-16">
                        <div>
                            <span className="text-primary font-medium tracking-wider uppercase">Our Work</span>
                            <h2 className="text-4xl md:text-5xl font-bold mt-2">Selected Projects</h2>
                        </div>
                        <Link to="/portfolio" className="hidden md:flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors">
                            View All Work <ArrowRight size={20} />
                        </Link>
                    </div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {featuredWork.map((project, index) => (
                            <SpotlightCard key={index} className="group block h-[400px] w-full rounded-3xl overflow-hidden relative cursor-pointer">
                                {/* Image Background */}
                                <div className="absolute inset-0 flex items-center justify-center bg-gray-800">
                                    <img src={project.image} alt={project.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
                                    {/* Overlay Gradient */}
                                    <div className="absolute inset-x-0 bottom-0 h-2/3 bg-gradient-to-t from-black/90 to-transparent opacity-80 group-hover:opacity-100 transition-opacity" />
                                </div>

                                {/* Content */}
                                <div className="absolute bottom-0 left-0 right-0 p-8 translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                                    <div className="flex items-center gap-2 mb-2">
                                        <span className="px-3 py-1 rounded-full bg-primary text-xs font-bold text-white uppercase tracking-wider">{project.category}</span>
                                    </div>
                                    <h3 className="text-2xl font-bold text-white mb-2">{project.title}</h3>
                                    <p className="text-white/70 line-clamp-2 text-sm mb-4 opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100">{project.description}</p>
                                    <div className="flex items-center gap-2 text-primary text-sm font-semibold opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-200">
                                        View Case Study <ArrowRight size={16} />
                                    </div>
                                </div>
                            </SpotlightCard>
                        ))}
                    </div>

                    <div className="mt-12 text-center md:hidden">
                        <Link to="/portfolio" className="inline-flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors">
                            View All Work <ArrowRight size={20} />
                        </Link>
                    </div>
                </div>
            </ThreeDScrollSection>

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
