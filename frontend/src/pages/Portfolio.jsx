import React, { useState } from 'react';
import { CASE_STUDIES } from '../data/caseStudies';
import { CLIENTS } from '../data/clients';
import { motion } from 'framer-motion';
import { ExternalLink, Filter } from 'lucide-react';
import Modal from '../components/Modal';
import { Link } from 'react-router-dom';

const Portfolio = () => {
    const [selectedCategory, setSelectedCategory] = useState('All');
    const [selectedCase, setSelectedCase] = useState(null);

    const categories = ['All', ...new Set(CASE_STUDIES.map(item => item.category))];

    const filteredProjects = selectedCategory === 'All'
        ? CASE_STUDIES
        : CASE_STUDIES.filter(item => item.category === selectedCategory);

    return (
        <div className="py-24 px-4">
            {/* 1. Page Header */}
            <div className="max-w-7xl mx-auto text-center mb-20">
                <motion.h1
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="text-5xl md:text-6xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-primary to-purple-600"
                >
                    Our Masterpieces
                </motion.h1>
                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.1 }}
                    className="text-xl text-muted-foreground max-w-3xl mx-auto"
                >
                    Explore our portfolio of successful projects. Each one tells a story of innovation,
                    creativity, and measurable results.
                </motion.p>
            </div>

            {/* 2. Filterable Project Gallery */}
            <div className="max-w-7xl mx-auto mb-32">
                {/* Filter Buttons */}
                <div className="flex flex-wrap items-center justify-center gap-3 mb-12">
                    <Filter className="text-muted-foreground" size={20} />
                    {categories.map((category) => (
                        <button
                            key={category}
                            onClick={() => setSelectedCategory(category)}
                            className={`px-6 py-2 rounded-full font-medium transition-all ${selectedCategory === category
                                    ? 'bg-primary text-primary-foreground shadow-lg'
                                    : 'bg-secondary text-secondary-foreground hover:bg-secondary/80'
                                }`}
                        >
                            {category}
                        </button>
                    ))}
                </div>

                {/* Project Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {filteredProjects.map((project, index) => (
                        <motion.div
                            key={project.id}
                            layout
                            initial={{ opacity: 0, scale: 0.9 }}
                            animate={{ opacity: 1, scale: 1 }}
                            exit={{ opacity: 0, scale: 0.9 }}
                            transition={{ duration: 0.3, delay: index * 0.05 }}
                            className="group relative overflow-hidden rounded-2xl border border-border bg-card cursor-pointer"
                            onClick={() => setSelectedCase(project)}
                        >
                            {/* Image */}
                            <div className="aspect-video bg-gradient-to-br from-primary/20 to-purple-600/20 relative overflow-hidden">
                                <img
                                    src={project.thumbnail}
                                    alt={project.title}
                                    className="w-full h-full object-cover"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
                                    <div className="text-white">
                                        <div className="flex items-center gap-2 font-medium mb-2">
                                            View Case Study <ExternalLink size={16} />
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="p-6">
                                <div className="text-sm text-primary font-medium mb-2">{project.category}</div>
                                <h3 className="text-2xl font-bold mb-2 group-hover:text-primary transition-colors">{project.title}</h3>
                                <p className="text-muted-foreground text-sm mb-4">{project.client}</p>
                                {project.results && project.results.length > 0 && (
                                    <div className="grid grid-cols-3 gap-4 pt-4 border-t border-border">
                                        {project.results.slice(0, 3).map((result, i) => (
                                            <div key={i}>
                                                <div className="text-2xl font-bold text-primary">{result.value}</div>
                                                <div className="text-xs text-muted-foreground">{result.metric}</div>
                                            </div>
                                        ))}
                                    </div>
                                )}
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>

            {/* 3. Case Study Modal */}
            <Modal
                isOpen={!!selectedCase}
                onClose={() => setSelectedCase(null)}
                title={selectedCase?.title}
            >
                {selectedCase && (
                    <div className="space-y-8">
                        {/* Client & Category */}
                        <div className="flex items-center gap-4 text-sm">
                            <span className="px-3 py-1 rounded-full bg-primary/10 text-primary font-medium">
                                {selectedCase.category}
                            </span>
                            <span className="text-muted-foreground">Client: {selectedCase.client}</span>
                            <span className="text-muted-foreground">Duration: {selectedCase.duration}</span>
                        </div>

                        {/* Challenge */}
                        <div>
                            <h3 className="text-2xl font-bold mb-3">The Challenge</h3>
                            <p className="text-muted-foreground leading-relaxed">{selectedCase.challenge}</p>
                        </div>

                        {/* Solution */}
                        <div>
                            <h3 className="text-2xl font-bold mb-3">Our Solution</h3>
                            <p className="text-muted-foreground leading-relaxed">{selectedCase.solution}</p>
                        </div>

                        {/* Results */}
                        <div>
                            <h3 className="text-2xl font-bold mb-4">The Results</h3>
                            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                                {selectedCase.results.map((result, i) => (
                                    <div key={i} className="glass-card p-6 rounded-xl border border-border text-center">
                                        <div className="text-4xl font-bold text-primary mb-2">{result.value}</div>
                                        <div className="font-semibold mb-1">{result.metric}</div>
                                        <div className="text-sm text-muted-foreground">{result.description}</div>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* Technologies */}
                        <div>
                            <h3 className="text-2xl font-bold mb-3">Technologies Used</h3>
                            <div className="flex flex-wrap gap-2">
                                {selectedCase.technologies.map((tech, i) => (
                                    <span key={i} className="px-3 py-1 rounded-full bg-secondary text-secondary-foreground text-sm">
                                        {tech}
                                    </span>
                                ))}
                            </div>
                        </div>
                    </div>
                )}
            </Modal>

            {/* 4. Client Roster */}
            <div className="max-w-7xl mx-auto mb-32 bg-muted/30 rounded-3xl p-12">
                <div className="text-center mb-12">
                    <h2 className="text-4xl font-bold mb-4">Trusted By</h2>
                    <p className="text-xl text-muted-foreground">Proud to work with amazing companies</p>
                </div>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                    {CLIENTS.map((client) => (
                        <div
                            key={client.id}
                            className="flex flex-col items-center justify-center p-6 glass-card rounded-xl border border-border hover:border-primary/50 transition-all group"
                        >
                            <div className="text-center">
                                <div className="text-lg font-bold text-foreground/80 group-hover:text-primary transition-colors mb-1">
                                    {client.name}
                                </div>
                                <div className="text-xs text-muted-foreground">{client.category}</div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            {/* 5. CTA Section */}
            <div className="max-w-4xl mx-auto text-center glass-card p-12 rounded-3xl border border-primary/30 bg-gradient-to-br from-primary/5 to-purple-600/5">
                <h2 className="text-4xl font-bold mb-4">Want Results Like These?</h2>
                <p className="text-xl text-muted-foreground mb-8">
                    Let's create your success story together
                </p>
                <Link
                    to="/contact"
                    className="inline-flex items-center px-8 py-4 rounded-full bg-primary text-primary-foreground font-semibold hover:opacity-90 transition-opacity"
                >
                    Start Your Project
                </Link>
            </div>
        </div>
    );
};

export default Portfolio;
