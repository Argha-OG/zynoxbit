import React, { useState, useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import { motion } from 'framer-motion';
import { Send, CheckCircle, Mail, Phone, MapPin, Clock, Linkedin, Twitter, Github, Globe } from 'lucide-react';
import { SERVICE_PACKAGES } from '../data/services';
import { CONTACT_FAQS } from '../data/faqs';
import { TEAM_MEMBERS } from '../data/team';
import Accordion from '../components/Accordion';
import Modal from '../components/Modal';
import { useSearchParams } from 'react-router-dom';

const contactSchema = z.object({
    name: z.string().min(2, "Name must be at least 2 characters"),
    email: z.string().email("Invalid email address"),
    phone: z.string().optional(),
    company: z.string().optional(),
    budget: z.string().min(1, "Please select a budget range"),
    service: z.string().min(1, "Please select a service"),
    message: z.string().min(10, "Message must be at least 10 characters"),
});

const Contact = () => {
    const [isSubmitted, setIsSubmitted] = useState(false);
    const [selectedTeamMember, setSelectedTeamMember] = useState(null);
    const [searchParams] = useSearchParams();

    const { register, handleSubmit, formState: { errors }, reset, setValue } = useForm({
        resolver: zodResolver(contactSchema),
    });

    useEffect(() => {
        const packageParam = searchParams.get('package');
        if (packageParam) {
            const packageName = packageParam.charAt(0).toUpperCase() + packageParam.slice(1);
            setValue('service', `${packageName} Package`);
        }
    }, [searchParams, setValue]);

    const budgetRanges = [
        "৳25,000 - ৳50,000",
        "৳50,000 - ৳100,000",
        "৳100,000 - ৳200,000",
        "৳200,000+"
    ];

    const serviceOptions = [
        ...SERVICE_PACKAGES.map(pkg => `${pkg.tierName} Package`),
        "Custom Project",
        "Consultation Only"
    ];

    const onSubmit = (data) => {
        console.log("Form Data Submitted:", data);
        setTimeout(() => {
            setIsSubmitted(true);
            reset();
            setTimeout(() => setIsSubmitted(false), 5000);
        }, 1000);
    };

    const contactInfo = [
        {
            icon: <Mail className="w-6 h-6" />,
            title: "Email Us",
            content: "hello@zynoxbit.com",
            link: "mailto:hello@zynoxbit.com"
        },
        {
            icon: <Phone className="w-6 h-6" />,
            title: "Call Us",
            content: "+880 1234-567890",
            link: "tel:+8801234567890"
        },
        {
            icon: <MapPin className="w-6 h-6" />,
            title: "Visit Us",
            content: "Dhaka, Bangladesh",
            link: "#"
        },
        {
            icon: <Clock className="w-6 h-6" />,
            title: "Business Hours",
            content: "Mon-Fri: 9AM-6PM",
            link: null
        }
    ];

    return (
        <div className="py-24 px-4">
            {/* 1. Page Header */}
            <div className="max-w-7xl mx-auto text-center mb-20">
                <motion.h1
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="text-5xl md:text-6xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-primary to-purple-600"
                >
                    Let's Build Something Great
                </motion.h1>
                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.1 }}
                    className="text-xl text-muted-foreground max-w-3xl mx-auto"
                >
                    Ready to start your digital transformation? Get in touch with us and let's discuss how we can help you achieve your goals.
                </motion.p>
            </div>

            <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-12 mb-32">
                {/* 2. Contact Form */}
                <div className="lg:col-span-2">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5 }}
                        className="glass-card p-8 md:p-12 rounded-2xl border border-border"
                    >
                        {isSubmitted ? (
                            <motion.div
                                initial={{ opacity: 0, scale: 0.9 }}
                                animate={{ opacity: 1, scale: 1 }}
                                className="text-center py-12"
                            >
                                <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-green-100 dark:bg-green-900/30 text-green-600 dark:text-green-400 mb-6">
                                    <CheckCircle size={40} />
                                </div>
                                <h2 className="text-3xl font-bold mb-3">Message Sent!</h2>
                                <p className="text-muted-foreground text-lg">
                                    Thank you for reaching out. We'll get back to you within 24 hours.
                                </p>
                            </motion.div>
                        ) : (
                            <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                    <div className="space-y-2">
                                        <label htmlFor="name" className="text-sm font-medium">Name *</label>
                                        <input
                                            id="name"
                                            {...register("name")}
                                            className={`w-full px-4 py-3 rounded-lg bg-background border ${errors.name ? 'border-red-500' : 'border-input'} focus:ring-2 focus:ring-primary focus:outline-none transition-all`}
                                            placeholder="John Doe"
                                        />
                                        {errors.name && <p className="text-sm text-red-500">{errors.name.message}</p>}
                                    </div>
                                    <div className="space-y-2">
                                        <label htmlFor="email" className="text-sm font-medium">Email *</label>
                                        <input
                                            id="email"
                                            type="email"
                                            {...register("email")}
                                            className={`w-full px-4 py-3 rounded-lg bg-background border ${errors.email ? 'border-red-500' : 'border-input'} focus:ring-2 focus:ring-primary focus:outline-none transition-all`}
                                            placeholder="john@example.com"
                                        />
                                        {errors.email && <p className="text-sm text-red-500">{errors.email.message}</p>}
                                    </div>
                                </div>

                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                    <div className="space-y-2">
                                        <label htmlFor="phone" className="text-sm font-medium">Phone</label>
                                        <input
                                            id="phone"
                                            type="tel"
                                            {...register("phone")}
                                            className="w-full px-4 py-3 rounded-lg bg-background border border-input focus:ring-2 focus:ring-primary focus:outline-none transition-all"
                                            placeholder="+880 1234-567890"
                                        />
                                    </div>
                                    <div className="space-y-2">
                                        <label htmlFor="company" className="text-sm font-medium">Company</label>
                                        <input
                                            id="company"
                                            {...register("company")}
                                            className="w-full px-4 py-3 rounded-lg bg-background border border-input focus:ring-2 focus:ring-primary focus:outline-none transition-all"
                                            placeholder="Your Company"
                                        />
                                    </div>
                                </div>

                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                    <div className="space-y-2">
                                        <label htmlFor="budget" className="text-sm font-medium">Budget Range *</label>
                                        <select
                                            id="budget"
                                            {...register("budget")}
                                            className={`w-full px-4 py-3 rounded-lg bg-background border ${errors.budget ? 'border-red-500' : 'border-input'} focus:ring-2 focus:ring-primary focus:outline-none transition-all`}
                                        >
                                            <option value="">Select budget range</option>
                                            {budgetRanges.map((range) => (
                                                <option key={range} value={range}>{range}</option>
                                            ))}
                                        </select>
                                        {errors.budget && <p className="text-sm text-red-500">{errors.budget.message}</p>}
                                    </div>
                                    <div className="space-y-2">
                                        <label htmlFor="service" className="text-sm font-medium">Service Needed *</label>
                                        <select
                                            id="service"
                                            {...register("service")}
                                            className={`w-full px-4 py-3 rounded-lg bg-background border ${errors.service ? 'border-red-500' : 'border-input'} focus:ring-2 focus:ring-primary focus:outline-none transition-all`}
                                        >
                                            <option value="">Select a service</option>
                                            {serviceOptions.map((service) => (
                                                <option key={service} value={service}>{service}</option>
                                            ))}
                                        </select>
                                        {errors.service && <p className="text-sm text-red-500">{errors.service.message}</p>}
                                    </div>
                                </div>

                                <div className="space-y-2">
                                    <label htmlFor="message" className="text-sm font-medium">Tell us about your project *</label>
                                    <textarea
                                        id="message"
                                        rows={6}
                                        {...register("message")}
                                        className={`w-full px-4 py-3 rounded-lg bg-background border ${errors.message ? 'border-red-500' : 'border-input'} focus:ring-2 focus:ring-primary focus:outline-none transition-all`}
                                        placeholder="Tell us about your project goals, timeline, and any specific requirements..."
                                    />
                                    {errors.message && <p className="text-sm text-red-500">{errors.message.message}</p>}
                                </div>

                                <button
                                    type="submit"
                                    className="w-full py-4 rounded-lg bg-primary text-primary-foreground font-semibold hover:opacity-90 transition-opacity flex items-center justify-center gap-2 text-lg"
                                >
                                    Send Message <Send size={20} />
                                </button>
                            </form>
                        )}
                    </motion.div>
                </div>

                {/* 3. Contact Info Glass Cards */}
                <div className="space-y-6">
                    {contactInfo.map((info, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, x: 20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: index * 0.1 }}
                            className="glass-card p-6 rounded-xl border border-border hover:border-primary/50 transition-all"
                        >
                            <div className="flex items-start gap-4">
                                <div className="p-3 rounded-lg bg-primary/10 text-primary">
                                    {info.icon}
                                </div>
                                <div className="flex-1">
                                    <h3 className="font-semibold mb-1">{info.title}</h3>
                                    {info.link ? (
                                        <a
                                            href={info.link}
                                            className="text-muted-foreground hover:text-primary transition-colors"
                                        >
                                            {info.content}
                                        </a>
                                    ) : (
                                        <p className="text-muted-foreground">{info.content}</p>
                                    )}
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>

            {/* 4. Stylized Location Map */}
            <div className="max-w-7xl mx-auto mb-32">
                <div className="glass-card rounded-2xl border border-border overflow-hidden">
                    <div className="aspect-video bg-gradient-to-br from-primary/10 to-purple-600/10 relative">
                        <div className="absolute inset-0 flex items-center justify-center">
                            <div className="text-center">
                                <MapPin className="w-16 h-16 text-primary mx-auto mb-4" />
                                <h3 className="text-2xl font-bold mb-2">Dhaka, Bangladesh</h3>
                                <p className="text-muted-foreground">Serving clients worldwide</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* 5. Meet the Team */}
            <div className="max-w-7xl mx-auto mb-32">
                <div className="text-center mb-12">
                    <h2 className="text-4xl font-bold mb-4">Meet the Team</h2>
                    <p className="text-xl text-muted-foreground">The talented people behind ZynoxBit</p>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {TEAM_MEMBERS.map((member, index) => (
                        <motion.div
                            key={member.id}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: index * 0.1 }}
                            viewport={{ once: true }}
                            onClick={() => setSelectedTeamMember(member)}
                            className="glass-card rounded-2xl border border-border overflow-hidden cursor-pointer hover:border-primary/50 transition-all group"
                        >
                            <div className="aspect-square overflow-hidden bg-gradient-to-br from-primary/10 to-purple-600/10">
                                <img
                                    src={member.photo}
                                    alt={member.name}
                                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                                />
                            </div>
                            <div className="p-6 text-center">
                                <h3 className="text-xl font-bold mb-1 group-hover:text-primary transition-colors">{member.name}</h3>
                                <p className="text-sm text-primary font-medium mb-3">{member.designation}</p>
                                <p className="text-sm text-muted-foreground line-clamp-2">{member.about}</p>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>

            {/* Team Member Detail Modal */}
            <Modal
                isOpen={!!selectedTeamMember}
                onClose={() => setSelectedTeamMember(null)}
                title={selectedTeamMember?.name}
            >
                {selectedTeamMember && (
                    <div className="space-y-6">
                        <div className="flex flex-col md:flex-row gap-6">
                            <div className="w-full md:w-48 h-48 rounded-xl overflow-hidden flex-shrink-0 bg-gradient-to-br from-primary/10 to-purple-600/10">
                                <img
                                    src={selectedTeamMember.photo}
                                    alt={selectedTeamMember.name}
                                    className="w-full h-full object-cover"
                                />
                            </div>
                            <div className="flex-1">
                                <div className="text-2xl font-bold mb-2">{selectedTeamMember.name}</div>
                                <div className="text-primary font-semibold mb-4">{selectedTeamMember.designation}</div>
                                <p className="text-muted-foreground leading-relaxed">{selectedTeamMember.about}</p>
                            </div>
                        </div>

                        <div className="border-t border-border pt-6">
                            <h3 className="font-semibold mb-4">Contact & Social</h3>
                            <div className="space-y-3">
                                <div className="flex items-center gap-3">
                                    <Mail className="w-5 h-5 text-primary" />
                                    <a href={`mailto:${selectedTeamMember.email}`} className="text-muted-foreground hover:text-primary transition-colors">
                                        {selectedTeamMember.email}
                                    </a>
                                </div>
                                <div className="flex items-center gap-4 pt-2">
                                    {selectedTeamMember.socialMedia.linkedin && (
                                        <a
                                            href={selectedTeamMember.socialMedia.linkedin}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="p-2 rounded-lg bg-primary/10 text-primary hover:bg-primary/20 transition-colors"
                                        >
                                            <Linkedin size={20} />
                                        </a>
                                    )}
                                    {selectedTeamMember.socialMedia.twitter && (
                                        <a
                                            href={selectedTeamMember.socialMedia.twitter}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="p-2 rounded-lg bg-primary/10 text-primary hover:bg-primary/20 transition-colors"
                                        >
                                            <Twitter size={20} />
                                        </a>
                                    )}
                                    {selectedTeamMember.socialMedia.github && (
                                        <a
                                            href={selectedTeamMember.socialMedia.github}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="p-2 rounded-lg bg-primary/10 text-primary hover:bg-primary/20 transition-colors"
                                        >
                                            <Github size={20} />
                                        </a>
                                    )}
                                    {selectedTeamMember.socialMedia.dribbble && (
                                        <a
                                            href={selectedTeamMember.socialMedia.dribbble}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="p-2 rounded-lg bg-primary/10 text-primary hover:bg-primary/20 transition-colors"
                                        >
                                            <Globe size={20} />
                                        </a>
                                    )}
                                </div>
                            </div>
                        </div>
                    </div>
                )}
            </Modal>

            {/* 6. Quick FAQ */}
            <div className="max-w-4xl mx-auto">
                <div className="text-center mb-12">
                    <h2 className="text-4xl font-bold mb-4">Before You Ask...</h2>
                    <p className="text-xl text-muted-foreground">Quick answers to common questions</p>
                </div>
                <Accordion items={CONTACT_FAQS} />
            </div>
        </div>
    );
};

export default Contact;
