import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../assets/zynoxbit-web.png';

const Footer = () => {
    return (
        <footer className="bg-background border-t border-border mt-auto">
            <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
                    <div className="col-span-1 md:col-span-2">
                        <Link to="/" className="flex items-center gap-2">
                            <img src={logo} alt="ZynoxBit Logo" className="h-24 w-auto object-contain" />
                        </Link>
                        <p className="mt-4 text-sm text-muted-foreground max-w-md">
                            Crafting immersive digital experiences with cutting-edge technology and design.
                            We build the future of the web, one pixel at a time.
                        </p>
                    </div>
                    <div>
                        <h3 className="text-sm font-semibold text-foreground tracking-wider uppercase">Services</h3>
                        <ul className="mt-4 space-y-4">
                            <li>
                                <Link to="/services" className="text-base text-muted-foreground hover:text-primary">
                                    Web Development
                                </Link>
                            </li>
                            <li>
                                <Link to="/services" className="text-base text-muted-foreground hover:text-primary">
                                    UI/UX Design
                                </Link>
                            </li>
                            <li>
                                <Link to="/services" className="text-base text-muted-foreground hover:text-primary">
                                    SEO Optimization
                                </Link>
                            </li>
                        </ul>
                    </div>
                    <div>
                        <h3 className="text-sm font-semibold text-foreground tracking-wider uppercase">Company</h3>
                        <ul className="mt-4 space-y-4">
                            <li>
                                <Link to="/about" className="text-base text-muted-foreground hover:text-primary">
                                    About Us
                                </Link>
                            </li>
                            <li>
                                <Link to="/jobs" className="text-base text-muted-foreground hover:text-primary">
                                    Jobs
                                </Link>
                            </li>
                            <li>
                                <Link to="/blog" className="text-base text-muted-foreground hover:text-primary">
                                    Blog
                                </Link>
                            </li>
                            <li>
                                <Link to="/contact" className="text-base text-muted-foreground hover:text-primary">
                                    Contact
                                </Link>
                            </li>
                        </ul>
                    </div>
                    <div>
                        <h3 className="text-sm font-semibold text-foreground tracking-wider uppercase">Contact Us</h3>
                        <ul className="mt-4 space-y-4">
                            <li>
                                <a href="https://wa.me/8801999389199" className="text-base text-muted-foreground hover:text-primary flex items-center gap-2">
                                    <span className="font-semibold">WhatsApp:</span> +880 1999-389199
                                </a>
                            </li>
                            <li>
                                <a href="mailto:zynoxbit@gmail.com" className="text-base text-muted-foreground hover:text-primary flex items-center gap-2">
                                    <span className="font-semibold">Email:</span> zynoxbit@gmail.com
                                </a>
                            </li>
                            <li>
                                <a href="https://maps.google.com/?q=35,+Sungai+Besi+Serdang+Perdana,+Taman+Serdang+Perdana,+43300+Seri+Kembangan,+Selangor" target="_blank" rel="noopener noreferrer" className="text-base text-muted-foreground hover:text-primary flex items-start gap-2">
                                    <span className="font-semibold shrink-0">Address:</span>
                                    <span>35, Sungai Besi Serdang Perdana, Taman Serdang Perdana, 43300 Seri Kembangan, Selangor</span>
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
                <div className="mt-8 border-t border-border pt-8 md:flex md:items-center md:justify-between">
                    <div className="flex space-x-6 md:order-2">
                        <Link to="/policies/terms" className="text-sm text-muted-foreground hover:text-primary">
                            Terms & Conditions
                        </Link>
                        <Link to="/policies/privacy" className="text-sm text-muted-foreground hover:text-primary">
                            Privacy Policy
                        </Link>
                        <Link to="/policies/refund" className="text-sm text-muted-foreground hover:text-primary">
                            Refund Policy
                        </Link>
                    </div>
                    <p className="mt-8 text-base text-muted-foreground md:mt-0 md:order-1">
                        &copy; {new Date().getFullYear()} ZynoxBit. All rights reserved.
                    </p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
