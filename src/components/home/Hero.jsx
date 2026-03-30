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
        <div className="flex items-center justify-center gap-2 md:gap-3 mb-4 sm:mb-8 md:mb-10 animate-in fade-in slide-in-from-top-4 duration-700">
          <HiSparkles className="text-amber-500 text-lg sm:text-xl md:text-2xl" />
          <span className="text-amber-400 font-black text-[9px] sm:text-[10px] md:text-xs uppercase tracking-[0.3em] sm:tracking-[0.4em]">
            Nature's Exclusive Selection
          </span>
          <HiSparkles className="text-amber-500 text-lg sm:text-xl md:text-2xl" />
        </div>

        <h1 className="text-4xl sm:text-5xl md:text-7xl lg:text-8xl xl:text-9xl font-black text-white mb-6 sm:mb-10 md:mb-12 leading-tight md:leading-[0.9] tracking-tight drop-shadow-2xl">
          NATURAL <br />
          <span className="text-amber-600 italic font-serif">TREASURES</span>
        </h1>

        <p className="text-stone-300 text-sm sm:text-base md:text-xl lg:text-2xl max-w-[280px] sm:max-w-xl md:max-w-3xl lg:max-w-4xl mx-auto mb-8 sm:mb-12 md:mb-16 leading-relaxed opacity-90">
          Elevating your wellness journey with ethically sourced, sun-dried miracles from Earth's most pristine orchards.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6 md:gap-8 w-full max-w-sm sm:max-w-none mx-auto">
          <Link
            to="/shop"
            className="w-full sm:w-auto group relative px-8 sm:px-10 md:px-14 py-3.5 sm:py-4 md:py-5 bg-amber-600 text-white font-bold rounded-2xl sm:rounded-3xl overflow-hidden shadow-xl hover:shadow-amber-600/30 active:scale-95 transition-all flex justify-center"
          >
            <div className="absolute inset-0 bg-white opacity-0 group-hover:opacity-10 transition-opacity" />
            <span className="relative z-10 uppercase tracking-wider text-xs sm:text-sm md:text-base flex items-center gap-2">
              Explore Collection <HiOutlineArrowRight className="md:text-lg" />
            </span>
          </Link>

          <Link
            to="/services"
            className="w-full sm:w-auto group px-6 sm:px-8 md:px-10 py-3.5 sm:py-4 md:py-5 border border-white/30 hover:border-white text-white font-bold rounded-2xl sm:rounded-3xl transition-all active:scale-95 flex items-center justify-center gap-2"
          >
            <HiOutlineShoppingBag className="text-lg md:text-xl opacity-70 group-hover:opacity-100 transition" />
            <span className="uppercase tracking-wider text-xs sm:text-sm md:text-base">Our Services</span>
          </Link>
        </div>

        <div className="mt-12 sm:mt-16 md:mt-20 lg:mt-28 grid grid-cols-2 sm:grid-cols-4 gap-6 sm:gap-10 md:gap-12 lg:gap-16 opacity-70 hover:opacity-100 transition duration-500 max-w-4xl md:max-w-5xl lg:max-w-6xl mx-auto">
          {[
            { val: '100%', label: 'ORGANIC' },
            { val: '12K+', label: 'COMMUNITY' },
            { val: '50+', label: 'VARIETIES' },
            { val: 'FREE', label: 'SHIPPING' }
          ].map((stat, idx) => (
            <div key={idx} className="text-center">
              <p className="text-xl sm:text-2xl md:text-4xl lg:text-5xl font-black text-white mb-1 md:mb-2 hover:text-amber-500 transition-colors">
                {stat.val}
              </p>
              <p className="text-[9px] sm:text-[10px] md:text-sm text-stone-400 uppercase tracking-widest font-bold">
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
