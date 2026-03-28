import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, EffectFade } from 'swiper/modules';
import 'swiper/css';


const bannerProducts = [
    {
        id: 4,
        image: "https://kavisdryfruits.com/uploads/f_691ee5c2630855.28901325.png",
        name: "Anjeer/Figs"
    },
    {
        id: 1,
        image: "https://kavisdryfruits.com/uploads/f_691ec108c5aaf3.47190729.png",
        name: "Premium Almonds"
    },
    {
        id: 9,
        image: "https://kavisdryfruits.com/uploads/f_691ee971baa4a1.93488146.png",
        name: "Premium Pistachios"
    }
];

const Heroo = () => {
    const navigate = useNavigate();

    return (
        <section className="bg-white min-h-[100dvh] flex items-center">
            <div className="max-w-7xl mx-auto w-full">
                <div className="relative rounded-[3rem] overflow-hidden group ">
                    <div className="relative z-20 flex flex-col md:flex-row items-center justify-between p-3 md:p-16 gap-6 md:gap-12 bg-white pt-1 md:pt-16">
                        <div className="max-w-2xl text-center md:text-left flex-1">
                            <h4 className="text-amber-600 font-black uppercase tracking-[0.4em] text-[10px] sm:text-xs mb-3 sm:mb-6 inline-block px-3 py-2 border border-amber-600/20 rounded-full bg-amber-50">
                                Fresh Arrival
                            </h4>
                            <h2 className="text-2xl md:text-7xl font-black text-stone-900 mb-4 md:mb-8 leading-tight tracking-tighter">
                                Organic <br />
                                <span className="text-amber-600 italic font-serif">Selection</span> <br />
                                <span className="text-stone-900">Boost Your Health</span>
                            </h2>
                            <p className="text-stone-500 font-black text-xs md:text-lg mb-6 md:mb-10 leading-relaxed max-w-xl italic">
                                "Experience the perfect blend of taste and health with our premium treasures. Handpicked, roasted, and packed with love."
                            </p>
                            <div className="flex flex-wrap justify-center md:justify-start gap-5">
                                <button
                                    onClick={() => navigate('/shop')}
                                    className="px-6 md:px-10 py-2.5 md:py-4 bg-amber-600 text-white font-black rounded-xl md:rounded-2xl shadow-xl shadow-amber-600/30 hover:bg-amber-700 hover:scale-105 active:scale-95 transition-all duration-300 transform text-[10px] md:text-base uppercase tracking-widest"
                                >
                                    View All Collection
                                </button>
                            </div>
                        </div>

                        <div className="relative w-full max-w-[200px] md:max-w-lg flex-1">
                            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[110%] h-[110%] bg-amber-50 rounded-full blur-3xl opacity-50 z-0 animate-pulse" />

                            <Swiper
                                modules={[Autoplay]}
                                effect={'fade'}
                                loop={true}
                                autoplay={{
                                    delay: 4000,
                                    disableOnInteraction: false,
                                }}
                                className="z-10 w-full"
                            >
                                {bannerProducts.map((product) => (
                                    <SwiperSlide key={product.id}>
                                        <div className="flex items-center justify-center p-2">
                                            <img
                                                src={product.image}
                                                alt={product.name}
                                                className="w-full h-auto object-contain transform group-hover:scale-105 transition-all duration-[2000ms] drop-shadow-[0_45px_45px_rgba(0,0,0,0.15)]"
                                            />
                                        </div>
                                    </SwiperSlide>
                                ))}
                            </Swiper>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Heroo;


