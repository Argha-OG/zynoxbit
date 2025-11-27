import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        <footer className="bg-background border-t border-border mt-auto">
            <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
                    <div className="col-span-1 md:col-span-2">
                        <span className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-primary to-purple-600">
                            ZynoxBit
                        </span>
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
                </div>
                <div className="mt-8 border-t border-border pt-8 md:flex md:items-center md:justify-between">
                    <p className="text-base text-muted-foreground">
                        &copy; {new Date().getFullYear()} ZynoxBit. All rights reserved.
                    </p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
