import React from 'react';
import PageHeader from '../components/layout/PageHeader';
import {
    HiOutlineLightBulb,
    HiOutlineUserGroup,
    HiOutlineGlobeAlt
} from 'react-icons/hi';

const About = () => {
    return (
        <main className="bg-white min-h-screen">

            {/* Page Header */}
            <PageHeader title="Our Story Culture" />

            {/* Our Story Section */}
            <section className="bg-white py-24 relative z-10">
                <div className="max-w-7xl mx-auto px-4 md:px-8">

                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">

                        {/* Left Content */}
                        <div>
                            <p className="text-amber-600 font-black text-[10px] uppercase tracking-[0.3em] mb-4">
                                Established 2024
                            </p>

                            <h2 className="text-4xl lg:text-6xl font-black text-stone-900 tracking-tighter mb-8 leading-none">
                                Pure Nature <br />
                                <span className="text-amber-600 italic font-serif">
                                    In Every Bite
                                </span>
                            </h2>

                            <div className="space-y-6 text-stone-500 font-medium leading-relaxed max-w-xl">
                                <p>
                                    At KK Dry Fruits, we believe that the best food doesn't need to be engineered—it just needs to be sourced with care. Our journey began with a simple mission: to bring the world's most premium, sun-dried treasures directly to your table.
                                </p>

                                <p>
                                    We work closely with local farmers and sustainable orchards across the globe to ensure every walnut, almond, and fig meets our rigorous standards for quality, texture, and nutritional value.
                                </p>
                            </div>

                            {/* Statistics */}
                            <div className="grid grid-cols-2 gap-10 mt-12">

                                <div>
                                    <p className="text-4xl font-black text-stone-900 tracking-tighter mb-2">
                                        12k+
                                    </p>

                                    <p className="text-[10px] font-black text-stone-400 uppercase tracking-widest leading-tight">
                                        Health-Conscious
                                        <br />
                                        Customers
                                    </p>
                                </div>

                                <div>
                                    <p className="text-4xl font-black text-stone-900 tracking-tighter mb-2">
                                        50+
                                    </p>

                                    <p className="text-[10px] font-black text-stone-400 uppercase tracking-widest leading-tight">
                                        Premium Varieties
                                        <br />
                                        Curated
                                    </p>
                                </div>

                            </div>
                        </div>

                        {/* About Image */}
                        <div className="relative group">

                            <div className="absolute inset-0 bg-stone-100/50 rounded-[4rem] transform rotate-3 -z-10 group-hover:rotate-1 transition-transform duration-700" />

                            <div className="bg-stone-50 rounded-[4rem] overflow-hidden border border-stone-100 p-4">

                                <img
                                    src="/hero-main.png"
                                    alt="About Us"
                                    className="w-full h-[600px] object-cover rounded-[3rem] transform group-hover:scale-105 transition-transform duration-1000"
                                />

                            </div>

                        </div>

                    </div>
                </div>
            </section>

            {/* Core Pillars Section */}
            <section className="bg-stone-50 py-32 border-t border-stone-100">

                {/* Section Heading */}
                <div className="max-w-7xl mx-auto px-4 md:px-8 text-center mb-24">

                    <p className="text-amber-600 font-black text-[10px] uppercase tracking-[0.3em] mb-4 text-center">
                        Our Core Pillars
                    </p>

                    <h2 className="text-4xl md:text-5xl font-black text-stone-900 tracking-tighter text-center">
                        The Values That{' '}
                        <span className="text-amber-600 italic font-serif">
                            Guide Us
                        </span>
                    </h2>

                </div>

                {/* Core Pillar Cards */}
                <div className="max-w-7xl mx-auto px-4 md:px-8 grid grid-cols-1 md:grid-cols-3 gap-10">

                    {[
                        {
                            icon: <HiOutlineLightBulb />,
                            title: "Sourcing Excellence",
                            desc: "We prioritize direct relationships with growers who share our commitment to organic and sustainable farming."
                        },
                        {
                            icon: <HiOutlineUserGroup />,
                            title: "Human Wellness",
                            desc: "Our products are selected not just for taste, but for their ability to fuel a vibrant and energetic lifestyle."
                        },
                        {
                            icon: <HiOutlineGlobeAlt />,
                            title: "Ethical Harvest",
                            desc: "From tree to table, we ensure every step respects our planet and the hands that harvest its bounty."
                        }
                    ].map((item, idx) => (

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
                                        {item.icon}
                                    </span>

                                </div>

                                {/* Title */}
                                <h3 className="text-2xl font-bold text-stone-800 mb-3">
                                    {item.title}
                                </h3>

                                {/* Description */}
                                <p className="text-stone-600 leading-relaxed">
                                    {item.desc}
                                </p>

                            </div>

                        </div>

                    ))}

                </div>

            </section>

        </main>
    );
};

export default About;