import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';
import { HiStar } from 'react-icons/hi';
import 'swiper/css';

const testimonials = [
    {
        id: 1,
        name: "James Anderson",
        role: "Nutritionist",
        comment: "The quality of almonds and walnuts from DryFruits is unparalleled. I always recommend my clients to  their nuts from here for maximum  and  value.",
        rating: 5,
        image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80&w=200"
    },
    {
        id: 2,
        name: "Sarah Jenkins",
        role: "Home Chef",
        comment: "These Turkish apricots are a game-changer for my baking. They are so succulent and flavorful. The delivery  fast, and the packaging is beautiful!",
        rating: 5,
        image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=200"
    },
    {
        id: 3,
        name: "Michael Chen",
        role: "Fitness Enthusiast",
        comment: "I've tried many brands, but the pumpkin and flax seeds here are the best. Perfectly cleaned and packed. Great source of clean for my workouts.",
        rating: 5,
        image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80&w=200"
    },
    {
        id: 4,
        name: "Elena Rodriguez",
        role: "Gourmet Connoisseur",
        comment: "The Medjool dates are like literal candy. Soft, sweet, and pure luxury. You can really tell they care about the sourcing of every single product.",
        rating: 5,
        image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&q=80&w=200"
    },
    {
        id: 5,
        name: "David Wilson",
        role: "Daily Customer",
        comment: "Fast shipping, premium quality, and excellent customer service. What more could you ask for? My pantry is never without their Classic Almonds now.",
        rating: 5,
        image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=200"
    }
];

const Testimonials = () => {
    return (
        <section className="py-24 bg-white relative overflow-hidden">
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-full pointer-events-none opacity-5">
                <div className="absolute top-10 left-10 w-64 h-64 bg-amber-600 rounded-full blur-3xl" />
                <div className="absolute bottom-10 right-10 w-64 h-64 bg-stone-900 rounded-full blur-3xl" />
            </div>

            <div className="max-w-7xl mx-auto px-4 md:px-8 relative z-10">
                <div className="text-center mb-16">
                    <span className="text-amber-600 text-xs font-black uppercase tracking-[0.3em] bg-amber-50 px-4 py-2 rounded-full mb-6 inline-block">
                        Community Voice
                    </span>
                    <h2 className="text-4xl md:text-5xl font-black text-stone-900 mb-6 tracking-tighter">
                        What Our Customers <span className="text-amber-600">Say</span>
                    </h2>
                    <p className="text-stone-500 font-medium max-w-2xl mx-auto leading-relaxed">
                        Join thousands of happy customers who have discovered the difference of truly premium, handpicked dry fruits.
                    </p>
                </div>

                <div className="cursor-grab active:cursor-grabbing">
                    <Swiper
                        modules={[Autoplay]}
                        spaceBetween={30}
                        slidesPerView={1}
                        loop={true}
                        autoplay={{
                            delay: 4000,
                            disableOnInteraction: false,
                        }}
                        breakpoints={{
                            640: { slidesPerView: 2 },
                            1024: { slidesPerView: 3 },
                            1280: { slidesPerView: 3, spaceBetween: 40 },
                        }}
                        className="pb-12"
                    >
                        {testimonials.map((item) => (
                            <SwiperSlide key={item.id} className="h-full">
                                <div className="shadow-xl rounded-2xl flex flex-col justify-between items-center p-10 bg-purple-100/30 hover:bg-purple-100/95 transition-all duration-500 h-full">
                                    <div className="flex items-center gap-1 mb-6">
                                        {[...Array(item.rating)].map((_, i) => (
                                            <HiStar key={i} className="w-5 h-5 text-amber-500" />
                                        ))}
                                    </div>

                                    <blockquote className="text-stone-700 font-medium leading-relaxed mb-8 relative flex-grow">
                                        <p className="relative z-10 italic">
                                            {item.comment}
                                        </p>
                                    </blockquote>

                                    <div className="flex items-center gap-4 pt-6 border-t border-stone-200/60 mt-auto">
                                        <div className="relative">
                                            <img
                                                src={item.image}
                                                alt={item.name}
                                                className="w-14 h-14 rounded-2xl object-cover group-hover:scale-110 transition-all duration-700 ring-2 ring-white shadow-md shadow-stone-200"
                                            />
                                        </div>
                                        <div>
                                            <h4 className="font-black text-stone-900 leading-tight">{item.name}</h4>
                                            <p className="text-[10px] font-black uppercase tracking-widest text-amber-600 mt-1">{item.role}</p>
                                        </div>
                                    </div>
                                </div>
                            </SwiperSlide>
                        ))}
                    </Swiper>
                </div>
            </div>
        </section>
    );
};

export default Testimonials;
