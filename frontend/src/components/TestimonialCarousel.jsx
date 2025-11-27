import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight, Star, Quote } from 'lucide-react';

const TestimonialCarousel = ({ testimonials }) => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [direction, setDirection] = useState(0);

    const slideVariants = {
        enter: (direction) => ({
            x: direction > 0 ? 1000 : -1000,
            opacity: 0
        }),
        center: {
            zIndex: 1,
            x: 0,
            opacity: 1
        },
        exit: (direction) => ({
            zIndex: 0,
            x: direction < 0 ? 1000 : -1000,
            opacity: 0
        })
    };

    const swipeConfidenceThreshold = 10000;
    const swipePower = (offset, velocity) => {
        return Math.abs(offset) * velocity;
    };

    const paginate = (newDirection) => {
        setDirection(newDirection);
        setCurrentIndex((prevIndex) => {
            let newIndex = prevIndex + newDirection;
            if (newIndex < 0) newIndex = testimonials.length - 1;
            if (newIndex >= testimonials.length) newIndex = 0;
            return newIndex;
        });
    };

    useEffect(() => {
        const timer = setInterval(() => {
            paginate(1);
        }, 5000);
        return () => clearInterval(timer);
    }, [currentIndex]);

    return (
        <div className="relative max-w-4xl mx-auto">
            <div className="overflow-hidden">
                <AnimatePresence initial={false} custom={direction}>
                    <motion.div
                        key={currentIndex}
                        custom={direction}
                        variants={slideVariants}
                        initial="enter"
                        animate="center"
                        exit="exit"
                        transition={{
                            x: { type: "spring", stiffness: 300, damping: 30 },
                            opacity: { duration: 0.2 }
                        }}
                        drag="x"
                        dragConstraints={{ left: 0, right: 0 }}
                        dragElastic={1}
                        onDragEnd={(e, { offset, velocity }) => {
                            const swipe = swipePower(offset.x, velocity.x);
                            if (swipe < -swipeConfidenceThreshold) {
                                paginate(1);
                            } else if (swipe > swipeConfidenceThreshold) {
                                paginate(-1);
                            }
                        }}
                        className="glass-card p-8 md:p-12 rounded-2xl border border-border"
                    >
                        <Quote className="text-primary mb-6" size={48} />
                        <p className="text-xl md:text-2xl text-foreground mb-6 leading-relaxed">
                            "{testimonials[currentIndex].quote}"
                        </p>
                        <div className="flex items-center gap-4">
                            <div className="flex-1">
                                <p className="font-bold text-foreground">{testimonials[currentIndex].author}</p>
                                <p className="text-sm text-muted-foreground">
                                    {testimonials[currentIndex].role} at {testimonials[currentIndex].company}
                                </p>
                            </div>
                            <div className="flex gap-1">
                                {[...Array(testimonials[currentIndex].rating)].map((_, i) => (
                                    <Star key={i} size={16} fill="currentColor" className="text-primary" />
                                ))}
                            </div>
                        </div>
                    </motion.div>
                </AnimatePresence>
            </div>

            {/* Navigation Buttons */}
            <div className="flex items-center justify-center gap-4 mt-8">
                <button
                    onClick={() => paginate(-1)}
                    className="p-2 rounded-full bg-primary/10 hover:bg-primary/20 transition-colors"
                    aria-label="Previous testimonial"
                >
                    <ChevronLeft className="text-primary" size={24} />
                </button>
                <div className="flex gap-2">
                    {testimonials.map((_, index) => (
                        <button
                            key={index}
                            onClick={() => {
                                setDirection(index > currentIndex ? 1 : -1);
                                setCurrentIndex(index);
                            }}
                            className={`h-2 rounded-full transition-all ${index === currentIndex ? 'w-8 bg-primary' : 'w-2 bg-muted'
                                }`}
                            aria-label={`Go to testimonial ${index + 1}`}
                        />
                    ))}
                </div>
                <button
                    onClick={() => paginate(1)}
                    className="p-2 rounded-full bg-primary/10 hover:bg-primary/20 transition-colors"
                    aria-label="Next testimonial"
                >
                    <ChevronRight className="text-primary" size={24} />
                </button>
            </div>
        </div>
    );
};

export default TestimonialCarousel;
