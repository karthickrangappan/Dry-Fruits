import React from "react";
import { HiTruck, HiShieldCheck, HiCurrencyRupee } from 'react-icons/hi';

const features = [
    {
        id: 1,
        title: "Fast Delivery",
        desc: "Fresh dry fruits delivered directly to your doorstep in 24-48 hours.",
        icon: HiTruck
    },
    {
        id: 2,
        title: "Quality Assured",
        desc: "Strict quality checks for every batch to ensure premium standards.",
        icon: HiShieldCheck
    },
    {
        id: 3,
        title: "Best Price",
        desc: "Get the best value for money with our competitive direct-to-consumer pricing.",
        icon: HiCurrencyRupee
    }
];

export default function Feature() {
  return (
    <section className="bg-white py-20">
        <div className="max-w-7xl   mx-auto px-4 grid grid-cols-1 md:grid-cols-3 gap-8">
            {features.map((feature) => (
                <div key={feature.id} className="group p-8 shadow-xl rounded-2xl flex flex-col justify-between items-center p-10 bg-purple-100/30 hover:bg-purple-100/95 transition-all duration-500">
                    <div className="w-16 h-16 bg-amber-100 flex items-center justify-center rounded-2xl text-amber-600 mb-6 group-hover:scale-110 transition-transform duration-300">
                        <feature.icon className="w-8 h-8" />
                    </div>
                    <h3 className="text-2xl font-black text-stone-800 mb-4 tracking-tight">{feature.title}</h3>
                    <p className="text-stone-600 leading-relaxed font-medium">
                        {feature.desc}
                    </p>
                </div>
            ))}
        </div>
      </section>
  );
}