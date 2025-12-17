import React from 'react';
import { JOBS } from '../data/jobs';
import { Link } from 'react-router-dom';
import { MapPin, Clock, Banknote, Briefcase } from 'lucide-react';
import { motion } from 'framer-motion';
import SEO from '../components/SEO';

const Jobs = () => {
    return (
        <div className="py-24 px-4 min-h-screen">
            <SEO
                title="Careers"
                description="Join ZynoxBit. We are hiring MERN Stack Developers, Frontend Engineers, and more. Check out our open positions."
            />
            <div className="max-w-7xl mx-auto">
                <div className="text-center mb-16">
                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="text-5xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-primary to-purple-600"
                    >
                        Join Our Team
                    </motion.h1>
                    <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                        We're always looking for talented individuals to help us build the future of the web.
                        Check out our open positions below.
                    </p>
                </div>

                <div className="grid gap-6">
                    {JOBS.map((job, index) => (
                        <motion.div
                            key={job.id}
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: index * 0.1 }}
                            className="bg-card/50 border border-border/50 hover:border-primary/50 p-6 rounded-2xl transition-all hover:shadow-lg group"
                        >
                            <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                                <div>
                                    <h3 className="text-2xl font-bold mb-2 group-hover:text-primary transition-colors">
                                        {job.title}
                                    </h3>
                                    <div className="flex flex-wrap gap-4 text-muted-foreground text-sm">
                                        <div className="flex items-center gap-1">
                                            <Briefcase size={16} />
                                            {job.type}
                                        </div>
                                        <div className="flex items-center gap-1">
                                            <MapPin size={16} />
                                            {job.location}
                                        </div>
                                        <div className="flex items-center gap-1">
                                            <Banknote size={16} />
                                            {job.salary}
                                        </div>
                                        <div className="flex items-center gap-1">
                                            <Clock size={16} />
                                            {job.postedDate}
                                        </div>
                                    </div>
                                </div>
                                <Link
                                    to={`/jobs/${job.id}`}
                                    className="px-6 py-3 rounded-xl bg-primary/10 text-primary font-semibold hover:bg-primary hover:text-primary-foreground transition-all text-center md:text-left whitespace-nowrap"
                                >
                                    View Details
                                </Link>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Jobs;
