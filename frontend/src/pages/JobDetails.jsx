import React, { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { JOBS } from '../data/jobs';
import { MapPin, Clock, Banknote, Briefcase, ArrowLeft, CheckCircle, X } from 'lucide-react';
import SEO from '../components/SEO';

const JobDetails = () => {
    const { id } = useParams();
    const job = JOBS.find(j => j.id === id);
    const [showForm, setShowForm] = useState(false);

    if (!job) {
        return (
            <div className="min-h-screen flex items-center justify-center">
                <SEO title="Job Not Found" />
                <div className="text-center">
                    <h2 className="text-2xl font-bold mb-4">Job Not Found</h2>
                    <Link to="/jobs" className="text-primary hover:underline">Back to Jobs</Link>
                </div>
            </div>
        );
    }

    return (
        <div className="py-24 px-4 max-w-5xl mx-auto min-h-screen">
            <SEO
                title={`${job.title} - Careers`}
                description={`We are hiring a ${job.title}. ${job.description.substring(0, 150)}...`}
            />
            <Link to="/jobs" className="inline-flex items-center text-muted-foreground hover:text-primary mb-8 transition-colors">
                <ArrowLeft size={20} className="mr-2" /> Back to Jobs
            </Link>

            <div className="bg-card/50 border border-border rounded-2xl p-8 md:p-12">
                <div className="mb-8 border-b border-border pb-8">
                    <h1 className="text-4xl font-bold mb-4">{job.title}</h1>
                    <div className="flex flex-wrap gap-6 text-muted-foreground">
                        <div className="flex items-center gap-2">
                            <Briefcase size={18} /> {job.type}
                        </div>
                        <div className="flex items-center gap-2">
                            <MapPin size={18} /> {job.location}
                        </div>
                        <div className="flex items-center gap-2">
                            <Banknote size={18} /> {job.salary}
                        </div>
                        <div className="flex items-center gap-2">
                            <Clock size={18} /> Posted: {job.postedDate}
                        </div>
                    </div>
                </div>

                <div className="space-y-8">
                    <section>
                        <h2 className="text-2xl font-bold mb-4">Description</h2>
                        <p className="text-muted-foreground leading-relaxed">{job.description}</p>
                    </section>

                    <section>
                        <h2 className="text-2xl font-bold mb-4">Responsibilities</h2>
                        <ul className="space-y-2">
                            {job.responsibilities.map((res, i) => (
                                <li key={i} className="flex items-start gap-3 text-muted-foreground">
                                    <CheckCircle size={20} className="text-primary mt-1 flex-shrink-0" />
                                    <span>{res}</span>
                                </li>
                            ))}
                        </ul>
                    </section>

                    <section>
                        <h2 className="text-2xl font-bold mb-4">Requirements</h2>
                        <ul className="space-y-2">
                            {job.requirements.map((req, i) => (
                                <li key={i} className="flex items-start gap-3 text-muted-foreground">
                                    <CheckCircle size={20} className="text-primary mt-1 flex-shrink-0" />
                                    <span>{req}</span>
                                </li>
                            ))}
                        </ul>
                    </section>

                    <div className="pt-8">
                        <button
                            onClick={() => setShowForm(true)}
                            className="w-full md:w-auto px-8 py-4 rounded-xl bg-primary text-primary-foreground font-bold text-lg hover:opacity-90 transition-all shadow-lg shadow-primary/20"
                        >
                            Apply Now
                        </button>
                    </div>
                </div>
            </div>

            {/* Application Modal */}
            {showForm && (
                <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm">
                    <div className="bg-background rounded-2xl border border-border p-8 w-full max-w-md relative animate-in fade-in zoom-in duration-200">
                        <button
                            onClick={() => setShowForm(false)}
                            className="absolute top-4 right-4 text-muted-foreground hover:text-foreground"
                        >
                            <X size={24} />
                        </button>
                        <h2 className="text-2xl font-bold mb-1">Apply for {job.title}</h2>
                        <p className="text-sm text-muted-foreground mb-6">Fill out the form below to submit your application.</p>

                        <form className="space-y-4">
                            <div>
                                <label className="block text-sm font-medium mb-1">Full Name</label>
                                <input type="text" className="w-full p-2 rounded-lg bg-secondary border-transparent focus:border-primary focus:ring-0" placeholder="John Doe" required />
                            </div>
                            <div>
                                <label className="block text-sm font-medium mb-1">Email</label>
                                <input type="email" className="w-full p-2 rounded-lg bg-secondary border-transparent focus:border-primary focus:ring-0" placeholder="john@example.com" required />
                            </div>
                            <div>
                                <label className="block text-sm font-medium mb-1">Portfolio/Resume Link</label>
                                <input type="url" className="w-full p-2 rounded-lg bg-secondary border-transparent focus:border-primary focus:ring-0" placeholder="https://" required />
                            </div>
                            <div>
                                <label className="block text-sm font-medium mb-1">Cover Letter</label>
                                <textarea className="w-full p-2 rounded-lg bg-secondary border-transparent focus:border-primary focus:ring-0 h-32" placeholder="Tell us why you're a good fit..." required></textarea>
                            </div>
                            <button type="submit" className="w-full py-3 rounded-lg bg-primary text-primary-foreground font-bold hover:opacity-90">
                                Submit Application
                            </button>
                        </form>
                    </div>
                </div>
            )}
        </div>
    );
};

export default JobDetails;
