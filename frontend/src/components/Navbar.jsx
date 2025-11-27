import React, { useState, useEffect } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { Menu, X, Sun, Moon } from 'lucide-react';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false);
    const [theme, setTheme] = useState(() => {
        if (typeof window !== 'undefined') {
            return localStorage.getItem('theme') || 'light';
        }
        return 'light';
    });

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 20);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    useEffect(() => {
        if (theme === 'dark') {
            document.documentElement.classList.add('dark');
        } else {
            document.documentElement.classList.remove('dark');
        }
        localStorage.setItem('theme', theme);
    }, [theme]);

    const toggleTheme = () => {
        setTheme(prev => prev === 'light' ? 'dark' : 'light');
    };

    return (
        <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'glass-card border-b border-border shadow-lg' : 'bg-transparent'
            }`}>
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between h-16">
                    {/* Logo */}
                    <Link to="/" className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-primary to-purple-600">
                        ZynoxBit
                    </Link>

                    {/* Desktop Navigation */}
                    <div className="hidden md:flex items-center gap-8">
                        <nav className="flex items-center gap-6">
                            <NavLink
                                to="/"
                                className={({ isActive }) =>
                                    `font-medium transition-colors ${isActive ? 'text-primary' : 'text-foreground/80 hover:text-primary'}`
                                }
                            >
                                Home
                            </NavLink>
                            <NavLink
                                to="/services"
                                className={({ isActive }) =>
                                    `font-medium transition-colors ${isActive ? 'text-primary' : 'text-foreground/80 hover:text-primary'}`
                                }
                            >
                                Services
                            </NavLink>
                            <NavLink
                                to="/portfolio"
                                className={({ isActive }) =>
                                    `font-medium transition-colors ${isActive ? 'text-primary' : 'text-foreground/80 hover:text-primary'}`
                                }
                            >
                                Portfolio
                            </NavLink>
                            <NavLink
                                to="/blog"
                                className={({ isActive }) =>
                                    `font-medium transition-colors ${isActive ? 'text-primary' : 'text-foreground/80 hover:text-primary'}`
                                }
                            >
                                Blog
                            </NavLink>
                            <NavLink
                                to="/contact"
                                className={({ isActive }) =>
                                    `font-medium transition-colors ${isActive ? 'text-primary' : 'text-foreground/80 hover:text-primary'}`
                                }
                            >
                                Contact
                            </NavLink>
                        </nav>

                        {/* Login Button & Theme Toggle */}
                        <div className="flex items-center gap-4">
                            <Link
                                to="/login"
                                className="px-6 py-2 rounded-full bg-primary text-primary-foreground font-medium hover:opacity-90 transition-opacity"
                            >
                                Login
                            </Link>
                            <button
                                onClick={toggleTheme}
                                className="p-2 rounded-lg hover:bg-secondary transition-colors"
                                aria-label="Toggle theme"
                            >
                                {theme === 'dark' ? <Sun size={20} /> : <Moon size={20} />}
                            </button>
                        </div>
                    </div>

                    {/* Mobile Menu Button */}
                    <button
                        onClick={() => setIsOpen(!isOpen)}
                        className="md:hidden p-2 rounded-lg hover:bg-secondary transition-colors"
                        aria-label="Toggle menu"
                    >
                        {isOpen ? <X size={24} /> : <Menu size={24} />}
                    </button>
                </div>
            </div>

            {/* Mobile Menu */}
            {isOpen && (
                <div className="md:hidden glass-card border-t border-border">
                    <div className="px-4 py-4 space-y-3">
                        <NavLink
                            to="/"
                            onClick={() => setIsOpen(false)}
                            className={({ isActive }) =>
                                `block px-4 py-2 rounded-lg font-medium transition-colors ${isActive ? 'bg-primary/10 text-primary' : 'text-foreground/80 hover:bg-secondary'
                                }`
                            }
                        >
                            Home
                        </NavLink>
                        <NavLink
                            to="/services"
                            onClick={() => setIsOpen(false)}
                            className={({ isActive }) =>
                                `block px-4 py-2 rounded-lg font-medium transition-colors ${isActive ? 'bg-primary/10 text-primary' : 'text-foreground/80 hover:bg-secondary'
                                }`
                            }
                        >
                            Services
                        </NavLink>
                        <NavLink
                            to="/portfolio"
                            onClick={() => setIsOpen(false)}
                            className={({ isActive }) =>
                                `block px-4 py-2 rounded-lg font-medium transition-colors ${isActive ? 'bg-primary/10 text-primary' : 'text-foreground/80 hover:bg-secondary'
                                }`
                            }
                        >
                            Portfolio
                        </NavLink>
                        <NavLink
                            to="/blog"
                            onClick={() => setIsOpen(false)}
                            className={({ isActive }) =>
                                `block px-4 py-2 rounded-lg font-medium transition-colors ${isActive ? 'bg-primary/10 text-primary' : 'text-foreground/80 hover:bg-secondary'
                                }`
                            }
                        >
                            Blog
                        </NavLink>
                        <NavLink
                            to="/contact"
                            onClick={() => setIsOpen(false)}
                            className={({ isActive }) =>
                                `block px-4 py-2 rounded-lg font-medium transition-colors ${isActive ? 'bg-primary/10 text-primary' : 'text-foreground/80 hover:bg-secondary'
                                }`
                            }
                        >
                            Contact
                        </NavLink>
                        <Link
                            to="/login"
                            onClick={() => setIsOpen(false)}
                            className="block px-4 py-2 rounded-lg bg-primary text-primary-foreground font-medium text-center"
                        >
                            Login
                        </Link>
                        <button
                            onClick={() => {
                                toggleTheme();
                                setIsOpen(false);
                            }}
                            className="w-full px-4 py-2 rounded-lg hover:bg-secondary transition-colors flex items-center gap-2"
                        >
                            {theme === 'dark' ? <><Sun size={18} /> Light Mode</> : <><Moon size={18} /> Dark Mode</>}
                        </button>
                    </div>
                </div>
            )}
        </nav>
    );
};

export default Navbar;
