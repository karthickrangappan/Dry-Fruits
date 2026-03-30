import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';
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
    <section className="relative bg-gradient-to-br from-amber-50 via-white to-amber-100 min-h-screen flex items-center overflow-hidden">
      <div className="max-w-7xl mx-auto w-full px-4 sm:px-6 lg:px-12">

      <div className="absolute inset-0 opacity-20 bg-[radial-gradient(circle_at_top,_#f59e0b,_transparent_60%)]" />

      <div className="max-w-7xl mx-auto w-full grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-10 lg:gap-16 items-center">

        {/* LEFT CONTENT */}
        <div className="z-10 text-center md:text-left">

          {/* SAME STYLE AS CATEGORY PAGE */}
          <h4 className="text-amber-600 font-black uppercase tracking-[0.3em] text-xs sm:text-sm mb-3 sm:mb-4">
            Explore Products
          </h4>

          <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-black text-stone-900 leading-tight mb-4 sm:mb-6">
            Organic <br />
            <span className="text-amber-600">Dry Fruits</span>
          </h1>

          <p className="text-stone-500 font-bold text-[13px] sm:text-sm md:text-base mb-6 sm:mb-8 max-w-[18rem] sm:max-w-lg mx-auto md:mx-0 leading-6 sm:leading-relaxed italic px-2 sm:px-0">
            "Experience the perfect blend of taste and health with our premium selections."
          </p>

          <div className="flex flex-col sm:flex-row items-center md:items-start gap-3 sm:gap-4 justify-center md:justify-start">
            <button
              onClick={() => navigate('/shop')}
              className="inline-flex w-auto px-4 sm:px-6 py-2.5 sm:py-3 bg-amber-600 text-white font-black rounded-xl md:rounded-2xl shadow-xl hover:bg-amber-700 transition-all duration-300 text-xs sm:text-sm md:text-base uppercase tracking-[0.2em] transform hover:-translate-y-1"
            >
              Shop Now
            </button>

            <button className="inline-flex w-auto px-4 sm:px-6 py-2.5 sm:py-3 border border-stone-300 font-black rounded-xl md:rounded-2xl text-xs sm:text-sm md:text-base uppercase tracking-[0.2em] hover:bg-stone-100 transition-all duration-300 transform hover:-translate-y-1">
              Explore
            </button>
          </div>
        </div>

        {/* RIGHT IMAGE */}
        <div className="relative flex justify-center md:justify-end">

          <div className="absolute w-[70%] sm:w-[80%] md:w-full h-[70%] sm:h-[80%] md:h-full bg-amber-200 blur-3xl opacity-30 rounded-full" />

          <div className="w-full max-w-[240px] sm:max-w-[300px] md:max-w-[380px] lg:max-w-[450px] xl:max-w-[520px]">
            <Swiper
              modules={[Autoplay]}
              loop
              autoplay={{ delay: 3000, disableOnInteraction: false }}
            >
              {bannerProducts.map((product) => (
                <SwiperSlide key={product.id}>
                  <div className="flex justify-center items-center">
                    <img
                      src={product.image}
                      alt={product.name}
                      className="w-full h-auto max-h-[220px] sm:max-h-[260px] md:max-h-[320px] lg:max-h-[380px] xl:max-h-[420px] object-contain drop-shadow-2xl transition-transform duration-700 hover:scale-105"
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
