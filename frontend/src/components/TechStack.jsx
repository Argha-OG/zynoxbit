import React from 'react';
import { motion } from 'framer-motion';
import {
    Code2, Database, Globe, Layers, Layout, Server, Smartphone, Monitor, Cloud, Zap
} from 'lucide-react';

const TECH_STACK = [
    { name: "React", icon: Code2, color: "text-blue-400" },
    { name: "Node.js", icon: Server, color: "text-green-500" },
    { name: "MongoDB", icon: Database, color: "text-green-600" },
    { name: "Express", icon: Layers, color: "text-gray-400" },
    { name: "Tailwind", icon: Layout, color: "text-cyan-400" },
    { name: "Vite", icon: Zap, color: "text-yellow-400" },
    { name: "WordPress", icon: Globe, color: "text-blue-600" },
    { name: "Next.js", icon: Monitor, color: "text-white" },
];

const TechStack = () => {
    return (
        <section className="py-20 bg-muted/20 border-y border-border/50">
            <div className="max-w-7xl mx-auto px-4 text-center">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    className="mb-12"
                >
                    <h2 className="text-3xl font-bold mb-4">Technologies We Master</h2>
                    <p className="text-muted-foreground">Built with the latest and greatest tools</p>
                </motion.div>

                <div className="flex flex-wrap justify-center gap-8 md:gap-16">
                    {TECH_STACK.map((tech, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, scale: 0.8 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            transition={{ delay: index * 0.1 }}
                            className="flex flex-col items-center gap-3 group"
                        >
                            <div className={`p-4 rounded-2xl bg-card border border-border group-hover:border-primary/50 transition-colors shadow-lg ${tech.color || 'text-foreground'}`}>
                                <tech.icon size={40} className="stroke-[1.5]" />
                            </div>
                            <span className="font-medium text-sm text-muted-foreground group-hover:text-primary transition-colors">{tech.name}</span>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default TechStack;
