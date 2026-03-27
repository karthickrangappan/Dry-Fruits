import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import { HiStar } from "react-icons/hi";
import "swiper/css";

const testimonials = [
  {
    id: 1,
    name: "James Anderson",
    role: "Nutritionist",
    comment:
      "The quality of almonds and walnuts from DryFruits is unparalleled. nuts from here for maximum health and value.",
    rating: 5,
    image:
      "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80&w=200",
  },
  {
    id: 2,
    name: "Sarah Jenkins",
    role: "Home Chef",
    comment:
      "These Turkish apricots are a game-changer for my baking. The delivery is fast, and the packaging is beautiful!",
    rating: 5,
    image:
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=200",
  },
  {
    id: 3,
    name: "Michael Chen",
    role: "Fitness Enthusiast",
    comment:
      "I've tried many brands, but the pumpkin and flax seeds here are the best.Great source of clean protein for my workouts.",
    rating: 5,
    image:
      "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80&w=200",
  },
  {
    id: 4,
    name: "Elena Rodriguez",
    role: "Gourmet Connoisseur",
    comment:
      "The Medjool dates are like literal candy. Soft, sweet, and pure luxury. You can really tell they care about sourcing.",
    rating: 5,
    image:
      "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&q=80&w=200",
  },
  {
    id: 5,
    name: "David Wilson",
    role: "Daily Customer",
    comment:
      "Fast shipping, premium quality, and excellent customer service. My pantry is never without their almonds now.",
    rating: 5,
    image:
      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=200",
  },
];

const Testimonials = () => {
  return (
    <section className="py-24 bg-gradient-to-br from-white via-purple-50 to-amber-50 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 md:px-8 relative z-10">
        <div className="text-center mb-16">
          <span className="text-amber-600 text-xs font-bold uppercase tracking-[0.3em] bg-amber-100 px-4 py-2 rounded-full mb-6 inline-block">
            Community Voice
          </span>

          <h2 className="text-4xl md:text-5xl font-extrabold text-stone-900 mb-6 tracking-tight">
            What Our Customers <span className="text-amber-600">Say</span>
          </h2>

          <p className="text-stone-500 font-medium max-w-2xl mx-auto leading-relaxed">
            Join thousands of happy customers enjoying premium dry fruits.
          </p>
        </div>

        <div className="cursor-grab active:cursor-grabbing">
          <Swiper
            modules={[Autoplay]}
            spaceBetween={30}
            slidesPerView={1}
            loop={true}
            autoplay={{
              delay: 3500,
              disableOnInteraction: false,
            }}
            breakpoints={{
              640: { slidesPerView: 2 },
              1024: { slidesPerView: 3 },
            }}
          >
            {testimonials.map((item) => (
              <SwiperSlide key={item.id} className="h-full p-10">
                <div className="group h-full p-8 rounded-3xl  bg-white/70 backdrop-blur-lg shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 flex flex-col justify-between">
                  

                  <blockquote className="text-stone-700 font-medium leading-relaxed mb-8 text-center flex-grow">
                    <p className="italic">{item.comment}</p>
                  </blockquote>

                  <div className="flex items-center gap-4 pt-6 border-t border-stone-200/60">
                    <img
                      src={item.image}
                      alt={item.name}
                      className="w-14 h-14 rounded-2xl object-cover shadow-md group-hover:scale-110 transition duration-500"
                    />
                    <div>
                      <h4 className="font-bold text-stone-900">
                        {item.name}
                      </h4>
                      <p className="text-xs font-semibold uppercase tracking-widest text-amber-600 mt-1">
                        {item.role}
                      </p>
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