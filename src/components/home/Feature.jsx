import React from "react";
import { HiTruck, HiShieldCheck, HiCurrencyRupee } from "react-icons/hi";

const features = [
  {
    id: 1,
    title: "Fast Delivery",
    desc: "Fresh dry fruits delivered directly to your doorstep in 24-48 hours.",
    icon: HiTruck,
  },
  {
    id: 2,
    title: "Quality Assured",
    desc: "Strict quality checks for every batch to ensure premium standards.",
    icon: HiShieldCheck,
  },
  {
    id: 3,
    title: "Best Price",
    desc: "Get the best value for money with our competitive direct-to-consumer pricing.",
    icon: HiCurrencyRupee,
  },
];

export default function Feature() {
  return (
    <section className="bg-white py-24">
      <div className="max-w-7xl mx-auto px-6 text-center mb-16">
        <h2 className="text-4xl font-extrabold text-stone-800 mb-4">
          Why Choose Us
        </h2>
        <p className="text-stone-500 text-lg">
          Premium dry fruits with unmatched quality and service
        </p>
      </div>

      <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 md:grid-cols-3 gap-10">
        {features.map((feature) => (
          <div
            key={feature.id}
            className="group relative p-8 rounded-3xl bg-white/60 backdrop-blur-lg border border-white/40 shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-3"
          >
            <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-purple-200/20 to-amber-200/20 opacity-0 group-hover:opacity-100 transition duration-500"></div>

            <div className="relative z-10 flex flex-col items-center text-center">
              <div className="w-16 h-16 flex items-center justify-center rounded-2xl bg-gradient-to-br from-amber-100 to-purple-100 text-amber-600 mb-6 shadow-md group-hover:scale-110 group-hover:rotate-3 transition duration-300">
                <feature.icon className="w-8 h-8" />
              </div>

              <h3 className="text-2xl font-bold text-stone-800 mb-3">
                {feature.title}
              </h3>

              <p className="text-stone-600 leading-relaxed">
                {feature.desc}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}