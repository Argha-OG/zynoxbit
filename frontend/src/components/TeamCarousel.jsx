import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { EffectCoverflow, Pagination, Autoplay } from 'swiper/modules';
import { Linkedin, Twitter, Globe, Github } from 'lucide-react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';

const TEAM_MEMBERS = [
    {
        name: "Alex Morgan",
        role: "CEO & Founder",
        image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&q=80&w=400&h=400",
        social: { linkedin: "#", twitter: "#" }
    },
    {
        name: "Sarah Chen",
        role: "Lead Developer",
        image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=400&h=400",
        social: { linkedin: "#", github: "#" }
    },
    {
        name: "Michael Ross",
        role: "UI/UX Designer",
        image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80&w=400&h=400",
        social: { linkedin: "#", dribbble: "#" }
    },
    {
        name: "Jessica Stark",
        role: "Marketing Director",
        image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&q=80&w=400&h=400",
        social: { linkedin: "#", twitter: "#" }
    },
    {
        name: "David Kim",
        role: "Backend Architect",
        image: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&q=80&w=400&h=400",
        social: { linkedin: "#", github: "#" }
    }
];

const TeamCarousel = () => {
    return (
        <div className="w-full max-w-6xl mx-auto px-4 py-12">
            <div className="text-center mb-16">
                <h2 className="text-3xl md:text-5xl font-bold mb-4">Meet Our Experts</h2>
                <p className="text-muted-foreground text-lg">The minds behind the magic</p>
            </div>

            <Swiper
                effect={'coverflow'}
                grabCursor={true}
                centeredSlides={true}
                slidesPerView={'auto'}
                loop={true}
                initialSlide={2}
                coverflowEffect={{
                    rotate: 0,
                    stretch: 0,
                    depth: 100,
                    modifier: 2.5,
                    slideShadows: false,
                }}
                autoplay={{
                    delay: 3000,
                    disableOnInteraction: false,
                }}
                pagination={{ clickable: true }}
                modules={[EffectCoverflow, Pagination, Autoplay]}
                className="mySwiper w-full py-12"
            >
                {[...TEAM_MEMBERS, ...TEAM_MEMBERS].map((member, index) => (
                    <SwiperSlide key={index} className="!w-[320px] !h-[420px] rounded-2xl overflow-hidden group">
                        <div className="relative w-full h-full">
                            {/* Full Height Image */}
                            <img
                                src={member.image}
                                alt={member.name}
                                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                            />

                            {/* Gradient Overlay */}
                            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-60 group-hover:opacity-80 transition-opacity duration-300" />

                            {/* Floating Glass Info Card */}
                            <div className="absolute bottom-4 left-4 right-4 p-4 rounded-xl bg-white/10 backdrop-blur-md border border-white/20 transform transition-all duration-300 translate-y-2 group-hover:translate-y-0">
                                <div className="text-center">
                                    <h3 className="text-lg font-bold text-white mb-1">{member.name}</h3>
                                    <p className="text-primary text-xs font-semibold uppercase tracking-wider mb-3">{member.role}</p>

                                    {/* Social Icons */}
                                    <div className="flex justify-center gap-3 pt-3 border-t border-white/10">
                                        <button className="text-gray-300 hover:text-white hover:bg-primary/20 p-1.5 rounded-full transition-all">
                                            <Linkedin size={16} />
                                        </button>
                                        <button className="text-gray-300 hover:text-white hover:bg-primary/20 p-1.5 rounded-full transition-all">
                                            <Twitter size={16} />
                                        </button>
                                        <button className="text-gray-300 hover:text-white hover:bg-primary/20 p-1.5 rounded-full transition-all">
                                            <Globe size={16} />
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
    );
};

export default TeamCarousel;
