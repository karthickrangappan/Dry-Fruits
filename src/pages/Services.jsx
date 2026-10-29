import React from 'react';
import PageHeader from '../components/layout/PageHeader';
import { useNavigate } from 'react-router-dom';
import {
    HiOutlineTruck,
    HiOutlineShieldCheck,
    HiOutlineShoppingBag,
    HiOutlineSparkles,
    HiOutlineRefresh,
    HiOutlineChatAlt2
} from 'react-icons/hi';

const Services = () => {
    const navigate = useNavigate();

    const services = [
        {
            icon: <HiOutlineTruck />,
            title: "Climate-Controlled Shipping",
            desc: "Every order is packed and shipped in temperature-stable environments to preserve the delicate natural oils and crunch of our treasures."
        },
        {
            icon: <HiOutlineShieldCheck />,
            title: "Purity Certification",
            desc: "We provide lab-certified purity reports for our high-end batches, ensuring 100% organic and pesticide-free products."
        },
        {
            icon: <HiOutlineShoppingBag />,
            title: "Bespoke Gifting",
            desc: "Create your own luxury gift hampers for corporate events or personal celebrations, handcrafted with artisanal packaging."
        },
        {
            icon: <HiOutlineSparkles />,
            title: "Nutritional Consulting",
            desc: "Connect with our wellness experts for personalized dry fruit consumption guides tailored to your specific health goals."
        },
        {
            icon: <HiOutlineRefresh />,
            title: "Auto-Restock Subscriptions",
            desc: "Never run out of your favorites. Set up flexible recurring orders with an exclusive 10% discount on every delivery."
        },
        {
            icon: <HiOutlineChatAlt2 />,
            title: "24/7 Wellness Support",
            desc: "Have a question about storage or recipe ideas? Our dedicated nature-conscious team is always a message away."
        }
    ];

    return (
        <main className="bg-white min-h-screen">

            {/* Page Header */}
            <PageHeader
                title="Nature Services"
                subtitle="We're committed to delivering nature's finest treasures with unparalleled service quality."
            />

            {/* Services Section */}
            <section className="bg-white py-24 relative z-10">
                <div className="max-w-7xl mx-auto px-4 md:px-8">

                    {/* Section Heading */}
                    <div className="text-center max-w-3xl mx-auto mb-20">

                        <p className="text-amber-600 font-black text-[10px] uppercase tracking-[0.3em] mb-4 text-center">
                            Beyond Products
                        </p>

                        <h2 className="text-4xl md:text-5xl font-black text-stone-900 tracking-tighter mb-8 text-center leading-tight">
                            Elevating Your <br />
                            <span className="text-amber-600 italic font-serif">
                                Wellness Experience
                            </span>
                        </h2>

                        <p className="text-stone-500 font-medium leading-relaxed text-center">
                            Our relationship with you doesn't end at the checkout. We provide a suite of services designed to ensure the freshness, authenticity, and enjoyment of your premium dry fruits.
                        </p>

                    </div>

                    {/* Service Cards */}
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">

                        {services.map((service, idx) => (

                            <div
                                key={idx}
                                className="group relative p-8 rounded-3xl bg-white/60 backdrop-blur-lg border border-white/40 shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-3"
                            >

                                {/* Hover Gradient */}
                                <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-purple-200/20 to-amber-200/20 opacity-0 group-hover:opacity-100 transition duration-500"></div>

                                {/* Card Content */}
                                <div className="relative z-10 flex flex-col items-center text-center">

                                    {/* Icon */}
                                    <div className="w-16 h-16 flex items-center justify-center rounded-2xl bg-gradient-to-br from-amber-100 to-purple-100 text-amber-600 mb-6 shadow-md group-hover:scale-110 group-hover:rotate-3 transition duration-300">

                                        <span className="text-2xl">
                                            {service.icon}
                                        </span>

                                    </div>

                                    {/* Title */}
                                    <h3 className="text-2xl font-bold text-stone-800 mb-3">
                                        {service.title}
                                    </h3>

                                    {/* Description */}
                                    <p className="text-stone-600 leading-relaxed">
                                        {service.desc}
                                    </p>

                                </div>

                            </div>

                        ))}

                    </div>

                </div>
            </section>

            {/* CTA Section */}
            <section className="max-w-7xl mx-auto px-4 md:px-8 pb-32">

                <div
                    className="relative rounded-[5rem] p-16 md:p-24 text-center overflow-hidden group bg-cover bg-center"
                    style={{ backgroundImage: "url('/cta.jpg')" }}
                >

                    {/* Dark Overlay */}
                    <div className="absolute inset-0 bg-stone-900/60"></div>

                    {/* CTA Content */}
                    <div className="relative z-10">

                        <h2 className="text-4xl md:text-6xl font-black text-white mb-8 tracking-tighter text-center">
                            Ready to{" "}
                            <span className="text-amber-500 italic font-serif">
                                Experience
                            </span>{" "}
                            Nature?
                        </h2>

                        <p className="text-white/80 font-medium mb-12 max-w-2xl mx-auto text-center">
                            Join our community of over 12,000 health-conscious individuals who trust KK Dry Fruits for their daily nutritional treasures.
                        </p>

                        <button
                            onClick={() => navigate("/shop")}
                            className="px-12 py-5 bg-amber-600 text-white rounded-3xl font-black uppercase tracking-widest text-xs hover:bg-white hover:text-stone-900 transition-all transform hover:-translate-y-1 shadow-2xl shadow-amber-600/20"
                        >
                            Start Shopping Now
                        </button>

                    </div>

                </div>

            </section>

        </main>
    );
};

export default Services;