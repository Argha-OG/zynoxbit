import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { EffectCoverflow, Pagination, Autoplay } from 'swiper/modules';
import { Linkedin, Twitter, Github, Mail } from 'lucide-react';
import { TEAM_MEMBERS } from '../data/team';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';

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
                                src={member.photo}
                                alt={member.name}
                                className="w-full h-full object-contain transition-transform duration-700 group-hover:scale-110"
                            />

                            {/* Gradient Overlay */}
                            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-60 group-hover:opacity-80 transition-opacity duration-300" />

                            {/* Floating Glass Info Card */}
                            <div className="absolute bottom-4 left-4 right-4 p-4 rounded-xl bg-white/10 backdrop-blur-md border border-white/20 transform transition-all duration-300 translate-y-2 group-hover:translate-y-0">
                                <div className="text-center">
                                    <h3 className="text-lg font-bold text-white mb-1">{member.name}</h3>
                                    <p className="text-primary text-xs font-semibold uppercase tracking-wider mb-3">{member.designation}</p>

                                    {/* Social Icons */}
                                    <div className="flex justify-center gap-3 pt-3 border-t border-white/10">
                                        {member.socialMedia?.linkedin && (
                                            <a href={member.socialMedia.linkedin} target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-white hover:bg-primary/20 p-1.5 rounded-full transition-all">
                                                <Linkedin size={16} />
                                            </a>
                                        )}
                                        {member.socialMedia?.twitter && (
                                            <a href={member.socialMedia.twitter} target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-white hover:bg-primary/20 p-1.5 rounded-full transition-all">
                                                <Twitter size={16} />
                                            </a>
                                        )}
                                        {member.socialMedia?.github && (
                                            <a href={member.socialMedia.github} target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-white hover:bg-primary/20 p-1.5 rounded-full transition-all">
                                                <Github size={16} />
                                            </a>
                                        )}
                                        {member.email && (
                                            <a href={`mailto:${member.email}`} className="text-gray-300 hover:text-white hover:bg-primary/20 p-1.5 rounded-full transition-all">
                                                <Mail size={16} />
                                            </a>
                                        )}
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
