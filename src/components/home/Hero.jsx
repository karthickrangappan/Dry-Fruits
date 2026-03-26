import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination, EffectFade } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/effect-fade';

const Hero = () => {
    
    const banners = [
        {
            id: 1,
            title: "Premium Quality",
            highlight: "Dry Fruits",
            description: "Nature's finest treasures delivered to your doorstep. Experience the crunch and flavor of our handpicked selection.",
            image: "/tamanna-rumee-uL8_OggN10w-unsplash.jpg",
            buttonText: "Shop Collection"
        },
        {
            id: 2,
            title: "Organic & Healthy",
            highlight: "Energy Mix",
            description: "Boost your immunity with our specially curated organic nut mixes. Pure nutrition in every bite.",
            image: "/anshu-a-rzozY5YpzA0-unsplash.jpg",
            buttonText: "Explore Mixes"
        },
        {
            id: 3,
            title: "Festive Special",
            highlight: "Grand Boxes",
            description: "Perfect for gifting. Share the goodness of premium dry fruits with your loved ones this season.",
            image: "/rabbixel-almond-3408466_1920.jpg",
            buttonText: "Order Now"
        }
    ];

    return (
        <div className="relative h-[600px] md:h-[750px] w-full overflow-hidden">
            <Swiper
                modules={[Autoplay, EffectFade]}
                effect="fade"
                autoplay={{ delay: 5000, disableOnInteraction: false }}
                loop={true}
                className="h-full w-full"
            >
                {banners.map((slide) => (
                    <SwiperSlide key={slide.id}>
                        <div className="relative h-full w-full flex items-center pb-50">
                            <div 
                                className="absolute inset-0 bg-cover bg-center bg-no-repeat transition-transform duration-[8000ms] scale-110 group-hover:scale-100"
                                style={{ backgroundImage: `url(${slide.image})` }}
                            >
                                <div className="absolute inset-0 bg-stone-900/60" />
                            </div>

                            <div className="relative max-w-7xl mx-auto px-4 md:px-8 w-full z-10 text-center">
                                <div className="max-w-3xl mx-auto">
                                    <h4 className="text-amber-400 font-bold uppercase  tracking-[0.3em] mb-4 text-sm drop-shadow-md animate-fade-in-up">
                                        {slide.title}
                                    </h4>
                                    <h2 className="text-5xl md:text-7xl font-black text-white mb-6 leading-tight drop-shadow-xl">
                                        {slide.highlight.split(' ')[0]} <span className="text-amber-500">{slide.highlight.split(' ').slice(1).join(' ')}</span>
                                    </h2>
                                    <p className="text-lg md:text-xl text-stone-200 mb-10 leading-relaxed font-medium drop-shadow-md opacity-90 max-w-2xl mx-auto">
                                        {slide.description}
                                    </p>
                                    <div className="flex flex-wrap justify-center gap-5">
                                        <button className="px-8 py-4 bg-amber-600 text-white font-bold rounded-2xl shadow-2xl shadow-amber-600/30 hover:bg-amber-700 transform hover:-translate-y-1 transition-all duration-300">
                                            {slide.buttonText}
                                        </button>
                                        <button className="px-8 py-4 bg-white/10 backdrop-blur-md text-white border border-white/20 font-bold rounded-2xl hover:bg-white/20 transform hover:-translate-y-1 transition-all duration-300">
                                            Read More
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

export default Hero;
