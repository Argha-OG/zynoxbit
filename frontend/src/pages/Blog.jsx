import React, { useState } from 'react';
import { BLOG_POSTS } from '../data/blogs';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Calendar, User, ArrowRight, Mail } from 'lucide-react';

const Blog = () => {
    const [email, setEmail] = useState('');
    const [subscribed, setSubscribed] = useState(false);

    const featuredPost = BLOG_POSTS[0];
    const latestPosts = BLOG_POSTS.slice(1);

    const handleNewsletterSubmit = (e) => {
        e.preventDefault();
        console.log('Newsletter subscription:', email);
        setSubscribed(true);
        setEmail('');
        setTimeout(() => setSubscribed(false), 3000);
    };

    return (
        <div className="py-24 px-4">
            {/* 1. Page Header */}
            <div className="max-w-7xl mx-auto text-center mb-20">
                <motion.h1
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="text-5xl md:text-6xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-primary to-purple-600"
                >
                    Insights & Trends
                </motion.h1>
                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.1 }}
                    className="text-xl text-muted-foreground max-w-3xl mx-auto"
                >
                    Stay ahead of the curve with our latest thoughts on design, technology, and digital innovation.
                </motion.p>
            </div>

            {/* 2. Featured Post */}
            <div className="max-w-7xl mx-auto mb-32">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="glass-card rounded-3xl border border-border overflow-hidden"
                >
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                        <div className="aspect-video lg:aspect-auto bg-gradient-to-br from-primary/20 to-purple-600/20 flex items-center justify-center">
                            <div className="text-6xl font-bold text-primary/20">Featured</div>
                        </div>
                        <div className="p-8 lg:p-12 flex flex-col justify-center">
                            <div className="flex items-center gap-4 text-sm text-muted-foreground mb-4">
                                <span className="flex items-center gap-1"><Calendar size={14} /> {featuredPost.date}</span>
                                <span className="flex items-center gap-1"><User size={14} /> {featuredPost.author}</span>
                            </div>
                            <Link to={`/blog/${featuredPost.slug}`} className="group">
                                <h2 className="text-3xl md:text-4xl font-bold mb-4 group-hover:text-primary transition-colors">
                                    {featuredPost.title}
                                </h2>
                            </Link>
                            <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                                {featuredPost.excerpt}
                            </p>
                            <div className="flex gap-2 mb-6">
                                {featuredPost.tags.map(tag => (
                                    <span key={tag} className="px-3 py-1 rounded-full bg-primary/10 text-primary text-sm font-medium">
                                        {tag}
                                    </span>
                                ))}
                            </div>
                            <Link
                                to={`/blog/${featuredPost.slug}`}
                                className="inline-flex items-center gap-2 text-primary font-semibold hover:gap-3 transition-all"
                            >
                                Read Full Article <ArrowRight size={20} />
                            </Link>
                        </div>
                    </div>
                </motion.div>
            </div>

            {/* 3. Latest Articles Grid */}
            <div className="max-w-7xl mx-auto mb-32">
                <h2 className="text-4xl font-bold mb-12">Latest Articles</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {latestPosts.map((post, index) => (
                        <motion.article
                            key={post.id}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: index * 0.1 }}
                            viewport={{ once: true }}
                            className="group glass-card rounded-2xl border border-border overflow-hidden hover:border-primary/50 transition-all"
                        >
                            <div className="aspect-video bg-gradient-to-br from-primary/10 to-purple-600/10 flex items-center justify-center">
                                <div className="text-4xl font-bold text-primary/20">{post.title.charAt(0)}</div>
                            </div>
                            <div className="p-6">
                                <div className="flex items-center gap-3 text-xs text-muted-foreground mb-3">
                                    <span className="flex items-center gap-1"><Calendar size={12} /> {post.date}</span>
                                    <span className="flex items-center gap-1"><User size={12} /> {post.author}</span>
                                </div>
                                <Link to={`/blog/${post.slug}`} className="block group-hover:text-primary transition-colors">
                                    <h3 className="text-xl font-bold mb-3">{post.title}</h3>
                                </Link>
                                <p className="text-muted-foreground text-sm mb-4 line-clamp-3">
                                    {post.excerpt}
                                </p>
                                <div className="flex gap-2 mb-4">
                                    {post.tags.map(tag => (
                                        <span key={tag} className="px-2 py-1 rounded-md bg-secondary text-secondary-foreground text-xs font-medium">
                                            {tag}
                                        </span>
                                    ))}
                                </div>
                                <Link
                                    to={`/blog/${post.slug}`}
                                    className="text-primary text-sm font-medium hover:underline inline-flex items-center gap-1"
                                >
                                    Read More <ArrowRight size={14} />
                                </Link>
                            </div>
                        </motion.article>
                    ))}
                </div>
            </div>

            {/* 4. Newsletter Signup */}
            <div className="max-w-4xl mx-auto">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="glass-card p-12 rounded-3xl border border-primary/30 bg-gradient-to-br from-primary/5 to-purple-600/5 text-center"
                >
                    <Mail className="w-16 h-16 text-primary mx-auto mb-6" />
                    <h2 className="text-4xl font-bold mb-4">Get Tips in Your Inbox</h2>
                    <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
                        Subscribe to our newsletter for the latest insights, trends, and exclusive content delivered straight to you.
                    </p>
                    {subscribed ? (
                        <div className="text-primary font-semibold text-lg">
                            ✓ Thanks for subscribing! Check your inbox.
                        </div>
                    ) : (
                        <form onSubmit={handleNewsletterSubmit} className="max-w-md mx-auto">
                            <div className="flex gap-3">
                                <input
                                    type="email"
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                    placeholder="Enter your email"
                                    required
                                    className="flex-1 px-6 py-4 rounded-full bg-background border border-input focus:ring-2 focus:ring-primary focus:outline-none"
                                />
                                <button
                                    type="submit"
                                    className="px-8 py-4 rounded-full bg-primary text-primary-foreground font-semibold hover:opacity-90 transition-opacity whitespace-nowrap"
                                >
                                    Subscribe
                                </button>
                            </div>
                            <p className="text-xs text-muted-foreground mt-3">
                                We respect your privacy. Unsubscribe at any time.
                            </p>
                        </form>
                    )}
                </motion.div>
            </div>
        </div>
    );
};

export default Blog;
