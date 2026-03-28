import React from 'react';
import { Link } from 'react-router-dom';
import { HiOutlineArrowRight, HiOutlineShoppingBag, HiSparkles } from 'react-icons/hi';

const Hero = () => {
  return (
    <section className="relative min-h-[100dvh] md:min-h-screen w-full flex items-center justify-center overflow-hidden bg-stone-900 pt-20 md:pt-0">
      <div className="absolute inset-0 z-0">
        <img
          src="/hero-img.png"
          alt="Premium Nature"
          className="w-full h-full object-cover opacity-60 scale-105 transition-transform duration-[8000ms] hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-stone-900/70 via-transparent to-stone-900" />
      </div>

      <div className="absolute top-10 left-6 sm:top-20 sm:left-20 w-40 h-40 sm:w-64 sm:h-64 bg-amber-600/10 rounded-full blur-3xl animate-pulse" />
      <div className="absolute bottom-10 right-6 sm:bottom-20 sm:right-20 w-52 h-52 sm:w-80 sm:h-80 bg-stone-100/10 rounded-full blur-3xl animate-pulse delay-1000" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 md:px-10 text-center">
        <div className="flex items-center justify-center gap-2 mb-4 sm:mb-8 animate-in fade-in slide-in-from-top-4 duration-700">
          <HiSparkles className="text-amber-500 text-lg sm:text-xl" />
          <span className="text-amber-400 font-black text-[9px] sm:text-[10px] uppercase tracking-[0.3em] sm:tracking-[0.4em]">
            Nature's Exclusive Selection
          </span>
          <HiSparkles className="text-amber-500 text-lg sm:text-xl" />
        </div>

        <h1 className="text-2xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-black text-white mb-4 sm:mb-10 leading-[0.9] tracking-tight drop-shadow-2xl">
          NATURAL <br />
          <span className="text-amber-600 italic font-serif">TREASURES</span>
        </h1>

        <p className="text-stone-300 text-[12px] sm:text-lg md:text-xl max-w-xl md:max-w-2xl mx-auto mb-6 sm:mb-14 leading-relaxed opacity-90">
          Elevating your wellness journey with ethically sourced, sun-dried miracles from Earth's most pristine orchards.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6">
          <Link
            to="/shop"
            className="group relative px-8 sm:px-10 md:px-12 py-3 sm:py-4 bg-amber-600 text-white font-bold rounded-2xl sm:rounded-3xl overflow-hidden shadow-xl hover:shadow-amber-600/30 active:scale-95 transition-all"
          >
            <div className="absolute inset-0 bg-white opacity-0 group-hover:opacity-10 transition-opacity" />
            <span className="relative z-10 uppercase tracking-wider text-xs sm:text-sm flex items-center gap-2">
              Explore Collection <HiOutlineArrowRight />
            </span>
          </Link>

          <Link
            to="/services"
            className="group px-6 sm:px-8 py-3 sm:py-4 border border-white/30 hover:border-white text-white font-bold rounded-2xl sm:rounded-3xl transition-all active:scale-95 flex items-center gap-2"
          >
            <HiOutlineShoppingBag className="text-lg opacity-70 group-hover:opacity-100 transition" />
            <span className="uppercase tracking-wider text-xs sm:text-sm">Our Services</span>
          </Link>
        </div>

        <div className="mt-8 sm:mt-20 grid grid-cols-2 sm:grid-cols-4 gap-6 sm:gap-10 opacity-50 hover:opacity-100 transition duration-500">
          {[
            { val: '100%', label: 'ORGANIC' },
            { val: '12K+', label: 'COMMUNITY' },
            { val: '50+', label: 'VARIETIES' },
            { val: 'FREE', label: 'SHIPPING' }
          ].map((stat, idx) => (
            <div key={idx} className="text-center">
              <p className="text-base sm:text-xl md:text-2xl font-black text-white mb-1 hover:text-amber-500 transition-colors">
                {stat.val}
              </p>
              <p className="text-[7px] sm:text-[10px] text-stone-400 uppercase tracking-widest">
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </div>

      
    </section>
  );
};

export default Hero;
