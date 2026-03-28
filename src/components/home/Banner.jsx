import React from 'react';
import { useNavigate } from 'react-router-dom';
import { HiOutlineArrowRight, HiOutlineSparkles } from 'react-icons/hi';

const Banner = () => {
    const navigate = useNavigate();

    return (
        <section className="py-12 px-4 md:px-8 bg-white overflow-hidden">
            <div className="max-w-7xl mx-auto">
                <div className="relative rounded-[3rem] px-6 md:px-16 py-16 md:py-20 overflow-hidden group">
                    
                    <div className="absolute inset-0 z-0">
                        <img 
                            src="/rabbixel-almond-3408466_1920.jpg"
                            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-[2000ms] ease-out"
                            alt="Background"
                        />
                        <div className="absolute inset-0 bg-gradient-to-r from-black/40 via-black/20 to-transparent" />
                    </div>

                    <div className="absolute top-1/2 right-0 -translate-y-1/2 w-72 h-72 bg-amber-600/10 rounded-full blur-3xl" />

                    <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-10">
                        
                        <div className="max-w-xl text-center md:text-left backdrop-blur-[2px] bg-black/10 p-6 rounded-2xl">
                            <div className="flex items-center justify-center md:justify-start gap-3 mb-6">
                                <span className="p-2 bg-amber-600/20 text-amber-500 rounded-lg">
                                    <HiOutlineSparkles className="text-xl" />
                                </span>
                                <span className="text-amber-400 font-bold uppercase tracking-[0.3em] text-[10px]">
                                    Exclusive Membership Benefit
                                </span>
                            </div>

                            <h2 className="text-2xl md:text-5xl font-black text-white mb-6 leading-tight [text-shadow:0_4px_20px_rgba(0,0,0,0.6)]">
                                FREE <span className="text-amber-400 italic font-serif">NATIONWIDE</span><br />
                                DELIVERY
                            </h2>
                            
                            <p className="text-white/95 text-sm md:text-lg mb-8 max-w-md [text-shadow:0_2px_10px_rgba(0,0,0,0.6)]">
                                Join our community and get premium wellness products delivered to your doorstep — no shipping fees.
                            </p>

                            <button 
                                onClick={() => navigate('/shop')}
                                className="group px-8 py-3 bg-amber-600 text-white font-bold rounded-xl hover:bg-white hover:text-stone-900 transition-all active:scale-95 flex items-center gap-2 shadow-lg"
                            >
                                <span className="uppercase text-xs tracking-wider">Unlock Now</span>
                                <HiOutlineArrowRight className="text-lg group-hover:translate-x-1 transition-transform" />
                            </button>
                        </div>

                        <div className="relative w-full max-w-xs hidden lg:block">
                            <div className="p-6 bg-white/10 backdrop-blur-xl rounded-2xl border border-white/10 transform rotate-2 hover:rotate-0 transition duration-500">
                                <div className="space-y-4">
                                    <div className="h-3 w-2/3 bg-amber-500/40 rounded-full" />
                                    <div className="h-3 w-full bg-white/20 rounded-full" />
                                    <div className="h-3 w-1/2 bg-white/20 rounded-full" />
                                    <div className="pt-4 border-t border-white/10 mt-4 flex justify-between items-center">
                                        <div className="w-10 h-10 rounded-full bg-amber-500" />
                                        <div className="w-24 h-4 bg-white/30 rounded-md" />
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </section>
    );
};

export default Banner;