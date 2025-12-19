import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination, EffectCoverflow } from 'swiper/modules';
import { Quote, Star } from 'lucide-react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/effect-coverflow';

const TestimonialCarousel = ({ testimonials = [] }) => {
    if (!testimonials || testimonials.length === 0) return null;

    return (
        <div className="py-10">
            <Swiper
                effect={'coverflow'}
                grabCursor={true}
                centeredSlides={true}
                slidesPerView={'auto'}
                coverflowEffect={{
                    rotate: 50,
                    stretch: 0,
                    depth: 100,
                    modifier: 1,
                    slideShadows: false,
                }}
                pagination={{ clickable: true }}
                autoplay={{
                    delay: 5000,
                    disableOnInteraction: false,
                }}
                modules={[EffectCoverflow, Pagination, Autoplay]}
                className="mySwiper w-full py-12"
                breakpoints={{
                    640: {
                        slidesPerView: 1,
                    },
                    768: {
                        slidesPerView: 2,
                    },
                    1024: {
                        slidesPerView: 3,
                    },
                }}
            >
                {testimonials.map((testimonial) => (
                    <SwiperSlide key={testimonial.id} className="max-w-md">
                        <div className="glass-card p-8 rounded-2xl border border-border h-full flex flex-col relative mx-4">
                            <Quote className="text-primary mb-6 w-10 h-10 opacity-50" />
                            <p className="text-lg text-muted-foreground mb-6 flex-grow italic">
                                "{testimonial.quote}"
                            </p>

                            <div className="flex items-center gap-4 mt-auto">
                                <div className="w-12 h-12 rounded-full overflow-hidden bg-primary/10">
                                    <img
                                        src={testimonial.image}
                                        alt={testimonial.author}
                                        className="w-full h-full object-cover"
                                        onError={(e) => {
                                            e.target.src = `https://ui-avatars.com/api/?name=${testimonial.author}&background=random`;
                                        }}
                                    />
                                </div>
                                <div>
                                    <h4 className="font-bold text-foreground">{testimonial.author}</h4>
                                    <p className="text-sm text-primary">{testimonial.role}, {testimonial.company}</p>
                                </div>
                            </div>

                            <div className="flex gap-1 mt-4">
                                {[...Array(testimonial.rating || 5)].map((_, i) => (
                                    <Star key={i} size={14} fill="currentColor" className="text-yellow-500" />
                                ))}
                            </div>
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
    );
};

export default TestimonialCarousel;
