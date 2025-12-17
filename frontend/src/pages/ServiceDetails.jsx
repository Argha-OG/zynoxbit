import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { SERVICE_PACKAGES } from '../data/services';
import { Check, ArrowLeft } from 'lucide-react';
import SEO from '../components/SEO';

const ServiceDetails = () => {
    const { id } = useParams();
    const service = SERVICE_PACKAGES.find(pkg => pkg.id === id);

    if (!service) {
        return (
            <div className="min-h-screen flex items-center justify-center">
                <SEO title="Service Not Found" />
                <div className="text-center">
                    <h2 className="text-2xl font-bold mb-4">Service Not Found</h2>
                    <Link to="/services" className="text-primary hover:underline">
                        Back to Services
                    </Link>
                </div>
            </div>
        );
    }

    return (
        <div className="pt-24 pb-12 px-4 max-w-7xl mx-auto">
            <SEO
                title={`${service.tierName} Service`}
                description={service.details}
            />
            <Link to="/services" className="inline-flex items-center text-muted-foreground hover:text-primary mb-8 transition-colors">
                <ArrowLeft size={20} className="mr-2" /> Back to Services
            </Link>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                {/* Product Image */}
                <div className="rounded-2xl overflow-hidden shadow-2xl border border-border h-fit">
                    <img
                        src={service.image}
                        alt={service.tierName}
                        className="w-full h-auto object-cover hover:scale-105 transition-transform duration-700"
                    />
                </div>

                <div>
                    <div className="mb-2 text-primary font-semibold tracking-wide uppercase text-sm">Product Details</div>
                    <h1 className="text-4xl md:text-5xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-primary to-purple-600">
                        {service.tierName}
                    </h1>
                    <div className="text-3xl font-bold mb-6">
                        {typeof service.priceMonthly === 'number'
                            ? `৳${service.priceMonthly.toLocaleString()}`
                            : service.priceMonthly}
                    </div>
                    <p className="text-xl text-muted-foreground mb-8">
                        {service.details || "Experience top-tier service with our specialized package designed to meet your business needs."}
                    </p>

                    <div className="bg-card/50 border border-border rounded-xl p-8 mb-8">
                        <h3 className="text-xl font-semibold mb-4">What's Included:</h3>
                        <ul className="space-y-4">
                            {service.features.map((feature, index) => (
                                <li key={index} className="flex items-center gap-3">
                                    <div className="bg-primary/10 p-1 rounded-full">
                                        <Check className="text-primary h-5 w-5" />
                                    </div>
                                    <span className="text-foreground/90">{feature}</span>
                                </li>
                            ))}
                        </ul>
                    </div>

                    <div className="flex flex-col gap-4">
                        <Link
                            to="/contact"
                            state={{ service: service.tierName, type: "purchase" }}
                            className="block w-full py-4 rounded-xl bg-primary text-primary-foreground font-bold text-center text-lg hover:opacity-90 transition-all shadow-lg shadow-primary/20"
                        >
                            Purchase Now
                        </Link>
                        <p className="text-center text-sm text-muted-foreground">
                            Need a custom quote? <Link to="/contact" className="text-primary hover:underline">Contact us</Link>
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ServiceDetails;
