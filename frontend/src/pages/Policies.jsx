import React from 'react';
import { useParams } from 'react-router-dom';
import { motion } from 'framer-motion';
import SEO from '../components/SEO';

const Policies = () => {
    const { type } = useParams();

    const renderContent = () => {
        switch (type) {
            case 'terms':
                return (
                    <>
                        <h1 className="text-4xl font-bold mb-8">Terms and Conditions</h1>
                        <div className="prose prose-invert max-w-none text-muted-foreground">
                            <p>Last updated: December 17, 2024</p>
                            <h2>1. Introduction</h2>
                            <p>Welcome to ZynoxBit. By accessing our website and using our services, you agree to these Terms and Conditions.</p>
                            <h2>2. Services</h2>
                            <p>We provide web development, design, and SEO services. All services are subject to the specific terms outlined in your service agreement.</p>
                            <h2>3. Payment</h2>
                            <p>Payments vary by project. Typically, a deposit is required to commence work, with the remainder due upon completion.</p>
                            <h2>4. Intellectual Property</h2>
                            <p>Upon full payment, intellectual property rights for the delivered project are transferred to the client, excluding third-party assets.</p>
                        </div>
                    </>
                );
            case 'privacy':
                return (
                    <>
                        <h1 className="text-4xl font-bold mb-8">Privacy Policy</h1>
                        <div className="prose prose-invert max-w-none text-muted-foreground">
                            <p>Last updated: December 17, 2024</p>
                            <h2>1. Information We Collect</h2>
                            <p>We collect information you provide directly to us, such as when you fill out a contact form or apply for a job.</p>
                            <h2>2. How We Use Information</h2>
                            <p>We use your information to provide services, communicate with you, and improve our offerings.</p>
                            <h2>3. Data Security</h2>
                            <p>We implement appropriate security measures to protect your personal information.</p>
                        </div>
                    </>
                );
            case 'refund':
                return (
                    <>
                        <h1 className="text-4xl font-bold mb-8">Refund Policy</h1>
                        <div className="prose prose-invert max-w-none text-muted-foreground">
                            <p>Last updated: December 17, 2024</p>
                            <h2>1. Cancellation</h2>
                            <p>You may cancel a project within 24 hours of payment for a full refund if work has not commenced.</p>
                            <h2>2. Satisfaction Guarantee</h2>
                            <p>We strive for client satisfaction. If you are unhappy with the service, please contact us to resolve the issue.</p>
                            <h2>3. Non-Refundable Items</h2>
                            <p>Domain registration fees and third-party license fees are non-refundable.</p>
                        </div>
                    </>
                );
            default:
                return <h1>Policy Not Found</h1>;
        }
    };

    return (
        <div className="py-24 px-4 min-h-screen">
            <SEO title={type.charAt(0).toUpperCase() + type.slice(1) + " Policy"} />
            <div className="max-w-4xl mx-auto bg-card/50 border border-border rounded-2xl p-8 md:p-12">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                >
                    {renderContent()}
                </motion.div>
            </div>
        </div>
    );
};

export default Policies;
